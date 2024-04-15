import React from "react";
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';
import { useState , useEffect } from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import { Link , useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import AuthWrapper from "./AuthWrapper";

const Login = () => {

    useEffect( ()=>{
        document.title = "Student Login";
        },[]);
     
const [logindata , setlogindata] = useState ( {} ); 
const [jwt, setjwt] = useState('');
const navigate = useNavigate();

//form Handler
const handleForm = (e) => {
    e.preventDefault();
    postData(logindata);
    console.log(logindata);
    
};

//Post Data To Server
const postData = (logindata) => {
      axios.post(`${baseurl}/login`, logindata).then(
        (response) => {
                 console.log("LoggedIn")
                 alert('Log In Successful')
                 console.log('JWT Token ');
                 console.log(response.data.jwt);
                 setjwt(response.data.jwt);
  //When Website is Hosted On Cloud Set the Cookie with  {secure: true, httpOnly: true } until them setting it OFF
                Cookies.set('token', response.data.jwt);
                if (response.data.jwt) {
                    const decodedToken = jwtDecode(response.data.jwt);
                    const values = {
                      rollno: decodedToken.rollno,
                      name: decodedToken.name,
                      email: decodedToken.sub,
                      iat:decodedToken.iat,
                      exp:decodedToken.exp,
                    };
                    const jsonValues = JSON.stringify(values);
                    Cookies.set('user', jsonValues);

        //             const timeUntilExpiration = decodedToken.exp * 1000 - Date.now();
        //             console.log('Time ',timeUntilExpiration); // Convert 'exp' to milliseconds
        //             setTimeout(() => {
        //   // This code will run once the timeout is reached
        //             console.log('Token has expired');
        //             Cookies.remove('token');
        //             Cookies.remove('user');
        //             console.log('Cookies Removed')
        //             alert('Session Expired , Please Re-Login To continue');
        //             navigate('/LogIn');
        //             }, timeUntilExpiration);
        //             // Proceed with decoding
                  } else {
                    console.log('In Login Error in Decoding');
                  }

                navigate('/' , { state: { token: response.data.jwt} });
        } ,
        (error) => {
                  console.log(error);
                  console.log("Log In Failed");
        }
      );

};



    return (

        <div>
        <div class="form-container" className="form-container" style={{
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
  width: '400px',
  margin : '0 auto'
}}>
    <h1 class="text-center my-3">Enter Details To Log In</h1> 
           <Form onSubmit={handleForm}>
        <FormGroup>
            <Input type="email" placeholder="Enter Email" name="email" id="email" onChange= { (e)=> {
                setlogindata({...logindata,email:e.target.value}); 
            } }                       
             style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            <Input type="password" placeholder="Enter Password" name="password" id="password" onChange= { (e)=> {
                setlogindata({...logindata,password:e.target.value}); 
            } }style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 

        </FormGroup>
        <Container>
        <Button color='success' type = "submit">
                Submit
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            onClick = { (e) => {
                setlogindata({});
            }}>
                Reset
            </Button>
        </Container>
    </Form>
    </div> 
    </div>

    );
}

export default Login;

// https://medium.com/@ryanchenkie_40935/react-authentication-how-to-store-jwt-in-a-cookie-346519310e81
import React from 'react';
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';
import { useState , useEffect } from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import { Link , useNavigate} from 'react-router-dom';

//Form
const Sign=()=> {
        useEffect( ()=>{
            document.title = "Register";
            },[]);
         
    const [student , setstudent] = useState ( {} ); 
    const [email, setEmail] = useState('');
    
    //form Handler
    const handleForm = (e) => {
        e.preventDefault();
        postData(student);
        console.log(student);
        
    };
     
    const navigate = useNavigate();
    //Post Data To Server
    const postData = (data) => {
          axios.post(`${baseurl}/signup`, data).then (
            (response) => {
                     console.log(response);
                     console.log("Signuped")
                     alert('Sign Up Successfull Please Check Email for OTP Verification')
                     setEmail(student.email);
                     navigate('/verify' , { state: { email: student.email } });
            } ,
            (error) => {
                      console.log(error);
                      console.log("Failed")
            }
          )

    };







return (
    <div>
    <div class="form-container" className="form-container" style={{
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
  width: '400px',
  margin: '0 auto'
}}>
    <h1 class="text-center my-3">Enter Details to Sign Up</h1>
    <Form onSubmit={handleForm}>
        <FormGroup>
            

            <Input type="text" placeholder="Enter Full Name" name="name" id="name" onChange= { (e)=> {
                setstudent({...student,name:e.target.value});
            } }                         style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 

           
            <Input type="email" placeholder="Enter Email" name="email" id="email" onChange= { (e)=> {
                setstudent({...student,email:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)', }} />

           <Input type="password" placeholder="Enter Password" name="password" id="password" onChange= { (e)=> {
                setstudent({...student,password:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 

            
            <Input type="Int" placeholder="Enter Mobile No" name="mobNo" id="mobNo" onChange= { (e)=> {
                setstudent({...student,mobNo:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />

            

            
        </FormGroup>
        <Container>
            <Button color='success' type = "submit">
                Submit
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            onClick = { (e) => {
                setstudent({});
            }}>
                Reset
            </Button>
        </Container>
    </Form>
    </div>
    </div>
    );
}

export default Sign;
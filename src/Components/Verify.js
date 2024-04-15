import React from 'react';
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';
import { useState , useEffect } from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import { Link , useNavigate , useLocation} from 'react-router-dom';

//Form
const Verify=()=> {
        useEffect( ()=>{
            document.title = "Email OTP Verification";
            },[]);
         
    const [otp , setotp] = useState ( {} ); 
    const location = useLocation();
    //form Handler
    const handleForm = (e) => {
        console.log(otp);
        postData(otp);
        e.preventDefault();
    };
     
    const navigate = useNavigate();
    const email = location.state && location.state.email;
    console.log("This is Verify"+email);
    //Post Data To Server
    const postData = (otp) => {
          axios.post(`${baseurl}/verify?email=${email}&otp=${otp.otp}`,otp).then (
            (response) => {
                     console.log(response);
                     console.log("Verified")
                     alert('OTP Verification Successfull')
                     navigate('/LogIn');
            } ,
            (error) => {
                      console.log(error);
                      console.log("Verification Failed")
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
    <h1 class="text-center my-3">OTP Profile Verification</h1>
    <Form onSubmit={handleForm}>
        <FormGroup>
            <Input type="Long" placeholder="Enter OTP" name="otp" id="otp" onChange= { (e)=> {
                setotp({...otp,otp:e.target.value});
            } }                         style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            
        </FormGroup>
        <Container>
            <Button color='success' type = "submit">
                Submit
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            onClick = { (e) => {
                setotp({});
            }}>
                Reset
            </Button>
        </Container>
    </Form>
    </div>
    </div>
    );
}

export default Verify;
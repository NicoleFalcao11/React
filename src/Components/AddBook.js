import React from 'react';
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';
import { useState , useEffect } from 'react';
import axios from 'axios';
import baseurl from '../API/BootAPI';
import {useNavigate , useLocation} from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
//Form
const AddBook=()=> {
        
  const token = Cookies.get('token');
  const d = Cookies.get('user');
  const user = JSON.parse(d);
  const roll = user.rollno;
  const navigate = useNavigate();
  const location = useLocation();
    // useEffect( ()=>{
    //  document.title = "All Books";
    //  getAllBooks();
    //  },[]) 
    useEffect(() => {
      document.title = 'Sell Books';
      if (location.pathname === '/add-book') {
        if (token) {
        } else {
          // If token is not present, show an alert asking the user to log in
          alert('Please Login To Start Selling');
          navigate('/LogIn');
        }
      }
    }, [token, location.pathname]);
         
    const [book , setbooks] = useState ( {sid: roll} ); 
    //form Handler
    const handleForm = (e) => {
        e.preventDefault();
        console.log(book);
        postData(book);
        
    };
     
    
    //Post Data To Server
    const postData = (data) => {
          axios.post(`${baseurl}/bookstore/books`, data ,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json', 
            }
          }
          ).then (
            (response) => {
                     console.log(response);
                     console.log("Book Added");
                     alert('Book put up for Sell Successfully')
            } ,
            (error) => {
                      console.log(error);
                      console.log("Book Not Done")
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
    <h1 class="text-center my-3">Add Book Here</h1>
    <Form onSubmit={handleForm}>
        <FormGroup>
            <Input type="text" placeholder="Enter Book Name" name="bkname" id="bkname" onChange= { (e)=> {
                setbooks({...book,bkname:e.target.value});
            } }                         style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            <Input type="text" placeholder="Enter Book Image" name="bkimg" id="bkimg" onChange= { (e)=> {
                setbooks({...book,bkimg:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 

            <Input type="text" placeholder="Enter Book Description/Condition" name="condi" id="bkcondi" onChange= { (e)=> {
                setbooks({...book,condi:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)', }} />

            <Input type="text" placeholder="Book Semester" name="semester" id="semester" onChange= { (e)=> {
                setbooks({...book,semester:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />

            <Input type="Int" placeholder="Enter Book Price" name="price" id="price" onChange= { (e)=> {
                setbooks({...book,price:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />

           <Input type="Int" placeholder="Enter Book Subject" name="subject" id="subject" onChange= { (e)=> {
                setbooks({...book,subject:e.target.value});
            } } style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />

            
            
        </FormGroup>
        <Container>
            <Button color='success' type = "submit">
                Submit
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            onClick = { (e) => {
                setbooks({});
            }}>
                Reset
            </Button>
        </Container>
    </Form>
    </div>
    </div>
    );
}

export default AddBook
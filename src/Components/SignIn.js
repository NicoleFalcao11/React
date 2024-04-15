import React from "react";
import { Form,FormGroup,Input,Button,Container } from 'reactstrap';


const SignIn = () => {



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
    <h1 class="text-center my-3">Enter Details To Sign In</h1> 
           <Form >
        <FormGroup>
            <Input type="text" placeholder="Enter Student Name" name="name" id="name" /* onChange= { (e)=> {
                setbooks({...book,bkname:e.target.value}); 
            } }                       */
             style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            <Input type="text" placeholder="Enter Roll No" name="roll_no" id="roll_no" /*onChange= { (e)=> {
                setbooks({...book,bkimg:e.target.value}); 
            } } */ style={{ width: '100%', height: '60px', marginBottom: '10px',  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}}/> 


            <Input type="text" placeholder="Enter Branch and Class" name="grade" id="grade" /* onChange= { (e)=> {
                setbooks({...book,condi:e.target.value});
            } }*/ style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)', }} />


            <Input type="text" placeholder="Enter Password" name="password" id="password" /* onChange= { (e)=> {
                setbooks({...book,avail:e.target.value});
            } }*/ style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />


            <Input type="Int" placeholder="Enter College Email" name="email" id="email"  /* onChange= { (e)=> {
                setbooks({...book,price:e.target.value});
            } }*/ style={{ width: '100%', height: '60px', marginBottom: '10px',boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }} />


            <Input type="Long" placeholder="Enter Mobile No" name="mob_no" id="ob_no"  /* onChange= { (e)=> {
                setbooks({...book,sid:e.target.value});
            } }*/  style={{ width: '100%', height: '60px', marginBottom: '10px', boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)'}} />

            
        </FormGroup>
        <Container>
            <Button color='success' type = "submit">
                Submit
            </Button>
            <Button type='reset' color='warning' style={{ marginLeft: '10px' }}
            >
                Reset
            </Button>
        </Container>
    </Form>
    </div> 
    </div>

    );
}

export default SignIn;
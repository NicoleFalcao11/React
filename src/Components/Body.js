import React from 'react';
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom';

function Body() {
  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '40vh',
  };

  const buttonStyle = {
    width: '220px',
    height: '50px',
    backgroundColor: 'white',
    border: 'none',
    color: 'black',
    fontSize: '20px',
    fontFamily: 'poppins, sans-serif',
    textTransform: 'uppercase',
    boxShadow: '0px 0px 10px #140B5C',
    marginBottom: '10px',
  };

  return (
   
    <div style={buttonContainerStyle} className="button-container">
      {/* <Button color="primary" outline size="lg" style={buttonStyle} > <Link className='list-group-item list-group-item-action' tag='a' to='/SignIn' action>Add Students</Link></Button> */}
      <button class="cta">
    <span class="hover-underline-animation"><a href="/tranfer">Get Started</a></span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
   </button><br></br>

   <button class="cta">
    <span class="hover-underline-animation"><a href="/tranfer">Buy Books</a></span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
   </button><br></br>

   <button class="cta">
    <span class="hover-underline-animation"><a href="/tranfer">Sell Books</a></span>
    <svg viewBox="0 0 46 16" height="10" width="30" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal">
        <path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path>
    </svg>
   </button>
      {/* <Button color="primary" outline size="lg" style={buttonStyle}><Link className='list-group-item list-group-item-action' tag='a' to='/buy' action>Buy Books</Link></Button>
      <Button color="primary" outline size="lg" style={buttonStyle}><Link className='list-group-item list-group-item-action' tag='a' to='/add-book' action>Sell Books</Link></Button> */}
      
    </div>
  );
}
export default Body
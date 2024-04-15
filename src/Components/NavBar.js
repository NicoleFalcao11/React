
import React, { useState , useEffect} from "react";
import { useLocation , useNavigate , Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";

function NavBar() {

  let flag;
  let name , id;
     const navigate = useNavigate();
  if(Cookies.get('user')){
    const d = Cookies.get('user');
    const Data = JSON.parse(d);
    name = Data.name;
    id = Data.rollno;
    flag = true;
  }
  else {
    flag = false;
  }

  const logout = () => {
        Cookies.remove('token');
        Cookies.remove('user');
        navigate('');
  }

    return (
        <div class="navbar">
          {/* <div class="title">The Bond</div>  */}
    <div class="title">The Book Store</div>
    <div class="nav-links">
      <a href="/">Home</a>
      <a href="/buy">Buy</a>
      <a href="/add-book">Sell</a>
      <a href="/register">Sign Up</a>
      <a href="/demo">Demo</a>
      <a href="#">Contact</a> 
      <div class="dropdown">
        
      {flag==true ? ( 
              <a href="#">{name}</a>
            ) : ( 
              <a href="#">My Account</a>
             )}
    
        <div className="dropdown-content">
        {flag === true ? (
    <React.Fragment>
      <a onClick={logout} href="#">
        Logout
      </a>
      <a href="/sold">On Sell</a>
      <a href="/bought">Books Bought</a>
      <a><Link style={{ textDecoration: 'none' }} to={`/cart/${id}`}>My Cart</Link></a>
    </React.Fragment>
  ) : (
    <a href="/LogIn">Login</a>
  )}
          </div>
      </div>
    </div>
  </div>
    );
}
export default NavBar;

import React from "react";
import Body from "./Body";
import BookList from "./Booklist";
import { Row,Col } from "reactstrap";
import web1 from "./books2.png";
import web2 from "./login.png";
import web3 from "./sell.png";
import web4 from "./rent.png";
import { useLocation} from 'react-router-dom';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import AuthWrapper from "./AuthWrapper";

function Bond() {
    let name;
    let flag = false;
    if(Cookies.get('user')){
      const d = Cookies.get('user');
      const Data = JSON.parse(d);
      name = Data.name;
      flag = true;
    }
   
  
  
    return (
      <div>
        <div className="container">
          <div>
            <div className="header">
              {name!==null? (
                <h1>Welcome {name}</h1>
              ) : (
                <h1>Welcome</h1>
              )}
            
        
 
  
        </div>
        
        
      </div>
            </div>
  
               
         
            </div>
  
      );
  }
  export default Bond;
  
  
  
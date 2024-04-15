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

function Home() {
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
              <h1>Welcome to TheBookStore {name}</h1>
            ) : (
              <h1>Welcome to TheBookStore</h1>
            )}
          
      
<h2>Buy, sell, or rent – your one-stop destination for academic essentials!</h2>
<p>Unlock knowledge without breaking the bank – shop smart at TheBookStore</p>

      </div>
      <div className="row1-container">
        <div className="box box-down cyan">
          <h2>BUY</h2>
          <p>Buy Books , stationary etc from college peers</p>
          <img src={web1} alt="" />
        </div>
        <div className="box red">
          <h2>Students can</h2>
          <p>Log In to get Started</p>
          <img src={web2} alt="" />
        </div>
        <div className="box box-down blue">
          <h2>SELL</h2>
          <p>Upload Books ,Items to put on Sell</p>
          <img src={web3} alt="" />
        </div>
      </div>
      <div className="row2-container">
        <div className="box orange">
          <h2>RENT</h2>
          <p>Upload Books ,Items to put on Sell</p>
          <img src={web4} alt="" />
        </div>
      </div>
    </div>
          </div>

              <div
                style={{
                  textAlign: 'center',
                  justifyContent: 'center',
                  height: '15vh'
                }}
              >
                <div className="jumbotron-container">
                  <p className="jumbotron-text">Recently Added Books</p>
                </div>
              </div>
         
              <BookList />
         
          </div>

    );
}
export default Home



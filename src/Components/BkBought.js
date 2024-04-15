import React, { useState , useEffect } from 'react';
import { BookingCard } from './BookingCard';
import Test from './Test';
import baseurl from '../API/BootAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import {useNavigate , useLocation} from 'react-router-dom';
import { Bk } from './Bk';

const BkBought = () => {

  const token = Cookies.get('token');
  const navigate = useNavigate();
  const location = useLocation();
  const d = Cookies.get('user');
  const user = JSON.parse(d);
  const roll = user.rollno;

    useEffect(() => {
      document.title = 'All Books';
          getBkbought();
    }, [token, location.pathname]);

     const getBkbought = () => {
           axios.get(`${baseurl}/student/bought/${roll}`,
           {
             headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json', 
             }
           }
           ).then(
             (response) => {
               //Success
               console.log('My Books Bought');
               console.log(response);
               setBooks(response.data);
               if(response.data == null){
                   alert('No Books Bought It')
               }
             } ,
             (error) => {
               //For Error
               console.log(error);
             }
           )
 
     }


    const removeBkById = (id) => {
      setBooks( books.filter ( (b) => b.id!=id ));
    }



    const [books , setBooks] = useState([
      
    ])

    // {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'1 Year Old', semester:'6' , subject:'SPCC'} ,
    //     {id:'2',bkname:'GV Kumbhojkar' , price:'100',condi:'Good', semester:'6' , subject:'SPCC'} ,
    //     {id:'3',bkname:'GV Kumbhojkar' , price:'100',condi:'Good', semester:'6' , subject:'SPCC'} ,
    //     {id:'4',bkname:'GV Kumbhojkar' , price:'100',condi:'Good', semester:'6' , subject:'SPCC'} ,
  
    return (
      <div className="container" > 
      <div className="row justify-content-center">
        {books.map((book) => (
          <div className="col-md-4 my-5 mx-1" key={book.id} >
           
            <Bk book={book} update={removeBkById}  />
          
          </div>
        ))}
      </div>
      </div>
      );
    };

  export default BkBought;





  
import React, { useState , useEffect } from 'react';
import Book from './Book';
import Test from './Test';
import Card from './Card';
import baseurl from '../API/BootAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import {useNavigate , useLocation} from 'react-router-dom';
import { Button } from 'reactstrap';
import { BookingCard } from './BookingCard';


const SimilarList = ({subject}) => {

  const token = Cookies.get('token');
  const navigate = useNavigate();
  const location = useLocation();
  const sub = subject;

    useEffect(() => {
      document.title = 'All Books';
      if (location.pathname === '/buy') {
        if (token) {
          getAllBooks();
        } else {
          // If token is not present, show an alert asking the user to log in
          alert('Please Login To Get Start Buying');
          navigate('/LogIn');
        }
      }
    }, [token, location.pathname]);

     const getAllBooks = () => {
           axios.get(`${baseurl}/bookstore/books/${sub}`,
           {
             headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json', 
             }
           }
           ).then(
             (response) => {
               //Success
               console.log('In SimilarList console');
               console.log(response);
               setBooks(response.data);
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
        {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC'} ,
        {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC'} ,
        {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC'} ,
        
        
    ])
  
    return (
       <div className="container" > 
      <div className="row justify-content-center">
        {books.map((book) => (
          <div className="col-md-3 my-4 mx-10" key={book.id} >
            <BookingCard book={book} update={removeBkById}  />
          </div>
        ))}
      </div>
      </div>
      );
    };

  export default SimilarList;
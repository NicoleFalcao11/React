import React, { useState , useEffect } from 'react';
import Book from './Book';
import Test from './Test';
import baseurl from '../API/BootAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import {useNavigate , useLocation , useParams , Link} from 'react-router-dom';
import web5 from "./book.png";
import {
  Button,
  IconButton,
  Rating,
  Typography,
} from "@material-tailwind/react";
import { HeartIcon } from "@heroicons/react/24/outline";
import web from "./book.png"; 
import SimilarList from './SimilarList';


export function BkDetails() {
  const token = Cookies.get('token');

  const d = Cookies.get('user');
  const Data = JSON.parse(d);
  const rollno = Data.rollno;

  const navigate = useNavigate();
  
  const {id} = useParams();
  console.log('BkId ',id);
  console.log('RollNo ',rollno);

  const [name, setSellername] = useState("Nicole Falcao");
  const[sellId , setSeller] = useState('')
  const [email, setSellermail] = useState("nicolefalcao2003@gmail.com");
  const [mobno, setSellermob] = useState("");
  const [error , setError] = useState({
    errors:{},
    isError:false,
  });
  
  useEffect(() => {
    document.title = "Book Details";
    getBookById();
}, [id]);

  const getBookById = () => {
    axios.get(`${baseurl}/bookstore/books/${id}` ,
           {
             headers: {
               Authorization: `Bearer ${token}`,
               'Content-Type': 'application/json', 
             }
           } ).then(
      (response) => {
        console.log(response);
        console.log('Book Received')
        setBooks(response.data);
        setSeller(response.data.sellId);
        console.log('Seller Id'+response.data.sellId);
        setSellername(response.data.name);
        console.log('Seller Name'+response.data.name);
        setSellermail(response.data.email);
        setSellermob(response.data.mobno);
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );    
  }
  //Add to Cart
  const addToCart = () => {
    axios.get(`${baseurl}/student/addtocart/${rollno}/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json', 
      }
    } ).then(
    (response) => {
        console.log(response);
        console.log('Book Added to Cart')
        //setBooks(response.data);
        alert('Item Added To cart')
      },
      (error) => {
        console.log('error');
        console.log(error);
      }
    );   
}

const notifySeller = () => {
axios.get(`${baseurl}/bookstore/notify/${email}`,
{
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json', 
  }
} ).then(
(response) => {
    console.log(response);
    console.log('Email Sent')
    setBooks(response.data);
    alert('Email Notification Sent to Seller')
  },
  (error) => {
    console.log('error');
    console.log(error);
  }
); 
}

  const [Book , setBooks] = useState([
    {id:'1',bkname:'GV Kumbhojkar' , price:'100',condi:'Book is only a year old and in good condition', semester:'Semester 6' , subject:'Subject is SPCC' , avail:true} 
    
])
  
  
  return (
    <section className="py-16 px-8">
      <div className="mx-auto container grid place-items-center grid-cols-1 md:grid-cols-2">
      <img
        src={web}
        alt="pink blazer"
       className="w-[450px] h-[400px]" />
       
        <div className='pl-20'>
          <Typography className="mb-4" variant="h3">
          {Book.bkname}Stuart and Russel
          </Typography>
          <Typography variant="h5">{Book.price}</Typography>
          <Typography className="mt-4 text-base font-normal leading-[27px] !text-black-500">
          {Book.condi}Book is only a year old and in good condition , Book is only a year old and in good condition<br></br>Semester : {Book.semester} Book is only a year old and in good condition<br></br>Subject :SPCC{Book.subject}
          </Typography>
          <Typography className="mt-4 text-base font-normal leading-[27px] !text-black-500">
          Seller Information :{name} <br></br>Email : {email}</Typography>
          
          <div className="my-8 flex items-center gap-2">
            <Rating value={4} className="text-amber-500" />
            <Typography className="!text-sm font-bold !text-black-500">
              4.0/5 (10 reviews)
            </Typography>
          </div>
        
          <div className="mb-4 flex w-full items-center gap-8 md:w-1/2 ">
        
            <Button className="w-52 bg-[#140B5C]" onClick={() => addToCart()}>
              WishList
            </Button>
        
            {/* <IconButton color="gray" variant="text" className="shrink-0">
              <HeartIcon className="h-6 w-6" />
            </IconButton> */}
           <Link style={{ textDecoration: 'none' }} to={`/Pay/${id}/${sellId}`}>  
            <Button className="bg-[#140B5C] w-52">
              Buy
            </Button>
            </Link>

           
                <Button className="bg-[#140B5C]" onClick={() => notifySeller()} >Notify</Button>
            
          </div>
       
          
        </div>
      </div>
    
      <div class="flex flex-col items-center mt-5">  <h5 class="text-center font-medium text-gray-900 mt-4">Similar Books</h5>  </div>
      <SimilarList subject={Book.subject}/>
    </section>
  );
}

export default BkDetails;
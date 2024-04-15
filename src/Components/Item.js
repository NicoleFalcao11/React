import React from 'react';
import web from "./book.png";
import { useNavigate, useLocation, useParams,Link } from 'react-router-dom';
import baseurl from '../API/BootAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import {
  Button
} from "@material-tailwind/react";

const Item = ({item,update,avail}) => {
    const id = item.id;
    const a = avail;
    console.log('Item '+item.avail);
    console.log('avail?'+a);
    const token = Cookies.get('token');

    const d = Cookies.get('user');
    const Data = JSON.parse(d);
    const rollno = Data.rollno;
    // console.log("In Items "+rollno)
    // console.log("In Id"+id);
    //update(id,item.price)
    const navigate = useNavigate();

    const deleteById = () => {
    axios.delete(`${baseurl}/student/deletecart/${rollno}/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json', 
          }
        }
        ).then(
      (response) => {
        // Success
        console.log("Item Removed Successfully");
        console.log(response);
        //del(id,price);
        navigate(0);
      },
      (error) => {
        // For Error
        console.log(error);
        alert('Error Occurred , Try Again');
      }
    );
    
  };

      return(
        
        <div className="justify-between mb-6 rounded-lg border-black bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img src={web} alt="product-image" className="w-full rounded-lg sm:w-40" />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
        <div className="mt-5 sm:mt-0">
          <h2 className="text-lg font-bold text-gray-900">{item.bkname}</h2>
           {avail === false ? (
          <h2 className="text-lg font-bold text-gray-900">Item is no longer Available</h2>
           ) : null}
           <p className="mt-1 text-xs text-gray-700">{item.subject}</p>
          </div>

          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center space-x-4">
              <p className="text-sm mt-3">{item.price}</p>

              <Button onClick={() => deleteById()}>  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>  
           </Button>

            </div>
          </div>
        </div>
      </div>
      )

}
export default Item;
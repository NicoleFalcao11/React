// EXTRA Code

// <div className="wrapper">
//         <div className="product-img">
//         <img src={web5} height="325" width="325px" alt="Book" />  
//         {/* http://bit.ly/2tMBBTd  */}
      //   </div>
      //   <div className="product-info">
      //     <div className="product-text">
      //       <h1>{book.bkname}</h1>
      //       <h2>{book.condi}</h2>
      //       <h2>{book.subject}</h2>
      //       <p><br /></p>
      //     </div>
        
      //   </div>
      // </div> 


      //Old Bootstrap
    //   <div class="card mb-3">
    //   <div class="row g-0">
    //     <div class="col-md-4">
    //     <img src={web5} style={{ width: "500px", height: "300px" }} className="img-fluid rounded-start" alt="Sample Image" />
    
    //     </div>
    //     <div class="col-md-8">
    //       <div class="card-body">
    //         <h5 class="card-title">Harvest Vase</h5>
    //         <p class="card-text">Harvest Vases are a reinterpretation of peeled fruits and vegetables as functional objects. The surfaces<br />appear to be sliced and pulled aside,<br />allowing room for growth</p>
    //       </div>
    //     </div>
    //   </div>
      
    // </div>

    //BEST Bootstrap
  //   <div className="card float-right">
  //   <div className="row">
  //     <div className="col-sm-6">
  //       <img className="d-block w-100 h-100" src={web5} alt="" />
  //     </div>
  //     <div className="col-sm-6">
  //       <div className="card-block">
  //         {/* <h4 className="card-title">Small card</h4> */}
  //         <p>Copy paste the HTML and CSS.</p>
  //         <p>Change around the content for awesomeness</p>
  //         <br />
  //         <a href="#" className="btn btn-primary btn-sm float-right">Read More</a>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  import React, { Fragment, useState, useEffect } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import baseurl from '../API/BootAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from 'reactstrap';
import { BookingCard } from './BookingCard';

export default function Demo() {
  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ];
  const token = Cookies.get('token');
  const navigate = useNavigate();
  const location = useLocation();
  const [books, setBooks] = useState([
    { id: '1', bkname: 'GV Kumbhojkar', price: '100', condi: 'Book is only a year old and in good condition', semester: 'Semester 6', subject: 'Subject is SPCC' },
    { id: '1', bkname: 'GV Kumbhojkar', price: '100', condi: 'Book is only a year old and in good condition', semester: 'Semester 6', subject: 'Subject is SPCC' },
    { id: '1', bkname: 'GV Kumbhojkar', price: '100', condi: 'Book is only a year old and in good condition', semester: 'Semester 6', subject: 'Subject is SPCC' },
    { id: '1', bkname: 'GV Kumbhojkar', price: '100', condi: 'Book is only a year old and in good condition', semester: 'Semester 6', subject: 'Subject is SPCC' },
  ]);

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
    axios.get(`${baseurl}/bookstore/books`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      }
    ).then(
      (response) => {
        //Success
        console.log('In BookList console');
        console.log(response);
        setBooks(response.data);
      },
      (error) => {
        //For Error
        console.log(error);
      }
    )

  }

  const removeBkById = (id) => {
    setBooks(books.filter((b) => b.id != id));
  }

  return (
    <div className="bg-white">
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-6">
          <div className="flex items-center flex-grow"></div>
          <div className="flex items-center">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={
                              (option.current ? 'font-medium text-gray-900' : 'text-gray-500') +
                              (active ? ' bg-gray-100' : '') +
                              ' block px-4 py-2 text-sm'
                            }
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>

        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="lg:col-span-3">{/* Your content */}</div>
        </section>
      </main>
      <div className="container">
        <div className="row justify-content-center">
          {books.map((book) => (
            <div className="col-md-4 my-5 mx-1" key={book.id} >
              <BookingCard book={book} update={removeBkById} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


import React, { useEffect, useState } from 'react';
import Item from "./Item";
import baseurl from '../API/BootAPI';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const Cart = ({ item, update }) => {
  const token = Cookies.get('token');
  const d = Cookies.get('user');
  const Data = JSON.parse(d);
  const roll = Data.rollno;
  console.log('RollNo ',roll);

  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    document.title = 'My Cart';
    getCartItems();
  }, []);

  const [total, setTotal] = useState(0.0);
  const [items, setItems] = useState([
    { id: '1', bkname: 'GV Kumbhojkar', price: '100', subject: 'SPCC' , avail:'0'},
    { id: '2', bkname: 'Stuart and Russell', price: '100', subject: 'CSS', avail:'1' },
  ]);
 
  const getCartItems = () => {
    axios.get(`${baseurl}/student/getCart/${roll}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      }
    }).then(
      (response) => {
        console.log('In Cart console');
        console.log(response);
        setItems(response.data);
        console.log("NEW "+response.data)
      },
      (error) => {
        console.log(error);
      }
    )
  }

  const removeItemById = (id) => {
        setItems( items.filter ( (b) => b.id!=id ));
      }

  const calculateTotalPrice = (itemsArray) => {
    let totalPrice = 0;
    itemsArray.forEach((item) => {
      totalPrice += parseFloat(item.price);
    });
    return totalPrice.toFixed(2);
  };

  useEffect(() => {
    const totalPrice = calculateTotalPrice(items);
    setTotal(totalPrice);
  }, [items]);

  return (
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>

      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3 border-black">
          {items.map((item) => (
            <Item key={item.id} item={item}  update={() => removeItemById(item.id)} avail={item.avail}/>
          ))}
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          {/* <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">$129.99</p>
          </div> */}
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div className="">
              <p className="mb-1 text-lg font-bold">${total}</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" style={{ backgroundColor: '#140B5C' }}>Pay Sellers Individually</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;


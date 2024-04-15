import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Form, FormGroup, Input, Button, Container } from 'reactstrap';
import { useNavigate, useLocation ,useParams} from 'react-router-dom';
//import useRazorpay from 'react-razorpay';
import useRazorpay from "react-razorpay";

const RazorPay = () => {
  
    const [Razorpay] = useRazorpay();
  // State for amount
  const navigate = useNavigate();
  const [amount, setAmount] = useState(0);

  // User data
  const token = Cookies.get('token');

  const d = Cookies.get('user');
  const user = JSON.parse(d);
  const userName = user.name;
  const email = user.email;
  const buyId = user.rollno;
  const { id, sellId } = useParams();

 
  console.log('buyId'+buyId);
  console.log('bookId'+id);
  console.log('sellId'+sellId);
  console.log('amount'+amount);


  const createOrder = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/payment/${amount * 100}`,
      {
        buyId: buyId,
        bookId:id,
        sellId:sellId,
        amount:amount
         // Assuming the server expects the amount in cents
      } ,
       {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
      console.log('Payment in Progress');
      return response.data;
      
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  };

  const handlePayment = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const order = await createOrder();

      const options = {
        key: "rzp_test_tVi2neDPqmoCMK",
        amount: amount * 100, // Calculate based on the state value
        currency: "INR",
        name: userName,
        description: "Test Transaction",
        order_id: order,
        handler: function (response) {
          navigate('/done');
          alert('Your Payment Was Successfull !Thank You\nYour PaymentId :'+response.razorpay_payment_id);
          navigate('/buy');
          // console.log(response.razorpay_payment_id);
          // console.log(response.razorpay_order_id);
          // console.log(response.razorpay_signature);
        },
        prefill: {
          name: userName,
          email: email,
        },
        notes: {
          address: "ABC, Vasai",
        },
        theme: {
          color: "#140B5C",
        },
        options:{
          checkout:{
            method:{
              "netbanking":1,
              "card":1,
              "upi":1,
              "wallet":1
            }
          }
        },
      };

      const rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      rzp1.open();
    } catch (error) {
      console.error('Error handling payment:', error);
    }
  };

  return (
    <div>
    <div class="form-container" className="form-container" style={{
  border: '2px solid #ccc',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)',
  width: '400px',
  margin: '0 auto'
}}>
    <h1 class="text-center my-3">Enter Amount</h1>
    <Form onSubmit={handlePayment}>
        <FormGroup>
        <Input
            type="number"
            placeholder="Enter Amount"
            name="amount"
            id="amount"
            onChange={(e) => setAmount(e.target.value)}
            style={{ width: '100%', height: '60px', marginBottom: '10px', boxShadow: '0 0 10px rgba(0, 191, 255, 0.7)' }}
          />
        </FormGroup>
        <Container>
        <Button color='success' type="submit">
            Make Payment
          </Button>
        </Container>
    </Form>
    </div>
    </div>
  );
};

export default RazorPay;

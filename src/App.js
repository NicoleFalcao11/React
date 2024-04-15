import './App.css';
import './NavBar.css';
import './Modstyle.css';
import NavBar from './Components/NavBar'
import Body from './Components/Body'
import Verify from './Components/Verify'
import {Button,Jumbotron,Container, Card} from 'reactstrap'
import Book from './Components/Book';
import BookList from './Components/Booklist';
import AddBook from './Components/AddBook';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Row, Col } from 'reactstrap';
import Home from './Components/Home';
import Buy from './Components/Buy';

import Footer from './Components/Footer';
import Stack from 'react-bootstrap/Stack';
import SignIn from './Components/SignIn';
import Login from './Components/Login';
import AddStud from './Components/AddStud';
import AuthWrapper from './Components/AuthWrapper';
import BkDetails from './Components/BkDetails';
import BkSold from './Components/BkSold';
import Bond from './Components/Bond';
import BkBought from './Components/BkBought';
import RazorPay from './Components/Razorpay';
import Sign from './Components/Sign';
import Demo from './Components/Demo';
import Cart from './Components/Demo';

function App() {
  return (
    <div>
      
      <Router>
      <AuthWrapper />
    
      <Stack gap={3}>
      <NavBar />
    
             <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/LogIn" element={<Login />} />
               <Route path="/SignIn" element={<SignIn />} />
               <Route path="/add-book" element={<AddBook />} />
               <Route path="/cart/:id" element={<Cart/>} />
               <Route path="/register" element={<AddStud />} />
               <Route path="/buy" element={<Buy />} />
               <Route path="/verify" element={<Verify />} />
               <Route path="/getBook/:id" element={<BkDetails />} />
               <Route path="/sold" element={<BkSold />} />
               <Route path="/bought" element={<BkBought />} />
               <Route path="/Pay/:id/:sellId" element={<RazorPay />} />
               <Route path="/demo" element={<Demo />} />
             </Routes>
        
    <Footer />
    </Stack>
    </Router>
    </div>
  );
}

export default App;



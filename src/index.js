// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthWrapper from './Components/AuthWrapper';
import { ThemeProvider } from "@material-tailwind/react";
ReactDOM.render(
  <React.StrictMode>
  <ThemeProvider>
      <App />
   </ThemeProvider>  
   </React.StrictMode> 
  ,
  document.getElementById('root')
);

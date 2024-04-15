// AuthWrapper.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import Cookies from 'js-cookie';

const AuthWrapper = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if(Cookies.get('token')){
    
    const d = Cookies.get('user');
    const user = JSON.parse(d);
    if (user) {
      const timeUntilExpiration = user.exp * 1000 - Date.now();

      setTimeout(() => {
        console.log('Token has expired');
        Cookies.remove('token');
        Cookies.remove('user');
        console.log('Cookies Removed');
        alert('Session Expired, Please Re-Login To continue');
        navigate('/LogIn');
      }, timeUntilExpiration);
    }
}
  }, [navigate]);

  return <>{children}</>;
};

export default AuthWrapper;

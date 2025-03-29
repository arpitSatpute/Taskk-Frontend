import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthRoute = ({children}) => {
    const navigate  = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    if(!token || token === 'undefined') {
        if(window.location.pathname === '/login') {
            navigate('/login');
        }
        else if(window.location.pathname === '/signup') {
            navigate('/signup');
        }
        else{
            navigate('/');
        }

    }
  }, [navigate]);
  return <>{children}</>
};

export default AuthRoute;

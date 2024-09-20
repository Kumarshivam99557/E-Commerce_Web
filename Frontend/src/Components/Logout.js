import React, { useEffect } from 'react'
import {Navigate} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/Context';

const Logout = () => {
     const {logoutUser} = useContext( CartContext );
    useEffect(()=>{
      logoutUser();
      
    },[logoutUser])

  return <Navigate to="/login" />
    
      
}

export default Logout

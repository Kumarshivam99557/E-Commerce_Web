import axios from 'axios'
import React, { useEffect } from 'react'
import { createContext,useState } from 'react'

 export const CartContext = createContext()

 export const CardProvider = (props)=>{
  const [items,setItem]=useState([])
  const[wishlist,setWishlist]=useState([])
  const [token,setToken]= useState(localStorage.getItem("token"));
  const [user,setUser]=useState("")
  const [product,setProduct]=useState([])

//  for storing the token in the local storage of the browser 
  const  storeTokenInLS = (serverToken)=>{
       localStorage.setItem("token",serverToken)
       setToken(serverToken);
    return true; 
  }

  const isLoggedIn = !! token;
  

  // for removing  the token from localstorage of the browser
  const logoutUser = ()=>{
    setToken("");
    return localStorage.removeItem("token");

  }

  //  JWT AUTHENTICATION GET THE   CURRENTLY LOGGED IN USER DATA 
     const userAuthentication = async()=>{
       try{
         const {data} = await axios.get("http://localhost:3000/api/User/getUserAftrLogin",
         {method:"GET",headers:{Authorization:`Bearer ${token}`}});

         if(data.success){
          console.log("userdta after fatching fffffffdddddddd",data.userData)
             setUser(data.userData)
         }

       }
       catch(error){
        console.error("error fecting the data")

       }

     }
// for getting the  product data from database
     const getProduct = async()=>{
      try{
        const {data} = await axios.get("http://localhost:3000/api/Product/product")

        if(data.success){
          // const product= await data.json()
          setProduct(data.product);
          console.log("product is for dtatbase",data.product);
        }
        
      }
      catch(err){
        console.error("something wrong while fetching the product data from database" ,err);
      }

     }


  useEffect(()=>{
    getProduct();
    userAuthentication();
  },[]);


    return <CartContext.Provider
     value={{isLoggedIn,items,setItem,wishlist,setWishlist,storeTokenInLS,logoutUser,user,product}} > 
    {props.children}
    </CartContext.Provider>
}

const Context = () => {
  return (
    <div>
      
    </div>
  )
}

export default Context

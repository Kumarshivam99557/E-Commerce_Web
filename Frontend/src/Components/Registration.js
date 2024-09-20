import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import { useContext } from 'react'
import { CartContext } from '../Context/Context'

const Registration = () => {
  const navigate =useNavigate();
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [phone,setPhone]=useState("");
  const {storeTokenInLS}= useContext(CartContext);
  
 
  async function submit(e){
    e.preventDefault()
    try{
      
      const {data} = await axios.post("http://localhost:3000/api/User/createuser",{name,email,phone,password})
       console.log("xxxxxxxxxxxxxxxxxxxxx",data);

       if(data.success){
       
       storeTokenInLS(data.token)
       setEmail("");
       setName("");
       setPassword(""); 
       navigate("/login")
       alert("succesfully resgisted");
       }
     
    }catch(e){
       alert("fill the form properly");
       console.log(e.message)
    }
   

 }

 return (
  <div className="flex items-center bg-gradient-to-r  justify-center min-h-screen bg-gray-50">
  <div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-r from-blue-200 to-green-300 max-w-4xl mx-auto w-full p-8 shadow-lg rounded-lg bg-white">
    <div className="flex flex-col bg-gradient-to-r  justify-center">
      <div className="xl:mx-auto xl:w-full xl:max-w-lg">
        <h2 className="text-4xl font-extrabold leading-tight text-gray-800">Sign up</h2>
        <p className="mt-2 text-gray-600">Make Your Account  &  Enjoy Shopping</p>
        <form onSubmit={submit} className="mt-8">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="mt-1">
                <input
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  placeholder="Full Name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1">
                <input
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="mt-1">
                <input
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="text"
                  placeholder="Phone Number"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 shadow-sm placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                  Agree to terms and conditions
                </label>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

);
}

export default Registration

import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context/Context';

const Service = () => {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const [messageName,setMessageName]=useState("");
    const [userData,setUserData]=useState(true)
    const navigate = useNavigate();
    const {user}= useContext(CartContext);
    // console.log("cccccccccccccccccccccccccccccccccccccccccccc",user)

    if(userData && user){
        setName(user.name)
        setEmail(user.email)
        setPhone(user.phone)
        setMessageName("")
        setUserData(false)
    }

    async function submit (e){
        e.preventDefault();
        try{
         const {data} = await axios.post("http://localhost:3000/api/Contact/contact",{name,email,phone,messageName});
         console.log(data);
         navigate("/")
         alert("THANK YOU")

        }
        catch(err){
            console.log(err.message);
         
        }
        setName(" ");
        setEmail(" ");
        setPhone(" ");
        setMessageName(" ");

    }

    return (
        <div>
        <div className="flex items-center justify-center min-h-screen  mt-8 mb-8">
                <div className="flex flex-col items-center justify-center bg-red-200 max-w-4xl w-full p-8 shadow-lg rounded-lg">
                    <div className="xl:mx-auto xl:w-full xl:max-w-lg">
                        <h2 className="text-4xl font-extrabold leading-tight text-gray-800 mb-4">Contact-US</h2>
                        <p className="mt-2 text-gray-600 mb-8">Write your query & get informed within 24 hours.</p>
                        <form onSubmit={submit} className="mt-8 w-full">
                            <div className="space-y-6 w-full">
                                <div className="border-b-2 border-gray-200 py-2 w-full">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        type="text"
                                        placeholder="Full Name"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="border-b-2 border-gray-200 py-2 w-full">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        type="email"
                                        placeholder="Email"
                                        id="email"
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="border-b-2 border-gray-200 py-2 w-full">
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        className="w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        type="text"
                                        placeholder="Phone Number"
                                        id="phone"
                                        name="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="border-b-2 border-gray-200 py-2 w-full">
                                    <label htmlFor="messageName" className="block text-sm font-medium text-gray-700 mb-2">
                                        Message Name
                                    </label>
                                    <textarea
                                        className="w-full h-28 appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                        placeholder="Message Name"
                                        id="messageName"
                                        name="messageName"
                                        rows="10"
                                        cols="30"
                                        value={messageName}
                                        onChange={(e) => setMessageName(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-4 w-full">
                                    <div className="flex items-center">
                                        <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                                        <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                                            Agree to terms and conditions
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-6 w-full">
                                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;

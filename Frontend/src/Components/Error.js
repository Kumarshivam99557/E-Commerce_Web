import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { NavLink } from 'react-router-dom'; // <-- Import NavLink

const Error = () => {
  return (
    <div className="flex flex-col px-4 py-8 bg-white rounded-lg shadow-md border border-gray-300 lg:flex-row lg:items-center lg:space-x-8 lg:px-12 lg:py-12">
    <div>
      <div>
        <p className="text-sm font-semibold text-black">404 error</p>
        <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
          We can&apos;t find that page
        </h1>
        <p className="mt-4 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="mt-6 flex items-center space-x-3">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-black bg-white border border-black rounded-md shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          >
            <AiOutlineArrowLeft size={16} className="mr-2" />
            Go back
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-md shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            Contact us
          </button>
        </div>
      </div>
      <div className="mt-10 space-y-6">
        <div>
          <NavLink
            to="/documentation"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-black hover:underline"
          >
            <span>Documentation</span>
            <AiOutlineArrowRight size={16} />
          </NavLink>
          <p className="mt-2 text-sm text-gray-500">Dive in to learn all about our product.</p>
        </div>
        <div>
          <NavLink
            to="/blog"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-black hover:underline"
          >
            <span>Our blog</span>
            <AiOutlineArrowRight size={16} />
          </NavLink>
          <p className="mt-2 text-sm text-gray-500">Read the latest posts on our blog.</p>
        </div>
        <div>
          <NavLink
            to="/support"
            className="inline-flex items-center space-x-2 text-sm font-semibold text-black hover:underline"
          >
            <span>Chat to support</span>
            <AiOutlineArrowRight size={16} />
          </NavLink>
          <p className="mt-2 text-sm text-gray-500">Our friendly team is here to help.</p>
        </div>
      </div>
    </div>
    <div className="hidden lg:block">
      <img
        src="https://images.unsplash.com/photo-1584824486509-112e4181ff6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8NDA0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="404"
        className="h-full w-full rounded-md object-cover"
      />
    </div>
  </div>
  
  
  );
};

export default Error;

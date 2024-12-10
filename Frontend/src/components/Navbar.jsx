import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaQuestionCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';
import Login from '../pages/Login'; // Import Login


function Navbar({onOpenAuthModel}) {
  

  return (
    <>
      <div className="flex items-center justify-between p-4 bg-gray-100 shadow-md">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600">
          <p>MyLogo</p>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6 font-semibold text-gray-700">
          <Link to="/" className="flex items-center space-x-2 hover:text-blue-500">
            <FaHome className="text-lg" />
            <span>Home</span>
          </Link>
          <Link to="/about-us" className="flex items-center space-x-2 hover:text-blue-500">
            <FaInfoCircle className="text-lg" />
            <span>About Us</span>
          </Link>
          <Link to="/doubt-session" className="flex items-center space-x-2 hover:text-blue-500">
            <FaQuestionCircle className="text-lg" />
            <span>Doubt Session</span>
          </Link>
          <Link to="/contact-us" className="flex items-center space-x-2 hover:text-blue-500">
            <FaPhone className="text-lg" />
            <span>Contact Us</span>
          </Link>
        </div>

        {/* Login Button */}
        <button
          
          onClick={() => onOpenAuthModel()} // Open login form directly
          className="flex items-center px-4 py-2 ml-4 space-x-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
        >
          <FaSignInAlt className="text-lg" />
          <span>Login</span>
        </button>
      </div>

      
    </>
  );
}

export default Navbar;

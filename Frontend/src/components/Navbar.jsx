import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaQuestionCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';

function Navbar({ onOpenAuthModel }) {
  return (
    <>
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <div className="text-xl font-bold text-gray-800">
            <p>MyLogo</p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6 font-semibold text-gray-700">
            <Link to="/" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
              <FaHome className="text-lg" />
              <span>Home</span>
            </Link>
            <Link to="/about-us" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
              <FaInfoCircle className="text-lg" />
              <span>About Us</span>
            </Link>
            <Link to="/doubt-session" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
              <FaQuestionCircle className="text-lg" />
              <span>Doubt Session</span>
            </Link>
            <Link to="/contact-us" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
              <FaPhone className="text-lg" />
              <span>Contact Us</span>
            </Link>
            <Link to="/interview-session" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
              <FaPhone className="text-lg" />
              <span>Interview Session</span>
            </Link>
          </div>

          {/* Login Button */}
          <button
            onClick={() => onOpenAuthModel()}
            className="flex items-center px-6 py-3 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            <FaSignInAlt className="text-lg" />
            <span className="ml-2 font-semibold">Login</span>
          </button>
        </div>
      </div>

      {/* Add padding to prevent content from being hidden under fixed navbar */}
      <div className="pt-20"></div>
    </>
  );
}

export default Navbar;

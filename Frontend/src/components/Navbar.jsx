// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaQuestionCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';

  

// function Navbar({onOpenAuthModel}) {
  
//   return (
//     <>
//       <div className="flex items-center justify-between p-4   shadow-md">
//         {/* Logo */}
//         <div className="text-xl font-bold ">
//           <p>MyLogo</p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-6 font-semibold   text-black">
//           <Link to="/" className="flex items-center space-x-2 hover:text-gray-600">
//             <FaHome className="text-lg" />
//             <span>Home</span>
//           </Link>
//           <Link to="/about-us" className="flex items-center space-x-2 hover:text-gray-600">
//             <FaInfoCircle className="text-lg" />
//             <span>About Us</span>
//           </Link>
//           <Link to="/doubt-session" className="flex items-center space-x-2 hover:text-gray-600">
//             <FaQuestionCircle className="text-lg" />
//             <span>Doubt Session</span>
//           </Link>
//           <Link to="/contact-us" className="flex items-center space-x-2 hover:text-gray-600">
//             <FaPhone className="text-lg" />
//             <span>Contact Us</span>
//           </Link>

//           <Link to="/contact-us" className="flex items-center space-x-2 hover:text-gray-600">
//             <FaPhone className="text-lg" />
//             <span>Interview session</span>
//           </Link>
//         </div>

//         {/* Login Button */}
//         <button
          
//           onClick={() => onOpenAuthModel()} // Open login form directly
//           className="flex items-center px-4 py-2 ml-4 space-x-2 text-white bg-gray-900 rounded-md hover:bg-gray-600"
//         >
//           <FaSignInAlt className="text-lg" />
//           <span>Login</span>
//         </button>
//       </div>

      
//     </>
//   );
// }

// export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaHome, FaInfoCircle, FaQuestionCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';

// function Navbar({ onOpenAuthModel }) {
//   return (
//     <>
//       <div className="flex items-center justify-between p-4 shadow-md bg-white">
//         {/* Logo */}
//         <div className="text-xl font-bold text-gray-800 ">
//           <p>MyLogo</p>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex items-center space-x-6 font-semibold text-gray-700">
//           <Link to="/" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
//             <FaHome className="text-lg" />
//             <span>Home</span>
//           </Link>
//           <Link to="/about-us" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
//             <FaInfoCircle className="text-lg" />
//             <span>About Us</span>
//           </Link>
//           <Link to="/doubt-session" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
//             <FaQuestionCircle className="text-lg" />
//             <span>Doubt Session</span>
//           </Link>
//           <Link to="/contact-us" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
//             <FaPhone className="text-lg" />
//             <span>Contact Us</span>
//           </Link>
//           <Link to="/interview-session" className="flex items-center space-x-2 hover:text-blue-600 transition-colors duration-300">
//             <FaPhone className="text-lg" />
//             <span>Interview Session</span>
//           </Link>
//         </div>

//         {/* Login Button */}
//         <button
//           onClick={() => onOpenAuthModel()} // Open login form directly
//           className="flex items-center px-4 py-2 ml-4 space-x-2 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
//         >
//           <FaSignInAlt className="text-lg" />
//           <span>Login</span>
//         </button>
//       </div>
//     </>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaQuestionCircle, FaPhone, FaSignInAlt } from 'react-icons/fa';

function Navbar({ onOpenAuthModel }) {
  return (
    <>
      <div className="bg-white shadow-md">
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
            <span className="ml-2">Login</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

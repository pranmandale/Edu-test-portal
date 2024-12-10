
import React from 'react'
import {useState} from 'react';
import Login from "../pages/Login";
import Signup from "../pages/Register";

function AuthModel({ onClose }) {
  const [isLogin, setIsLogin] = useState(true); // Default to login form

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleSignupClick = () => {
    setIsLogin(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        {isLogin ? (
          <Login onClose={onClose} onSignupClick={handleSignupClick} />
        ) : (
          <Signup onClose={onClose} onLoginClick={handleLoginClick} />
        )}
      
    </div>
  );
}

export default AuthModel
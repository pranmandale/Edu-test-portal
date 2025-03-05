import React, { useState } from 'react';
import Login from './Login';  // Import Login component
import Register from './Register'; // Import Register component

function AuthContainer() {
  const [showLogin, setShowLogin] = useState(true); // Default to showing Login
  const [showRegister, setShowRegister] = useState(false); // Initially, Register is hidden

  // Function to toggle between login and register forms
  const toggleForm = (form) => {
    if (form === 'login') {
      setShowLogin(true);
      setShowRegister(false);
    } else {
      setShowLogin(false);
      setShowRegister(true);
    }
  };

  return (
    <div className="relative">
      {/* Show Login or Register form based on state */}
      {showLogin && !showRegister && <Login onClose={() => setShowLogin(false)} toggleForm={toggleForm}  />}
      {showRegister && <Register onClose={() => setShowRegister(false)} />}
    </div>
  );
}

export default AuthContainer;








import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar visible on all pages
import Home from './Home';
import AuthModel from './context/AuthModel';
import Forgot_password from './pages/Forgot_password';

function App() {
  const [showAuthModel, setShowAuthModel] = useState(false);

  const [forgot, setForgot] = useState(true);

  const handleOpenAuthModel = () => {
    setShowAuthModel(true);
  };

  const handleCloseAuthModel = () => {
    setShowAuthModel(false);
  };

  return (
    <Router>
      <div>
        {/* <Navbar onOpenAuthModel={handleOpenAuthModel} /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} /> {/* Catch-all route */}
          <Route path='/forgot-password' element={<Forgot_password onClose={() => {setForgot(false)}}/>} />
        </Routes>
        {/* Render AuthModel outside of Routes */}
        {/* {showAuthModel && <AuthModel onClose={handleCloseAuthModel} />} */}
      </div>
    </Router>
  );
}

export default App;


// @D3z9$Pq!

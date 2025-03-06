import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar visible on all pages
import Home from './Home';
import AuthModel from './context/AuthModel';
import Forgot_password from './pages/Forgot_password';

function App() {
  
  

  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} /> 
          {/* <Route path='/forgot-password' element={<Forgot_password onClose={() => {setForgot(false)}}/>} /> */}
          <Route path='/forgot-password' element={ <Forgot_password/>} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;




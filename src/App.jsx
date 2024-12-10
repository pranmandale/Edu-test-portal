import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar visible on all pages
import Home from './Home';
import AuthModel from './context/AuthModel';

function App() {
  const [showAuthModel, setShowAuthModel] = useState(false);

  const handleOpenAuthModel = () => {
    setShowAuthModel(true);
  };

  const handleCloseAuthModel = () => {
    setShowAuthModel(false);
  };

  return (
    <Router>
      <div>
        <Navbar onOpenAuthModel={handleOpenAuthModel} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} /> {/* Catch-all route */}
        </Routes>
        {/* Render AuthModel outside of Routes */}
        {showAuthModel && <AuthModel onClose={handleCloseAuthModel} />}
      </div>
    </Router>
  );
}

export default App;


import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AuthModel from './context/AuthModel';
import Work from './components/work';

const Home = () => {
    const [showAuthModel, setShowAuthModel] = useState(false);
    const handleOpenAuthModel = () => {
      setShowAuthModel(true);
    };

    const handleCloseAuthModel = () => {
      setShowAuthModel(false);
  };
  
  return (
    <div className='h-screen w-full '>
      <Navbar onOpenAuthModel={handleOpenAuthModel} />
      <Hero />
      <Work/>

       {showAuthModel && <AuthModel onClose={handleCloseAuthModel} />}
     </div>
    
  )
}

export default Home
// import React, {useState} from 'react'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import AuthModel from './context/AuthModel';

// function Home() {
//   const [showAuthModel, setShowAuthModel] = useState(false);
//   const handleOpenAuthModel = () => {
//     setShowAuthModel(true);
//   };

//   const handleCloseAuthModel = () => {
//     setShowAuthModel(false);
//   };
//   return (
//     <>
    
//     </div>
//   );
// }


// export default Home




import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AuthModel from './context/AuthModel';
import Forgot_password from './pages/Forgot_password';

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
       <Hero/>

       {showAuthModel && <AuthModel onClose={handleCloseAuthModel} />}
     </div>
    
  )
}

export default Home
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";

const Forgot_password = ({onClose}) => {

    const handleClose = (e) => {
        e.preventDefault()
        console.log("Form closed");
        onClose();
    };
    
  return (
      <div className='h-screen w-screen flex items-center justify-center bg-stone-100'>
          <div className='w-96 h-auto p-4 border border-gray-800 rounded-lg shadow-lg  bg-white relative'>
              <IoCloseSharp
                        onClick={handleClose}
                        className="absolute top-3 right-3 p-2 text-3xl text-white transition-all duration-300 ease-in-out transform bg-blue-600 rounded-full shadow-md cursor-pointer hover:scale-110 hover:bg-blue-500"
                      />
              <form
                  onSubmit={(e) => {
                      handleClose(e);
                  }}
                  className='flex flex-col items-center justify-center gap-4 '>
                  <h1 className='text-xl  p-4 underline text-blue-700 font-bold'>Forgot Password?</h1>
                  <input 
                      //   className='mt-5 px-4 py-2 rounded-md border w-full border-gray-600'
                      className='border border-blue-500 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-gray-500 text-gray-700 transition'
                      type="email"
                      placeholder='Email'
                      required
                  />
                  
                  <button
                      className='bg-blue-600 text-white  font-semibold px-10 py-2 rounded-lg w-full hover:bg-blue-500 transition duration-200'
                  >Submit</button>
              </form>
          </div>
    </div>
  )
}

export default Forgot_password
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import axios from 'axios';
// import Image from './../assets/Exams-bro.png';
// import { IoCloseSharp } from "react-icons/io5";
// // import toast from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';

// function Register({onClose, onLoginClick}) {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // Submit handler
//   const onSubmit = async (data) => {
//     console.log(data);

//     const UserInfo = {
//       fullname: data.fullname,
//       email: data.email,
//       password: data.password,
//       confirmPassword: data.confirmPassword
//     };

//     try {
//       const response = await axios.post('/api/v1/users/register',UserInfo);
//       console.log("data : ", response.data);
//       // toast.success("Registration Successful");
//       toast('Registration successful!', {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
        
//       });


//     } catch (error) {
//       console.log('error details : ', error)
//        if (error.response) {
//                 // Server responded with a status other than 200 range
//                 toast.error("error: "+ error.response.data.error)
//             } else if (error.request) {
//                 // Request was made but no response was received
//                 toast.error("No response from server. Please try again later.");
//             } else {
//                 // Something else happened while setting up the request
//                 toast.error(`Error: ${error.message}`);
//             }
//     }
//   };

  

//   // Toggle password visibility
//   const togglePasswordVisibility = () => {
//     setShowPassword(prevState => !prevState);
//   };

//   // Toggle confirm password visibility
//   const toggleConfirmPasswordVisibility = () => {
//     setShowConfirmPassword(prevState => !prevState);
//   };

//   // Close form or handle close action
//   const handleClose = () => {
//     console.log("Form closed");
//     onClose();
//   };

//   return (
//     <>
//       <div className="flex items-center justify-center h-screen">
//         <div className="h-[600px] w-[1000px] flex mx-auto">
//           {/* Left section */}
//           <div
//             className="flex flex-col items-center justify-center w-1/2 h-full p-6 border border-black-500"
//             style={{
//               background: 'linear-gradient(135deg, #b3e5fc, #c8e6c9)', // Light blue and green gradient
//             }}
//           >
//             <img src={Image} alt="edu-image" className="w-[300px] -mt-6" />
//             <h1 className="mt-4 text-2xl font-semibold">Edu Test Portal</h1>
//             <p className="mt-2 text-center">Unleash your academic success with Edu-test-portal</p>
//           </div>

//           {/* Right section */}
//           <div
//             className="flex items-center justify-center w-1/2 h-full p-3"
//             style={{
//               backgroundColor: '#e3f2fd',
//             }}
//           >
//             {/* Signup form container */}
//             <div
//               className="w-[450px] h-full bg-[#f5f5f5] rounded-lg shadow-md p-6 flex flex-col justify-between relative" // Added relative here for absolute positioning of the close icon
//               style={{
//                 border: '1px solid #f0f4c3',
//               }}
//             >

//               <IoCloseSharp
//                 onClick={handleClose} // Call handleClose on click
//                 className="absolute p-2 text-3xl text-gray-700 transition-all duration-300 ease-in-out transform bg-blue-200 rounded-full shadow-md cursor-pointer right-4 top-4 hover:scale-110 hover:bg-blue-100"
//               />


//               {/* Heading */}
//               <h1 className="pt-5 text-xl font-bold text-center">Signup Form</h1>

//               {/* Form Inputs */}
//               <div className="space-y-4">
//                 {/* Full Name Input */}
//                 <div className="mt-4">
//                   <label
//                     htmlFor="fullname"
//                     className="block mb-1 text-base font-semibold text-gray-700"
//                   >
//                     Full Name
//                   </label>
//                   <input
//                     id="fullname"
//                     className="w-full p-2 text-base border border-gray-400 rounded-lg"
//                     type="text"
//                     placeholder="Enter your full name"
//                     {...register('fullname', { required: 'Full Name is required' })}
//                   />
//                   {/* Error Message */}
//                   {errors.fullname && <p className="text-xs text-red-500">{errors.fullname.message}</p>}
//                 </div>

//                 {/* Email Address Input */}
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-1 text-base font-semibold text-gray-700"
//                   >
//                     Email Address
//                   </label>
//                   <input
//                     id="email"
//                     className="w-full p-2 text-base border border-gray-400 rounded-lg"
//                     type="email"
//                     placeholder="Enter your email"
//                     {...register('email', { required: 'Email is required' })}
//                   />
//                   {/* Error Message */}
//                   {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
//                 </div>

//                 {/* Password Input */}
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block mb-1 text-base font-semibold text-gray-700"
//                   >
//                     Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="password"
//                       className="w-full p-2 text-base border border-gray-400 rounded-lg"
//                       type={showPassword ? 'text' : 'password'} // Show/hide password
//                       placeholder="Enter your password"
//                       {...register('password', { required: 'Password is required' })}
//                     />
//                     <button
//                       type="button"
//                       onClick={togglePasswordVisibility}
//                       className="absolute text-sm font-semibold text-gray-700 right-4 top-3"
//                     >
//                       {showPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                   {/* Error Message */}
//                   {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
//                 </div>

//                 {/* Confirm Password Input */}
//                 <div>
//                   <label
//                     htmlFor="confirm-password"
//                     className="block mb-1 text-base font-semibold text-gray-700"
//                   >
//                     Confirm Password
//                   </label>
//                   <div className="relative">
//                     <input
//                       id="confirm-password"
//                       className="w-full p-2 text-base border border-gray-400 rounded-lg"
//                       type={showConfirmPassword ? 'text' : 'password'} // Show/hide confirm password
//                       placeholder="Confirm your password"
//                       {...register('confirmPassword', { required: 'Confirm Password is required' })}
//                     />
//                     <button
//                       type="button"
//                       onClick={toggleConfirmPasswordVisibility}
//                       className="absolute text-sm font-semibold text-gray-700 right-4 top-3"
//                     >
//                       {showConfirmPassword ? "Hide" : "Show"}
//                     </button>
//                   </div>
//                   {/* Error Message */}
//                   {errors.confirmPassword && (
//                     <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
//                   )}
//                 </div>
//               </div>

//               {/* Submit button */}
//               <div>
//                 <button
//                   type="submit"
//                   className="w-full p-2 mt-2 text-base text-xl font-semibold text-white duration-200 bg-blue-500 rounded-lg hover:bg-blue-400"
//                   onClick={handleSubmit(onSubmit)} // Handle submit
//                 >
//                   Sign Up
//                 </button>
//               </div>

//               {/* Bottom text link */}
//               <div className="p-5 mb-3 text-center">
//                 <p className="text-base text-gray-700">
//                   Already have an account?{' '}
//                   <span className="font-semibold text-blue-500 cursor-pointer hover:underline"  onClick={onLoginClick}>
                 
//                     Login
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </div>
//           <ToastContainer></ToastContainer>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Register;


import React from 'react';
import { IoCloseSharp } from "react-icons/io5";

const Register = ({ onClose, onLoginClick }) => {
  // Close form or handle close action
  const handleClose = () => {
    console.log("Form closed");
    onClose();
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-96 h-128 p-6 rounded-lg shadow-lg relative">
        {/* Close Icon */}
        <IoCloseSharp
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 text-3xl text-white transition-all duration-300 ease-in-out transform bg-blue-600 rounded-full shadow-md cursor-pointer hover:scale-110 hover:bg-blue-500"
        />

        {/* Registration Form */}
        <form className="flex flex-col gap-5">
          <h2 className="font-bold text-2xl text-blue-700 text-center">Register</h2>
          <input
            className="border border-blue-500 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700 transition"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            className="border border-blue-500 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700 transition"
            type="text"
            placeholder="Username"
            required
          />
          <input
            className="border border-blue-500 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700 transition"
            type="email"
            placeholder="Email"
            required
          />
          <input
            className="border border-blue-500 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700 transition"
            type="password"
            placeholder="Password"
            required
          />
          <input
            className="border border-blue-500 rounded-md w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-500 text-gray-700 transition"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <button
            className="bg-blue-500 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-6`00 transition duration-200"
            type="submit"
          >
            Submit
          </button>

          <div className="text-center">
            <p className="text-base text-gray-600">
              Already Have an account? {``}
              <span
                className="underline text-base font-semibold cursor-pointer text-blue-600 hover:text-blue-500"
                onClick={onLoginClick}
              >
                Login
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;

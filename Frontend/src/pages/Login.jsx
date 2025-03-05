// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import Image from './../assets/Exams-bro.png';
// import { IoCloseSharp } from "react-icons/io5";
// import axios from 'axios';
// // import { toast } from 'react-hot-toast';
// import { ToastContainer, toast } from 'react-toastify';

// function Login({ onClose, onSignupClick }) { // Accept onClose as a prop
//   const [showPassword, setShowPassword] = useState(false);
//   const { register, handleSubmit, formState: { errors } } = useForm();

//   // Submit handler
//   const onSubmit = async (data) => {
//     console.log(data); // Handle form data

//     const UserInfo = {
//       email: data.email,
//       password : data.password
//     }

//     try {
//       const response = await axios.post('', UserInfo);
//       console.log("login successful ", response.data);
//       toast('Login Successful!', {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: false,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
        
//       });
//       // toast.success("Login successfull")
//     } catch (error) {
//       console.log("error details : ", error);
//       if (error.response) {
//                 // Server responded with a status other than 200 range
//                 alert("error: "+ error.response.data.error)
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
//     setShowPassword((prevState) => !prevState);
//   };

  

//   return (
//     <div className="flex items-center justify-center h-screen ">
//       <div className="h-[600px] w-[1000px] flex mx-auto gap-0 rounded">
//         {/* Left section */}
//         <div
//           className="flex flex-col items-center justify-center w-1/2 h-full p-6 border border-black-500"
//           style={{
//             background: 'linear-gradient(135deg, #b3e5fc, #c8e6c9)', // Light blue and green gradient
//           }}
//         >
//           <img src={Image} alt="edu-image" className="w-[300px] -mt-6" />
//           <h1 className="mt-4 text-2xl font-semibold">Edu Test Portal</h1>
//           <p className="mt-2 text-center">Unleash your academic success with Edu-test-portal</p>
//         </div>

//         {/* Right section */}
//         <div
//           className="flex items-center justify-center w-1/2 h-full p-3"
//           style={{
//             backgroundColor: '#e3f2fd',
//           }}
//         >
//           {/* Signup form container */}
//           <div
//             className="w-[450px] h-full bg-[#f5f5f5] rounded-lg shadow-md p-6 flex flex-col justify-between relative"
//             style={{
//               border: '1px solid #f0f4c3',
//             }}
//           >
//             {/* Close Button */}
//             <IoCloseSharp
//               onClick={onClose}
//               className="absolute p-2 text-3xl text-gray-700 transition-all duration-300 ease-in-out transform bg-blue-200 rounded-full shadow-md cursor-pointer right-4 top-4 hover:scale-110 hover:bg-blue-100"
//             />

//             {/* Heading */}
//             <h1 className="pt-5 text-xl font-bold text-center">Login Form</h1>

//             {/* Form Inputs */}
//             <div className="space-y-4">
//               {/* Email Address Input */}
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="mb-1 text-base font-semibold text-gray-700 "
//                 >
//                   Email Address
//                 </label>
//                 <input
//                   id="email"
//                   className="w-full p-2 text-base border border-gray-400 rounded-lg"
//                   type="email"
//                   placeholder="Enter your email"
//                   {...register('email', { required: 'Email is required' })}
//                 />
//                 {/* Error Message */}
//                 {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
//               </div>

//               {/* Password Input */}
//               <div>
//                 <label
//                   htmlFor="password"
//                   className="mb-1 text-base font-semibold text-gray-700 "
//                 >
//                   Password
//                 </label>
//                 <div className="relative">
//                   <input
//                     id="password"
//                     className="w-full p-2 text-base border border-gray-400 rounded-lg"
//                     type={showPassword ? 'text' : 'password'} // Show/hide password
//                     placeholder="Enter your password"
//                     {...register('password', { required: 'Password is required' })}
//                   />
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="absolute text-sm font-semibold text-gray-700 right-4 top-3"
//                   >
//                     {showPassword ? "Hide" : "Show"}
//                   </button>
//                 </div>
//                 {/* Error Message */}
//                 {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
//               </div>
//             </div>

//             {/* Submit Button and Forget Password */}
//             <div>
//               <p className="p-2 text-right text-blue-500 cursor-pointer hover:underline ">
//                 Forget Password?
//               </p>
//               <button
//                 type="submit"
//                 className="w-full p-2 text-base text-xl font-semibold text-white duration-200 bg-blue-500 rounded-lg hover:bg-blue-400"
//                 onClick={handleSubmit(onSubmit)}
//               >
//                 Login
//               </button>
//             </div>

//             {/* Bottom Text Link */}
//             <div className="p-5 mb-3 text-center">
//               <p className="text-base text-gray-700">
//                 Don't have an account?{' '}
//                 <span className="font-semibold text-blue-500 cursor-pointer hover:underline" onClick = {onSignupClick}>
                
//                   Sign Up
//                 </span>
//               </p>
//             </div>
//           </div>
//         </div>
//         <ToastContainer></ToastContainer>
//       </div>
//     </div>
//   );
// }

// export default Login;








import React from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Login = ({ onClose, onSignupClick }) => {
  // Close form or handle close action
  const handleClose = () => {
    console.log("Form closed");
    onClose();
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="bg-white w-96 h-auto p-6 rounded-lg shadow-lg relative">
        {/* Close Icon */}
        <IoCloseSharp
          onClick={handleClose}
          className="absolute top-3 right-3 p-2 text-3xl text-white transition-all duration-300 ease-in-out transform bg-blue-600 rounded-full shadow-md cursor-pointer hover:scale-110 hover:bg-blue-500"
        />

        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl text-blue-700 text-center p-2 underline">Login</h2>

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
          <Link to="/forgot-password">
            <p className="text-right cursor-pointer underline font-semibold text-blue-600 hover:text-blue-500">
              Forgot Password?
            </p>
          </Link>

          <button
            className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg hover:bg-blue-500 transition duration-200"
            type="submit"
          >
            Submit
          </button>

          <div className="text-center">
            <p className="text-base text-gray-600">
              Don't Have an account? {``}
              <span
                className="underline text-base font-semibold cursor-pointer text-blue-600 hover:text-blue-500"
                onClick={onSignupClick}
              >
                Register
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

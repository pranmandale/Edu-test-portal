
import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import Image from './../assets/Exams-bro.png';
import { IoCloseSharp } from "react-icons/io5";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  // Submit handler
  const onSubmit = (data) => {
    console.log(data);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  // Toggle confirm password visibility
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(prevState => !prevState);
  };

  // Close form or handle close action
  const handleClose = () => {
    console.log("Form closed");
    
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="h-[600px] w-[1000px] flex mx-auto">
          {/* Left section */}
          <div
            className="w-1/2 h-full flex flex-col items-center justify-center border border-black-500 p-6"
            style={{
              background: 'linear-gradient(135deg, #b3e5fc, #c8e6c9)', // Light blue and green gradient
            }}
          >
            <img src={Image} alt="edu-image" className="w-[300px] -mt-6" />
            <h1 className="font-semibold text-2xl mt-4">Edu Test Portal</h1>
            <p className="text-center mt-2">Unleash your academic success with Edu-test-portal</p>
          </div>

          {/* Right section */}
          <div
            className="w-1/2 h-full flex p-3 flex items-center justify-center"
            style={{
              backgroundColor: '#e3f2fd', 
            }}
          >
            {/* Signup form container */}
            <div
              className="w-[450px] h-full bg-[#f5f5f5] rounded-lg shadow-md p-6 flex flex-col justify-between relative" // Added relative here for absolute positioning of the close icon
              style={{
                border: '1px solid #f0f4c3', 
              }}
            >

              <IoCloseSharp
                onClick={handleClose} // Call handleClose on click
                className="absolute right-4 top-4 text-3xl bg-blue-200 rounded-full p-2 text-gray-700 cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 hover:bg-blue-100  shadow-md"
              />


              {/* Heading */}
              <h1 className="text-xl font-bold text-center pt-5">Signup Form</h1>

              {/* Form Inputs */}
              <div className="space-y-4">
                {/* Full Name Input */}
                <div className="mt-4">
                  <label
                    htmlFor="fullname"
                    className="block text-base font-semibold text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    className="p-2 border border-gray-400 rounded-lg w-full text-base"
                    type="text"
                    placeholder="Enter your full name"
                    {...register('fullname', { required: 'Full Name is required' })}
                  />
                  {/* Error Message */}
                  {errors.fullname && <p className="text-red-500 text-xs">{errors.fullname.message}</p>}
                </div>

                {/* Email Address Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-base font-semibold text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="p-2 border border-gray-400 rounded-lg w-full text-base"
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {/* Error Message */}
                  {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-base font-semibold text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      className="p-2 border border-gray-400 rounded-lg w-full text-base"
                      type={showPassword ? 'text' : 'password'} // Show/hide password
                      placeholder="Enter your password"
                      {...register('password', { required: 'Password is required' })}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-4 top-3 text-sm text-gray-700 font-semibold"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {/* Error Message */}
                  {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block text-base font-semibold text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirm-password"
                      className="p-2 border border-gray-400 rounded-lg w-full text-base"
                      type={showConfirmPassword ? 'text' : 'password'} // Show/hide confirm password
                      placeholder="Confirm your password"
                      {...register('confirmPassword', { required: 'Confirm Password is required' })}
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-4 top-3 text-sm text-gray-700 font-semibold"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {/* Error Message */}
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full font-semibold text-xl bg-blue-500 text-white p-2 mt-2 rounded-lg text-base hover:bg-blue-400 duration-200"
                  onClick={handleSubmit(onSubmit)} // Handle submit
                >
                  Sign Up
                </button>
              </div>

              {/* Bottom text link */}
              <div className="text-center p-5 mb-3">
                <p className="text-base text-gray-700">
                  Already have an account?{' '}
                  <span className="text-blue-500 font-semibold cursor-pointer hover:underline">
                    Login
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;

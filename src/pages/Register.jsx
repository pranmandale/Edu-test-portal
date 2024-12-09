import React, { useState } from 'react';
import { useForm } from 'react-hook-form'; 
import Image from './../assets/Exams-bro.png';
import { IoCloseSharp } from "react-icons/io5";

function Register({onClose}) {
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
    onClose();
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="h-[600px] w-[1000px] flex mx-auto">
          {/* Left section */}
          <div
            className="flex flex-col items-center justify-center w-1/2 h-full p-6 border border-black-500"
            style={{
              background: 'linear-gradient(135deg, #b3e5fc, #c8e6c9)', // Light blue and green gradient
            }}
          >
            <img src={Image} alt="edu-image" className="w-[300px] -mt-6" />
            <h1 className="mt-4 text-2xl font-semibold">Edu Test Portal</h1>
            <p className="mt-2 text-center">Unleash your academic success with Edu-test-portal</p>
          </div>

          {/* Right section */}
          <div
            className="flex items-center justify-center w-1/2 h-full p-3"
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
                className="absolute p-2 text-3xl text-gray-700 transition-all duration-300 ease-in-out transform bg-blue-200 rounded-full shadow-md cursor-pointer right-4 top-4 hover:scale-110 hover:bg-blue-100"
              />


              {/* Heading */}
              <h1 className="pt-5 text-xl font-bold text-center">Signup Form</h1>

              {/* Form Inputs */}
              <div className="space-y-4">
                {/* Full Name Input */}
                <div className="mt-4">
                  <label
                    htmlFor="fullname"
                    className="block mb-1 text-base font-semibold text-gray-700"
                  >
                    Full Name
                  </label>
                  <input
                    id="fullname"
                    className="w-full p-2 text-base border border-gray-400 rounded-lg"
                    type="text"
                    placeholder="Enter your full name"
                    {...register('fullname', { required: 'Full Name is required' })}
                  />
                  {/* Error Message */}
                  {errors.fullname && <p className="text-xs text-red-500">{errors.fullname.message}</p>}
                </div>

                {/* Email Address Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-base font-semibold text-gray-700"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    className="w-full p-2 text-base border border-gray-400 rounded-lg"
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', { required: 'Email is required' })}
                  />
                  {/* Error Message */}
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>

                {/* Password Input */}
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-1 text-base font-semibold text-gray-700"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      className="w-full p-2 text-base border border-gray-400 rounded-lg"
                      type={showPassword ? 'text' : 'password'} // Show/hide password
                      placeholder="Enter your password"
                      {...register('password', { required: 'Password is required' })}
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute text-sm font-semibold text-gray-700 right-4 top-3"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {/* Error Message */}
                  {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
                </div>

                {/* Confirm Password Input */}
                <div>
                  <label
                    htmlFor="confirm-password"
                    className="block mb-1 text-base font-semibold text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirm-password"
                      className="w-full p-2 text-base border border-gray-400 rounded-lg"
                      type={showConfirmPassword ? 'text' : 'password'} // Show/hide confirm password
                      placeholder="Confirm your password"
                      {...register('confirmPassword', { required: 'Confirm Password is required' })}
                    />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute text-sm font-semibold text-gray-700 right-4 top-3"
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                  {/* Error Message */}
                  {errors.confirmPassword && (
                    <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
                  )}
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full p-2 mt-2 text-base text-xl font-semibold text-white duration-200 bg-blue-500 rounded-lg hover:bg-blue-400"
                  onClick={handleSubmit(onSubmit)} // Handle submit
                >
                  Sign Up
                </button>
              </div>

              {/* Bottom text link */}
              <div className="p-5 mb-3 text-center">
                <p className="text-base text-gray-700">
                  Already have an account?{' '}
                  <span className="font-semibold text-blue-500 cursor-pointer hover:underline">
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

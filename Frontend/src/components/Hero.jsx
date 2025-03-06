
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";

import HeroImg from "../assets/asst1.png";
import HeroImg2 from "../assets/asst2.webp";
import HeroImg3 from "../assets/asst3.avif";

const ImageList = [
  { id: 1, img: HeroImg, title: "Unlock Your Potential!", description: "Start your journey towards excellence today." },
  { id: 2, img: HeroImg2, title: "Discover New Opportunities!", description: "Explore new horizons and grow beyond limits." },
  { id: 3, img: HeroImg3, title: "Achieve Greatness!", description: "Turn your dreams into reality with dedication and focus." }
];

function Hero() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#dff4f8] to-[#b0e3f7] overflow-hidden">
      <div className="absolute w-[80%] h-[80%] bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white border-opacity-30 flex items-center justify-between px-10 gap-6">

        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 flex flex-col items-start justify-center p-10 space-y-4"
        >
          <h1 className="text-5xl font-extrabold text-gray-800 leading-tight drop-shadow-lg">
            Unlock Your Potential!
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Start your journey towards excellence today. Embrace challenges, discover new opportunities, and achieve greatness. Your future is waiting for you!
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-4 bg-blue-600 text-white text-lg font-medium rounded-xl shadow-lg hover:bg-blue-700 transition-all"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right Section (3D Styled Slider) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-1/2 flex items-center justify-center p-10"
        >
          <Slider {...settings} className="w-full">
            {ImageList.map((item) => (
              <div key={item.id} className="flex justify-center items-center">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto object-cover rounded-xl shadow-xl transition-transform hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;



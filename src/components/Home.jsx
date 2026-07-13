import React from "react";
import sumi from "../assets/images/Udhay_Image.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex items-center justify-center
      bg-[linear-gradient(135deg,#3b2b4a,#5a3c5c,#2b2235)]
      bg-[length:300%_300%]
      animate-[gradientMove_12s_ease_infinite]"
    >
{/* FLOATING GLASS BUBBLES */}

<div
className="absolute 
w-16 h-16 sm:w-24 sm:h-24 md:w-40 md:h-40
bg-white/10 backdrop-blur-md rounded-full
top-16 left-6
animate-[bubble_12s_linear_infinite]"
></div>

<div
className="absolute
w-12 h-12 sm:w-20 sm:h-20 md:w-24 md:h-24
bg-white/10 backdrop-blur-md rounded-full
bottom-20 right-10
animate-[bubble_10s_linear_infinite]"
></div>

<div
className="absolute
w-14 h-14 sm:w-24 sm:h-24 md:w-32 md:h-32
bg-white/10 backdrop-blur-md rounded-full
top-1/2 left-10
animate-[bubble_14s_linear_infinite]"
></div>

{/* last */}
<div
className="absolute
w-12 h-12 sm:w-20 sm:h-20 md:w-15 md:h-15
bg-white/10 backdrop-blur-md rounded-full
bottom-1 right-20
animate-[bubble_10s_linear_infinite]"
></div>
      {/*  main */}
      <div className="flex flex-col items-center gap-6 text-center z-10 px-6">

        {/* profile */}
        <div className="relative group animate-[float_6s_ease-in-out_infinite]">

          {/* glow effect */}
          <div
            className="absolute inset-0 rounded-full
            bg-gradient-to-r from-purple-500 via-pink-300 to-orange-200
            blur-2xl opacity-60
            group-hover:opacity-100 transition duration-500"
          ></div>

          {/* image */}
          <img
            src={sumi}
            alt="Sumita"
            className="relative w-44 h-44 md:w-60 md:h-60
            rounded-full object-cover
            border-2 border-white/20
            shadow-2xl
            transition duration-500
            group-hover:scale-105"
          />
        </div>

        {/* NAME */}
        <h2
          className="text-2xl md:text-4xl font-bold tracking-wider
          bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300
          bg-clip-text text-transparent drop-shadow-lg">
          Udhay Kiran Ande
        </h2>

        {/* ROLE */}
        <p className="text-gray-300 tracking-[0.4em] uppercase text-xs md:text-sm">
          Software Developer
        </p>

        {/* BUTTON */}
       <Link to="/about">
        <button
          className="mt-2 px-8 py-3 rounded-xl
          bg-white/10 backdrop-blur-md
          border border-white/20
          text-white font-semibold
          shadow-xl
          transition-all duration-300
          hover:scale-110
          hover:bg-white/20"
          style={{padding: '8px 26px'}}>
          Explore My Work  ↓
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
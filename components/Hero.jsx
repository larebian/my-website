import React from "react";
import { Link } from "react-router-dom";
import { FaGraduationCap, FaArrowRight, FaCalendarAlt, FaCheckCircle } from "react-icons/fa";

import schoolHeroImg from "../assets/images/logo.jpg"; 

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white py-10 lg:py-14 px-6 sm:px-8 rounded-3xl overflow-hidden shadow-sm h-full flex flex-col justify-between">
      
      {/* Background Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-auto">
        
        {/* Left Side: Content & CTAs */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">
          
          {/* Top Highlight Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-800/80 border border-blue-400/30 text-yellow-300 px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-md shadow-md">
            <FaCalendarAlt size={11} />
            <span>Admissions Open for Session 2026–2027</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-white">
              The Lareb Public School
            </span>
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-lg sm:text-xl text-blue-100 font-medium">
            Learn Today, Lead Tomorrow.
          </p>

          {/* Subtext */}
          <p className="mt-2 text-xs sm:text-sm text-blue-200/80 max-w-lg leading-relaxed">
            Empowering young minds with exceptional education, advanced computer labs, moral values, and a secure environment for a bright future.
          </p>

          {/* Bullet Points */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-blue-100 w-full max-w-md">
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <FaCheckCircle className="text-yellow-400 shrink-0" size={12} />
              <span>Qualified & Experienced Faculty</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <FaCheckCircle className="text-yellow-400 shrink-0" size={12} />
              <span>Modern Computer & Science Labs</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link
              to="/admission"
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-yellow-400/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              <FaGraduationCap size={16} />
              <span>Apply Now</span>
            </Link>

            <Link
              to="/about"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl border border-white/20 backdrop-blur-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-xs"
            >
              <span>Explore Campus</span>
              <FaArrowRight size={11} />
            </Link>
          </div>

        </div>

        {/* Right Side: Fixed Size School Image Frame */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-[320px]">
            
            {/* Glow effect behind image */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-yellow-400 to-blue-500 rounded-3xl blur-xl opacity-30" />

            {/* Image Container with Fixed Dimensions */}
            <div className="relative bg-blue-900/40 p-2.5 rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl">
              <img
                src={schoolHeroImg}
                alt="The Lareb Public School Campus"
                className="w-full h-[300px] sm:h-[330px] object-cover rounded-2xl shadow-inner"
              />

              {/* Floating Badge on Image */}
              <div className="absolute -bottom-4 -left-4 bg-blue-900/95 border border-yellow-400/40 px-4 py-2.5 rounded-2xl shadow-xl backdrop-blur-md flex items-center gap-2.5">
                <div className="bg-yellow-400 text-blue-950 p-2 rounded-xl text-sm">
                  🌟
                </div>
                <div>
                  <p className="text-[10px] text-blue-200 font-medium">Excellence In</p>
                  <p className="text-xs font-bold text-white">Education & Character</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Bottom Quick Stats Bar */}
      <div className="mt-10 grid grid-cols-3 gap-4 pt-6 border-t border-white/10 text-center relative z-10">
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-400">100%</h3>
          <p className="text-[11px] sm:text-xs text-blue-200 mt-0.5">Success Rate</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-400">Advanced</h3>
          <p className="text-[11px] sm:text-xs text-blue-200 mt-0.5">Smart Labs</p>
        </div>
        <div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-400">Expert</h3>
          <p className="text-[11px] sm:text-xs text-blue-200 mt-0.5">Faculty</p>
        </div>
      </div>

    </section>
  );
}

export default Hero;
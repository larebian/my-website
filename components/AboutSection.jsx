import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUserGraduate, FaCheckCircle, FaAward } from "react-icons/fa";

// Apni student ki image ka path yahan adjust kar lein
import studentPhoto from "../assets/images/student1.jpeg"; 

function AboutSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-white via-gray-50 to-blue-50/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Single Student Image with Modern Frame & Glow Effect */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Background Glow Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-yellow-400 rounded-3xl blur-2xl opacity-30 animate-pulse" />

              {/* Image Container */}
              <div className="relative bg-white p-3.5 rounded-3xl shadow-2xl border border-gray-100">
                <img
                  src={studentPhoto}
                  alt="The Lareb Public School Student"
                  className="w-full h-[420px] sm:h-[480px] object-cover rounded-2xl shadow-inner hover:scale-[1.01] transition-transform duration-500"
                />

                {/* Floating Badge on Image */}
                <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-blue-950 text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-blue-800 backdrop-blur-xl">
                  <div className="bg-yellow-400 text-blue-950 p-3 rounded-xl text-xl font-bold">
                    🎓
                  </div>
                  <div>
                    <p className="text-xs text-blue-200 font-medium">Proud Student</p>
                    <p className="text-sm font-extrabold text-white">Excellence in Learning</p>
                  </div>
                </div>

                {/* Top-Left Mini Badge */}
                <div className="absolute -top-4 -left-4 bg-white/90 border border-blue-100 text-blue-900 px-4 py-2 rounded-2xl shadow-lg backdrop-blur-md hidden sm:flex items-center gap-2 font-bold text-xs uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping" />
                  <span>Bright Future</span>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side: Content & Details */}
          <div className="lg:col-span-6 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-sm">
              <FaUserGraduate className="text-blue-600" />
              <span>About Our School</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight leading-[1.15]">
              About Our School & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800">
                Our Brilliant Students
              </span>
            </h2>

            {/* Description */}
            <p className="mt-6 text-gray-600 leading-relaxed text-base sm:text-lg">
              The Lareb Public School provides quality education with experienced teachers, smart classrooms, computer labs, science laboratories, sports facilities, and modern teaching methods to help every student lead tomorrow.
            </p>

            {/* Feature Highlights Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full text-left text-sm font-semibold text-gray-700">
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                <span className="text-yellow-500 text-lg">✔</span>
                <span>Experienced Teachers</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                <span className="text-yellow-500 text-lg">✔</span>
                <span>Smart Classrooms & Labs</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                <span className="text-yellow-500 text-lg">✔</span>
                <span>Science Laboratories</span>
              </div>
              <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm border border-gray-100">
                <span className="text-yellow-500 text-lg">✔</span>
                <span>Sports & Activities</span>
              </div>
            </div>

            {/* Read More Button */}
            <div className="mt-10 w-full sm:w-auto">
              <Link
                to="/about"
                className="group inline-flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold px-9 py-4 rounded-2xl shadow-xl shadow-blue-700/25 hover:shadow-blue-700/40 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto text-sm uppercase tracking-wider"
              >
                <span>Read More</span>
                <FaArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
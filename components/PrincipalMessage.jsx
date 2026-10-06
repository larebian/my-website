import React from "react";
import { FaQuoteLeft, FaUserTie } from "react-icons/fa";

// Principal ki image ka path yahan adjust kar lein (jaise logo.jpeg ya principal ki photo)
import principalImg from "../assets/images/principal.jpeg"; 

function PrincipalMessage() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 text-white overflow-hidden">
      
      {/* Background Glow Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Side: Principal Image with Modern Floating Frame */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-sm">
              
              {/* Outer Glowing Border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-yellow-400 to-blue-500 rounded-3xl blur-xl opacity-40 animate-pulse" />

              {/* Image Box */}
              <div className="relative bg-blue-900/50 p-3.5 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-xl">
                <img
                  src={principalImg}
                  alt="Principal of The Lareb Public School"
                  className="w-full h-[380px] sm:h-[420px] object-cover rounded-2xl shadow-inner hover:scale-[1.01] transition-transform duration-500"
                />

                {/* Floating Name Badge */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-blue-900/95 border border-yellow-400/40 px-6 py-3 rounded-2xl shadow-2xl backdrop-blur-md text-center whitespace-nowrap">
                  <p className="text-sm font-extrabold text-white">Prof. Principal Name</p>
                  <p className="text-xs text-yellow-300 font-medium">Principal, The Lareb Public School</p>
                </div>

              </div>

            </div>
          </div>

          {/* Right Side: Message & Content */}
          <div className="lg:col-span-7 text-center lg:text-left flex flex-col items-center lg:items-start">

            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 bg-blue-800/80 border border-blue-400/30 text-yellow-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 shadow-lg backdrop-blur-md">
              <FaUserTie size={14} />
              <span>Message From The Desk</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Principal's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-200 to-white">
                Inspiring Message
              </span>
            </h2>

            {/* Quote Icon & Message Box */}
            <div className="relative mt-8 bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md shadow-xl w-full">
              <FaQuoteLeft className="text-yellow-400/30 text-4xl sm:text-5xl absolute -top-4 -left-2 pointer-events-none" />
              
              <p className="text-blue-100 leading-relaxed text-base sm:text-lg font-normal relative z-10 italic">
                "Education is the foundation of success. Our mission at The Lareb Public School is to develop confident, creative, and responsible students who can lead tomorrow and contribute positively to society."
              </p>

              {/* Signature / Sign-off */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-blue-300 uppercase tracking-wider block">Warm Regards,</span>
                  <span className="text-sm sm:text-base font-bold text-yellow-300">Management & Principal</span>
                </div>
                <div className="text-2xl">🎓</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default PrincipalMessage;
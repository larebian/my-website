import React from "react";
import { FaQuoteLeft, FaStar, FaUserCheck } from "react-icons/fa";

function Testimonials() {
  const testimonials = [
    {
      name: "Ali Ahmed",
      role: "Parent",
      text: "The Lareb Public School provides excellent education and caring teachers. My child's progress has been remarkable.",
      rating: 5,
    },
    {
      name: "Ayesha Khan",
      role: "Student",
      text: "I enjoy studying here because of the modern smart classrooms, computer labs, and very friendly environment.",
      rating: 5,
    },
    {
      name: "Muhammad Hassan",
      role: "Parent",
      text: "The management is professional, discipline is top-notch, and the academic standards are truly outstanding.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-bold uppercase tracking-wider text-xs sm:text-sm bg-blue-100/70 border border-blue-200 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            <FaUserCheck className="inline mr-1.5 mb-0.5" /> Testimonials
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">Say</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Valuable feedback and heartfelt reviews from our respected parents and brilliant students.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-950/5 border border-gray-100 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Top Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                {/* Quote Icon & Stars */}
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">
                    <FaQuoteLeft size={20} />
                  </div>
                  <div className="flex items-center gap-1 text-yellow-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                  </div>
                </div>

                {/* Review Text */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Author Details */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-900 text-white font-extrabold flex items-center justify-center text-lg shadow-md">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-blue-950">
                    {item.name}
                  </h3>
                  <span className="inline-block mt-0.5 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {item.role}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;
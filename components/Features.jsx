import React from "react";
import {
  FaLaptopCode,
  FaBook,
  FaFlask,
  FaFutbol,
  FaBus,
  FaChalkboardTeacher,
} from "react-icons/fa";

function Features() {
  const features = [
    {
      icon: <FaLaptopCode size={26} />,
      title: "Computer Lab",
      desc: "Modern computer laboratory equipped with the latest technology for practical IT learning.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: <FaBook size={26} />,
      title: "Library",
      desc: "Thousands of informative books, study materials, and a quiet environment for better learning.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      icon: <FaFlask size={26} />,
      title: "Science Lab",
      desc: "Fully equipped practical science laboratories for physics, chemistry, and biology experiments.",
      color: "bg-yellow-50 text-yellow-600 border-yellow-100",
    },
    {
      icon: <FaFutbol size={26} />,
      title: "Sports Facilities",
      desc: "Indoor and outdoor sports grounds to keep students physically active, disciplined, and energetic.",
      color: "bg-green-50 text-green-600 border-green-100",
    },
    {
      icon: <FaBus size={26} />,
      title: "Safe Transport",
      desc: "Reliable and secure school transport service covering all major routes for students.",
      color: "bg-purple-50 text-purple-600 border-purple-100",
    },
    {
      icon: <FaChalkboardTeacher size={26} />,
      title: "Expert Teachers",
      desc: "Highly qualified, experienced, and dedicated teaching staff focused on individual student grooming.",
      color: "bg-red-50 text-red-600 border-red-100",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-bold uppercase tracking-wider text-xs sm:text-sm bg-blue-100/70 border border-blue-200 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            Facilities & Strengths
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">Us?</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            We provide an exceptional learning environment designed to nurture every child's potential.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-950/5 border border-gray-100 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Box */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 border ${item.color} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950 group-hover:text-blue-700 transition-colors duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Features;
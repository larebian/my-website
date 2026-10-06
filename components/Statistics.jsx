import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaAward, FaCalendarCheck } from "react-icons/fa";

function Statistics() {
  const stats = [
    {
      number: "2500+",
      title: "Enrolled Students",
      icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
      bg: "bg-blue-50 border-blue-100",
    },
    {
      number: "120+",
      title: "Expert Teachers",
      icon: <FaChalkboardTeacher className="text-indigo-600 text-3xl" />,
      bg: "bg-indigo-50 border-indigo-100",
    },
    {
      number: "98%",
      title: "Board Result",
      icon: <FaAward className="text-yellow-500 text-3xl" />,
      bg: "bg-yellow-50 border-yellow-100",
    },
    {
      number: "2011",
      title: "Established Year",
      icon: <FaCalendarCheck className="text-green-600 text-3xl" />,
      bg: "bg-green-50 border-green-100",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-bold uppercase tracking-wider text-xs sm:text-sm bg-blue-100/70 border border-blue-200 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            Our Milestones
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            School Statistics in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">Numbers</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            A testament to our unwavering commitment to academic excellence and student success.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 text-center shadow-xl shadow-blue-950/5 border border-gray-100 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Top Gradient Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Icon Container */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${item.bg} shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-4xl sm:text-5xl font-black text-blue-950 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                {item.number}
              </h3>

              {/* Title */}
              <p className="mt-3 text-gray-600 font-semibold text-sm sm:text-base tracking-wide">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Statistics;
import React from "react";
import { useNavigate } from "react-router-dom"; // Navigation ke liye import kiya
import { FaBullhorn, FaCalendarAlt, FaGraduationCap, FaFileAlt, FaBell } from "react-icons/fa";

function NoticeSidebar() {
  const navigate = useNavigate(); // Hook initialize kiya

  // Announcements Data List with specific route paths
  const announcements = [
    {
      id: 1,
      category: "Admissions",
      title: "Admissions Open for Session 2026-27! Apply online now.",
      date: "July 25, 2026",
      icon: <FaBullhorn className="text-yellow-500" />,
      badgeBg: "bg-yellow-50 text-yellow-700 border-yellow-200",
      path: "/admission", // Click karne par is page par jayega
    },
    {
      id: 2,
      category: "Result",
      title: "Mid-Term Examination Results for Class 9th & 10th have been announced.",
      date: "July 20, 2026",
      icon: <FaGraduationCap className="text-blue-600" />,
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      path: "/results", // Click karne par result page par jayega
    },
    {
      id: 3,
      category: "Exam Date",
      title: "Final Term Board Exams schedule will start from August 15, 2026.",
      date: "July 18, 2026",
      icon: <FaCalendarAlt className="text-purple-600" />,
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      path: "/exams", // Click karne par exam schedule page par jayega
    },
    {
      id: 4,
      category: "Test Schedule",
      title: "Entry test for scholarships scheduled on coming Monday.",
      date: "July 15, 2026",
      icon: <FaFileAlt className="text-green-600" />,
      badgeBg: "bg-green-50 text-green-700 border-green-200",
      path: "/exams", // <-- Update kar ke '/exams' kar diya hai taake sahi page par redirect ho
    },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-indigo-950 px-5 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2.5">
          <div className="bg-yellow-400 text-blue-950 p-2 rounded-xl shadow-sm">
            <FaBell size={16} />
          </div>
          <div>
            <h3 className="font-extrabold text-sm tracking-wide">Notice Board</h3>
            <p className="text-[10px] text-blue-200 uppercase tracking-wider">Latest School Updates</p>
          </div>
        </div>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
        </span>
      </div>

      {/* Marquee / Scrollable Container */}
      <div className="p-4 flex-1 overflow-hidden relative">
        <marquee 
          direction="up" 
          scrollamount="3" 
          scrolldelay="60" 
          onMouseOver={(e) => e.currentTarget.stop()} 
          onMouseOut={(e) => e.currentTarget.start()} 
          className="h-[380px]"
        >
          <div className="space-y-3.5 pr-2">
            {announcements.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(item.path)} // Click event par specific route par redirect karega
                className="p-3.5 rounded-xl border border-gray-100 bg-gray-50/60 hover:bg-blue-50/60 hover:border-blue-300 transition-all duration-200 group cursor-pointer shadow-sm hover:shadow"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${item.badgeBg}`}>
                    {item.category}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">{item.date}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <p className="text-xs font-semibold text-gray-800 group-hover:text-blue-900 leading-relaxed">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </marquee>
      </div>

      {/* Footer / Quick Link */}
      <div className="p-3 bg-gray-50 border-t border-gray-100 text-center">
        <button
          onClick={() => navigate("/announcements")}
          className="text-xs font-bold text-blue-700 hover:text-blue-950 transition-colors uppercase tracking-wider block w-full"
        >
          View All Announcements &rarr;
        </button>
      </div>

    </div>
  );
}

export default NoticeSidebar;
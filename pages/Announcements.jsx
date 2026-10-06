import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBullhorn, FaCalendarAlt, FaGraduationCap, FaFileAlt, FaSearch, FaArrowLeft } from "react-icons/fa";

function Announcements() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // All Announcements list
  const allAnnouncements = [
    {
      id: 1,
      category: "Admissions",
      title: "Admissions Open for Session 2026-27! Apply online now.",
      date: "July 25, 2026",
      description: "Applications are now invited for Nursery to Class 8th for the new academic session. Secure your child's future with our advanced digital labs and qualified faculty.",
      icon: <FaBullhorn className="text-yellow-500" size={20} />,
      badgeBg: "bg-yellow-50 text-yellow-700 border-yellow-200",
      path: "/admission",
    },
    {
      id: 2,
      category: "Result",
      title: "Mid-Term Examination Results for Class 9th & 10th have been announced.",
      date: "July 20, 2026",
      description: "Students can now check their detailed term results by entering their roll numbers on the student portal or visiting the examinations section.",
      icon: <FaGraduationCap className="text-blue-600" size={20} />,
      badgeBg: "bg-blue-50 text-blue-700 border-blue-200",
      path: "/results",
    },
    {
      id: 3,
      category: "Exam Date",
      title: "Final Term Board Exams schedule will start from August 15, 2026.",
      date: "July 18, 2026",
      description: "Final term date sheet has been published. All students are advised to clear their dues before August 10 to collect their roll number slips.",
      icon: <FaCalendarAlt className="text-purple-600" size={20} />,
      badgeBg: "bg-purple-50 text-purple-700 border-purple-200",
      path: "/exams",
    },
    {
      id: 4,
      category: "Test Schedule",
      title: "Entry test for scholarships scheduled on coming Monday.",
      date: "July 15, 2026",
      description: "A special scholarship entry test for bright and talented students will take place this Monday at the main campus auditorium at 9:00 AM sharp.",
      icon: <FaFileAlt className="text-green-600" size={20} />,
      badgeBg: "bg-green-50 text-green-700 border-green-200",
      path: "/exams",
    },
    {
      id: 5,
      category: "Sports",
      title: "Annual Inter-School Cricket Tournament Registration Open.",
      date: "July 10, 2026",
      description: "Sports committee has announced registration for the upcoming inter-school tournament. Interested students from Class 6th to 8th can submit names to sports instructors.",
      icon: <FaBullhorn className="text-indigo-500" size={20} />,
      badgeBg: "bg-indigo-50 text-indigo-700 border-indigo-200",
      path: "/",
    },
  ];

  const categories = ["All", "Admissions", "Result", "Exam Date", "Test Schedule", "Sports"];

  // Filter logic
  const filteredAnnouncements = allAnnouncements.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header & Back Button */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
          <div className="space-y-1">
            <span className="bg-blue-50 text-blue-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider border border-blue-200">
              School Bulletin
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              All Announcements & Notices
            </h1>
            <p className="text-xs text-gray-500">
              Stay updated with the latest news, admission notices, and examination alerts.
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold rounded-xl text-xs flex items-center gap-2 transition-colors cursor-pointer"
          >
            <FaArrowLeft size={12} /> Back
          </button>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700"
            />
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-4">
          {filteredAnnouncements.length > 0 ? (
            filteredAnnouncements.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(item.path)}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200 cursor-pointer group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 group-hover:bg-blue-50 transition-colors shrink-0">
                    {item.icon}
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${item.badgeBg}`}>
                        {item.category}
                      </span>
                      <span className="text-[11px] text-gray-400 font-medium">• {item.date}</span>
                    </div>
                    <h3 className="text-sm font-extrabold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="self-end sm:self-center shrink-0">
                  <span className="text-xs font-bold text-blue-700 group-hover:underline">
                    View Details &rarr;
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="py-12 text-center text-gray-400 bg-white rounded-2xl border border-gray-100">
              <p className="text-sm font-semibold">No announcements found matching your search.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default Announcements;
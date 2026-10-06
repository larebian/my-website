import React from "react";
import { Link } from "react-router-dom";
import { FaRegCalendarAlt, FaBullhorn, FaArrowRight } from "react-icons/fa";

function News() {
  const news = [
    {
      id: 1, // 👈 Unique ID
      title: "Admissions Open 2026",
      date: "25 July 2026",
      desc: "Enroll your child today at The Lareb Public School for the new academic session. Limited seats available.",
      badge: "Admission",
    },
    {
      id: 2, // 👈 Unique ID
      title: "Science Exhibition Next Week",
      date: "30 July 2026",
      desc: "Students will showcase innovative science working models and experimental projects in the school hall.",
      badge: "Event",
    },
    {
      id: 3, // 👈 Unique ID
      title: "Monthly Test Schedule Uploaded",
      date: "02 August 2026",
      desc: "The upcoming monthly assessment timetable has been uploaded. Students and parents can check portal updates.",
      badge: "Academics",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-bold uppercase tracking-wider text-xs sm:text-sm bg-blue-100/70 border border-blue-200 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            <FaBullhorn className="inline mr-1.5 mb-0.5" /> Updates & Announcements
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">News</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Stay updated with all the latest happenings, events, and school announcements.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-950/5 border border-gray-100 hover:border-blue-300 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                    {item.badge}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-500">
                    <FaRegCalendarAlt className="text-blue-600" />
                    <span>{item.date}</span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-blue-950 group-hover:text-blue-700 transition-colors duration-300 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Read More Link (Redirects to Detail Page) */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 group-hover:text-blue-900 transition-colors"
                >
                  <span>Read Full Update</span>
                  <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default News;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeft, FaRegCalendarAlt, FaBullhorn } from "react-icons/fa";

function NewsDetail() {
  const { id } = useParams();

  // Saari news ka database (Aap ise API ya props se bhi la sakte hain)
  const allNews = {
    1: {
      title: "Admissions Open 2026",
      date: "25 July 2026",
      badge: "Admission",
      desc: "Enroll your child today at The Lareb Public School for the new academic session. We offer high-quality education, modern computer labs, highly qualified faculty, and a secure environment for students. Limited seats are available for classes Nursery to 10th Grade.",
    },
    2: {
      title: "Science Exhibition Next Week",
      date: "30 July 2026",
      badge: "Event",
      desc: "Students will showcase innovative science working models, robotics projects, and experimental displays in the main school hall. Parents and guests are cordially invited to encourage our young scientists.",
    },
    3: {
      title: "Monthly Test Schedule Uploaded",
      date: "02 August 2026",
      badge: "Academics",
      desc: "The upcoming monthly assessment timetable has been successfully uploaded to the student portal. All students are advised to prepare thoroughly according to the prescribed syllabus.",
    },
  };

  const newsItem = allNews[id] || {
    title: "News Not Found",
    date: "",
    badge: "Error",
    desc: "The requested news article does not exist or has been removed.",
  };

  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white min-h-screen px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl shadow-xl border border-gray-100">
        
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 mb-8 transition-colors"
        >
          <FaArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        {/* Badge & Date */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
            {newsItem.badge}
          </span>
          <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-500">
            <FaRegCalendarAlt className="text-blue-600" />
            <span>{newsItem.date}</span>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight leading-tight">
          {newsItem.title}
        </h1>

        {/* Divider */}
        <div className="w-20 h-1.5 bg-yellow-400 my-6 rounded-full" />

        {/* Full Content / Description */}
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          {newsItem.desc}
        </p>

      </div>
    </section>
  );
}

export default NewsDetail;
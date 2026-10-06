import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaBookReader,
  FaCheckCircle,
  FaHandshake,
} from "react-icons/fa";

// Logo / Principal Image Path
import principalImg from "../assets/images/principal.jpeg"; 

function About() {
  // Page load hote hi top par scroll karwane ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 1. Hero / Header Section */}
      <section className="bg-blue-900 text-white py-16 px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <span className="bg-blue-800 text-blue-200 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-block mb-3 border border-blue-700">
            Welcome to LPS
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 text-white">
            About The Lareb Public School
          </h1>
          <p className="text-blue-100 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Nurturing young minds, fostering leadership, and building a foundation for lifelong learning and success.
          </p>
        </div>
      </section>

      {/* 2. School Overview & Stats */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 leading-snug">
              Empowering Students To <span className="text-blue-700">Lead Tomorrow</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
              Founded with a vision to provide quality education, <strong className="text-gray-900">The Lareb Public School</strong> is committed to academic excellence, character development, and holistic student growth.
            </p>
            <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
              We focus on modern teaching methodologies combined with strong ethical values, ensuring our students excel academically and socially in an ever-changing world.
            </p>

            {/* Feature Points */}
            <div className="space-y-3">
              {[
                "Experienced & Dedicated Faculty",
                "Modern Labs & Smart Classrooms",
                "Focus on Character Building & Discipline",
                "Comprehensive Co-Curricular Activities",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <FaCheckCircle className="text-blue-700 shrink-0" size={18} />
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Statistics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <FaGraduationCap className="text-blue-700 mx-auto mb-2" size={32} />
              <h3 className="text-2xl font-black text-gray-900">1500+</h3>
              <p className="text-xs font-medium text-gray-500">Students Enrolled</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <FaUsers className="text-blue-700 mx-auto mb-2" size={32} />
              <h3 className="text-2xl font-black text-gray-900">80+</h3>
              <p className="text-xs font-medium text-gray-500">Qualified Teachers</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <FaAward className="text-blue-700 mx-auto mb-2" size={32} />
              <h3 className="text-2xl font-black text-gray-900">100%</h3>
              <p className="text-xs font-medium text-gray-500">Matric Pass Rate</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center hover:shadow-md transition">
              <FaBookReader className="text-blue-700 mx-auto mb-2" size={32} />
              <h3 className="text-2xl font-black text-gray-900">20+</h3>
              <p className="text-xs font-medium text-gray-500">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="bg-white py-12 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
              Our Vision & Mission
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Guiding principles behind our educational journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center mb-4">
                <FaBookReader size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To be a premier educational institution recognized for fostering academic excellence, innovation, and strong moral values, empowering students to become responsible global citizens.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-700 text-white rounded-xl flex items-center justify-center mb-4">
                <FaHandshake size={22} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                To provide a supportive, inclusive, and high-quality learning environment where students explore their full potential through modern curriculum, critical thinking, and character building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Principal's Message Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <img
            src={principalImg}
            alt="Principal"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover border-4 border-blue-700 shrink-0 shadow-md"
          />
          <div>
            <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
              Leadership
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Principal's Message
            </h3>
            <p className="text-gray-600 text-sm sm:text-base italic mb-4 leading-relaxed">
              "At The Lareb Public School, we believe every child is unique and possesses immense potential. Our mission is to illuminate that potential by providing a safe, nurturing, and challenging environment."
            </p>
            <h4 className="text-base font-bold text-gray-900">
              Principal Name Here
            </h4>
            <p className="text-xs text-gray-500 font-medium">
              Principal, The Lareb Public School
            </p>
          </div>
        </div>
      </section>

      {/* 5. Call To Action (CTA) */}
      <section className="bg-blue-900 text-white py-12 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3 text-white">
            Want to Join The Lareb Public School Family?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base mb-6">
            Admissions open for the upcoming academic session. Secure your child's future today.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/admission"
              className="bg-white text-blue-900 font-bold px-7 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition"
            >
              Apply Online
            </Link>
            <Link
              to="/contact"
              className="border border-blue-300 text-white font-bold px-7 py-3 rounded-xl hover:bg-blue-800 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
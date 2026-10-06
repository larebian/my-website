import React from "react";
import { Link } from "react-router-dom";
import { FaImages, FaArrowRight, FaSearchPlus } from "react-icons/fa";

import gallery1 from "../assets/images/gallery1.jpeg";
import gallery2 from "../assets/images/gallery2.jpeg";
import gallery3 from "../assets/images/gallery3.jpeg";
import gallery4 from "../assets/images/gallery4.jpeg";

function GalleryPreview() {
  const galleryItems = [
    {
      image: gallery1,
      title: "Smart Classrooms",
      desc: "Interactive learning environment for students.",
    },
    {
      image: gallery2,
      title: "Computer Laboratory",
      desc: "Latest technology and IT practical sessions.",
    },
    {
      image: gallery3,
      title: "Science Laboratory",
      desc: "Hands-on physics, chemistry & biology labs.",
    },
    {
      image: gallery4,
      title: "Sports & Activities",
      desc: "Physical fitness and extracurricular events.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-700 font-bold uppercase tracking-wider text-xs sm:text-sm bg-blue-100/70 border border-blue-200 px-4 py-1.5 rounded-full mb-4 inline-block shadow-sm">
            <FaImages className="inline mr-1.5 mb-0.5" /> Campus Memories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-950 tracking-tight">
            School <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-800">Gallery</span>
          </h2>
          <p className="text-gray-600 mt-4 text-sm sm:text-base">
            Explore our classrooms, events, laboratories, and vibrant campus life at The Lareb Public School.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-blue-950/5 border border-gray-100 group hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-blue-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                
                {/* Floating Icon Badge on Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-950/40 backdrop-blur-[2px]">
                  <span className="bg-yellow-400 text-blue-950 p-3 rounded-2xl shadow-lg font-bold">
                    <FaSearchPlus size={20} />
                  </span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6">
                <h3 className="text-xl font-extrabold text-blue-950 group-hover:text-blue-700 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Gallery Button */}
        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-2xl shadow-xl shadow-blue-700/25 hover:shadow-blue-700/40 hover:-translate-y-0.5 transition-all duration-300 text-sm uppercase tracking-wider group"
          >
            <span>View Full Gallery</span>
            <FaArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </div>

      </div>
    </section>
  );
}

export default GalleryPreview;
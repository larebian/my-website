import { useState } from "react";
import { 
  FaImages, 
  FaFilter, 
  FaExpand, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight, 
  FaSearchPlus 
} from "react-icons/fa";

// Assets folder se images ka correct import path
import gallery1 from "../assets/images/gallery1.jpeg";
import gallery2 from "../assets/images/gallery2.jpeg";
import gallery3 from "../assets/images/gallery3.jpeg";
import gallery4 from "../assets/images/gallery4.jpeg";
import student1 from "../assets/images/student1.jpeg";
import student2 from "../assets/images/student2.jpeg";
import student3 from "../assets/images/student3.jpeg";
import heroImg from "../assets/images/hero.jpeg";
import principalImg from "../assets/images/principal.jpeg";

function GalleryPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery Array using your actual local assets
  const galleryItems = [
    {
      id: 1,
      title: "Students Activities & Academic Excellence",
      category: "students",
      src: student1,
      span: "col-span-1 md:col-span-2 row-span-2", // Large Featured Card
      badge: "Student Life"
    },
    {
      id: 2,
      title: "School Campus Event Showcase",
      category: "events",
      src: gallery1,
      span: "col-span-1 row-span-1",
      badge: "Annual Event"
    },
    {
      id: 3,
      title: "Interactive Classroom & STEM Learning",
      category: "students",
      src: student2,
      span: "col-span-1 row-span-1",
      badge: "Classroom"
    },
    {
      id: 4,
      title: "School Sports & Co-Curricular Activities",
      category: "sports",
      src: gallery2,
      span: "col-span-1 row-span-2", // Tall Card
      badge: "Campus Life"
    },
    {
      id: 5,
      title: "Main Campus Overview & Infrastructure",
      category: "campus",
      src: heroImg,
      span: "col-span-1 row-span-1",
      badge: "Campus View"
    },
    {
      id: 6,
      title: "Student Group Collaboration",
      category: "students",
      src: student3,
      span: "col-span-1 md:col-span-2 row-span-1", // Wide Card
      badge: "Leadership"
    },
    {
      id: 7,
      title: "Science & Innovation Fair Showcase",
      category: "events",
      src: gallery3,
      span: "col-span-1 row-span-1",
      badge: "Exhibition"
    },
    {
      id: 8,
      title: "Principal & Leadership Desk",
      category: "campus",
      src: principalImg,
      span: "col-span-1 row-span-1",
      badge: "Administration"
    },
    {
      id: 9,
      title: "Cultural & Co-Curricular Gala",
      category: "events",
      src: gallery4,
      span: "col-span-1 row-span-1",
      badge: "Celebration"
    }
  ];

  const filteredItems = activeTab === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const openLightbox = (item, index) => {
    setSelectedImg(item);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const nextIdx = (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(nextIdx);
    setSelectedImg(filteredItems[nextIdx]);
  };

  const prevImage = () => {
    const prevIdx = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentIndex(prevIdx);
    setSelectedImg(filteredItems[prevIdx]);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Banner Section */}
        <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaImages /> Campus Life Showcase
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              Photo & Event Gallery
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Explore moments captured at <span className="text-white font-semibold">The Lareb Public School</span>—from student activities to annual sports and grand celebrations.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider px-2">
            <FaFilter className="text-blue-600" /> Filter Gallery:
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Photos" },
              { id: "students", label: "Students & Learning" },
              { id: "events", label: "School Events" },
              { id: "sports", label: "Sports & Games" },
              { id: "campus", label: "Campus & Admin" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 auto-rows-[230px]">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, idx)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer bg-slate-900 shadow-sm hover:shadow-2xl transition-all duration-500 ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Category Badge */}
              <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-blue-950 text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-sm">
                {item.badge}
              </span>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                <FaSearchPlus size={14} />
              </div>

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-base sm:text-lg font-bold leading-snug drop-shadow-md">
                  {item.title}
                </h3>
                <span className="text-blue-300 text-xs font-medium flex items-center gap-1.5 mt-1">
                  <FaExpand size={10} /> Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn">
          
          <button
            onClick={() => setSelectedImg(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-50"
          >
            <FaTimes size={20} />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all z-50"
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center space-y-4">
            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="max-h-[75vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl border border-white/10"
            />
            
            <div className="text-center space-y-1">
              <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">
                {selectedImg.badge}
              </span>
              <h2 className="text-white text-xl sm:text-2xl font-bold">
                {selectedImg.title}
              </h2>
            </div>
          </div>

          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3.5 rounded-full transition-all z-50"
          >
            <FaChevronRight size={20} />
          </button>

        </div>
      )}
    </div>
  );
}

export default GalleryPage;
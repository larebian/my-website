import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChild,
  FaShapes,
  FaPalette,
  FaMusic,
  FaHeart,
  FaSmile,
  FaAppleAlt,
  FaShieldAlt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaPuzzlePiece,
  FaBookOpen,
} from "react-icons/fa";

function PreSchool() {
  const [activeTab, setActiveTab] = useState("playgroup");

  // Age Classes Data
  const classesData = {
    playgroup: {
      title: "Playgroup Section",
      age: "2.5 - 3.5 Years",
      timing: "08:30 AM - 11:30 AM",
      desc: "A warm, nurturing environment focused on sensory exploration, social interaction, basic motor skills, and creative play.",
      highlights: [
        "Sensory & Tactile Play Activities",
        "Basic Alphabet & Number Recognition",
        "Socialization & Group Sharing Skills",
        "Phonetics & Nursery Rhymes",
      ],
      color: "from-pink-500 to-rose-500",
      lightBg: "bg-pink-50 border-pink-200 text-pink-700",
    },
    nursery: {
      title: "Nursery Section",
      age: "3.5 - 4.5 Years",
      timing: "08:00 AM - 12:30 PM",
      desc: "Building confidence through structured learning, fine motor skill enhancement, language building, and fun mathematical concepts.",
      highlights: [
        "Pencil Hold & Fine Tracing Skills",
        "Phonics Sound Building & Vocabulary",
        "Counting & Geometric Shape Identification",
        "Creative Arts, Crafts & Storytelling",
      ],
      color: "from-purple-500 to-indigo-500",
      lightBg: "bg-purple-50 border-purple-200 text-purple-700",
    },
    prep: {
      title: "Kindergarten / Prep",
      age: "4.5 - 5.5 Years",
      timing: "08:00 AM - 12:30 PM",
      desc: "Preparing young minds for primary school with early reading, basic addition/subtraction, logical thinking, and independent habits.",
      highlights: [
        "Blends, CVC Words & Simple Reading",
        "Basic Math & Analytical Thinking",
        "Urdu & English Writing Foundations",
        "Basic Computer & Interactive Smart-board Play",
      ],
      color: "from-blue-500 to-cyan-500",
      lightBg: "bg-blue-50 border-blue-200 text-blue-700",
    },
  };

  // Modern Features Card
  const features = [
    {
      icon: <FaShapes className="size-7 text-pink-500" />,
      title: "Activity-Based Learning",
      desc: "Montessori-inspired hands-on learning kits that spark curiosity and problem-solving skills.",
      bg: "bg-pink-50/70 border-pink-100",
    },
    {
      icon: <FaShieldAlt className="size-7 text-emerald-500" />,
      title: "Child-Safe Environment",
      desc: "Padded play zones, CCTV monitored rooms, and non-toxic learning materials for total safety.",
      bg: "bg-emerald-50/70 border-emerald-100",
    },
    {
      icon: <FaHeart className="size-7 text-rose-500" />,
      title: "Caring & Trained Staff",
      desc: "Certified early childhood educators delivering personalized care and emotional support.",
      bg: "bg-rose-50/70 border-rose-100",
    },
    {
      icon: <FaPalette className="size-7 text-amber-500" />,
      title: "Creative Arts & Music",
      desc: "Daily arts, crafts, and interactive music sessions for creative expression and joy.",
      bg: "bg-amber-50/70 border-amber-100",
    },
  ];

  // Daily Schedule Timeline
  const dailyRoutine = [
    { time: "08:00 AM", title: "Morning Assembly & Circle Time", desc: "Rhymes, morning greetings, and warm-up exercises." },
    { time: "09:00 AM", title: "Phonics & Language Fun", desc: "Interactive alphabet games, storytelling, and sound practice." },
    { time: "10:00 AM", title: "Healthy Snack & Hygiene Break", desc: "Supervised washroom routine and nutritious snack time." },
    { time: "10:40 AM", title: "Activity & Outdoor Play", desc: "Sensory games, play-area fun, and motor skill exercises." },
    { time: "11:30 AM", title: "Maths, Shapes & Creativity", desc: "Coloring, puzzle building, counting blocks, and crafts." },
    { time: "12:30 PM", title: "Pack Up & Home Time", desc: "Reviewing the day, story wrap-up, and safe departure." },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-indigo-900 via-blue-900 to-purple-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-400/30 text-pink-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaChild className="text-pink-400" /> Early Childhood Education Wing
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Pre-School Section
            </h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              At <span className="font-semibold text-white">The Lareb Public School</span>, our Pre-School section provides a joyful, safe, and activity-filled environment where young minds take their very first steps toward lifelong learning.
            </p>

            {/* Quick Badges */}
            <div className="pt-2 flex flex-wrap gap-3">
              <span className="bg-white/10 text-white text-xs px-3.5 py-1.5 rounded-xl border border-white/10 font-medium">
                🎨 Play-Based Learning
              </span>
              <span className="bg-white/10 text-white text-xs px-3.5 py-1.5 rounded-xl border border-white/10 font-medium">
                🧸 Activity-Oriented Classrooms
              </span>
              <span className="bg-white/10 text-white text-xs px-3.5 py-1.5 rounded-xl border border-white/10 font-medium">
                🛡️ 100% Safe & CCTV Monitored
              </span>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
              Why Parents Choose Our Pre-School
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm">
              Specially designed curriculum to foster physical, social, and cognitive growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className={`p-6 rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all duration-300 space-y-3`}
              >
                <div className="p-3 bg-slate-50 rounded-2xl w-fit border border-gray-100">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Classes Tabs Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
              Classes & Age Groups
            </h2>
            <p className="text-xs sm:text-sm text-gray-500">
              Click on a grade below to see specific learning objectives and timing details.
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex justify-center gap-3 flex-wrap">
            {Object.keys(classesData).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 uppercase tracking-wider ${
                  activeTab === key
                    ? "bg-blue-900 text-white shadow-lg shadow-blue-900/20 scale-105"
                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {key}
              </button>
            ))}
          </div>

          {/* Tab Content Box */}
          {classesData[activeTab] && (
            <div className="bg-slate-50/70 border border-gray-100 rounded-3xl p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200/60 pb-6">
                <div>
                  <h3 className="text-2xl font-extrabold text-gray-900">
                    {classesData[activeTab].title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {classesData[activeTab].desc}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full border ${classesData[activeTab].lightBg}`}>
                    Age: {classesData[activeTab].age}
                  </span>
                  <span className="text-xs font-bold px-3 py-1.5 rounded-full border bg-gray-100 text-gray-700 border-gray-200">
                    <FaClock className="inline mr-1" /> {classesData[activeTab].timing}
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-gray-800 uppercase tracking-wider mb-4">
                  Key Curriculum Focus:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {classesData[activeTab].highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 shadow-xs"
                    >
                      <FaCheckCircle className="text-emerald-500 size-4 shrink-0" />
                      <span className="text-xs font-medium text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Daily Routine Timeline */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-extrabold text-blue-950">
              A Day in Pre-School
            </h3>
            <p className="text-xs text-gray-500">
              Structured yet play-filled schedule designed to keep toddlers engaged and energized.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dailyRoutine.map((item, index) => (
              <div
                key={index}
                className="p-5 bg-slate-50 rounded-2xl border border-gray-100 space-y-2 relative"
              >
                <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md inline-block">
                  {item.time}
                </span>
                <h4 className="font-bold text-sm text-gray-900">{item.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-3xl p-8 text-white flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold">Enroll Your Child Today!</h4>
            <p className="text-xs text-blue-200">
              Limited seats available for Nursery, Playgroup & Prep admissions (Session 2026-27).
            </p>
          </div>
          <Link
            to="/admission"
            className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-xs px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-400/20 shrink-0 inline-flex items-center gap-2"
          >
            Apply For Admission <FaArrowRight size={10} />
          </Link>
        </div>

      </div>
    </div>
  );
}

export default PreSchool;
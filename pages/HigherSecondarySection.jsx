import { useState } from "react";
import { FaUserGraduate, FaDna, FaLaptopCode, FaCogs, FaCheckCircle } from "react-icons/fa";

function HigherSecondarySection() {
  const [stream, setStream] = useState("fsc_pre_med");

  const streams = {
    fsc_pre_med: { title: "F.Sc Pre-Medical", desc: "Designed for future medical doctors, surgeons, and bio-technologists.", subjects: ["English Compulsory", "Urdu Compulsory", "Islamic Education / Pak Studies", "Physics", "Chemistry", "Biology"] },
    fsc_pre_eng: { title: "F.Sc Pre-Engineering", desc: "For students pursuing careers in civil, mechanical, electrical, and aerospace engineering.", subjects: ["English Compulsory", "Urdu Compulsory", "Islamic Education / Pak Studies", "Physics", "Chemistry", "Mathematics"] },
    ics: { title: "ICS (Computer Science)", desc: "Tailored for software engineering, artificial intelligence, and IT discipline careers.", subjects: ["English Compulsory", "Urdu Compulsory", "Islamic Education / Pak Studies", "Physics / Statistics", "Computer Science", "Mathematics"] }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="relative bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaUserGraduate /> Intermediate (Grades 11 & 12 / HSSC)
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Higher Secondary Section</h1>
            <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
              Excellence in intermediate education with board top-rank coaching, entry test preparation, and career counseling.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          <div className="flex justify-center gap-3 flex-wrap">
            {Object.keys(streams).map((key) => (
              <button
                key={key}
                onClick={() => setStream(key)}
                className={`px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all ${
                  stream === key ? "bg-blue-950 text-white shadow-lg" : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {streams[key].title}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-100 space-y-4">
            <h3 className="text-2xl font-extrabold text-gray-900">{streams[stream].title}</h3>
            <p className="text-xs text-gray-600">{streams[stream].desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-4">
              {streams[stream].subjects.map((sub, idx) => (
                <div key={idx} className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center gap-3 text-xs font-bold text-gray-800 shadow-xs">
                  <FaCheckCircle className="text-amber-500 shrink-0" /> {sub}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HigherSecondarySection;
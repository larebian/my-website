import { useState } from "react";
import { FaGraduationCap, FaAtom, FaLaptopCode, FaCalculator, FaCheckCircle } from "react-icons/fa";

function SecondarySection() {
  const [activeGroup, setActiveGroup] = useState("bio");

  const groups = {
    bio: {
      name: "Matric Science (Biology Group)",
      desc: "Ideal for aspiring medical professionals and general biological science pathways.",
      subjects: ["English Compulsory", "Urdu Compulsory", "Islamiyat / Ethics", "Pakistan Studies", "Mathematics", "Physics", "Chemistry", "Biology"]
    },
    cs: {
      name: "Matric Science (Computer Group)",
      desc: "Tailored for future software engineers, IT specialists, and technology innovators.",
      subjects: ["English Compulsory", "Urdu Compulsory", "Islamiyat / Ethics", "Pakistan Studies", "Mathematics", "Physics", "Chemistry", "Computer Science"]
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="relative bg-gradient-to-r from-purple-900 via-indigo-950 to-slate-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaGraduationCap /> Matriculation (Grades 9 & 10)
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Secondary School Section</h1>
            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Rigorous Board Exam preparation backed by concept clarity, mock tests, and state-of-the-art laboratory practice.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">Academic Discipline Groups</h2>
            <p className="text-xs text-gray-500">Select group stream to review complete subject combination.</p>
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => setActiveGroup("bio")}
              className={`px-6 py-3 rounded-2xl font-bold text-xs transition-all ${
                activeGroup === "bio" ? "bg-purple-900 text-white shadow-lg" : "bg-slate-100 text-gray-600 hover:bg-slate-200"
              }`}
            >
              Biology Group
            </button>
            <button
              onClick={() => setActiveGroup("cs")}
              className={`px-6 py-3 rounded-2xl font-bold text-xs transition-all ${
                activeGroup === "cs" ? "bg-purple-900 text-white shadow-lg" : "bg-slate-100 text-gray-600 hover:bg-slate-200"
              }`}
            >
              Computer Science Group
            </button>
          </div>

          <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-gray-100 space-y-4">
            <h3 className="text-xl font-bold text-gray-900">{groups[activeGroup].name}</h3>
            <p className="text-xs text-gray-600">{groups[activeGroup].desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-4">
              {groups[activeGroup].subjects.map((sub, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-2xl border border-gray-100 flex items-center gap-2 text-xs font-semibold text-gray-800 shadow-xs">
                  <FaCheckCircle className="text-purple-600 shrink-0" /> {sub}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondarySection;
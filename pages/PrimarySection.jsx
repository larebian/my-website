import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBookReader, FaBrain, FaAward, FaFlask, FaClock, FaCheckCircle, FaArrowRight } from "react-icons/fa";

function PrimarySection() {
  const [activeGrade, setActiveGrade] = useState("grade1");

  const gradeData = {
    grade1: { title: "Grade 1", subjects: ["English Literacy", "Elementary Math", "Urdu Language", "General Knowledge", "Art & Design"], focus: "Building fundamental literacy and numerical confidence through interactive activity worksheets." },
    grade2: { title: "Grade 2", subjects: ["English Comprehension", "Mathematics", "Urdu Grammar", "Basic Science", "Islamiat", "Computer Basics"], focus: "Developing independent reading, basic scientific curiosity, and team problem solving." },
    grade3: { title: "Grade 3", subjects: ["English Creative Writing", "Maths & Geometry", "Urdu Literature", "General Science", "Social Studies", "ICT Skills"], focus: "Encouraging structured analytical reasoning, presentation skills, and digital literacy." },
    grade4: { title: "Grade 4", subjects: ["Advanced English", "Mathematics & Logic", "Urdu", "Science Practical Study", "History & Civics", "Computer Lab"], focus: "Enhancing conceptual understanding, research-based group tasks, and public speaking." },
    grade5: { title: "Grade 5", subjects: ["English Literature", "Pre-Algebra Mathematics", "Urdu Composition", "General Science Labs", "Social Studies", "Computer Studies"], focus: "Preparing students for Middle School transitions through rigorous assessment and project projects." }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaBookReader /> Grades 1 to 5
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Primary School Section</h1>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Fostering curiosity, critical thinking, and character building during the foundational years at <span className="text-white font-semibold">The Lareb Public School</span>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-2">
            <FaBrain className="text-emerald-600 size-8 mb-2" />
            <h3 className="font-bold text-gray-900 text-base">Conceptual Foundation</h3>
            <p className="text-xs text-gray-600">Focus on experiential learning rather than rote memorization.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-2">
            <FaFlask className="text-cyan-600 size-8 mb-2" />
            <h3 className="font-bold text-gray-900 text-base">Science & STEM Labs</h3>
            <p className="text-xs text-gray-600">Early exposure to hands-on experiments and digital tools.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-2">
            <FaAward className="text-amber-500 size-8 mb-2" />
            <h3 className="font-bold text-gray-900 text-base">Character Building</h3>
            <p className="text-xs text-gray-600">Emphasis on ethics, discipline, public speaking, and teamwork.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">Grade Breakdown</h2>
            <p className="text-xs sm:text-sm text-gray-500">Explore core subjects and development focus for each primary level.</p>
          </div>

          <div className="flex justify-center gap-2 flex-wrap">
            {Object.keys(gradeData).map((k) => (
              <button
                key={k}
                onClick={() => setActiveGrade(k)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all ${
                  activeGrade === k ? "bg-emerald-600 text-white shadow-lg" : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {gradeData[k].title}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 space-y-4">
            <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              💡 {gradeData[activeGrade].focus}
            </p>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-700">Core Curriculum Subjects:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {gradeData[activeGrade].subjects.map((s, idx) => (
                <div key={idx} className="bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-2 text-xs font-medium text-gray-800">
                  <FaCheckCircle className="text-emerald-500 shrink-0" /> {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrimarySection;
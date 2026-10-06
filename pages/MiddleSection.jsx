import { useState } from "react";
import { FaLaptopCode, FaMicroscope, FaProjectDiagram, FaGlobe, FaCheckCircle } from "react-icons/fa";

function MiddleSection() {
  const [activeGrade, setActiveGrade] = useState("grade6");

  const grades = {
    grade6: { title: "Grade 6", subjects: ["English Literature & Composition", "Mathematics", "General Science", "Urdu Advanced", "Islamiat", "History & Geography", "Computer Studies"] },
    grade7: { title: "Grade 7", subjects: ["English Language Skills", "Algebra & Geometry", "Integrated Physics & Chemistry", "Biology Basics", "Urdu Studies", "Social Studies", "ICT Lab"] },
    grade8: { title: "Grade 8", subjects: ["Advanced English & Essay Writing", "Pre-Board Mathematics", "Physics & Chemistry", "Biology", "Urdu Grammar & Composition", "Pakistan Studies", "Computer Application"] }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaLaptopCode /> Grades 6 to 8
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Middle School Section</h1>
            <p className="text-indigo-100 text-sm sm:text-base leading-relaxed">
              Bridging elementary foundations with high school academic rigor through analytical problem solving and scientific inquiry.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-2">
            <FaMicroscope className="text-indigo-600 size-8 mb-2" />
            <h3 className="font-bold text-gray-900 text-base">Practical Science Labs</h3>
            <p className="text-xs text-gray-600">Weekly hands-on laboratory sessions for Physics, Chemistry, and Biology.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-2">
            <FaProjectDiagram className="text-blue-600 size-8 mb-2" />
            <h3 className="font-bold text-gray-900 text-base">Project-Based Learning</h3>
            <p className="text-xs text-gray-600">Team research papers, exhibition models, and tech presentations.</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-2">
            <FaGlobe className="text-teal-600 size-8 mb-2" />
            <h3 className="font-bold text-gray-900 text-base">Global Exposure</h3>
            <p className="text-xs text-gray-600">Debates, quiz competitions, and leadership development programs.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-sm border border-gray-100 space-y-8">
          <div className="flex justify-center gap-3">
            {Object.keys(grades).map((k) => (
              <button
                key={k}
                onClick={() => setActiveGrade(k)}
                className={`px-6 py-3 rounded-2xl font-bold text-xs uppercase tracking-wider transition-all ${
                  activeGrade === k ? "bg-indigo-900 text-white shadow-lg" : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {grades[k].title}
              </button>
            ))}
          </div>

          <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-800">Curriculum Subjects:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {grades[activeGrade].subjects.map((sub, i) => (
                <div key={i} className="bg-white p-3 rounded-xl border border-gray-100 flex items-center gap-2 text-xs font-medium text-gray-800">
                  <FaCheckCircle className="text-indigo-600 shrink-0" /> {sub}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
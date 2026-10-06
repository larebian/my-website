import { FaBookOpen, FaLightbulb, FaAward, FaChalkboardTeacher } from "react-icons/fa";

function CurriculumPage() {
  const pillars = [
    { title: "National Curriculum Alignment", desc: "Fully aligned with Federal & Board guidelines ensuring seamless university progression." },
    { title: "STEM & Digital Literacy", desc: "Integrated computer programming, robotics basics, and practical science experiments." },
    { title: "Values & Ethics", desc: "Comprehensive Islamic studies, ethics, civic sense, and social service projects." },
    { title: "Language Proficiency", desc: "Bilingual mastery in English and Urdu speech, comprehension, and creative writing." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="relative bg-gradient-to-r from-teal-900 via-emerald-950 to-slate-900 rounded-3xl p-8 sm:p-14 text-white shadow-2xl">
          <span className="bg-teal-500/20 border border-teal-400/30 text-teal-300 text-xs font-bold px-4 py-1.5 rounded-full inline-flex items-center gap-2">
            <FaBookOpen /> Academic Framework
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mt-4">Our Academic Curriculum</h1>
          <p className="text-teal-100 text-sm sm:text-base mt-2 max-w-2xl">
            A balanced blend of academic excellence, technological skills, and character building designed to empower future leaders.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-2">
              <FaLightbulb className="text-teal-600 size-7 mb-2" />
              <h3 className="font-bold text-gray-900 text-base">{p.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CurriculumPage;
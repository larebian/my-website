import { FaBookReader, FaBookOpen, FaSearch, FaVolumeMute, FaLaptop, FaCheckCircle } from "react-icons/fa";

function LibraryPage() {
  const stats = [
    { title: "15,000+ Printed Books", desc: "Fiction, reference books, encyclopedias, and board exam guides." },
    { title: "E-Digital Library Portal", desc: "Access to 50,000+ digital e-books, research papers, and journals." },
    { title: "Quiet Study Zones", desc: "Sound-controlled individual reading pods and group research tables." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-gradient-to-r from-amber-950 via-slate-900 to-amber-900 p-8 sm:p-14 rounded-3xl text-white shadow-2xl space-y-3">
          <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-400/30">
            📖 Resource Center
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Central Campus Library</h1>
          <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
            A quiet sanctuary for reading, deep research, digital exploration, and academic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3">
              <FaBookOpen className="text-amber-600 size-8 mb-2" />
              <h3 className="font-bold text-gray-900 text-base">{s.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LibraryPage;
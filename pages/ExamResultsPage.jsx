import React, { useState } from "react";
import { 
  FaSearch, 
  FaAward, 
  FaUserGraduate, 
  FaPrint, 
  FaCheckCircle, 
  FaTimes,
  FaBookReader
} from "react-icons/fa";

// Alag file se database import ki gayi hai
import { studentsDatabase } from "../data/studentsData";

function ExamResultsPage() {
  const [selectedSession, setSelectedSession] = useState("Annual Examination 2025-2026");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchedResult, setSearchedResult] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (!searchQuery.trim()) {
      setErrorMessage("Please enter a student Roll Number or Name.");
      return;
    }

    const query = searchQuery.trim().toLowerCase();
    const found = studentsDatabase.find(
      (s) => s.rollNo.toLowerCase() === query || s.name.toLowerCase().includes(query)
    );

    if (found) {
      setSearchedResult(found);
      setIsModalOpen(true);
    } else {
      setErrorMessage(`No record found for "${searchQuery}". Try searching with Roll No: "LPS-2026-5A-01" or Name: "Hamza Ali".`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      
      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          #printable-marksheet, #printable-marksheet * {
            visibility: visible;
          }
          #printable-marksheet {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            margin: 0;
            padding: 15px;
            background: white !important;
            box-shadow: none !important;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Hero Header Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white pt-12 pb-20 px-4 text-center space-y-3 shadow-lg no-print">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
          <FaAward /> Advanced Examination Portal
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Online Result Verification System
        </h1>
        <p className="text-blue-200 text-xs sm:text-sm max-w-xl mx-auto">
          Search by Roll Number or Student Name to view and print official school marksheets.
        </p>
      </div>

      {/* Search Input Card */}
      <div className="max-w-xl mx-auto px-4 -mt-10 no-print">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100">
          <form onSubmit={handleSearch} className="space-y-5">
            <div>
              <label className="block text-xs font-extrabold text-gray-700 mb-1.5 uppercase tracking-wide">
                Select Examination Session
              </label>
              <select
                value={selectedSession}
                onChange={(e) => setSelectedSession(e.target.value)}
                className="w-full p-3 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700 font-bold text-gray-800 cursor-pointer"
              >
                <option value="Annual Examination 2025-2026">Annual Examination 2025-2026</option>
                <option value="Mid-Term Examination 2025-2026">Mid-Term Examination 2025-2026</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold text-gray-700 mb-1.5 uppercase tracking-wide">
                Student Roll Number or Full Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                  <FaUserGraduate size={14} />
                </span>
                <input
                  type="text"
                  placeholder="e.g. LPS-2026-5A-01 or Hamza Ali"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700 font-bold text-gray-900"
                />
              </div>
              <p className="text-[10px] text-gray-400 mt-1.5">
                💡 <span className="font-bold text-gray-600">Quick Test:</span> Try searching <code className="bg-gray-100 text-blue-700 px-1 py-0.5 rounded font-mono">LPS-2026-5A-01</code>
              </p>
            </div>

            {errorMessage && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-blue-900/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FaSearch size={14} /> Search Complete Result
            </button>
          </form>
        </div>
      </div>

      {/* --- OFFICIAL MARKSHEET MODAL & PRINT CONTAINER --- */}
      {isModalOpen && searchedResult && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div 
            id="printable-marksheet"
            className="bg-white rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden border border-gray-200 my-8"
          >
            
            {/* Modal Header Controls (Hidden on Print) */}
            <div className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center no-print">
              <span className="text-xs font-bold tracking-wider uppercase text-yellow-400">Official Marksheet Preview</span>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white p-1.5 rounded-full transition-colors cursor-pointer"
              >
                <FaTimes size={14} />
              </button>
            </div>

            {/* School Header with Logo from Public Folder */}
            <div className="p-6 sm:p-8 text-center border-b border-gray-200 bg-gradient-to-b from-blue-50/40 to-white">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-3">
                
                {/* Logo Container */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white p-1.5 rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.jpg" 
                    alt="School Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="text-center sm:text-left">
                  <h1 className="text-lg sm:text-2xl font-black text-blue-950 uppercase tracking-wide">
                    The Lareb Public School Miro Khan
                  </h1>
                  <p className="text-[11px] sm:text-xs text-gray-600 font-medium mt-0.5">
                    Main Miro Khan Road, District Kamber Shahdadkot, Sindh
                  </p>
                </div>
              </div>
              
              <div className="mt-3 inline-block bg-blue-900 text-white text-[11px] sm:text-xs font-extrabold px-6 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                Statement of Marks / Marksheet
              </div>
            </div>

            {/* Student Biodata Grid */}
            <div className="p-6 bg-gray-50/70 border-b border-gray-200 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">GR Number</span>
                <span className="font-extrabold text-gray-900">{searchedResult.grNo}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">Roll Number</span>
                <span className="font-extrabold text-blue-950">{searchedResult.rollNo}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">Student Name</span>
                <span className="font-extrabold text-gray-900">{searchedResult.name}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">Father's Name</span>
                <span className="font-extrabold text-gray-900">{searchedResult.fatherName}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">Caste</span>
                <span className="font-extrabold text-gray-900">{searchedResult.caste}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">Class & Section</span>
                <span className="font-extrabold text-blue-900">{searchedResult.className} ({searchedResult.section})</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">Academic Session</span>
                <span className="font-extrabold text-gray-900">{searchedResult.session}</span>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-gray-100">
                <span className="text-gray-400 block font-bold text-[9px] uppercase">Examination Term</span>
                <span className="font-extrabold text-gray-900">{searchedResult.term}</span>
              </div>
            </div>

            {/* Subject Marks Table */}
            <div className="p-6">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-1.5">
                <FaBookReader className="text-blue-700" /> Subject-wise Breakdown
              </h3>

              <div className="overflow-x-auto border border-gray-200 rounded-2xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-200">
                      <th className="p-3.5">Subjects</th>
                      <th className="p-3.5 text-center">Total Marks</th>
                      <th className="p-3.5 text-center">Obtained Marks</th>
                      <th className="p-3.5 text-center">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 font-medium">
                    {searchedResult.subjects.map((sub, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="p-3.5 text-gray-900 font-bold">{sub.name}</td>
                        <td className="p-3.5 text-center text-gray-600">{sub.total}</td>
                        <td className="p-3.5 text-center font-extrabold text-blue-900">{sub.obtained}</td>
                        <td className="p-3.5 text-center">
                          <span className="px-2.5 py-0.5 rounded-md font-bold text-[10px] bg-emerald-100 text-emerald-800">
                            {sub.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary Stats Box */}
              <div className="mt-6 bg-blue-950 text-white p-5 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md">
                <div className="space-y-1 text-center sm:text-left">
                  <div className="flex items-center gap-2 justify-center sm:justify-start text-xs">
                    <span className="text-blue-200">Total Marks:</span>
                    <strong className="text-white text-sm">{searchedResult.obtainedMarks} / {searchedResult.totalMarks}</strong>
                  </div>
                  <div className="flex items-center gap-2 justify-center sm:justify-start text-xs">
                    <span className="text-blue-200">Percentage:</span>
                    <strong className="text-yellow-400 font-extrabold text-sm">{searchedResult.percentage}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-center bg-white/10 px-4 py-2 rounded-xl">
                    <span className="block text-[9px] text-blue-200 uppercase font-bold">Grade</span>
                    <span className="text-base font-extrabold text-yellow-400">{searchedResult.grade}</span>
                  </div>
                  <div className="text-center bg-emerald-500/20 border border-emerald-400/30 px-4 py-2 rounded-xl">
                    <span className="block text-[9px] text-emerald-300 uppercase font-bold">Status</span>
                    <span className="text-base font-extrabold text-emerald-400 flex items-center gap-1">
                      <FaCheckCircle size={14} /> {searchedResult.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Remarks */}
              <p className="text-xs text-gray-600 mt-4 italic text-center">
                💬 <strong className="text-gray-800 not-italic">Teacher's Remarks:</strong> {searchedResult.remarks}
              </p>

              {/* Signatures Section */}
              <div className="mt-14 pt-8 border-t border-dashed border-gray-300 flex justify-between items-center px-4">
                <div className="text-center">
                  <div className="w-36 border-b border-gray-400 mb-1.5 mx-auto"></div>
                  <span className="text-[11px] font-bold text-gray-700 uppercase">Controller of Examinations</span>
                </div>
                <div className="text-center">
                  <div className="w-36 border-b border-gray-400 mb-1.5 mx-auto"></div>
                  <span className="text-[11px] font-bold text-gray-700 uppercase">Principal Signature</span>
                </div>
              </div>

            </div>

            {/* Modal Footer Controls (Hidden on Print) */}
            <div className="bg-gray-100 p-4 px-6 border-t border-gray-200 flex justify-between items-center no-print">
              <span className="text-[11px] text-gray-500 font-medium">Official Computer Generated Marksheet</span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                >
                  <FaPrint size={12} /> Print Official Marksheet
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default ExamResultsPage;
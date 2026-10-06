import React, { useState } from "react";
import { 
  FaCalendarAlt, 
  FaSearch, 
  FaClock, 
  FaBookOpen, 
  FaAward, 
  FaUserGraduate,
  FaClipboardList,
  FaTimes,
  FaPrint
} from "react-icons/fa";

function ExamSchedule() {
  const [activeTab, setActiveTab] = useState("tests"); // "tests" ya "results"
  const [selectedClass, setSelectedClass] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Modal states for Detailed Result View
  const [selectedResult, setSelectedResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Nursery to 8th Daily Tests & Schedule List
  const dailyTestsList = [
    {
      id: 1,
      className: "Nursery",
      subject: "English Phonics & Alphabet",
      date: "August 15, 2026",
      time: "08:30 AM - 09:00 AM",
      totalMarks: 20,
      syllabus: "Letters A to H recognition, sound practice & tracing.",
      status: "Upcoming",
    },
    {
      id: 2,
      className: "Prep",
      subject: "Maths Counting & Oral",
      date: "August 15, 2026",
      time: "09:00 AM - 09:30 AM",
      totalMarks: 25,
      syllabus: "Counting 1 to 50, missing numbers & backward counting.",
      status: "Upcoming",
    },
    {
      id: 3,
      className: "Class 1",
      subject: "Urdu Haroof-e-Tahaji",
      date: "August 16, 2026",
      time: "08:30 AM - 09:15 AM",
      totalMarks: 20,
      syllabus: "Alif se Yeh tak likhna aur adhe haroof ki pehchan.",
      status: "Upcoming",
    },
    {
      id: 4,
      className: "Class 2",
      subject: "English Vocabulary & Dictation",
      date: "August 16, 2026",
      time: "09:30 AM - 10:15 AM",
      totalMarks: 25,
      syllabus: "Animals name, colors, and 15 daily use spellings.",
      status: "Upcoming",
    },
    {
      id: 5,
      className: "Class 3",
      subject: "Islamic Studies / Qirat",
      date: "August 17, 2026",
      time: "08:30 AM - 09:15 AM",
      totalMarks: 20,
      syllabus: "Kalma Tayyaba, 6 Kalmas revision with translation.",
      status: "Upcoming",
    },
    {
      id: 6,
      className: "Class 4",
      subject: "General Science",
      date: "August 17, 2026",
      time: "09:30 AM - 10:30 AM",
      totalMarks: 30,
      syllabus: "Unit 3: Flowers and Leaves structure, functions.",
      status: "Upcoming",
    },
    {
      id: 7,
      className: "Class 5",
      subject: "Mathematics (Fractions)",
      date: "August 18, 2026",
      time: "08:30 AM - 09:30 AM",
      totalMarks: 50,
      syllabus: "Addition and Subtraction of unlike fractions.",
      status: "Upcoming",
    },
    {
      id: 8,
      className: "Class 6",
      subject: "Computer Studies",
      date: "August 18, 2026",
      time: "10:00 AM - 11:00 AM",
      totalMarks: 40,
      syllabus: "Chapter 2: History of Computers & Generations.",
      status: "Upcoming",
    },
    {
      id: 9,
      className: "Class 7",
      subject: "Social Studies / History",
      date: "August 19, 2026",
      time: "08:30 AM - 09:30 AM",
      totalMarks: 50,
      syllabus: "Mughal Empire administration and reforms.",
      status: "Upcoming",
    },
    {
      id: 10,
      className: "Class 8th",
      subject: "English Grammar",
      date: "August 19, 2026",
      time: "09:45 AM - 11:00 AM",
      totalMarks: 50,
      syllabus: "Active & Passive Voice, Essay: 'My Ambition in Life'.",
      status: "Upcoming",
    },
  ];

  // Daily & Monthly Test Results Announcements with Student Marks List
  const testResultsList = [
    {
      id: 1,
      className: "Class 5",
      title: "Mathematics Unit-2 Daily Test Result",
      announcementDate: "July 24, 2026",
      type: "Daily Test",
      totalMarks: 50,
      topper: "Hamza Ali (49/50)",
      remarks: "Outstanding performance shown by the entire section. Keep it up!",
      students: [
        { rollNo: "LPS-501", name: "Hamza Ali", marks: 49, grade: "A+" },
        { rollNo: "LPS-502", name: "Fatima Noor", marks: 45, grade: "A" },
        { rollNo: "LPS-503", name: "Ahmed Raza", marks: 42, grade: "A" },
        { rollNo: "LPS-504", name: "Ayesha Siddiqua", marks: 38, grade: "B" },
        { rollNo: "LPS-505", name: "Bilal Ahmed", marks: 40, grade: "B+" },
        { rollNo: "LPS-506", name: "Zainab Bibi", marks: 47, grade: "A+" },
      ]
    },
    {
      id: 2,
      className: "Class 8th",
      title: "Monthly Science Assessment Result (July)",
      announcementDate: "July 23, 2026",
      type: "Monthly Test",
      totalMarks: 100,
      topper: "Ayesha Khan (98/100)",
      remarks: "Detailed performance report cards have been updated in student portals.",
      students: [
        { rollNo: "LPS-801", name: "Ayesha Khan", marks: 98, grade: "A+" },
        { rollNo: "LPS-802", name: "Usman Tariq", marks: 91, grade: "A+" },
        { rollNo: "LPS-803", name: "Bilal Ahmed", marks: 85, grade: "A" },
        { rollNo: "LPS-804", name: "Khadija Noor", marks: 88, grade: "A" },
        { rollNo: "LPS-805", name: "Saad Abdullah", marks: 76, grade: "B" },
      ]
    },
    {
      id: 3,
      className: "Class 3",
      title: "Urdu Dictation Daily Test",
      announcementDate: "July 25, 2026",
      type: "Daily Test",
      totalMarks: 20,
      topper: "Zainab Bibi (20/20)",
      remarks: "Regular practice is improving spelling accuracy significantly.",
      students: [
        { rollNo: "LPS-301", name: "Zainab Bibi", marks: 20, grade: "A+" },
        { rollNo: "LPS-302", name: "Ali Ahmed", marks: 18, grade: "A" },
        { rollNo: "LPS-303", name: "Hassan Ali", marks: 15, grade: "B" },
        { rollNo: "LPS-304", name: "Maryam Nawaz", marks: 19, grade: "A+" },
      ]
    },
    {
      id: 4,
      className: "Class 1",
      title: "Maths Table Weekly Quiz",
      announcementDate: "July 22, 2026",
      type: "Weekly Test",
      totalMarks: 15,
      topper: "Aliyan Ahmed (15/15)",
      remarks: "Tables of 2 to 5 tested successfully.",
      students: [
        { rollNo: "LPS-101", name: "Aliyan Ahmed", marks: 15, grade: "A+" },
        { rollNo: "LPS-102", name: "Dua Malik", marks: 14, grade: "A" },
        { rollNo: "LPS-103", name: "Zohaib Hassan", marks: 12, grade: "B" },
      ]
    },
  ];

  // Classes list for filter tabs
  const classesList = ["All", "Nursery", "Prep", "Class 1", "Class 2", "Class 3", "Class 4", "Class 5", "Class 6", "Class 7", "Class 8th"];

  // Filtering Logic for Tests
  const filteredTests = dailyTestsList.filter((item) => {
    const matchesClass = selectedClass === "All" || item.className === selectedClass;
    const matchesSearch = 
      item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.syllabus.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesSearch;
  });

  // Filtering Logic for Results
  const filteredResults = testResultsList.filter((item) => {
    const matchesClass = selectedClass === "All" || item.className === selectedClass;
    const matchesSearch = 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.className.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesClass && matchesSearch;
  });

  // Open Modal Handler
  const handleOpenResultModal = (resultObj) => {
    setSelectedResult(resultObj);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Page Header Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 text-white rounded-3xl p-8 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="bg-yellow-400 text-blue-950 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Nursery to 8th Academic Portal
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Daily Tests & Results Hub
            </h1>
            <p className="text-blue-200 text-sm max-w-xl">
              Check daily subject-wise test routines, syllabus details, and announced daily/monthly test results instantly.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setActiveTab("tests")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                activeTab === "tests" ? "bg-yellow-400 text-blue-950" : "bg-blue-900 text-white hover:bg-blue-800"
              }`}
            >
              <FaClipboardList className="inline mr-1.5" /> Test Schedule
            </button>
            <button
              onClick={() => setActiveTab("results")}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer ${
                activeTab === "results" ? "bg-yellow-400 text-blue-950" : "bg-blue-900 text-white hover:bg-blue-800"
              }`}
            >
              <FaAward className="inline mr-1.5" /> Results & Toppers
            </button>
          </div>
        </div>

        {/* Filters & Search Section */}
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-4">
          
          {/* Class Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 w-full lg:w-auto">
            {classesList.map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedClass === cls
                    ? "bg-blue-900 text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cls}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full lg:w-72">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <FaSearch size={14} />
            </span>
            <input
              type="text"
              placeholder={activeTab === "tests" ? "Search subject or syllabus..." : "Search result title..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-700"
            />
          </div>

        </div>

        {/* Dynamic Content View */}
        {activeTab === "tests" ? (
          /* Daily Test Routine Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTests.length > 0 ? (
              filteredTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-900 to-yellow-400" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="bg-blue-50 text-blue-800 border border-blue-200 text-xs font-bold px-3 py-1 rounded-lg">
                        {test.className}
                      </span>
                      <span className="bg-green-50 text-green-800 border border-green-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                        {test.totalMarks} Marks
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-base text-gray-900 group-hover:text-blue-900 transition-colors flex items-center gap-2">
                        <FaBookOpen className="text-blue-700 shrink-0" size={16} />
                        {test.subject}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 font-medium leading-relaxed">
                        <strong className="text-gray-700">Syllabus:</strong> {test.syllabus}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2 border-t border-gray-100 text-xs text-gray-600 font-medium">
                      <div className="flex items-center gap-2.5">
                        <FaCalendarAlt className="text-yellow-500 shrink-0" size={14} />
                        <span>{test.date}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <FaClock className="text-blue-600 shrink-0" size={14} />
                        <span>{test.time}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                    <span className="inline-block w-full bg-blue-50 text-blue-900 font-bold py-2 rounded-xl text-xs">
                      Daily Class Test Schedule
                    </span>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-400 bg-white rounded-2xl border border-gray-100">
                <p className="text-sm font-semibold">No daily test schedules found matching your criteria.</p>
              </div>
            )}
          </div>
        ) : (
          /* Results & Announcements Grid */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResults.length > 0 ? (
              filteredResults.map((result) => (
                <div
                  key={result.id}
                  className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-yellow-500 to-blue-900" />

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="bg-indigo-50 text-indigo-800 border border-indigo-200 text-xs font-bold px-3 py-1 rounded-lg">
                        {result.className}
                      </span>
                      <span className="bg-yellow-50 text-yellow-800 border border-yellow-200 text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase">
                        {result.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-extrabold text-base text-gray-900 flex items-center gap-2">
                        <FaAward className="text-yellow-500 shrink-0" size={18} />
                        {result.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 font-medium">
                        {result.remarks}
                      </p>
                    </div>

                    <div className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 space-y-2 text-xs">
                      <div className="flex justify-between items-center text-gray-700 font-semibold">
                        <span className="flex items-center gap-1.5 text-blue-900">
                          <FaUserGraduate size={14} /> Class Topper:
                        </span>
                        <span className="bg-yellow-100 text-yellow-900 px-2.5 py-1 rounded-lg font-bold">
                          {result.topper}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-gray-400 text-[11px] pt-1 border-t border-gray-200">
                        <span>Announced On:</span>
                        <span className="font-medium text-gray-600">{result.announcementDate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => handleOpenResultModal(result)}
                      className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-2.5 rounded-xl text-xs transition-all shadow-sm cursor-pointer"
                    >
                      View Detailed Result Sheet
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full py-12 text-center text-gray-400 bg-white rounded-2xl border border-gray-100">
                <p className="text-sm font-semibold">No test result announcements found matching your filter.</p>
              </div>
            )}
          </div>
        )}

      </div>

      {/* --- DETAILED RESULT MODAL (POPUP) --- */}
      {isModalOpen && selectedResult && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden border border-gray-100 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-950 to-indigo-950 text-white p-6 flex justify-between items-center">
              <div>
                <span className="bg-yellow-400 text-blue-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase">
                  {selectedResult.className} — {selectedResult.type}
                </span>
                <h2 className="text-xl font-extrabold mt-1">{selectedResult.title}</h2>
                <p className="text-xs text-blue-200 mt-0.5">Announced Date: {selectedResult.announcementDate} | Total Marks: {selectedResult.totalMarks}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="bg-white/10 hover:bg-white/20 text-white p-2.5 rounded-full transition-colors cursor-pointer"
              >
                <FaTimes size={16} />
              </button>
            </div>

            {/* Modal Body: Student Marks Table */}
            <div className="p-6 max-h-[60vh] overflow-y-auto">
              <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Student Performance List</h3>
              
              <div className="overflow-x-auto border border-gray-100 rounded-2xl">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="bg-gray-50 text-gray-700 font-bold border-b border-gray-100">
                      <th className="p-3.5">Roll No</th>
                      <th className="p-3.5">Student Name</th>
                      <th className="p-3.5 text-center">Marks Obtained</th>
                      <th className="p-3.5 text-center">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 font-medium">
                    {selectedResult.students.map((student, idx) => (
                      <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                        <td className="p-3.5 text-gray-500 font-bold">{student.rollNo}</td>
                        <td className="p-3.5 text-gray-900 font-bold">{student.name}</td>
                        <td className="p-3.5 text-center text-blue-900 font-extrabold">
                          {student.marks} / {selectedResult.totalMarks}
                        </td>
                        <td className="p-3.5 text-center">
                          <span className={`px-2.5 py-1 rounded-lg font-extrabold text-[10px] ${
                            student.grade === "A+" ? "bg-emerald-100 text-emerald-800" :
                            student.grade === "A" ? "bg-blue-100 text-blue-800" : "bg-amber-100 text-amber-800"
                          }`}>
                            {student.grade}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-gray-50 p-4 px-6 border-t border-gray-100 flex justify-between items-center">
              <span className="text-xs text-gray-500 font-medium">Total Students Participated: <strong className="text-gray-800">{selectedResult.students.length}</strong></span>
              <div className="flex gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <FaPrint size={12} /> Print Sheet
                </button>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold rounded-xl text-xs transition-colors cursor-pointer"
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

export default ExamSchedule;
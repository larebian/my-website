import { FaCalendarAlt, FaDownload, FaCheckCircle } from "react-icons/fa";

function AcademicCalendar() {
  const schedule = [
    { month: "August 2026", event: "Commencement of First Academic Term & Independence Day Celebrations" },
    { month: "September 2026", event: "First Monthly Assessment Tests & Inter-House Sports Week" },
    { month: "October 2026", event: "Mid-Term Examinations & Science Exhibition Expo" },
    { month: "December 2026", event: "Winter Vacation & Mid-Term Result Declaration PTM" },
    { month: "January 2027", event: "Commencement of Second Academic Term" },
    { month: "March 2027", event: "Annual Examinations for Pre-School to Grade 9" },
    { month: "April 2027", event: "Annual Result Declaration & Board Matric/HSSC Exams" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-indigo-950 p-8 sm:p-14 rounded-3xl text-white shadow-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div className="space-y-3">
            <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-400/30 inline-flex items-center gap-2">
              <FaCalendarAlt /> Academic Session 2026-2027
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold">Academic Calendar</h1>
            <p className="text-xs sm:text-sm text-blue-100 max-w-xl">
              Annual roadmap for terms, examination dates, vacations, and key school events.
            </p>
          </div>
          <button className="bg-amber-400 hover:bg-amber-300 text-blue-950 font-extrabold text-xs px-6 py-3.5 rounded-xl transition-all shadow-md flex items-center gap-2 shrink-0">
            <FaDownload /> Download Official PDF
          </button>
        </div>

        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm space-y-6">
          <h3 className="text-xl font-extrabold text-blue-950">Academic Session Timeline</h3>
          <div className="space-y-4">
            {schedule.map((item, i) => (
              <div key={i} className="p-4 sm:p-5 bg-slate-50 rounded-2xl border border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <span className="font-extrabold text-xs sm:text-sm text-blue-900 bg-blue-100/70 px-3.5 py-1.5 rounded-xl border border-blue-200 shrink-0">
                  {item.month}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-gray-800">{item.event}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcademicCalendar;
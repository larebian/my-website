import { FaTrophy, FaMedal, FaStar, FaAward, FaCrown } from "react-icons/fa";

function AchievementsPage() {
  const honors = [
    { title: "1st Position - Federal Board Metric Exams", year: "2025-2026", desc: "Our student secured top honors in the Board Examinations with 98.4% marks.", category: "Academic Mastery" },
    { title: "National Inter-School Science Olympiad Gold", year: "2026", desc: "School STEM robotics team won 1st prize for building an automated AI irrigation system.", category: "Innovation & STEM" },
    { title: "Regional Cricket Championship Winners", year: "2025", desc: "The LPS Senior Cricket XI defeated 16 competing regional school teams to claim the trophy.", category: "Sports Excellence" },
    { title: "All-Karachi Debate Competition Trophy", year: "2026", desc: "Our Senior English Debating Society secured the Best Delegation Award.", category: "Oratory & Leadership" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-amber-950 via-yellow-950 to-slate-900 p-8 sm:p-14 rounded-3xl text-white shadow-2xl space-y-3">
          <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full border border-amber-400/30 inline-flex items-center gap-2">
            <FaTrophy /> Pride & Honor
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Student Achievements</h1>
          <p className="text-xs sm:text-sm text-amber-100 max-w-2xl">
            Celebrating academic board top ranks, sports trophies, and national competitions won by our talented students.
          </p>
        </div>

        {/* Stats Highlight */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-gray-100 text-center space-y-1 shadow-xs">
            <FaCrown className="text-amber-500 size-7 mx-auto mb-2" />
            <span className="text-2xl font-black text-gray-900">50+</span>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Board Top Ranks</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 text-center space-y-1 shadow-xs">
            <FaTrophy className="text-amber-500 size-7 mx-auto mb-2" />
            <span className="text-2xl font-black text-gray-900">120+</span>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Sports Trophies</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 text-center space-y-1 shadow-xs">
            <FaMedal className="text-amber-500 size-7 mx-auto mb-2" />
            <span className="text-2xl font-black text-gray-900">300+</span>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Gold Medals</p>
          </div>
          <div className="bg-white p-6 rounded-3xl border border-gray-100 text-center space-y-1 shadow-xs">
            <FaAward className="text-amber-500 size-7 mx-auto mb-2" />
            <span className="text-2xl font-black text-gray-900">100%</span>
            <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Matric Pass Rate</p>
          </div>
        </div>

        {/* Honor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {honors.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3 relative overflow-hidden">
              <div className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-xs font-extrabold text-amber-600 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-lg">
                  {item.category}
                </span>
                <span className="text-xs font-bold text-gray-400">{item.year}</span>
              </div>
              <h3 className="text-lg font-extrabold text-gray-900">{item.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AchievementsPage;
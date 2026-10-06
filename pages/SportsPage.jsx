import { FaRunning, FaTrophy, FaBasketballBall, FaCheckCircle } from "react-icons/fa";

function SportsPage() {
  const sports = [
    { name: "Cricket Ground", desc: "Standard turf pitch with practice nets and professional coaching." },
    { name: "Football Field", desc: "Full-sized green field for intra-school leagues and physical training." },
    { name: "Basketball & Volleyball", desc: "Paved outdoor court with night floodlights and tournament seating." },
    { name: "Indoor Gaming Arena", desc: "Table tennis, chess, badminton, and martial arts training center." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 p-8 sm:p-14 rounded-3xl text-white shadow-2xl space-y-3">
          <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-400/30">
            ⚽ Athletics & Fitness
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Sports Complex & Physical Education</h1>
          <p className="text-xs sm:text-sm text-emerald-100 max-w-2xl">
            Building stamina, teamwork, discipline, and athletic excellence through structured physical programs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sports.map((sp, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-3">
              <FaTrophy className="text-emerald-600 size-8 mb-2" />
              <h3 className="font-bold text-gray-900 text-lg">{sp.name}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{sp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SportsPage;
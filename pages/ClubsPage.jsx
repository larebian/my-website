import { FaUsers, FaLaptopCode, FaFlask, FaPalette, FaMicrophone, FaBook, FaCheckCircle } from "react-icons/fa";

function ClubsPage() {
  const clubs = [
    { name: "Robotics & Coding Club", icon: <FaLaptopCode className="size-7 text-indigo-600" />, desc: "Hands-on web development, Scratch programming, and microcontroller projects.", timing: "Every Tuesday 02:00 PM" },
    { name: "Young Scientists Forum", icon: <FaFlask className="size-7 text-emerald-600" />, desc: "Conducting extra-curricular chemistry, physics, and biological research projects.", timing: "Every Wednesday 02:00 PM" },
    { name: "Debating & Literary Society", icon: <FaMicrophone className="size-7 text-rose-600" />, desc: "Enhancing bilingual public speaking, MUN simulations, and formal debates.", timing: "Every Thursday 02:00 PM" },
    { name: "Fine Arts & Creative Crafts", icon: <FaPalette className="size-7 text-amber-500" />, desc: "Painting, calligraphy, clay modeling, and preparing exhibition decor.", timing: "Every Friday 01:30 PM" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-blue-950 p-8 sm:p-14 rounded-3xl text-white shadow-2xl space-y-3">
          <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-4 py-1.5 rounded-full border border-indigo-400/30 inline-flex items-center gap-2">
            <FaUsers /> Extra-Curricular Life
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Student Clubs & Societies</h1>
          <p className="text-xs sm:text-sm text-indigo-100 max-w-2xl">
            Nurturing leadership, creativity, and technical passion outside the formal classroom setup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clubs.map((c, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4 hover:shadow-lg transition-all">
              <div className="p-3 bg-slate-50 rounded-2xl w-fit">{c.icon}</div>
              <h3 className="text-xl font-bold text-gray-900">{c.name}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{c.desc}</p>
              <div className="text-xs font-semibold text-indigo-900 bg-indigo-50 px-3.5 py-2 rounded-xl border border-indigo-100 inline-block">
                🕒 Session: {c.timing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ClubsPage;
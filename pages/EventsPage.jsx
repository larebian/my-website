import { useState } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaTag, FaArrowRight, FaFilter } from "react-icons/fa";

function EventsPage() {
  const [filter, setFilter] = useState("all");

  const events = [
    {
      title: "Annual Science & STEM Expo 2026",
      category: "academic",
      date: "Aug 15, 2026",
      time: "09:00 AM - 02:00 PM",
      location: "Main Auditorium & Science Block",
      desc: "Students showcase innovative robotics models, working physics exhibits, and live chemistry experiments.",
      badge: "Upcoming",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Inter-House Sports Championship",
      category: "sports",
      date: "Sep 05, 2026",
      time: "08:00 AM - 01:30 PM",
      location: "School Sports Complex",
      desc: "Annual track & field events, cricket tournament finals, and martial arts demonstrations across all houses.",
      badge: "Registration Open",
      badgeColor: "bg-amber-100 text-amber-800"
    },
    {
      title: "Independence Day Cultural Gala",
      category: "cultural",
      date: "Aug 14, 2026",
      time: "08:30 AM - 11:30 AM",
      location: "Open Air Amphitheatre",
      desc: "Patriotic tableaus, national songs, speech competitions, and prize distribution for academic achievers.",
      badge: "Upcoming",
      badgeColor: "bg-emerald-100 text-emerald-800"
    },
    {
      title: "Coding & Web Hackathon 2026",
      category: "academic",
      date: "Oct 10, 2026",
      time: "09:30 AM - 03:00 PM",
      location: "Computer Lab 1 & 2",
      desc: "A 5-hour real-time coding challenge for secondary and intermediate students to build web solutions.",
      badge: "Featured",
      badgeColor: "bg-purple-100 text-purple-800"
    }
  ];

  const filteredEvents = filter === "all" ? events : events.filter(e => e.category === filter);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Hero Banner */}
        <div className="relative bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-14 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-bold px-4 py-1.5 rounded-full backdrop-blur-md">
              <FaCalendarAlt /> Campus Happenings
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">School Events & Activities</h1>
            <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
              Explore upcoming academic expos, athletic meets, cultural festivals, and student competitions at <span className="text-white font-semibold">The Lareb Public School</span>.
            </p>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-between items-center flex-wrap gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-xs">
          <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider px-2">
            <FaFilter className="text-purple-600" /> Filter Events:
          </div>
          <div className="flex gap-2 flex-wrap">
            {["all", "academic", "sports", "cultural"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                  filter === cat
                    ? "bg-purple-900 text-white shadow-md"
                    : "bg-slate-100 text-gray-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredEvents.map((evt, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <span className={`text-[11px] font-bold px-3 py-1 rounded-full ${evt.badgeColor}`}>
                    {evt.badge}
                  </span>
                  <span className="text-xs font-semibold text-gray-500 flex items-center gap-1.5 bg-slate-100 px-3 py-1 rounded-lg">
                    <FaCalendarAlt className="text-purple-600" /> {evt.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 leading-snug">{evt.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{evt.desc}</p>
              </div>

              <div className="border-t border-gray-100 pt-4 space-y-2 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <FaClock className="text-purple-600" /> <span>{evt.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-purple-600" /> <span>{evt.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default EventsPage;
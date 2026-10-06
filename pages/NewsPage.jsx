import { FaNewspaper, FaBullhorn, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

function NewsPage() {
  const news = [
    { title: "Admissions Open for Session 2026-2027", date: "July 20, 2026", desc: "Registration forms are now available online and at the campus admission office for Nursery to Class 11.", category: "Announcement" },
    { title: "Parent-Teacher Meeting (PTM) Scheduled", date: "July 18, 2026", desc: "First term progress reports will be discussed on Saturday between 09:00 AM and 01:00 PM.", category: "Academic Notice" },
    { title: "New Smart Interactive Boards Installed", date: "July 10, 2026", desc: "All Secondary classrooms are now equipped with 75-inch modern interactive touch displays.", category: "Campus Infrastructure" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-950 p-8 sm:p-14 rounded-3xl text-white shadow-2xl space-y-3">
          <span className="bg-blue-500/20 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full border border-blue-400/30 inline-flex items-center gap-2">
            <FaBullhorn /> Campus Updates
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold">Latest News & Announcements</h1>
          <p className="text-xs sm:text-sm text-blue-100 max-w-2xl">
            Stay informed with official circulars, campus updates, and upcoming administrative notices.
          </p>
        </div>

        <div className="space-y-6">
          {news.map((item, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-extrabold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                    {item.category}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <FaCalendarAlt /> {item.date}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
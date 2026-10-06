import React from "react";

function Attendance() {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-extrabold text-slate-800 mb-2">Monthly Attendance Record</h3>
      <p className="text-xs text-gray-500 mb-6">Detailed overview of your daily presence for July 2026.</p>
      
      <div className="grid grid-cols-7 gap-2 text-center mb-6">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d, i) => (
          <div key={i} className="text-xs font-extrabold text-gray-400 py-2 uppercase">{d}</div>
        ))}
        {Array.from({ length: 31 }).map((_, i) => (
          <div 
            key={i} 
            className={`py-3.5 rounded-xl text-xs font-extrabold ${
              i % 7 === 6 
                ? 'bg-gray-50 text-gray-300' 
                : 'bg-emerald-50 text-emerald-700 border border-emerald-100 shadow-sm'
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
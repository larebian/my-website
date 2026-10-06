import React from "react";

function Assignments() {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-gray-100">
      <h3 className="text-xl font-extrabold text-slate-800 mb-2">Pending & Submitted Assignments</h3>
      <p className="text-xs text-gray-500 mb-6">Manage and submit your course projects and homework tasks.</p>
      
      <div className="space-y-4">
        <div className="p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
          <div>
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Computer Science</span>
            <h4 className="font-extrabold text-slate-800 text-base mt-1">React Component Structure & Tailwind Styling</h4>
            <p className="text-xs text-gray-500 mt-1">Due Date: 30 July 2026</p>
          </div>
          <button className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl shadow-md transition-colors">
            Submit File
          </button>
        </div>

        <div className="p-5 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gray-50/50">
          <div>
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Mathematics</span>
            <h4 className="font-extrabold text-slate-800 text-base mt-1">Trigonometry Problem Set #4</h4>
            <p className="text-xs text-gray-500 mt-1">Status: Submitted & Checked</p>
          </div>
          <span className="px-4 py-2 bg-emerald-100 text-emerald-800 text-xs font-extrabold rounded-xl">
            Grade: A+
          </span>
        </div>
      </div>
    </div>
  );
}

export default Assignments;
import React from 'react';

export default function Reports() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
      <h3 className="font-bold text-lg text-slate-800">Analytical Reports & Statements</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 border border-slate-200 rounded-xl">
          <h4 className="font-bold text-slate-800">Student Performance Report</h4>
          <p className="text-xs text-slate-500 mt-1">Download term-wise analytics and grade distribution charts.</p>
          <button className="mt-3 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200">Download PDF</button>
        </div>
        <div className="p-4 border border-slate-200 rounded-xl">
          <h4 className="font-bold text-slate-800">Fee Collection Statement</h4>
          <p className="text-xs text-slate-500 mt-1">Export financial year collection logs and dues summaries.</p>
          <button className="mt-3 px-4 py-2 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold hover:bg-slate-200">Download CSV</button>
        </div>
      </div>
    </div>
  );
}
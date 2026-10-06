import React from 'react';

export default function Attendance() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4">
      <h3 className="font-bold text-lg text-slate-800">Daily Attendance Overview</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl">
          <p className="text-xs font-bold text-emerald-600 uppercase">Present Students</p>
          <h4 className="text-2xl font-bold text-emerald-900 mt-1">1,350</h4>
        </div>
        <div className="p-4 bg-red-50 border border-red-100 rounded-xl">
          <p className="text-xs font-bold text-red-600 uppercase">Absent Students</p>
          <h4 className="text-2xl font-bold text-red-900 mt-1">70</h4>
        </div>
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl">
          <p className="text-xs font-bold text-blue-600 uppercase">Staff Attendance</p>
          <h4 className="text-2xl font-bold text-blue-900 mt-1">98%</h4>
        </div>
      </div>
    </div>
  );
}
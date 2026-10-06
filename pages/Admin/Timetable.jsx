import React, { useState } from 'react';

export default function Timetable() {
  const [timetable, setTimetable] = useState([
    { id: 1, className: 'Class 5', day: 'Monday', period: 'Period 1 (08:00 AM - 08:45 AM)', subject: 'Mathematics', teacher: 'Sir Ahmed' },
    { id: 2, className: 'Class 5', day: 'Monday', period: 'Period 2 (08:45 AM - 09:30 AM)', subject: 'English', teacher: 'Maam Sara' },
    { id: 3, className: 'Class 6', day: 'Tuesday', period: 'Period 1 (08:00 AM - 08:45 AM)', subject: 'Science', teacher: 'Sir Bilal' },
  ]);

  const [filterClass, setFilterClass] = useState('All');
  const [filterDay, setFilterDay] = useState('All');

  const [newEntry, setNewEntry] = useState({
    className: 'Class 1',
    day: 'Monday',
    period: 'Period 1 (08:00 AM - 08:45 AM)',
    subject: '',
    teacher: ''
  });

  const handleAddTimetable = (e) => {
    e.preventDefault();
    if (!newEntry.subject) return;
    setTimetable([...timetable, { id: Date.now(), ...newEntry }]);
    setNewEntry({
      className: 'Class 1',
      day: 'Monday',
      period: 'Period 1 (08:00 AM - 08:45 AM)',
      subject: '',
      teacher: ''
    });
  };

  const handleDelete = (id) => {
    setTimetable(timetable.filter((t) => t.id !== id));
  };

  const filteredTimetable = timetable.filter(item => {
    return (filterClass === 'All' || item.className === filterClass) &&
           (filterDay === 'All' || item.day === filterDay);
  });

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-1">
        <h3 className="font-bold text-lg text-slate-800">School Timetable & Periods</h3>
        <p className="text-sm text-slate-500">Manage daily lecture schedules, period slots, and sync schedules directly with student portals.</p>
      </div>

      {/* Main Grid: Form & List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Schedule Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4 lg:col-span-1">
          <h4 className="font-semibold text-slate-800 text-md">Schedule New Lecture</h4>
          <form onSubmit={handleAddTimetable} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Select Class</label>
              <select 
                value={newEntry.className}
                onChange={(e) => setNewEntry({...newEntry, className: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 bg-white"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={`Class ${i+1}`}>Class {i+1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Day of Week</label>
              <select 
                value={newEntry.day}
                onChange={(e) => setNewEntry({...newEntry, day: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 bg-white"
              >
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Period Slot</label>
              <select 
                value={newEntry.period}
                onChange={(e) => setNewEntry({...newEntry, period: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 bg-white"
              >
                <option value="Period 1 (08:00 AM - 08:45 AM)">Period 1 (08:00 AM - 08:45 AM)</option>
                <option value="Period 2 (08:45 AM - 09:30 AM)">Period 2 (08:45 AM - 09:30 AM)</option>
                <option value="Period 3 (09:30 AM - 10:15 AM)">Period 3 (09:30 AM - 10:15 AM)</option>
                <option value="Period 4 (10:30 AM - 11:15 AM)">Period 4 (10:30 AM - 11:15 AM)</option>
                <option value="Period 5 (11:15 AM - 12:00 PM)">Period 5 (11:15 AM - 12:00 PM)</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Subject Name</label>
              <input 
                type="text" 
                placeholder="e.g. Mathematics"
                value={newEntry.subject}
                onChange={(e) => setNewEntry({...newEntry, subject: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Teacher Name</label>
              <input 
                type="text" 
                placeholder="e.g. Sir Ahmed"
                value={newEntry.teacher}
                onChange={(e) => setNewEntry({...newEntry, teacher: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              + Publish to Timetable
            </button>
          </form>
        </div>

        {/* Timetable Overview & Filters */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4 lg:col-span-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h4 className="font-semibold text-slate-800 text-md">Active Schedules</h4>
            <div className="flex gap-2 w-full sm:w-auto">
              <select 
                value={filterClass}
                onChange={(e) => setFilterClass(e.target.value)}
                className="text-sm border border-slate-200 rounded-xl px-3 py-1.5 outline-none bg-slate-50 cursor-pointer w-1/2 sm:w-auto"
              >
                <option value="All">All Classes</option>
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={`Class ${i+1}`}>Class {i+1}</option>
                ))}
              </select>
              <select 
                value={filterDay}
                onChange={(e) => setFilterDay(e.target.value)}
                className="text-sm border border-slate-200 rounded-xl px-3 py-1.5 outline-none bg-slate-50 cursor-pointer w-1/2 sm:w-auto"
              >
                <option value="All">All Days</option>
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-semibold text-slate-500">
                  <th className="py-3 px-3">Class</th>
                  <th className="py-3 px-3">Day</th>
                  <th className="py-3 px-3">Period & Timing</th>
                  <th className="py-3 px-3">Subject</th>
                  <th className="py-3 px-3">Teacher</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {filteredTimetable.length > 0 ? (
                  filteredTimetable.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-3 font-medium text-slate-900">{item.className}</td>
                      <td className="py-3 px-3 font-medium text-indigo-600">{item.day}</td>
                      <td className="py-3 px-3 text-xs text-slate-500">{item.period}</td>
                      <td className="py-3 px-3 font-medium">{item.subject}</td>
                      <td className="py-3 px-3 text-slate-600">{item.teacher || 'Unassigned'}</td>
                      <td className="py-3 px-3 text-right">
                        <button 
                          onClick={() => handleDelete(item.id)}
                          className="text-rose-600 hover:text-rose-800 text-xs font-medium px-2 py-1 rounded-lg hover:bg-rose-50 cursor-pointer"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="6" className="py-8 text-center text-slate-400 text-sm">
                      No timetable schedules found for this filter.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
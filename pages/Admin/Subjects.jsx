import React, { useState } from 'react';

export default function Subjects() {
  const [subjects, setSubjects] = useState([
    { id: 1, className: 'Class 5', name: 'Mathematics', code: 'MTH-101', teacher: 'Sir Ahmed' },
    { id: 2, className: 'Class 5', name: 'English', code: 'ENG-101', teacher: 'Maam Sara' },
    { id: 3, className: 'Class 6', name: 'General Science', code: 'SCI-102', teacher: 'Sir Bilal' },
  ]);

  const [filterClass, setFilterClass] = useState('All');
  const [newSubject, setNewSubject] = useState({
    className: 'Class 1',
    name: '',
    code: '',
    teacher: ''
  });

  const handleAddSubject = (e) => {
    e.preventDefault();
    if (!newSubject.name || !newSubject.code) return;
    setSubjects([...subjects, { id: Date.now(), ...newSubject }]);
    setNewSubject({ className: 'Class 1', name: '', code: '', teacher: '' });
  };

  const handleDelete = (id) => {
    setSubjects(subjects.filter((s) => s.id !== id));
  };

  const filteredSubjects = filterClass === 'All' 
    ? subjects 
    : subjects.filter(s => s.className === filterClass);

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-1">
        <h3 className="font-bold text-lg text-slate-800">Subjects Curriculum Setup</h3>
        <p className="text-sm text-slate-500">Define course outlines, subject pairings, and assign teachers for classes 1 to 10.</p>
      </div>

      {/* Main Grid: Form & List */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Add Subject Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4 lg:col-span-1">
          <h4 className="font-semibold text-slate-800 text-md">Assign New Subject</h4>
          <form onSubmit={handleAddSubject} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Select Class</label>
              <select 
                value={newSubject.className}
                onChange={(e) => setNewSubject({...newSubject, className: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500 bg-white"
              >
                {[...Array(10)].map((_, i) => (
                  <option key={i+1} value={`Class ${i+1}`}>Class {i+1}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Subject Name</label>
              <input 
                type="text" 
                placeholder="e.g. Physics, Urdu"
                value={newSubject.name}
                onChange={(e) => setNewSubject({...newSubject, name: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Subject Code</label>
              <input 
                type="text" 
                placeholder="e.g. PHY-201"
                value={newSubject.code}
                onChange={(e) => setNewSubject({...newSubject, code: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-600 mb-1">Assigned Teacher</label>
              <input 
                type="text" 
                placeholder="e.g. Sir Kamran"
                value={newSubject.teacher}
                onChange={(e) => setNewSubject({...newSubject, teacher: e.target.value})}
                className="w-full text-sm border border-slate-200 rounded-xl px-3 py-2 outline-none focus:border-indigo-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm py-2.5 rounded-xl transition-colors shadow-sm cursor-pointer"
            >
              + Add Subject to Curriculum
            </button>
          </form>
        </div>

        {/* Curriculum Table & Filter */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-4 lg:col-span-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <h4 className="font-semibold text-slate-800 text-md">Curriculum Overview</h4>
            <select 
              value={filterClass}
              onChange={(e) => setFilterClass(e.target.value)}
              className="text-sm border border-slate-200 rounded-xl px-3 py-1.5 outline-none bg-slate-50 cursor-pointer"
            >
              <option value="All">All Classes</option>
              {[...Array(10)].map((_, i) => (
                <option key={i+1} value={`Class ${i+1}`}>Class {i+1}</option>
              ))}
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 text-xs font-semibold text-slate-500">
                  <th className="py-3 px-3">Class</th>
                  <th className="py-3 px-3">Subject Name</th>
                  <th className="py-3 px-3">Code</th>
                  <th className="py-3 px-3">Teacher</th>
                  <th className="py-3 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm text-slate-700">
                {filteredSubjects.length > 0 ? (
                  filteredSubjects.map((sub) => (
                    <tr key={sub.id} className="hover:bg-slate-50/50">
                      <td className="py-3 px-3 font-medium text-slate-900">{sub.className}</td>
                      <td className="py-3 px-3">{sub.name}</td>
                      <td className="py-3 px-3 font-mono text-xs text-slate-500">{sub.code}</td>
                      <td className="py-3 px-3 text-slate-600">{sub.teacher || 'Unassigned'}</td>
                      <td className="py-3 px-3 text-right">
                        <button 
                          onClick={() => handleDelete(sub.id)}
                          className="text-rose-600 hover:text-rose-800 text-xs font-medium px-2 py-1 rounded-lg hover:bg-rose-50 cursor-pointer"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-8 text-center text-slate-400 text-sm">
                      No subjects found for this selection.
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
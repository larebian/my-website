import React, { useState, useEffect } from 'react';
import { FileText, CheckCircle, Search, Award } from 'lucide-react';
import { studentsDatabase } from '../../data/studentsData';

export default function Results() {
  const [selectedClass, setSelectedClass] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [publishedCount, setPublishedCount] = useState(0);

  useEffect(() => {
    const existingResults = JSON.parse(localStorage.getItem("schoolResults")) || [];
    setPublishedCount(existingResults.length);
  }, []);

  const handleBulkPublish = () => {
    let existingResults = JSON.parse(localStorage.getItem("schoolResults")) || [];
    let existingStudents = JSON.parse(localStorage.getItem("approvedStudents")) || [];

    studentsDatabase.forEach(student => {
      const resultEntry = {
        rollNo: student.rollNo,
        grNo: student.grNo,
        name: student.name,
        fatherName: student.fatherName,
        className: student.className,
        section: student.section,
        term: student.term,
        status: student.status,
        totalMarks: student.totalMarks,
        obtainedMarks: student.obtainedMarks,
        percentage: student.percentage,
        grade: student.grade,
        remarks: student.remarks,
        subjects: student.subjects,
        publishDate: new Date().toLocaleDateString()
      };

      existingResults = existingResults.filter(r => r.rollNo !== student.rollNo);
      existingResults.push(resultEntry);

      const accountExists = existingStudents.some(s => s.rollNo === student.rollNo);
      if (!accountExists) {
        existingStudents.push({
          id: student.grNo,
          rollNo: student.rollNo,
          name: student.name,
          fatherName: student.fatherName,
          email: `${student.rollNo.toLowerCase()}@school.edu.pk`,
          password: "123",
          class: student.className,
          status: "Approved"
        });
      }
    });

    localStorage.setItem("schoolResults", JSON.stringify(existingResults));
    localStorage.setItem("approvedStudents", JSON.stringify(existingStudents));
    setPublishedCount(existingResults.length);

    alert(`Successfully published First Term results for ${studentsDatabase.length} students to their portals!`);
  };

  const filteredStudents = studentsDatabase.filter(student => {
    const matchesClass = selectedClass === 'All' || student.className === selectedClass;
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          student.grNo.includes(searchTerm);
    return matchesClass && matchesSearch;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-slate-100 pb-5">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Examination Results Portal</h3>
          <p className="text-xs text-slate-500">Manage first term results, calculate grades, and push updates instantly to student portals.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="bg-blue-50 text-blue-700 px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-2">
            <Award size={16} /> Live on Portals: {publishedCount}
          </div>
          <button 
            onClick={handleBulkPublish}
            className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <CheckCircle size={16} /> Publish All Results
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-3 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search by name, roll no or GR..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none focus:border-blue-600 font-medium"
          />
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <select 
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
            className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 outline-none w-full sm:w-40"
          >
            <option value="All">All Classes</option>
            <option value="Class 5">Class 5</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-100">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b border-slate-100">
              <th className="p-3.5 font-bold">GR & Roll No</th>
              <th className="p-3.5 font-bold">Student Name</th>
              <th className="p-3.5 font-bold">Class</th>
              <th className="p-3.5 font-bold">Total Marks</th>
              <th className="p-3.5 font-bold">Obtained</th>
              <th className="p-3.5 font-bold">Percentage</th>
              <th className="p-3.5 font-bold">Grade</th>
              <th className="p-3.5 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.rollNo} className="hover:bg-slate-50/50">
                  <td className="p-3.5">
                    <p className="font-bold text-slate-800">{student.rollNo}</p>
                    <p className="text-[10px] text-slate-400">GR: {student.grNo}</p>
                  </td>
                  <td className="p-3.5">
                    <p className="font-bold text-slate-800">{student.name}</p>
                    <p className="text-[10px] text-slate-400">S/o {student.fatherName}</p>
                  </td>
                  <td className="p-3.5 font-medium text-slate-600">{student.className} ({student.section})</td>
                  <td className="p-3.5 text-slate-600">{student.totalMarks}</td>
                  <td className="p-3.5 font-bold text-blue-600">{student.obtainedMarks}</td>
                  <td className="p-3.5 font-bold text-slate-700">{student.percentage}</td>
                  <td className="p-3.5">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 font-bold rounded-md">
                      {student.grade}
                    </span>
                  </td>
                  <td className="p-3.5">
                    <span className="px-2 py-1 bg-blue-50 text-blue-700 font-bold rounded-md">
                      {student.status}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="p-8 text-center text-slate-400">
                  No student records found matching your filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
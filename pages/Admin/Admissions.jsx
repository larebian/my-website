import React, { useState, useEffect } from 'react';
import { UserCheck, Clock, XCircle, ShieldCheck } from 'lucide-react';

export default function Admissions() {
  const [pendingStudents, setPendingStudents] = useState([]);

  // Load pending students on mount & listen for live changes from storage
  useEffect(() => {
    const fetchPending = () => {
      const storedStudents = JSON.parse(localStorage.getItem("pendingStudents")) || [];
      setPendingStudents(storedStudents);
    };

    fetchPending();

    // Listen for storage changes if student registers from another tab/portal
    window.addEventListener('storage', fetchPending);
    return () => window.removeEventListener('storage', fetchPending);
  }, []);

  const handleApprove = (studentId) => {
    const storedPending = JSON.parse(localStorage.getItem("pendingStudents")) || [];
    const storedApproved = JSON.parse(localStorage.getItem("approvedStudents")) || [];
    const storedStudents = JSON.parse(localStorage.getItem("students")) || [];

    const studentToApprove = storedPending.find((s) => s.id === studentId);
    if (!studentToApprove) return;

    studentToApprove.status = "Approved";

    // Prevent duplicates in approved/students array
    const isAlreadyApproved = storedApproved.some(s => s.id === studentId || s.email === studentToApprove.email);
    if (!isAlreadyApproved) {
      storedApproved.push(studentToApprove);
      localStorage.setItem("approvedStudents", JSON.stringify(storedApproved));
    }

    const isAlreadyInStudents = storedStudents.some(s => s.id === studentId || s.email === studentToApprove.email);
    if (!isAlreadyInStudents) {
      storedStudents.push(studentToApprove);
      localStorage.setItem("students", JSON.stringify(storedStudents));
    }

    // Remove from pending
    const updatedPending = storedPending.filter((s) => s.id !== studentId);
    localStorage.setItem("pendingStudents", JSON.stringify(updatedPending));
    setPendingStudents(updatedPending);

    alert(`Student ${studentToApprove.name} has been approved successfully and granted portal access!`);
  };

  const handleReject = (studentId) => {
    if (window.confirm("Are you sure you want to reject this admission application?")) {
      const storedPending = JSON.parse(localStorage.getItem("pendingStudents")) || [];
      const updatedPending = storedPending.filter((s) => s.id !== studentId);
      localStorage.setItem("pendingStudents", JSON.stringify(updatedPending));
      setPendingStudents(updatedPending);

      alert("Student application has been rejected.");
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Online Admission Applications</h3>
          <p className="text-xs text-slate-400">Review and approve self-registered student accounts</p>
        </div>
        <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold border border-blue-100">
          Session 2026-2027
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 text-slate-400 text-xs uppercase font-semibold border-b border-slate-200">
              <th className="py-3 px-4">Applicant Name</th>
              <th className="py-3 px-4">Father's Name</th>
              <th className="py-3 px-4">Roll No / Email</th>
              <th className="py-3 px-4">Class</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm font-medium text-slate-700">
            {pendingStudents.length === 0 ? (
              <tr>
                <td colSpan="6" className="py-12 text-center text-slate-400 text-xs">
                  No pending student applications found.
                </td>
              </tr>
            ) : (
              pendingStudents.map((student) => (
                <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-3 px-4 font-bold text-slate-900 flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center text-xs font-extrabold">
                      {student.name?.charAt(0).toUpperCase()}
                    </div>
                    <span>{student.name}</span>
                  </td>
                  <td className="py-3 px-4 text-slate-600">{student.fatherName || "N/A"}</td>
                  <td className="py-3 px-4 text-slate-500 text-xs">
                    <div className="font-semibold text-blue-600">{student.rollNo || "Auto-gen"}</div>
                    <div className="text-[11px] text-slate-400">{student.email || "No Email"}</div>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold">
                      {student.classGrade || student.className || "N/A"}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold border border-amber-100 inline-flex items-center gap-1">
                      <Clock size={12} /> {student.status || "Pending"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right space-x-2">
                    <button 
                      onClick={() => handleApprove(student.id)}
                      className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm inline-flex items-center gap-1"
                    >
                      <UserCheck size={14} /> Approve
                    </button>
                    <button 
                      onClick={() => handleReject(student.id)}
                      className="px-3.5 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-bold transition-colors cursor-pointer shadow-sm inline-flex items-center gap-1"
                    >
                      <XCircle size={14} /> Reject
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
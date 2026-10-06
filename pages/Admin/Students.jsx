import React, { useState, useEffect } from 'react';
import { Search, UserPlus, X, Trash2, Phone, Lock, CheckCircle, Clock } from 'lucide-react';
import { getStudents, addStudent as addStudentAPI } from '../../services/studentService';

export default function Students() {
  const [students, setStudents] = useState([]);
  const [pendingStudents, setPendingStudents] = useState([]);
  const [activeSubTab, setActiveSubTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    rollNo: '',
    classGrade: '',
    section: 'A',
    admissionYear: new Date().getFullYear(),
    email: '',
    phone: '',
    password: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const data = await getStudents();
      setStudents(data);
      const savedPending = JSON.parse(localStorage.getItem("pendingStudents")) || JSON.parse(localStorage.getItem("admissions")) || [];
      setPendingStudents(savedPending);
    } catch (err) {
      console.error("Error loading students:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddStudent = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.classGrade || !formData.password) {
      alert("Please fill in the required fields (Name, Class, and Password).");
      return;
    }

    const response = await addStudentAPI(formData);
    if (response) {
      alert("Student successfully added and saved to MongoDB!");
      loadData(); 
      setFormData({ 
        name: '', 
        fatherName: '', 
        rollNo: '',
        email: '', 
        phone: '', 
        classGrade: '', 
        section: 'A',
        admissionYear: new Date().getFullYear(), 
        password: '' 
      });
      setIsModalOpen(false);
    } else {
      alert("Failed to save student to database.");
    }
  };

  const handleApproveStudent = async (student) => {
    const password = prompt(`Set login password for ${student.name}:`, student.password || "123456");
    if (!password) return;

    const approvedStudent = {
      name: student.name,
      fatherName: student.fatherName || "",
      rollNo: student.rollNo || "",
      email: student.email || "",
      phone: student.phone || student.mobileNo || "",
      classGrade: student.classGrade || student.className || "",
      section: student.section || "A",
      admissionYear: student.admissionYear || new Date().getFullYear(),
      password: password,
      status: "Active"
    };

    const response = await addStudentAPI(approvedStudent);
    if (response) {
      loadData();
      const updatedPending = pendingStudents.filter(s => s.id !== student.id && s.email !== student.email);
      setPendingStudents(updatedPending);
      localStorage.setItem("pendingStudents", JSON.stringify(updatedPending));
      localStorage.setItem("admissions", JSON.stringify(updatedPending));

      alert(`Student ${student.name} approved and saved to MongoDB!`);
    } else {
      alert("Error approving student.");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await fetch(`http://localhost:5000/api/students/${id}`, {
          method: 'DELETE',
        });
        loadData();
      } catch (err) {
        console.error("Error deleting student:", err);
      }
    }
  };

  const handleDeletePending = (id) => {
    if (window.confirm("Are you sure you want to reject/delete this request?")) {
      const updatedPending = pendingStudents.filter(student => student.id !== id);
      setPendingStudents(updatedPending);
      localStorage.setItem("pendingStudents", JSON.stringify(updatedPending));
      localStorage.setItem("admissions", JSON.stringify(updatedPending));
    }
  };

  const filteredStudents = students.filter(student => 
    student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (student.rollNo && student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (student.classGrade && student.classGrade.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredPending = pendingStudents.filter(student => 
    student.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (student.classGrade && student.classGrade.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <button
            onClick={() => setActiveSubTab('all')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer ${
              activeSubTab === 'all' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Active Students ({students.length})
          </button>
          <button
            onClick={() => setActiveSubTab('pending')}
            className={`px-5 py-2.5 rounded-xl font-bold text-xs transition-all cursor-pointer relative ${
              activeSubTab === 'pending' 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Portal Registrations ({pendingStudents.length})
            {pendingStudents.length > 0 && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></span>
            )}
          </button>
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
        >
          <UserPlus size={18} />
          <span>+ Add New Student</span>
        </button>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs flex items-center gap-3">
        <Search size={18} className="text-slate-400 ml-2" />
        <input 
          type="text" 
          placeholder="Search by name, roll no, or class..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full text-xs text-slate-800 focus:outline-none bg-transparent"
        />
      </div>

      {activeSubTab === 'all' ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                  <th className="p-4 pl-6">Student Name</th>
                  <th className="p-4">Father's Name</th>
                  <th className="p-4">Roll No</th>
                  <th className="p-4">Class</th>
                  <th className="p-4">Section</th>
                  <th className="p-4">Portal Password</th>
                  <th className="p-4">Contact</th>
                  <th className="p-4 text-center pr-6">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredStudents.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="p-12 text-center text-slate-400">
                      No active students found in MongoDB.
                    </td>
                  </tr>
                ) : (
                  filteredStudents.map((student) => (
                    <tr key={student._id || student.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 pl-6 font-bold text-slate-900 flex items-center space-x-3">
                        <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-xs">
                          {student.name?.charAt(0).toUpperCase()}
                        </div>
                        <span>{student.name}</span>
                      </td>
                      <td className="p-4 text-slate-600">{student.fatherName || "N/A"}</td>
                      <td className="p-4 font-semibold text-blue-600">{student.rollNo}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold border border-amber-100">
                          {student.classGrade || student.class}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-slate-600">{student.section || "A"}</td>
                      <td className="p-4 font-mono text-slate-600 text-xs bg-slate-50/50 rounded">
                        {student.password || "N/A"}
                      </td>
                      <td className="p-4 text-slate-500 text-xs">
                        <div className="flex items-center space-x-1"><Phone size={12} /><span>{student.phone || "N/A"}</span></div>
                      </td>
                      <td className="p-4 text-center pr-6 space-x-2">
                        <button 
                          onClick={() => handleDelete(student._id || student.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer inline-block"
                          title="Delete Student"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
          <div className="p-4 bg-amber-50 border-b border-amber-100 text-xs text-amber-800 font-medium flex items-center gap-2">
            <Clock size={16} /> These students registered themselves from the Student Portal. Approve them to save directly to MongoDB.
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                  <th className="p-4 pl-6">Applicant Name</th>
                  <th className="p-4">Father's Name</th>
                  <th className="p-4">Roll No</th>
                  <th className="p-4">Class Requested</th>
                  <th className="p-4">Contact / Email</th>
                  <th className="p-4 text-center pr-6">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filteredPending.length === 0 ? (
                  <tr>
                    <td colSpan="6" className="p-12 text-center text-slate-400">
                      No pending portal registrations found.
                    </td>
                  </tr>
                ) : (
                  filteredPending.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50/60 transition-colors">
                      <td className="p-4 pl-6 font-bold text-slate-900">
                        {student.name}
                      </td>
                      <td className="p-4 text-slate-600">{student.fatherName || "N/A"}</td>
                      <td className="p-4 font-semibold text-blue-600">{student.rollNo || "Auto"}</td>
                      <td className="p-4">
                        <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-bold border border-blue-100">
                          {student.classGrade || student.className}
                        </span>
                      </td>
                      <td className="p-4 text-slate-500 text-xs">
                        {student.phone || student.mobileNo || student.email || "N/A"}
                      </td>
                      <td className="p-4 text-center pr-6 space-x-2">
                        <button 
                          onClick={() => handleApproveStudent(student)}
                          className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer inline-flex items-center gap-1"
                        >
                          <CheckCircle size={14} /> Approve & Save to DB
                        </button>
                        <button 
                          onClick={() => handleDeletePending(student.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer inline-block"
                          title="Reject"
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200">
            <div className="flex justify-between items-center px-6 py-5 bg-slate-900 text-white">
              <div>
                <h3 className="font-bold text-lg">Add New Student</h3>
                <p className="text-xs text-slate-400">Register student directly to MongoDB database</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-2">
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleAddStudent} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Student Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="e.g. Ali Khan" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Father's Name</label>
                  <input 
                    type="text" 
                    name="fatherName" 
                    placeholder="e.g. Ahmed Khan" 
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              {/* Added Roll No Field Matching Table Header */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Roll No (Optional)</label>
                  <input 
                    type="text" 
                    name="rollNo" 
                    placeholder="Auto-generated if empty" 
                    value={formData.rollNo}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 font-semibold text-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Class / Grade *</label>
                  <input 
                    type="text" 
                    name="classGrade" 
                    required 
                    placeholder="e.g. Grade 8" 
                    value={formData.classGrade}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Section</label>
                  <input 
                    type="text" 
                    name="section" 
                    placeholder="e.g. A" 
                    value={formData.section}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Admission Year</label>
                  <select 
                    name="admissionYear" 
                    value={formData.admissionYear}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  >
                    {Array.from({ length: 2026 - 2013 + 1 }, (_, i) => 2013 + i).map(year => (
                      <option key={year} value={year}>{year}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="student@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase">Phone</label>
                  <input 
                    type="text" 
                    name="phone" 
                    placeholder="0300-1234567" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase flex items-center gap-1">
                  <Lock size={12} className="text-blue-600" /> Portal Password *
                </label>
                <input 
                  type="text" 
                  name="password" 
                  required 
                  placeholder="Set login password" 
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-blue-50/40 border border-blue-200 rounded-xl text-sm font-mono focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg cursor-pointer"
                >
                  Save to Database
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
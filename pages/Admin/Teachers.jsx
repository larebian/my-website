import React, { useState, useEffect } from 'react';
import { Search, UserPlus, X, Trash2, Phone, Mail, BookOpen } from 'lucide-react';

export default function Teachers() {
  const [teachers, setTeachers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for New Teacher
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    email: '',
    phone: '',
    qualification: ''
  });

  // Load teachers from localStorage on mount
  useEffect(() => {
    const savedTeachers = JSON.parse(localStorage.getItem("teachers")) || [];
    setTeachers(savedTeachers);
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Save New Teacher
  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.subject) {
      alert("Please fill in the required fields (Name and Subject).");
      return;
    }

    const newTeacher = {
      ...formData,
      id: Date.now()
    };

    const updatedTeachers = [...teachers, newTeacher];
    setTeachers(updatedTeachers);
    localStorage.setItem("teachers", JSON.stringify(updatedTeachers));

    // Reset Form & Close Modal
    setFormData({ name: '', subject: '', email: '', phone: '', qualification: '' });
    setIsModalOpen(false);
  };

  // Delete Teacher
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this teacher?")) {
      const updatedTeachers = teachers.filter(teacher => teacher.id !== id);
      setTeachers(updatedTeachers);
      localStorage.setItem("teachers", JSON.stringify(updatedTeachers));
    }
  };

  // Filtered teachers based on search
  const filteredTeachers = teachers.filter(teacher => 
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.subject.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Top Header & Directory Control */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-3.5 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search by teacher name or subject..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600 transition-colors"
          />
        </div>

        <button 
          onClick={() => setIsModalOpen(true)}
          className="w-full md:w-auto flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
        >
          <UserPlus size={18} />
          <span>+ Add Teacher</span>
        </button>
      </div>

      {/* Teachers Table / Directory */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider text-xs border-b border-slate-200">
                <th className="p-4 pl-6">Teacher Name</th>
                <th className="p-4">Subject</th>
                <th className="p-4">Qualification</th>
                <th className="p-4">Contact</th>
                <th className="p-4 text-center pr-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
              {filteredTeachers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-12 text-center text-slate-400">
                    No teachers found. Click "+ Add Teacher" to add one.
                  </td>
                </tr>
              ) : (
                filteredTeachers.map((teacher) => (
                  <tr key={teacher.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-4 pl-6 font-bold text-slate-900 flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-extrabold text-xs">
                        {teacher.name.charAt(0).toUpperCase()}
                      </div>
                      <span>{teacher.name}</span>
                    </td>
                    <td className="p-4">
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-bold border border-purple-100">
                        {teacher.subject}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{teacher.qualification || "N/A"}</td>
                    <td className="p-4 text-slate-500 text-xs space-y-1">
                      <div className="flex items-center space-x-1"><Mail size={12} /><span>{teacher.email || "N/A"}</span></div>
                      <div className="flex items-center space-x-1"><Phone size={12} /><span>{teacher.phone || "N/A"}</span></div>
                    </td>
                    <td className="p-4 text-center pr-6 space-x-2">
                      <button 
                        onClick={() => handleDelete(teacher.id)}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition-colors cursor-pointer inline-block"
                        title="Delete Teacher"
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

      {/* Modern Add Teacher Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden border border-slate-200 animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-5 bg-slate-900 text-white">
              <div>
                <h3 className="font-bold text-lg">Add New Teacher</h3>
                <p className="text-xs text-slate-400">Fill in the details to register a faculty member</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 rounded-xl transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Form */}
            <form onSubmit={handleAddTeacher} className="p-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Teacher Name *</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    placeholder="e.g. Sir Kamran" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Subject *</label>
                  <input 
                    type="text" 
                    name="subject" 
                    required 
                    placeholder="e.g. Mathematics" 
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Qualification</label>
                  <input 
                    type="text" 
                    name="qualification" 
                    placeholder="e.g. M.Sc Mathematics" 
                    value={formData.qualification}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Phone Number</label>
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
                <label className="block text-xs font-bold text-slate-700 mb-1 uppercase tracking-wider">Email Address</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="teacher@example.com" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              {/* Form Action Buttons */}
              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                >
                  Save Teacher
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
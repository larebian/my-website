import React, { useState, useEffect } from 'react';
import { Layers, Plus, Users, Trash2, Edit3, X, BookOpen, Check, ChevronDown, ChevronUp, User } from 'lucide-react';

const CLASS_OPTIONS = [
  "Nursery", "Kindergarten-I", "Kindergarten Two",
  "Grade 1", "Grade 2", "Grade 3", "Grade 4", "Grade 5",
  "Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10"
];

const SECTION_OPTIONS = ["T", "L", "P", "S", "M", "K"];

export default function Classes() {
  const [classesList, setClassesList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  
  // Expanded card state
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [activeTabSection, setActiveTabSection] = useState({});

  // Form States
  const [selectedClass, setSelectedClass] = useState("Nursery");
  const [selectedSections, setSelectedSections] = useState([]);
  const [newIncharge, setNewIncharge] = useState('');
  
  // Section students storage
  const [sectionStudents, setSectionStudents] = useState({});
  
  // Temporary input state for adding a student inside modal
  const [currentSecInput, setCurrentSecInput] = useState({ name: '', fname: '', caste: '' });
  const [activeInputSection, setActiveInputSection] = useState('');

  // Load saved classes on mount
  useEffect(() => {
    const savedClasses = JSON.parse(localStorage.getItem("classesList")) || [];
    setClassesList(savedClasses);
  }, []);

  // Handle Section Checkbox Selection in Modal
  const handleSectionToggle = (section) => {
    if (selectedSections.includes(section)) {
      setSelectedSections(selectedSections.filter(s => s !== section));
      const updatedStudents = { ...sectionStudents };
      delete updatedStudents[section];
      setSectionStudents(updatedStudents);
    } else {
      setSelectedSections([...selectedSections, section]);
      setSectionStudents({ ...sectionStudents, [section]: [] });
    }
  };

  // Add a student locally inside the class section
  const handleAddStudentToSection = (sec) => {
    if (!currentSecInput.name.trim()) {
      alert("Please enter student name.");
      return;
    }

    const newStudentObj = {
      id: Date.now() + Math.random(),
      name: currentSecInput.name.trim(),
      fatherName: currentSecInput.fname.trim() || 'N/A',
      caste: currentSecInput.caste.trim() || 'N/A'
    };

    const existingList = sectionStudents[sec] || [];
    setSectionStudents({
      ...sectionStudents,
      [sec]: [...existingList, newStudentObj]
    });

    // Reset inputs
    setCurrentSecInput({ name: '', fname: '', caste: '' });
  };

  // Remove a student from section
  const handleRemoveStudentFromSection = (sec, studentId) => {
    const updatedList = sectionStudents[sec].filter(s => s.id !== studentId);
    setSectionStudents({
      ...sectionStudents,
      [sec]: updatedList
    });
  };

  // Open Modal for Adding New Class
  const handleOpenAddModal = () => {
    setEditingId(null);
    setSelectedClass("Nursery");
    setSelectedSections([]);
    setNewIncharge('');
    setSectionStudents({});
    setIsModalOpen(true);
  };

  // Open Modal for Editing Class
  const handleOpenEditModal = (cls) => {
    setEditingId(cls.id);
    setSelectedClass(cls.name);
    setSelectedSections(cls.sections || []);
    setNewIncharge(cls.incharge === 'Unassigned' ? '' : cls.incharge);
    setSectionStudents(cls.sectionStudents || {});
    setIsModalOpen(true);
  };

  // Save or Update Class (Local only)
  const handleSaveClass = (e) => {
    e.preventDefault();
    if (!selectedClass) {
      alert("Please select a class name.");
      return;
    }
    if (selectedSections.length === 0) {
      alert("Please select at least one section.");
      return;
    }

    const teacherName = newIncharge.trim() || 'Unassigned';

    let updated = [];
    if (editingId) {
      updated = classesList.map(cls => {
        if (cls.id === editingId) {
          return {
            ...cls,
            name: selectedClass,
            sections: selectedSections,
            incharge: teacherName,
            sectionStudents: sectionStudents
          };
        }
        return cls;
      });
      alert("Class updated successfully!");
    } else {
      const newClassItem = {
        id: Date.now(),
        name: selectedClass,
        sections: selectedSections,
        incharge: teacherName,
        sectionStudents: sectionStudents
      };
      updated = [...classesList, newClassItem];
      alert("Class created successfully!");
    }

    setClassesList(updated);
    localStorage.setItem("classesList", JSON.stringify(updated));
    setIsModalOpen(false);
  };

  // Delete Class
  const handleDeleteClass = (id) => {
    if (window.confirm("Are you sure you want to delete this class?")) {
      const updated = classesList.filter(c => c.id !== id);
      setClassesList(updated);
      localStorage.setItem("classesList", JSON.stringify(updated));
    }
  };

  // Toggle Card Expansion
  const toggleCardExpand = (id, firstSection) => {
    if (expandedCardId === id) {
      setExpandedCardId(null);
    } else {
      setExpandedCardId(id);
      if (firstSection && !activeTabSection[id]) {
        setActiveTabSection({ ...activeTabSection, [id]: firstSection });
      }
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Classes & Sections Management</h3>
          <p className="text-xs text-slate-500">Configure your school classes, sections, and student rosters.</p>
        </div>
        <button 
          onClick={handleOpenAddModal}
          className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer flex items-center gap-2"
        >
          <Plus size={16} /> Add New Class
        </button>
      </div>

      {/* Classes Grid */}
      {classesList.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-12 text-center space-y-3">
          <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
            <BookOpen size={24} />
          </div>
          <h4 className="font-bold text-slate-800 text-base">No Classes Added Yet</h4>
          <p className="text-xs text-slate-400 max-w-sm mx-auto">
            Click <strong className="text-slate-600">"Add New Class"</strong> to configure your class sections and rosters.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {classesList.map((cls) => {
            const isExpanded = expandedCardId === cls.id;
            const currentActiveSec = activeTabSection[cls.id] || (cls.sections && cls.sections[0]);
            const totalClassStudents = Object.values(cls.sectionStudents || {}).reduce((acc, curr) => acc + (curr?.length || 0), 0);

            return (
              <div key={cls.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-500 transition-all flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                      <BookOpen size={20} />
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => handleOpenEditModal(cls)} className="text-slate-400 hover:text-blue-600 p-1.5 rounded-lg cursor-pointer"><Edit3 size={16} /></button>
                      <button onClick={() => handleDeleteClass(cls.id)} className="text-slate-400 hover:text-red-500 p-1.5 rounded-lg cursor-pointer"><Trash2 size={16} /></button>
                    </div>
                  </div>

                  <h4 className="font-extrabold text-base text-slate-900 mt-4">{cls.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-slate-400">In-Charge: <span className="font-semibold text-slate-700">{cls.incharge}</span></p>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-md border border-emerald-100">
                      {totalClassStudents} Students
                    </span>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-semibold uppercase tracking-wider">Active Sections</span>
                    <div className="flex gap-1 flex-wrap justify-end">
                      {cls.sections?.map((sec, i) => (
                        <span key={i} className="px-2 py-0.5 bg-blue-50 text-blue-700 font-bold rounded-md border border-blue-100">Sec {sec}</span>
                      ))}
                    </div>
                  </div>

                  {cls.sections && cls.sections.length > 0 && (
                    <div>
                      <button 
                        onClick={() => toggleCardExpand(cls.id, cls.sections[0])}
                        className="w-full py-2 px-3 bg-slate-50 hover:bg-slate-100 rounded-xl text-xs font-bold text-slate-700 flex items-center justify-between cursor-pointer border border-slate-200"
                      >
                        <span className="flex items-center gap-1.5"><Users size={14} className="text-blue-600" /> View Section Rosters</span>
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                          <div className="flex gap-1 overflow-x-auto pb-1">
                            {cls.sections.map((sec) => (
                              <button
                                key={sec}
                                onClick={() => setActiveTabSection({ ...activeTabSection, [cls.id]: sec })}
                                className={`px-2.5 py-1 rounded-lg text-xs font-bold cursor-pointer ${currentActiveSec === sec ? 'bg-blue-600 text-white' : 'bg-white text-slate-600 border'}`}
                              >
                                Sec {sec} ({cls.sectionStudents?.[sec]?.length || 0})
                              </button>
                            ))}
                          </div>

                          <div className="bg-white p-3 rounded-lg border border-slate-200 text-xs space-y-2 max-h-40 overflow-y-auto">
                            {cls.sectionStudents?.[currentActiveSec]?.length > 0 ? (
                              cls.sectionStudents[currentActiveSec].map((stu, idx) => (
                                <div key={idx} className="p-2 bg-slate-50 rounded-lg border border-slate-100 flex flex-col space-y-0.5">
                                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                    <User size={12} className="text-blue-600" /> {stu.name}
                                  </div>
                                  <div className="text-[11px] text-slate-500 pl-4 flex gap-3">
                                    <span><strong>F/N:</strong> {stu.fatherName}</span>
                                    <span><strong>Caste:</strong> {stu.caste}</span>
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p className="text-slate-400 italic text-[11px]">No students in Section {currentActiveSec}</p>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden border border-slate-200 my-8">
            <div className="flex justify-between items-center px-6 py-5 bg-slate-900 text-white">
              <div>
                <h3 className="font-bold text-lg">{editingId ? 'Edit Class & Roster' : 'Add Class & Section Roster'}</h3>
                <p className="text-xs text-slate-400">Manage class sections and student lists independently</p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white p-2"><X size={20} /></button>
            </div>

            <form onSubmit={handleSaveClass} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Select Class Name *</label>
                <select 
                  value={selectedClass}
                  onChange={(e) => setSelectedClass(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-none focus:border-blue-600"
                >
                  {CLASS_OPTIONS.map((c, i) => <option key={i} value={c}>{c}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Select Sections *</label>
                <div className="grid grid-cols-3 gap-2">
                  {SECTION_OPTIONS.map((sec, i) => {
                    const isSelected = selectedSections.includes(sec);
                    return (
                      <button
                        type="button"
                        key={i}
                        onClick={() => handleSectionToggle(sec)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer flex items-center justify-center gap-2 ${isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                      >
                        {isSelected && <Check size={14} />} Section {sec}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedSections.length > 0 && (
                <div className="space-y-4 pt-2">
                  <label className="block text-xs font-extrabold text-slate-900 uppercase tracking-wider border-b pb-1">
                    Add Students (Name, Father's Name, Caste)
                  </label>
                  
                  {selectedSections.map((sec) => (
                    <div key={sec} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-3">
                      <span className="font-bold text-xs text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-100">
                        Section {sec} ({sectionStudents[sec]?.length || 0} Students)
                      </span>

                      {sectionStudents[sec]?.length > 0 && (
                        <div className="space-y-1.5 bg-white p-2.5 rounded-xl border border-slate-200 max-h-36 overflow-y-auto">
                          {sectionStudents[sec].map((stu) => (
                            <div key={stu.id} className="flex justify-between items-center text-xs p-1.5 bg-slate-50 rounded-lg border border-slate-100">
                              <div>
                                <span className="font-bold text-slate-900">{stu.name}</span> 
                                <span className="text-slate-400 mx-1">|</span> 
                                <span className="text-slate-600">F/N: {stu.fatherName}</span>
                                <span className="text-slate-400 mx-1">|</span> 
                                <span className="text-slate-600">Caste: {stu.caste}</span>
                              </div>
                              <button type="button" onClick={() => handleRemoveStudentFromSection(sec, stu.id)} className="text-red-500 hover:text-red-700 p-1 cursor-pointer"><Trash2 size={14} /></button>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                        <input 
                          type="text" placeholder="Student Name *" 
                          value={activeInputSection === sec ? currentSecInput.name : ''}
                          onChange={(e) => { setActiveInputSection(sec); setCurrentSecInput({ ...currentSecInput, name: e.target.value }); }}
                          className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600"
                        />
                        <input 
                          type="text" placeholder="Father's Name (F/Name)" 
                          value={activeInputSection === sec ? currentSecInput.fname : ''}
                          onChange={(e) => { setActiveInputSection(sec); setCurrentSecInput({ ...currentSecInput, fname: e.target.value }); }}
                          className="px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600"
                        />
                        <div className="flex gap-2">
                          <input 
                            type="text" placeholder="Caste" 
                            value={activeInputSection === sec ? currentSecInput.caste : ''}
                            onChange={(e) => { setActiveInputSection(sec); setCurrentSecInput({ ...currentSecInput, caste: e.target.value }); }}
                            className="w-full px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-600"
                          />
                          <button type="button" onClick={() => handleAddStudentToSection(sec)} className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold cursor-pointer shrink-0">Add</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wider">Class In-Charge / Teacher Name</label>
                <input 
                  type="text" placeholder="e.g. Sir Aslam" 
                  value={newIncharge}
                  onChange={(e) => setNewIncharge(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 focus:outline-none focus:border-blue-600"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
                <button type="button" onClick={() => setIsModalOpen(false)} className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm rounded-xl cursor-pointer">Cancel</button>
                <button type="submit" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-xl shadow-lg cursor-pointer">Save Class</button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
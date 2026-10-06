import React, { useState, useContext } from "react";
import { SchoolContext } from "../../context/SchoolContext";
import { FaBook, FaCalendarAlt, FaPlusCircle, FaTrash, FaCheckCircle } from "react-icons/fa";

function AdminHomework() {
  const { homeworkList, setHomeworkList } = useContext(SchoolContext);
  
  const [subject, setSubject] = useState("English");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleAddHomework = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert("Baraye meharbani homework ka title ya task zaroor likhein!");
      return;
    }

    const newTask = {
      id: Date.now(),
      subject,
      title,
      description: description || "No additional description provided.",
      date: dueDate || new Date().toLocaleDateString("en-US", { month: 'short', day: 'numeric', year: 'numeric' })
    };

    // Update state & localStorage via context if available or direct fallback
    const updatedList = [newTask, ...(homeworkList || [])];
    if (setHomeworkList) {
      setHomeworkList(updatedList);
    }
    localStorage.setItem("schoolHomeworkList", JSON.stringify(updatedList));

    // Reset Form
    setTitle("");
    setDescription("");
    setDueDate("");
    setSuccessMsg("Homework successfully assigned to student portal!");
    setTimeout(() => setSuccessMsg(""), 4000);
  };

  const handleDeleteHomework = (id) => {
    const updatedList = homeworkList.filter(item => item.id !== id);
    if (setHomeworkList) {
      setHomeworkList(updatedList);
    }
    localStorage.setItem("schoolHomeworkList", JSON.stringify(updatedList));
  };

  return (
    <div className="space-y-6 pb-12 overflow-y-auto max-h-[calc(100vh-100px)] pr-2 custom-scrollbar">
      
      {/* Top Header Card */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="font-extrabold text-lg text-slate-800 tracking-tight">Admin Homework Manager</h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">Assign daily homework tasks and instructions directly to the student portal.</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3.5 py-2 bg-blue-50 text-blue-700 font-extrabold text-xs rounded-xl border border-blue-100 flex items-center gap-1.5 shadow-sm">
            <FaBook size={13} className="text-blue-600" /> Total Active: {homeworkList?.length || 0}
          </span>
        </div>
      </div>

      {successMsg && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs font-extrabold flex items-center gap-2 shadow-sm">
          <FaCheckCircle className="text-emerald-600 text-sm" /> {successMsg}
        </div>
      )}

      {/* Add Homework Form */}
      <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
        <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-2">
          <FaPlusCircle className="text-blue-600" /> Publish New Assignment / Homework
        </h4>

        <form onSubmit={handleAddHomework} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700">Select Subject</label>
            <select
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
            >
              <option value="English">English</option>
              <option value="Urdu">Urdu</option>
              <option value="Mathematics">Mathematics</option>
              <option value="General Science">General Science</option>
              <option value="Islamiat & HQ">Islamiat & HQ</option>
              <option value="Computer Studies">Computer Studies</option>
            </select>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700">Due Date</label>
            <input
              type="text"
              placeholder="e.g. Aug 05, 2026"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700">Homework Title / Task Heading</label>
            <input
              type="text"
              placeholder="e.g. Solve Exercise 4.2 questions 1 to 5 in notebooks"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-extrabold text-slate-700">Detailed Instructions (Optional)</label>
            <textarea
              rows="3"
              placeholder="Add specific guidelines or notes for students..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-blue-500 resize-none"
            ></textarea>
          </div>

          <div className="md:col-span-2 pt-2">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer flex items-center gap-2"
            >
              <FaPlusCircle /> Publish Homework to Student Portal
            </button>
          </div>
        </form>
      </div>

      {/* Active Homework List in Admin View */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-6 space-y-4">
        <h4 className="text-sm font-extrabold text-slate-900">Currently Active Homeworks on Portal</h4>

        {(!homeworkList || homeworkList.length === 0) ? (
          <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-xs font-semibold">
            No homework currently active. Use the form above to add one.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {homeworkList.map((task) => (
              <div key={task.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-extrabold text-blue-700 uppercase bg-blue-100 px-2.5 py-0.5 rounded-md">
                      {task.subject}
                    </span>
                    <button
                      onClick={() => handleDeleteHomework(task.id)}
                      className="text-red-500 hover:text-red-700 p-1 cursor-pointer"
                      title="Delete Homework"
                    >
                      <FaTrash size={13} />
                    </button>
                  </div>
                  <h5 className="font-extrabold text-slate-900 text-xs">{task.title}</h5>
                  {task.description && <p className="text-[11px] text-slate-600 mt-1">{task.description}</p>}
                </div>
                <div className="pt-2 border-t border-slate-200/60 text-[10px] text-slate-500 flex items-center gap-1 font-semibold">
                  <FaCalendarAlt className="text-blue-600" /> Due: {task.date}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default AdminHomework;
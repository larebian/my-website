import React, { useState } from 'react';
import { Save, Shield, Database, Bell } from 'lucide-react';

export default function Settings() {
  const [settings, setSettings] = useState({
    schoolName: 'The Lareb Public School',
    academicSession: '2026-2027',
    smsGateway: 'Active',
    portalMaintenance: false,
    autoEnrollment: true
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem('schoolSettings', JSON.stringify(settings));
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 space-y-6">
      <div className="border-b border-slate-100 pb-4">
        <h3 className="font-bold text-lg text-slate-800">System Configuration & Settings</h3>
        <p className="text-xs text-slate-500">Manage institutional parameters, academic sessions, and portal states.</p>
      </div>

      <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">School Name</label>
            <input 
              type="text" 
              name="schoolName"
              value={settings.schoolName}
              onChange={handleChange}
              className="w-full p-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-600 font-medium" 
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">Academic Session</label>
            <input 
              type="text" 
              name="academicSession"
              value={settings.academicSession}
              onChange={handleChange}
              className="w-full p-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-600 font-medium" 
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">SMS Gateway Status</label>
            <select 
              name="smsGateway"
              value={settings.smsGateway}
              onChange={handleChange}
              className="w-full p-2.5 border border-slate-200 rounded-xl text-sm outline-none focus:border-blue-600 bg-white font-medium"
            >
              <option value="Active">Active (Connected)</option>
              <option value="Sandbox">Sandbox Mode</option>
              <option value="Disabled">Disabled</option>
            </select>
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t border-slate-100">
          <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Portal Security & Access Controls</h4>
          
          <label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50/50 cursor-pointer">
            <div className="flex items-center gap-3">
              <Shield size={18} className="text-blue-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">Student Portal Maintenance Mode</p>
                <p className="text-[11px] text-slate-400">Temporarily restrict student login access during updates.</p>
              </div>
            </div>
            <input 
              type="checkbox" 
              name="portalMaintenance"
              checked={settings.portalMaintenance}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50/50 cursor-pointer">
            <div className="flex items-center gap-3">
              <Database size={18} className="text-emerald-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">Auto-Enroll Approved Admissions</p>
                <p className="text-[11px] text-slate-400">Automatically generate student portal credentials upon admission approval.</p>
              </div>
            </div>
            <input 
              type="checkbox" 
              name="autoEnrollment"
              checked={settings.autoEnrollment}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
            />
          </label>
        </div>

        <div className="flex items-center gap-4 pt-2">
          <button 
            type="submit"
            className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold transition-colors shadow-md cursor-pointer"
          >
            <Save size={16} /> Save Changes
          </button>
          {saved && (
            <span className="text-xs font-bold text-emerald-600 animate-fade-in">
              Configuration updated successfully!
            </span>
          )}
        </div>
      </form>
    </div>
  );
}
import React, { useState, useEffect } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  GraduationCap, 
  DollarSign, 
  BookOpen, 
  FileText, 
  Calendar, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  TrendingUp,
  UserCheck,
  Building,
  BookMarked,
  Award
} from 'lucide-react';

// Import Admin Sub-Pages
import AdminStudents from './Students';
import AdminTeachers from './Teachers';
import AdminAdmissions from './Admissions';
import AdminFees from './Fees';
import AdminHomework from './AdminHomework';
import AdminAccounts from './Accounts';
import AdminClasses from './Classes';
import AdminSubjects from './Subjects';
import AdminTimetable from './Timetable';
import AdminReports from './Reports';
import AdminResults from './Results';
import AdminSettings from './Settings';

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const [totalStudentsCount, setTotalStudentsCount] = useState(0);
  const [totalTeachersCount, setTotalTeachersCount] = useState(0);
  const [monthlyRevenue, setMonthlyRevenue] = useState(0);
  const [activeClassesCount, setActiveClassesCount] = useState(0);

  // MongoDB Backend se data fetch karne ke liye useEffect
  useEffect(() => {
    // 1. Dashboard Stats API (Students, Teachers, Monthly Revenue)
    fetch('http://localhost:5000/api/dashboard/stats')
      .then(res => res.json())
      .then(data => {
        setTotalStudentsCount(data.totalStudents || 0);
        setTotalTeachersCount(data.totalTeachers || 0);
        setMonthlyRevenue(data.monthlyRevenue || 0);
      })
      .catch(err => console.log('Error fetching dashboard stats:', err));

    // 2. Classes Count API
    fetch('http://localhost:5000/api/classes')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setActiveClassesCount(data.length);
        }
      })
      .catch(err => {
        // Fallback agar classes API na ho toh 0 show ho
        setActiveClassesCount(0);
      });
  }, [activeTab]);

  const formatRevenue = (amount) => {
    if (amount >= 1000000) {
      return `Rs. ${(amount / 1000000).toFixed(1)}M`;
    }
    return `Rs. ${amount.toLocaleString()}`;
  };

  const menuItems = [
    { id: 'overview', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'students', label: 'Students', icon: Users },
    { id: 'teachers', label: 'Teachers', icon: GraduationCap },
    { id: 'admissions', label: 'Admissions', icon: UserCheck },
    { id: 'fees', label: 'Fee Management', icon: DollarSign },
    { id: 'homework', label: 'Homework Manager', icon: BookOpen },
    { id: 'accounts', label: 'Accounts', icon: Building },
    { id: 'classes', label: 'Classes & Sections', icon: BookOpen },
    { id: 'subjects', label: 'Subjects', icon: BookMarked },
    { id: 'timetable', label: 'Timetable', icon: Calendar },
    { id: 'results', label: 'Exam Results', icon: Award },
    { id: 'reports', label: 'Reports', icon: FileText },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'students':
        return <AdminStudents />;
      case 'teachers':
        return <AdminTeachers />;
      case 'admissions':
        return <AdminAdmissions />;
      case 'fees':
        return <AdminFees />;
      case 'homework':
        return <AdminHomework />;
      case 'accounts':
        return <AdminAccounts />;
      case 'classes':
        return <AdminClasses />;
      case 'subjects':
        return <AdminSubjects />;
      case 'timetable':
        return <AdminTimetable />;
      case 'results':
        return <AdminResults />;
      case 'reports':
        return <AdminReports />;
      case 'settings':
        return <AdminSettings />;
      default:
        return (
          <>
            {/* Modern Metric Cards Grid with Subtle Gradients */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: Students */}
              <div className="relative bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/85 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 group overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-blue-50 rounded-full group-hover:scale-125 transition-transform duration-500 opacity-60 pointer-events-none"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Students</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">{totalStudentsCount.toLocaleString()}</h3>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mt-3">
                      <TrendingUp size={13} className="mr-1" /> Live MongoDB Data
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-2xl shadow-lg shadow-blue-500/30">
                    <Users size={24} />
                  </div>
                </div>
              </div>

              {/* Card 2: Teachers */}
              <div className="relative bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/85 hover:shadow-2xl hover:shadow-purple-500/5 transition-all duration-300 group overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-purple-50 rounded-full group-hover:scale-125 transition-transform duration-500 opacity-60 pointer-events-none"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Total Teachers</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">{totalTeachersCount}</h3>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-semibold mt-3">
                      <UserCheck size={13} className="mr-1" /> Added Faculty
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-tr from-purple-600 to-pink-600 text-white rounded-2xl shadow-lg shadow-purple-500/30">
                    <GraduationCap size={24} />
                  </div>
                </div>
              </div>

              {/* Card 3: Revenue */}
              <div className="relative bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/85 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 group overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-emerald-50 rounded-full group-hover:scale-125 transition-transform duration-500 opacity-60 pointer-events-none"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Monthly Revenue</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">{formatRevenue(monthlyRevenue)}</h3>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold mt-3">
                      <TrendingUp size={13} className="mr-1" /> Paid Fees Collection
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-tr from-emerald-600 to-teal-600 text-white rounded-2xl shadow-lg shadow-emerald-500/30">
                    <DollarSign size={24} />
                  </div>
                </div>
              </div>

              {/* Card 4: Classes */}
              <div className="relative bg-white p-6 rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/85 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-300 group overflow-hidden">
                <div className="absolute -right-6 -bottom-6 w-24 h-24 bg-amber-50 rounded-full group-hover:scale-125 transition-transform duration-500 opacity-60 pointer-events-none"></div>
                <div className="flex items-center justify-between relative z-10">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Classes</p>
                    <h3 className="text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">{activeClassesCount}</h3>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-amber-50 text-amber-600 text-xs font-semibold mt-3">
                      Created Sections
                    </div>
                  </div>
                  <div className="p-4 bg-gradient-to-tr from-amber-500 to-orange-500 text-white rounded-2xl shadow-lg shadow-amber-500/30">
                    <BookOpen size={24} />
                  </div>
                </div>
              </div>

            </div>

            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-100 border border-slate-100">
              <AdminAdmissions />
            </div>
          </>
        );
    }
  };

  return (
    <div className="flex h-screen bg-slate-50 font-sans overflow-hidden">
      {/* Sidebar with Dark Glass & Smooth Gradient Highlights */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-slate-950 text-slate-300 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static flex flex-col ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between h-24 px-6 bg-slate-950 border-b border-slate-800/60">
          <div className="flex items-center space-x-3">
            <span className="bg-gradient-to-tr from-blue-600 to-indigo-600 text-white p-2.5 rounded-2xl font-black text-xl shadow-lg shadow-blue-500/30">LPS</span>
            <div>
              <h2 className="font-bold text-white text-base tracking-wide">The Lareb</h2>
              <p className="text-xs text-blue-400 font-medium">Admin Control Panel</p>
            </div>
          </div>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-slate-400 hover:text-white">
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1.5 custom-scrollbar">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
                className={`flex items-center space-x-3.5 w-full px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 cursor-pointer group ${
                  isActive 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/25 scale-[1.02]' 
                    : 'text-slate-400 hover:bg-slate-900 hover:text-white'
                }`}
              >
                <Icon size={19} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        <div className="p-4 bg-slate-950 border-t border-slate-900">
          <button 
            onClick={() => window.location.href = "/admin-portal"} 
            className="flex items-center space-x-3 px-4 py-3 w-full rounded-2xl text-red-400 hover:bg-red-500/10 font-semibold text-sm transition-all duration-200 cursor-pointer"
          >
            <LogOut size={18} />
            <span>Logout System</span>
          </button>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <header className="h-24 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 z-10">
          <div className="flex items-center space-x-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-slate-600 hover:text-slate-900 p-2 rounded-xl bg-slate-100">
              <Menu size={22} />
            </button>
            <div>
              <h1 className="text-xl font-black text-slate-900 capitalize tracking-tight">{activeTab.replace('-', ' ')} Management</h1>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">Welcome back, Admin Panel Dashboard</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="relative p-3 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-2xl transition-colors cursor-pointer border border-slate-100">
              <Bell size={19} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            <div className="flex items-center space-x-3.5 border-l pl-4 border-slate-200">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-sm shadow-lg shadow-blue-500/20">
                AD
              </div>
              <div className="hidden md:block text-left">
                <p className="text-sm font-bold text-slate-900">System Admin</p>
                <p className="text-xs text-emerald-600 font-semibold flex items-center mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span> Online
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-6 lg:p-10 space-y-8 bg-slate-50/50">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
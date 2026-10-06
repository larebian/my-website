import React, { useState, useEffect } from 'react';
import { DollarSign, Printer, Search, Filter } from 'lucide-react';
import { studentsDatabase } from '../../data/studentsData';

export default function AdminFees() {
  const [feesList, setFeesList] = useState([]);
  const [selectedClass, setSelectedClass] = useState('All');
  const [selectedMonth, setSelectedMonth] = useState('July 2026');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const savedFees = JSON.parse(localStorage.getItem("schoolFees")) || [];
    setFeesList(savedFees);
  }, []);

  // Bulk Print Receipts (Side-by-Side Dual Copy Layout per student, stacked vertically)
  const handlePrintBulkSlips = () => {
    const classStudents = studentsDatabase.filter(s => 
      selectedClass === 'All' || s.className === selectedClass
    );

    if (classStudents.length === 0) {
      alert("No students found in this class!");
      return;
    }

    const printWindow = window.open('', '_blank');
    printWindow.document.write(`
      <html>
        <head>
          <title>Fee Vouchers - Class ${selectedClass}</title>
          <style>
            @page { size: A4 portrait; margin: 8mm; }
            body { font-family: Arial, sans-serif; margin: 0; padding: 0; color: #000; background: #fff; }
            .page-container { display: flex; flex-direction: column; gap: 12px; }
            
            /* Aik student ki row jisme dono copies aamne-samne hongi */
            .student-row {
              display: flex;
              gap: 10px;
              width: 100%;
              page-break-inside: avoid;
              break-inside: avoid;
              margin-bottom: 8px;
            }

            /* Aik copy ka box (50% width each) */
            .slip {
              flex: 1;
              border: 1.2px dashed #333;
              padding: 8px 10px;
              border-radius: 6px;
              background: #fff;
              box-sizing: border-box;
            }

            .header { text-align: center; border-bottom: 1px solid #333; padding-bottom: 3px; margin-bottom: 5px; }
            .header h2 { margin: 0; font-size: 12px; font-weight: bold; }
            .header p { margin: 1px 0; font-size: 7px; }
            
            .grid-info { display: grid; grid-template-columns: 1fr 1fr; font-size: 8.5px; gap: 2px 4px; margin-bottom: 5px; }
            
            .table-fees { width: 100%; border-collapse: collapse; font-size: 8.5px; margin-bottom: 5px; }
            .table-fees th, .table-fees td { border: 1px solid #333; padding: 2px 4px; text-align: left; }
            
            .signatures { display: flex; justify-content: space-between; margin-top: 10px; font-size: 8.5px; font-weight: bold; }
            .copy-tag { font-size: 7.5px; font-weight: bold; text-align: right; text-transform: uppercase; color: #444; margin-bottom: 2px; }
          </style>
        </head>
        <body>
          <div class="page-container">
            ${classStudents.map(student => `
              <div class="student-row">
                
                <!-- Left Side: School Office Copy -->
                <div class="slip">
                  <div class="copy-tag">--- SCHOOL OFFICE COPY ---</div>
                  <div class="header">
                    <h2>THE LAREB PUBLIC SCHOOL</h2>
                    <p>Main Bazaar, School Road | Contact: 0300-1234567</p>
                    <p><strong>FEE VOUCHER - ${selectedMonth}</strong></p>
                  </div>
                  <div class="grid-info">
                    <div><strong>GR No:</strong> ${student.grNo || 'N/A'}</div>
                    <div><strong>Roll No:</strong> ${student.rollNo}</div>
                    <div><strong>Name:</strong> ${student.name}</div>
                    <div><strong>Father:</strong> ${student.fatherName || 'N/A'}</div>
                    <div><strong>Caste:</strong> ${student.caste || 'N/A'}</div>
                    <div><strong>Class:</strong> ${student.className} (${student.section || 'A'})</div>
                    <div>Issue: ${new Date().toLocaleDateString()}</div>
                    <div>Due: 10-${selectedMonth}</div>
                  </div>
                  <table class="table-fees">
                    <tr><th>Fee Particulars</th><th>Amount (Rs)</th></tr>
                    <tr><td>Monthly Tuition Fee</td><td>3,000</td></tr>
                    <tr><td>Annual / Admission Fee</td><td>0</td></tr>
                    <tr><td>Exam Fee</td><td>500</td></tr>
                    <tr><td>Other Charges</td><td>0</td></tr>
                    <tr><strong>Total Payable</strong><td><strong>3,500</strong></td></tr>
                  </table>
                  <div class="signatures">
                    <span>Clerk: _______</span>
                    <span>Principal: _______</span>
                  </div>
                </div>

                <!-- Right Side: Student Copy -->
                <div class="slip" style="border-style: solid;">
                  <div class="copy-tag">--- STUDENT COPY ---</div>
                  <div class="header">
                    <h2>THE LAREB PUBLIC SCHOOL</h2>
                    <p>Main Bazaar, School Road | Contact: 0300-1234567</p>
                    <p><strong>FEE VOUCHER - ${selectedMonth}</strong></p>
                  </div>
                  <div class="grid-info">
                    <div><strong>GR No:</strong> ${student.grNo || 'N/A'}</div>
                    <div><strong>Roll No:</strong> ${student.rollNo}</div>
                    <div><strong>Name:</strong> ${student.name}</div>
                    <div><strong>Father:</strong> ${student.fatherName || 'N/A'}</div>
                    <div><strong>Caste:</strong> ${student.caste || 'N/A'}</div>
                    <div><strong>Class:</strong> ${student.className} (${student.section || 'A'})</div>
                    <div>Issue: ${new Date().toLocaleDateString()}</div>
                    <div>Due: 10-${selectedMonth}</div>
                  </div>
                  <table class="table-fees">
                    <tr><th>Fee Particulars</th><th>Amount (Rs)</th></tr>
                    <tr><td>Monthly Tuition Fee</td><td>3,000</td></tr>
                    <tr><td>Annual / Admission Fee</td><td>0</td></tr>
                    <tr><td>Exam Fee</td><td>500</td></tr>
                    <tr><td>Other Charges</td><td>0</td></tr>
                    <tr><strong>Total Payable</strong><td><strong>3,500</strong></td></tr>
                  </table>
                  <div class="signatures">
                    <span>Clerk: _______</span>
                    <span>Principal: _______</span>
                  </div>
                </div>

              </div>
            `).join('')}
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const filteredStudents = studentsDatabase.filter(s => 
    (selectedClass === 'All' || s.className === selectedClass) &&
    (s.name.toLowerCase().includes(searchTerm.toLowerCase()) || s.rollNo.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-6 shadow-xs">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-100 pb-5">
        <div>
          <h3 className="font-bold text-lg text-slate-800">Admin Class-Wise Fee Management</h3>
          <p className="text-xs text-slate-500">Filter students class-wise, manage records, and print dual-copy class fee slips.</p>
        </div>
        <button 
          onClick={handlePrintBulkSlips}
          className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors cursor-pointer"
        >
          <Printer size={16} /> Print Dual-Copy Fee Slips
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <Filter size={16} className="text-slate-400" />
          <select 
            value={selectedClass} 
            onChange={(e) => setSelectedClass(e.target.value)}
            className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
          >
            <option value="All">All Classes</option>
            <option value="Class 1">Class 1</option>
            <option value="Class 2">Class 2</option>
            <option value="Class 3">Class 3</option>
            <option value="Class 4">Class 4</option>
            <option value="Class 5">Class 5</option>
            <option value="Class 6">Class 6</option>
            <option value="Class 7">Class 7</option>
            <option value="Class 8">Class 8</option>
            <option value="Class 9">Class 9</option>
            <option value="Class 10">Class 10</option>
          </select>
        </div>

        <div>
          <select 
            value={selectedMonth} 
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold outline-none"
          >
            <option value="July 2026">July 2026</option>
            <option value="August 2026">August 2026</option>
            <option value="September 2026">September 2026</option>
          </select>
        </div>

        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-3 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search student by name or roll no..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs outline-none font-medium"
          />
        </div>
      </div>

      {/* Class Student Records Table */}
      <div className="overflow-x-auto rounded-xl border border-slate-100">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="bg-slate-50 text-slate-600 border-b border-slate-100">
              <th className="p-3.5 font-bold">GR No</th>
              <th className="p-3.5 font-bold">Roll No</th>
              <th className="p-3.5 font-bold">Student Name</th>
              <th className="p-3.5 font-bold">Father's Name</th>
              <th className="p-3.5 font-bold">Caste</th>
              <th className="p-3.5 font-bold">Class</th>
              <th className="p-3.5 font-bold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student, idx) => (
                <tr key={idx} className="hover:bg-slate-50/50">
                  <td className="p-3.5 font-bold text-slate-600">{student.grNo || 'GR-00' + idx}</td>
                  <td className="p-3.5 font-semibold text-slate-500">{student.rollNo}</td>
                  <td className="p-3.5 font-bold text-slate-800">{student.name}</td>
                  <td className="p-3.5 text-slate-600">{student.fatherName || 'N/A'}</td>
                  <td className="p-3.5 text-slate-600">{student.caste || 'N/A'}</td>
                  <td className="p-3.5 font-medium text-slate-600">{student.className}</td>
                  <td className="p-3.5 text-right">
                    <span className="px-2.5 py-1 bg-amber-50 text-amber-700 font-bold rounded-md text-[10px]">
                      Pending / Unpaid
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="p-8 text-center text-slate-400">
                  No students found in this class category.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
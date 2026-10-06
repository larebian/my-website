import React, { createContext, useState, useEffect } from 'react';

export const SchoolContext = createContext();

export const SchoolProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [fees, setFees] = useState([]);
  const [homeworkList, setHomeworkList] = useState([]);
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [
      { id: 1, name: 'Ali Khan', rollNo: 'CSC-01', classGrade: '10th Computer' },
      { id: 2, name: 'Ayesha Ahmed', rollNo: 'CSC-02', classGrade: '10th Computer' }
    ];
    const savedFees = JSON.parse(localStorage.getItem("schoolFees")) || [];
    const savedHomework = JSON.parse(localStorage.getItem("schoolHomework")) || [
      { id: 1, subject: 'Physics', title: 'Solve Numerical Problems on Laws of Motion', date: '26 July 2026' }
    ];
    const savedNotices = JSON.parse(localStorage.getItem("schoolNotices")) || [
      { id: 1, title: 'Mid-Term Exams', description: 'Exams will start from next Monday.', date: '25 July 2026' }
    ];

    setStudents(savedStudents);
    setFees(savedFees);
    setHomeworkList(savedHomework);
    setNotices(savedNotices);
  }, []);

  const addStudent = (student) => {
    const updated = [student, ...students];
    setStudents(updated);
    localStorage.setItem("students", JSON.stringify(updated));
  };

  const addFee = (fee) => {
    const updated = [fee, ...fees];
    setFees(updated);
    localStorage.setItem("schoolFees", JSON.stringify(updated));
  };

  const addHomework = (homework) => {
    const updated = [homework, ...homeworkList];
    setHomeworkList(updated);
    localStorage.setItem("schoolHomework", JSON.stringify(updated));
  };

  const addNotice = (notice) => {
    const updated = [notice, ...notices];
    setNotices(updated);
    localStorage.setItem("schoolNotices", JSON.stringify(updated));
  };

  return (
    <SchoolContext.Provider value={{ students, fees, homeworkList, notices, addStudent, addFee, addHomework, addNotice }}>
      {children}
    </SchoolContext.Provider>
  );
};
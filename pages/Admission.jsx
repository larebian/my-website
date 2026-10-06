import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaPhone,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCalendarAlt,
  FaIdCard,
  FaIdBadge,
  FaBriefcase,
  FaCamera,
  FaCheckCircle,
} from "react-icons/fa";

function Admission() {
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    grNo: "",
    serialNo: "",
    studentName: "",
    fatherName: "",
    caste: "",
    grade: "",
    section: "",
    dob: "",
    admissionDate: todayStr,
    gender: "",
    religion: "",
    lastSchool: "",
    fatherOccupation: "",
    cnic: "",
    mobileNo: "",
    whatsappNo: "",
    address: "",
    photo: "", // Image string (Base64) yahan store hogi
  });

  const [calculatedAge, setCalculatedAge] = useState({ years: 0, months: 0, days: 0 });
  const [submitted, setSubmitted] = useState(false);

  const calculateAge = (dobString, admDateString) => {
    if (!dobString || !admDateString) {
      setCalculatedAge({ years: 0, months: 0, days: 0 });
      return;
    }
    const birthDate = new Date(dobString);
    const admissionDate = new Date(admDateString);

    if (birthDate > admissionDate) {
      setCalculatedAge({ years: 0, months: 0, days: 0 });
      return;
    }

    let years = admissionDate.getFullYear() - birthDate.getFullYear();
    let months = admissionDate.getMonth() - birthDate.getMonth();
    let days = admissionDate.getDate() - birthDate.getDate();

    if (days < 0) {
      months--;
      const prevMonthLastDay = new Date(admissionDate.getFullYear(), admissionDate.getMonth(), 0).getDate();
      days += prevMonthLastDay;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setCalculatedAge({ years, months, days });
  };

  useEffect(() => {
    if (formData.dob && formData.admissionDate) {
      calculateAge(formData.dob, formData.admissionDate);
    }
  }, [formData.dob, formData.admissionDate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      const file = files[0];
      if (file) {
        // Image ko Base64 string mein convert karna taake localStorage mein save ho sakay
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData((prev) => ({ ...prev, photo: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else if (name === "cnic") {
      const raw = value.replace(/\D/g, "").slice(0, 13);
      let formatted = raw;
      if (raw.length > 5 && raw.length <= 12) {
        formatted = `${raw.slice(0, 5)}-${raw.slice(5)}`;
      } else if (raw.length > 12) {
        formatted = `${raw.slice(0, 5)}-${raw.slice(5, 12)}-${raw.slice(12)}`;
      }
      setFormData((prev) => ({ ...prev, cnic: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAdmission = {
      id: Date.now(),
      ...formData,
      age: `${calculatedAge.years} Yrs, ${calculatedAge.months} Mos`,
      status: "Pending", // Admin approval ke liye
      submittedAt: new Date().toLocaleDateString(),
    };

    // 1. Admin Portal ke liye list mein save karna
    const existingAdmissions = JSON.parse(localStorage.getItem("schoolAdmissions")) || [];
    const updatedAdmissions = [newAdmission, ...existingAdmissions];
    localStorage.setItem("schoolAdmissions", JSON.stringify(updatedAdmissions));

    // 2. Student Login / Profile ke liye direct current student data save karna
    localStorage.setItem("currentStudent", JSON.stringify(newAdmission));

    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden">
        
        <div className="bg-blue-900 text-white p-6 sm:p-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wide">
            Online Admission Form
          </h1>
          <p className="text-blue-200 text-xs sm:text-sm mt-2">
            The Lareb Public School - Academic Session
          </p>
        </div>

        <div className="p-6 sm:p-10">
          {submitted ? (
            <div className="text-center py-12">
              <FaCheckCircle className="text-green-500 mx-auto mb-4" size={56} />
              <h2 className="text-2xl font-bold text-gray-800">Application Submitted Successfully!</h2>
              <p className="text-gray-600 mt-2 text-sm max-w-md mx-auto">
                Thank you! Application for <strong className="text-gray-900">{formData.studentName}</strong> has been sent. Your profile photo will appear on your login account once approved.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    grNo: "", serialNo: "", studentName: "", fatherName: "", caste: "",
                    grade: "", section: "", dob: "", admissionDate: todayStr, gender: "",
                    religion: "", lastSchool: "", fatherOccupation: "", cnic: "",
                    mobileNo: "", whatsappNo: "", address: "", photo: "",
                  });
                }}
                className="mt-6 bg-blue-900 text-white px-6 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-800 transition"
              >
                Submit Another Application
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Photo Upload Section */}
              <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-300 text-center">
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">
                  Student Passport Size Photo (For Login Profile) *
                </label>
                <div className="flex flex-col items-center justify-center gap-2">
                  {formData.photo && (
                    <img
                      src={formData.photo}
                      alt="Preview"
                      className="w-16 h-16 rounded-full object-cover border-2 border-blue-900 shadow-md mb-2"
                    />
                  )}
                  <label className="cursor-pointer bg-white px-4 py-2 rounded-xl border border-gray-300 shadow-sm text-sm font-semibold text-blue-900 hover:bg-blue-50 transition flex items-center gap-2">
                    <FaCamera className="text-blue-700" />
                    <span>{formData.photo ? "Change Photo" : "Choose Image File"}</span>
                    <input
                      type="file"
                      name="photo"
                      accept="image/*"
                      required
                      onChange={handleChange}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-gray-50 p-4 rounded-2xl border border-gray-200">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">G.R Number</label>
                  <input
                    type="text"
                    name="grNo"
                    value={formData.grNo}
                    onChange={handleChange}
                    placeholder="e.g. GR-1024"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Serial Number</label>
                  <input
                    type="text"
                    name="serialNo"
                    value={formData.serialNo}
                    onChange={handleChange}
                    placeholder="e.g. 0045"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Student Full Name *</label>
                  <input
                    type="text"
                    name="studentName"
                    required
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Father Name *</label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="e.g. Ahmed Khan"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Caste / Surname *</label>
                  <input
                    type="text"
                    name="caste"
                    required
                    value={formData.caste}
                    onChange={handleChange}
                    placeholder="e.g. Rajput"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select Class *</label>
                  <select
                    name="grade"
                    required
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm bg-white"
                  >
                    <option value="" disabled hidden>Select Class</option>
                    {["Nursery", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Ninth", "Matric"].map((cls) => (
                      <option key={cls} value={cls}>{cls}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Select Section *</label>
                  <select
                    name="section"
                    required
                    value={formData.section}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm bg-white"
                  >
                    <option value="" disabled hidden>Select Section</option>
                    {["T", "L", "P", "S", "M", "K"].map((sec) => (
                      <option key={sec} value={sec}>Section {sec}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Date of Birth *</label>
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Date of Admission *</label>
                  <input
                    type="date"
                    name="admissionDate"
                    required
                    value={formData.admissionDate}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Age at Admission</label>
                  <div className="bg-blue-50 p-2.5 rounded-xl border border-blue-200 text-blue-900 text-xs sm:text-sm font-semibold text-center">
                    {formData.dob ? `${calculatedAge.years} Yrs, ${calculatedAge.months} Mos` : "Select DOB"}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Gender *</label>
                  <select
                    name="gender"
                    required
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm bg-white"
                  >
                    <option value="" disabled hidden>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Religion *</label>
                  <select
                    name="religion"
                    required
                    value={formData.religion}
                    onChange={handleChange}
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm bg-white"
                  >
                    <option value="" disabled hidden>Select Religion</option>
                    <option value="Islam">Islam</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Hinduism">Hinduism</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Father / Guardian Occupation *</label>
                  <input
                    type="text"
                    name="fatherOccupation"
                    required
                    value={formData.fatherOccupation}
                    onChange={handleChange}
                    placeholder="Occupation"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">CNIC / B-Form *</label>
                  <input
                    type="text"
                    name="cnic"
                    required
                    value={formData.cnic}
                    onChange={handleChange}
                    placeholder="42101-XXXXXXX-X"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    name="mobileNo"
                    required
                    value={formData.mobileNo}
                    onChange={handleChange}
                    placeholder="03001234567"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="whatsappNo"
                    required
                    value={formData.whatsappNo}
                    onChange={handleChange}
                    placeholder="03001234567"
                    className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Residential Address *</label>
                <textarea
                  name="address"
                  rows="3"
                  required
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Complete address"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-xl text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-900 text-white font-bold py-3.5 rounded-xl shadow-lg hover:bg-blue-800 transition flex items-center justify-center gap-2 text-base cursor-pointer"
              >
                <FaPaperPlane />
                <span>Submit Admission Form</span>
              </button>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Admission;
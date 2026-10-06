const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
  grNo: { type: String },
  serialNo: { type: String },
  name: { type: String, required: true },
  fatherName: { type: String, required: true },
  caste: { type: String, required: true },
  classGrade: { type: String, required: true },
  section: { type: String, required: true },
  dob: { type: String },
  dateOfAdmission: { type: String },
  age: { type: String },
  gender: { type: String, required: true },
  religion: { type: String, required: true },
  occupation: { type: String },
  cnic: { type: String },
  phone: { type: String, required: true },
  whatsapp: { type: String },
  address: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admission', admissionSchema);
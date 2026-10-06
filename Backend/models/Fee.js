const mongoose = require('mongoose');

const feeSchema = new mongoose.Schema({
  grNo: { type: String, required: true },
  rollNo: { type: String, required: true },
  studentName: { type: String, required: true },
  fatherName: { type: String },
  caste: { type: String },
  classGrade: { type: String, required: true },
  amount: { type: Number, default: 0 },
  month: { type: String, required: true },
  status: { type: String, enum: ['Paid', 'Pending / Unpaid'], default: 'Pending / Unpaid' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Fee', feeSchema);
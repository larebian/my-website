const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  rollNo: { type: String, unique: true, sparse: true },
  name: { type: String, required: true },
  fatherName: { type: String },
  classGrade: { type: String, required: true },
  section: { type: String, default: 'A' },
  admissionYear: { type: Number, default: () => new Date().getFullYear() },
  email: { type: String },
  phone: { type: String },
  password: { type: String },
  portalPassword: { type: String },
  createdAt: { type: Date, default: Date.now }
}, { strict: false });

studentSchema.pre('save', async function(next) {
  if (!this.password && this.portalPassword) {
    this.password = this.portalPassword;
  } else if (!this.portalPassword && this.password) {
    this.portalPassword = this.password;
  }

  if (!this.rollNo) {
    const count = await mongoose.model('Student').countDocuments();
    const year = this.admissionYear || new Date().getFullYear();
    this.rollNo = `LPS-${year}-${String(count + 1).padStart(3, '0')}`;
  }
  next();
});

module.exports = mongoose.model('Student', studentSchema);
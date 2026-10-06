const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  className: { type: String, required: true },
  section: { type: String, required: true },
  classTeacher: { type: String },
  roomNo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Class', classSchema);
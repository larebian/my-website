const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Student = require('./models/Student');
const Teacher = require('./models/Teacher');
const Fee = require('./models/Fee');
const Admission = require('./models/Admission');
const Class = require('./models/Class');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/lareb_school_db')
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.log('MongoDB Connection Error:', err));

// --- STUDENTS APIS ---
app.get('/api/students', async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/students', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    await newStudent.save();
    res.status(201).json({ message: 'Student saved to MongoDB successfully!', student: newStudent });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/students/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- TEACHERS APIS ---
app.get('/api/teachers', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.json(teachers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/teachers', async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    await newTeacher.save();
    res.status(201).json({ message: 'Teacher added successfully!', teacher: newTeacher });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/teachers/:id', async (req, res) => {
  try {
    await Teacher.findByIdAndDelete(req.params.id);
    res.json({ message: 'Teacher deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- FEES APIS ---
app.get('/api/fees', async (req, res) => {
  try {
    const fees = await Fee.find();
    res.json(fees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/fees', async (req, res) => {
  try {
    const newFee = new Fee(req.body);
    await newFee.save();
    res.status(201).json({ message: 'Fee record saved successfully!', fee: newFee });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// --- CLASSES APIS ---
app.get('/api/classes', async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/classes', async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json({ message: 'Class created successfully!', classData: newClass });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/api/classes/:id', async (req, res) => {
  try {
    await Class.findByIdAndDelete(req.params.id);
    res.json({ message: 'Class deleted successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- ADMISSIONS APIS ---
app.get('/api/admissions', async (req, res) => {
  try {
    const admissions = await Admission.find();
    res.json(admissions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/admissions', async (req, res) => {
  try {
    const newAdmission = new Admission(req.body);
    await newAdmission.save();
    res.status(201).json({ message: 'Admission form submitted successfully!', admission: newAdmission });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.put('/api/admissions/:id', async (req, res) => {
  try {
    const updatedAdmission = await Admission.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    res.json({ message: 'Admission status updated!', admission: updatedAdmission });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete('/api/admissions/:id', async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.json({ message: 'Admission application deleted!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// --- DASHBOARD STATS API ---
app.get('/api/dashboard/stats', async (req, res) => {
  try {
    const totalStudents = await Student.countDocuments();
    const totalTeachers = await Teacher.countDocuments();
    
    const paidFees = await Fee.aggregate([
      { $match: { status: 'Paid' } },
      { $group: { _id: null, totalRevenue: { $sum: '$amount' } } }
    ]);
    const monthlyRevenue = paidFees.length > 0 ? paidFees[0].totalRevenue : 0;

    res.json({
      totalStudents,
      totalTeachers,
      monthlyRevenue
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
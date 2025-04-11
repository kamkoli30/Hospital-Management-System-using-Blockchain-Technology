const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public')); // Serve HTML from 'public' folder

// In-memory storage
const doctors = [];
const patients = [];
const schedules = [];

// Register doctor or patient
app.post('/register', (req, res) => {
  const { type, name, age, specialty, disease, prescription, medication } = req.body;

  if (!name || !age) return res.status(400).json({ message: 'Name and age are required' });

  if (type === 'doctor') {
    if (!specialty) return res.status(400).json({ message: 'Specialty is required' });
    doctors.push({ name, age, specialty });
    return res.json({ message: `Doctor ${name} registered.` });
  } else {
    if (!disease || !prescription || !medication) {
      return res.status(400).json({ message: 'All patient fields are required' });
    }
    patients.push({ name, age, disease, prescription, medication });
    return res.json({ message: `Patient ${name} registered.` });
  }
});

// Schedule appointment
app.post('/schedule', (req, res) => {
  const { doctor, patient, datetime, reason } = req.body;
  if (!doctor || !patient || !datetime || !reason) {
    return res.status(400).json({ message: 'All fields are required for scheduling.' });
  }

  schedules.push({ doctor, patient, datetime, reason });
  return res.json({ message: `Appointment scheduled between ${doctor} and ${patient}.` });
});

// Send all data
app.get('/records', (req, res) => {
  res.json({ doctors, patients, schedules });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});

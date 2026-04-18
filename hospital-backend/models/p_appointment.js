const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientName: String,
  problem: String,
  preferredDoctor: String,
  date: String,
  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);
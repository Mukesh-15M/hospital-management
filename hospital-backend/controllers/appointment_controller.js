const Appointment = require("../models/p_appointment");

// Patient creates appointment
exports.createAppointment = async (req, res) => {
  const newData = new Appointment(req.body);
  await newData.save();
  res.json(newData);
};

// Admin view ALL
exports.getAllAppointments = async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
};

// Doctor & Patient view ONLY approved
exports.getApprovedAppointments = async (req, res) => {
  const data = await Appointment.find({ status: "Approved" });
  res.json(data);
};

// Admin updates status
exports.updateAppointment = async (req, res) => {
  const updated = await Appointment.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};
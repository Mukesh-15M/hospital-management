const express = require("express");
const router = express.Router();

const {
  createAppointment,
  getAllAppointments,
  getApprovedAppointments,
  updateAppointment
} = require("../controllers/appointment_controller");

router.post("/", createAppointment);
router.get("/", getAllAppointments); // Admin
router.get("/approved", getApprovedAppointments); // Doctor/Patient
router.put("/:id", updateAppointment);

module.exports = router;
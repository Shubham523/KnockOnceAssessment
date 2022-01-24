const express = require("express");
const { createAppointment } = require("../controllers/appointments");
const router = express.Router();


router.post("/Add/Appointment",createAppointment)

module.exports = router;
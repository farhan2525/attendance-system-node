const { model, Schema } = require("mongoose");

const adminAttendance = new Schema({
  timeLimit: Number,
  status: String,
  createAt: Date,
});
const AdminAttendance = model("AdminAttendance", adminAttendance);
module.exports = AdminAttendance;

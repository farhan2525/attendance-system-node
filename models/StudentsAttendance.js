const { model, Schema } = require("mongoose");

const studentAttendace = new Schema({
  createAt: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  adminAttendece: {
    type: Schema.Types.ObjectId,
    ref: "AdminAttendance",
  },
});
const StudentAttendance = model("StudentAttendance", studentAttendace);
module.exports = StudentAttendance;

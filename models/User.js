// Name - Email - Password - Roles - AccountStatus
const { mongoose, model, Schema } = require("mongoose");
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: (prop) => `Invalid email: ${prop.v}`,
    },
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password is too short"],
  },
  roles: {
    type: [String],
    required: true,
    default: ["STUDENT"],
  },
  accountStatus: {
    type: String,
    enum: ["PENDING", "ACTIVE", "REJCTED"],
    default: "PENDING",
    required: true,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;

// FirstName - LastName - Phone - ProfilePicture - user
const mongoose = require("mongoose");

const { model, Schema } = require("mongoose");
const profileSchema = new Schema({
  firstName: String,
  lastName: String,
  phoneNo: String,
  avatar: String,
  user: { typr: Schema.Types.ObjectId, ref: "User" },
});
const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;

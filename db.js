const mongoose = require("mongoose");

function connetDB(connectionStr) {
  return mongoose.connect(connectionStr);
}
module.exports = connetDB;

const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  myID: Number,
  userID: String,
  character: Object,
  qq: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

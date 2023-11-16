const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  myID: Number,
  userID: String,
  QQ: Number,
  character: Object,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

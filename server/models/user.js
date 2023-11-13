const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  userID: String,
  character: Object,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

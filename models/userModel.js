const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: [true, "A user must have a username"] },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

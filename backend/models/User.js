const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  shoppinglist: {
    type: Array,
    required: false,
  },
  email: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
  // Add more fields for information on the user.
});

// export model user with UserSchema
module.exports = mongoose.model("user", UserSchema);

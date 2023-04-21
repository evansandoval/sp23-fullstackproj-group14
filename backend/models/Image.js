const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  filename: {
    type: String
  }, 
  data: { // bit data for an image
    type: String
  }  
  // Add more fields for information on the user.
});

// export model user with UserSchema
module.exports = mongoose.model("image", ImageSchema);
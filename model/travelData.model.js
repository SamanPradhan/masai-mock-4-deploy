const mongoose = require("mongoose");

const travelSchema = mongoose.Schema({
  name: String,
  email: String,
  destination: String,
  noOfTraveller: Number,
  budgerPerPerson: Number,
});

const travelModel = mongoose.model("Travel", travelSchema);

module.exports = { travelModel };

// - Name
// - Email Address
// - Destination
//     - This is a dropdown with the following values: India, Africa, Europe, America as options
// - No. of travelers
// - Budget Per Person

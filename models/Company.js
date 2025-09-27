const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // recruiter
  name: { type: String, required: true },        // company name
  industry: { type: String },                    // IT, Healthcare, Finance, etc.
  website: { type: String },                     // company website
  email: { type: String },                       // official contact email
  phone: { type: String },                       // company phone
  address: { type: String },                     // full address
  location: { type: String },                    // city, country
  foundedYear: { type: Number },                 // year company started
  description: { type: String },                 // about the company
  logo: { type: String },                        // company logo (image URL)
}, { timestamps: true });


module.exports = mongoose.model("Company", companySchema);

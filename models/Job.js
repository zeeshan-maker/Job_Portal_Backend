const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: { type: mongoose.Schema.Types.ObjectId, ref: "Company", required: true },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category",required: true },
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  description:{ type: String, required: true },
  requirements: [String],
  employmentType: { 
    type: String, 
    enum: ["Full-time", "Part-time", "Contract", "Internship","Remote"], 
    default: "Full-time" 
  },
  location: String,
  salaryRange: {
    min: {type: Number},
    max: {type: Number},
    currency: { type: String, default: "INR" },
  },
   education: { type: String },        
  openings: { type: Number, default: 1 }, 
  status: { type: String, enum: ["active", "closed"], default: "active" }
}, { timestamps: true });

module.exports = mongoose.model("Job", jobSchema);


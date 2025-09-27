import mongoose from "mongoose";

const jobSeekerProfileSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  resume: { type: String },
  skills: [String],
  experience: [
    {
      company: String,
      position: String,
      startDate: Date,
      endDate: Date
    }
  ],
  education: [
    {
      degree: String,
      university: String,
      year: Number
    }
  ],
  location: String,
  expectedSalary: Number
}, { timestamps: true });

export default mongoose.model("JobSeekerProfile", jobSeekerProfileSchema);

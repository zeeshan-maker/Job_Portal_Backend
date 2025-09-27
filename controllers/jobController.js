const Job = require("../models/Job");
exports.createJob = async (req, res) => {
  const {company,category,title,description,requirements,employmentType,location,salaryRange,education,openings}= req.body;
  const postedBy= req?.user.user_id;
  try {
    const job = await Job.create({company,category,postedBy,title,description,requirements,employmentType,location,salaryRange,education,openings})
    res.status(201).json({status:201, message: "Job created successfully",job});
  } catch (err) {
    res.status(500).json({status:500, error: err.message });
  }
};

exports.getAllJob = async (req, res)=>{
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs)
  } catch (error) {
    res.status(500).json({status:200, error:error.message})
  }
}

exports.deleteJob = async (req, res)=>{
  const { job_id } = req.params;
  try {
    await Job.findByIdAndDelete(job_id)
    res.status(200).json({status:200, message:"Job Deleted successfully."})
  } catch (error) {
      res.status(500).json({status:200, error:error.message})
  }
}

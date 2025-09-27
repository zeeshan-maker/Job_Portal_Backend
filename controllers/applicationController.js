const Application = require("../models/Applications");

exports.applyJob = async (req, res) => {
  const {job,resume,coverLetter}= req.body;
  const applicant = req.user.user_id;

  try {
    const existing = await Application.findOne({job,applicant})
     if (existing) {
      return res.status(400)
      .json({ status:400, message:"You have already applied for this job" });
    }
    const application = new Application({job,applicant,resume,coverLetter});
    await application.save();
    res.status(201).json({status:201, message: "Application submitted successfully",});
  } catch (err) {
    res.status(500).json({status:500, error: err.message });
  }
};

exports.getApplications = async (req, res) => {
  try {
    const applications = await Application.find()
    .populate("job", "title location employmentType")
      .populate("applicant", "name email");
    res.status(200).json(applications);
  } catch (err) {
    res.status(500).json({status:500, error: err.message });
  }
};

exports.getApplicationById = async (req, res) => {
  try {
    const application = await Application.findById(req.params.id)
      .populate("job", "title company")
      .populate("applicant", "name email");
    if (!application) return res.status(404).json({ error: "Application not found" });
    res.json(application);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateApplicationStatus = async (req, res) => {
  try {
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status },
      { new: true }
    );
    if (!application) return res.status(404).json({ error: "Application not found" });
    res.json({ message: "Application status updated", application });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteApplication = async (req, res) => {
  try {
    const application = await Application.findByIdAndDelete(req.params.id);
    if (!application) return res.status(404).json({ error: "Application not found" });
    res.json({ message: "Application deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const express = require("express");
const { createJob, getAllJob, deleteJob } = require("../controllers/jobController");
const {verifyToken,isRecruiter} = require("../middleware/authMiddleware")

const router = express.Router();

router.post("/",verifyToken, isRecruiter, createJob);  
router.get("/",verifyToken, getAllJob);  
router.delete("/:job_id",verifyToken, deleteJob);  


module.exports = router;

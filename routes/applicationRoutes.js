const express = require("express");
const { 
  applyJob, 
  getApplications, 
  getApplicationById, 
  updateApplicationStatus, 
  deleteApplication 
} = require("../controllers/applicationController");
const {verifyToken} = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/",verifyToken, applyJob);                   
router.get("/",verifyToken, getApplications);           
router.get("/:application_id",verifyToken, getApplicationById);     
router.put("/:application_id",verifyToken, updateApplicationStatus); 
router.delete("/:application_id",verifyToken, deleteApplication);     

module.exports = router;

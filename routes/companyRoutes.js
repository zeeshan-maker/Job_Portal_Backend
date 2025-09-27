const express = require("express");
const { createCompany} = require("../controllers/companyController");
const {verifyToken, isRecruiter} = require("../middleware/authMiddleware")
const router = express.Router();

router.post("/",verifyToken, isRecruiter, createCompany);

module.exports = router;

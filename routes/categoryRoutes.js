const express = require("express");
const { 
  createCategory, 
  getCategories, 
  getCategoryById, 
  updateCategory, 
  deleteCategory 
} = require("../controllers/categoryController");
const {verifyToken, isAdmin}= require("../middleware/authMiddleware")
const router = express.Router();

router.post("/",verifyToken, isAdmin, createCategory);
router.get("/",verifyToken, getCategories);   
router.get("/:id",verifyToken, getCategoryById);
router.put("/:id",verifyToken, isAdmin, updateCategory); 
router.delete("/:id",verifyToken, isAdmin, deleteCategory);

module.exports = router;

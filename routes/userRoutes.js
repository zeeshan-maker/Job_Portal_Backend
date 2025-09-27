const express = require("express");
const {getAllUser, deleteUserById} = require("../controllers/userController");
const {verifyToken, isAdmin} = require("../middleware/authMiddleware")
const router = express.Router();

router.get("/",verifyToken,isAdmin, getAllUser)
router.delete("/:user_id",verifyToken,isAdmin, deleteUserById)

module.exports = router;
const User = require("../models/User");

exports.getAllUser = async (req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json({status:500,error: error.message})
    }
}


exports.deleteUserById = async (req, res)=>{
    const {user_id}= req.params;
    try {
    const user = await User.findByIdAndDelete(user_id)
    if(!user){
        return res.status(404).json({status:404,message:"User not found."})
    }
    res.status(200).json({status:200, message:"User deleted successfully" });
        
    } catch (error) {
        res.status(500).json({status:500, error: error.message });
    }
}
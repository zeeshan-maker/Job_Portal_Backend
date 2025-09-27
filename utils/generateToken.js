const jwt = require("jsonwebtoken");

exports.generateToken = (user_id,role)=>{
    return jwt.sign({user_id,role},process.env.JWT_SECRET, {expiresIn: "1d"})
}
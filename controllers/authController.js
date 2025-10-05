const User = require("../models/User");
const {generateToken} = require("../utils/generateToken")

exports.register = async (req, res) => {
  try {
    const {name, email, password, role} = req.body;

    // check user exist
    const existingUser = await User.findOne({email})
    if(existingUser) 
      return res.status(400).json({ status:400, error: "User already exists" });

     await User.create({
      name:name,
      email:email,
      password:password, 
      role:role
    })
    res.status(201).json({status:201, message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ status:500, error:err.message });
  }
};


exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ status:400, error: "User not found." });

    const isMatch = user.password === password;
    if (!isMatch) return res.status(400).json({status:400, error: "Invalid credentials" });
    const token = generateToken(user._id,user.role);
    res.json({ 
      status:200,
      token, 
      user: { user_id: user._id, name: user.name, role: user.role },
    });

  } catch (err) {
    res.status(500).json({status:500, error: err.message });
  }
};

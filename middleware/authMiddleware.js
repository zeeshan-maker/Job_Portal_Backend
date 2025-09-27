const jwt = require("jsonwebtoken");

exports.verifyToken = (req,res, next)=>{
    const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: "Not authorized, no token provided" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid or expired token" });
  }
}


// middleware/adminMiddleware.js
exports.isAdmin = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next(); 
  } else {
    res.status(403).json({status:403, message: "Access denied. Admins only." });
  }
};


// middleware/adminMiddleware.js
exports.isRecruiter = (req, res, next) => {
  if (req.user && req.user.role === "recruiter") {
    next(); 
  } else {
    res.status(403).json({status:403, message: "Access denied. Recruiter only." });
  }
};
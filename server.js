const express = require("express");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/company", require("./routes/companyRoutes"));
app.use("/api/v1/job",  require("./routes/jobRoutes"));
app.use("/api/v1/application", require("./routes/applicationRoutes"));
app.use("/api/v1/category",require("./routes/categoryRoutes"));





app.get("/",(req,res)=>{
    res.status(200).json({status:200, mesage:"Welcom to job application."})
})

connectDB();
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
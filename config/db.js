const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
    
    // Drop the whole database
    // await mongoose.connection.dropDatabase();
    // console.log("Database dropped.")
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
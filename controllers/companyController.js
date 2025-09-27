const Company = require("../models/Company");

exports.createCompany = async (req, res) => {
  const {
    name,
    industry,
    website,
    email,
    phone,
    address,
    location,
    foundedYear,
    description,
    logo,
  } = req.body;
  const user_id = req.user.user_id;
  try {
    const existingCompany = await Company.findOne({name:name})
    if(existingCompany){
      return res.status(400).json({status:400, message: "Company already exists"})
    }
    const company = new Company({
      user: user_id,
      name,
      industry,
      website,
      email,
      phone,
      address,
      location,
      foundedYear,
      description,
      logo,
    });
    await company.save();
    res
      .status(201)
      .json({
        status: 201,
        message: "Company registered successfully",
        company,
      });
  } catch (err) {
    console.log("############33",err)
    res.status(500).json({status:500, error: err.message });
  }
};

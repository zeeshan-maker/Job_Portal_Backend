const Category = require("../models/Categories");

exports.createCategory = async (req, res) => {
  const {name} = req.body;
  try {
      const category= await Category.findOne({name:name})
      if(category){
        return res.status(400).json({status:400, message:"Category already exists"})
      }
      await Category.create({name:name})

    res.status(201).json({status:201, message: "Category created successfully"});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCategoryById = async (req, res) => {
  const {id}=req.params
  try {
    const category = await Category.findById(id);
    if (!category) return res.status(404).json({ status:404, message: "Category not found" });
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


exports.updateCategory = async (req, res) => {
  const {id}=req.params;
  const {update_category} = req.body;
  try {
    const category = await Category.findById(id)
    if (!category) 
      return res.status(404).json({ status:404, message: "Category not found" });
    category.name = update_category;
    await category.save();
    res.json({status:200, message: "Category updated successfully"});
  } 
  catch (err) {
    res.status(500).json({status:500, error: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) 
      return res.status(404).json({status:404, message:"Category not found" });
    res.status(200).json({status:200, message:"Category deleted successfully" });
  } catch (err) {
    res.status(500).json({status:500, error: err.message });
  }
};

const Product = require("../models/product");

//creating new product => /api/v1/admin/products/new

exports.newProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

//Controller to get all products => /api/v1/products

exports.getProducts = async (req, res, next) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//Controller to get single product => /api/v1/products/:id

exports.getSingleProducts = async (req, res, next) => {
  try {
    const products = await Product.findById(req.params.id);
    if (!products) {
      res.status(404).json({ success: false, message: "Product not find" });
    }
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//update product => /api/v1/admin/products/:id

exports.updateProducts = async (req, res, next) => {
  try {
    let products = await Product.findById(req.params.id);
    if (!products) {
      return res
        .status(404)
        .json({ success: false, message: "Product not find" });
    }
    products = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

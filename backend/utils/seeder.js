const Product = require("../models/product");

const dotenv = require("dotenv");

const connectDataBase = require("../config/database");

const products = require("../data/product");

const { connect } = require("mongoose");

dotenv.config({ path: "backend/config/config.env" });

connectDataBase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Product deleted");

    await Product.insertMany(products);
    console.log("Product Inserted");

    process.exit();
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
};

seedProducts();

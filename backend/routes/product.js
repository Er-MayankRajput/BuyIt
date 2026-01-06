const express = require("express");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProducts,
} = require("../controlles/productController");

//Route to get all products
router.route("/products").get(getProducts);
router.route("/products/new").post(newProduct);
router.route("/products/:id").get(getSingleProducts);

module.exports = router;

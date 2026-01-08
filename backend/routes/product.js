const express = require("express");

const router = express.Router();

const {
  getProducts,
  newProduct,
  getSingleProducts,
  updateProducts,
} = require("../controlles/productController");

//Route to get all products
router.route("/products").get(getProducts);
router.route("/admin/products/new").post(newProduct);
router.route("/products/:id").get(getSingleProducts);
router.route("/admin/products/:id").put(updateProducts);

module.exports = router;

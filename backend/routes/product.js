const express = require("express");

const router = express.Router();

const { getProducts, newProduct } = require("../controlles/productController");

//Route to get all products
router.route("/products").get(getProducts);
router.route("/products/new").post(newProduct);

module.exports = router;

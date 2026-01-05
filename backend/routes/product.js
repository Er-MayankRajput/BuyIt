const express = require("express");

const router = express.Router();

const { getProducts } = require("../controlles/productController");

router.route("/products").get(getProducts);

module.exports = router;

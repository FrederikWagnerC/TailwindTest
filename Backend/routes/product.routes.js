const product = require("../controllers/product.controller.js");
const { verifyToken } = require("../middleware/auth.middleware.js");
let router = require("express").Router();

// product Routes for CRUD operations on products
router.get("/products/", product.findAll);
router.get("/products/:id", product.findOne);

module.exports = router;

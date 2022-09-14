const express = require("express");
const productsRoutes = require("./router");

const router = express.Router();

router.use("/products", productsRoutes);

module.exports = router;
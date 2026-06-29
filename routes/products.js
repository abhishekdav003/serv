const express = require("express")
const router = express.Router() 
const allProducts = require("../controllers/products")



router.get("/", allProducts.allProduct)
router.get("/:id", allProducts.getProductById)
router.post("/", allProducts.addProduct)

module.exports = router
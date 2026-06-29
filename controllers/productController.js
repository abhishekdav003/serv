const productService = require("../services/productService");
const path = require("path")
const getAllProducts = (req, res) => {
  res.sendFile(path.join(__dirname,"..","view","product.html"))
};

const getProductById = (req, res) => {
  res.send(productService.getProductById(req.params.id));
};

const addProduct = (req, res) => {
  res.send(productService.addProduct());
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};

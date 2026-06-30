const productService = require("../services/productService");
const { successResponse, errorResponse } = require("../utils/responseHandler");

const getAllProducts = (req, res) => {
  try {
    const products = productService.getAllProducts();

    return successResponse(res, 200, "Fetching all products", products);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

const getProductById = (req, res) => {
  try {
    const product = productService.getProductById(req.params.id);

    if (!product) {
      return errorResponse(res, 404, "Product not found");
    }

    return successResponse(res, 200, "Fetching product by ID", product);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

const addProduct = (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return errorResponse(res, 400, "Product name is required");
    }

    const product = productService.addProduct(name);

    return successResponse(res, 201, "Product added successfully", product);
  } catch (error) {
    return errorResponse(res, 500, error.message);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
};

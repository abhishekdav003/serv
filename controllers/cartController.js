const { successResponse } = require("../utils/responseHandler");

const getCartForUser = (req, res) => {
  return successResponse(
    res,
    200,
    `Fetching cart for user with ID: ${req.params.userId}`,
  );
};

const addProductToCart = (req, res) => {
  return successResponse(
    res,
    201,
    `Adding product to cart for user with ID: ${req.params.userId}`,
  );
};

module.exports = {
  getCartForUser,
  addProductToCart,
};

const { successResponse } = require("../utils/responseHandler");

const getAllUsers = (req, res) => {
  return successResponse(res, 200, "Fetching all users");
};

const addUser = (req, res) => {
  return successResponse(res, 201, "Adding a new user");
};

const getUserById = (req, res) => {
  return successResponse(res, 200, `Fetching user with ID: ${req.params.id}`);
};

module.exports = {
  getAllUsers,
  addUser,
  getUserById,
};

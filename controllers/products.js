const products =require("../data/products")

const allProduct = (req, res) => {
  res.status(200).json(products)
}

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).json({
      message: "Product not found",
    });
  }

  return res.status(200).json(product);
};

const addProduct = (req, res) => {
  const { name } = req.body;
  const product = { id: products.length + 1, name };
  products.push(product);
  res.status(201).json({
    message: "product added successfuly",
    products,
  });
};

module.exports = {
  allProduct,
  getProductById,
  addProduct
}
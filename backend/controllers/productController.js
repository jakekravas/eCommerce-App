import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
// using asyncHandler so that if there's any error, it'll display in a message in Postman
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find();
  
  res.json(products);
})

// @desc    Fetch single product
// @route   GET /api/products/:id
// @access  Public
const getProductByID = asyncHandler(async (req, res) => {

  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404)
    throw new Error("Product not found");
  }
})

export {
  getProducts,
  getProductByID
}
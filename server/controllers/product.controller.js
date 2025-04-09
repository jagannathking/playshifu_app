import { Product } from "../models/product.model.js";

// Create
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(201).json({ msg: "Product created", product: newProduct });
  } catch (err) {
    res.status(500).json({ msg: "Error creating product", error: err.message });
  }
};

// Get all
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching products", error: err.message });
  }
};

// Get one
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found" });
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching product", error: err.message });
  }
};

// Update
export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ msg: "Product not found" });
    res.status(200).json({ msg: "Product updated", product: updated });
  } catch (err) {
    res.status(500).json({ msg: "Error updating product", error: err.message });
  }
};

// Delete
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ msg: "Product not found" });
    res.status(200).json({ msg: "Product deleted", product: deleted });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting product", error: err.message });
  }
};

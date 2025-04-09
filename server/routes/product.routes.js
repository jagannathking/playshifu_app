import express from "express";
import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js";
import { authenticate, authorizeAdmin } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", getAllProducts);    // GET  http://localhost:3030/api/products ii
router.get("/:id", getProductById);    // GET  http://localhost:3030/api/products/id

router.post("/", authenticate, authorizeAdmin, createProduct);   // POST  http://localhost:3030/api/products by admin only 
router.put("/:id", authenticate, authorizeAdmin, updateProduct);  // PUT  http://localhost:3030/api/products/id  by admin only 
router.delete("/:id", authenticate, authorizeAdmin, deleteProduct); // DELETE  http://localhost:3030/api/products/id  by admin only 

export default router;


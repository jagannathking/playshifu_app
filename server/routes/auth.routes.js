import express from "express";
import {
  register,
  login,
  getProfile,
  changePassword
} from "../controllers/auth.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = express.Router();

// Public routes
router.post("/register", register);   // POST  http://localhost:3030/api/auth/register
router.post("/login", login);         // POST  http://localhost:3030/api/auth/login

// Protected routes
router.get("/profile", authenticate, getProfile);       // GET  http://localhost:3030/api/auth/profile  
router.put("/change-password", authenticate, changePassword);  // PUT   http://localhost:3030/api/auth/change-password

export default router;

import express from "express";
import {
  authenticateUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "../controllers/user.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/login").post(authenticateUser);
router.route("/logout").post(logoutUser);
router.post("/register", registerUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;

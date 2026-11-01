import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { protectApi } from "../middleware/arcjet.middleware.js";

const router = express.Router();

router.post("/signup", protectApi, signup);
router.post("/login", protectApi, login);
router.post("/logout", logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute, checkAuth);

export default router;

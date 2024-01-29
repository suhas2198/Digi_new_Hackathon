import express from "express";

import { loginController, registerController } from "../controller/authController.js";

const router = express.Router();

// Routing For adminData

router.post("/register", registerController);

// login || post
router.post("/login", loginController);


export default router;
 
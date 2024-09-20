import { Router } from "express";
import { validateUser } from "../middlewares/Validators/userValidators.js";
import * as authController from "../controllers/auth.controller.js";

const router = Router();

router.post("/signup", validateUser, authController.signup);
router.post("/login", authController.login);

export default router;

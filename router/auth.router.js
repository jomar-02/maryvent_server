import { Router } from "express";
import { loginController } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/login", loginController);

export default authRouter;

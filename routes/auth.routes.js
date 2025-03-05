import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

//--> /api/v1/auth/sign-up --> Post Body -->{name,email,password}
authRouter.post("/sign-up", signUp);
//--> /api/v1/auth/sign-up --> Post Body -->{email,password}
authRouter.post("/sign-in", signIn);
authRouter.post("/sign-out", signOut);

export default authRouter;

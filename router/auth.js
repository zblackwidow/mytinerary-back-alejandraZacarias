import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";

const routerAuth = Router();

routerAuth.post("/signIn", signIn);

export default routerAuth;
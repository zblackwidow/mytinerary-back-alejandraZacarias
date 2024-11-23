import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middleware/accountNotExist.js";
import isValidatePassword from "../middleware/isValidatePassword.js";

const routerAuth = Router();

routerAuth.post("/signIn", accountNotExist, isValidatePassword , signIn);

export default routerAuth;
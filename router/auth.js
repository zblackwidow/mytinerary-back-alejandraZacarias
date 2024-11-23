import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middleware/accountNotExist.js";
import isValidatePassword from "../middleware/isValidatePassword.js";
import generateToken from "../middleware/generateToken.js";

const routerAuth = Router();

routerAuth.post("/signIn", accountNotExist, isValidatePassword , generateToken , signIn);

export default routerAuth;
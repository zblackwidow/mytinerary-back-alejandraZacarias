import { Router } from "express";
import signIn from "../controllers/auth/signIn.js";
import accountNotExist from "../middleware/accountNotExist.js";
import isValidatePassword from "../middleware/isValidatePassword.js";
import generateToken from "../middleware/generateToken.js";
import signOut from "../controllers/auth/signOut.js";
import passport from "../middleware/passport.js";
import passportGoogle from "../middleware/passportGoogle.js";
import jwt from "jsonwebtoken";

const routerAuth = Router();

routerAuth.post("/signIn", accountNotExist, isValidatePassword, generateToken, signIn);
routerAuth.post("/signOut", passport.authenticate('jwt', { session: false }), signOut);

routerAuth.get("/signIn/google", passportGoogle.authenticate('google', { scope: ['profile', 'email'], session: false }));

routerAuth.get("/signIn/google/callback", passportGoogle.authenticate('google', { failureRedirect: '/login', session: false }), generateToken, signIn);

export default routerAuth;
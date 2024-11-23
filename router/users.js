import { Router } from "express";
import registerUser from "../controllers/users/register.js";
import { allUsers, idUser, nameUser } from "../controllers/users/read.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import validator from "../middleware/validator.js";
import createUserSchema from "../schemas/users/create.js";
import accountExist from "../middleware/accountExist.js";
import createhash from "../middleware/createhash.js";
import passport from "../middleware/passport.js";

let router = Router();

router.post("/register", passport.authenticate('jwt', { session: false }), validator(createUserSchema), accountExist, createhash, registerUser);
router.get("/all", passport.authenticate('jwt', { session: false }), allUsers);
router.get("/name/:name", passport.authenticate('jwt', { session: false }), nameUser);
router.get("/id/:id", passport.authenticate('jwt', { session: false }), idUser);
router.put("/update", passport.authenticate('jwt', { session: false }), updateUser);
router.delete("/deleteUser", passport.authenticate('jwt', { session: false }), deleteUser);

export default router;
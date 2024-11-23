import { Router } from "express";
import registerUser from "../controllers/users/register.js";
import { allUsers, idUser, nameUser } from "../controllers/users/read.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";
import validator from "../middleware/validator.js";
import createUserSchema from "../schemas/users/create.js";
import accountExist from "../middleware/accountExist.js";
import createhash from "../middleware/createhash.js";

let router = Router();

router.post("/register", validator(createUserSchema), accountExist , createhash , registerUser);
router.get("/all", allUsers);
router.get("/name/:name", nameUser);
router.get("/id/:id", idUser);
router.put("/update", updateUser);
router.delete("/deleteUser", deleteUser);

export default router;
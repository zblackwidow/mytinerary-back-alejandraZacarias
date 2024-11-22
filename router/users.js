import { Router } from "express";
import createUser from "../controllers/users/create.js";
import { allUsers, idUser, nameUser } from "../controllers/users/read.js";
import { updateUser } from "../controllers/users/update.js";
import { deleteUser } from "../controllers/users/delete.js";

let router = Router();

router.post("/create", createUser);
router.get("/all", allUsers);
router.get("/name/:name", nameUser);
router.get("/id/:id", idUser);
router.put("/update", updateUser);
router.delete("/deleteUser", deleteUser);

export default router;
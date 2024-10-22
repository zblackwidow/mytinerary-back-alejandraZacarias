import { Router } from "express";
import createCity from "../controllers/cities/create.js";
import allCities from "../controllers/read.js";


let router = Router();

router.post("/create", createCity);
router.get("/", allCities);


export default router;
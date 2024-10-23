import { Router } from "express";
import createCity from "../controllers/cities/create.js";
import allCities from "../controllers/cities/read.js";


let router = Router();

router.post("/create", createCity);
router.get("/all", allCities);


export default router;
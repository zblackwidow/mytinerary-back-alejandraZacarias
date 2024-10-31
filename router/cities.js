import { Router } from "express";
import createCity from "../controllers/cities/create.js";
import allCities from "../controllers/cities/read.js";
import {updateCity} from "../controllers/cities/update.js";


let router = Router();

router.post("/create", createCity);

router.get("/all", allCities);
router.put("/update", updateCity);


export default router;
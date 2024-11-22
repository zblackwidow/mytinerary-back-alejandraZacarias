import { Router } from "express";
import createCity from "../controllers/cities/create.js";
import { allCities, idCity, nameCity } from "../controllers/cities/read.js";
import { updateCity } from "../controllers/cities/update.js";
import { deleteCity } from "../controllers/cities/delete.js";


let router = Router();

router.post("/create", createCity);
router.get("/all", allCities);
router.get("/name/:name", nameCity);
router.get("/id/:id", idCity);
router.put("/update", updateCity);
router.delete("/deleteCity", deleteCity);


export default router;
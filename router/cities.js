import { Router } from "express";
import createCity from "../controllers/cities/create.js";
import { allCities, idCity, nameCity } from "../controllers/cities/read.js";
import { updateCity } from "../controllers/cities/update.js";
import { deleteCity } from "../controllers/cities/delete.js";
import passport from "../middleware/passport.js";


let router = Router();

router.post("/create", passport.authenticate('jwt', { session: false }), createCity);
router.get("/all", passport.authenticate('jwt', { session: false }), allCities);
router.get("/name/:name", passport.authenticate('jwt', { session: false }), nameCity);
router.get("/id/:id", passport.authenticate('jwt', { session: false }), idCity);
router.put("/update", passport.authenticate('jwt', { session: false }), updateCity);
router.delete("/deleteCity", passport.authenticate('jwt', { session: false }), deleteCity);


export default router;
import { Router } from "express";
import createItinerary from "../controllers/itineraries/create.js";
import { allItineraries, nameItinerary, cityItinerary } from "../controllers/itineraries/read.js";
import { updateItinerary } from "../controllers/itineraries/update.js";
import { deleteItinerary } from "../controllers/itineraries/delete.js";
import passport from "../middleware/passport.js";

let router = Router();

router.post("/createItinerary", passport.authenticate('jwt', { session: false }), createItinerary);
router.get("/all", passport.authenticate('jwt', { session: false }), allItineraries);
router.get("/name/:name", passport.authenticate('jwt', { session: false }), nameItinerary);
router.get("/city/:city", passport.authenticate('jwt', { session: false }), cityItinerary);
router.put("/update", passport.authenticate('jwt', { session: false }), updateItinerary);
router.delete("/deleteItinerary", passport.authenticate('jwt', { session: false }), deleteItinerary);


export default router;
import { Router } from "express";
import createItinerary from "../controllers/itineraries/create.js";
import allItineraries from "../controllers/itineraries/read.js";
import { updateItinerary } from "../controllers/itineraries/update.js";
import { deleteItinerary } from "../controllers/itineraries/delete.js";

let router = Router();

router.post("/createItinerary", createItinerary);
router.get("/all", allItineraries);
router.put("/update", updateItinerary);
router.delete("/deleteItinerary", deleteItinerary);


export default router;
import Itinerary  from "../../models/Itinerary.js";


let createItinerary = async (req, res, next) => {
    try {
        let itineraries = req.body;
        let newItinerary = await Itinerary.create(itineraries);
        return res.status(201).json({ res: newItinerary });
        
    } catch (error) {
        return next(error);
    }
};

export default createItinerary;
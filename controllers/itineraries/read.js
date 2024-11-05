import Itinerary from "../../models/Itinerary.js";

let allItineraries = async (req, res, next) => {
    try {
        let all = await Itinerary.find();
        console.log(all);
        
        return res.status(200).json({ res: all });
    } catch (error) {
        return next(error);

    }
};

export default allItineraries;
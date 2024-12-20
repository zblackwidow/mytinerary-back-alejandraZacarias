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
let nameItinerary = async (req, res, next) => {
    try {
        let name = await Itinerary.findOne({ name: req.params.name });
        return res.status(200).json({ res: name });
    } catch (error) {
        return next(error);
    }
};

let cityItinerary = async (req, res, next) => {
    try {
        let city = await Itinerary.find({ city: req.params.city });
        return res.status(200).json({ res: city });
    } catch (error) {
        return next(error);
    }
};


export { allItineraries, nameItinerary, cityItinerary };
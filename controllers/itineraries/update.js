import Itinerary from "../../models/Itinerary.js";

const updateItinerary = async (request, response, next) => {
    try {
        let itineraries = request.body;
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
        { _id: itineraries._id },
        { price : itineraries.price }
        )
       return response.status(200).json({ response: "updatedItinerary successfully" });
    } catch (error) {
        next(error);
    }
}


export { updateItinerary };
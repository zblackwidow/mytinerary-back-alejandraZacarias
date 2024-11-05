import Itinerary from "../../models/Itinerary.js";

const updateItinerary = async (request, response, next) => {
    try {
        let itineraries = request.body;
        let updatedItinerary = await Itinerary.findByIdAndUpdate(
        { _id: Itinerary._id },
        { country : Itinerary.country }
        )
       return response.status(200).json({ response: "updatedItinerary successfully" });
    } catch (error) {
        next(error);
    }
}


export { updateItinerary };
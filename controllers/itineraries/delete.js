import Itinerary from "../../models/Itinerary.js";

// delete one Itinerary
const deleteItinerary = async (request, response, next) => {
    try {
        let deleteItineraryOne = await Itinerary.deleteOne(
            {
                _id: request.body._id
            }
        )
        return response.status(200).json({
            response: deleteItineraryOne
        })
    }
        catch(error){
            next(error)
        }

    }

export {deleteItinerary}
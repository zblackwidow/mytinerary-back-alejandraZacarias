import City from "../../models/City.js";

// delete one City
const deleteCity = async (request, response, next) => {
    try {
        let deleteCityOne = await City.deleteOne(
            {
                _id: request.body._id
            }
        )
        return response.status(200).json({
            response: deleteCityOne
        })
    }
        catch(error){
            next(error)
        }

    }

export {deleteCity}
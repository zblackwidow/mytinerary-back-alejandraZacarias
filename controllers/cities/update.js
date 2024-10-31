import City from "../../models/City.js";

const updateCity = async (request, response, next) => {
    try {
        let city = request.body;
        let updatedCity = await City.findByIdAndUpdate(
        { _id: city._id },
        { population: city.population }
        )
       return response.status(200).json({ response: "updatedCity successfully" });
    } catch (error) {
        next(error);
    }
}


export { updateCity };
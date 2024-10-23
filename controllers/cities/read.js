import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let all = await City.find();
        return res.status(200).json({ res : all });
    } catch (error) {
        return next(error);
    }
};

export default allCities;
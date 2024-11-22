import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let all = await City.find();
        return res.status(200).json({ res : all });
    } catch (error) {
        return next(error);
    }
};

let idCity = async (req, res, next) => {
    try {
        let id = await City.findById(req.params.id);
        return res.status(200).json({ res : id });
    } catch (error) {
        return next(error);
    }
};

let nameCity = async (req, res, next) => {
    try {
        let name = await City.findOne({ name: req.params.name });
        return res.status(200).json({ res : name });
    } catch (error) {
        return next(error);
    }
};

export { allCities, idCity, nameCity };
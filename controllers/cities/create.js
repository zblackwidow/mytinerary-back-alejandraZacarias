import City  from "../../models/City.js";


let createCity = async (req, res, next) => {
    try {
        let city = req.body;
        let newCity = new City.createCity(city);
        return res.status(201).json({ res: newCity });
        
    } catch (error) {
        return next(error);
    }
};

export default createCity;
    
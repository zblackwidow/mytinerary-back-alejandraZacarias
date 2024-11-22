import User from "../../models/User.js";

let allUsers = async (req, res, next) => {
    try {
        let all = await User.find();
        return res.status(200).json({ res: all });
    } catch (error) {
        return next(error);
    }
};

let idUser = async (req, res, next) => {
    try {
        let id = await User.findById(req.params.id);
        return res.status(200).json({ res: id });
    } catch (error) {
        return next(error);
    }
};

let nameUser = async (req, res, next) => {
    try {
        let name = await User.findOne({ name: req.params.name });
        return res.status(200).json({ res: name });
    } catch (error) {
        return next(error);
    }
};

export { allUsers, idUser, nameUser };
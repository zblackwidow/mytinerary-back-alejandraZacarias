import User from "../../models/User.js";

let registerUser = async (req, res, next) => {
    try {
        let user = req.body;
        user.online = false;
        let newUser = await User.create(user);
        return res.status(200).json({ res: newUser });
    } catch (error) {
        return next(error);
    }
};

export default registerUser;
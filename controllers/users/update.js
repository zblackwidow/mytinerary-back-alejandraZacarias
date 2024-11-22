import User from "../../models/User.js";

let updateUser = async (req, res, next) => {
    try {
        let user = await User.findById({ _id: req.params.id });
        let newUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({ res: newUser });
    } catch (error) {
        return next(error);
    }
};

export {updateUser} ;
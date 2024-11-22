import User from "../../models/User.js";

const deleteUser = async (req, res, next) => {
    try {
        let user = await User.findById({_id:req.params.id})
        return res.status(200).json({ res: user });
    }
    catch (error) {
        return next(error);
    }
};

export {deleteUser};
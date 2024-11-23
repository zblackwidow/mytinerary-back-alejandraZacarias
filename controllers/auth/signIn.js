import User from "../../models/User.js";

export default async (req, res, next) => {
    try {
        await User.findOneAndUpdate(
            { email: req.body.email },
            { online: true }
        )
        return res.status(200).json({ success: true, message: "Logged in successfully" });
    }
    catch (error) {
            next(error)
    }
}
import bcryptjs from "bcryptjs";

export default async (req, res, next) => {
    
    let password = req.body.password
    let passwordDB = req.user.password

    let compare = bcryptjs.compareSync(password, passwordDB)

    if (compare) {
         return next()
    }
    return res.status(400).json({ success: false, message: "Password invalid" });
    
}   
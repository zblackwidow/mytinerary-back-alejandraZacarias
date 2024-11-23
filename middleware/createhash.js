import bcrypt from "bcryptjs";

export default async (req, res, next) => {
    let password = req.body.password
    let hashPassword = await bcrypt.hash(password, 10)
    req.body.password = hashPassword
    return next()
}
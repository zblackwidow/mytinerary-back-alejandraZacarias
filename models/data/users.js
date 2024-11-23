// name: { type: String, required: true },
//     email: { type: String, required: true },
//     password: { type: String, required: true },
//     photo: { type: String, required: true },
//     role: { type: String, required: true }
import "dotenv/config.js";
import User from "../User.js";
import "../../config/database.js";

let users = [
    {
        name: "Alejandra Zacarias",
        email: "alejandra.zacarias@gmail.com",
        password: "admin123",
        photo: "https://www.gravatar.com/avatar/a?d=identicon",
        role: 1
    },
    {
        name: "Carlos Zacarias",
        email: "carlos.zacarias@gmail.com",
        password: "admin123",
        photo: "https://www.gravatar.com/avatar/a?d=identicon",
        role: 2
    },
    {
        name: "Daniel Zacarias",
        email: "daniel.zacarias@gmail.com",
        password: "admin123",
        photo: "https://www.gravatar.com/avatar/a?d=identicon",
        role: 3
    }
]

User.insertMany(users)
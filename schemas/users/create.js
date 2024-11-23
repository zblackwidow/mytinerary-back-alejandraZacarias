import joi from "joi-oid";


const createUserSchema = joi.object({
    name: joi.string().required().alphanum().min(3).max(30).messages({
        'string.base': 'Name can only contain letters',
        'any.required': 'Name is required'
    }),
    email: joi.string().required().email(),
    password: joi.string().required(),
    photo: joi.string().required(),
    role: joi.number().required()
})


export default createUserSchema;
import { Schema, model } from "mongoose"

let collection = "cities"

let schema = new Schema({
    name: { type: String, required: true },
    capital: { type: Boolean, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    countryCode: { type: String, required: true },
    area: { type: Number, required: true },
    population: { type: Number, required: true },
    currency: { type: String, required: true },
    flag: { type: String, required: true },
    imageFlag: { type: String, required: true },
    continent: { type: String, required: true },
    languages: { type: String, required: true },
    descripcion: { type: String, required: true },
    image: { type: String, required: true },
    timezone: { type: String, required: true },
    wikipedia: { type: String, required: true },
    itineraries: { type: Number, required: true }

})

let City = model(collection, schema);

export default City
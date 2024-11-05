import { Schema, model } from "mongoose"

let collection = "itineraries"

let schema = new Schema({
    name: { type: String, required: true },
    activities: { type: Boolean, required: true },
    price: { type: Number, required: true },
    Image: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    currency: { type: String, required: true },
    hashtags: { type: String, required: true }
})

let Itinerary = model(collection, schema);

export default Itinerary
import "dotenv/config.js";
import Itinerary from "../Itinerary.js";
import "../../config/database.js";

let itineraries = [
    {
        id: 1,
        city: "New York",
        name: "Walk in Central Park",
        activities: true,
        price: 10,
        Image: "https://www.interviajesny.com/wp-content/uploads/central-park-nueva-york-3-1200x723.jpg",
        description: "341 acres of trails, lakes, and meadows. Highlights include Bethesda Terrace, the Bow Bridge, and the Conservatory Garden. Ideal for strolls, picnics, and outdoor activities.",
        duration: 5,
        currency: "Dollar",
        hashtags: "#walk, #place, #green"
    }, {
        id: 2,
        city: "New York",
        name: "Times Square",
        activities: true,
        price: 30,
        Image: "https://ewnqp79wvj7.exactdn.com/wp-content/uploads/2024/07/hjwloci1tma-1.jpg",
        description: "Famous for its bright lights and giant screens. Known as The Crossroads of the World, it is a vibrant center of entertainment, surrounded by Broadway theaters, restaurants, and shops, attracting millions of visitors each year",
        duration: 2,
        currency: "Dollar",
        hashtags: "#newyork, #timessquare, #entertainment"
    }, {
        id: 3,
        city: "Paris",
        name: "Visit the Eiffel Tower",
        activities: true,
        price: 50,
        Image: "https://assets.cityexperiences.com/wp-content/uploads/2023/01/denys-nevozhai-UzagqG756OU-unsplash.jpg2222  we",
        description: "The Eiffel Tower is a wrought-iron lattice tower in Paris, France. It was built for the 1889 World's Fair and was the tallest man-made structure in the world until 1900. It was originally intended to be a temporary structure, but it has since become an icon of Paris and France.",
        duration: 4,
        currency: "Euro",
        hashtags: "#eiffeltower, #paris, #france"
    }, {
        id: 4,
        name: "Explore the Louvre Museum",
        activities: true,
        city: "France",
        price: 100,
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tokyo-3.jpg/1200px-Tokyo-3.jpg",
        description: "Admire masterpieces like the Mona Lisa and the Venus de Milo at one of the largest and most famous museums in the world. Don't forget to stroll through its impressive architecture.",
        duration: 3,
        currency: "Euro",
        hashtags: "#louvre, #museum, #france"
    }, {
        id: 5,
        name: "My fifth itinerary",
        activities: true,
        city: "Spain",
        price: 100,
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tokyo-3.jpg/1200px-Tokyo-3.jpg",
        description: "My fifth itinerary",
        duration: 10,
        currency: "Euro",
        hashtags: "hashtag1, hashtag2, hashtag3"
    }, {
        id: 6,
        name: "My sixth itinerary",
        activities: true,
        city: "Spain",
        price: 100,
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tokyo-3.jpg/1200px-Tokyo-3.jpg",
        description: "My sixth itinerary",
        duration: 10,
        currency: "Euro",
        hashtags: "hashtag1, hashtag2, hashtag3"
    }, {
        id: 7,
        name: "My seventh itinerary",
        activities: true,
        city: "Spain",
        price: 100,
        Image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tokyo-3.jpg/1200px-Tokyo-3.jpg",
        description: "My seventh itinerary",
        duration: 10,
        currency: "Euro",
        hashtags: "hashtag1, hashtag2, hashtag3"
    }]

    Itinerary.insertMany(itineraries)
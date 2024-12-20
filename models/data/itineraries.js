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
        image: "https://www.vacacionesnuevayork.com/wp-content/uploads/2019/12/central-park-air.jpg",
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
        image: "https://ewnqp79wvj7.exactdn.com/wp-content/uploads/2024/07/hjwloci1tma-1.jpg",
        description: "Famous for its bright lights and giant screens. Known as The Crossroads of the World, it is a vibrant center of entertainment, surrounded by Broadway theaters, restaurants, and shops, attracting millions of visitors each year",
        duration: 2,
        currency: "Dollar",
        hashtags: "#newyork, #timessquare, #entertainment"
    },
    {
        id: 3,
        city: "Barcelona",
        name: "La Sagrada Familia",
        activities: true,
        price: 25,
        image: "https://www.inoutbarcelonatours.com/build/images/tours/BCNIN14AM/01-icono_1920.6c5f46e3.jpg",
        description: "A famous basilica designed by architect Antoni Gaudí, known for its unique and intricate design.",
        duration: 2,
        currency: "Euro",
        hashtags: "#barcelona, #sagradafamilia, #gaudi"
    },
    {
        id: 4,
        city: "Barcelona",
        name: "Park Güell",
        activities: true,
        price: 10,
        image: "https://cdn-imgix.headout.com/mircobrands-content/image/a2ac0d0fbdb3173763ff85f7de5a000e-AdobeStock_39353446.jpeg",
        description: "A public park featuring Gaudí's colorful mosaic work, offering beautiful views of the city.",
        duration: 3,
        currency: "Euro",
        hashtags: "#barcelona, #parkguell, #gaudi"
    },
    {
        id: 5,
        city: "Barcelona",
        name: "Casa Batlló",
        activities: true,
        price: 24,
        image: "https://barcelonapaseodegracia.com/wp-content/uploads/2018/07/ximg-fachada-rosas.jpg.pagespeed.ic_.fu4kMb7Cjf-1920x1120.jpg",
        description: "A remarkable building designed by Gaudí, famous for its skeletal facade and stunning interior.",
        duration: 1.5,
        currency: "Euro",
        hashtags: "#barcelona, #casabatllo, #gaudi"
    },
    {
        id: 6,
        city: "Barcelona",
        name: "La Rambla",
        activities: true,
        price: 0,
        image: "https://www.barcelo.com/guia-turismo/wp-content/uploads/2019/05/rambla-barcelona-paseo.jpg",
        description: "A bustling street in central Barcelona, popular for shopping, dining, and people-watching.",
        duration: 2,
        currency: "Euro",
        hashtags: "#barcelona, #larambla, #shopping"
    },
    {
        id: 7,
        city: "Barcelona",
        name: "Magic Fountain of Montjuïc",
        activities: true,
        price: 0,
        image: "https://barcelonando.com/wp-content/uploads/sites/3/2018/03/magic_fountain_barcelona-1.jpg",
        description: "A large fountain that features nightly light and music shows, drawing crowds of spectators.",
        duration: 1,
        currency: "Euro",
        hashtags: "#barcelona, #magicfountain, #montjuic"
    },
    {
        id: 8,
        city: "Paris",
        name: "Eiffel Tower",
        activities: true,
        price: 25,
        image: "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg",
        description: "The iconic Eiffel Tower offers breathtaking views of Paris and is a must-visit landmark.",
        duration: 2,
        currency: "Euro",
        hashtags: "#paris, #eiffeltower, #landmark"
    },
    {
        id: 9,
        city: "Paris",
        name: "Louvre Museum",
        activities: true,
        price: 15,
        image: "https://www.mapleventurous.com/wp-content/uploads/2024/05/The-magnificent-justaposition-of-the-famous-glass-pyramid-and-the-traditional-buildings-of-the-Louvre.jpg",
        description: "Home to the famous Mona Lisa, the Louvre Museum houses an extensive collection of art and history.",
        duration: 3,
        currency: "Euro",
        hashtags: "#paris, #louvre, #art"
    },
    {
        id: 10,
        city: "Paris",
        name: "Notre-Dame Cathedral",
        activities: true,
        price: 10,
        image: "https://cdn.britannica.com/29/255529-050-63A22A3C/notre-dame-de-paris-cathedral-paris-france.jpg",
        description: "A masterpiece of French Gothic architecture, the Notre-Dame Cathedral is a historical and cultural landmark.",
        duration: 1.5,
        currency: "Euro",
        hashtags: "#paris, #notredame, #architecture"
    },
    {
        id: 11,
        city: "Sydney",
        name: "Sydney Opera House",
        activities: true,
        price: 40,
        image: "https://cdn-imgix.headout.com/tour/20072/TOUR-IMAGE/d85280d5-3c4f-4f54-bd7a-6fc5cc68597f-10732-sydney-sydney-and-bondi-tour-with-sydney-opera-house-tour-01.jpg",
        description: "The Sydney Opera House is an iconic landmark known for its unique architecture and vibrant cultural performances.",
        duration: 2.5,
        currency: "Australian Dollar",
        hashtags: "#sydney, #opera, #landmark"
    },
    {
        id: 16,
        city: "Cape Town",
        name: "Table Mountain",
        activities: true,
        price: 0,
        image: "https://sporthelicopterscapetown.co.za/wp-content/uploads/2023/11/Table-Mountain-Cape-Town.jpg",
        description: "Hike or take a cable car to the top of Table Mountain for breathtaking views of Cape Town and the surrounding area.",
        duration: 3,
        currency: "Rand",
        hashtags: "#capetown, #tablemountain, #hiking"
    },
    {
        id: 17,
        city: "Cape Town",
        name: "Robben Island",
        activities: true,
        price: 20,
        image: "https://www.capetown.travel/wp-content/uploads/2022/06/Robben-Island.webp",
        description: "Visit Robben Island, a historical site where Nelson Mandela was imprisoned, and learn about South Africa's journey to freedom.",
        duration: 4,
        currency: "Rand",
        hashtags: "#capetown, #robbenisland, #history"
    }, {
        id: 18,
        city: "Lima",
        name: "Plaza Mayor",
        activities: true,
        price: 0,
        image: "https://www.peru.travel/Contenido/Uploads/plaza-de-armas-lima-datos-interior_637801032929197470.jpg",
        description: "Visit the historic Plaza Mayor, the birthplace of Lima, surrounded by beautiful colonial architecture.",
        duration: 1,
        currency: "Sol",
        hashtags: "#lima, #plazamayor, #history"
    },
    {
        id: 19,
        city: "Lima",
        name: "Larco Museum",
        activities: true,
        price: 12,
        image: "https://cdn.getyourguide.com/img/tour/139b91862a944992.jpeg/98.jpg",
        description: "Explore the Larco Museum, which houses an extensive collection of pre-Columbian art and artifacts.",
        duration: 2,
        currency: "Sol",
        hashtags: "#lima, #larcomuseum, #precolumbianart"
    },
    {
        id: 20,
        city: "Lima",
        name: "Barranco District",
        activities: true,
        price: 0,
        image: "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/90000/90220-Barranco.jpg",
        description: "Wander through the artistic Barranco District, known for its vibrant street art and bohemian atmosphere.",
        duration: 2,
        currency: "Sol",
        hashtags: "#lima, #barranco, #streetart"
    },
    {
        id: 21,
        city: "Lima",
        name: "Huaca Pucllana",
        activities: true,
        price: 15,
        image: "https://blog.redbus.pe/wp-content/uploads/2018/02/Huaca_Pucllana_Lima_-_Peru_-_panoramio_6.jpg",
        description: "Visit Huaca Pucllana, an ancient adobe pyramid located in the Miraflores district, showcasing Lima's pre-Inca history.",
        duration: 1.5,
        currency: "Sol",
        hashtags: "#lima, #huacapucllana, #history"
    },
    {
        id: 22,
        city: "Lima",
        name: "Miraflores Boardwalk",
        activities: true,
        price: 0,
        image: "https://mediaim.expedia.com/localexpert/3669277/d0267c8a-d26f-43be-9171-a39cfb89cedb.jpg?impolicy=resizecrop&rw=1005&rh=565",
        description: "Stroll along the Miraflores Boardwalk, enjoying stunning ocean views and the lively atmosphere of this coastal neighborhood.",
        duration: 1,
        currency: "Sol",
        hashtags: "#lima, #miraflores, #boardwalk"
    },{
        id: 23,
        city: "Berlin",
        name: "Brandenburg Gate",
        activities: true,
        price: 0,
        image: "https://media.cntraveler.com/photos/5b914e80d5806340ca438db1/16:9/w_2560,c_limit/BrandenburgGate_2018_GettyImages-549093677.jpg",
        description: "Visit the iconic Brandenburg Gate, a symbol of Berlin and German reunification. A must-see historic monument.",
        duration: 1,
        currency: "Euro",
        hashtags: "#berlin, #brandenburggate, #history"
    },
    {
        id: 24,
        city: "Copenhagen",
        name: "Nyhavn",
        activities: true,
        price: 0,
        image: "https://www.travel-guide.es/media/800x533/nyhavn-800x533.avif",
        description: "Stroll through Nyhavn, the picturesque 17th-century waterfront canal and entertainment district lined with brightly colored houses.",
        duration: 1.5,
        currency: "Krone",
        hashtags: "#copenhagen, #nyhavn, #waterfront"
    },
    {
        id: 25,
        city: "Copenhagen",
        name: "Tivoli Gardens",
        activities: true,
        price: 20,
        image: "https://media.cntraveller.com/photos/6475c9948142ccbb75b148c4/16:9/w_960,c_limit/Tivoli_Japanese_Pagoda_Lasse_Salling_01%20(1)%20-%20Kopi-tivoli-may23-pr.jpg",
        description: "Enjoy a fun day at Tivoli Gardens, one of the world's oldest amusement parks, offering rides, games, and beautiful gardens.",
        duration: 3,
        currency: "Krone",
        hashtags: "#copenhagen, #tivoli, #amusementpark"
    },
    {
        id: 26,
        city: "Copenhagen",
        name: "The Little Mermaid",
        activities: true,
        price: 0,
        image: "https://gdkfiles.visitdenmark.com/files/382/83168_The_Little_Mermaid.jpg?width=987",
        description: "Visit The Little Mermaid, a famous bronze statue based on Hans Christian Andersen's fairy tale, located at Langelinie promenade.",
        duration: 1,
        currency: "Krone",
        hashtags: "#copenhagen, #littlemermaid, #statue"
    },
    {
        id: 27,
        city: "Cordoba",
        name: "Manzana Jesuítica",
        activities: true,
        price: 0,
        image: "https://www.lavoz.com.ar/resizer/2-eXkGR0k1UM3iWzmBZB5WXMmPw=/arc-anglerfish-arc2-prod-grupoclarin/public/TSLAAT4V7NCPPDXSNZEUPEULGE.jpg",
        description: "Explore the Manzana Jesuítica, a block of colonial-era buildings that includes a church, a university, and residences, showcasing the historical influence of the Jesuits in Córdoba.",
        duration: 2,
        currency: "Peso",
        hashtags: "#cordoba, #manzanajesuitica, #history"
    },
    {
        id: 28,
        city: "Cordoba",
        name: "Parque Sarmiento",
        activities: true,
        price: 0,
        image: "https://turismo.cordoba.gob.ar/wp-content/uploads/2021/10/parque-Sarmiento-4-scaled-e1675775837739.jpeg",
        description: "Relax and enjoy the outdoors at Parque Sarmiento, a large urban park offering lush green spaces, lakes, and playgrounds for all ages.",
        duration: 3,
        currency: "Peso",
        hashtags: "#cordoba, #parquesarmiento, #nature"
    },
    {
        id: 29,
        city: "Cordoba",
        name: "Catedral de Córdoba",
        activities: true,
        price: 0,
        image: "https://turismo.cordoba.gob.ar/wp-content/uploads/2021/07/Catedral-5.jpg",
        description: "Visit the stunning Catedral de Córdoba, an architectural masterpiece that combines elements of Baroque and Neoclassical styles, located in the heart of the city.",
        duration: 1.5,
        currency: "Peso",
        hashtags: "#cordoba, #catedral, #architecture"
    },
    {
        id: 30,
        city: "Cordoba",
        name: "Museo Emilio Caraffa",
        activities: true,
        price: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Museo_Emilio_Caraffa_2009-11-25.jpg",
        description: "Explore the Museo Emilio Caraffa, an art museum featuring a wide range of contemporary and classical works from local and international artists.",
        duration: 2,
        currency: "Peso",
        hashtags: "#cordoba, #museocaraffa, #art"
    },
    {
        id: 31,
        city: "Santiago",
        name: "Cerro San Cristóbal",
        activities: true,
        price: 0,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Santuario_de_la_Inmaculada_Concepci%C3%B3n%2C_Cerro_San_Crist%C3%B3bal_%2825059260397%29.jpg",
        description: "Visit Cerro San Cristóbal for panoramic views of Santiago. Enjoy a cable car ride or a hike to the top of this iconic hill.",
        duration: 2.5,
        currency: "Chilean Peso",
        hashtags: "#santiago, #cerrosancristobal, #views"
    },
    {
        id: 32,
        city: "Santiago",
        name: "La Moneda Palace",
        activities: true,
        price: 0,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/21/Palacio_de_La_Moneda_-_miguelreflex.jpg",
        description: "Explore La Moneda Palace, the seat of the President of Chile. Witness the changing of the guard ceremony and learn about the country's political history.",
        duration: 1.5,
        currency: "Chilean Peso",
        hashtags: "#santiago, #lamonedapalace, #history"
    },
    {
        id: 33,
        city: "Quito",
        name: "La Basílica del Voto Nacional",
        activities: true,
        price: 2,
        image: "https://www.arquidiocesisdequito.com.ec/images/arquidiocesis-quito/02-cliente/08-vicarias/basilica_del_voto_nacional_1.jpg",
        description: "Visit La Basílica del Voto Nacional, an impressive Gothic church with stunning architecture and incredible views of Quito from its towers.",
        duration: 1.5,
        currency: "US Dollar",
        hashtags: "#quito, #basilica, #architecture"
    },
    {
        id: 34,
        city: "Quito",
        name: "Mitad del Mundo",
        activities: true,
        price: 5,
        image: "https://ecuadors.live/wp-content/uploads/2023/07/mitad-del-mundo-ciudad-mitad-del-mundo-quito-turismo-turismo-ecuador.jpg",
        description: "Experience standing on the equatorial line at Mitad del Mundo, a popular attraction where you can straddle both hemispheres.",
        duration: 2,
        currency: "US Dollar",
        hashtags: "#quito, #mitaddelmundo, #equator"
    },
    {
        id: 35,
        city: "Quito",
        name: "TelefériQo",
        activities: true,
        price: 8,
        image: "https://teleferico.com.ec/wp-content/uploads/2019/04/imagen_inicio3.jpg",
        description: "Take a ride on the TelefériQo, one of the highest aerial lifts in the world, offering breathtaking views of Quito and the surrounding mountains.",
        duration: 2,
        currency: "US Dollar",
        hashtags: "#quito, #teleferiqo, #views"
    },
    {
        id: 36,
        city: "Quito",
        name: "Plaza de la Independencia",
        activities: true,
        price: 0,
        image: "https://www.clave.com.ec/wp-content/uploads/2015/08/MG_2001.jpg",
        description: "Explore Plaza de la Independencia, the historic center of Quito, surrounded by important government buildings and beautiful colonial architecture.",
        duration: 1,
        currency: "US Dollar",
        hashtags: "#quito, #plazaindependencia, #history"
    },
    {
        id: 37,
        city: "Quito",
        name: "Museo del Banco Central",
        activities: true,
        price: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Primer_edificio_del_Banco_Central_del_Ecuador%2C_actual_Museo_Numism%C3%A1tico.jpg",
        description: "Visit the Museo del Banco Central, which houses an extensive collection of Ecuadorian art and historical artifacts, providing a deep insight into the country's rich heritage.",
        duration: 2,
        currency: "US Dollar",
        hashtags: "#quito, #museo, #culture"
    }    
]

Itinerary.insertMany(itineraries)
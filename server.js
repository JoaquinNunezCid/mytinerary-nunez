// const cities = 
// [
//         { city: 'Amsterdam', image: '/europe/amsterdam.jpg', alt:'Image of Amsterdam', badge:'Euro', country:'Netherlands', description:'Amsterdam is the capital of the Netherlands'},
//         { city: 'London', image: '/europe/london.jpg', alt:'Image of London', badge:'Sterling', country:'United Kingdom', description:''},
//         { city: 'Prague', image: '/europe/praga.jpg', alt:'Image of Praga', badge:'', country:'', description:''},
//         { city: 'Venice', image: '/europe/venice.jpg', alt:'Image of Venice', badge:'', country:'', description:''},
//         { city: 'Buenos Aires', image: '/latinA/buenos_aires.jpg', alt:'image of Buenos Aires', badge:'', country:'', description:''},
//         { city: 'Cartagena', image: '/latinA/cartagena.jpg', alt:'Image of Cartagena', badge:'', country:'', description:''},
//         { city: 'Cuzco', image: '/latinA/machu_picchu.jpg', alt:'Image of Cusco', badge:'', country:'', description:''},
//         { city: 'Rio de Janeiro', image: '/latinA/rio_de_janeiro.jpg', alt:'Image of Rio de Janeiro', badge:'', country:'', description:''},
//         { city: 'Chicago', image: '/northA/chicago.jpg', alt:'Image of Chicago', badge:'', country:'', description:''},
//         { city: 'Quebec', image: '/northA/quebec.jpg', alt:'Image of Quebec', badge:'', country:'', description:''},
//         { city: 'San Francisco', image: '/northA/san_francisco.jpg', alt:'Image of San Francisco', badge:'', country:'', description:''},
//         { city: 'Toronto', image: '/northA/toronto.jpg', alt:'Image of Toronto', badge:"", country:"", description:''},
//         { city: 'Kyoto', image: '', alt:'Image of Quebec', badge:'', country:'', description:''},
//         { city: 'Dubai', image: '', alt:'Image of Dubai', badge:'', country:'', description:''},
//         { city: 'Istanbul', image: '', alt:'Image of Greece', badge:'', country:'', description:''},
// ]

require('dotenv').config()
const express = require("express");
const cors = require("cors");
const Router = require('./routes/routes')
require('./config/database')
const app = express()

// middlewares

app.use(cors())
app.use(express.json());
app.use('/api', Router)

app.listen(4000 ,()=> console.log('Server listening on port 4000'))
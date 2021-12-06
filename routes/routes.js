const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers=require("../controllers/itinerariesControllers")

const {getAllCities, getCity, addCity, deteleCity, modifyCity} = citiesControllers;
const {obtenerTodasLosItinerarios,  cargarUnItinerario, obtenerUnItinerario,obtenerItinerariosCiudades} = itinerariesControllers

Router.route('/cities')
 .get(getAllCities)
 .post(addCity)

 Router.route('/cities/:id')
 .get(getCity)
 .delete(deteleCity)
 .put(modifyCity)

 Router.route('/city/itinerary/:id')
 .get(obtenerItinerariosCiudades)
 Router.route('/itineraries')
 .get(obtenerTodasLosItinerarios)
 .post(cargarUnItinerario)
 Router.route('/itinerary/:id')
 .get(obtenerUnItinerario)
 
 module.exports = Router
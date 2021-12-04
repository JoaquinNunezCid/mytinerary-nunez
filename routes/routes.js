const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers = require('../controllers/itinerariesControllers')

const {getAllCities, getCity, addCity, deteleCity, modifyCity} = citiesControllers;
const {getItineraries, getItineraryById, newItinerary, deleteItinerary, changeItinerary} = itinerariesControllers;

Router.route('/cities')
 .get(getAllCities)
 .post(addCity)

 Router.route('/cities/:id')
 .get(getCity)
 .delete(deteleCity)
 .put(modifyCity)

 Router.route("/itineraries")
.get(getItineraries)
.post(newItinerary)


Router.route("/itinerary/:id")
.delete(deleteItinerary)
.put(changeItinerary)
.get(getItineraryById)

 module.exports = Router
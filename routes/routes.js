const Router = require('express').Router();

const citiesControllers = require('../controllers/citiesControllers')

const {getAllCities, getCity, addCity, deteleCity, modifyCity} = citiesControllers;

Router.route('/cities')
 .get(getAllCities)
 .post(addCity)

 Router.route('/cities/:id')
 .get(getCity)
 .delete(deteleCity)
 .put(modifyCity)

 module.exports = Router
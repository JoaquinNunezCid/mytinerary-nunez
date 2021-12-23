const express = require('express')
const citiesControllers = require('../controllers/citiesControllers')
const itinerariesControllers=require("../controllers/itinerariesControllers")
const userController = require ('../controllers/userController')
const activitiesControllers = require('../controllers/activitiesControllers')
const passport = require("../config/passport")
const Router = require('express').Router();
const validator = require("../controllers/validator")

const {getAllCities, getCity, addCity, deteleCity, modifyCity} = citiesControllers;
const {obtenerTodasLosItinerarios,  cargarUnItinerario, obtenerUnItinerario,obtenerItinerariosCiudades,likeDislikeItinerary,controlComment} = itinerariesControllers
const {addNewUser, logInUser, deleteUser, editUser, verifyToken} = userController
const{getActivitiesOfOneItinerary,addActivity }=activitiesControllers

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

Router.route("/user/signup")
 .post(validator,addNewUser)
 
Router.route("/user/signin")
 .post(logInUser)
 
Router.route("/user/:id")
 .delete(deleteUser)
 .put(editUser)
 
Router.route ("/verifyToken")
 .get(
     passport.authenticate('jwt', {session:false}),
     verifyToken
     )

Router.route("/itinerary/like/:id")
    .put(passport.authenticate("jwt", {session: false}),likeDislikeItinerary),
     
Router.route("/comments/:id")
    .put(passport.authenticate("jwt", {session: false}),controlComment)
     
Router.route("/activities")
    .post(addActivity)
     
Router.route("/activities/:itineraryId")
    .get(getActivitiesOfOneItinerary);

module.exports = Router
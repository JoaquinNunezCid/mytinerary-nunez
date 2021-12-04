const Itinerary = require("../models/Itinerary")

const itinerariesControllers = {
    getItineraries: async (req, res) => {
        try {
            let itineraries = await Itinerary.find()
            res.json({success: true, response: itineraries})
        }catch(error){
            res.json({success: false, response: error})
        }
    },
    
    getItineraryById: async (req, res) => {
        let itinerary = await Itinerary.findOne({_id : req.params.id})
        res.json({success: true, response: itinerary})
    },

    newItinerary: async (req, res) => {
        let newItinerary = new Itinerary({ ...req.body}) 
        try {
            const itineraryN = await newItinerary.save()
            res.json({success: true, response: itineraryN})    
        }catch(error){
        res.json({success: false, response: error})
    }
    },

    deleteItinerary: async (req, res) => {
        try {
            let itineraryDeleted = await Itinerary.findOneAndDelete({_id: req.params.id})
            res.json({success: true, response: itineraryDeleted})
        }catch(error){
        res.json({success: false, response: error})
    }
    },

    changeItinerary: async (req, res) => {
        try {
            let itineraryChanged = await Itinerary.findOneAndUpdate({_id: req.params.id}, {...req.body}, {new : true})
            res.json({success: true, response: itineraryChanged})
        }catch(error){
        res.json({success: false, response: error})
    }
    },
    }



module.exports = itinerariesControllers
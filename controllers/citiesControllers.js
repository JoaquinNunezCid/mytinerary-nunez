const City = require('../models/City')

const citiesControllers = {
  getAllCities: async(req, res) => {
    let cities
    let error = null

    try { 
      cities = await City.find()
    }catch(err) {
      error = err 
      console.log(error)
    }

    res.json({
      response: error ? 'ERROR' : cities, 
      success: error ? false : true,
      error: error
    })

  },
  addCity: (req, res) => {
    const {city, image, alt, badge, country, description} = req.body
    new City({city, image, alt, badge, country, description}).save()
    .then((response) => res.json({response}))
  },
  getCity: async(req, res) => {

    let cities
    const id = req.params.id

    try {
      cities = await City.findOne({_id:id})
    } catch(err) {
      console.log(err)
    }

    res.json({response: cities, success: true})
    
  },
  deteleCity: async(req, res) => {

    const id = req.params.id
    let cities
    try {
      await City.findOneAndDelete({_id:id})
      cities = await City.find()
    } catch(err) {
      console.log(err)
    }

    res.json({response: cities, success: true})
  },
  modifyCity: async(req, res) => {
    let id = req.params.id
    let cities = req.body
    let update
    console.log(cities);
    try { 
      update = await City.findOneAndUpdate({_id:id}, cities, {new:true})
      console.log(update)
    } catch(err) {
      console.log(err)
    }
    res.json({success:update ? true : false})
  }

};
module.exports = citiesControllers;
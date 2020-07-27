/**
 * API - POST /passenger/rate-driver
 * DESC - Passenger rating for driver
 */
const Ride = require('../models/Ride')
const rateDriver = async (req, res) => {
    try{
        const {id, rating} = req.body
        if(!id || !rating) {
            throw new Error('Please enter id and rating')
        }
        const parsedRating = parseInt(rating)
        if(parsedRating < 0 || parsedRating > 5) {
            throw new Error('Please rate between 0 to 5')
        }
        const ride = await Ride.findById(id)
        if(!ride) {
            throw new Error('Invalid ride id')
        }
        ride.driverRating = parsedRating
        await ride.save()
        res.send({message: 'Thanks for rating!'})
    } catch(err){
        res.status(400).send({err: err.message})
    }
}

module.exports = rateDriver;
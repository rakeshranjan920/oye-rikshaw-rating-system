/**
 * API - GET /driver/rating/:phone
 * DESC - Get driver ratings 
 */
const Driver = require('../models/Driver')

const driverRating = async (req, res) => {
    try{
        const {phone} = req.params
        if(!phone || phone.length !== 10) {
            throw new Error('Please enter a valid phone number')
        }
        const driver = await Driver.findOne({phone})
        if(!driver) {
            throw new Error('This number is not registered to any driver')
        }
        await driver.populate('rides').execPopulate()
        const {rides} = driver
        if(rides.length === 0) {
            res.send({message: 'You not been rated yet!'})
        } else {
            let sum = 0;
            let totalRatings = 0;
            for(let i = 0; i<rides.length; i++) {
                if(rides[i].driverRating) {
                    sum += rides[i].driverRating
                    totalRatings++
                }
            }
            if(totalRatings === 0) {
                res.send({message: 'You have not been rated yet!'})
            } else {
                sum = sum / totalRatings
                res.send({rating: sum})
            }
        }
    } catch(err){
        res.status(400).send({err: err.message})
    }
};

module.exports = driverRating;
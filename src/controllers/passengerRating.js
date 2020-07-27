/**
 * API - GET /passenger/rating/:phone
 * DESC - Get passenger ratings
 */
const User = require('../models/User')

const passengerRating = async (req, res) => {
    try{
        const {phone} = req.params
        if(!phone || phone.length !== 10) {
            throw new Error('Please enter a valid phone number')
        }
        const user = await User.findOne({phone})
        if(!user) {
            throw new Error('This number is not registered to any passenger')
        }
        await user.populate('rides').execPopulate()
        const {rides} = user
        if(!rides || rides.length === 0) {
            res.send({message: 'You not been rated yet!'})
        } else {
            let sum = 0;
            let totalRatings = 0;
            for(let i = 0; i<rides.length; i++) {
                if(rides[i].passengerRating) {
                    sum += rides[i].passengerRating
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

module.exports = passengerRating;
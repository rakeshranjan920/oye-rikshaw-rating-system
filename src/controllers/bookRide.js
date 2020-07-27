/**
 * API - /ride/book-ride
 * DESC - Book ride
 */

const User = require('../models/User')
const Ride = require('../models/Ride')
const Driver = require('../models/Driver')

const bookRide = async (req, res) => {
    try{
        const {passengerPhone, driverPhone} = req.body
        if(!passengerPhone || !driverPhone) {
            throw new Error("Please enter user's and driver's phone number")
        }
        if(passengerPhone.length !== 10 || driverPhone.length !== 10) {
            throw new Error('Phone number should be of 10 digits')
        }
        const user = await User.findOne({phone: passengerPhone})
        if(!user) {
            throw new Error('This phone is not linked to any user')
        }
        const driver = await Driver.findOne({phone: driverPhone})
        if(!driver) {
            throw new Error('This phone is not linked to any driver')
        }
        
        const ride = new Ride({
            driver: driverPhone,
            passenger: passengerPhone
        })
        await ride.save()
        user.rides.push(ride._id)
        await user.save()
        driver.rides.push(ride._id)
        await driver.save()

        res.send(ride)
    } catch(err){
        res.status(400).send({err: err.message})
    }
}

module.exports = bookRide;
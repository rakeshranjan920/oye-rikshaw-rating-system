/**
 * API - /passenger/create
 * DESC - Create Passenger
 */
const User = require('../models/User')

const createPassenger = async (req, res) => {
    try{
        const {name, phone} = req.body
        if(!phone || !name) {
            throw new Error('Please enter name and phone')
        }
        const user = new User({
            name,
            phone
        })
        await user.save()
        res.send(user)
    } catch(err){
        res.status(400).send({err: err.message})
    }
};

module.exports = createPassenger;
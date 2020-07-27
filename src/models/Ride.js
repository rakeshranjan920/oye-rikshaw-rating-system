const mongoose = require('mongoose')

const ride = new mongoose.Schema({
    driver: {
        type: String,
        required: true,
        validate(val) {
            if(val && val.length !== 10) {
                throw new Error('Enter a valid phone number')
            }
        }
    },
    passenger: {
        type: String,
        required: true,
        validate(val) {
            if(val && val.length !== 10) {
                throw new Error('Enter a valid phone number')
            }
        }
    },
    driverRating: {
        type: Number,
        validate(val) {
            if(val && val > 5 || val < 0) {
                throw new Error('Rating must be between 0 to 5')
            }
        }
    },
    passengerRating: {
        type: Number,
        validate(val) {
            if(val && val > 5 || val < 0) {
                throw new Error('Rating must be between 0 to 5')
            }
        }
    }
})

const Ride = mongoose.model('Ride', ride)
module.exports = Ride
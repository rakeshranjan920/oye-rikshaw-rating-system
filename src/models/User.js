const mongoose = require('mongoose')

const user = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate(val) {
            if(val && val.length !== 10) {
                throw new Error('Enter a valid phone number')
            }
        }
    },
    rides: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ride'
    }]
})

const User = mongoose.model('User', user)
module.exports = User
const express = require('express');
const router = express.Router();

const createPassenger = require('../controllers/createPassenger');
const rateDriver = require('../controllers/rateDriver');
const passengerRating = require('../controllers/passengerRating');

router.route('/create').post(createPassenger);

router.route('/rate-driver').post(rateDriver);

router.route('/rating/:phone').get(passengerRating);

module.exports = router
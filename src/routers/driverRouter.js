const express = require('express');
const router = express.Router();

const createDriver = require('../controllers/createDriver');
const ratePassenger = require('../controllers/ratePassenger');
const driverRating = require('../controllers/driverRating');

router.route('/create').post(createDriver)

router.route('/rate-passenger').post(ratePassenger);

router.route('/rating/:phone').get(driverRating);

module.exports = router
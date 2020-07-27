const express = require('express');
const router = express.Router();

const bookRide = require('../controllers/bookRide');

router.route('/book-ride').post(bookRide);

module.exports = router
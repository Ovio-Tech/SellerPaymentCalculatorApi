const express = require('express');

const router = express.Router();

const feeController = require('../Controllers/feeController');

router.get('/sellerEarning', feeController.feeCalculator);

module.exports = router;
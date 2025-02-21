const express = require('express');
const { getIntervals } = require('./movies.controller');

const router = express.Router();

router.get('/awards/intervals', getIntervals);

module.exports = router;
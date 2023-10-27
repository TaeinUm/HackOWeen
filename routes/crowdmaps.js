// crowdmaps.js

const express = require('express');
const router = express.Router();
const crowdMapController = require('../controllers/crowdmapController');

router.get('/crowd-map', crowdMapController.getCrowdMapData);

module.exports = router;

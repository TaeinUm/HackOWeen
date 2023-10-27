// crowdmaps.js

const express = require('express');
const router = express.Router();
const crowdMapController = require('../controllers/crowdmapController');

router.get('/', crowdMapController.getCrowdMapData);

module.exports = router;

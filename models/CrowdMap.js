// CrowdMap.js

const mongoose = require('mongoose');

const crowdMapSchema = new mongoose.Schema({
  name: String,
  geometry: {
    type: { type: String },
    coordinates: [Number]
  },
  properties: {
    name: String,
    data: Number,
    type: String
  }
});

const CrowdMap = mongoose.model('CrowdMap', crowdMapSchema, 'crowd_map');

module.exports = CrowdMap;

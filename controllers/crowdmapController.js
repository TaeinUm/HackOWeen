// crowdmapController.js

const CrowdMap = require('../models/CrowdMap');

exports.getCrowdMapData = async (req, res) => {
  try {
    const data = await CrowdMap.find();
    res.json(data);
  } catch (err) {
    console.error('Error fetching crowd map data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

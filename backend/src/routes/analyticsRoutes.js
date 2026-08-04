const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware.js');
const {
  getSummary,
  getLanguageDistribution,
  getThreatLevels,
  getTrend,
} = require('../controllers/analyticsController.js');

router.get('/summary', protect, getSummary);
router.get('/language-distribution', protect, getLanguageDistribution);
router.get('/threat-levels', protect, getThreatLevels);
router.get('/trend', protect, getTrend);

module.exports = router;
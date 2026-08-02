const express = require('express');
const router = express.Router();
const { createAnalysis, getMyAnalyses } = require('../controllers/analysisController.js');
const { protect } = require('../middleware/authMiddleware.js');


router.post('/', protect, createAnalysis);
router.get('/', protect, getMyAnalyses);

module.exports = router;
const Analysis = require('../models/Analysis.js');
const { analyzeCode, analyzeContent } = require('../services/llmServices.js');


const createAnalysis = async (req, res) => {
  try {
    const { type, inputText } = req.body;

    if (!type || !inputText) {
      return res.status(400).json({ message: 'type and inputText are required' });
    }

     let result;
    if (type === 'code') {
      result = await analyzeCode(inputText);
    } else if (type === 'content') {
      result = await analyzeContent(inputText);
    } else {
      return res.status(400).json({ message: 'type must be "code" or "content"' });
    }

    const analysis = await Analysis.create({
      user: req.user._id,
      type,
      inputText,
      result,
    });

    res.status(201).json(analysis);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Analysis failed', error: err.message });
  }
};


const getMyAnalyses = async (req, res) => {
  try {
    const analyses = await Analysis.find({ user: req.user._id }).sort({ createdAt: -1 });
    res.status(200).json(analyses);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { createAnalysis, getMyAnalyses };
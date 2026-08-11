const Analysis = require('../models/Analysis');

// Helper — query filters build karo (date range + language) reusable
const buildMatchStage = (userId, query) => {
  const match = { user: userId };

  if (query.startDate || query.endDate) {
    match.createdAt = {};
    if (query.startDate) match.createdAt.$gte = new Date(query.startDate);
    if (query.endDate) match.createdAt.$lte = new Date(query.endDate);
  }

  if (query.language) {
    match.language = query.language;
  }

  return match;
};

// 1. KPI summary cards
const getSummary = async (req, res) => {
  try {
    const match = buildMatchStage(req.user._id, req.query);

    const summary = await Analysis.aggregate([
      { $match: match },
      // No matter how many different programming languages the user has scanned—whether it's 10 JavaScript files, 5 Python scripts, or 2 C++ programs—the $match stage isolates all scans belonging to that specific user, and then _id: null lumps all of those scans into one combined group.
      {
        $group: {
          _id: null, // not to split the documents into separate categories (like language or date).
          totalScans: { $sum: 1 },
          avgComplexity: { $avg: '$complexityScore' },
          totalTokens: { $sum: '$tokensUsed' },
          threatsFound: {
            $sum: {
              $cond: [{ $in: ['$threatLevel', ['Medium', 'Critical']] }, 1, 0],
            },
          },
        },
      },
    ]);

    res.status(200).json(
      summary[0] || { totalScans: 0, avgComplexity: 0, totalTokens: 0, threatsFound: 0 }
    );
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 2. Language distribution (pie chart)
const getLanguageDistribution = async (req, res) => {
  try {
    const match = buildMatchStage(req.user._id, req.query);

    const data = await Analysis.aggregate([
      { $match: match },
      { $group: { _id: '$language', count: { $sum: 1 } } },
      { $project: { language: '$_id', count: 1, _id: 0 } },
      { $sort: { count: -1 } },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 3. Threat level distribution (bar chart)
const getThreatLevels = async (req, res) => {
  try {
    const match = buildMatchStage(req.user._id, req.query);

    const data = await Analysis.aggregate([
      { $match: match },
      { $group: { _id: '$threatLevel', count: { $sum: 1 } } },
      { $project: { level: '$_id', count: 1, _id: 0 } },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// 4. Complexity & token trend over time (line chart) — grouped by day
const getTrend = async (req, res) => {
  try {
    const match = buildMatchStage(req.user._id, req.query);

    const data = await Analysis.aggregate([
      { $match: match },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          avgComplexity: { $avg: '$complexityScore' },
          totalTokens: { $sum: '$tokensUsed' },
          scans: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
      { $project: { date: '$_id', avgComplexity: 1, totalTokens: 1, scans: 1, _id: 0 } },
    ]);

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getSummary, getLanguageDistribution, getThreatLevels, getTrend };
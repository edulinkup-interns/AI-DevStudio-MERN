const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  tier: { // payment status decide karega rate limit
    type: String,
    enum: ['free', 'paid'],
    default: 'free',
  },
  analysesUsedToday: {
    type: Number,
    default: 0,
  },
  lastAnalysisDate: {
    type: Date,
  },

  // analysesUsedToday + lastAnalysisDate → free tier ka daily counter reset karne ke liye use hoga baad me
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
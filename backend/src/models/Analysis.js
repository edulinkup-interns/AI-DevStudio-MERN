const mongoose = require('mongoose');
const analysisSchema = new mongoose.Schema({
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['code', 'content'],
    required: true,
  },
  inputText: {
    type: String,
    required: true,
  },
  result: {
    type: Object,   // structured JSON response from Gemini
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Analysis', analysisSchema);
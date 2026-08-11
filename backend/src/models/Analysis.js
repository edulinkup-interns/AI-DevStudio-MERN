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
    type: Object, //Code scan aur Content scan ke response fields 100% alag hote hain. Database me bina kisi restriction ke dono ka raw JSON data save ho sake, isiliye type ko Object rakha hai.
    required: true,
  },
  // --- Naye fields, analytics ke liye ---
  language: {
    type: String,
    default: 'unknown', // e.g. "JavaScript", "Python"
  },
  threatLevel: {
    type: String,
    enum: ['Low', 'Medium', 'Critical'],
    default: 'Low',
  },
  complexityScore: {
    type: Number,
    default: 0, // 0-10 scale
  },
  tokensUsed: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });

// Compound index — filtering by user + date range bahut fast query banayega
analysisSchema.index({ user: 1, createdAt: -1 }); //user ascending order and createdat descending order 

module.exports = mongoose.model('Analysis', analysisSchema);
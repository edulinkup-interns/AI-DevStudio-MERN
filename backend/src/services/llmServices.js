const { GoogleGenerativeAI } = require('@google/generative-ai');
const { codeAnalysisPrompt, contentAnalysisPrompt } = require('../utils/prompt.js');

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const cleanJsonResponse = (text) => {
  // Gemini sometimes wraps JSON in ```json ... ``` — strip that
  return text.replace(/```json|```/g, '').trim();
};

const analyzeCode = async (code) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });
  const result = await model.generateContent(codeAnalysisPrompt(code));
  const responseText = result.response.text();
  return JSON.parse(cleanJsonResponse(responseText));
};

const analyzeContent = async (text) => {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  const result = await model.generateContent(contentAnalysisPrompt(text));
  const responseText = result.response.text();
  return JSON.parse(cleanJsonResponse(responseText));
};

module.exports = { analyzeCode, analyzeContent };
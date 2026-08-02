const codeAnalysisPrompt = (code) => `
You are a senior software engineer performing a code review.
Analyze the following code snippet and return ONLY a valid JSON object (no markdown, no extra text) with this exact structure:

{
  "language": "detected programming language",
  "performanceIssues": ["issue 1", "issue 2"],
  "securityVulnerabilities": ["issue 1", "issue 2"],
  "suggestions": ["suggestion 1", "suggestion 2"],
  "overallScore": "score out of 10"
}

Code:
${code}
`;

const contentAnalysisPrompt = (text) => `
You are an SEO and content quality expert.
Analyze the following blog/content draft and return ONLY a valid JSON object (no markdown, no extra text) with this exact structure:

{
  "readabilityScore": "score out of 10",
  "seoSuggestions": ["suggestion 1", "suggestion 2"],
  "keywordOpportunities": ["keyword 1", "keyword 2"],
  "improvementAreas": ["area 1", "area 2"]
}

Content:
${text}
`;

module.exports = { codeAnalysisPrompt, contentAnalysisPrompt };
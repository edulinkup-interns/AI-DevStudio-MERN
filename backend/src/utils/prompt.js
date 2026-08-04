const codeAnalysisPrompt = (code) => `
You are a senior software engineer performing a code review.
Analyze the following code snippet and return ONLY a valid JSON object (no markdown, no extra text) with this exact structure:

{
  "language": "detected programming language name",
  "performanceIssues": ["issue 1", "issue 2"],
  "securityVulnerabilities": ["issue 1", "issue 2"],
  "suggestions": ["suggestion 1", "suggestion 2"],
  "overallScore": 8,
  "complexityScore": 5,
  "threatLevel": "Low"
}

Rules:
- "overallScore" and "complexityScore" must be integers from 0 to 10.
- "threatLevel" must be exactly one of: "Low", "Medium", "Critical" — based on severity of securityVulnerabilities found.

Code:
${code}
`;

const contentAnalysisPrompt = (text) => `
You are an SEO and content quality expert.
Analyze the following blog/content draft and return ONLY a valid JSON object (no markdown, no extra text) with this exact structure:

{
  "readabilityScore": 7,
  "seoSuggestions": ["suggestion 1", "suggestion 2"],
  "keywordOpportunities": ["keyword 1", "keyword 2"],
  "improvementAreas": ["area 1", "area 2"]
}

Content:
${text}
`;

module.exports = { codeAnalysisPrompt, contentAnalysisPrompt };
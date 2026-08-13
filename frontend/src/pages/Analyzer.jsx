import { useState } from 'react';
import api from '../services/api.js';

const Analyzer = () => {
  const [type, setType] = useState('code');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!inputText.trim()) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const { data } = await api.post('/analysis', { type, inputText });
      setResult(data);
    } catch (err) {
      setError(err.response?.data?.message || 'Analysis failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Analyzer</h1>

      {/* Type toggle */}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setType('code')}
          className={`px-4 py-2 rounded-lg ${type === 'code' ? 'bg-indigo-600' : 'bg-slate-700'}`}
        >
          Code
        </button>
        <button
          onClick={() => setType('content')}
          className={`px-4 py-2 rounded-lg ${type === 'content' ? 'bg-indigo-600' : 'bg-slate-700'}`}
        >
          Content
        </button>
      </div>

      {/* Input */}
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder={type === 'code' ? 'Paste your code here...' : 'Paste your blog/content draft here...'}
        rows={10}
        className="w-full p-4 rounded-lg bg-slate-800 text-white outline-none font-mono text-sm mb-4"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 px-6 py-3 rounded-lg font-medium mb-6"
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>

      {error && <p className="text-red-400 mb-4">{error}</p>}

      {/* Result */}
      {result && (
        <div className="bg-slate-800 p-6 rounded-lg space-y-4">
          <h2 className="text-lg font-semibold">Results</h2>
          <pre className="text-sm text-slate-300 whitespace-pre-wrap overflow-x-auto">
            {JSON.stringify(result.result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default Analyzer;
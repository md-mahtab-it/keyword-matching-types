import { useState, useCallback } from 'react';
import { Copy, Trash2, AlertCircle, ArrowRight } from 'lucide-react';

type MatchType = 'broad' | 'modified' | 'phrase' | 'exact' | 'lowercase';

export default function KeywordTool() {
  const [keywords, setKeywords] = useState(['', '', '']);
  const [results, setResults] = useState('');
  const [separator, setSeparator] = useState<'space' | 'nothing' | 'dash'>('space');
  const [selectedTypes, setSelectedTypes] = useState<MatchType[]>([]);

  const handleKeywordsChange = (index: number, value: string) => {
    const newKeywords = [...keywords];
    newKeywords[index] = value;
    setKeywords(newKeywords);
  };

  const handleSeparatorChange = (newSeparator: 'space' | 'nothing' | 'dash') => {
    setSeparator(newSeparator);
  };

  const handleTypeChange = (type: MatchType) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleSelectAll = () => {
    const allTypes: MatchType[] = ['broad', 'modified', 'phrase', 'exact', 'lowercase'];
    setSelectedTypes(selectedTypes.length === allTypes.length ? [] : allTypes);
  };

  const generateKeywords = useCallback(() => {
    const validKeywords = keywords.filter(k => k.trim());
    if (!validKeywords.length || !selectedTypes.length) return;

    let result = '';
    validKeywords.forEach(keyword => {
      const words = keyword.trim().split(/\s+/);
      selectedTypes.forEach(type => {
        let processedKeyword = '';
        switch(type) {
          case 'broad':
            processedKeyword = words.join(separator === 'space' ? ' ' : separator === 'dash' ? '-' : '');
            break;
          case 'modified':
            processedKeyword = '+' + words.join(' +');
            break;
          case 'phrase':
            processedKeyword = `"${words.join(separator === 'space' ? ' ' : separator === 'dash' ? '-' : '')}"`;
            break;
          case 'exact':
            processedKeyword = `[${words.join(separator === 'space' ? ' ' : separator === 'dash' ? '-' : '')}]`;
            break;
          case 'lowercase':
            processedKeyword = words.join(separator === 'space' ? ' ' : separator === 'dash' ? '-' : '').toLowerCase();
            break;
        }
        result += processedKeyword + '\n';
      });
    });
    setResults(result.trim());
  }, [keywords, selectedTypes, separator]);

  const copyResults = () => {
    navigator.clipboard.writeText(results);
  };

  const clearFields = () => {
    setKeywords(['', '', '']);
    setResults('');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex items-start space-x-2 mb-6 p-4 bg-blue-50 rounded-lg text-blue-800">
          <AlertCircle className="w-5 h-5 mt-0.5" />
          <p className="text-sm">
            Enter your keywords in the text areas below. Each keyword should be on a new line. 
            Select your desired match types and click "Generate" to create your keyword list.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {keywords.map((keyword, index) => (
            <div key={index} className="space-y-2">
              <label className="text-sm font-medium text-gray-700">
                Keyword Set {index + 1}
              </label>
              <textarea
                value={keyword}
                onChange={(e) => handleKeywordsChange(index, e.target.value)}
                placeholder="Enter keywords (one per line)"
                className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50"
                rows={5}
              />
            </div>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 inline-flex items-center justify-center text-sm mr-2">1</span>
                Choose Separator
              </h3>
              <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                {[
                  { value: 'space', label: 'Space' },
                  { value: 'nothing', label: 'Nothing' },
                  { value: 'dash', label: 'Dash (-)' }
                ].map(({ value, label }) => (
                  <label key={value} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      checked={separator === value}
                      onChange={() => handleSeparatorChange(value as any)}
                      className="form-radio text-blue-600"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 inline-flex items-center justify-center text-sm mr-2">2</span>
                Select Match Types
              </h3>
              <div className="space-y-2 bg-gray-50 p-4 rounded-lg">
                <label className="flex items-center space-x-2 pb-2 border-b">
                  <input
                    type="checkbox"
                    checked={selectedTypes.length === 5}
                    onChange={handleSelectAll}
                    className="form-checkbox text-blue-600"
                  />
                  <span className="font-medium">SELECT ALL</span>
                </label>
                {[
                  { type: 'broad', label: 'Broad match' },
                  { type: 'modified', label: 'Modified broad match (+)' },
                  { type: 'phrase', label: '"Phrase match"' },
                  { type: 'exact', label: '[Exact match]' },
                  { type: 'lowercase', label: 'Change to lowercase' },
                ].map(({ type, label }) => (
                  <label key={type} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedTypes.includes(type as MatchType)}
                      onChange={() => handleTypeChange(type as MatchType)}
                      className="form-checkbox text-blue-600"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 flex items-center">
              <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-800 inline-flex items-center justify-center text-sm mr-2">3</span>
              Generated Keywords
            </h3>
            <div className="relative">
              <textarea
                value={results}
                readOnly
                placeholder="Your generated keywords will appear here..."
                className="w-full p-4 border rounded-lg h-[330px] bg-gray-50"
              />
              {results && (
                <button
                  onClick={copyResults}
                  className="absolute right-4 bottom-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2 text-sm"
                >
                  <Copy className="w-4 h-4" />
                  <span>Copy results</span>
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex space-x-4 justify-center pt-6 border-t">
          <button
            onClick={generateKeywords}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center space-x-2"
          >
            <span>Generate Keywords</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={clearFields}
            className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition flex items-center space-x-2"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear All</span>
          </button>
        </div>
      </div>
    </div>
  );
}
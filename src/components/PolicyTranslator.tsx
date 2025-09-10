import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, ArrowRight, Loader2, Lightbulb, AlertCircle } from 'lucide-react';
import { policyExamples } from '../data/mockData';

interface PolicyTranslatorProps {
  onBack: () => void;
}

const PolicyTranslator: React.FC<PolicyTranslatorProps> = ({ onBack }) => {
  const [inputText, setInputText] = useState(policyExamples[0].original);
  const [isTranslating, setIsTranslating] = useState(false);
  const [translatedText, setTranslatedText] = useState(policyExamples[0].translated);
  const [impact, setImpact] = useState(policyExamples[0].impact);
  const [selectedExample, setSelectedExample] = useState(0);

  const handleTranslate = () => {
    setIsTranslating(true);
    
    // Find matching example or use default
    const matchingExample = policyExamples.find(ex => 
      ex.original.toLowerCase().includes(inputText.toLowerCase().substring(0, 20))
    ) || policyExamples[0];

    setTimeout(() => {
      setTranslatedText(matchingExample.translated);
      setImpact(matchingExample.impact);
      setIsTranslating(false);
    }, 2000);
  };

  const loadExample = (index: number) => {
    setSelectedExample(index);
    setInputText(policyExamples[index].original);
    setTranslatedText(policyExamples[index].translated);
    setImpact(policyExamples[index].impact);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
      {/* Header */}
      <div className="mb-8">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors mb-6 bg-white/10 backdrop-blur-lg rounded-xl px-4 py-2 border border-white/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
        
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Plain English Policy Translator</h1>
            <p className="text-white/70">Transform political jargon into clear, understandable language</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4">Policy Text Input</h2>
            
            {/* Example Buttons */}
            <div className="mb-4">
              <p className="text-sm text-white/70 mb-3">Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {policyExamples.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => loadExample(index)}
                    className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 ${
                      selectedExample === index
                        ? 'bg-purple-500/30 text-purple-200 border border-purple-400/50'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    {example.category}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste political jargon or complex policy text here..."
              className="w-full h-40 p-4 bg-white/10 border border-white/20 rounded-xl resize-none focus:ring-2 focus:ring-purple-400/50 focus:border-transparent text-white placeholder-white/50 backdrop-blur-lg"
            />

            <button
              onClick={handleTranslate}
              disabled={!inputText.trim() || isTranslating}
              className="w-full mt-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isTranslating ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Translating...</span>
                </>
              ) : (
                <>
                  <ArrowRight className="w-5 h-5" />
                  <span>Translate to Plain English</span>
                </>
              )}
            </button>
          </div>

          {/* Tips */}
          <div className="bg-blue-500/20 rounded-xl p-6 border border-blue-400/30 backdrop-blur-lg">
            <div className="flex items-start space-x-3">
              <Lightbulb className="w-6 h-6 text-blue-600 mt-0.5" />
              <div>
                <h3 className="font-semibold text-white mb-2">Pro Tips</h3>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Paste entire policy statements for best results</li>
                  <li>• Works great with manifesto excerpts</li>
                  <li>• Try different examples to see the AI in action</li>
                  <li>• Get impact analysis alongside translations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Output Section */}
        <div className="space-y-6">
          {/* Plain English Translation */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">Plain English Translation</h3>
            
            {isTranslating ? (
              <div className="flex items-center justify-center h-32 bg-purple-50 rounded-lg">
                <div className="text-center">
                  <Loader2 className="w-8 h-8 animate-spin text-purple-600 mx-auto mb-2" />
                  <p className="text-purple-700 text-sm">Analyzing and simplifying...</p>
                </div>
              </div>
            ) : (
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-slate-800 leading-relaxed">{translatedText}</p>
              </div>
            )}
          </div>

          {/* Impact Analysis */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4">What This Means for You</h3>
            
            {isTranslating ? (
              <div className="flex items-center justify-center h-24 bg-orange-50 rounded-lg">
                <div className="text-center">
                  <Loader2 className="w-6 h-6 animate-spin text-orange-600 mx-auto mb-2" />
                  <p className="text-orange-700 text-sm">Analyzing impact...</p>
                </div>
              </div>
            ) : (
              <div className="bg-orange-50 rounded-lg p-4 border border-orange-200">
                <div className="flex items-start space-x-3">
                  <AlertCircle className="w-5 h-5 text-orange-600 mt-0.5" />
                  <p className="text-slate-800 leading-relaxed">{impact}</p>
                </div>
              </div>
            )}
          </div>

          {/* Translation Stats */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-lg p-6 text-white">
            <h3 className="text-lg font-bold mb-4">Translation Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400 mb-1">
                  {Math.max(10, inputText.split(' ').length - translatedText.split(' ').length)}
                </div>
                <div className="text-slate-300 text-sm">Words Simplified</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-1">92%</div>
                <div className="text-slate-300 text-sm">Clarity Improvement</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">How Our AI Translation Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">1. Analyze Context</h3>
            <p className="text-slate-600 text-sm">Our AI understands the political context and identifies complex terms</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">2. Simplify Language</h3>
            <p className="text-slate-600 text-sm">Complex jargon is translated into everyday language while preserving meaning</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="font-semibold text-slate-800 mb-2">3. Explain Impact</h3>
            <p className="text-slate-600 text-sm">We provide context on what these policies mean for everyday citizens</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyTranslator;
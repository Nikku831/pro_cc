import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, ArrowRight, Copy, Check } from 'lucide-react';

interface PolicyTranslatorProps {
  onBack: () => void;
}

function PolicyTranslator({ onBack }: PolicyTranslatorProps) {
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [copied, setCopied] = useState(false);

  const samplePolicies = [
    {
      title: "Healthcare Policy",
      original: "We commit to implementing a comprehensive integrated care framework that leverages multi-disciplinary healthcare delivery models while optimizing resource allocation through evidence-based population health management strategies.",
      simple: "We will improve healthcare by having different types of doctors work together better and use research to decide how to best help people in each area stay healthy."
    },
    {
      title: "Economic Policy", 
      original: "Our fiscal strategy prioritizes counter-cyclical investment mechanisms designed to stimulate aggregate demand through targeted infrastructure expenditure and human capital development initiatives.",
      simple: "We will spend money on building things like roads and training people when the economy is slow, to create jobs and help the economy grow."
    },
    {
      title: "Climate Policy",
      original: "We propose establishing a carbon pricing mechanism coupled with renewable energy transition subsidies and circular economy implementation protocols to achieve net-zero emissions by 2050.",
      simple: "We will make pollution more expensive, help pay for clean energy, and encourage recycling to stop adding harmful gases to the air by 2050."
    }
  ];

  const handleTranslate = () => {
    if (!inputText.trim()) return;
    
    setIsTranslating(true);
    setTimeout(() => {
      const simplified = `This policy means: ${inputText.toLowerCase().replace(/complex|comprehensive|strategic|framework|mechanism/g, 'plan').replace(/implementation|establishment|optimization/g, 'doing')}. In simple terms, it's about making things work better for regular people.`;
      setTranslatedText(simplified);
      setIsTranslating(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const loadSample = (sample: typeof samplePolicies[0]) => {
    setInputText(sample.original);
    setTranslatedText(sample.simple);
  };

  return (
    <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-on-surface/70 hover:text-on-surface transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="bg-surface/50 backdrop-blur-lg rounded-2xl border border-gray-light/20 p-8">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-pink to-pink-hover rounded-xl flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-on-surface" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-on-surface">Policy Translator</h1>
              <p className="text-on-surface/70">Transform complex political jargon into plain English</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Input Side */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-on-surface">Complex Policy Text</h3>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste complex policy text here..."
                className="w-full h-48 bg-surface/60 border border-gray-light/30 rounded-xl p-4 text-on-surface placeholder-on-surface/50 resize-none focus:outline-none focus:ring-2 focus:ring-pink/50 focus:border-transparent"
              />
              <button
                onClick={handleTranslate}
                disabled={!inputText.trim() || isTranslating}
                className="w-full bg-pink hover:bg-pink-hover text-bg px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isTranslating ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-bg/30 border-t-bg rounded-full animate-spin"></div>
                    <span>Translating...</span>
                  </div>
                ) : (
                  <>
                    <span>Translate</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-on-surface">Plain English</h3>
                {translatedText && (
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 text-on-surface/70 hover:text-on-surface transition-colors"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Copied!' : 'Copy'}</span>
                  </button>
                )}
              </div>
              <div className="w-full h-48 bg-surface/60 border border-gray-light/30 rounded-xl p-4 text-on-surface/80">
                {translatedText ? (
                  <p className="leading-relaxed">{translatedText}</p>
                ) : (
                  <p className="text-on-surface/50 italic">Simplified text will appear here...</p>
                )}
              </div>
            </div>
          </div>

          {/* Sample Policies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-on-surface">Try These Examples</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {samplePolicies.map((sample, index) => (
                <button
                  key={index}
                  onClick={() => loadSample(sample)}
                  className="p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-pink/50 transition-all text-left group"
                >
                  <h4 className="font-semibold text-on-surface mb-2 group-hover:text-pink">
                    {sample.title}
                  </h4>
                  <p className="text-sm text-on-surface/70 line-clamp-3">
                    {sample.original.substring(0, 100)}...
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PolicyTranslator;
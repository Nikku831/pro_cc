import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, BarChart3, Clock, Target, Loader2 } from 'lucide-react';
import { mockManifestoData } from '../data/mockData';

interface ManifestoAnalyzerProps {
  onBack: () => void;
}

const ManifestoAnalyzer: React.FC<ManifestoAnalyzerProps> = ({ onBack }) => {
  const [selectedParty, setSelectedParty] = useState<string>('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAnalyze = () => {
    if (!selectedParty) return;
    
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setShowResults(true);
    }, 2500);
  };

  const partyData = mockManifestoData[selectedParty];

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
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Smart Manifesto Analyzer</h1>
            <p className="text-white/70">Transform complex manifestos into digestible insights</p>
          </div>
        </div>
      </div>

      {!showResults ? (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Select a Political Party</h2>
            <p className="text-white/70 mb-8">
              Choose a party manifesto to analyze. Our AI will break down complex policies into clear, actionable insights.
            </p>

            {/* Party Selection Dropdown */}
            <div className="relative mb-8">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-left flex items-center justify-between hover:bg-white/20 transition-all duration-300 backdrop-blur-lg"
              >
                <span className={selectedParty ? 'text-white' : 'text-white/50'}>
                  {selectedParty || 'Choose a party manifesto...'}
                </span>
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl shadow-2xl z-10">
                  {Object.keys(mockManifestoData).map((party) => (
                    <button
                      key={party}
                      onClick={() => {
                        setSelectedParty(party);
                        setIsDropdownOpen(false);
                        setShowResults(false);
                      }}
                      className="w-full px-6 py-4 text-left text-white hover:bg-white/20 transition-all duration-300 first:rounded-t-xl last:rounded-b-xl"
                    >
                      {party}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Analyze Button */}
            <button
              onClick={handleAnalyze}
              disabled={!selectedParty || isAnalyzing}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-10 py-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 mx-auto shadow-lg hover:shadow-xl hover:scale-105"
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Analyzing Manifesto...</span>
                </>
              ) : (
                <>
                  <BarChart3 className="w-5 h-5" />
                  <span>Analyze Manifesto</span>
                </>
              )}
            </button>

            {isAnalyzing && (
              <div className="mt-8 p-6 bg-blue-500/20 rounded-xl border border-blue-400/30 backdrop-blur-lg">
                <div className="flex items-center justify-center space-x-3 mb-4">
                  <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                  <span className="text-white font-medium">AI Analysis in Progress</span>
                </div>
                <div className="text-sm text-white/80 space-y-2">
                  <p>🔍 Extracting key policy promises...</p>
                  <p>📊 Categorizing by policy areas...</p>
                  <p>⏱️ Evaluating specificity and timelines...</p>
                  <p>✅ Generating insights and recommendations...</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {/* Results Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Analysis Results: {selectedParty}</h2>
                <p className="text-slate-600">AI-powered breakdown of manifesto promises and commitments</p>
              </div>
              <button
                onClick={() => setShowResults(false)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Analyze Another
              </button>
            </div>
          </div>

          {/* Policy Distribution Chart */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Policy Area Distribution</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {partyData?.policyAreas.map((area) => (
                  <div key={area.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-slate-700">{area.name}</span>
                      <span className="text-sm text-slate-500">{area.promises} promises</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${area.percentage}%` }}
                      ></div>
                    </div>
                    <div className="text-sm text-slate-500 mt-1">{area.percentage}% of total promises</div>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6">
                <h4 className="font-bold text-slate-800 mb-4">Key Insights</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <Target className="w-5 h-5 text-green-600 mt-0.5" />
                    <span className="text-sm text-slate-700">Strongest focus on {partyData?.policyAreas[0]?.name}</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                    <span className="text-sm text-slate-700">{partyData?.timeline.shortTerm}% short-term promises</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <BarChart3 className="w-5 h-5 text-purple-600 mt-0.5" />
                    <span className="text-sm text-slate-700">{partyData?.specificity.specific}% specific commitments</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promise Highlights */}
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Promise Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {partyData?.highlights.map((promise, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-3">
                    <span className="font-medium text-slate-800">{promise.category}</span>
                    <div className="flex space-x-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        promise.specificity === 'Specific' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {promise.specificity}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        promise.timeline === 'Short-term' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-purple-100 text-purple-700'
                      }`}>
                        {promise.timeline}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-700">{promise.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-6">Analysis Summary</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">{partyData?.totalPromises}</div>
                <div className="text-slate-300">Total Promises</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{partyData?.specificity.specific}%</div>
                <div className="text-slate-300">Specific Commitments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{partyData?.timeline.shortTerm}%</div>
                <div className="text-slate-300">Short-term Goals</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{partyData?.policyAreas.length}</div>
                <div className="text-slate-300">Policy Areas</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManifestoAnalyzer;
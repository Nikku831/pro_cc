import React, { useState } from 'react';
import { ArrowLeft, Upload, FileText, BarChart3, TrendingUp } from 'lucide-react';

interface ManifestoAnalyzerProps {
  onBack: () => void;
}

function ManifestoAnalyzer({ onBack }: ManifestoAnalyzerProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
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
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-hover rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-on-surface" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-on-surface">Manifesto Analyzer</h1>
              <p className="text-on-surface/70">Upload and analyze political manifestos with AI</p>
            </div>
          </div>

          {!analysisComplete ? (
            <div className="space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-light/30 rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="w-12 h-12 text-on-surface/50 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-on-surface mb-2">Upload Manifesto</h3>
                <p className="text-on-surface/70 mb-4">
                  Drag and drop your PDF file here, or click to browse
                </p>
                <button className="bg-primary hover:bg-primary-hover text-bg px-6 py-2 rounded-lg font-medium transition-colors">
                  Choose File
                </button>
              </div>

              {/* Quick Options */}
              <div className="grid md:grid-cols-3 gap-4">
                <button 
                  onClick={handleAnalyze}
                  className="p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-primary/50 transition-all text-left"
                >
                  <FileText className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold text-on-surface">Labor Party 2024</h3>
                  <p className="text-sm text-on-surface/70">Sample manifesto</p>
                </button>
                <button 
                  onClick={handleAnalyze}
                  className="p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-purple/50 transition-all text-left"
                >
                  <FileText className="w-6 h-6 text-purple mb-2" />
                  <h3 className="font-semibold text-on-surface">Conservative 2024</h3>
                  <p className="text-sm text-on-surface/70">Sample manifesto</p>
                </button>
                <button 
                  onClick={handleAnalyze}
                  className="p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-pink/50 transition-all text-left"
                >
                  <FileText className="w-6 h-6 text-pink mb-2" />
                  <h3 className="font-semibold text-on-surface">Liberal Democrat</h3>
                  <p className="text-sm text-on-surface/70">Sample manifesto</p>
                </button>
              </div>

              {/* Analysis Progress */}
              {isAnalyzing && (
                <div className="bg-surface/60 rounded-xl p-6 border border-gray-light/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center animate-pulse">
                      <BarChart3 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-on-surface font-medium">Analyzing manifesto...</span>
                  </div>
                  <div className="w-full bg-gray-light/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-purple h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* Analysis Results */
            <div className="space-y-6">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-2">Analysis Complete</h3>
                <p className="text-on-surface/80">Your manifesto has been analyzed. Here are the key insights:</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-surface/60 border border-gray-light/20 rounded-xl p-6">
                  <h4 className="font-semibold text-on-surface mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-purple mr-2" />
                    Key Policy Areas
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface/70">Healthcare</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-light/20 rounded-full h-2">
                          <div className="bg-purple h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                        <span className="text-sm text-on-surface">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface/70">Economy</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-light/20 rounded-full h-2">
                          <div className="bg-primary h-2 rounded-full" style={{ width: '72%' }}></div>
                        </div>
                        <span className="text-sm text-on-surface">72%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-on-surface/70">Environment</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 bg-gray-light/20 rounded-full h-2">
                          <div className="bg-pink h-2 rounded-full" style={{ width: '68%' }}></div>
                        </div>
                        <span className="text-sm text-on-surface">68%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-surface/60 border border-gray-light/20 rounded-xl p-6">
                  <h4 className="font-semibold text-on-surface mb-4">Analysis Summary</h4>
                  <div className="space-y-2 text-sm text-on-surface/70">
                    <p>• 127 specific policy commitments identified</p>
                    <p>• Strong focus on healthcare and social services</p>
                    <p>• Moderate approach to economic policy</p>
                    <p>• Environmental policies align with net-zero goals</p>
                    <p>• Clear implementation timelines provided</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManifestoAnalyzer;
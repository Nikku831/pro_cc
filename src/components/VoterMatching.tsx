import React, { useState } from 'react';
import { ArrowLeft, Vote, ChevronRight, CheckCircle, Loader2, Award, TrendingUp } from 'lucide-react';
import { quizData, matchResults } from '../data/mockData';

interface VoterMatchingProps {
  onBack: () => void;
}

const VoterMatching: React.FC<VoterMatchingProps> = ({ onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < quizData.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Quiz completed, process results
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        setShowResults(true);
      }, 3000);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setIsProcessing(false);
  };

  const getMatchingResults = () => {
    // Simple logic to determine matches based on answers
    const answerKey = answers.join('');
    return matchResults[answerKey] || matchResults.default;
  };

  const results = showResults ? getMatchingResults() : null;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
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
          <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
            <Vote className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Personalized Voter Matching</h1>
            <p className="text-white/70">Discover which political parties align with your values</p>
          </div>
        </div>
      </div>

      {!showResults && !isProcessing && (
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-white">Question {currentQuestion + 1} of {quizData.length}</span>
              <span className="text-sm text-white/70">{Math.round(((currentQuestion + 1) / quizData.length) * 100)}% Complete</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-500 shadow-lg"
                style={{ width: `${((currentQuestion + 1) / quizData.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">{quizData[currentQuestion].question}</h2>
            <p className="text-white/70">{quizData[currentQuestion].description}</p>
          </div>

          {/* Answer Options */}
          <div className="space-y-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option.value)}
                className="w-full p-6 text-left border border-white/20 rounded-xl hover:border-green-400/50 hover:bg-white/10 transition-all duration-300 group backdrop-blur-lg hover:scale-105"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {option.text}
                    </h3>
                    <p className="text-white/70 text-sm">{option.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-white/50 group-hover:text-green-400 transition-colors" />
                </div>
              </button>
            ))}
          </div>

          {/* Previous Answers */}
          {answers.length > 0 && (
            <div className="mt-8 pt-6 border-t border-white/20">
              <h3 className="text-sm font-medium text-white/70 mb-4">Your Answers So Far:</h3>
              <div className="flex flex-wrap gap-2">
                {answers.slice(0, currentQuestion).map((answer, index) => (
                  <div key={index} className="flex items-center space-x-1 bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm border border-green-400/30">
                    <CheckCircle className="w-3 h-3" />
                    <span>Q{index + 1}: {answer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {isProcessing && (
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Loader2 className="w-8 h-8 animate-spin text-green-600" />
              <span className="text-2xl font-bold text-slate-800">Analyzing Your Preferences</span>
            </div>
            
            <div className="bg-green-50 rounded-lg p-6 mb-6">
              <div className="text-sm text-green-800 space-y-3">
                <p>🧠 Processing your policy preferences...</p>
                <p>🔍 Comparing with party manifestos...</p>
                <p>📊 Calculating compatibility scores...</p>
                <p>✅ Generating personalized recommendations...</p>
              </div>
            </div>

            <p className="text-slate-600">
              Our AI is analyzing your responses against political party positions to find your best matches.
            </p>
          </div>
        </div>
      )}

      {showResults && results && (
        <div className="space-y-8">
          {/* Results Header */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-slate-100">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 mb-2">Your Political Matches</h2>
                <p className="text-slate-600">Based on your responses, here are your top party alignments</p>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Retake Quiz
              </button>
            </div>
          </div>

          {/* Match Results */}
          <div className="space-y-6">
            {results.matches.map((match, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      index === 0 ? 'bg-gradient-to-br from-green-500 to-green-600' : 
                      index === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600' : 
                      'bg-gradient-to-br from-slate-500 to-slate-600'
                    }`}>
                      {index === 0 && <Award className="w-8 h-8 text-white" />}
                      {index === 1 && <TrendingUp className="w-8 h-8 text-white" />}
                      {index === 2 && <Vote className="w-8 h-8 text-white" />}
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold text-slate-800">{match.party}</h3>
                        {index === 0 && (
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                            Best Match
                          </span>
                        )}
                      </div>
                      <p className="text-slate-600">{match.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-4xl font-bold mb-1 ${
                      index === 0 ? 'text-green-600' : 
                      index === 1 ? 'text-blue-600' : 
                      'text-slate-600'
                    }`}>
                      {match.percentage}%
                    </div>
                    <div className="text-slate-500 text-sm">Compatibility</div>
                  </div>
                </div>

                {/* Match Bar */}
                <div className="mb-6">
                  <div className="w-full bg-slate-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-1000 ${
                        index === 0 ? 'bg-gradient-to-r from-green-500 to-green-600' : 
                        index === 1 ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 
                        'bg-gradient-to-r from-slate-500 to-slate-600'
                      }`}
                      style={{ width: `${match.percentage}%` }}
                    ></div>
                  </div>
                </div>

                {/* Reasons */}
                <div>
                  <h4 className="font-semibold text-slate-800 mb-4">Why This Match?</h4>
                  <div className="space-y-3">
                    {match.reasons.map((reason, reasonIndex) => (
                      <div key={reasonIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{reason}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl shadow-lg p-8 text-white">
            <h3 className="text-xl font-bold mb-4">Your Political Profile</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">Economy</div>
                <div className="text-slate-300 text-sm">Prioritizes {answers[0] === 'A' ? 'Social Welfare' : 'Business Growth'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Environment</div>
                <div className="text-slate-300 text-sm">Prefers {answers[1] === 'A' ? 'Regulations' : 'Market Solutions'}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">Education</div>
                <div className="text-slate-300 text-sm">Supports {answers[2] === 'A' ? 'Free Access' : 'Merit-Based Aid'}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VoterMatching;
import React, { useState } from 'react';
import { ArrowLeft, Target, Check, X } from 'lucide-react';

interface VoterMatchingProps {
  onBack: () => void;
}

function VoterMatching({ onBack }: VoterMatchingProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    "The government should increase spending on public healthcare",
    "Climate change requires immediate government intervention",
    "Taxes should be lowered for businesses to stimulate growth",
    "Immigration levels should be significantly reduced",
    "The government should provide universal basic income",
    "Military spending should be increased for national security",
    "Education should be free at all levels including university",
    "Government regulation of big tech companies should increase"
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
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
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple to-purple-hover rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-on-surface" />
              </div>
              <h1 className="text-2xl font-bold text-on-surface mb-2">Your Political Matches</h1>
              <p className="text-on-surface/70">Based on your responses, here are your top political alignments</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-primary">Progressive Alliance</h3>
                  <span className="text-2xl font-bold text-primary">87%</span>
                </div>
                <p className="text-on-surface/70 text-sm">
                  Strong alignment with progressive social policies, environmental protection, and public service investment.
                </p>
              </div>

              <div className="bg-purple/10 border border-purple/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-purple">Social Democratic Party</h3>
                  <span className="text-2xl font-bold text-purple">72%</span>
                </div>
                <p className="text-on-surface/70 text-sm">
                  Moderate alignment with social welfare policies and regulated market economy approaches.
                </p>
              </div>

              <div className="bg-pink/10 border border-pink/20 rounded-xl p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-pink">Green Party</h3>
                  <span className="text-2xl font-bold text-pink">68%</span>
                </div>
                <p className="text-on-surface/70 text-sm">
                  Good alignment with environmental policies and sustainable development priorities.
                </p>
              </div>
            </div>

            <div className="flex justify-center space-x-4">
              <button
                onClick={resetQuiz}
                className="bg-surface border border-gray-light text-on-surface px-6 py-3 rounded-xl font-medium hover:bg-gray-light/20 transition-colors"
              >
                Retake Quiz
              </button>
              <button
                onClick={onBack}
                className="bg-primary hover:bg-primary-hover text-bg px-6 py-3 rounded-xl font-medium transition-colors"
              >
                Explore Manifestos
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
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
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple to-purple-hover rounded-xl flex items-center justify-center">
                  <Target className="w-5 h-5 text-on-surface" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-on-surface">Political Matching Quiz</h1>
                  <p className="text-on-surface/70 text-sm">Question {currentQuestion + 1} of {questions.length}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-on-surface/70 mb-1">Progress</div>
                <div className="w-24 bg-gray-light/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-purple to-pink h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-medium text-on-surface mb-6">
              {questions[currentQuestion]}
            </h2>

            <div className="space-y-3">
              <button
                onClick={() => handleAnswer(5)}
                className="w-full p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-primary/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-on-surface group-hover:text-primary">Strongly Agree</span>
                  <Check className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100" />
                </div>
              </button>
              <button
                onClick={() => handleAnswer(4)}
                className="w-full p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-primary/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-on-surface group-hover:text-primary">Agree</span>
                  <Check className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100" />
                </div>
              </button>
              <button
                onClick={() => handleAnswer(3)}
                className="w-full p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-purple/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-on-surface group-hover:text-purple">Neutral</span>
                  <Check className="w-5 h-5 text-purple opacity-0 group-hover:opacity-100" />
                </div>
              </button>
              <button
                onClick={() => handleAnswer(2)}
                className="w-full p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-pink/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-on-surface group-hover:text-pink">Disagree</span>
                  <X className="w-5 h-5 text-pink opacity-0 group-hover:opacity-100" />
                </div>
              </button>
              <button
                onClick={() => handleAnswer(1)}
                className="w-full p-4 bg-surface/60 border border-gray-light/20 rounded-xl hover:border-pink/50 transition-all text-left group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-on-surface group-hover:text-pink">Strongly Disagree</span>
                  <X className="w-5 h-5 text-pink opacity-0 group-hover:opacity-100" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoterMatching;
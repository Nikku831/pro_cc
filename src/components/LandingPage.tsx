import React from 'react';
import { BarChart3, Vote, MessageCircle, ArrowRight, CheckCircle, Target, Zap } from 'lucide-react';

type ActiveView = 'home' | 'manifesto' | 'matching' | 'translator';

interface LandingPageProps {
  onNavigate: (view: ActiveView) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          Navigate Politics with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 animate-pulse"> AI Clarity</span>
        </h1>
        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
          CivicCompass transforms complex political manifestos into clear insights, 
          helping you make informed voting decisions through AI-powered analysis.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-white">AI-Powered Analysis</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Target className="w-5 h-5 text-blue-500" />
            <span className="text-white">Personalized Matching</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <Zap className="w-5 h-5 text-yellow-500" />
            <span className="text-white">Instant Translation</span>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {/* Smart Manifesto Analyzer */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-white/20 hover:border-white/30 group hover:scale-105">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
            <BarChart3 className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Smart Manifesto Analyzer</h3>
          <p className="text-white/70 mb-6 leading-relaxed">
            Transform complex political manifestos into digestible insights with AI-powered analysis. 
            See policy promises categorized and evaluated for specificity and timeline.
          </p>
          <button
            onClick={() => onNavigate('manifesto')}
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Analyze Manifesto</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Personalized Voter Matching */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-white/20 hover:border-white/30 group hover:scale-105">
          <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
            <Vote className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Personalized Voter Matching</h3>
          <p className="text-white/70 mb-6 leading-relaxed">
            Take a quick assessment to discover which political parties align with your values. 
            Get detailed reasoning for each match with percentage compatibility scores.
          </p>
          <button
            onClick={() => onNavigate('matching')}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Find Your Match</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>

        {/* Policy Translator */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 p-8 border border-white/20 hover:border-white/30 group hover:scale-105">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Plain English Translator</h3>
          <p className="text-white/70 mb-6 leading-relaxed">
            Cut through political jargon and complex policy language. 
            Get clear, understandable explanations of what policies really mean for you.
          </p>
          <button
            onClick={() => onNavigate('translator')}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-4 rounded-xl font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <span>Translate Policy</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Empowering Informed Democracy</h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Making political information accessible and understandable for every voter
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-blue-400 mb-2 animate-pulse">98%</div>
            <div className="text-white/70">Analysis Accuracy</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-green-400 mb-2 animate-pulse delay-300">85%</div>
            <div className="text-white/70">Match Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-400 mb-2 animate-pulse delay-700">2.5s</div>
            <div className="text-white/70">Average Processing Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
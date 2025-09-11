import React from 'react';
import { Vote, BarChart3, MessageCircle, ArrowRight, Users, Target, Brain } from 'lucide-react';

interface LandingPageProps {
  onNavigate: (view: 'home' | 'manifesto' | 'matching' | 'translator') => void;
}

function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-bg">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-on-surface mb-6">
            Navigate Your 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple ml-4">
              Political Journey
            </span>
          </h1>
          <p className="text-xl text-on-surface/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Make informed decisions with AI-powered political analysis, personalized voter matching, 
            and simplified policy explanations.
          </p>
          
          <div className="flex justify-center space-x-4">
            <button 
              onClick={() => onNavigate('manifesto')}
              className="bg-primary hover:bg-primary-hover text-bg px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 group"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-gray-light text-on-surface hover:bg-surface px-8 py-4 rounded-xl font-semibold transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 px-4 sm:px-6 lg:px-8 bg-surface/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-on-surface mb-4">
              Powerful Tools for Political Understanding
            </h2>
            <p className="text-lg text-on-surface/70 max-w-2xl mx-auto">
              Cut through the noise with our comprehensive suite of political analysis tools
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div 
              className="bg-surface/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-light/20 hover:border-primary/50 transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate('manifesto')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-8 h-8 text-on-surface" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Manifesto Analyzer</h3>
              <p className="text-on-surface/70 mb-6">
                Deep dive into political manifestos with AI-powered analysis. Understand key policies, 
                priorities, and commitments from different parties.
              </p>
              <div className="flex items-center text-primary group-hover:text-primary-hover transition-colors">
                <span className="font-semibold">Analyze Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              className="bg-surface/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-light/20 hover:border-purple/50 transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate('matching')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple to-purple-hover rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-on-surface" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Voter Matching</h3>
              <p className="text-on-surface/70 mb-6">
                Find your political alignment with our comprehensive matching system. 
                Discover which parties and policies best match your values.
              </p>
              <div className="flex items-center text-purple group-hover:text-purple-hover transition-colors">
                <span className="font-semibold">Find Your Match</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            <div 
              className="bg-surface/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-light/20 hover:border-pink/50 transition-all duration-300 cursor-pointer group"
              onClick={() => onNavigate('translator')}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink to-pink-hover rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8 text-on-surface" />
              </div>
              <h3 className="text-xl font-bold text-on-surface mb-4">Policy Translator</h3>
              <p className="text-on-surface/70 mb-6">
                Transform complex political jargon into clear, understandable language. 
                Get plain-English explanations of policies and their real-world impact.
              </p>
              <div className="flex items-center text-pink group-hover:text-pink-hover transition-colors">
                <span className="font-semibold">Translate Now</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">500K+</div>
              <div className="text-on-surface/70">Political Documents Analyzed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple">95%</div>
              <div className="text-on-surface/70">User Satisfaction Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-pink">24/7</div>
              <div className="text-on-surface/70">AI Assistant Available</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
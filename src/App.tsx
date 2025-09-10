import React, { useState } from 'react';
import { Vote, BarChart3, MessageCircle, Home, Bot } from 'lucide-react';
import LandingPage from './components/LandingPage';
import ManifestoAnalyzer from './components/ManifestoAnalyzer';
import VoterMatching from './components/VoterMatching';
import PolicyTranslator from './components/PolicyTranslator';
import Chatbot from './components/Chatbot';

type ActiveView = 'home' | 'manifesto' | 'matching' | 'translator';

function App() {
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const renderActiveView = () => {
    switch (activeView) {
      case 'manifesto':
        return <ManifestoAnalyzer onBack={() => setActiveView('home')} />;
      case 'matching':
        return <VoterMatching onBack={() => setActiveView('home')} />;
      case 'translator':
        return <PolicyTranslator onBack={() => setActiveView('home')} />;
      default:
        return <LandingPage onNavigate={setActiveView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Navigation Header */}
      <nav className="bg-white/10 backdrop-blur-lg border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div 
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => setActiveView('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-green-400 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Vote className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">CivicCompass</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <button
                onClick={() => setActiveView('home')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeView === 'home' 
                    ? 'bg-white/20 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
              <button
                onClick={() => setActiveView('manifesto')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeView === 'manifesto' 
                    ? 'bg-white/20 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <BarChart3 className="w-4 h-4" />
                <span>Analyzer</span>
              </button>
              <button
                onClick={() => setActiveView('matching')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeView === 'matching' 
                    ? 'bg-white/20 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <Vote className="w-4 h-4" />
                <span>Match</span>
              </button>
              <button
                onClick={() => setActiveView('translator')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeView === 'translator' 
                    ? 'bg-white/20 text-white shadow-lg' 
                    : 'text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                <span>Translate</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {renderActiveView()}
      </main>

      {/* Floating Chatbot Button */}
      <button
        onClick={() => setIsChatbotOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-all duration-300 z-50 group"
      >
        <Bot className="w-7 h-7 group-hover:animate-pulse" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-400 rounded-full"></div>
      </button>

      {/* Chatbot Interface */}
      <Chatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </div>
  );
}

export default App;
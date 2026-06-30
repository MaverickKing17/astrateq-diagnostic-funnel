/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnalyticsEvent, UserAnswers, DiagnosticResult } from './types';
import { calculateDiagnosticResult } from './data/questions';

// Importing sub-components
import Header from './components/Header';
import Footer from './components/Footer';
import LandingView from './components/LandingView';
import QuizView from './components/QuizView';
import CalculatingView from './components/CalculatingView';
import PreliminaryView from './components/PreliminaryView';
import FullResultView from './components/FullResultView';
import InfoModal, { InfoTabType } from './components/InfoModal';

import commuteImage from './assets/images/toronto_gta_commute_1782319738788.jpg';
import heroBgImage from './assets/images/driver_awareness_hud_1782853766018.jpg';

export default function App() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'quiz' | 'calculating' | 'preliminary' | 'full'>('landing');
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [infoModalTab, setInfoModalTab] = useState<InfoTabType | null>(null);

  // Asset paths from generated images
  const heroImage = "https://i.ibb.co/wZZ5C29C/Gemini-Generated-Image-cl9hrqcl9hrqcl9h.png";
  const ctaImage = "https://i.ibb.co/yFr9sMwv/Jun-24-2026-03-12-49-PM.png";

  // Track simulated marketing analytics events
  const trackEvent = (name: string, data?: Record<string, any>) => {
    const newEvent: AnalyticsEvent = {
      id: Math.random().toString(36).substring(2, 9),
      name,
      timestamp: new Date().toLocaleTimeString('en-US', { hour12: false }),
      data
    };
    setEvents(prev => [...prev, newEvent]);
    console.log(`[Analytics Event] ${name}:`, data);
  };

  // Fire page_view on startup
  useEffect(() => {
    trackEvent('page_view', { path: '/', referrer: 'direct' });
  }, []);

  const handleStartDiagnostic = () => {
    trackEvent('diagnostic_cta_click');
    const element = document.getElementById('readiness-check');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCompleteQuiz = (userAnswers: UserAnswers) => {
    setAnswers(userAnswers);
    const calculated = calculateDiagnosticResult(userAnswers);
    setResult(calculated);
    setCurrentStep('calculating');
  };

  const handleEmailSubmitted = (capturedEmail: string, capturedFirstName: string) => {
    setEmail(capturedEmail);
    setFirstName(capturedFirstName);
    setCurrentStep('full');
    if (result) {
      trackEvent('full_result_viewed', { 
        email: capturedEmail, 
        firstName: capturedFirstName, 
        score: result.score, 
        tier: result.tier 
      });
    }
  };

  const handleReset = () => {
    setCurrentStep('landing');
    setAnswers({});
    setResult(null);
    setEmail('');
    setFirstName('');
    trackEvent('navigation_reset');
    
    // Smooth scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearEvents = () => {
    setEvents([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F4F8] font-sans selection:bg-blue-500/20 selection:text-slate-900" id="app_root_layout">
      {/* Global Brand Header */}
      <Header onReset={handleReset} onOpenAbout={() => setInfoModalTab('about')} />

      {/* Main Dynamic Conversational Funnel Container */}
      <main className="flex-grow">
        {currentStep === 'landing' && (
          <LandingView 
            onStartDiagnostic={handleStartDiagnostic} 
            heroImage={heroImage}
            commuteImage={commuteImage}
            quizView={
              <QuizView 
                onComplete={handleCompleteQuiz} 
                onBackToLanding={handleReset}
                onTrackEvent={trackEvent}
              />
            }
          />
        )}

        {currentStep === 'quiz' && (
          <QuizView 
            onComplete={handleCompleteQuiz} 
            onBackToLanding={handleReset}
            onTrackEvent={trackEvent}
          />
        )}

        {currentStep === 'calculating' && (
          <CalculatingView 
            onCalculationComplete={() => {
              setCurrentStep('preliminary');
              if (result) {
                trackEvent('preliminary_result_viewed', { score: result.score, classification: result.tierName });
              }
            }}
          />
        )}

        {currentStep === 'preliminary' && result && (
          <PreliminaryView 
            result={result} 
            onSubmitEmail={handleEmailSubmitted}
            onTrackEvent={trackEvent}
          />
        )}

        {currentStep === 'full' && result && (
          <FullResultView 
            result={result} 
            email={email}
            firstName={firstName}
            onReset={handleReset}
            onTrackEvent={trackEvent}
            ctaImage={ctaImage}
          />
        )}
      </main>

      {/* Marketing Conversion Footer - hidden during active quiz/calculation to maximize focus */}
      {currentStep !== 'quiz' && currentStep !== 'calculating' && <Footer onOpenTab={(tab) => setInfoModalTab(tab)} />}

      {/* Interactive Documentation README Modal */}
      <InfoModal 
        isOpen={infoModalTab !== null} 
        activeTab={infoModalTab || 'about'} 
        onTabChange={(tab) => setInfoModalTab(tab)}
        onClose={() => setInfoModalTab(null)} 
        onStartDiagnostic={handleStartDiagnostic}
      />
    </div>
  );
}


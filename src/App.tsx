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
import PreliminaryView from './components/PreliminaryView';
import FullResultView from './components/FullResultView';
import EventLogger from './components/EventLogger';
import InfoModal, { InfoTabType } from './components/InfoModal';

export default function App() {
  const [currentStep, setCurrentStep] = useState<'landing' | 'quiz' | 'preliminary' | 'full'>('landing');
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [result, setResult] = useState<DiagnosticResult | null>(null);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [events, setEvents] = useState<AnalyticsEvent[]>([]);
  const [infoModalTab, setInfoModalTab] = useState<InfoTabType | null>(null);

  // Asset paths from generated images
  const heroImage = "/src/assets/images/canadian_road_hero_1782319723620.jpg";
  const commuteImage = "/src/assets/images/toronto_gta_commute_1782319738788.jpg";
  const ctaImage = "/src/assets/images/scenic_car_future_1782319753517.jpg";

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
    setCurrentStep('quiz');
  };

  const handleCompleteQuiz = (userAnswers: UserAnswers) => {
    setAnswers(userAnswers);
    const calculated = calculateDiagnosticResult(userAnswers);
    setResult(calculated);
    setCurrentStep('preliminary');
    trackEvent('preliminary_result_viewed', { score: calculated.score, classification: calculated.tierName });
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
          />
        )}

        {currentStep === 'quiz' && (
          <QuizView 
            onComplete={handleCompleteQuiz} 
            onBackToLanding={handleReset}
            onTrackEvent={trackEvent}
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

      {/* Marketing Conversion Footer - hidden during active quiz to maximize focus */}
      {currentStep !== 'quiz' && <Footer onOpenTab={(tab) => setInfoModalTab(tab)} />}

      {/* Floating Interactive Analytics Console */}
      <EventLogger events={events} onClear={clearEvents} />

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


import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  Gauge, 
  AlertTriangle, 
  Users, 
  Compass, 
  Lock, 
  MapPin, 
  Cpu, 
  Zap, 
  ArrowRight,
  Eye,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Smartphone,
  HelpCircle,
  Car,
  CloudSnow,
  Activity,
  Layers,
  Sparkles,
  FileText,
  X,
  Info,
  Sliders,
  Check,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import visionShieldInCar from '../assets/images/vision_shield_in_car_1782845622070.jpg';
import auraDialInCar from '../assets/images/aura_dial_in_car_1782845633915.jpg';

interface LandingViewProps {
  onStartDiagnostic: () => void;
  heroImage: string;
  commuteImage: string;
  quizView: React.ReactNode;
}

export default function LandingView({ onStartDiagnostic, heroImage, commuteImage, quizView }: LandingViewProps) {
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [activeConceptModal, setActiveConceptModal] = useState<null | 'vision' | 'aura'>(null);
  const [conceptFeedbackRecorded, setConceptFeedbackRecorded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
        setShowStickyBar(true);
      } else {
        setShowScrollTop(false);
        setShowStickyBar(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="font-sans text-slate-800 animate-fadeIn relative pb-16 md:pb-0" id="landing_view_container">
      
      {/* ==========================================
          SECTION 1: HERO + SIMULATION CTA
         ========================================== */}
      <section className="relative overflow-hidden bg-[#070f22] text-white min-h-[90vh] lg:min-h-[92vh] flex flex-col justify-center px-4 sm:px-6 py-12 md:py-20 border-b border-slate-800">
        
        {/* Deep professional navy base under the image */}
        <div className="absolute inset-0 bg-[#070f22]" />

        {/* Background image overlay with crisp scrim */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img
            src={heroImage}
            alt="Canadian road landscape representing driver awareness research"
            className="w-full h-full object-cover object-center filter contrast-[1.15] brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Gradient scrim for text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070f22]/90 via-[#070f22]/80 to-[#070f22] z-0" />

        {/* Subtle grid accent */}
        <div 
          className="absolute inset-0 z-0 opacity-[0.04] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#38bdf8 1.5px, transparent 1.5px)', backgroundSize: '24px 24px' }}
        />

        {/* Content Container */}
        <div className="relative max-w-6xl w-full mx-auto z-10 space-y-10">
          
          {/* Hero Top Grid: Left Messaging, Right Mobile Simulator Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Research Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Canadian Driver Research Initiative</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl text-white tracking-tight leading-[1.12]">
                Check Your Driver Awareness Readiness in <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300">60 Seconds</span>
              </h1>

              {/* Supporting Message */}
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-normal max-w-2xl">
                Astrateq Gadgets is researching a privacy-first approach to understanding driver attention, fatigue, and environmental awareness — without continuous vehicle tracking, cloud surveillance, or hardware installation.
              </p>

              {/* Research Disclosure Note */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-cyan-200/90 text-xs sm:text-sm leading-relaxed max-w-2xl font-medium">
                <strong className="text-white">Research & Validation Notice:</strong> We are validating whether Canadian drivers value privacy-centric awareness feedback before advancing into full technology development.
              </div>

              {/* Primary & Secondary CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onStartDiagnostic}
                  className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 hover:from-sky-400 hover:to-cyan-500 text-white font-extrabold text-base sm:text-lg rounded-2xl shadow-[0_0_30px_rgba(14,165,233,0.35)] hover:shadow-[0_0_40px_rgba(14,165,233,0.5)] transition-all duration-200 cursor-pointer border border-sky-300/30 group"
                  id="hero_primary_cta"
                >
                  <span>START DRIVER AWARENESS SIMULATION</span>
                  <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => scrollToSection('why-privacy-matters')}
                  className="inline-flex items-center justify-center px-6 py-4 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base rounded-2xl border border-slate-700 transition-all duration-200 cursor-pointer group"
                  id="hero_secondary_cta"
                >
                  <span>EXPLORE PRIVACY ARCHITECTURE</span>
                  <ChevronDown className="w-4 h-4 ml-2 text-slate-400 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
                </button>
              </div>

              {/* Quick Micro-Trust Features */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-300 font-semibold pt-1">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free & Anonymous</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>60-Second Completion</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>No Vehicle Connection</span>
                </div>
              </div>

            </div>

            {/* Right Column: Mobile Simulator Interface Preview Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm bg-gradient-to-b from-slate-900 to-[#0b172e] rounded-3xl p-5 border border-sky-500/25 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-md">
                
                {/* Visual Label Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono font-bold text-slate-200 uppercase tracking-wider">
                      Interactive Simulator Preview
                    </span>
                  </div>
                  <span className="text-[10px] bg-sky-500/10 text-sky-400 px-2.5 py-0.5 rounded-full font-mono border border-sky-500/20">
                    60s Diagnostic
                  </span>
                </div>

                {/* Simulated Device Screen Content */}
                <div className="bg-[#050b17] rounded-2xl p-4 border border-slate-800 space-y-4 text-left">
                  
                  {/* Step Banner */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">Section 1 of 3</span>
                    <span className="text-emerald-400 font-bold">100% Privacy Preserved</span>
                  </div>

                  {/* Simulated Question Card */}
                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-sky-400 font-mono font-bold block">
                      Driving Context Assessment
                    </span>
                    <p className="text-xs font-semibold text-white">
                      How frequently do you drive on major Canadian highways or long commute routes?
                    </p>
                  </div>

                  {/* Simulated Option Buttons */}
                  <div className="space-y-2">
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 flex items-center justify-between text-xs text-slate-300 transition-colors">
                      <span className="font-medium">Daily heavy highway commute</span>
                      <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/50 flex items-center justify-between text-xs text-slate-300 transition-colors">
                      <span className="font-medium">3–5 times per week</span>
                      <span className="w-2 h-2 rounded-full bg-slate-700"></span>
                    </div>
                  </div>

                  {/* Simulated Score Gauge Preview */}
                  <div className="pt-2 border-t border-slate-850 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Simulated Baseline</div>
                      <div className="text-lg font-mono font-extrabold text-white">87<span className="text-xs text-slate-400 font-normal"> / 100</span></div>
                    </div>
                    <button 
                      onClick={onStartDiagnostic}
                      className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Try Simulator</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

                {/* Subtext under device */}
                <p className="text-[11px] text-slate-400 text-center mt-3 font-medium">
                  "Discover something about your driving readiness today."
                </p>

              </div>
            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
          SECTION 2: WHY THIS MATTERS
         ========================================== */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Problem Research
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Why Driver Awareness Matters
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Modern driving introduces cognitive factors that traditional vehicle safety systems often overlook. Astrateq Gadgets is researching how these subtle influences impact driver focus across Canadian roads.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {/* Card 1: Distracted Driving */}
            <div className="group p-7 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-200/90 hover:border-sky-400 shadow-md hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center font-bold shadow-xs">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 pt-3 group-hover:text-sky-700 transition-colors">Distracted Driving Lapses</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                Brief shifts in attention, dashboard screen interactions, and smartphone notifications create blind windows where reaction times double during critical braking moments.
              </p>
            </div>

            {/* Card 2: Driver Fatigue */}
            <div className="group p-7 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-200/90 hover:border-amber-400 shadow-md hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center font-bold shadow-xs">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 pt-3 group-hover:text-amber-700 transition-colors">Driver Fatigue & Sleepiness</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                Circadian fatigue dips during late night drives, early morning commutes, and repetitive highway stretches gradually reduce awareness without the driver realizing it.
              </p>
            </div>

            {/* Card 3: Cognitive Overload */}
            <div className="group p-7 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-200/90 hover:border-indigo-400 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-indigo-100/80 text-indigo-700 flex items-center justify-center font-bold shadow-xs">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 pt-3 group-hover:text-indigo-700 transition-colors">Cognitive Overload</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                Navigating dense metropolitan traffic, high-speed highway merging, and construction zones places heavy processing demands on brain attention reserves.
              </p>
            </div>

            {/* Card 4: Changing Canadian Conditions */}
            <div className="group p-7 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 border border-slate-200/90 hover:border-teal-400 shadow-md hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1 transition-all duration-300 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-xl bg-teal-100/80 text-teal-700 flex items-center justify-center font-bold shadow-xs">
                <CloudSnow className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 pt-3 group-hover:text-teal-700 transition-colors">Changing Canadian Weather</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal pt-1">
                Snow squalls, sudden ice glare, heavy rain, and early winter darkness demand heightened vigilance precisely when driver fatigue is at its peak.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: SIMULATION PREVIEW
         ========================================== */}
      <section className="py-20 px-6 bg-slate-50/70 border-b border-slate-200/70">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-xs">
              Simulated Deliverables
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Driver Awareness Simulation Preview
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              In 60 seconds, receive a personalized breakdown evaluating key drivers of focus and alertness.
            </p>
          </div>

          {/* 4 Deliverable Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-sky-50/30 border border-slate-200/90 hover:border-sky-400 shadow-md hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-sky-100/90 text-sky-700 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                <Gauge className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-sky-700 transition-colors pt-1">Awareness Score</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                A simulated 0–100 baseline rating your attention consistency across your typical driving context.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-amber-50/30 border border-slate-200/90 hover:border-amber-400 shadow-md hover:shadow-xl hover:shadow-amber-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-amber-100/90 text-amber-700 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-amber-700 transition-colors pt-1">Fatigue Profile</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Analysis of circadian fatigue windows during early morning, evening, or extended commute hours.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-indigo-50/30 border border-slate-200/90 hover:border-indigo-400 shadow-md hover:shadow-xl hover:shadow-indigo-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-indigo-100/90 text-indigo-700 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-indigo-700 transition-colors pt-1">Attention Stability</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Evaluation of focus endurance and distraction resistance during prolonged highway driving.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-teal-50/30 border border-slate-200/90 hover:border-teal-400 shadow-md hover:shadow-xl hover:shadow-teal-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3 text-left relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-teal-100/90 text-teal-700 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-teal-700 transition-colors pt-1">Environmental Complexity</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Rating of exposure to weather hazards, winter glare, and urban traffic congestion.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4: HOW THE SIMULATION WORKS
         ========================================== */}
      <section id="how-it-works" className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-xs">
              Interactive Guide
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              How The Simulation Works
            </h2>
            <p className="text-sm text-slate-500 font-medium">
              Three simple steps to explore your driver awareness profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            {/* Step 1 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50/90 border border-slate-200/90 hover:border-sky-400 shadow-md hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                1
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-sky-700 transition-colors">Set Driving Context</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Answer quick questions about your weekly driving frequency, commute routes, highway exposure, and typical driving times.
              </p>
            </div>

            {/* Step 2 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50/90 border border-slate-200/90 hover:border-violet-400 shadow-md hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                2
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-violet-700 transition-colors">Complete Focus Assessment</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Select your experiences with late-day tiredness, phone usage habits, winter driving stress, and fatigue recovery routines.
              </p>
            </div>

            {/* Step 3 */}
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white to-slate-50/90 border border-slate-200/90 hover:border-emerald-400 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-extrabold text-xl flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                3
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">Receive Awareness Profile</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                View your simulated awareness score, fatigue profile, and see how your profile aligns with our Canadian research cohort.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 5: WHY PRIVACY MATTERS
         ========================================== */}
      <section id="why-privacy-matters" className="py-20 px-6 bg-[#070f22] text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Soft background glow accents */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-500/30 shadow-xs">
              <Lock className="w-3.5 h-3.5 text-sky-400" />
              Privacy Architecture
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Why Privacy Matters
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Most driver monitoring tools rely on invasive vehicle telematics, location tracking, or insurance scoring. Astrateq Gadgets is built on a completely different philosophy.
            </p>
          </div>

          {/* 4 Privacy Principles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            <div className="group p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e1b38]/90 via-[#0a142c] to-[#070e20] border border-sky-500/25 hover:border-sky-400/80 shadow-xl shadow-slate-950/60 hover:shadow-sky-500/15 hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-sky-500/15 text-sky-400 flex items-center justify-center font-bold border border-sky-500/20 group-hover:scale-105 transition-transform">
                <MapPin className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white group-hover:text-sky-300 transition-colors pt-1">No Continuous Tracking</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                We never record your GPS location, trip routes, or real-time driving behavior. Your privacy is protected by default.
              </p>
            </div>

            <div className="group p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e1b38]/90 via-[#0a142c] to-[#070e20] border border-emerald-500/25 hover:border-emerald-400/80 shadow-xl shadow-slate-950/60 hover:shadow-emerald-500/15 hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold border border-emerald-500/20 group-hover:scale-105 transition-transform">
                <Lock className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white group-hover:text-emerald-300 transition-colors pt-1">No Cloud Surveillance</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                All diagnostic insights are processed on-demand. We do not stream camera feeds or continuous sensor logs to remote cloud servers.
              </p>
            </div>

            <div className="group p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e1b38]/90 via-[#0a142c] to-[#070e20] border border-amber-500/25 hover:border-amber-400/80 shadow-xl shadow-slate-950/60 hover:shadow-amber-500/15 hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold border border-amber-500/20 group-hover:scale-105 transition-transform">
                <Cpu className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white group-hover:text-amber-300 transition-colors pt-1">Privacy-First Architecture</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Designed to put drivers in control of their own data. Technology should serve the driver's awareness, not track their habits for third parties.
              </p>
            </div>

            <div className="group p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e1b38]/90 via-[#0a142c] to-[#070e20] border border-teal-500/25 hover:border-teal-400/80 shadow-xl shadow-slate-950/60 hover:shadow-teal-500/15 hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold border border-teal-500/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-white group-hover:text-teal-300 transition-colors pt-1">Anonymous Research Validation</h3>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                No insurance company scoring, no employer reporting, and no identity data monetization. Purely designed for driver awareness research.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 6: WHAT WE ARE VALIDATING
         ========================================== */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-xs">
              Research Objectives
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              What We Are Validating
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Astrateq Gadgets is conducting an early market research study with Canadian drivers. Here are the core questions we are actively exploring:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50/90 to-sky-50/20 border border-slate-200/90 hover:border-sky-400 shadow-md hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-sky-100/90 text-sky-700 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                <HelpCircle className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-sky-700 transition-colors">Do drivers value awareness insights?</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Testing whether personalized, privacy-first driver awareness scores help drivers make safer decisions before long trips or nightly commutes.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50/90 to-violet-50/20 border border-slate-200/90 hover:border-violet-400 shadow-md hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-violet-100/90 text-violet-700 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                <Shield className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-violet-700 transition-colors">Does privacy-first software improve trust?</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Validating whether drivers prefer local software concepts over surveillance-based insurance plug-ins and intrusive dashcams.
              </p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-white via-slate-50/90 to-emerald-50/20 border border-slate-200/90 hover:border-emerald-400 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-11 h-11 rounded-xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center font-bold shadow-xs group-hover:scale-105 transition-transform">
                <Compass className="w-5.5 h-5.5" />
              </div>
              <h3 className="font-sans font-extrabold text-xl text-slate-900 group-hover:text-emerald-700 transition-colors">Which conditions impact focus most?</h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Gathering anonymous behavioral patterns across Canadian highways to understand how weather, commute duration, and timing affect alertness.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          INTERACTIVE SIMULATOR PORTAL MOVED HIGH
         ========================================== */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#091530] via-[#060e22] to-[#040816] text-white border-y border-sky-500/30 relative overflow-hidden" id="readiness-check">
        
        {/* Glow Effects */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-sky-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto space-y-10 text-center relative z-10">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sky-300 uppercase bg-sky-950/90 px-4 py-2 rounded-full border border-sky-400/40 shadow-lg shadow-sky-950/80">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>Active Driver Simulation Portal</span>
            </div>
            
            <h2 className="font-sans font-extrabold text-3xl sm:text-5xl text-white tracking-tight leading-tight">
              Start Your Driver Awareness Simulation
            </h2>
            
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
              Complete this 60-second behavioral diagnostic to receive your simulated Driver Awareness Score and Fatigue Risk Profile.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs font-mono text-sky-300 pt-1">
              <span className="bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-500/30 font-bold">100% Free</span>
              <span className="text-slate-500">•</span>
              <span className="bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-500/30 font-bold">60 Seconds</span>
              <span className="text-slate-500">•</span>
              <span className="bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-500/30 font-bold">No Vehicle Hardware</span>
              <span className="text-slate-500">•</span>
              <span className="bg-sky-950/80 px-3 py-1 rounded-lg border border-sky-500/30 font-bold">Zero GPS Tracking</span>
            </div>
          </div>

          {/* Quiz Container Box */}
          <div className="relative bg-gradient-to-b from-[#0a152d] via-[#071024] to-[#040816] rounded-3xl border border-sky-500/40 shadow-[0_30px_90px_rgba(3,8,20,0.8)] overflow-hidden p-3 sm:p-8 text-left max-w-3xl mx-auto group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />
            {quizView}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 7: CANADIAN RESEARCH COHORT
         ========================================== */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-xs">
              Research Participation
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Canadian Driver Research Cohort
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We are currently recruiting early participants across Canada to help shape this technology. By participating in our 60-second simulation, you contribute directly to early research insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-sky-50/20 border border-slate-200/90 hover:border-sky-400 shadow-md hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-sm font-mono shadow-xs group-hover:scale-105 transition-transform">
                01
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">Early Access Insights</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Cohort members receive updates on driver awareness study results and early access if prototype applications move forward.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-violet-50/20 border border-slate-200/90 hover:border-violet-400 shadow-md hover:shadow-xl hover:shadow-violet-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center font-bold text-sm font-mono shadow-xs group-hover:scale-105 transition-transform">
                02
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-violet-700 transition-colors">Shape Product Direction</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Provide feedback on desired awareness features, privacy guarantees, and physical accessory concepts.
              </p>
            </div>

            <div className="group p-6 rounded-2xl bg-gradient-to-br from-white via-slate-50/90 to-emerald-50/20 border border-slate-200/90 hover:border-emerald-400 shadow-md hover:shadow-xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 space-y-3 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm font-mono shadow-xs group-hover:scale-105 transition-transform">
                03
              </div>
              <h3 className="font-sans font-bold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">Priority Regional Slots</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Reserve an early research slot in your postal area without financial obligation or hardware purchase.
              </p>
            </div>

          </div>

          {/* Secondary Physical Accessories Preview (Contextual Future Concept) */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-[#0a152e] via-[#081024] to-[#050a18] text-white border border-sky-500/35 shadow-[0_25px_60px_rgba(7,15,34,0.35)] space-y-8 text-left overflow-hidden group/container">
            
            {/* Top illuminated gradient accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-teal-400" />
            
            {/* Soft ambient background radial glows */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header Block */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5 relative z-10">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono text-sky-400 uppercase font-bold tracking-widest">
                    FUTURE PIPELINE CONCEPT
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
                  Future Privacy-First Physical Accessories
                </h3>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-mono bg-sky-950/80 text-sky-300 px-3.5 py-1.5 rounded-full border border-sky-500/30 font-bold shadow-xs">
                <Cpu className="w-3.5 h-3.5 text-sky-400" />
                <span>100% Offline Edge Processing</span>
              </div>
            </div>

            {/* Accessories 2-Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              
              {/* Card 1: Astrateq Vision Shield */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0e1b38]/90 via-[#0a142c] to-[#070e20] border border-sky-500/30 hover:border-sky-400/80 shadow-2xl shadow-slate-950/70 hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  
                  {/* Visual Image Showcase Frame */}
                  <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden border border-slate-700/80 group-hover:border-sky-400/50 transition-colors shadow-md">
                    <img 
                      src={visionShieldInCar} 
                      alt="Astrateq Vision Shield concept" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e20] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-sky-300 px-3 py-1 rounded-lg text-[10px] font-mono font-bold border border-white/10 flex items-center gap-1.5 shadow-sm">
                      <Eye className="w-3 h-3 text-sky-400" />
                      <span>Visor-Mounted HUD</span>
                    </div>
                  </div>

                  {/* Content Header & Specs */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans font-extrabold text-white text-xl group-hover:text-sky-300 transition-colors">
                        Astrateq Vision Shield™
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        Concept Phase
                      </span>
                    </div>

                    {/* Spec Tags */}
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300 pt-1">
                      <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">HUD Projection</span>
                      <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">Zero Distraction</span>
                      <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">Edge AI</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                      A conceptual visor-mounted head-up display projecting non-intrusive focus cues during long highway commutes — maintaining zero camera streaming or cloud upload.
                    </p>
                  </div>

                </div>

                {/* Card Action Button */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">Research Spec Brief</span>
                  <button
                    onClick={() => {
                      setActiveConceptModal('vision');
                      setConceptFeedbackRecorded(false);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300 bg-sky-950/60 hover:bg-sky-900/80 px-3.5 py-2 rounded-xl border border-sky-500/30 transition-all cursor-pointer"
                  >
                    <span>Explore Concept Spec</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

              {/* Card 2: Astrateq Aura Dial */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-[#0e1b38]/90 via-[#0a142c] to-[#070e20] border border-sky-500/30 hover:border-sky-400/80 shadow-2xl shadow-slate-950/70 hover:shadow-sky-500/20 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
                <div className="space-y-4">
                  
                  {/* Visual Image Showcase Frame */}
                  <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden border border-slate-700/80 group-hover:border-sky-400/50 transition-colors shadow-md">
                    <img 
                      src={auraDialInCar} 
                      alt="Astrateq Aura Dial concept" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070e20] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md text-amber-300 px-3 py-1 rounded-lg text-[10px] font-mono font-bold border border-white/10 flex items-center gap-1.5 shadow-sm">
                      <Zap className="w-3 h-3 text-amber-400" />
                      <span>Console Light Pulse Dial</span>
                    </div>
                  </div>

                  {/* Content Header & Specs */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-sans font-extrabold text-white text-xl group-hover:text-amber-300 transition-colors">
                        Astrateq Aura Dial™
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                        Concept Phase
                      </span>
                    </div>

                    {/* Spec Tags */}
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono text-slate-300 pt-1">
                      <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">Ambient Console</span>
                      <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">Circadian Sync</span>
                      <span className="bg-slate-800/90 px-2.5 py-1 rounded-md border border-slate-700">Tactile Dial</span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal pt-1">
                      A conceptual ambient console emitting soft light pulses calibrated to circadian fatigue periods — helping drivers stay gently alert during late-night Canadian highway drives.
                    </p>
                  </div>

                </div>

                {/* Card Action Button */}
                <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 font-mono">Research Spec Brief</span>
                  <button
                    onClick={() => {
                      setActiveConceptModal('aura');
                      setConceptFeedbackRecorded(false);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-950/60 hover:bg-amber-900/80 px-3.5 py-2 rounded-xl border border-amber-500/30 transition-all cursor-pointer"
                  >
                    <span>Explore Concept Spec</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 8: FAQ
         ========================================== */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              Transparent Answers
            </span>
            <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Everything you need to know about Astrateq Gadgets driver validation.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto text-left">
            {[
              {
                q: "What is Astrateq Gadgets?",
                a: "Astrateq Gadgets is an upcoming Canadian technology brand researching a privacy-first approach to driver awareness intelligence. We are evaluating whether drivers value software-based awareness feedback tailored to Canadian highway conditions, commute fatigue, and winter driving."
              },
              {
                q: "Is this a mature commercial product?",
                a: "No. This is an early-stage market validation and research study. We are actively collecting driver behavior insights and testing market interest before building commercial software or physical hardware."
              },
              {
                q: "Is my driving data recorded or shared with insurance companies?",
                a: "Never. Astrateq Gadgets is built on strict privacy principles. There is no GPS tracking, vehicle OBD connection, or telematics streaming. Your responses are strictly used for anonymous validation research."
              },
              {
                q: "How does the 60-second Driver Awareness Simulation work?",
                a: "The simulation evaluates your driving context, fatigue windows, and focus habits against a weighted benchmark to generate a simulated Driver Awareness Score (0–100) and Fatigue Risk Profile."
              },
              {
                q: "Is there any cost or hardware required?",
                a: "No. The diagnostic is 100% free, takes 60 seconds, and requires no hardware or vehicle installation."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 shadow-xs"
                  id={`faq_item_${idx}`}
                >
                  <button
                    onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-bold text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-sky-600 shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-3" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 9: FINAL CTA
         ========================================== */}
      <section className="py-20 px-6 bg-[#070f22] text-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800/60 inline-block">
            Join The Research Initiative
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Help shape the future of privacy-first driver intelligence.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed font-normal">
            Take 60 seconds to complete the Driver Awareness Simulation and contribute your perspective to our Canadian research cohort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-sky-500 via-sky-600 to-cyan-600 hover:from-sky-400 hover:to-cyan-500 text-white font-extrabold text-base rounded-2xl shadow-xl transition-all cursor-pointer border border-sky-300/30"
              id="final_start_simulation_cta"
            >
              <span>Start Driver Awareness Simulation</span>
              <ChevronRight className="w-5 h-5 ml-2" />
            </button>

            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold text-base rounded-2xl border border-slate-700 transition-all cursor-pointer"
              id="final_join_cohort_cta"
            >
              <span>Join Research Cohort</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-2 font-mono">
            100% Free · 60 Seconds · Anonymous · No Hardware Required
          </p>
        </div>
      </section>

      {/* ==========================================
          MOBILE STICKY BOTTOM BAR (CRO Conversion)
         ========================================== */}
      {showStickyBar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.4)] flex items-center justify-between">
          <div className="text-left">
            <div className="text-[11px] font-bold text-white">Driver Awareness Simulation</div>
            <div className="text-[9px] text-sky-400 font-mono">60s · Free · No Tracking</div>
          </div>
          <button
            onClick={onStartDiagnostic}
            className="px-4 py-2.5 bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-400 hover:to-cyan-400 text-white font-bold text-xs rounded-xl shadow-md cursor-pointer flex items-center gap-1 shrink-0"
            id="mobile_sticky_cta"
          >
            <span>Start 60s Simulation</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-sky-500 hover:bg-sky-400 text-white p-3 rounded-full shadow-lg border border-sky-300/30 transition-all cursor-pointer flex items-center justify-center"
          aria-label="Scroll to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </motion.button>
      )}

      {/* Concept Specification Research Modal */}
      <AnimatePresence>
        {activeConceptModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-[#0a1428] text-white rounded-3xl border border-sky-500/40 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 text-left max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveConceptModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image Header */}
              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
                <img
                  src={activeConceptModal === 'vision' ? visionShieldInCar : auraDialInCar}
                  alt={activeConceptModal === 'vision' ? "Astrateq Vision Shield" : "Astrateq Aura Dial"}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-sky-300">
                  {activeConceptModal === 'vision' ? 'Visor-Mounted HUD Specification' : 'Console Ambient Light Dial Specification'}
                </div>
              </div>

              {/* Modal Content */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase text-sky-400 font-bold tracking-wider">
                  Canadian Research Concept Brief
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeConceptModal === 'vision' ? 'Astrateq Vision Shield™' : 'Astrateq Aura Dial™'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {activeConceptModal === 'vision' 
                    ? 'A conceptual visor-mounted optical HUD engineered to project subtle, non-distracting awareness indicators directly into the driver peripheral line of sight without requiring screen glance down.'
                    : 'A conceptual tactile console accessory engineered to emit soft, circadian-calibrated light pulses during late-evening highway commutes to preserve alertness without glare or eye strain.'}
                </p>
              </div>

              {/* Research Spec Highlights */}
              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs">
                <span className="font-mono font-bold text-sky-400 uppercase tracking-wider block">
                  Core Engineering Principles
                </span>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>100% Offline Edge Chipset:</strong> Operates entirely offline with zero cloud server communication.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Privacy Protection:</strong> Zero video recording, zero GPS tracking, zero insurance telematics logs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Canadian Climate Tested:</strong> Calibrated for winter glare, heavy snowfall contrast, and night highway conditions.</span>
                  </li>
                </ul>
              </div>

              {/* Research Feedback Trigger */}
              <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400">
                  Would you be interested in testing this physical prototype in future research phases?
                </div>
                {conceptFeedbackRecorded ? (
                  <div className="px-4 py-2 bg-emerald-950 text-emerald-300 rounded-xl border border-emerald-500/30 text-xs font-bold flex items-center gap-1.5 shrink-0">
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span>Interest Noted — Thank You!</span>
                  </div>
                ) : (
                  <button
                    onClick={() => setConceptFeedbackRecorded(true)}
                    className="px-4 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer shadow-md"
                  >
                    Yes, I'd test this prototype
                  </button>
                )}
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}

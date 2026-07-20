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
  CalendarDays,
  ChevronDown,
  ChevronUp,
  ArrowUp,
  Sparkles,
  Smartphone,
  Volume2,
  HelpCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import visionShieldInCar from '../assets/images/vision_shield_in_car_1782845622070.jpg';
import auraDialInCar from '../assets/images/aura_dial_in_car_1782845633915.jpg';

interface LandingViewProps {
  onStartDiagnostic: () => void;
  heroImage: string;
  commuteImage: string;
  quizView: React.ReactNode;
}

export default function LandingView({ onStartDiagnostic, heroImage, commuteImage, quizView }: LandingViewProps) {
  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="font-sans text-slate-800 animate-fadeIn" id="landing_view_container">
      
      {/* 1. HERO SECTION (5-Second Above-The-Fold Clarity) */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[105vh] flex flex-col justify-center px-4 sm:px-6 py-12 md:py-16">
        {/* Deep professional navy base under the image */}
        <div className="absolute inset-0 bg-[#020b14]" />

        {/* Background image overlay - highly clear and premium */}
        <div className="absolute inset-0 z-0 opacity-100">
          <img
            src={heroImage}
            alt="Canadian highway at sunset representing driver alertness focus"
            className="w-full h-full object-cover object-center filter contrast-[1.10] brightness-[0.95]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Darkened gradient overlay scrim - stronger bg-black/80 on mobile for Clean Focus, standard gradient on desktop */}
        <div className="absolute inset-0 bg-black/80 md:bg-gradient-to-b md:from-black/70 md:via-black/50 md:to-slate-950/90 z-0" />

        {/* Left Side HUD Telemetry Overlay - Cleanly Hidden on Mobile */}
        <div className="hidden md:flex absolute left-8 top-[28%] z-10 flex-col gap-4 p-4 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/10 text-left font-mono text-xs text-sky-400 shadow-xl w-52 animate-fadeIn" id="hud_telemetry_left">
          <div className="text-[10px] uppercase text-sky-500/70 border-b border-white/10 pb-1 font-bold tracking-wider">SYSTEM TELEMETRY</div>
          <div>
            <span className="text-white font-semibold">COGNITIVE_LOAD</span>
            <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
              <div className="bg-sky-400 h-full rounded-full" style={{ width: '42%' }}></div>
            </div>
            <div className="flex justify-between text-[9px] mt-1 text-slate-400">
              <span>42% (OPTIMAL)</span>
            </div>
          </div>
          <div>
            <span className="text-white font-semibold">REFLEX_TIME</span>
            <div className="text-lg font-bold text-white mt-0.5">180ms</div>
            <div className="text-[9px] text-slate-400 uppercase tracking-wider">AVERAGE RESPONSE</div>
          </div>
        </div>

        {/* Right Side HUD Telemetry Overlay - Cleanly Hidden on Mobile */}
        <div className="hidden md:flex absolute right-8 top-[28%] z-10 flex-col items-center gap-2 p-4 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/10 font-mono text-xs text-emerald-400 shadow-xl w-52 animate-fadeIn" id="hud_telemetry_right">
          <div className="text-[10px] uppercase text-emerald-500/70 border-b border-white/10 pb-1 font-bold w-full text-center tracking-wider">AWARENESS PROFILE</div>
          <div className="relative w-20 h-20 flex items-center justify-center mt-2">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="transparent" />
              <circle cx="50" cy="50" r="40" stroke="#10b981" strokeWidth="8" fill="transparent" strokeDasharray={251.2} strokeDashoffset={251.2 * (1 - 0.87)} />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-lg font-bold text-white">87%</span>
              <span className="text-[7px] text-slate-400 uppercase tracking-widest">READINESS</span>
            </div>
          </div>
          <div className="text-[9px] text-slate-300 text-center mt-1 uppercase tracking-wider">SIMULATED BASELINE</div>
        </div>

        {/* Content floats directly over the background image */}
        <div className="relative max-w-5xl w-full mx-auto z-10 text-center space-y-6 sm:space-y-8 px-4 py-8">
          
          {/* Privacy-First Badge Above Title */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 py-2.5 rounded-full bg-slate-950/80 backdrop-blur-md text-xs font-bold uppercase tracking-wider mx-auto shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-sky-500/30">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-sky-400" />
              <span className="text-white font-extrabold">Privacy-First Driver Awareness Intelligence</span>
            </div>
            <span className="hidden sm:inline text-sky-500/30 font-light">|</span>
            <span className="text-sky-300 font-mono text-[10px] tracking-normal font-bold">Awareness intelligence without surveillance.</span>
          </div>

          {/* Scenic Overlay Linear-gradient scrim background for pristine text contrast */}
          <div className="w-[94%] sm:w-full mx-auto bg-[#070f22]/95 md:bg-slate-950/80 backdrop-blur-sm rounded-3xl p-5 sm:p-8 md:p-10 border border-white/10 max-w-4xl space-y-5 sm:space-y-6 shadow-2xl" id="central_hero_text_card">
            <h1 className="font-sans font-extrabold text-2xl sm:text-3.5xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Check your <span className="text-sky-500 font-black">Driver Awareness Readiness</span> in 60 seconds.
            </h1>

            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
                Answer a few quick questions to receive a simulated Driver Awareness Score, Fatigue Risk Awareness Profile, and Research Cohort Classification — without vehicle tracking, insurance scoring, or hardware.
              </p>
              <div className="pt-3 border-t border-white/15 text-cyan-200 text-[11px] sm:text-xs md:text-sm font-semibold tracking-wide leading-relaxed px-1 sm:px-2">
                📢 <strong>Market Validation Initiative:</strong> This is a market validation initiative. We're exploring whether Canadian drivers see value in a privacy-first driver awareness platform before investing in full product development.
              </div>
            </div>
          </div>

          {/* Primary & Secondary CTA Block */}
          <div className="space-y-4 pt-2 max-w-2xl mx-auto w-full px-2 sm:px-0">
            <div className="flex flex-col w-full space-y-3 md:flex-row md:space-y-0 md:space-x-4 justify-center items-center">
              <button
                onClick={onStartDiagnostic}
                className="w-full md:w-auto inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-cyan-500 hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-extrabold text-lg md:text-xl rounded-2xl shadow-[0_0_40px_rgba(14,165,233,0.35)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer border border-cyan-400/30 group"
                id="hero_diagnostic_cta"
              >
                <span>Start Awareness Simulation</span>
                <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => {
                  const el = document.getElementById('how-it-works');
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full md:w-auto inline-flex items-center justify-center px-6 md:px-10 py-4 md:py-5 bg-[#0284c7] hover:bg-[#0270a9] border border-[#03a9f4]/20 text-white font-bold text-lg md:text-xl rounded-2xl shadow-[0_4px_16px_rgba(2,132,199,0.4)] hover:shadow-[0_8px_24px_rgba(2,132,199,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer group"
                id="hero_how_it_works_cta"
              >
                <span>How It Works</span>
                <ChevronDown className="w-5 h-5 ml-2 text-white/85 group-hover:text-white transition-all duration-250 group-hover:translate-y-0.5" />
              </button>
            </div>
            <p className="text-xs text-slate-300 font-medium tracking-wide">
              Free · 60 seconds · No tracking · No hardware required
            </p>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-350 max-w-2xl mx-auto font-semibold pt-1">
            <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>No vehicle connection</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>No insurance use</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>No hardware required</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              <span>60 seconds or less</span>
            </div>
          </div>

          {/* 5-SECOND VALUE STRIP (Secondary Simplified Info) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-slate-900/40">
            
            <div className="bg-slate-950/45 border border-slate-900 p-4 rounded-xl text-left backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-[10px]">01</div>
                <h3 className="font-bold text-sm text-slate-100">Awareness Score</h3>
              </div>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                Simulated 0–100 driver awareness profile.
              </p>
            </div>

            <div className="bg-slate-950/45 border border-slate-900 p-4 rounded-xl text-left backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-[10px]">02</div>
                <h3 className="font-bold text-sm text-slate-100">Fatigue Profile</h3>
              </div>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                See how timing and driving context may affect alertness.
              </p>
            </div>

            <div className="bg-slate-950/45 border border-slate-900 p-4 rounded-xl text-left backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px]">03</div>
                <h3 className="font-bold text-sm text-slate-100">Research Cohort</h3>
              </div>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                See where your profile fits in the validation study.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 2. WHAT THIS SIMULATION DOES */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Core Mechanics</span>
            <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">What this simulation does</h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              The Astrateq Gadgets Driver Awareness Simulation helps you explore how your driving frequency, fatigue exposure, attention habits, and Canadian road conditions may shape your awareness profile. Your result is simulated and used for pre-launch market validation only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-sky-50/60 to-sky-100/40 hover:from-white hover:via-sky-100/60 hover:to-sky-200/50 p-8 rounded-3xl border-2 border-sky-100/80 hover:border-[#0ea5e9] shadow-[0_12px_40px_rgba(14,165,233,0.06)] hover:shadow-[0_24px_60px_rgba(14,165,233,0.22)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer min-h-[300px] h-full" 
              id="sec2_card_1"
            >
              {/* Background dot-grid texture */}
              <div 
                className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-300"
                style={{ backgroundImage: 'radial-gradient(#0ea5e9 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-sky-200/20 rounded-full blur-2xl group-hover:bg-sky-200/40 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#0ea5e9]"></div>
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 opacity-90"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9] text-white flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-350">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold px-3 py-1.5 rounded-full bg-sky-50/90 text-sky-700 border border-sky-200/60 tracking-wider uppercase shadow-xs">
                    INPUT STAGE
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-extrabold text-sky-600 tracking-wider uppercase">Interactive Diagnostic</div>
                  <h3 className="font-sans font-black text-slate-900 text-2xl tracking-tight group-hover:text-sky-800 transition-colors duration-200">Behavioral Inputs</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                  You answer quick questions about driving frequency, commute patterns, fatigue exposure, and attention habits.
                </p>
              </div>
            </motion.div>
 
            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 hover:from-white hover:via-amber-100/60 hover:to-amber-200/50 p-8 rounded-3xl border-2 border-amber-100/80 hover:border-amber-500 shadow-[0_12px_40px_rgba(245,158,11,0.06)] hover:shadow-[0_24px_60px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer min-h-[300px] h-full" 
              id="sec2_card_2"
            >
              {/* Background dot-grid texture */}
              <div 
                className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-300"
                style={{ backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-200/20 rounded-full blur-2xl group-hover:bg-amber-200/40 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber-500"></div>
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 opacity-90"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-350">
                    <Gauge className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold px-3 py-1.5 rounded-full bg-amber-50/90 text-amber-700 border border-amber-200/60 tracking-wider uppercase shadow-xs">
                    ANALYSIS ENGINE
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-extrabold text-amber-700 tracking-wider uppercase">Core Algorithm</div>
                  <h3 className="font-sans font-black text-slate-900 text-2xl tracking-tight group-hover:text-amber-800 transition-colors duration-200">Simulated Profile</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                  The model generates a conceptual Driver Awareness Score and Fatigue Risk Awareness Profile.
                </p>
              </div>
            </motion.div>
 
            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-emerald-50/60 to-emerald-100/40 hover:from-white hover:via-emerald-100/60 hover:to-emerald-200/50 p-8 rounded-3xl border-2 border-emerald-100/80 hover:border-emerald-500 shadow-[0_12px_40px_rgba(16,185,129,0.06)] hover:shadow-[0_24px_60px_rgba(16,185,129,0.22)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer min-h-[300px] h-full" 
              id="sec2_card_3"
            >
              {/* Background dot-grid texture */}
              <div 
                className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-300"
                style={{ backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-200/20 rounded-full blur-2xl group-hover:bg-emerald-200/40 group-hover:scale-110 transition-all duration-500"></div>
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-emerald-500"></div>
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-90"></div>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-350">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold px-3 py-1.5 rounded-full bg-emerald-50/90 text-emerald-700 border border-emerald-200/60 tracking-wider uppercase shadow-xs">
                    VALIDATION
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="text-[11px] font-mono font-extrabold text-emerald-700 tracking-wider uppercase">Market Validation</div>
                  <h3 className="font-sans font-black text-slate-900 text-2xl tracking-tight group-hover:text-emerald-800 transition-colors duration-200">Research Signal</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                  Your result helps Astrateq Gadgets understand whether Canadian drivers want this type of awareness intelligence tool.
                </p>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 3. WHAT YOU'LL UNLOCK */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase block">Simulated Deliverables</span>
            <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">What you’ll receive in 60 seconds</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-sky-50/60 to-sky-100/40 hover:from-white hover:via-sky-100/60 hover:to-sky-200/50 p-8 rounded-3xl border-2 border-sky-100/80 hover:border-[#0ea5e9] shadow-[0_12px_40px_rgba(14,165,233,0.06)] hover:shadow-[0_24px_60px_rgba(14,165,233,0.22)] transition-all duration-300 flex flex-col justify-between min-h-[300px] h-full relative overflow-hidden group cursor-pointer" 
              id="sec3_card_1"
            >
              {/* Background dot-grid texture */}
              <div 
                className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-300"
                style={{ backgroundImage: 'radial-gradient(#0ea5e9 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-[#0ea5e9]"></div>
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-sky-400 via-cyan-400 to-sky-500 opacity-90"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-sky-200/15 rounded-full blur-2xl group-hover:bg-sky-200/30 transition-all duration-500"></div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-[#0ea5e9] text-white flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-115 group-hover:rotate-2 transition-all duration-300">
                    <Gauge className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-sky-50/90 text-sky-700 px-3 py-1.5 rounded-full uppercase tracking-wider border border-sky-200/60 shadow-xs">
                    Simulated Output
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-black text-2xl text-slate-900 group-hover:text-[#0ea5e9] transition-colors duration-250">Driver Awareness Score</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                    A simulated 0–100 score based on driving habits, attention patterns, fatigue exposure, and road context.
                  </p>
                </div>
              </div>
            </motion.div>
 
            {/* Card 2 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 hover:from-white hover:via-amber-100/60 hover:to-amber-200/50 p-8 rounded-3xl border-2 border-amber-100/80 hover:border-amber-500 shadow-[0_12px_40px_rgba(245,158,11,0.06)] hover:shadow-[0_24px_60px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between min-h-[300px] h-full relative overflow-hidden group cursor-pointer" 
              id="sec3_card_2"
            >
              {/* Background dot-grid texture */}
              <div 
                className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-300"
                style={{ backgroundImage: 'radial-gradient(#f59e0b 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-amber-500"></div>
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 opacity-90"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-amber-200/15 rounded-full blur-2xl group-hover:bg-amber-200/30 transition-all duration-500"></div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-115 group-hover:rotate-2 transition-all duration-300">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-amber-50/90 text-amber-700 px-3 py-1.5 rounded-full uppercase tracking-wider border border-amber-200/60 shadow-xs">
                    Behavioral Signal
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-black text-2xl text-slate-900 group-hover:text-amber-750 transition-colors duration-250">Fatigue Risk Profile</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                    Understand how time of day, commute type, longer drives, and road conditions may influence awareness patterns.
                  </p>
                </div>
              </div>
            </motion.div>
 
            {/* Card 3 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.025 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-emerald-50/60 to-emerald-100/40 hover:from-white hover:via-emerald-100/60 hover:to-emerald-200/50 p-8 rounded-3xl border-2 border-emerald-100/80 hover:border-emerald-500 shadow-[0_12px_40px_rgba(16,185,129,0.06)] hover:shadow-[0_24px_60px_rgba(16,185,129,0.22)] transition-all duration-300 flex flex-col justify-between min-h-[300px] h-full relative overflow-hidden group cursor-pointer" 
              id="sec3_card_3"
            >
              {/* Background dot-grid texture */}
              <div 
                className="absolute inset-0 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity duration-300"
                style={{ backgroundImage: 'radial-gradient(#10b981 1.5px, transparent 1.5px)', backgroundSize: '16px 16px' }}
              />
              <div className="absolute left-0 top-0 bottom-0 w-[5px] bg-emerald-500"></div>
              <div className="absolute top-0 left-0 right-0 h-[5px] bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 opacity-90"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-200/15 rounded-full blur-2xl group-hover:bg-emerald-200/30 transition-all duration-500"></div>
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-115 group-hover:rotate-2 transition-all duration-300">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-emerald-50/90 text-emerald-700 px-3 py-1.5 rounded-full uppercase tracking-wider border border-emerald-200/60 shadow-xs">
                    Cohort Signal
                  </span>
                </div>
                <div className="space-y-2">
                  <h3 className="font-sans font-black text-2xl text-slate-900 group-hover:text-emerald-750 transition-colors duration-250">Research Cohort</h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                    See which validation cohort your simulated awareness profile aligns with and whether you may qualify for research participation.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section id="how-it-works" className="py-24 px-6 bg-slate-100/70 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-extrabold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 shadow-xs">
              Interactive Guide
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              How It Works
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto font-medium">
              A quick, three-step simulation designed specifically for Canadian commuters.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Connector dashed gradient line */}
            <div className="hidden md:block absolute top-[110px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-sky-400 via-violet-400 to-emerald-400 opacity-60 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              
              {/* Step 1 */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.025 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-white via-sky-50/20 to-sky-100/10 p-8 rounded-3xl border-2 border-sky-100 shadow-[0_12px_40px_rgba(14,165,233,0.04)] hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] hover:border-sky-400/80 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden h-full" 
                id="sec4_card_1"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-[#0ea5e9]"></div>
                <div className="w-16 h-16 rounded-full bg-[#0ea5e9] text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-sky-500/30 ring-4 ring-sky-100 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 mb-6">
                  1
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-1 rounded-full mb-3 border border-sky-200/40">Diagnostic Stage</span>
                <h3 className="font-sans font-extrabold text-slate-950 text-xl group-hover:text-[#0ea5e9] transition-colors duration-200">
                  Answer awareness questions
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-semibold">
                  Tell us about your driving frequency, commute patterns, fatigue exposure, and attention habits.
                </p>
              </motion.div>
 
              {/* Step 2 */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.025 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-white via-violet-50/20 to-violet-100/10 p-8 rounded-3xl border-2 border-violet-100 shadow-[0_12px_40px_rgba(139,92,246,0.04)] hover:shadow-[0_24px_50px_rgba(139,92,246,0.18)] hover:border-violet-400/80 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden h-full" 
                id="sec4_card_2"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-violet-500"></div>
                <div className="w-16 h-16 rounded-full bg-violet-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-violet-500/30 ring-4 ring-violet-100 group-hover:scale-115 group-hover:-rotate-6 transition-all duration-300 mb-6">
                  2
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full mb-3 border border-violet-200/40">Simulation Stage</span>
                <h3 className="font-sans font-extrabold text-slate-950 text-xl group-hover:text-violet-700 transition-colors duration-200">
                  Get simulated profile
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-semibold">
                  Receive a conceptual Driver Awareness Score and fatigue awareness summary.
                </p>
              </motion.div>
 
              {/* Step 3 */}
              <motion.div 
                whileHover={{ y: -8, scale: 1.025 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-br from-white via-emerald-50/20 to-emerald-100/10 p-8 rounded-3xl border-2 border-emerald-100 shadow-[0_12px_40px_rgba(16,185,129,0.04)] hover:shadow-[0_24px_50px_rgba(16,185,129,0.18)] hover:border-emerald-400/80 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden h-full" 
                id="sec4_card_3"
              >
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-emerald-500"></div>
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-emerald-500/30 ring-4 ring-emerald-100 group-hover:scale-115 group-hover:rotate-6 transition-all duration-300 mb-6">
                  3
                </div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full mb-3 border border-emerald-200/40">Validation Stage</span>
                <h3 className="font-sans font-extrabold text-slate-950 text-xl group-hover:text-emerald-700 transition-colors duration-200">
                  See research cohort
                </h3>
                <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed font-semibold">
                  Learn whether your profile aligns with Astrateq Gadgets’ pre-launch research cohort.
                </p>
              </motion.div>

            </div>
          </div>

        </div>
      </section>

      {/* 5. WHAT ASTRATEQ GADGETS IS VALIDATING FIRST */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-150">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Concept Validation</span>
            <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight">
              What we are validating together
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Astrateq Gadgets is validating whether Canadian drivers want a software-based Driver Awareness Intelligence concept that helps them understand fatigue exposure, attention patterns, and safer driving behavior — without vehicle tracking, insurance scoring, or hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 pl-9 rounded-3xl border-2 border-sky-150 shadow-[0_0_15px_rgba(14,165,233,0.13)] hover:shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:border-sky-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full" 
              id="sec5_card_1"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-sky-600"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100/60 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-sky-600 transition-colors duration-200">Driver awareness intelligence</h3>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  A software-led concept that turns driving habits, fatigue exposure, and attention patterns into a simulated awareness profile.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 pl-9 rounded-3xl border-2 border-violet-150 shadow-[0_0_15px_rgba(139,92,246,0.13)] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:border-violet-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full" 
              id="sec5_card_2"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-violet-400 to-violet-600"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100/60 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-violet-600 transition-colors duration-200">Canadian driving context</h3>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  Designed around commutes, long drives, winter visibility, traffic fatigue, and privacy-conscious Canadian drivers.
                </p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 pl-9 rounded-3xl border-2 border-indigo-150 shadow-[0_0_15px_rgba(99,102,241,0.13)] hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:border-indigo-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full" 
              id="sec5_card_3"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/60 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors duration-200">Future product direction</h3>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  Your responses help determine whether this software concept should move toward prototype development.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 6. INTERACTIVE SIMULATION PORTAL */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#F4F8FC] to-[#EBF3FC] border-b border-[#DCEBFA]" id="readiness-check">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              Active Validation Portal
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#102A43] tracking-tight">
              Driver Awareness Simulation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed font-medium">
              Complete this 60-second behavioral simulation to generate your conceptual Driver Awareness Score.
            </p>
            <p className="text-xs text-sky-700/85 font-bold tracking-wide">
              No vehicle connection. No insurance use. No hardware required.
            </p>
            <p className="text-[11px] text-slate-400 mt-2 max-w-xl mx-auto leading-relaxed">
              This is a simulated behavioral research model. No vehicle data is accessed, tracked, or transmitted. Results are conceptual and used only for market research and concept validation.
            </p>
          </div>

          <div className="bg-[#090d16] rounded-3xl border border-sky-500/15 shadow-[0_24px_60px_rgba(0,0,0,0.55)] overflow-hidden p-3 sm:p-8 max-w-3xl mx-auto">
            {quizView}
          </div>
        </div>
      </section>

      {/* 7. WHAT HAPPENS AFTER YOUR SIMULATION */}
      <section className="py-22 px-6 bg-[#F4F8FC] border-y border-[#DCEBFA]">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-200">Post-Simulation Pathway</span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#102A43] tracking-tight">
              What happens after your simulation?
            </h2>
            <p className="text-sm text-slate-500 max-w-lg mx-auto">
              Our pre-launch cohort pathway is transparent, secure, and completely risk-free.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Step 1: Concept Validation */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white to-sky-50/30 p-8 rounded-3xl border-2 border-sky-150 shadow-[0_0_15px_rgba(14,165,233,0.13)] hover:shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:border-sky-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full" 
              id="sec7_card_1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100/60 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    PHASE 01
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-[#102A43] text-lg group-hover:text-sky-650 transition-colors duration-200">Concept Validation</h3>
                <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                  Current phase assessing early interest and user-centric simulation metrics.
                </p>
              </div>
            </motion.div>

            {/* Step 2: Simulation Analytics */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white to-violet-50/30 p-8 rounded-3xl border-2 border-violet-150 shadow-[0_0_15px_rgba(139,92,246,0.13)] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:border-violet-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full" 
              id="sec7_card_2"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100/60 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-violet-50 text-violet-700 border border-violet-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    PHASE 02
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-[#102A43] text-lg group-hover:text-violet-650 transition-colors duration-200">Simulation Analytics</h3>
                <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                  Aggregating anonymous telemetry feedback to map regional baseline focus profiles.
                </p>
              </div>
            </motion.div>

            {/* Step 3: Prototype Exploration */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white to-amber-50/30 p-8 rounded-3xl border-2 border-amber-150 shadow-[0_0_15px_rgba(245,158,11,0.13)] hover:shadow-[0_0_25px_rgba(245,158,11,0.35)] hover:border-amber-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full" 
              id="sec7_card_3"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center border border-amber-100/60 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Smartphone className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-amber-50 text-amber-700 border border-amber-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    PHASE 03
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-[#102A43] text-lg group-hover:text-amber-650 transition-colors duration-200">Prototype Exploration</h3>
                <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                  Evaluating high-performance, 100% local, offline smartphone engine limits.
                </p>
              </div>
            </motion.div>

            {/* Step 4: Pilot Study */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white to-emerald-50/30 p-8 rounded-3xl border-2 border-emerald-150 shadow-[0_0_15px_rgba(16,185,129,0.13)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full" 
              id="sec7_card_4"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/60 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    PHASE 04
                  </span>
                </div>
                <h3 className="font-sans font-extrabold text-[#102A43] text-lg group-hover:text-emerald-650 transition-colors duration-200">Pilot Study</h3>
                <p className="text-xs text-slate-650 leading-relaxed font-semibold">
                  Inviting validated cohort participants to early sandboxed alpha applications if threshold demand is validated.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. CANADIAN CONDITIONS SECTION */}
      <section className="py-20 px-6 bg-slate-950 text-white relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={commuteImage}
            alt="Ontario highway at twilight representing Canadian driving commute realities"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Ambient Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40 z-0"></div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider font-mono">
              <span>Awareness intelligence without surveillance</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight drop-shadow-md">
              Core Overarching Principles
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Many safety tools focus on vehicle data, tracking, or insurance-style monitoring. Astrateq Gadgets is exploring a different approach: a software-based awareness simulation that helps Canadian drivers understand fatigue exposure, attention patterns, road conditions, and privacy-first safety behavior.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0" />
                <span className="text-slate-200">Long highway commutes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0" />
                <span className="text-slate-200">Late-night or early-morning driving</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0" />
                <span className="text-slate-200">Winter visibility and poor weather</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0" />
                <span className="text-slate-200">Traffic fatigue in major Canadian cities</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#38bdf8] shrink-0" />
                <span className="text-slate-200">Privacy-first driver awareness research</span>
              </li>
            </ul>
          </div>

          {/* Premium Interactive Mockup representation card */}
          <div className="bg-slate-900/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-mono text-slate-350 font-bold uppercase tracking-wider">Driver Awareness Intelligence Simulation</span>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">EST: 60S</span>
            </div>
            
            <div className="space-y-3">
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850">
                <span className="text-[10px] font-mono text-brand-secondary block font-bold uppercase">Behavioral Inputs</span>
                <span className="text-sm font-semibold text-white mt-1 block">Frequency, Commute Type, Fatigue & Attention Patterns</span>
              </div>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-850">
                <span className="text-[10px] font-mono text-emerald-400 block font-bold uppercase">Simulated Awareness Profile</span>
                <span className="text-sm font-semibold text-white mt-1 block">Awareness Score, Risk Profile, Research Cohort Pathway</span>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-slate-500 leading-normal text-center font-medium border-t border-slate-800/60">
              No vehicle connection · No tracking · No insurance use <br/>
              <span className="text-slate-600 block mt-1 font-mono text-[9px] uppercase">Concept validation only</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8.2 FUTURE PHYSICAL ACCESSORIES SECTION */}
      <section className="py-24 px-6 bg-[#091122] border-t border-slate-900 text-white relative">
        <div className="max-w-5xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase bg-sky-950/80 px-3.5 py-1.5 rounded-full border border-sky-800/60 shadow-xs">
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              Pre-Launch Gadget Pipeline
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Future Privacy-First Physical Accessories
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We are designing localized physical devices that integrate with our Driver Awareness model. These conceptual accessories aim to assist drivers on the road with 100% offline edge processing.
            </p>
          </div>

          {/* Two Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
            
            {/* Card 1: Astrateq Vision Shield */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group h-full shadow-2xl"
              id="accessories_card_1"
            >
              <div>
                {/* Image container */}
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <img 
                    src={visionShieldInCar} 
                    alt="Astrateq Vision Shield Visor Mounted HUD concept" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091122]/90 via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-sky-950 text-sky-400 border border-sky-800/60 px-3 py-1 rounded-full uppercase tracking-wider">
                      Visor Mounted HUD
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">
                      ASTR-01
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight">
                    Astrateq Vision Shield™
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    A companion head-up display clip-on that matches your profile's attention intervals. Projects soft visual alerts directly into your field of view during high-exposure commute segments.
                  </p>

                  {/* Horizontal line divider */}
                  <div className="border-t border-slate-800/80 my-4"></div>

                  {/* Bullet list */}
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>No-look visual guidance (projects on road)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Polarized micro-projector for winter glare</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  <span className="text-slate-400 font-bold">Status: <span className="text-[#38bdf8]">Concept Validation</span></span>
                </div>
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md font-bold tracking-wider uppercase text-[10px] border border-slate-700/50">
                  EST: Q4 2026
                </span>
              </div>
            </motion.div>

            {/* Card 2: Astrateq Aura Dial */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-slate-900/60 backdrop-blur-md rounded-3xl border border-slate-800 overflow-hidden flex flex-col justify-between group h-full shadow-2xl"
              id="accessories_card_2"
            >
              <div>
                {/* Image container */}
                <div className="h-64 sm:h-72 w-full overflow-hidden relative">
                  <img 
                    src={auraDialInCar} 
                    alt="Astrateq Aura Dial Ambient Console concept" 
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091122]/90 via-transparent to-transparent"></div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold bg-emerald-950 text-emerald-400 border border-emerald-800/60 px-3 py-1 rounded-full uppercase tracking-wider">
                      Ambient Console
                    </span>
                    <span className="text-xs font-mono text-slate-500 font-semibold tracking-wider">
                      ASTR-02
                    </span>
                  </div>

                  <h3 className="font-sans font-extrabold text-2xl text-white tracking-tight">
                    Astrateq Aura Dial™
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    An elegant dashboard console that outputs non-distracting chromatic light pulses and subtle sound-attenuated signals. Calibrated to align with your personal circadian fatigue windows.
                  </p>

                  {/* Horizontal line divider */}
                  <div className="border-t border-slate-800/80 my-4"></div>

                  {/* Bullet list */}
                  <ul className="space-y-3.5 text-xs text-slate-300">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Bluetooth-free physical operation dials</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>Real-time local temperature response tuning</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-8 pb-8 pt-4 border-t border-slate-800/40 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-slate-400 font-bold">Status: <span className="text-[#34d399]">Concept Validation</span></span>
                </div>
                <span className="bg-slate-800 text-slate-300 px-3 py-1 rounded-md font-bold tracking-wider uppercase text-[10px] border border-slate-700/50">
                  EST: Q1 2027
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8.5 INTERACTIVE FAQ ACCORDION (Credibility & Obstacle Removal) */}
      <section className="py-22 px-6 bg-white border-t border-slate-150">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Frequently Asked Questions</span>
            <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight">
              Pre-Launch & Cohort Questions
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Everything you need to know about the Astrateq Gadgets driver validation program.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "What is Astrateq Gadgets?",
                a: "Astrateq Gadgets is an upcoming Canadian technology brand researching a new, privacy-first approach to driver awareness. We are exploring whether a dedicated driver awareness platform should exist, optimized for severe Canadian highway conditions, commuter stress, and late-night driving fatigue."
              },
              {
                q: "How does the simulated scoring model work?",
                a: "The diagnostic runs a relative weighted computation based on your behavioral inputs (like weekly highway exposure, driving hours, sleep routine, and winter weather exposure) compared to optimal awareness benchmarks. This produces your simulated 0-100 Driver Awareness Score."
              },
              {
                q: "Is my driving data being tracked or shared?",
                a: "Absolutely not. Astrateq Gadgets operates on a strict privacy-first architecture. There are no vehicle connections, telemetry collectors, or active tracking codes. The simulation is purely behavioral, and your results are never shared with insurance agencies or third parties."
              },
              {
                q: "Is there any cost to register or reserve a slot?",
                a: "No, the simulation and priority cohort reservation are 100% free. It serves to gauge interest and gather validation data to help explore whether Canadian drivers see value in a privacy-first driver awareness platform."
              },
              {
                q: "Do I need any special hardware for this?",
                a: "No, this is a 100% software-based behavioral simulation. We are exploring a new approach to driver awareness and validating demand before investing in hardware or commercial development. Cohort members will have priority if we proceed with future testing programs."
              }
            ].map((faq, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-150 rounded-2xl overflow-hidden transition-all duration-200"
                  id={`faq_accordion_item_${idx}`}
                >
                  <button
                    onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-bold text-slate-900 hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-primary shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-3" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            See what your Driver Awareness Profile suggests.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto leading-relaxed">
            Complete the 60-second simulation to preview your awareness score, fatigue profile, and research cohort classification.
          </p>
          <div className="pt-4">
            <button
              onClick={onStartDiagnostic}
              className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-sky-500/15 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 flex items-center gap-2 mx-auto cursor-pointer"
              id="final_landing_diagnostic_cta"
            >
              <span>Start Awareness Simulation</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-[11px] text-slate-400 mt-2.5 block font-mono font-bold uppercase tracking-wider">
              Free · 60 seconds · No hardware required
            </span>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 bg-[#0ea5e9] hover:bg-[#0284c7] text-white p-3.5 rounded-full shadow-[0_8px_30px_rgba(14,165,233,0.4)] hover:shadow-[0_12px_35px_rgba(14,165,233,0.6)] border border-sky-400/30 hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer group flex items-center justify-center"
          aria-label="Scroll to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-6 h-6 stroke-[3] text-white group-hover:-translate-y-0.5 transition-transform duration-250" />
        </motion.button>
      )}

    </div>
  );
}

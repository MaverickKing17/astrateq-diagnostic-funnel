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
import auraDialImage from '../assets/images/aura_dial_premium_pro_1782848205367.jpg';

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
        
        {/* Lighter overlays to make the image much clearer and details pop, while retaining excellent legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030d1a]/80 via-[#030d1a]/30 to-[#030d1a]/85 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d1a]/70 via-transparent to-[#030d1a]/70 z-0" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-transparent via-[#030d1a]/10 to-[#030d1a]/75 z-0" />

        {/* Content floats directly over the background image */}
        <div className="relative max-w-5xl w-full mx-auto z-10 text-center space-y-6 sm:space-y-8 px-4 py-8">
          
          {/* Privacy-First Badge Above Title */}
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/35 text-cyan-200 text-xs font-semibold uppercase tracking-wider mx-auto shadow-md backdrop-blur-xs">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-300" />
              <span>Privacy-First Driver Awareness Intelligence</span>
            </div>
            <span className="hidden sm:inline text-cyan-500/60 font-light">|</span>
            <span className="text-cyan-300 font-mono text-[10px] tracking-normal font-bold">Awareness intelligence without surveillance.</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.12] max-w-4xl mx-auto">
            Check your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-cyan-300 font-black">Driver Awareness Readiness</span> in 60 seconds.
          </h1>

          <div className="max-w-3xl mx-auto">
            <p className="text-slate-100 text-sm sm:text-base md:text-lg leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
              Answer a few quick questions to receive a simulated Driver Awareness Score, Fatigue Risk Awareness Profile, and Research Cohort Classification — without vehicle tracking, insurance scoring, or hardware.
            </p>
          </div>

          {/* Primary CTA Button (Dominant Centered Block) */}
          <div className="space-y-3.5 pt-4 max-w-xl mx-auto">
            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-cyan-500 hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-extrabold text-xl rounded-2xl shadow-[0_0_40px_rgba(14,165,233,0.35)] hover:shadow-[0_0_50px_rgba(56,189,248,0.5)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer border border-cyan-400/30 group"
              id="hero_diagnostic_cta"
            >
              <span>Start Awareness Simulation</span>
              <ChevronRight className="w-6 h-6 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
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
                <h4 className="font-bold text-sm text-slate-100">Awareness Score</h4>
              </div>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                Simulated 0–100 driver awareness profile.
              </p>
            </div>

            <div className="bg-slate-950/45 border border-slate-900 p-4 rounded-xl text-left backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-400 flex items-center justify-center font-bold text-[10px]">02</div>
                <h4 className="font-bold text-sm text-slate-100">Fatigue Profile</h4>
              </div>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                See how timing and driving context may affect alertness.
              </p>
            </div>

            <div className="bg-slate-950/45 border border-slate-900 p-4 rounded-xl text-left backdrop-blur-xs">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-5 h-5 rounded-md bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-[10px]">03</div>
                <h4 className="font-bold text-sm text-slate-100">Research Cohort</h4>
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
              The Astrateq Driver Awareness Simulation helps you explore how your driving frequency, fatigue exposure, attention habits, and Canadian road conditions may shape your awareness profile. Your result is simulated and used for pre-launch market validation only.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="bg-gradient-to-br from-white via-sky-50/60 to-sky-100/40 hover:from-white hover:via-sky-100/60 hover:to-sky-200/50 p-8 rounded-3xl border-2 border-sky-100/80 hover:border-[#0ea5e9] shadow-[0_12px_40px_rgba(14,165,233,0.06)] hover:shadow-[0_24px_60px_rgba(14,165,233,0.22)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer min-h-[300px]" 
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
                  <h4 className="font-sans font-black text-slate-900 text-2xl tracking-tight group-hover:text-sky-800 transition-colors duration-200">Behavioral Inputs</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                  You answer quick questions about driving frequency, commute patterns, fatigue exposure, and attention habits.
                </p>
              </div>
            </motion.div>
 
            {/* Card 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 hover:from-white hover:via-amber-100/60 hover:to-amber-200/50 p-8 rounded-3xl border-2 border-amber-100/80 hover:border-amber-500 shadow-[0_12px_40px_rgba(245,158,11,0.06)] hover:shadow-[0_24px_60px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer min-h-[300px]" 
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
                  <h4 className="font-sans font-black text-slate-900 text-2xl tracking-tight group-hover:text-amber-800 transition-colors duration-200">Simulated Profile</h4>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold">
                  The model generates a conceptual Driver Awareness Score and Fatigue Risk Awareness Profile.
                </p>
              </div>
            </motion.div>
 
            {/* Card 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="bg-gradient-to-br from-white via-emerald-50/60 to-emerald-100/40 hover:from-white hover:via-emerald-100/60 hover:to-emerald-200/50 p-8 rounded-3xl border-2 border-emerald-100/80 hover:border-emerald-500 shadow-[0_12px_40px_rgba(16,185,129,0.06)] hover:shadow-[0_24px_60px_rgba(16,185,129,0.22)] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden cursor-pointer min-h-[300px]" 
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
                  <h4 className="font-sans font-black text-slate-900 text-2xl tracking-tight group-hover:text-emerald-800 transition-colors duration-200">Research Signal</h4>
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
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Simulated Deliverables</h2>
            <p className="font-display font-bold text-3xl text-slate-900 tracking-tight">What you’ll receive in 60 seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="bg-gradient-to-br from-white via-sky-50/60 to-sky-100/40 hover:from-white hover:via-sky-100/60 hover:to-sky-200/50 p-8 rounded-3xl border-2 border-sky-100/80 hover:border-[#0ea5e9] shadow-[0_12px_40px_rgba(14,165,233,0.06)] hover:shadow-[0_24px_60px_rgba(14,165,233,0.22)] transition-all duration-300 flex flex-col justify-between min-h-[300px] relative overflow-hidden group cursor-pointer" 
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="bg-gradient-to-br from-white via-amber-50/60 to-amber-100/40 hover:from-white hover:via-amber-100/60 hover:to-amber-200/50 p-8 rounded-3xl border-2 border-amber-100/80 hover:border-amber-500 shadow-[0_12px_40px_rgba(245,158,11,0.06)] hover:shadow-[0_24px_60px_rgba(245,158,11,0.22)] transition-all duration-300 flex flex-col justify-between min-h-[300px] relative overflow-hidden group cursor-pointer" 
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -8, scale: 1.025 }}
              className="bg-gradient-to-br from-white via-emerald-50/60 to-emerald-100/40 hover:from-white hover:via-emerald-100/60 hover:to-emerald-200/50 p-8 rounded-3xl border-2 border-emerald-100/80 hover:border-emerald-500 shadow-[0_12px_40px_rgba(16,185,129,0.06)] hover:shadow-[0_24px_60px_rgba(16,185,129,0.22)] transition-all duration-300 flex flex-col justify-between min-h-[300px] relative overflow-hidden group cursor-pointer" 
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
      <section className="py-24 px-6 bg-slate-100/70 border-b border-slate-200">
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="bg-gradient-to-br from-white via-sky-50/20 to-sky-100/10 p-8 rounded-3xl border-2 border-sky-100 shadow-[0_12px_40px_rgba(14,165,233,0.04)] hover:shadow-[0_24px_50px_rgba(14,165,233,0.18)] hover:border-sky-400/80 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden" 
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.25 }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="bg-gradient-to-br from-white via-violet-50/20 to-violet-100/10 p-8 rounded-3xl border-2 border-violet-100 shadow-[0_12px_40px_rgba(139,92,246,0.04)] hover:shadow-[0_24px_50px_rgba(139,92,246,0.18)] hover:border-violet-400/80 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden" 
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ y: -8, scale: 1.025 }}
                className="bg-gradient-to-br from-white via-emerald-50/20 to-emerald-100/10 p-8 rounded-3xl border-2 border-emerald-100 shadow-[0_12px_40px_rgba(16,185,129,0.04)] hover:shadow-[0_24px_50px_rgba(16,185,129,0.18)] hover:border-emerald-400/80 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer relative overflow-hidden" 
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

      {/* 4.5 PRE-LAUNCH GADGET PIPELINE (Aesthetic Physical Concepts) */}
      <section className="py-20 px-6 bg-slate-900 text-white border-b border-slate-950" id="gadget-pipeline">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-[#38bdf8] uppercase bg-slate-800 px-3.5 py-1.5 rounded-full border border-slate-750">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
              Pre-Launch Gadget Pipeline
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Future Privacy-First Physical Accessories
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              We are designing localized physical devices that integrate with our Driver Awareness model. These conceptual accessories aim to assist drivers on the road with 100% offline edge processing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Gadget 1 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0b0f19] border-2 border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl relative group hover:border-[#0ea5e9]/70 hover:shadow-[0_20px_50px_rgba(14,165,233,0.18)] transition-all duration-300 flex flex-col justify-between cursor-pointer" 
              id="gadget-vision-shield-card"
            >
              {/* Glowing accent background gradient bubble */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-500/5 rounded-full blur-3xl group-hover:bg-sky-500/10 transition-all duration-500 pointer-events-none" />
              
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b-2 border-slate-900">
                  <img 
                    src="https://i.ibb.co/jZxvBR0n/Chat-GPT-Image-Jun-30-2026-03-32-52-PM.png" 
                    alt="Astrateq Vision Shield Visor Mounted HUD clear dashboard photography" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>

                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-sky-500/15 text-[#38bdf8] border-2 border-sky-500/30 px-3 py-1 rounded-full font-mono uppercase tracking-widest font-black shadow-[0_2px_10px_rgba(14,165,233,0.15)]">
                      Visor Mounted HUD
                    </span>
                    <span className="text-slate-500 font-mono text-xs font-bold">ASTR-01</span>
                  </div>
                  
                  <h3 className="font-sans font-black text-2xl text-white group-hover:text-[#38bdf8] transition-colors duration-200">Astrateq Vision Shield™</h3>
                  <p className="text-sm text-slate-350 leading-relaxed font-semibold">
                    A companion head-up display clip-on that matches your profile's attention intervals. Projects soft visual alerts directly into your field of view during high-exposure commute segments.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-850/40">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-medium">No-look visual guidance (projects on road)</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-medium">100% offline edge computing — zero storage</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span className="font-medium">Polarized micro-projector for winter glare</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mx-8 pb-8 pt-6 border-t-2 border-slate-900 flex items-center justify-between text-xs text-slate-400">
                <span>Status: <strong className="text-[#38bdf8] font-bold">Concept Validation</strong></span>
                <span className="font-mono text-[10px] bg-slate-800 text-slate-200 px-3 py-1 rounded-md font-bold uppercase tracking-wider">EST: Q4 2026</span>
              </div>
            </motion.div>

            {/* Gadget 2 */}
            <motion.div 
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0b0f19] border-2 border-slate-800/80 rounded-3xl overflow-hidden shadow-2xl relative group hover:border-emerald-500/70 hover:shadow-[0_20px_50px_rgba(16,185,129,0.18)] transition-all duration-300 flex flex-col justify-between cursor-pointer" 
              id="gadget-aura-dial-card"
            >
              {/* Glowing accent background gradient bubble */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 rounded-full blur-3xl group-hover:bg-emerald-500/10 transition-all duration-500 pointer-events-none" />
              
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900 border-b-2 border-slate-900">
                  <img 
                    src={auraDialImage} 
                    alt="Astrateq Aura Dial professional dashboard dashboard photography" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                </div>

                <div className="p-8 space-y-5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] bg-emerald-500/15 text-emerald-400 border-2 border-emerald-500/30 px-3 py-1 rounded-full font-mono uppercase tracking-widest font-black shadow-[0_2px_10px_rgba(16,185,129,0.15)]">
                      Ambient Console
                    </span>
                    <span className="text-slate-550 font-mono text-xs font-bold">ASTR-02</span>
                  </div>
                  
                  <h3 className="font-sans font-bold text-2xl text-white group-hover:text-emerald-400 transition-colors duration-200">Astrateq Aura Dial™</h3>
                  <p className="text-sm text-slate-350 leading-relaxed font-semibold">
                    An elegant dashboard console that outputs non-distracting chromatic light pulses and subtle sound-attenuated signals. Calibrated to align with your personal circadian fatigue windows.
                  </p>

                  <ul className="space-y-2.5 text-xs text-slate-300 pt-2 border-t border-slate-850/40">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">Bluetooth-free physical operation dials</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">Multi-tone sound cues designed to pierce road noise</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-medium">Real-time local temperature response tuning</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mx-8 pb-8 pt-6 border-t-2 border-slate-900 flex items-center justify-between text-xs text-slate-400">
                <span>Status: <strong className="text-emerald-400 font-bold">Concept Validation</strong></span>
                <span className="font-mono text-[10px] bg-slate-800 text-slate-200 px-3 py-1 rounded-md font-bold uppercase tracking-wider">EST: Q1 2027</span>
              </div>
            </motion.div>

          </div>

          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-850/60 text-center max-w-2xl mx-auto">
            <p className="text-xs text-slate-350 leading-relaxed">
              💡 <strong>Cohort Advantage:</strong> Reserve members gain guaranteed access to early beta testing invitations and Founding Cohort pricing tiers.
            </p>
          </div>

        </div>
      </section>

      {/* 5. WHAT ASTRATEQ IS VALIDATING FIRST */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-150">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Concept Validation</span>
            <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight">
              What Astrateq is validating first
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Astrateq Gadgets is validating whether Canadian drivers want a software-based Driver Awareness Intelligence concept that helps them understand fatigue exposure, attention patterns, and safer driving behavior — without vehicle tracking, insurance scoring, or hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 pl-9 rounded-3xl border-2 border-sky-150 shadow-[0_0_15px_rgba(14,165,233,0.13)] hover:shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:border-sky-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" 
              id="sec5_card_1"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-sky-600"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100/60 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-sky-600 transition-colors duration-200">Driver awareness intelligence</h4>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  A software-led concept that turns driving habits, fatigue exposure, and attention patterns into a simulated awareness profile.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 pl-9 rounded-3xl border-2 border-violet-150 shadow-[0_0_15px_rgba(139,92,246,0.13)] hover:shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:border-violet-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" 
              id="sec5_card_2"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-violet-400 to-violet-600"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center border border-violet-100/60 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-violet-600 transition-colors duration-200">Canadian driving context</h4>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  Designed around commutes, long drives, winter visibility, traffic fatigue, and privacy-conscious Canadian drivers.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-white to-slate-50/50 p-8 pl-9 rounded-3xl border-2 border-indigo-150 shadow-[0_0_15px_rgba(99,102,241,0.13)] hover:shadow-[0_0_25px_rgba(99,102,241,0.35)] hover:border-indigo-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden" 
              id="sec5_card_3"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-indigo-400 to-indigo-600"></div>
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center border border-indigo-100/60 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-sans font-extrabold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors duration-200">Future product direction</h4>
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

          <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-[#DCEBFA] shadow-2xl overflow-hidden p-2 sm:p-6 max-w-3xl mx-auto">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-white to-sky-50/30 p-8 rounded-3xl border-2 border-sky-150 shadow-[0_0_15px_rgba(14,165,233,0.13)] hover:shadow-[0_0_25px_rgba(14,165,233,0.35)] hover:border-sky-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group" 
              id="sec7_card_1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center border border-sky-100/60 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Gauge className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    STEP 01
                  </span>
                </div>
                <h4 className="font-sans font-extrabold text-[#102A43] text-lg group-hover:text-sky-650 transition-colors duration-200">Receive your awareness profile</h4>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  See your simulated Driver Awareness Score and Fatigue Risk Awareness Profile.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="bg-gradient-to-br from-white to-cyan-50/30 p-8 rounded-3xl border-2 border-cyan-150 shadow-[0_0_15px_rgba(6,182,212,0.13)] hover:shadow-[0_0_25px_rgba(6,182,212,0.35)] hover:border-cyan-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group" 
              id="sec7_card_2"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center border border-cyan-100/60 group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-cyan-50 text-cyan-700 border border-cyan-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    STEP 02
                  </span>
                </div>
                <h4 className="font-sans font-extrabold text-[#102A43] text-lg group-hover:text-cyan-650 transition-colors duration-200">View your research cohort</h4>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  Understand which validation cohort your awareness profile aligns with.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gradient-to-br from-white to-emerald-50/30 p-8 rounded-3xl border-2 border-emerald-150 shadow-[0_0_15px_rgba(16,185,129,0.13)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:border-emerald-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group" 
              id="sec7_card_3"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100/60 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                    STEP 03
                  </span>
                </div>
                <h4 className="font-sans font-extrabold text-[#102A43] text-lg group-hover:text-emerald-650 transition-colors duration-200">Choose whether to join</h4>
                <p className="text-sm text-slate-650 leading-relaxed font-medium">
                  Help validate future Driver Awareness Intelligence tools for Canadian drivers.
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
              Built around Canadian driving realities
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

      {/* 8.5 INTERACTIVE FAQ ACCORDION (Credibility & Obstacle Removal) */}
      <section className="py-22 px-6 bg-white border-t border-slate-150">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Frequently Asked Questions</span>
            <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight">
              Pre-Launch & Cohort Questions
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              Everything you need to know about the Astrateq driver validation program.
            </p>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {[
              {
                q: "What is Astrateq Gadgets?",
                a: "Astrateq Gadgets is an upcoming Canadian hardware and software development project focusing on localized driver awareness and fatigue safety. We develop tools optimized for severe Canadian highway conditions, commuter stress, and late-night driving patterns."
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
                a: "No, the simulation and priority cohort reservation are 100% free. It serves to gauge interest and gather validation data to help guide physical device development for Canadian road safety."
              },
              {
                q: "Do I need any special hardware for this?",
                a: "No, this is a client-side software simulation. Our physical visor HUD (Vision Shield™) and console accessory (Aura Dial™) are upcoming releases currently in the pre-launch pipeline, and cohort members will get priority access to join their private testing programs once ready."
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

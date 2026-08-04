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
  X,
  Check,
  EyeOff,
  Database,
  BarChart3,
  Sliders,
  FileCheck,
  Video,
  Globe,
  UserCheck
} from 'lucide-react';
import { motion } from 'motion/react';

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
          SECTION 1: HERO SECTION (Premium Polish)
         ========================================== */}
      <section className="relative overflow-hidden bg-[#071524] text-white min-h-[88vh] lg:min-h-[90vh] flex flex-col justify-center px-4 sm:px-6 py-14 md:py-20 border-b border-slate-800">
        
        {/* Background Image Scrim Overlay */}
        <div className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity">
          <img
            src={heroImage}
            alt="Canadian driver awareness research landscape"
            className="w-full h-full object-cover filter contrast-[1.25] brightness-[0.75]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Dark Gradient Scrim and Subtle Radial Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071524]/95 via-[#071524]/85 to-[#071524] z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(#22d3ee 1.5px, transparent 1.5px)', backgroundSize: '28px 28px' }}
        />

        {/* Content Container */}
        <div className="relative max-w-6xl w-full mx-auto z-10 space-y-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Core Positioning Copy */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Research Badge */}
              <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-slate-900/95 border-2 border-yellow-400/80 hover:border-yellow-300 shadow-[0_0_25px_rgba(250,204,21,0.45)] backdrop-blur-xl transition-all duration-300 group cursor-default">
                {/* Left Vibrant Yellow Beacon Tag Pill */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-slate-950 text-[11px] font-black tracking-wider uppercase shrink-0 shadow-[0_0_16px_rgba(250,204,21,0.8)]">
                  <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-90"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
                  </span>
                  <ShieldCheck className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
                  <span>RESEARCH</span>
                </div>

                {/* Main High-Contrast Label */}
                <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                  Canadian Driver Research Initiative
                </span>

                {/* Country Flag Tag */}
                <span className="text-[10px] font-mono font-black text-amber-200 bg-amber-950/80 px-2 py-0.5 rounded-full border border-amber-400/50 hidden sm:inline-block shadow-xs">
                  🇨🇦 CA
                </span>
              </div>

              {/* Redesigned Headline */}
              <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl text-white tracking-tight leading-[1.12]">
                DISCOVER YOUR{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 font-black block sm:inline">
                  DRIVER AWARENESS PROFILE
                </span>{' '}
                IN 60 SECONDS
              </h1>

              {/* Supporting Copy */}
              <p className="text-[#D6E4F0] text-base sm:text-lg leading-relaxed font-normal max-w-2xl opacity-90">
                Astrateq Gadgets is researching a privacy-first approach to understanding driver attention, fatigue indicators, and environmental awareness without continuous vehicle tracking or cloud surveillance.
              </p>

              {/* Primary & Secondary CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={onStartDiagnostic}
                  className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:shadow-[0_0_45px_rgba(249,115,22,0.85)] transition-all duration-200 cursor-pointer border border-amber-200/60 group"
                  id="hero_primary_cta"
                >
                  <span className="tracking-wide uppercase">Start Driver Awareness Simulation</span>
                  <ChevronRight className="w-5 h-5 ml-2 text-slate-950 transition-transform duration-200 group-hover:translate-x-1 stroke-[3]" />
                </button>

                <button
                  onClick={() => scrollToSection('privacy-architecture')}
                  className="inline-flex items-center justify-center px-6 py-4 bg-slate-900/95 hover:bg-orange-500 text-orange-400 hover:text-slate-950 font-extrabold text-base rounded-2xl border-2 border-orange-500 shadow-[0_0_25px_rgba(249,115,22,0.4)] hover:shadow-[0_0_40px_rgba(249,115,22,0.85)] transition-all duration-200 cursor-pointer group"
                  id="hero_secondary_cta"
                >
                  <span className="tracking-wider uppercase">HOW PRIVACY WORKS</span>
                  <ChevronDown className="w-5 h-5 ml-2 text-orange-400 group-hover:text-slate-950 transition-transform group-hover:translate-y-0.5 stroke-[2.5]" />
                </button>
              </div>

              {/* Micro Trust Indicators */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#D6E4F0] font-semibold pt-1 opacity-90">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Free &amp; Anonymous</span>
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

            {/* Right Column: Hero Visual Mobile Simulator Preview */}
            <div className="lg:col-span-5 flex justify-center relative">
              {/* Vibrant Multi-layer Ambient Backlight Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/40 via-sky-400/35 to-teal-300/30 rounded-[42px] blur-3xl opacity-90 animate-pulse pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-sky-300 to-teal-400 rounded-[36px] blur-md opacity-70 pointer-events-none" />
              
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-full max-w-sm p-[2.5px] rounded-[34px] bg-gradient-to-b from-cyan-300 via-sky-400 to-teal-300 shadow-[0_25px_80px_rgba(34,211,238,0.35)]"
              >
                <div className="bg-gradient-to-b from-[#0e2744] via-[#0a1c33] to-[#061224] rounded-[32px] p-5 sm:p-6 backdrop-blur-2xl relative overflow-hidden border border-cyan-300/40 shadow-2xl">
                  
                  {/* Subtle Top Metallic Light Sheen */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent" />
                  
                  {/* Speaker Notch Accent */}
                  <div className="w-16 h-1.5 rounded-full bg-slate-800 border border-slate-700/80 mx-auto mb-4 shadow-inner" />

                  <div className="flex items-center justify-between border-b border-cyan-500/25 pb-3 mb-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-cyan-400/20 border border-cyan-300/50 flex items-center justify-center text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.4)]">
                        <Smartphone className="w-4 h-4" />
                      </div>
                      <span className="text-[11px] font-mono font-black text-cyan-300 uppercase tracking-wider">
                        INTERACTIVE PROTOTYPE
                      </span>
                    </div>
                    
                    <span className="text-[10px] bg-gradient-to-r from-cyan-300 to-sky-300 text-slate-950 px-2.5 py-1 rounded-full font-mono font-black border border-cyan-100 shadow-[0_0_12px_rgba(34,211,238,0.5)]">
                      60s Simulation
                    </span>
                  </div>

                  {/* Simulated Mobile Screen View */}
                  <div className="bg-[#051122] rounded-2xl p-4 border border-cyan-400/50 shadow-[0_12px_35px_rgba(0,0,0,0.6)] space-y-3.5 text-left relative overflow-hidden">
                    
                    <div className="flex items-center justify-between text-[11px] font-mono">
                      <span className="text-cyan-100 font-black bg-cyan-950/90 px-2.5 py-1 rounded-md border border-cyan-400/60 shadow-[0_0_10px_rgba(34,211,238,0.25)]">
                        Stage 1: Driving Context
                      </span>
                      <span className="text-emerald-300 font-bold flex items-center gap-1 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40">
                        <Lock className="w-3 h-3 text-emerald-400" />
                        <span>Private &amp; Local</span>
                      </span>
                    </div>

                    <div className="bg-gradient-to-r from-[#0f3459] to-[#0a223d] p-3.5 rounded-xl border-l-4 border-l-cyan-300 border-y border-r border-cyan-400/30 shadow-md space-y-1">
                      <span className="text-[10px] uppercase text-cyan-300 font-mono font-black block tracking-wider">
                        Route &amp; Commute Factors
                      </span>
                      <p className="text-xs sm:text-sm font-extrabold text-white leading-snug">
                        Primary route type &amp; winter weather exposure?
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div 
                        onClick={onStartDiagnostic}
                        className="p-3 rounded-xl bg-gradient-to-r from-[#113a63] to-[#0c2847] border-2 border-cyan-300 flex items-center justify-between text-xs text-white cursor-pointer shadow-[0_0_18px_rgba(34,211,238,0.3)] transition-all hover:scale-[1.01]"
                      >
                        <span className="font-extrabold text-cyan-50">Highway Commute · Winter Exposure</span>
                        <span className="w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,1)] border border-white/80" />
                      </div>
                      <div 
                        onClick={onStartDiagnostic}
                        className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-700/80 flex items-center justify-between text-xs text-slate-300 cursor-pointer transition-all"
                      >
                        <span className="font-semibold text-slate-300">Urban Stop-and-Go · City Core</span>
                        <span className="w-3 h-3 rounded-full border border-slate-600 bg-slate-800" />
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-800/90 flex items-center justify-between">
                      <div>
                        <div className="text-[9px] text-cyan-300 uppercase font-mono font-black tracking-wider">Sample Profile Baseline</div>
                        <div className="text-xl font-mono font-black text-white flex items-baseline gap-1.5">
                          81 <span className="text-xs text-emerald-400 font-bold">/ GOOD</span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={onStartDiagnostic}
                        className="px-4 py-2.5 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl cursor-pointer flex items-center gap-1.5 shadow-[0_0_22px_rgba(249,115,22,0.7)] border-2 border-orange-200 hover:scale-105 active:scale-95 transition-all"
                      >
                        <span>Launch Now</span>
                        <ArrowRight className="w-4 h-4 text-slate-950 stroke-[3]" />
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
          SECTION 2: INTERACTIVE SIMULATION PREVIEW
         ========================================== */}
      <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#071524] via-[#081a2e] to-[#050C16] text-white border-b border-sky-500/30 relative overflow-hidden" id="readiness-check">
        <div className="max-w-4xl mx-auto space-y-8 text-center relative z-10">
          
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-slate-900/95 border-2 border-yellow-400/80 hover:border-yellow-300 shadow-[0_0_25px_rgba(250,204,21,0.45)] backdrop-blur-xl transition-all duration-300 group cursor-default">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 text-slate-950 text-[11px] font-black tracking-wider uppercase shrink-0 shadow-[0_0_16px_rgba(250,204,21,0.8)]">
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-90"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-950"></span>
                </span>
                <ShieldCheck className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
                <span>INTERACTIVE PROTOTYPE</span>
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-white tracking-wide drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                Start Driver Awareness Simulation
              </span>
            </div>
            
            <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Start Driver Awareness Simulation
            </h2>
            
            <p className="text-sm sm:text-base text-[#D6E4F0] max-w-xl mx-auto leading-relaxed font-normal opacity-90">
              Experience the 60-second diagnostic below to receive your simulated Driver Awareness Profile and contribute to our Canadian research cohort.
            </p>
          </div>

          {/* Glass Simulator Device Container */}
          <div 
            className="relative rounded-3xl border-2 border-cyan-400/40 shadow-[0_30px_100px_rgba(0,0,0,0.9)] overflow-hidden p-2 sm:p-6 text-left max-w-3xl mx-auto bg-slate-950/90 backdrop-blur-2xl"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400" />
            <div className="absolute -top-32 -left-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            {quizView}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: EXPLORING DIFFERENT APPROACHES
         ========================================== */}
      <section className="py-20 px-4 sm:px-6 bg-[#071322] text-white border-b border-slate-800/80 relative overflow-hidden">
        
        {/* Subtle Ambient Background Lighting */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sky-300 uppercase bg-sky-950/80 px-4 py-1.5 rounded-full border border-sky-400/30">
              PHILOSOPHY & ARCHITECTURE
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Exploring Different Approaches to Driver Awareness
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Comparing cloud-connected telemetry systems with 100% on-device, privacy-first intelligence.
            </p>
          </div>

          {/* Visual Comparison: Cloud & Camera-Based vs On-Device Privacy-First */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Column 1: Cloud & Camera-Based Systems */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-slate-700/80 border-t-8 border-t-sky-500 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-950/80 text-sky-300 border border-sky-500/40 flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <Video className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-white">Cloud &amp; Camera-Based Systems</h3>
                  <span className="inline-block mt-1 text-[11px] text-sky-300 font-mono font-bold uppercase bg-sky-950/90 px-2.5 py-0.5 rounded-md border border-sky-500/30">
                    Remote Telemetry &amp; Hardware Focus
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <Video className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">Cabin Cameras &amp; Sensor Feeds</strong> Relies on optical lenses or infrared cabin sensors monitoring the driver space.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">Active Telemetry &amp; GPS</strong> Logs location data, trip routes, and vehicle speed histories for cloud processing.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <Globe className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">Remote Server Streams</strong> Transmits telemetry streams to central third-party servers.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <Database className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">External Risk Scoring</strong> Connects score outputs directly into external fleet or insurance databases.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: On-Device & Privacy-First Intelligence */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border-2 border-cyan-400/50 border-t-8 border-t-cyan-400 space-y-6 shadow-2xl relative overflow-hidden backdrop-blur-md">
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 text-cyan-300 border border-cyan-400/40 flex items-center justify-center font-bold shrink-0 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-white">On-Device &amp; Privacy-First Intelligence</h3>
                  <span className="inline-block mt-1 text-[11px] text-cyan-300 font-mono font-bold uppercase bg-cyan-950/90 px-2.5 py-0.5 rounded-md border border-cyan-400/30">
                    100% On-Device &amp; Telemetry-Free
                  </span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-200">
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">No Cabin Cameras</strong> Evaluates cognitive load and focus habits through simulated interactive prompts without video feeds.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <Lock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">Zero GPS Logging</strong> Operates completely independent of location tracking or route logging.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">100% On-Device Computation</strong> Every calculation runs strictly inside your local browser session.</span>
                </li>
                <li className="flex items-start gap-3 bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  <UserCheck className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <span><strong className="text-white block mb-0.5">Private Driver Ownership</strong> Your results belong strictly to you and are never monetized or sold.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4: HOW THE SIMULATION WORKS (Upgraded Navy Blue Theme)
         ========================================== */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase bg-cyan-950/90 px-4 py-1.5 rounded-full border border-cyan-400/30 shadow-xs">
              <Sliders className="w-3.5 h-3.5 text-cyan-400" />
              SIMULATION JOURNEY
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              How The Simulation Works
            </h2>
            <p className="text-base sm:text-lg text-slate-300 font-normal max-w-xl mx-auto">
              Four simple research-backed steps to explore your driver awareness profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-slate-800 border-t-4 border-t-cyan-400 space-y-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between relative group backdrop-blur-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase bg-cyan-950 text-cyan-300 border border-cyan-400/40 shadow-xs">
                    STEP 01
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-slate-950 text-cyan-300 border border-slate-800 flex items-center justify-center font-bold shadow-xs group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-white group-hover:text-cyan-300 transition-colors">
                    Context Calibration
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed pt-2">
                    Select your route types (Urban, Highway, Rural), commute length, and weather conditions.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono font-bold text-cyan-300 flex items-center gap-1">
                <span>Input Context</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-slate-800 border-t-4 border-t-blue-500 space-y-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-blue-400 transition-all duration-300 flex flex-col justify-between relative group backdrop-blur-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase bg-blue-950 text-blue-300 border border-blue-400/40 shadow-xs">
                    STEP 02
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-slate-950 text-blue-400 border border-slate-800 flex items-center justify-center font-bold shadow-xs group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <Sliders className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-white group-hover:text-blue-300 transition-colors">
                    Driver Focus Test
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed pt-2">
                    Respond to cognitive load scenarios, attention switching, and fatigue exposure windows.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono font-bold text-blue-300 flex items-center gap-1">
                <span>Cognitive Input</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-slate-800 border-t-4 border-t-indigo-500 space-y-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between relative group backdrop-blur-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase bg-indigo-950 text-indigo-300 border border-indigo-400/40 shadow-xs">
                    STEP 03
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-slate-950 text-indigo-400 border border-slate-800 flex items-center justify-center font-bold shadow-xs group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-white group-hover:text-indigo-300 transition-colors">
                    Awareness Profile
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed pt-2">
                    Animate and calculate local, telemetry-free awareness parameters securely on-device.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono font-bold text-indigo-300 flex items-center gap-1">
                <span>Local Engine</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-slate-900/90 border-2 border-slate-800 border-t-4 border-t-emerald-400 space-y-4 shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between relative group backdrop-blur-md">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-extrabold px-3 py-1 rounded-lg tracking-wider uppercase bg-emerald-950 text-emerald-300 border border-emerald-400/40 shadow-xs">
                    STEP 04
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-slate-950 text-emerald-400 border border-slate-800 flex items-center justify-center font-bold shadow-xs group-hover:bg-emerald-400 group-hover:text-slate-950 transition-colors">
                    <FileCheck className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-white group-hover:text-emerald-300 transition-colors">
                    Research Insights
                  </h3>
                  <p className="text-xs text-slate-300 font-normal leading-relaxed pt-2">
                    View Apple Health inspired metrics, supportive insights, and cohort alignment.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-800 text-[11px] font-mono font-bold text-emerald-300 flex items-center gap-1">
                <span>Results Locked</span>
                <Check className="w-3.5 h-3.5 text-emerald-400 stroke-[3]" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 5: PRIVACY & ON-DEVICE SECURITY GUARANTEE
         ========================================== */}
      <section id="privacy-architecture" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-900 via-[#0a192f] to-slate-950 text-white border-b border-slate-800 relative overflow-hidden">
        
        {/* Subtle Background Glow Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto space-y-12 relative z-10">
          
          {/* Header & Purpose Callout */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider shadow-md">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>100% ON-DEVICE PRIVACY &amp; SECURITY GUARANTEE</span>
            </div>
            
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Why Your Assessment Data Is{' '}
              <span className="text-cyan-300 font-black">
                100% Private
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
              This assessment calculates your driver awareness profile strictly inside your web browser — zero GPS location tracking, no camera video feeds, and zero cloud log storage.
            </p>
          </div>

          {/* Privacy Architecture Flow Diagram */}
          <div className="bg-slate-900/90 border-2 border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative backdrop-blur-md">
            
            <div className="text-center space-y-2 border-b border-slate-800 pb-6">
              <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-400/30">
                ARCHITECTURE FLOW
              </span>
              <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-white">
                How Your Data Is Isolated On Your Device
              </h3>
            </div>

            {/* Step-by-Step Flow Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 relative">
              
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 transition-all duration-200 space-y-3 relative group">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold border border-cyan-400/40">
                  <Smartphone className="w-6 h-6 text-cyan-300" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider mb-0.5">Step 1</div>
                  <h4 className="font-extrabold text-base text-white">Driver Device</h4>
                  <p className="text-xs text-slate-300 leading-normal mt-1 font-medium">
                    Assessment inputs executed purely in your local browser session.
                  </p>
                </div>
              </div>

              {/* Connector Arrow 1 */}
              <div className="hidden md:flex items-center justify-center text-cyan-400 absolute top-1/2 left-[23%] -translate-y-1/2 z-20 pointer-events-none">
                <ArrowRight className="w-6 h-6 text-cyan-400 animate-pulse stroke-[3]" />
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 transition-all duration-200 space-y-3 relative group">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-300 flex items-center justify-center font-bold border border-sky-400/40">
                  <Cpu className="w-6 h-6 text-sky-300" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider mb-0.5">Step 2</div>
                  <h4 className="font-extrabold text-base text-white">Local Computation</h4>
                  <p className="text-xs text-slate-300 leading-normal mt-1 font-medium">
                    Zero cloud calculations. All algorithms execute on your device CPU.
                  </p>
                </div>
              </div>

              {/* Connector Arrow 2 */}
              <div className="hidden md:flex items-center justify-center text-cyan-400 absolute top-1/2 left-[48%] -translate-y-1/2 z-20 pointer-events-none">
                <ArrowRight className="w-6 h-6 text-cyan-400 animate-pulse stroke-[3]" />
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-slate-800/90 border border-slate-700 hover:border-cyan-400 transition-all duration-200 space-y-3 relative group">
                <div className="w-12 h-12 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold border border-teal-400/40">
                  <BarChart3 className="w-6 h-6 text-teal-300" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-teal-400 uppercase tracking-wider mb-0.5">Step 3</div>
                  <h4 className="font-extrabold text-base text-white">Private Profile</h4>
                  <p className="text-xs text-slate-300 leading-normal mt-1 font-medium">
                    Score &amp; fatigue risk generated instantly without identity tracking.
                  </p>
                </div>
              </div>

              {/* Connector Arrow 3 */}
              <div className="hidden md:flex items-center justify-center text-emerald-400 absolute top-1/2 left-[73%] -translate-y-1/2 z-20 pointer-events-none">
                <ArrowRight className="w-6 h-6 text-emerald-400 animate-pulse stroke-[3]" />
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 hover:border-emerald-400 transition-all duration-200 space-y-3 relative group shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold border border-emerald-400/40">
                  <Database className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider mb-0.5">Protected</div>
                  <h4 className="font-extrabold text-base text-emerald-200">Zero Cloud Logs</h4>
                  <p className="text-xs text-emerald-100/90 leading-normal mt-1 font-medium">
                    No GPS location, speed, or route history recorded or sold.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* 4 Core Guarantees Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/60 transition-all duration-200 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 text-emerald-400 font-extrabold text-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-white">Zero GPS Tracking</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                We never request, store, or monitor your location, driving routes, or destination data.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/60 transition-all duration-200 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 text-emerald-400 font-extrabold text-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-white">Zero Surveillance</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                No video feeds, optical cabin scanning, or continuous sensor streaming to external servers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/60 transition-all duration-200 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 text-emerald-400 font-extrabold text-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-white">No OBD Hardware</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                No OBD-II vehicle dongles or physical car modifications required to run the simulation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-cyan-400/60 transition-all duration-200 space-y-3 shadow-md">
              <div className="flex items-center gap-2.5 text-emerald-400 font-extrabold text-sm">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="text-white">Never Sold or Shared</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Your driver awareness profile belongs strictly to you and is never shared with insurers.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 6: WHAT ASTRATEQ GADGETS IS VALIDATING (Asymmetric Split Layout)
         ========================================== */}
      <section className="py-24 px-4 sm:px-6 bg-[#040c17] text-white border-b border-slate-800/80 relative overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Context */}
            <div className="lg:col-span-5 space-y-5 text-left">
              <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-cyan-300 uppercase bg-cyan-950/90 px-4 py-1.5 rounded-full border border-cyan-400/30">
                CURRENT VALIDATION PHASE
              </span>
              <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                What Astrateq Gadgets Is Validating
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-normal">
                We are carefully researching whether a new category of privacy-first driver awareness technology should exist. Phase 1 focuses on concept validation with active Canadian driver input.
              </p>
              
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-300 bg-emerald-950/90 px-4 py-2 rounded-xl border border-emerald-400/40 shadow-sm">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Active Research Phase (Phase 1)</span>
                </span>
              </div>
            </div>

            {/* Right Column: 4 Horizontal Research Parameter Cards */}
            <div className="lg:col-span-7 space-y-3.5 text-left">
              <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider block mb-1">
                Research Goal: Measure Canadian driver expectations &amp; priorities
              </span>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 border-l-4 border-l-cyan-400 hover:border-cyan-400/60 transition-colors flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-cyan-950 text-cyan-300 flex items-center justify-center font-bold shrink-0">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Driver Awareness Patterns</h4>
                    <p className="text-xs text-slate-400">Evaluating commute fatigue windows and attentional load profiles.</p>
                  </div>
                </div>
                <Check className="w-5 h-5 text-cyan-400 shrink-0 stroke-[2.5]" />
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 border-l-4 border-l-sky-400 hover:border-sky-400/60 transition-colors flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-sky-950 text-sky-300 flex items-center justify-center font-bold shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Privacy Expectations</h4>
                    <p className="text-xs text-slate-400">Verifying demand for 100% on-device, telemetry-free calculations.</p>
                  </div>
                </div>
                <Check className="w-5 h-5 text-sky-400 shrink-0 stroke-[2.5]" />
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 border-l-4 border-l-indigo-400 hover:border-indigo-400/60 transition-colors flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-indigo-950 text-indigo-300 flex items-center justify-center font-bold shrink-0">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Feature Priorities</h4>
                    <p className="text-xs text-slate-400">Gathering feedback on non-intrusive awareness indicators &amp; cues.</p>
                  </div>
                </div>
                <Check className="w-5 h-5 text-indigo-400 shrink-0 stroke-[2.5]" />
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 border-l-4 border-l-emerald-400 hover:border-emerald-400/60 transition-colors flex items-center justify-between gap-4 shadow-sm">
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-950 text-emerald-300 flex items-center justify-center font-bold shrink-0">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white">Market Interest</h4>
                    <p className="text-xs text-slate-400">Gauging founding research cohort participation across Canadian provinces.</p>
                  </div>
                </div>
                <Check className="w-5 h-5 text-emerald-400 shrink-0 stroke-[2.5]" />
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          SECTION 7: CANADIAN RESEARCH COHORT (Horizontal Stat Row & Narrative)
         ========================================== */}
      <section className="py-24 px-4 sm:px-6 bg-gradient-to-r from-[#0a1e35] via-[#081729] to-[#0a1e35] text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sky-300 uppercase bg-sky-950 px-4 py-1.5 rounded-full border border-sky-400/30">
              CANADIAN DRIVER RESEARCH COHORT
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
              Canadian Driver Research Cohort 🍁
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              We are inviting early drivers across Canada to participate in research validation before building commercial technology.
            </p>
          </div>

          {/* 4 Key Pillars Horizontal Stat Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-colors space-y-1.5 shadow-lg">
              <div className="text-2xl font-black text-cyan-300 font-mono">100%</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">On-Device Engine</div>
              <p className="text-[11px] text-slate-400">Zero cloud logs or location feeds</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-colors space-y-1.5 shadow-lg">
              <div className="text-2xl font-black text-sky-300 font-mono">10+</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Provinces Covered</div>
              <p className="text-[11px] text-slate-400">Calibrated for Canadian weather</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-colors space-y-1.5 shadow-lg">
              <div className="text-2xl font-black text-indigo-300 font-mono">0</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Telemetry Tracking</div>
              <p className="text-[11px] text-slate-400">No insurance score sharing</p>
            </div>
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-sky-500/40 transition-colors space-y-1.5 shadow-lg">
              <div className="text-2xl font-black text-emerald-300 font-mono">60s</div>
              <div className="text-xs font-bold text-white uppercase tracking-wider">Diagnostic Assessment</div>
              <p className="text-[11px] text-slate-400">Fast, anonymous evaluation</p>
            </div>
          </div>

          {/* Narrative Paragraph */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-center max-w-3xl mx-auto space-y-3">
            <h3 className="font-sans font-bold text-xl text-white">How Early Participants Shape Development</h3>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              By completing the simulation, research participants help us calibrate driver awareness algorithms for Canadian weather, highway commuters, and urban congestion.
            </p>
          </div>

        </div>
      </section>

      {/* Future Hardware Single Statement Note (Legibility Improved) */}
      <div className="py-8 bg-slate-900/90 border-t border-b border-slate-800 text-center shadow-inner">
        <p className="text-sm sm:text-base text-slate-200 font-sans font-medium max-w-2xl mx-auto px-4 leading-relaxed">
          "We may explore optional hardware concepts in the future — nothing is designed or committed today."
        </p>
      </div>

      {/* ==========================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS
         ========================================== */}
      <section className="py-20 px-4 sm:px-6 bg-slate-950 text-white border-b border-slate-800">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-sky-300 uppercase bg-sky-950 px-4 py-1.5 rounded-full border border-sky-400/30">
              TRANSPARENT ANSWERS
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto">
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
                q: "Is this a commercial product?",
                a: "No. This is an early-stage market validation and research study. We are actively collecting driver behavior insights and testing market interest before building commercial software or physical hardware."
              },
              {
                q: "Is my driving data recorded or shared with insurance companies?",
                a: "Never. Astrateq Gadgets is built on strict privacy principles. There is no GPS tracking, vehicle OBD connection, or telematics streaming. Your responses are strictly used for anonymous validation research."
              },
              {
                q: "How does the 60-second Driver Awareness Simulation work?",
                a: "The simulation evaluates your driving context, fatigue windows, and focus habits against a weighted benchmark to generate a simulated Driver Awareness Profile (Score, Fatigue Risk, Environmental Complexity)."
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
                  className="bg-slate-900/90 border-2 border-slate-800 rounded-2xl overflow-hidden transition-all duration-200 shadow-md hover:border-cyan-400/60"
                >
                  <button
                    onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-extrabold text-white hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-cyan-300 shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-3" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800 bg-slate-950/80">
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
          SECTION 9: FINAL RESEARCH CTA
         ========================================== */}
      <section className="py-20 px-6 bg-[#071524] text-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#22D3EE] uppercase bg-sky-950 px-3.5 py-1.5 rounded-full border border-sky-800/60 inline-block">
            RESEARCH PARTICIPATION
          </span>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Help Build the Future of Privacy-First Driver Awareness in Canada.
          </h2>
          <p className="text-sm sm:text-base text-[#D6E4F0] max-w-lg mx-auto leading-relaxed font-normal opacity-90">
            Take 60 seconds to complete the Driver Awareness Simulation and contribute your perspective to our Canadian research cohort.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-base rounded-2xl shadow-[0_0_35px_rgba(249,115,22,0.6)] hover:shadow-[0_0_45px_rgba(249,115,22,0.85)] transition-all cursor-pointer border border-amber-200/60 group"
              id="final_start_simulation_cta"
            >
              <span className="tracking-wide uppercase">Start Driver Awareness Simulation</span>
              <ChevronRight className="w-5 h-5 ml-2 text-slate-950 stroke-[3] transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-900 hover:bg-orange-500 text-orange-400 hover:text-slate-950 font-extrabold text-base rounded-2xl border-2 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all cursor-pointer"
              id="final_join_cohort_cta"
            >
              <span className="tracking-wide uppercase">Join Research Cohort</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 pt-2 font-mono">
            100% Free · 60 Seconds · Anonymous · No Hardware Required
          </p>
        </div>
      </section>

      {/* ==========================================
          MOBILE STICKY BOTTOM BAR
         ========================================== */}
      {showStickyBar && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 px-4 py-3 shadow-[0_-8px_20px_rgba(0,0,0,0.4)] flex items-center justify-between">
          <div className="text-left">
            <div className="text-[11px] font-bold text-white">Driver Awareness Simulation</div>
            <div className="text-[9px] text-orange-400 font-mono">60s · Free · No Tracking</div>
          </div>
          <button
            onClick={onStartDiagnostic}
            className="px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.6)] cursor-pointer flex items-center gap-1 shrink-0 border border-amber-200"
            id="mobile_sticky_cta"
          >
            <span className="tracking-wide uppercase">Start Driver Awareness Simulation</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-950 stroke-[3]" />
          </button>
        </div>
      )}

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-400 text-slate-950 p-3 rounded-full shadow-[0_0_20px_rgba(249,115,22,0.6)] border border-orange-300 transition-all cursor-pointer flex items-center justify-center"
          aria-label="Scroll to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-5 h-5 text-slate-950 stroke-[2.5]" />
        </motion.button>
      )}

    </div>
  );
}

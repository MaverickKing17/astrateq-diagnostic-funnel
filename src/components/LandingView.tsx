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
  FileCheck
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
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-950/90 border border-cyan-400/30 text-[#22D3EE] text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#22D3EE] shrink-0" />
                <span>CANADIAN DRIVER RESEARCH INITIATIVE</span>
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
                  className="inline-flex items-center justify-center px-7 py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-black text-base sm:text-lg rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:shadow-[0_0_45px_rgba(34,211,238,0.75)] transition-all duration-200 cursor-pointer border border-cyan-200/50 group"
                  id="hero_primary_cta"
                >
                  <span className="tracking-wide uppercase">Start Driver Awareness Simulation</span>
                  <ChevronRight className="w-5 h-5 ml-2 text-slate-950 transition-transform duration-200 group-hover:translate-x-1 stroke-[3]" />
                </button>

                <button
                  onClick={() => scrollToSection('privacy-architecture')}
                  className="inline-flex items-center justify-center px-6 py-4 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base rounded-2xl border border-slate-700/80 transition-all duration-200 cursor-pointer group"
                  id="hero_secondary_cta"
                >
                  <span>HOW PRIVACY WORKS</span>
                  <ChevronDown className="w-4 h-4 ml-2 text-slate-400 group-hover:text-white transition-transform group-hover:translate-y-0.5" />
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
                        className="px-4 py-2.5 bg-gradient-to-r from-cyan-300 via-sky-300 to-teal-300 hover:from-cyan-200 hover:to-teal-200 text-slate-950 font-black text-xs rounded-xl cursor-pointer flex items-center gap-1.5 shadow-[0_0_22px_rgba(34,211,238,0.6)] border-2 border-cyan-100 hover:scale-105 active:scale-95 transition-all"
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
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#22D3EE] uppercase bg-sky-950/90 px-3.5 py-1.5 rounded-full border border-cyan-400/30 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <ShieldCheck className="w-4 h-4 text-[#22D3EE]" />
              <span>INTERACTIVE SIMULATOR PROTOTYPE</span>
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
            className="relative rounded-3xl border border-cyan-500/30 shadow-[0_30px_90px_rgba(3,8,20,0.85)] overflow-hidden p-3 sm:p-8 text-left max-w-3xl mx-auto backdrop-blur-xl"
            style={{ backgroundColor: '#050B18' }}
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400" />
            {quizView}
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 3: THE PROBLEM WITH TODAY'S APPROACH
         ========================================== */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              CATEGORY DIFFERENTIATION
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#071524] tracking-tight">
              The Problem With Today's Driver Monitoring Approach
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Most existing driver monitoring solutions rely on cameras, sensors, continuous data collection, and cloud-connected surveillance. Astrateq Gadgets is exploring whether driver awareness insights can be created using privacy-first principles.
            </p>
          </div>

          {/* Visual Comparison: Traditional vs Privacy-First */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            
            {/* Column 1: Traditional Monitoring */}
            <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-slate-200 space-y-6 shadow-xs">
              <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <EyeOff className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-slate-900">Traditional Driver Monitoring</h3>
                  <span className="text-xs text-rose-600 font-mono font-semibold">Surveillance &amp; Cloud Dependent</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Invasive Cameras &amp; Sensors:</strong> Requires cabin cameras or eye-tracking lenses pointing at the driver.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Continuous GPS Tracking:</strong> Records location, trip logs, speed histories, and daily routes continuously.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Cloud Server Streams:</strong> Streams raw driving telemetry to remote third-party databases.</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  <span><strong>Third-Party Scoring:</strong> Shares telemetry with insurers or fleet managers for behavioral risk scoring.</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Astrateq Privacy-First Intelligence */}
            <div 
              className="p-8 rounded-3xl text-white space-y-6 shadow-[0_15px_40px_rgba(0,0,0,0.25)] relative overflow-hidden"
              style={{ backgroundColor: '#071524', borderColor: 'rgba(34,211,238,0.25)', borderWidth: '1px' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-[#22D3EE] flex items-center justify-center font-bold border border-cyan-400/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-xl text-white">Astrateq Privacy-First Intelligence</h3>
                  <span className="text-xs text-[#22D3EE] font-mono font-bold">Local &amp; Telemetry-Free Research</span>
                </div>
              </div>

              <ul className="space-y-4 text-sm text-[#D6E4F0]">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>No Cabin Cameras:</strong> Focuses on driver context and behavioral cognitive patterns without optical surveillance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Zero GPS Logging:</strong> Operates entirely without route tracking or location monitoring.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>100% On-Device Processing:</strong> Calculations remain strictly on your local device.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5 stroke-[3]" />
                  <span><strong>Private Driver Ownership:</strong> Designed solely to support the driver — never shared with third parties.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 4: HOW THE SIMULATION WORKS (Upgraded High-Contrast Step Journey)
         ========================================== */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-100 via-sky-50/50 to-slate-100 border-b border-slate-200/80 relative overflow-hidden">
        
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-sky-800 uppercase bg-sky-100/90 px-4 py-1.5 rounded-full border border-sky-300/60 shadow-xs">
              <Sliders className="w-3.5 h-3.5 text-sky-600" />
              SIMULATION JOURNEY
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              How The Simulation Works
            </h2>
            <p className="text-base sm:text-lg text-slate-700 font-semibold max-w-xl mx-auto">
              Four simple research-backed steps to explore your driver awareness profile.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left relative">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-300 border-t-4 border-t-sky-500 space-y-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-sky-400 transition-all duration-300 flex flex-col justify-between relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs font-mono font-black px-3 py-1 rounded-lg tracking-wider uppercase shadow-xs"
                    style={{ color: '#082f49', backgroundColor: '#e0f2fe', border: '1px solid #7dd3fc' }}
                  >
                    STEP 01
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-600 border border-sky-200 flex items-center justify-center font-bold shadow-xs group-hover:bg-sky-500 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                    Context Calibration
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed pt-2">
                    Select your route types (Urban, Highway, Rural), commute length, and weather conditions.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-semibold text-sky-700 flex items-center gap-1">
                <span>Input Context</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-300 border-t-4 border-t-blue-600 space-y-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs font-mono font-black px-3 py-1 rounded-lg tracking-wider uppercase shadow-xs"
                    style={{ color: '#172554', backgroundColor: '#dbeafe', border: '1px solid #93c5fd' }}
                  >
                    STEP 02
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center font-bold shadow-xs group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Sliders className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-slate-900 group-hover:text-blue-700 transition-colors">
                    Driver Focus Test
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed pt-2">
                    Respond to cognitive load scenarios, attention switching, and fatigue exposure windows.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-semibold text-blue-700 flex items-center gap-1">
                <span>Cognitive Input</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-300 border-t-4 border-t-indigo-600 space-y-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-indigo-500 transition-all duration-300 flex flex-col justify-between relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs font-mono font-black px-3 py-1 rounded-lg tracking-wider uppercase shadow-xs"
                    style={{ color: '#1e1b4b', backgroundColor: '#e0e7ff', border: '1px solid #a5b4fc' }}
                  >
                    STEP 03
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-200 flex items-center justify-center font-bold shadow-xs group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-slate-900 group-hover:text-indigo-700 transition-colors">
                    Awareness Profile
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed pt-2">
                    Animate and calculate local, telemetry-free awareness parameters securely on-device.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-semibold text-indigo-700 flex items-center gap-1">
                <span>Local Engine</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-500" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white border border-slate-300 border-t-4 border-t-emerald-600 space-y-4 shadow-md hover:shadow-2xl hover:-translate-y-1 hover:border-emerald-500 transition-all duration-300 flex flex-col justify-between relative group">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span 
                    className="text-xs font-mono font-black px-3 py-1 rounded-lg tracking-wider uppercase shadow-xs"
                    style={{ color: '#022c22', backgroundColor: '#d1fae5', border: '1px solid #6ee7b7' }}
                  >
                    STEP 04
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center font-bold shadow-xs group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <FileCheck className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-sans font-extrabold text-lg text-slate-900 group-hover:text-emerald-700 transition-colors">
                    Research Insights
                  </h3>
                  <p className="text-xs text-slate-700 font-medium leading-relaxed pt-2">
                    View Apple Health inspired metrics, supportive insights, and cohort alignment.
                  </p>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-100 text-[11px] font-mono font-semibold text-emerald-700 flex items-center gap-1">
                <span>Results Locked</span>
                <Check className="w-3.5 h-3.5 text-emerald-500 stroke-[3]" />
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-300 to-emerald-300 font-black">
                100% Private
              </span>
            </h2>
            
            {/* Purpose statement clearly answering what this section is about */}
            <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed bg-slate-800/80 border border-slate-700/80 p-5 rounded-2xl shadow-sm text-slate-200">
              <strong className="text-cyan-300 font-semibold block sm:inline mr-1">Section Purpose:</strong> 
              This assessment calculates your driver awareness profile strictly inside your web browser. 
              We never track your GPS location, stream camera video, or store driving logs.
            </p>
          </div>

          {/* Privacy Architecture Flow Diagram */}
          <div className="bg-slate-900/90 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 relative backdrop-blur-md">
            
            <div className="text-center space-y-1 border-b border-slate-800 pb-6">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyan-400">
                ARCHITECTURE FLOW
              </span>
              <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-white">
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
          SECTION 6: WHAT ASTRATEQ GADGETS IS VALIDATING
         ========================================== */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              CURRENT VALIDATION PHASE
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#071524] tracking-tight">
              What Astrateq Gadgets Is Validating
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We are carefully researching whether a new category of privacy-first driver awareness technology should exist. Here is our active research stage:
            </p>
          </div>

          {/* Research Stage Indicator Box */}
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6 text-left max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase text-sky-700 tracking-wider block">CURRENT VALIDATION PHASE</span>
                <h3 className="font-sans font-extrabold text-2xl text-[#071524]">Phase 1: Concept Validation</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Active Research Phase</span>
              </span>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-slate-400 block">Research Goal: Understand Canadian driver expectations around privacy-first awareness technology</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700 font-semibold">
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>Driver awareness patterns</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>Privacy expectations</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>Feature priorities</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 stroke-[3]" />
                  <span>Market interest</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 7: CANADIAN RESEARCH COHORT & ECOSYSTEM
         ========================================== */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              CANADIAN DRIVER RESEARCH COHORT
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-[#071524] tracking-tight">
              Canadian Driver Research Cohort 🍁
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              We are inviting early drivers across Canada to participate in research validation before building commercial technology.
            </p>
          </div>

          {/* Research Cohort Credibility Box */}
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 text-left space-y-4">
            <h3 className="font-sans font-bold text-xl text-[#071524]">How Early Participants Shape Development</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              By completing the simulation, research participants help us calibrate driver awareness algorithms for Canadian weather, highway commuters, and urban congestion.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Driver concerns</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Privacy expectations</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Awareness challenges</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs text-slate-800 font-semibold flex items-center gap-2">
                <Check className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Future technology priorities</span>
              </div>
            </div>
          </div>

          {/* Future Ecosystem Roadmap */}
          <div 
            className="p-8 sm:p-10 rounded-3xl text-white border border-sky-500/30 text-left space-y-8"
            style={{ backgroundColor: '#071524' }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-mono text-[#22D3EE] uppercase font-bold tracking-widest block">ROADMAP PIPELINE</span>
                <h3 className="font-sans font-extrabold text-2xl text-white">Future Astrateq Gadgets Ecosystem</h3>
              </div>
              <span className="text-xs font-mono text-sky-300 bg-sky-950 px-3 py-1 rounded-full border border-sky-500/30">
                100% Offline Principles
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Phase 1 */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-emerald-500/40 space-y-2">
                <div className="text-[10px] font-mono font-bold text-emerald-400 uppercase">Phase 1 (Active)</div>
                <div className="font-bold text-base text-white">Software Validation</div>
                <p className="text-xs text-[#D6E4F0] leading-relaxed opacity-85">
                  Testing simulated driver awareness models, privacy priorities, and commuter feedback across Canadian provinces.
                </p>
              </div>

              {/* Phase 2 */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 space-y-2">
                <div className="text-[10px] font-mono font-bold text-[#22D3EE] uppercase">Phase 2 (In Research)</div>
                <div className="font-bold text-base text-white">Privacy-First Vehicle Intelligence</div>
                <p className="text-xs text-[#D6E4F0] leading-relaxed opacity-85">
                  Developing on-device, local intelligence software providing non-intrusive focus cues for long drives.
                </p>
              </div>

              {/* Phase 3 */}
              <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
                <div className="text-[10px] font-mono font-bold text-amber-400 uppercase">Phase 3 (Future Concepts)</div>
                <div className="font-bold text-base text-white">Optional Hardware Integrations</div>
                <p className="text-xs text-[#D6E4F0] leading-relaxed opacity-85">
                  Exploring hardware accessories like Vision Shield™ HUD and Aura Dial™ ambient console pulses.
                </p>
              </div>
            </div>

            {/* Hardware Accessory Preview Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4 hover:border-cyan-500/40 transition-colors">
                <img src={visionShieldInCar} alt="Vision Shield" className="w-20 h-20 rounded-xl object-cover shrink-0" referrerPolicy="no-referrer" />
                <div className="space-y-1">
                  <div className="font-bold text-sm text-white">Astrateq Vision Shield™ Concept</div>
                  <p className="text-xs text-slate-400 leading-snug">Visor-mounted optical HUD projecting peripheral focus cues without screen glance down.</p>
                  <button onClick={() => setActiveConceptModal('vision')} className="text-xs text-[#22D3EE] font-bold hover:underline cursor-pointer">Explore Concept Spec →</button>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center gap-4 hover:border-amber-500/40 transition-colors">
                <img src={auraDialInCar} alt="Aura Dial" className="w-20 h-20 rounded-xl object-cover shrink-0" referrerPolicy="no-referrer" />
                <div className="space-y-1">
                  <div className="font-bold text-sm text-white">Astrateq Aura Dial™ Concept</div>
                  <p className="text-xs text-slate-400 leading-snug">Tactile console accessory emitting circadian-calibrated ambient light pulses during night commute dips.</p>
                  <button onClick={() => setActiveConceptModal('aura')} className="text-xs text-amber-400 font-bold hover:underline cursor-pointer">Explore Concept Spec →</button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==========================================
          SECTION 8: FREQUENTLY ASKED QUESTIONS
         ========================================== */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto space-y-10">
          
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-sky-700 uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100">
              TRANSPARENT ANSWERS
            </span>
            <h2 className="font-sans font-extrabold text-3xl text-[#071524] tracking-tight">
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
                  className="bg-white border border-[#CBD5E1] rounded-2xl overflow-hidden transition-all duration-200 shadow-xs hover:border-sky-400 hover:shadow-md"
                >
                  <button
                    onClick={() => setActiveFaqIdx(isOpen ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left font-sans font-extrabold text-[#071524] hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-sky-600 shrink-0 ml-3" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-3" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-slate-100 bg-slate-50/50">
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
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-400 via-sky-400 to-teal-400 hover:from-cyan-300 hover:to-teal-300 text-slate-950 font-black text-base rounded-2xl shadow-[0_0_35px_rgba(34,211,238,0.5)] hover:shadow-[0_0_45px_rgba(34,211,238,0.75)] transition-all cursor-pointer border border-cyan-200/50 group"
              id="final_start_simulation_cta"
            >
              <span className="tracking-wide uppercase">START YOUR SIMULATION</span>
              <ChevronRight className="w-5 h-5 ml-2 text-slate-950 stroke-[3] transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-base rounded-2xl border border-slate-700 transition-all cursor-pointer"
              id="final_join_cohort_cta"
            >
              <span>JOIN RESEARCH COHORT</span>
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
            <div className="text-[9px] text-[#22D3EE] font-mono">60s · Free · No Tracking</div>
          </div>
          <button
            onClick={onStartDiagnostic}
            className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-black text-xs rounded-xl shadow-md cursor-pointer flex items-center gap-1 shrink-0 border border-cyan-200"
            id="mobile_sticky_cta"
          >
            <span>START SIMULATION</span>
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
          className="fixed bottom-20 md:bottom-6 right-6 z-50 bg-cyan-500 hover:bg-cyan-400 text-slate-950 p-3 rounded-full shadow-lg border border-cyan-300/50 transition-all cursor-pointer flex items-center justify-center"
          aria-label="Scroll to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-5 h-5 text-slate-950 stroke-[2.5]" />
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
              className="relative w-full max-w-2xl bg-[#0a1428] text-white rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden p-6 sm:p-8 space-y-6 text-left max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setActiveConceptModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-700 shadow-lg">
                <img
                  src={activeConceptModal === 'vision' ? visionShieldInCar : auraDialInCar}
                  alt={activeConceptModal === 'vision' ? "Astrateq Vision Shield" : "Astrateq Aura Dial"}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1428] via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 bg-slate-950/85 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-xs font-mono font-bold text-[#22D3EE]">
                  {activeConceptModal === 'vision' ? 'Visor-Mounted HUD Specification' : 'Console Ambient Light Dial Specification'}
                </div>
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase text-[#22D3EE] font-bold tracking-wider">
                  CANADIAN RESEARCH CONCEPT BRIEF
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeConceptModal === 'vision' ? 'Astrateq Vision Shield™' : 'Astrateq Aura Dial™'}
                </h3>
                <p className="text-sm text-[#D6E4F0] leading-relaxed font-normal opacity-90">
                  {activeConceptModal === 'vision' 
                    ? 'A conceptual visor-mounted optical HUD engineered to project subtle, non-distracting awareness indicators directly into the driver peripheral line of sight without requiring screen glance down.'
                    : 'A conceptual tactile console accessory engineered to emit soft, circadian-calibrated light pulses during late-evening highway commutes to preserve alertness without glare or eye strain.'}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2.5 text-xs">
                <span className="font-mono font-bold text-[#22D3EE] uppercase tracking-wider block">
                  Core Engineering Principles
                </span>
                <ul className="space-y-2 text-[#D6E4F0]">
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

              <div className="pt-2 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
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
                    className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 text-slate-950 font-bold rounded-xl text-xs transition-all shrink-0 cursor-pointer shadow-md"
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

import React from 'react';
import { Shield, Clock, ShieldCheck, CheckCircle2, ChevronRight, Gauge, AlertTriangle, Users, Compass, Lock, MapPin, Cpu } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingViewProps {
  onStartDiagnostic: () => void;
  heroImage: string;
  commuteImage: string;
  quizView: React.ReactNode;
}

export default function LandingView({ onStartDiagnostic, heroImage, commuteImage, quizView }: LandingViewProps) {
  return (
    <div className="font-sans text-slate-800" id="landing_view_container">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[95vh] flex items-center justify-center px-4 sm:px-6 py-12 md:py-20">
        {/* Deep professional navy base under the image */}
        <div className="absolute inset-0 bg-[#020b14]" />

        {/* Background image overlay - highly clear and premium */}
        <div className="absolute inset-0 z-0 opacity-75">
          <img
            src={heroImage}
            alt="Canadian mountain wilderness highway"
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Deeper, more professional navy-to-transparent gradient overlays atop the hero image */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030d1a]/95 via-[#030d1a]/65 to-[#030d1a]/95 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030d1a]/90 via-transparent to-[#030d1a]/90 z-0" />
        <div className="absolute inset-0 bg-radial-[circle_at_50%_50%] from-transparent via-[#030d1a]/30 to-[#030d1a]/90 z-0" />

        {/* Content floats directly over the background image with strong text drop-shadows */}
        <div className="relative max-w-4xl w-full mx-auto z-10 text-center space-y-6 sm:space-y-8 px-4">
          
          {/* Privacy-First Badge Above Title */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/45 text-cyan-200 text-xs font-semibold uppercase tracking-wider mx-auto shadow-md backdrop-blur-xs">
            <Shield className="w-3.5 h-3.5 text-cyan-300" />
            <span>Privacy-first driver intelligence</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-[820px] mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Check your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-cyan-300 font-black">Driver Awareness Readiness</span> in 60 seconds.
          </h1>

          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-cyan-400 font-sans font-black text-sm sm:text-base uppercase tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Drive Safer. Drive Smarter.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              See how your driving habits, fatigue exposure, and attention patterns map to Canadian road conditions — without vehicle tracking, insurance scoring, or hardware.
            </p>
          </div>

          {/* Compact Horizontal Trust Badge Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white bg-slate-950/75 border border-slate-800/80 px-5 py-3.5 rounded-2xl max-w-2xl mx-auto font-semibold shadow-xl">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>No vehicle connection</span>
            </div>
            <div className="hidden sm:block text-slate-700 font-light">|</div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>60 seconds or less</span>
            </div>
            <div className="hidden sm:block text-slate-700 font-light">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>No insurance use</span>
            </div>
            <div className="hidden sm:block text-slate-700 font-light">|</div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>No hardware required</span>
            </div>
          </div>

          {/* Core Conversion Call to Action */}
          <div className="space-y-4 pt-2">
            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-cyan-500 hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-extrabold text-lg sm:text-xl rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer border border-cyan-400/25 group"
              id="hero_diagnostic_cta"
            >
              <span>Start Awareness Simulation</span>
              <ChevronRight className="w-5.5 h-5.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <p className="text-[11px] sm:text-xs text-slate-300 max-w-md mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-medium">
              Takes about 60 seconds. No hardware required. Your simulated profile helps shape Astrateq Gadgets’ pre-launch research program.
            </p>
          </div>

        </div>
      </section>

      {/* 2. WHAT YOU WILL RECEIVE */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">What You'll Receive</h2>
            <p className="font-display font-bold text-3xl text-slate-900 tracking-tight">What You’ll Unlock in 60 Seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="dashboard-card bg-white p-8 rounded-2xl border border-slate-100 border-t-4 border-t-sky-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[240px]">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-sky-50 flex items-center justify-center text-brand-primary">
                    <Gauge className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-sky-50 text-sky-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Simulated Output
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">Driver Awareness Score</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    A simulated 0–100 score based on driving habits, attention patterns, fatigue exposure, and driving context.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="dashboard-card bg-white p-8 rounded-2xl border border-slate-100 border-t-4 border-t-amber-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[240px]">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                    <AlertTriangle className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-amber-50 text-amber-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Behavioral Signal
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">Fatigue Risk Awareness Profile</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Understand how time of day, commute type, long drives, and environmental conditions may influence your awareness patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="dashboard-card bg-white p-8 rounded-2xl border border-slate-100 border-t-4 border-t-emerald-500 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between min-h-[240px]">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-850 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Cohort Signal
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">Research Cohort Classification</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    See which validation cohort your simulated awareness profile aligns with and whether you may qualify for research participation.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">60-Second Flow</h2>
            <p className="font-display font-bold text-3xl text-slate-900 tracking-tight">How It Works</p>
          </div>

          <div className="bg-slate-50/55 rounded-3xl p-8 sm:p-12 border border-slate-100/85 relative shadow-sm">
            {/* Desktop Connector dashed lines */}
            <div className="hidden md:block absolute top-[54px] left-[18%] right-[18%] h-[2px] border-t border-dashed border-slate-200 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="text-center space-y-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md ring-4 ring-white transition-transform group-hover:scale-105 duration-250">
                  1
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Answer awareness questions</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Tell us about your driving frequency, commute patterns, fatigue exposure, and attention habits.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md ring-4 ring-white transition-transform group-hover:scale-105 duration-250">
                  2
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Preview your awareness profile</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Receive a simulated Driver Awareness Score and behavioral insight summary.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md ring-4 ring-white transition-transform group-hover:scale-105 duration-250">
                  3
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">See your research cohort</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  High-intent profiles may be invited to join the Astrateq Gadgets research cohort.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* WHAT ASTRATEQ IS VALIDATING FIRST SECTION */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-150">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Concept Validation</span>
            <h2 className="font-sans font-extrabold text-3xl text-slate-900 tracking-tight">
              What Astrateq is validating first
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Astrateq Gadgets is currently validating a software-led driver readiness intelligence experience for Canadian roads. This readiness check helps us understand whether drivers want clearer readiness scores, risk profiles, compatibility confidence, and privacy-first driving insights before future hardware decisions are made.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-150 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-brand-primary">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-slate-900 text-lg">Readiness intelligence</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                A software-led experience that translates vehicle profile, driving context, and privacy preferences into a simple readiness score.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-150 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-brand-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-slate-900 text-lg">Canadian driver context</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Designed around highway commuting, seasonal road conditions, long-distance trips, family driving, and privacy-conscious Canadian drivers.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-150 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-brand-primary">
                <Cpu className="w-6 h-6" />
              </div>
              <h4 className="font-sans font-bold text-slate-900 text-lg">Future hardware direction</h4>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Optional hardware concepts may support deeper local-first insights later, but hardware availability, pricing, compatibility, and timing depend on validation results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE DIAGNOSTIC SECTION */}
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
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
              Complete this 60-second behavioral simulation to generate your conceptual Driver Awareness Score.
            </p>
            <p className="text-xs text-sky-700/85 font-bold tracking-wide">
              No vehicle connection. No insurance use. No hardware required.
            </p>
            <p className="text-[11px] text-slate-400 mt-2 max-w-xl mx-auto leading-relaxed">
              This is a simulated behavioral research model. No vehicle data is accessed, tracked, or transmitted. Results are conceptual and used only for market research and concept validation.
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-[#DCEBFA] shadow-2xl overflow-hidden p-2 sm:p-6 max-w-3xl mx-auto">
            {quizView}
          </div>
        </div>
      </section>

      {/* 4. CANADIAN CONDITIONS SECTION */}
      <section className="py-20 px-6 bg-slate-950 text-white relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={commuteImage}
            alt="Ontario highway at twilight"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Ambient Dark Navy Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40 z-0"></div>

        <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center z-10">
          
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400">Canadian Drivers Focus</span>
            <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-white tracking-tight leading-tight drop-shadow-md">
              Built around Canadian driving realities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Many safety tools focus on vehicle data, tracking, or insurance-style monitoring. Astrateq Gadgets is exploring a different approach: a software-based awareness simulation for Canadian drivers, focused on fatigue exposure, attention patterns, road conditions, and privacy-first participation.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Long highway commutes</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Late-night or early-morning driving</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Winter visibility and poor weather</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Traffic fatigue in major Canadian cities</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Privacy-first driver awareness research</span>
              </li>
            </ul>
          </div>

          {/* Premium Interactive Mockup representation card */}
          <div className="bg-slate-900/80 backdrop-blur-md p-6.5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">Driver Awareness Intelligence Simulation</span>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">EST: 60S</span>
            </div>
            
            <div className="space-y-3">
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="text-[10px] font-mono text-brand-secondary block font-bold uppercase">Behavioral Inputs</span>
                <span className="text-sm font-semibold text-white mt-1 block">Frequency, Commute Type, Fatigue & Attention Patterns</span>
              </div>
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="text-[10px] font-mono text-emerald-400 block font-bold uppercase">Simulated Awareness Profile</span>
                <span className="text-sm font-semibold text-white mt-1 block">Awareness Score, Risk Profile, Research Cohort Pathway</span>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-slate-500 leading-normal text-center">
              No vehicle connection · No tracking · No insurance use
            </div>
          </div>

        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            Your Driver Awareness Profile is one step away.
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
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
            <span className="text-[11px] text-slate-400 mt-2.5 block font-mono font-medium uppercase tracking-wider">
              Free • 60 Seconds • No hardware required
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}

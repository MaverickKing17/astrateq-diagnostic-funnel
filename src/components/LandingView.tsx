import React from 'react';
import { Shield, Clock, ShieldCheck, CheckCircle2, ChevronRight, Gauge, AlertTriangle, Users, Compass, Lock, MapPin } from 'lucide-react';
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
        {/* Background image overlay - highly clear and premium */}
        <div className="absolute inset-0 z-0 opacity-85">
          <img
            src={heroImage}
            alt="Canadian mountain wilderness highway"
            className="w-full h-full object-cover object-center filter contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Balanced dark overlay to preserve depth while making image highly clear */}
        <div className="absolute inset-0 bg-slate-950/50 z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-transparent to-slate-950/90 z-0" />

        {/* Content floats directly over the background image with strong text drop-shadows */}
        <div className="relative max-w-4xl w-full mx-auto z-10 text-center space-y-6 sm:space-y-8 px-4">
          
          {/* Privacy-First Badge Above Title */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-400/45 text-cyan-200 text-xs font-semibold uppercase tracking-wider mx-auto shadow-md backdrop-blur-xs">
            <Shield className="w-3.5 h-3.5 text-cyan-300" />
            <span>Privacy-first driver intelligence</span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.15] max-w-[820px] mx-auto drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            Get your free Canadian <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-cyan-300 font-black">Vehicle Readiness Score</span> in 60 seconds.
          </h1>

          <div className="space-y-3 max-w-2xl mx-auto">
            <p className="text-cyan-400 font-sans font-black text-sm sm:text-base uppercase tracking-widest drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Drive Safer. Drive Smarter.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-100 leading-relaxed font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              See how your vehicle and driving profile stack up for Canadian road conditions — without turning your driving data into a surveillance product.
            </p>
          </div>

          {/* Compact Horizontal Trust Badge Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white bg-slate-950/75 border border-slate-800/80 px-5 py-3.5 rounded-2xl max-w-2xl mx-auto font-semibold shadow-xl">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-cyan-400" />
              <span>No payment required</span>
            </div>
            <div className="hidden sm:block text-slate-700 font-light">|</div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>60 seconds or less</span>
            </div>
            <div className="hidden sm:block text-slate-700 font-light">|</div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>Built for Canadian roads</span>
            </div>
          </div>

          {/* Core Conversion Call to Action */}
          <div className="space-y-4 pt-2">
            <button
              onClick={onStartDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#0ea5e9] via-[#0284c7] to-cyan-500 hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-extrabold text-lg sm:text-xl rounded-2xl shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 cursor-pointer border border-cyan-400/25 group"
              id="hero_diagnostic_cta"
            >
              <span>Get My Free Readiness Score</span>
              <ChevronRight className="w-5.5 h-5.5 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <p className="text-[11px] sm:text-xs text-slate-300 max-w-md mx-auto leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)] font-medium">
              Takes about 60 seconds. No payment required. Your result helps shape Astrateq Gadgets’ pre-launch validation program.
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
                    Instant preview
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">Vehicle Readiness Score</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    A simple 0–100 readiness score based on your vehicle profile, driving pattern, and readiness inputs.
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
                    Canadian context
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">Canadian Driving Risk Profile</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    Understand how commute type, highway use, seasonal conditions, and long-distance travel may affect your driving context.
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
                    Eligibility signal
                  </span>
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900">Founding Cohort Classification</h3>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    See whether your profile may qualify for early access consideration in the Astrateq Gadgets founding cohort.
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
                <h3 className="font-display font-bold text-slate-900 text-lg">Answer quick questions</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  Tell us about your vehicle, driving pattern, and privacy preference.
                </p>
              </div>

              {/* Step 2 */}
              <div className="text-center space-y-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md ring-4 ring-white transition-transform group-hover:scale-105 duration-250">
                  2
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">Preview your readiness score</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  See a personalized readiness signal before deeper commitment.
                </p>
              </div>

              {/* Step 3 */}
              <div className="text-center space-y-4 group">
                <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md ring-4 ring-white transition-transform group-hover:scale-105 duration-250">
                  3
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg">See if you qualify for founding access</h3>
                <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                  High-intent profiles are routed toward the founding cohort reservation page.
                </p>
              </div>

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
              Pre-Launch Driver Diagnostic
            </h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-medium">
              Complete this brief 60-second assessment to calculate your preliminary Canadian Vehicle Readiness Score.
            </p>
            <p className="text-xs text-sky-700/85 font-bold tracking-wide">
              🔒 No VIN required. No payment required.
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
              Many vehicle tools focus on raw codes, fleet dashboards, or insurer-style monitoring. Astrateq Gadgets is exploring a different layer: readiness intelligence for Canadian commutes, road trips, seasonal roads, and privacy-conscious drivers.
            </p>

            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Ontario/GTA high-density highway commuting</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Summer road trip heat & rough roads readiness</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Winter slush, salt, and cold battery intelligence</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Older vehicles & mixed-use daily drivers</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                <span className="text-slate-200">Data-private security for families</span>
              </li>
            </ul>
          </div>

          {/* Premium Interactive Mockup representation card */}
          <div className="bg-slate-900/80 backdrop-blur-md p-6.5 rounded-2xl border border-slate-800 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full"></div>
                <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">Astrateq Gadgets Diagnostic CA-01</span>
              </div>
              <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">EST: 60S</span>
            </div>
            
            <div className="space-y-3">
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="text-[10px] font-mono text-brand-secondary block font-bold uppercase">Primary Wedge</span>
                <span className="text-sm font-semibold text-white mt-1 block">Canadian Driver Readiness Intelligence</span>
              </div>
              <div className="bg-slate-950 p-4.5 rounded-xl border border-slate-850">
                <span className="text-[10px] font-mono text-emerald-400 block font-bold uppercase">Privacy Assurance</span>
                <span className="text-sm font-semibold text-white mt-1 block">Surveillance-Free • Sandbox Local Processing</span>
              </div>
            </div>

            <div className="pt-3 text-[11px] text-slate-500 leading-normal text-center">
              Canadian driving conditions are unique. Your pre-launch validation ensures our sensors meet rugged thermal, battery, and diagnostic expectations in Ontario.
            </div>
          </div>

        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      <section className="py-24 px-6 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">
            Your readiness score is one step away.
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Complete the 60-second diagnostic to preview your score, risk profile, and founding cohort classification.
          </p>
          <div className="pt-4">
            <button
              onClick={onStartDiagnostic}
              className="px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#38bdf8] hover:to-[#0284c7] text-white font-bold text-base rounded-2xl shadow-xl hover:shadow-sky-500/15 hover:-translate-y-0.5 active:translate-y-0 active:scale-98 transition-all duration-200 flex items-center gap-2 mx-auto cursor-pointer"
              id="final_landing_diagnostic_cta"
            >
              <span>Get My Free Readiness Score</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-[11px] text-slate-400 mt-2.5 block font-mono font-medium uppercase tracking-wider">
              Free • 60 Seconds • No commitment required
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}

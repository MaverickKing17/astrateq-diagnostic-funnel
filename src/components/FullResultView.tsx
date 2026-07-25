import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ChevronRight, 
  CheckCircle2, 
  AlertTriangle, 
  Lock, 
  HelpCircle, 
  Cpu, 
  Activity, 
  ArrowRight,
  RefreshCw,
  EyeOff,
  Database,
  Sparkles,
  Copy,
  Check
} from 'lucide-react';
import { DiagnosticResult } from '../types';
import Gauge from './Gauge';

interface FullResultViewProps {
  result: DiagnosticResult;
  email: string;
  firstName: string;
  ticketId: string;
  onReset: () => void;
  onTrackEvent: (name: string, data?: Record<string, any>) => void;
  ctaImage: string;
  onContinueToReservation: () => void;
}

export default function FullResultView({ 
  result, 
  email, 
  firstName, 
  ticketId, 
  onReset, 
  onTrackEvent, 
  ctaImage,
  onContinueToReservation
}: FullResultViewProps) {
  const [copied, setCopied] = useState(false);

  const handleCtaClick = (ctaName: string) => {
    onTrackEvent('reservation_cta_clicked', { ctaName, email, firstName, ticketId });
    // Call the internal reservation page transition
    onContinueToReservation();
  };

  const handleCopyLink = () => {
    const shareUrl = `${window.location.origin}/?ref=${ticketId}`;
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    onTrackEvent('referral_link_copied', { ticketId, email });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="font-sans text-slate-800" id="full_result_view_container">
      
      {/* 1. Header Hero Banner */}
      <section className="bg-slate-950 text-white py-12 px-6 border-b border-slate-900 text-center relative overflow-hidden">
        {/* Subtle grid backdrop */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 z-0"></div>
        
        <div className="relative max-w-4xl mx-auto space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-bold border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Identity and Email Verified</span>
          </div>
          <h1 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Your Simulated Driver Awareness Report
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Thank you, {firstName || 'driver'}! Your customized simulated awareness profile is fully compiled.
          </p>
        </div>
      </section>

      {/* 2. Main Metrics Dashboard */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Score and Tiers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Score Card */}
            <div className="dashboard-card bg-white p-8 rounded-2xl border border-slate-100 shadow-md relative flex flex-col items-center justify-center mt-3">
              {/* Report Complete Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                <span>Report Complete</span>
              </div>
              
              <h3 className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-widest mb-4 mt-2">
                Driver Awareness Score
              </h3>
              <Gauge score={result.score} size={220} />
              
              <div className="w-full mt-4 pt-4 border-t border-slate-100 text-center">
                <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">Awareness Score</span>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Your simulated score reflects your driving habits, fatigue exposure, and attention inputs.
                </p>
              </div>
            </div>

            {/* Beautiful Founding Cohort Pre-Launch Pass Card */}
            <div className="bg-gradient-to-br from-slate-900 to-[#020d1a] text-white rounded-2xl border border-slate-800 shadow-xl overflow-hidden relative" id="reservation_pass_ticket">
              {/* Ticket Jagged Edges / Cutout Circles */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#F8FAFC] rounded-r-full z-10 border border-slate-100 border-l-0"></div>
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-8 bg-[#F8FAFC] rounded-l-full z-10 border border-slate-100 border-r-0"></div>

              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider">Astrateq Gadgets Founding Cohort</span>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    ACTIVE RESERVATION
                  </span>
                </div>

                {/* Ticket Body details */}
                <div className="grid grid-cols-2 gap-y-3 gap-x-4 text-xs font-sans">
                  <div>
                    <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">COHORT HOLDER</span>
                    <strong className="text-white text-sm font-bold block truncate">{firstName || "Priority Driver"}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">RESERVATION ID</span>
                    <strong className="text-cyan-300 text-sm font-mono font-bold block">{ticketId}</strong>
                  </div>
                  <div className="col-span-2 pt-1">
                    <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">VERIFIED EMAIL</span>
                    <span className="text-slate-300 font-medium truncate block">{email}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">COHORT RANK</span>
                    <span className="text-slate-200 font-bold block">GTA / {result.tier === 1 ? "CLASS-A" : result.tier === 2 ? "CLASS-B" : "CLASS-C"}</span>
                  </div>
                  <div>
                    <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block">PRIORITY STATUS</span>
                    <span className="text-emerald-400 font-bold block">Guaranteed Slot</span>
                  </div>
                </div>

                {/* Simulated Barcode block */}
                <div className="pt-3 border-t border-dashed border-slate-800 flex flex-col items-center space-y-1.5">
                  <div className="flex gap-[2px] h-7 w-full max-w-[200px] bg-white p-1 rounded">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-black h-full" 
                        style={{ width: `${(i % 3 === 0 || i % 7 === 0) ? '3px' : '1px'}` }}
                      />
                    ))}
                  </div>
                  <span className="text-[9px] font-mono text-slate-500">MEMBER-ID: {ticketId}-2026</span>
                </div>

                {/* Invite & Copy Referral Component */}
                <div className="pt-2">
                  <button 
                    onClick={handleCopyLink}
                    className="w-full bg-slate-800 hover:bg-slate-750 text-white py-2.5 px-3 rounded-xl border border-slate-700/60 hover:border-slate-600/60 font-semibold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                    id="copy_referral_link_btn"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Pass Details &amp; Link Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-450" />
                        <span>Copy Pass Link to Invite Co-workers</span>
                      </>
                    )}
                  </button>
                  <p className="text-[9px] text-slate-400 text-center mt-1.5 leading-tight">
                    Share your unique pass link with family. Referrals boost cohort positioning.
                  </p>
                </div>

              </div>
            </div>

            {/* Understanding Tiers Card */}
            <div className="dashboard-card bg-white p-6 rounded-2xl border border-slate-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.02)] space-y-4 hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-widest">
                Our Pre-Launch Validation Tiers
              </h4>
              
              <div className="space-y-3.5 text-xs">
                {/* Tier 1 */}
                <div className={`p-3.5 rounded-xl border transition-all duration-200 ${result.tier === 1 ? 'bg-sky-50/60 border-brand-primary/40 shadow-xs' : 'bg-slate-50/40 border-slate-100/80'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Tier 1: High Readiness</span>
                    <span className="text-[9px] font-mono font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded shadow-2xs">Early Allocation</span>
                  </div>
                  <p className="text-slate-500 mt-1 leading-normal">
                    Strong alignment with early hardware and signal priority.
                  </p>
                </div>

                {/* Tier 2 */}
                <div className={`p-3.5 rounded-xl border transition-all duration-200 ${result.tier === 2 ? 'bg-sky-50/60 border-brand-primary/40 shadow-xs' : 'bg-slate-50/40 border-slate-100/80'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Tier 2: Moderate Readiness</span>
                    <span className="text-[9px] font-mono font-bold uppercase bg-blue-100 text-brand-primary px-2 py-0.5 rounded shadow-2xs">Priority Cohort</span>
                  </div>
                  <p className="text-slate-500 mt-1 leading-normal">
                    Fits core commuter requirements; priority evaluation queue.
                  </p>
                </div>

                {/* Tier 3 */}
                <div className={`p-3.5 rounded-xl border transition-all duration-200 ${result.tier === 3 ? 'bg-sky-50/60 border-brand-primary/40 shadow-xs' : 'bg-slate-50/40 border-slate-100/80'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Tier 3: Needs Attention</span>
                    <span className="text-[9px] font-mono font-bold uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded shadow-2xs">Standard Queue</span>
                  </div>
                  <p className="text-slate-500 mt-1 leading-normal">
                    Requires manual profile validation or custom setup.
                  </p>
                </div>
              </div>
              
              <div className="text-[10px] text-slate-400 italic leading-normal pt-1 border-t border-slate-100">
                Note: Simulated awareness scores are pre-launch validation approximations for driver behavior research purposes.
              </div>
            </div>

          </div>

          {/* Right Panel: Custom Metrics Detail (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="dashboard-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/70 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.05)] transition-all duration-300 space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-display font-bold text-xl text-slate-900">Your Simulated Awareness Breakdown</h3>
                <p className="text-xs text-slate-500 mt-1">Generated and locked on {new Date().toLocaleDateString('en-CA')}</p>
              </div>

              {/* Apple Health Inspired Metrics Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider">YOUR DRIVER AWARENESS PROFILE</span>
                  <span className="text-xs font-mono text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full font-bold border border-emerald-200">
                    {result.scoreLabel || "GOOD"}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* Metric 1: Attention Stability */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 hover:border-sky-300 transition-colors">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">ATTENTION STABILITY</span>
                    <div className="text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-sky-500"></span>
                      <span>{result.attentionStability || "GOOD"}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block leading-tight pt-1">Consistent focus retention across routes</span>
                  </div>

                  {/* Metric 2: Fatigue Risk */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 hover:border-emerald-300 transition-colors">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">FATIGUE RISK</span>
                    <div className="text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      <span>{result.fatigueRisk || "LOW"}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block leading-tight pt-1">Circadian alertness & night exposure</span>
                  </div>

                  {/* Metric 3: Environmental Complexity */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1 hover:border-amber-300 transition-colors">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400 block">ENVIRONMENTAL COMPLEXITY</span>
                    <div className="text-base font-extrabold text-slate-900 flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <span>{result.environmentalComplexity || "MODERATE"}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 block leading-tight pt-1">Traffic, weather & highway demands</span>
                  </div>
                </div>

                {/* Driving Context Pills */}
                <div className="p-3.5 bg-slate-900 text-white rounded-xl flex flex-wrap items-center gap-2 text-xs">
                  <span className="font-mono text-slate-400 text-[10px] uppercase font-bold pr-2 border-r border-slate-800">DRIVING CONTEXT</span>
                  <span className="bg-slate-800 text-sky-300 px-2.5 py-1 rounded-lg font-semibold border border-slate-700">{result.drivingContextSummary?.routeType || "Urban Commute"}</span>
                  <span className="bg-slate-800 text-sky-300 px-2.5 py-1 rounded-lg font-semibold border border-slate-700">{result.drivingContextSummary?.condition || "Winter Conditions"}</span>
                  <span className="bg-slate-800 text-sky-300 px-2.5 py-1 rounded-lg font-semibold border border-slate-700">{result.drivingContextSummary?.commuteLength || "45-min Commute"}</span>
                </div>
              </div>

              {/* Supportive Non-Judgmental Insight */}
              <div className="p-4 bg-sky-50/80 border border-sky-200/80 rounded-2xl space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase text-sky-700 tracking-wider block">SUPPORTIVE ANALYSIS</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {result.supportiveInsight || "Your driving environment may create additional cognitive demands during peak hours, but your overall attention stability remains well-balanced."}
                </p>
              </div>

              {/* What this means text block & Onboarding Roadmap */}
              <div className="bg-[#f0f7ff] border border-sky-100 p-5 rounded-2xl space-y-3 shadow-xs">
                <h4 className="text-xs font-mono font-bold uppercase text-brand-primary tracking-wider">Simulated Analysis & Onboarding Pathway</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Excellent work, <strong>{firstName || "Priority Driver"}</strong>! Based on your simulated score of <strong>{result.score}/100</strong> and your privacy preferences, your profile qualifies as a highly aligned candidate for the Astrateq Gadgets pre-launch cohort.
                </p>
                
                {/* Onboarding Steps Visual Indicator */}
                <div className="pt-2 border-t border-slate-250/30 space-y-2.5">
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Cohort Onboarding Status</p>
                  <div className="grid grid-cols-4 gap-1 sm:gap-2">
                    <div className="flex flex-col space-y-1">
                      <div className="h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[9px] font-bold text-emerald-600 text-center sm:text-left leading-tight">1. Simulated</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="h-1.5 rounded-full bg-emerald-500"></div>
                      <span className="text-[9px] font-bold text-emerald-600 text-center sm:text-left leading-tight">2. Verified</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="h-1.5 rounded-full bg-brand-primary animate-pulse"></div>
                      <span className="text-[9px] font-extrabold text-brand-primary text-center sm:text-left leading-tight">3. Reservation</span>
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="h-1.5 rounded-full bg-slate-200"></div>
                      <span className="text-[9px] font-semibold text-slate-400 text-center sm:text-left leading-tight">4. Allocating</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Personalized Awareness Recommendations */}
              <div className="p-5 border border-slate-150 rounded-2xl space-y-4 bg-white shadow-xs">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-2.5">
                  <span className="p-1 rounded bg-sky-50 text-brand-primary text-[10px] font-bold font-mono uppercase tracking-wider">Simulated</span>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">Custom Attention Tips for Your Profile</h4>
                </div>
                
                <div className="space-y-3.5">
                  {result.score >= 80 ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                          <strong>Active Vigilance Tuning:</strong> Your high readiness score is a great foundation. Keep attention locked by coordinating rest-stops with the 2-hour driving limit on long highway runs.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                          <strong>Zero-surveillance Guard:</strong> Ensure your future driver devices continue using offline edge processing to protect your Ontario driving patterns.
                        </p>
                      </div>
                    </>
                  ) : result.score >= 62 ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-brand-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                          <strong>Interval Micro-Breaks:</strong> Your commuting density exposes you to moderate fatigue. Integrate brief 3-minute visual breaks away from screens before joining highway traffic.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-blue-50 text-brand-primary flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                          <strong>Weather Contrast Settings:</strong> Prioritize high-contrast visor aids to mitigate early-morning glare and poor visibility on Canadian winter roads.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">!</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                          <strong>High Fatigue Mitigation:</strong> Your commute frequency indicates heavy exposure. Implement active circadian window planning, avoiding late-night highway segments where possible.
                        </p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">!</div>
                        <p className="text-xs sm:text-sm text-slate-600 leading-normal">
                          <strong>Active Distraction Blockers:</strong> Leverage offline alert signals to partition high-volume multi-tasking and establish an environment of pure driving readiness.
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>

            </div>

            {/* 3. RESERVATION BRIDGE */}
            <div className="dashboard-card bg-gradient-to-r from-blue-50 via-sky-50/30 to-white p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 shadow-md space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase text-brand-primary tracking-widest block">Pre-Launch Research Cohort Entry</span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
                  Your Research Cohort Pathway Is Open
                </h3>
                <p className="text-sm font-bold text-[#102A43]">
                  Classification: {result.tierName} (Score: {result.score} / 100)
                </p>
                <p className="text-sm text-slate-600 leading-relaxed bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
                  Your simulated awareness profile shows alignment with Astrateq Gadgets’ pre-launch validation priorities. You may continue to the reservation page to register your early-access interest.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => handleCtaClick('reservation_bridge_cta')}
                  className="w-full py-4 bg-brand-primary hover:bg-sky-600 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-900/10 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer animate-pulse-subtle"
                  id="reservation_bridge_cta"
                >
                  <span>Continue to Research Cohort Entry</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-slate-500 font-semibold text-center">
                  <span>No payment required during validation</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span>Early-access interest only</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span>Canadian driver cohort</span>
                </div>
                <p className="text-[11px] text-sky-700/85 font-semibold max-w-md mx-auto text-center mt-2.5 bg-sky-50/60 border border-sky-100/50 py-2 px-3 rounded-xl leading-relaxed">
                  ⏱️ <strong>Current validation cycle active for Ontario/GTA driver profiles.</strong> Early responses help shape software development and research focus.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OPERATIONAL PRIVACY PROMISE SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 via-slate-100/40 to-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto space-y-14">
          
          <div className="text-center space-y-4">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-widest text-[#0ea5e9] uppercase bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-150/80 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              Operational Security Core
            </span>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
              Privacy-First By Design
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              A readiness check designed without insurer-style tracking, advertising resale, or unnecessary personal data collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: What we ask for */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-sky-50/15 to-sky-100/20 p-8 rounded-3xl border-2 border-sky-100 shadow-[0_10px_30px_rgba(2,132,199,0.03)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.12)] hover:border-sky-400 transition-all duration-300 space-y-5 flex flex-col justify-between"
              id="privacy_promise_card_1"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-150/80 flex items-center justify-center text-sky-600 shadow-sm">
                  <ShieldCheck className="w-6 h-6 text-sky-600" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-sans font-extrabold text-slate-900 text-lg tracking-tight">What we ask for</h4>
                  <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider">Simulated inputs only</p>
                </div>
                
                <ul className="text-xs sm:text-sm text-slate-700 space-y-3.5 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0 shadow-xs" />
                    <span>Driving context and commute frequency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0 shadow-xs" />
                    <span>Fatigue, alertness, and attention inputs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-sky-500 mt-2 shrink-0 shadow-xs" />
                    <span>Verified email address for simulated report delivery</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-sky-100/60 mt-4 text-[10px] font-mono text-sky-600/80 font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-pulse" />
                <span>Zero vehicle links required</span>
              </div>
            </motion.div>

            {/* Column 2: What we do not do */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-orange-50/15 to-orange-100/20 p-8 rounded-3xl border-2 border-orange-100/80 shadow-[0_10px_30px_rgba(249,115,22,0.03)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.12)] hover:border-orange-400 transition-all duration-300 space-y-5 flex flex-col justify-between"
              id="privacy_promise_card_2"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-150/80 flex items-center justify-center text-orange-600 shadow-sm">
                  <EyeOff className="w-6 h-6 text-orange-600" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-sans font-extrabold text-slate-900 text-lg tracking-tight">What we do not do</h4>
                  <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider">No active monitoring</p>
                </div>
                
                <ul className="text-xs sm:text-sm text-slate-700 space-y-3.5 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 shadow-xs" />
                    <span>We do not sell driving logs or behavior tracking</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 shadow-xs" />
                    <span>We do not track you, score your insurance, or require vehicle connections</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 shrink-0 shadow-xs" />
                    <span>We do not require hardware, vehicle links, or VINs</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-orange-100/60 mt-4 text-[10px] font-mono text-orange-600/85 font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                <span>100% Localized behavioral model</span>
              </div>
            </motion.div>

            {/* Column 3: Why we ask */}
            <motion.div 
              whileHover={{ y: -6, scale: 1.015 }}
              transition={{ duration: 0.2 }}
              className="bg-gradient-to-br from-white via-emerald-50/15 to-emerald-100/20 p-8 rounded-3xl border-2 border-emerald-100 shadow-[0_10px_30px_rgba(16,185,129,0.03)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.12)] hover:border-emerald-400 transition-all duration-300 space-y-5 flex flex-col justify-between"
              id="privacy_promise_card_3"
            >
              <div className="space-y-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-150/80 flex items-center justify-center text-emerald-600 shadow-sm">
                  <Cpu className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-sans font-extrabold text-slate-900 text-lg tracking-tight">Why we ask</h4>
                  <p className="text-xs text-slate-500 font-medium font-mono uppercase tracking-wider">Canadian road validation</p>
                </div>
                
                <ul className="text-xs sm:text-sm text-slate-700 space-y-3.5 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-xs" />
                    <span>To map regional Canadian driver fatigue demands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-xs" />
                    <span>To coordinate future driver awareness research</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0 shadow-xs" />
                    <span>To validate interest in privacy-first driver safety software</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-emerald-100/60 mt-4 text-[10px] font-mono text-emerald-600/85 font-bold uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                <span>Validating market feasibility</span>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* 5. BOTTOM SCENIC HERO CALL TO ACTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white px-4 py-16 sm:py-20 animate-fade-in flex items-center justify-center">
        {/* Background image backdrop - highly clear and vibrant */}
        <div className="absolute inset-0 z-0 opacity-85">
          <img
            src={ctaImage}
            alt="Sleek premium car on mountain pass road"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Dark overlay for rich depth blend and high clarity */}
        <div className="absolute inset-0 bg-slate-950/50 z-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-slate-950/95 z-0" />

        {/* Content floats directly over the background image with drop-shadows */}
        <div className="relative max-w-2xl w-full mx-auto z-10 text-center space-y-6 px-4">
          <span className="text-[10px] font-mono font-bold bg-brand-primary/20 text-brand-secondary border border-brand-primary/30 px-3 py-1.5 rounded-full uppercase tracking-widest inline-block backdrop-blur-xs">
            Astrateq Gadgets research cohort
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight max-w-2xl mx-auto text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
            Your research cohort next step is ready.
          </h2>
          <p className="text-slate-200 text-sm max-w-md mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-medium">
            Continue from your simulated results to register your early-access interest. No payment is required during validation.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleCtaClick('bottom_scenic_cta')}
              className="px-7 py-3.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black text-sm sm:text-base rounded-xl shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:shadow-[0_0_35px_rgba(250,204,21,0.9)] transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center group uppercase tracking-wide border-2 border-yellow-200"
              id="reserve_access_bottom_btn"
            >
              <span>Continue to Research Cohort Entry</span>
              <ArrowRight className="w-5.5 h-5.5 text-slate-950 stroke-[3] transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={onReset}
              className="px-4 py-2.5 bg-slate-950/75 hover:bg-slate-900/95 text-slate-300 hover:text-white border border-slate-800/80 hover:border-slate-700/80 font-medium text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center shadow-md"
              id="retake_diagnostic_bottom_btn"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Retake Simulation</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

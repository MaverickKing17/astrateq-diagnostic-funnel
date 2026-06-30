import { useState } from 'react';
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
  onReset: () => void;
  onTrackEvent: (name: string, data?: Record<string, any>) => void;
  ctaImage: string;
}

export default function FullResultView({ result, email, firstName, onReset, onTrackEvent, ctaImage }: FullResultViewProps) {
  const [copied, setCopied] = useState(false);
  const [ticketId] = useState(() => `AST-ON-${Math.floor(1000 + Math.random() * 9000)}`);
  const reservationUrl = "https://reserve.astrateqgadgets.com?entry=simulation&intent=cohort";

  const handleCtaClick = (ctaName: string) => {
    onTrackEvent('reservation_cta_clicked', { ctaName, email, firstName });
    // Open in a new tab
    window.open(reservationUrl, '_blank');
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
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider">Astrateq Founding Cohort</span>
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
            <div className="dashboard-card bg-white p-6 rounded-2xl border border-slate-100 space-y-4">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-widest">
                Our Pre-Launch Validation Tiers
              </h4>
              
              <div className="space-y-3.5 text-xs">
                {/* Tier 1 */}
                <div className={`p-3 rounded-xl border ${result.tier === 1 ? 'bg-blue-50/45 border-brand-primary/30' : 'bg-slate-50/40 border-slate-100'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Tier 1: High Readiness</span>
                    <span className="text-[9px] font-mono font-bold uppercase bg-emerald-100 text-emerald-800 px-2 py-0.2 rounded">Early Allocation</span>
                  </div>
                  <p className="text-slate-500 mt-1 leading-normal">
                    Strong alignment with early hardware and signal priority.
                  </p>
                </div>

                {/* Tier 2 */}
                <div className={`p-3 rounded-xl border ${result.tier === 2 ? 'bg-blue-50/45 border-brand-primary/30' : 'bg-slate-50/40 border-slate-100'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Tier 2: Moderate Readiness</span>
                    <span className="text-[9px] font-mono font-bold uppercase bg-blue-100 text-brand-primary px-2 py-0.2 rounded">Priority Cohort</span>
                  </div>
                  <p className="text-slate-500 mt-1 leading-normal">
                    Fits core commuter requirements; priority evaluation queue.
                  </p>
                </div>

                {/* Tier 3 */}
                <div className={`p-3 rounded-xl border ${result.tier === 3 ? 'bg-blue-50/45 border-brand-primary/30' : 'bg-slate-50/40 border-slate-100'}`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">Tier 3: Needs Attention</span>
                    <span className="text-[9px] font-mono font-bold uppercase bg-slate-200 text-slate-600 px-2 py-0.2 rounded">Standard Queue</span>
                  </div>
                  <p className="text-slate-500 mt-1 leading-normal">
                    Requires manual profile validation or custom setup.
                  </p>
                </div>
              </div>
              
              <div className="text-[10px] text-slate-400 italic leading-normal">
                Note: Simulated awareness scores are pre-launch validation approximations for driver behavior research purposes.
              </div>
            </div>

          </div>

          {/* Right Panel: Custom Metrics Detail (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="dashboard-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-display font-bold text-xl text-slate-900">Your Simulated Awareness Breakdown</h3>
                <p className="text-xs text-slate-500 mt-1">Generated and locked on {new Date().toLocaleDateString('en-CA')}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Cohort Classification */}
                <div className="p-4.5 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">COHORT CLASSIFICATION</span>
                    <CheckCircle2 className="w-4 h-4 text-sky-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm leading-tight">{result.tierName}</div>
                  <div className="text-xs text-slate-500 leading-snug">Research cohort alignment based on simulated awareness outputs.</div>
                </div>

                {/* Driving Risk Profile */}
                <div className="p-4.5 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">RISK PROFILE TYPE</span>
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                  </div>
                  <div className="font-extrabold text-slate-900 text-sm leading-tight">{result.riskProfile}</div>
                  <div className="text-xs text-slate-500 leading-snug">Your inputs suggest simulated focus patterns under specific driving environments.</div>
                </div>

                {/* Attention Readiness */}
                <div className="p-4.5 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">ATTENTION READINESS</span>
                    <Cpu className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <div className="font-extrabold text-slate-900 text-sm">{result.attentionReadiness}</div>
                  </div>
                  <div className="text-xs text-slate-500 leading-snug">Your profile shows strong consistency for simulated driver awareness reporting.</div>
                </div>

                {/* Privacy Alignment */}
                <div className="p-4.5 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">PRIVACY ALIGNMENT</span>
                    <Lock className="w-4 h-4 text-blue-500" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <div className="font-extrabold text-slate-900 text-sm">{result.privacyAlignment}</div>
                  </div>
                  <div className="text-xs text-slate-500 leading-snug">Aligned with Astrateq Gadgets' privacy-first, no-resale data principles.</div>
                </div>

              </div>

              {/* What this means text block & Onboarding Roadmap */}
              <div className="bg-[#f0f7ff] border border-sky-100 p-5 rounded-2xl space-y-3 shadow-xs">
                <h4 className="text-xs font-mono font-bold uppercase text-brand-primary tracking-wider">Simulated Analysis & Onboarding Pathway</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Excellent work, <strong>{firstName || "Priority Driver"}</strong>! Based on your simulated score of <strong>{result.score}/100</strong> and your privacy preferences, your profile qualifies as a highly aligned candidate for the Astrateq pre-launch cohort.
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
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-150">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight">Privacy-first by design</h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              A readiness check designed without insurer-style tracking, advertising resale, or unnecessary personal data collection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Column 1: What we ask for */}
            <div className="bg-white p-8 rounded-2xl border border-slate-150/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary text-xl font-extrabold shadow-xs">
                <ShieldCheck className="w-6 h-6 text-brand-primary" />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">What we ask for</h4>
              <ul className="text-sm text-slate-600 space-y-3 leading-relaxed list-disc list-inside">
                <li>Driving context and commute frequency</li>
                <li>Fatigue, alertness, and attention inputs</li>
                <li>Verified email address for simulated report delivery</li>
              </ul>
            </div>

            {/* Column 2: What we do not do */}
            <div className="bg-white p-8 rounded-2xl border border-slate-150/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 text-xl font-extrabold shadow-xs">
                <EyeOff className="w-6 h-6 text-orange-600" />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">What we do not do</h4>
              <ul className="text-sm text-slate-600 space-y-3 leading-relaxed list-disc list-inside">
                <li>We do not sell driving logs or behavior tracking</li>
                <li>We do not track you, score your insurance, or require vehicle connections</li>
                <li>We do not require hardware, vehicle links, or VINs</li>
              </ul>
            </div>

            {/* Column 3: Why we ask */}
            <div className="bg-white p-8 rounded-2xl border border-slate-150/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 text-xl font-extrabold shadow-xs">
                <Cpu className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="font-display font-extrabold text-slate-900 text-lg tracking-tight">Why we ask</h4>
              <ul className="text-sm text-slate-600 space-y-3 leading-relaxed list-disc list-inside">
                <li>To map regional Canadian driver fatigue demands</li>
                <li>To coordinate future driver awareness research</li>
                <li>To validate interest in privacy-first driver safety software</li>
              </ul>
            </div>

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
              className="px-7 py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center group"
              id="reserve_access_bottom_btn"
            >
              <span>Continue to Research Cohort Entry</span>
              <ArrowRight className="w-5.5 h-5.5 transition-transform group-hover:translate-x-0.5" />
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

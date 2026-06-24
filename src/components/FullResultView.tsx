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
  Database
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
  const reservationUrl = "https://reserve.astrateqgadgets.com?entry=diagnostic&intent=cohort";

  const handleCtaClick = (ctaName: string) => {
    onTrackEvent('reservation_cta_clicked', { ctaName, email, firstName });
    // Open in a new tab
    window.open(reservationUrl, '_blank');
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
            Your Full Vehicle Readiness Report
          </h1>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            Thank you, {firstName || 'driver'}! Your customized pre-launch diagnostics are fully compiled.
          </p>
        </div>
      </section>

      {/* 2. Main Metrics Dashboard */}
      <section className="py-12 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel: Score and Tiers (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Score Card */}
            <div className="dashboard-card bg-white p-6.5 rounded-2xl border border-slate-100 flex flex-col items-center justify-center">
              <h3 className="text-[10px] font-mono font-bold uppercase text-slate-400 tracking-widest mb-3">
                Vehicle Readiness Index
              </h3>
              <Gauge score={result.score} size={220} />
              
              <div className="w-full mt-4 pt-4 border-t border-slate-100 text-center">
                <span className="text-[10px] font-mono text-slate-400 block font-semibold uppercase">COMPATIBILITY HIGHWAY BASELINE</span>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  Calculated against standard Canadian mechanical bus telemetry parameters.
                </p>
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
                    Requires hardware verification or custom driver setup.
                  </p>
                </div>
              </div>
              
              <div className="text-[10px] text-slate-400 italic leading-normal">
                Note: Diagnostic scores are pre-launch validation approximations and do not guarantee hardware availability or instant compatibility.
              </div>
            </div>

          </div>

          {/* Right Panel: Custom Metrics Detail (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="dashboard-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 space-y-6">
              
              <div className="border-b border-slate-100 pb-4">
                <h3 className="font-display font-bold text-xl text-slate-900">Your Diagnostic Index Results</h3>
                <p className="text-xs text-slate-500 mt-1">Generated and locked on {new Date().toLocaleDateString('en-CA')}</p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Cohort Classification */}
                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">COHORT CLASSIFICATION</span>
                  <div className="font-bold text-slate-900 text-sm leading-tight">{result.tierName}</div>
                  <div className="text-xs text-slate-500 leading-snug">Priority allocation tier based on validation criteria.</div>
                </div>

                {/* Driving Risk Profile */}
                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">RISK PROFILE TYPE</span>
                  <div className="font-bold text-slate-900 text-sm leading-tight">{result.riskProfile}</div>
                  <div className="text-xs text-slate-500 leading-snug">Calculated risk exposure under standard road environments.</div>
                </div>

                {/* Compatibility Confidence */}
                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">COMPATIBILITY CONFIDENCE</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <div className="font-bold text-slate-900 text-sm">{result.compatibilityConfidence}</div>
                  </div>
                  <div className="text-xs text-slate-500 leading-snug">Hardware CAN-bus sync feasibility index.</div>
                </div>

                {/* Privacy Alignment */}
                <div className="p-4 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase text-slate-400">PRIVACY ALIGNMENT</span>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <div className="font-bold text-slate-900 text-sm">{result.privacyAlignment}</div>
                  </div>
                  <div className="text-xs text-slate-500 leading-snug">Matches Astrateq Gadgets' zero-surveillance design values.</div>
                </div>

              </div>

              {/* What this means text block */}
              <div className="bg-blue-50/40 border border-blue-100/55 p-5 rounded-xl space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-brand-primary">What this means</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {result.tierDesc} Specifically, your profile types suggest strong resilience under typical high-velocity Ontario highway commuting, but would benefit from local-first thermal sensor telemetry to manage seasonal stresses safely without sending driving habits to insurers.
                </p>
              </div>

            </div>

            {/* 3. RESERVATION BRIDGE */}
            <div className="dashboard-card bg-gradient-to-r from-blue-50 via-sky-50/30 to-white p-6 sm:p-8 rounded-2xl border-2 border-blue-500/30 shadow-md space-y-5">
              <div className="space-y-3">
                <span className="text-[10px] font-mono font-bold uppercase text-brand-primary tracking-widest block">Pre-Launch Funding Cohort Reservation</span>
                <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 leading-tight">
                  Your Vehicle Readiness Score: <span className="text-brand-primary">{result.score} / 100</span>
                </h3>
                <p className="text-sm font-bold text-[#102A43]">
                  Classification: {result.tierName}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed bg-white border border-slate-100 p-4 rounded-xl shadow-xs">
                  <strong>Explanation:</strong> Your profile shows strong alignment with Astrateq Gadgets’ Canadian readiness validation priorities. You may be eligible to continue toward founding cohort review.
                </p>
              </div>

              <div className="pt-2 flex flex-col gap-3">
                <button
                  onClick={() => handleCtaClick('reservation_bridge_cta')}
                  className="w-full py-4 bg-brand-primary hover:bg-sky-600 text-white font-bold text-base rounded-xl shadow-lg shadow-blue-900/10 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  id="reservation_bridge_cta"
                >
                  <span>Continue to Founding Cohort Reservation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[11px] text-slate-500 font-semibold text-center">
                  <span>No payment required during validation</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span>Early access interest only</span>
                  <span className="text-slate-300 hidden sm:inline">•</span>
                  <span>Canadian driver cohort</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. OPERATIONAL PRIVACY PROMISE SECTION */}
      <section className="py-16 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-5xl mx-auto space-y-10">
          
          <div className="text-center space-y-2">
            <h2 className="font-display font-bold text-2xl text-slate-900">Privacy-First By Design</h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              A readiness checking mechanism completely stripped of surveillance-style positioning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Column 1: What we ask for */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-brand-primary font-bold text-sm">
                01
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">What we ask for</h4>
              <ul className="text-xs text-slate-500 space-y-2.5 leading-relaxed list-disc list-inside">
                <li>Vehicle diagnostic type and profile</li>
                <li>Driving context and commute frequency</li>
                <li>Verified email address for custom reports</li>
              </ul>
            </div>

            {/* Column 2: What we do not do */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-sm">
                02
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">What we do not do</h4>
              <ul className="text-xs text-slate-500 space-y-2.5 leading-relaxed list-disc list-inside">
                <li>We do not sell driving logs for advertising</li>
                <li>We do not act as an insurance tracking app</li>
                <li>We do not request excessive personal data</li>
              </ul>
            </div>

            {/* Column 3: Why we ask */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-sm">
                03
              </div>
              <h4 className="font-display font-bold text-slate-900 text-base">Why we ask</h4>
              <ul className="text-xs text-slate-500 space-y-2.5 leading-relaxed list-disc list-inside">
                <li>To map regional Canadian compatibility demand</li>
                <li>To coordinate localized rollout batches</li>
                <li>To validate demand for surveillance-free tech</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 5. BOTTOM SCENIC HERO CALL TO ACTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[50vh] flex items-center px-6 py-16">
        {/* Background image backdrop */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
          <img
            src={ctaImage}
            alt="Sleek premium car on mountain pass road"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Gradient backdrop */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 z-0"></div>

        <div className="relative max-w-3xl mx-auto text-center space-y-6 z-10">
          <span className="text-[10px] font-mono font-bold bg-brand-primary/20 text-brand-secondary border border-brand-primary/30 px-3 py-1.5 rounded-full uppercase tracking-widest">
            Astrateq Gadgets founding cohort
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight max-w-2xl mx-auto">
            Ready to shape the future of driver intelligence?
          </h2>
          <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
            Your inputs directly help validate real, hardware-level diagnostic demand. Secure your founding spot in our Canadian trial program today.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleCtaClick('bottom_scenic_cta')}
              className="px-7 py-3.5 bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-sm sm:text-base rounded-xl shadow-lg hover:opacity-95 transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              id="reserve_access_bottom_btn"
            >
              <span>Reserve My Founding Access</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <button
              onClick={onReset}
              className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 font-semibold text-sm rounded-xl transition-all flex items-center gap-2 cursor-pointer w-full sm:w-auto justify-center"
              id="retake_diagnostic_bottom_btn"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Retake Diagnostic</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

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

                {/* Compatibility Confidence */}
                <div className="p-4.5 rounded-xl bg-slate-50/50 border border-slate-100 space-y-1.5 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-slate-400">COMPATIBILITY CONFIDENCE</span>
                    <Cpu className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <div className="font-extrabold text-slate-900 text-sm">{result.compatibilityConfidence}</div>
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

              {/* What this means text block */}
              <div className="bg-blue-50/40 border border-blue-100/55 p-5 rounded-xl space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase text-brand-primary">What this means</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Your profile shows strong alignment with Astrateq Gadgets’ Canadian readiness validation priorities. Based on your fatigue exposure, privacy preference, and driving context, you may be eligible to continue toward founding cohort review.
                </p>
                <p className="text-sm text-slate-700 leading-relaxed font-semibold">
                  Your next step is to register your early-access interest before the current validation cycle closes.
                </p>
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
                  ⏱️ <strong>Current validation cycle active for Ontario/GTA driver profiles.</strong> Early responses help shape compatibility priorities and rollout planning.
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
                <li>We do not track you, score your insurance, or use vehicle OBD</li>
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
              <span>Retake Diagnostic</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}

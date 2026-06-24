import { Shield, Clock, ShieldCheck, CheckCircle2, ChevronRight, Gauge, AlertTriangle, Users, Compass } from 'lucide-react';
import { motion } from 'motion/react';

interface LandingViewProps {
  onStartDiagnostic: () => void;
  heroImage: string;
  commuteImage: string;
}

export default function LandingView({ onStartDiagnostic, heroImage, commuteImage }: LandingViewProps) {
  return (
    <div className="font-sans text-slate-800" id="landing_view_container">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-950 text-white min-h-[90vh] flex items-center">
        {/* Background image overlay */}
        <div className="absolute inset-0 z-0 opacity-45 mix-blend-luminosity">
          <img
            src={heroImage}
            alt="Canadian mountain wilderness highway"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        {/* Radial subtle blue ambient glow behind content */}
        <div className="absolute inset-0 bg-radial-[circle_at_50%_40%] from-brand-primary/20 via-slate-950/90 to-slate-950 z-0"></div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 z-10 text-center space-y-8">
          
          {/* Privacy-First Badge Above Title */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/30 text-brand-secondary text-xs font-semibold uppercase tracking-wider mx-auto">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy-First Driver Intelligence</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Get your free Canadian <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Vehicle Readiness Score</span> in 60 seconds.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            <strong className="text-brand-secondary block sm:inline mr-1">Drive Safer. Drive Smarter.</strong> See how your vehicle and driving profile stack up for Canadian road conditions — without turning your driving data into a surveillance product.
          </p>

          {/* Quick Stats Grid */}
          <div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-6 text-xs sm:text-sm text-slate-300 bg-slate-900/60 backdrop-blur-md border border-slate-800 p-4 rounded-2xl max-w-xl mx-auto font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-secondary" />
              <span>No payment required</span>
            </div>
            <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4.5 h-4.5 text-brand-secondary" />
              <span>60 seconds or less</span>
            </div>
            <div className="w-1 h-1 bg-slate-700 rounded-full hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Compass className="w-4.5 h-4.5 text-brand-secondary" />
              <span>Built for Canadian roads</span>
            </div>
          </div>

          {/* Core Conversion Call to Action */}
          <div className="space-y-4">
            <button
              onClick={onStartDiagnostic}
              className="px-8 py-4.5 bg-gradient-to-r from-brand-primary to-brand-secondary hover:opacity-95 text-white font-semibold text-lg rounded-2xl shadow-xl shadow-blue-900/30 hover:shadow-blue-500/20 active:scale-98 transition-all flex items-center gap-2.5 mx-auto cursor-pointer"
              id="hero_diagnostic_cta"
            >
              <span>Get My Free Readiness Score</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <p className="text-xs text-slate-400 max-w-md mx-auto">
              Takes about 60 seconds. Your result helps shape Astrateq Gadgets’ pre-launch validation program.
            </p>
          </div>

        </div>
      </section>

      {/* 2. WHAT YOU WILL RECEIVE */}
      <section className="py-20 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-5xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">What You'll Receive</h2>
            <p className="font-display font-bold text-3xl text-slate-900 tracking-tight">Your Custom Readiness Breakdown</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="dashboard-card bg-white p-7 rounded-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary">
                  <Gauge className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">Vehicle Readiness Score</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    A simple 0–100 readiness score based on your vehicle profile, driving pattern, and readiness inputs.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50">
                <span className="text-[10px] font-mono font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  Instant preview
                </span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="dashboard-card bg-white p-7 rounded-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">Canadian Driving Risk Profile</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Understand how commute type, highway use, seasonal conditions, and long-distance travel may affect your driving context.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50">
                <span className="text-[10px] font-mono font-bold bg-blue-50 text-brand-primary px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Shown after completion
                </span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="dashboard-card bg-white p-7 rounded-2xl border border-slate-100 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-900">Founding Cohort Classification</h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    See whether your profile may qualify for early access consideration in the Astrateq Gadgets founding cohort.
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-50">
                <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold">
                  Eligibility signal
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-20 px-6 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-xs font-mono font-bold tracking-widest text-brand-primary uppercase">Step-by-Step</h2>
            <p className="font-display font-bold text-3xl text-slate-900 tracking-tight font-display">How It Works</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="text-center space-y-4 relative z-10 group">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md">
                1
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg">Answer quick questions</h3>
              <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                Tell us about your vehicle, driving pattern, and privacy preference.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-4 relative z-10 group">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md">
                2
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg">Preview your readiness score</h3>
              <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                See a personalized readiness signal before deeper commitment.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-4 relative z-10 group">
              <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mx-auto shadow-md">
                3
              </div>
              <h3 className="font-display font-bold text-slate-900 text-lg">See if you qualify for founding access</h3>
              <p className="text-sm text-slate-500 max-w-xs mx-auto leading-relaxed">
                High-intent profiles are routed toward the founding cohort reservation page.
              </p>
            </div>

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
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-secondary">Canadian Drivers Focus</span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight leading-tight">
              Built around Canadian driving realities
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Many vehicle tools focus on raw trouble codes, fleet tracking dashboards, or insurer-style driving logs. Astrateq Gadgets is exploring a different layer: simple, diagnostic-level readiness intelligence for Canadian commutes, seasonal roads, highway travel, and privacy-conscious drivers.
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
                <span className="text-xs font-mono text-slate-400 font-semibold uppercase tracking-wider">Astrateq Diagnostic CA-01</span>
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
          <h2 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
            Ready to see your vehicle readiness profile?
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            Take the 60-second diagnostic. Review your preliminary risk signals immediately, and see if your profile qualifies for founding early-access hardware.
          </p>
          <div className="pt-4">
            <button
              onClick={onStartDiagnostic}
              className="px-8 py-4 bg-brand-primary hover:bg-blue-700 text-white font-semibold text-base rounded-2xl shadow-lg hover:shadow-blue-500/10 active:scale-98 transition-all flex items-center gap-2 mx-auto cursor-pointer"
              id="final_landing_diagnostic_cta"
            >
              <span>Get My Free Readiness Score</span>
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-[11px] text-slate-400 mt-2.5 block font-mono">
              Free • 60 Seconds • No commitment required
            </span>
          </div>
        </div>
      </section>

    </div>
  );
}

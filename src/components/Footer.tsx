import React from 'react';
import { ShieldCheck, EyeOff, Lock, Cpu, CheckCircle2, MapPin, Award, Scale, Accessibility, FileText, Cookie, AlertTriangle, Copyright, ChevronRight } from 'lucide-react';
import { InfoTabType } from './InfoModal';
import { LegalTabType } from './LegalModal';

interface FooterProps {
  onOpenTab: (tab: InfoTabType) => void;
  onOpenLegal: (tab: LegalTabType) => void;
}

export default function Footer({ onOpenTab, onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-[#071524] via-[#09182a] to-[#040b12] text-slate-300 py-16 px-6 border-t border-sky-500/20 font-sans shadow-2xl" id="app_footer">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Core Quick Trust Bar - Dark Slate Pill Badges */}
        <div className="pb-6 border-b border-slate-800 text-xs font-semibold text-slate-400">
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-between">
            <span className="text-xs font-mono font-black text-cyan-300 uppercase tracking-widest hidden md:inline-block drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
              TRUST & VERIFICATION
            </span>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09223d] text-cyan-200 border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-mono font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:border-cyan-300 hover:bg-[#0c2d52] transition-all">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 stroke-[3]" />
                <span>NO PAYMENT REQUIRED</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09223d] text-cyan-200 border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-mono font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:border-cyan-300 hover:bg-[#0c2d52] transition-all">
                <ShieldCheck className="w-4 h-4 text-cyan-300 stroke-[3]" />
                <span>PRIVACY-FIRST INTEL</span>
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09223d] text-cyan-200 border-2 border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.25)] font-mono font-extrabold text-[11px] sm:text-xs uppercase tracking-wider hover:border-cyan-300 hover:bg-[#0c2d52] transition-all">
                <MapPin className="w-4 h-4 text-cyan-300 stroke-[3]" />
                <span>ONTARIO & GTA FOCUS</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3-Column Visual Depth Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Column 1: Brand Identity (span 5) */}
          <div className="md:col-span-5 bg-[#081a2e]/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border-2 border-sky-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-sky-400 transition-all duration-300 space-y-5 flex flex-col justify-between relative overflow-hidden group">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-emerald-400" />
            
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#041120] rounded-xl border-2 border-cyan-400/50 shrink-0 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <img 
                    src="https://i.ibb.co/rfHxnJNM/Astrateq.png" 
                    alt="Astrateq Gadgets Logo" 
                    className="h-9 w-auto object-contain brightness-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-sans font-black text-white tracking-tight text-xl">
                  Astrateq Gadgets
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-extrabold text-white leading-snug">
                  Privacy-first driver awareness intelligence for Canadian roads.
                </p>
                <p className="text-xs text-slate-200 leading-relaxed font-normal">
                  Helping Ontario and Canadian drivers understand fatigue risk exposure, attentional patterns, and privacy-first driver safety intelligence before future product decisions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-cyan-200 font-extrabold bg-[#092542] border-2 border-cyan-400/60 py-2.5 px-4 rounded-xl w-fit shadow-[0_0_15px_rgba(34,211,238,0.2)]">
              <MapPin className="w-4 h-4 text-cyan-300 shrink-0 stroke-[2.5]" />
              <span>Built for roads in Ontario &amp; Canada</span>
            </div>
          </div>

          {/* Column 2: Privacy & Trust (span 4) */}
          <div className="md:col-span-4 bg-[#081a2e]/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border-2 border-sky-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-sky-400 transition-all duration-300 space-y-4 relative overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-teal-400 via-cyan-400 to-sky-400" />

            <div className="flex items-center gap-2 border-b border-slate-700/80 pb-3 pt-1">
              <ShieldCheck className="w-5 h-5 text-cyan-300 stroke-[3]" />
              <h4 className="text-xs font-mono font-black uppercase tracking-wider text-white">
                PRIVACY &amp; TRUST
              </h4>
            </div>
            
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 group/item">
                <div className="p-2 rounded-xl bg-[#041120] text-cyan-300 border-2 border-cyan-400/50 group-hover/item:bg-cyan-400 group-hover/item:text-slate-950 transition-all duration-200 mt-0.5 shrink-0 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                  <EyeOff className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white group-hover/item:text-cyan-300 transition-colors">No vehicle tracking</p>
                  <p className="text-[11px] text-slate-200 mt-0.5 leading-normal font-normal">
                    We do not track your physical vehicle, require OBD connections, or log active location telemetry.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group/item">
                <div className="p-2 rounded-xl bg-[#041120] text-sky-300 border-2 border-sky-400/50 group-hover/item:bg-sky-400 group-hover/item:text-slate-950 transition-all duration-200 mt-0.5 shrink-0 shadow-[0_0_12px_rgba(56,189,248,0.25)]">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white group-hover/item:text-sky-300 transition-colors">No insurance sharing</p>
                  <p className="text-[11px] text-slate-200 mt-0.5 leading-normal font-normal">
                    We do not share your results or driver awareness profile with insurance companies.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group/item">
                <div className="p-2 rounded-xl bg-[#041120] text-indigo-300 border-2 border-indigo-400/50 group-hover/item:bg-indigo-400 group-hover/item:text-slate-950 transition-all duration-200 mt-0.5 shrink-0 shadow-[0_0_12px_rgba(129,140,248,0.25)]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white group-hover/item:text-indigo-300 transition-colors">No hardware required</p>
                  <p className="text-[11px] text-slate-200 mt-0.5 leading-normal font-normal">
                    This simulation runs entirely in your web browser and does not require vehicle hardware links.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group/item">
                <div className="p-2 rounded-xl bg-[#041120] text-emerald-300 border-2 border-emerald-400/50 group-hover/item:bg-emerald-400 group-hover/item:text-slate-950 transition-all duration-200 mt-0.5 shrink-0 shadow-[0_0_12px_rgba(52,211,153,0.25)]">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-white group-hover/item:text-emerald-300 transition-colors">Simulation-only research</p>
                  <p className="text-[11px] text-slate-200 mt-0.5 leading-normal font-normal">
                    This simulation is used to validate Canadian driver awareness and interest in privacy-first safety software.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Footer Navigation (span 3) */}
          <div className="md:col-span-3 bg-[#081a2e]/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border-2 border-sky-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-sky-400 transition-all duration-300 space-y-4 flex flex-col justify-between relative overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-indigo-400 to-cyan-400" />

            <div className="space-y-3 pt-1">
              <div className="border-b border-slate-700/80 pb-3">
                <h4 className="text-xs font-mono font-black uppercase tracking-wider text-white">
                  ASTRATEQ GADGETS RESOURCES
                </h4>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => onOpenTab('about')} 
                  className="text-left font-bold text-xs text-slate-200 hover:text-cyan-300 cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-[#0a2542] border border-transparent hover:border-cyan-400/40 flex items-center justify-between group"
                  id="footer_nav_about"
                >
                  <span>About Astrateq Gadgets</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-all group-hover:translate-x-1 stroke-[2.5]" />
                </button>
                <button 
                  onClick={() => onOpenTab('howItWorks')} 
                  className="text-left font-bold text-xs text-slate-200 hover:text-cyan-300 cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-[#0a2542] border border-transparent hover:border-cyan-400/40 flex items-center justify-between group"
                  id="footer_nav_how"
                >
                  <span>How It Works</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-all group-hover:translate-x-1 stroke-[2.5]" />
                </button>
                <button 
                  onClick={() => onOpenTab('privacy')} 
                  className="text-left font-bold text-xs text-slate-200 hover:text-cyan-300 cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-[#0a2542] border border-transparent hover:border-cyan-400/40 flex items-center justify-between group"
                  id="footer_nav_privacy"
                >
                  <span>Privacy Approach</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-all group-hover:translate-x-1 stroke-[2.5]" />
                </button>
                <button 
                  onClick={() => onOpenTab('faq')} 
                  className="text-left font-bold text-xs text-slate-200 hover:text-cyan-300 cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-[#0a2542] border border-transparent hover:border-cyan-400/40 flex items-center justify-between group"
                  id="footer_nav_faq"
                >
                  <span>Pre-Launch FAQ</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-cyan-300 transition-all group-hover:translate-x-1 stroke-[2.5]" />
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-700/80">
              <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-emerald-950 border-2 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(52,211,153,0.35)] w-full justify-center" id="active_pilot_status_pill">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-85"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                </span>
                <span className="text-xs font-mono font-black tracking-widest uppercase">
                  ACTIVE PILOT PHASE
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Comprehensive Legal & Compliance Section - Dark Mode */}
        <div className="bg-[#081a2e]/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border-2 border-sky-500/40 shadow-[0_15px_35px_rgba(0,0,0,0.6)] space-y-5 relative overflow-hidden">
          {/* Top Multi-Tone Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-400" />

          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-700/80 pb-4 pt-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-[#041120] text-cyan-300 border-2 border-cyan-400/50 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                <Scale className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-black text-white uppercase tracking-wider">
                  LEGAL &amp; REGULATORY COMPLIANCE
                </h4>
                <p className="text-[11px] text-slate-200 font-medium">
                  Canadian privacy laws &amp; digital compliance policies
                </p>
              </div>
            </div>
            <span className="text-[11px] text-cyan-200 bg-[#092542] border-2 border-cyan-400/60 px-3.5 py-1.5 rounded-lg font-mono font-black tracking-wide w-fit shadow-[0_0_12px_rgba(34,211,238,0.2)]">
              PIPEDA · AODA · WCAG 2.1 AA · DMCA · Ontario Laws
            </span>
          </div>

          {/* Structured UX Policy Tile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            
            <button
              onClick={() => onOpenLegal('privacy')}
              className="p-3 rounded-xl bg-slate-950/90 hover:bg-sky-900/40 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_privacy"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-900 text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-xs shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Privacy Policy (PIPEDA)</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0 text-sky-400" />
            </button>

            <button
              onClick={() => onOpenLegal('terms')}
              className="p-3 rounded-xl bg-slate-950/90 hover:bg-sky-900/40 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_terms"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-900 text-slate-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-xs shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Terms & Conditions</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0 text-sky-400" />
            </button>

            <button
              onClick={() => onOpenLegal('cookies')}
              className="p-3 rounded-xl bg-slate-950/90 hover:bg-sky-900/40 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_cookies"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-900 text-amber-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-xs shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Cookie Policy</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0 text-sky-400" />
            </button>

            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="p-3 rounded-xl bg-slate-950/90 hover:bg-sky-900/40 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_disclaimer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-900 text-amber-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-xs shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Disclaimer</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0 text-sky-400" />
            </button>

            <button
              onClick={() => onOpenLegal('accessibility')}
              className="p-3 rounded-xl bg-slate-950/90 hover:bg-sky-900/40 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_accessibility"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-900 text-emerald-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-xs shrink-0">
                  <Accessibility className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Accessibility (AODA)</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0 text-sky-400" />
            </button>

            <button
              onClick={() => onOpenLegal('dmca')}
              className="p-3 rounded-xl bg-slate-950/90 hover:bg-sky-900/40 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_dmca"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-900 text-slate-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-xs shrink-0">
                  <Copyright className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">DMCA & IP</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0 text-sky-400" />
            </button>

            <button
              onClick={() => onOpenLegal('research_ethics')}
              className="p-3 rounded-xl bg-slate-950/90 hover:bg-sky-900/40 text-slate-200 hover:text-white border border-slate-800 hover:border-sky-500/40 shadow-xs transition-all duration-200 flex items-center justify-between group cursor-pointer sm:col-span-2 lg:col-span-2"
              id="legal_nav_ethics"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-slate-900 text-teal-400 group-hover:bg-sky-500 group-hover:text-slate-950 transition-colors shadow-xs shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Research Ethics Framework</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0 text-sky-400" />
            </button>

          </div>
        </div>

        {/* Legal / Disclosure Copy */}
        <div className="pt-2 flex flex-col md:flex-row items-start justify-between gap-4 text-[11px] text-slate-400 leading-relaxed px-1">
          <div className="space-y-1">
            <p className="font-bold text-white">
              © 2026 Astrateq Gadgets. Toronto, ON, Canada.
            </p>
            <p className="leading-relaxed text-slate-400 max-w-4xl font-normal">
              Astrateq Gadgets is an early-stage Canadian technology research initiative validating whether regional drivers see value in privacy-first driver awareness frameworks before investing in software and hardware development.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}





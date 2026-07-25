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
    <footer className="bg-gradient-to-b from-[#eaf2fa] via-[#e4effa] to-[#dce9f8] text-slate-600 py-14 px-6 border-t border-[#b8daf5] font-sans shadow-inner" id="app_footer">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Core Quick Trust Bar - Elevated Microsoft Fluent Style Pills */}
        <div className="pb-6 border-b border-sky-200/80 text-xs font-semibold text-slate-600">
          <div className="flex flex-wrap gap-3 items-center justify-center md:justify-between">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider font-mono hidden md:inline-block">
              TRUST & VERIFICATION
            </span>
            <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center justify-center">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/90 text-[#005a9e] border border-sky-200/90 shadow-[0_2px_8px_rgba(0,120,212,0.08)] font-bold text-[11px] uppercase tracking-wider hover:border-[#0078d4]/50 transition-all">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0078d4] stroke-[2.5]" />
                <span>No Payment Required</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/90 text-[#005a9e] border border-sky-200/90 shadow-[0_2px_8px_rgba(0,120,212,0.08)] font-bold text-[11px] uppercase tracking-wider hover:border-[#0078d4]/50 transition-all">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0078d4] stroke-[2.5]" />
                <span>Privacy-First Intel</span>
              </span>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/90 text-[#005a9e] border border-sky-200/90 shadow-[0_2px_8px_rgba(0,120,212,0.08)] font-bold text-[11px] uppercase tracking-wider hover:border-[#0078d4]/50 transition-all">
                <MapPin className="w-3.5 h-3.5 text-[#0078d4] stroke-[2.5]" />
                <span>Ontario & GTA Focus</span>
              </span>
            </div>
          </div>
        </div>

        {/* 3-Column Visual Depth Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Column 1: Brand Identity (span 5) */}
          <div className="md:col-span-5 bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-sky-200/80 shadow-[0_8px_25px_rgba(0,120,212,0.08)] hover:shadow-[0_12px_32px_rgba(0,120,212,0.14)] hover:border-[#0078d4]/40 transition-all duration-300 space-y-5 flex flex-col justify-between relative overflow-hidden group">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0078d4] via-[#005a9e] to-[#2b88d8]" />
            
            <div className="space-y-4 pt-1">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-slate-50 to-sky-50 rounded-xl border border-slate-200/80 shadow-2xs shrink-0">
                  <img 
                    src="https://i.ibb.co/rfHxnJNM/Astrateq.png" 
                    alt="Astrateq Gadgets Logo" 
                    className="h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-sans font-bold text-slate-900 tracking-tight text-xl">
                  Astrateq Gadgets
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-semibold text-slate-900 leading-snug">
                  Privacy-first driver awareness intelligence for Canadian roads.
                </p>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Helping Ontario and Canadian drivers understand fatigue risk exposure, attentional patterns, and privacy-first driver safety intelligence before future product decisions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#005a9e] font-bold bg-gradient-to-r from-[#eef7ff] to-[#e4f2fe] border border-[#b8ddf8] py-2 px-3.5 rounded-xl w-fit shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-[#0078d4] shrink-0" />
              <span>Built for roads in Ontario & Canada</span>
            </div>
          </div>

          {/* Column 2: Privacy & Trust (span 4) */}
          <div className="md:col-span-4 bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-sky-200/80 shadow-[0_8px_25px_rgba(0,120,212,0.08)] hover:shadow-[0_12px_32px_rgba(0,120,212,0.14)] hover:border-[#0078d4]/40 transition-all duration-300 space-y-4 relative overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00b7c3] via-[#0078d4] to-[#005a9e]" />

            <div className="flex items-center gap-2 border-b border-slate-100 pb-3 pt-1">
              <ShieldCheck className="w-4 h-4 text-[#0078d4] stroke-[2.5]" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-sans">
                Privacy & Trust
              </h4>
            </div>
            
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 group/item">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#eef7ff] to-[#e0f1fe] text-[#0078d4] border border-[#b8ddf8] group-hover/item:bg-[#0078d4] group-hover/item:text-white transition-all duration-200 mt-0.5 shrink-0 shadow-2xs">
                  <EyeOff className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 group-hover/item:text-[#0078d4] transition-colors">No vehicle tracking</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-normal">
                    We do not track your physical vehicle, require OBD connections, or log active location telemetry.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group/item">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#eef7ff] to-[#e0f1fe] text-[#0078d4] border border-[#b8ddf8] group-hover/item:bg-[#0078d4] group-hover/item:text-white transition-all duration-200 mt-0.5 shrink-0 shadow-2xs">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 group-hover/item:text-[#0078d4] transition-colors">No insurance sharing</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-normal">
                    We do not share your results or driver awareness profile with insurance companies.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group/item">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#eef7ff] to-[#e0f1fe] text-[#0078d4] border border-[#b8ddf8] group-hover/item:bg-[#0078d4] group-hover/item:text-white transition-all duration-200 mt-0.5 shrink-0 shadow-2xs">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 group-hover/item:text-[#0078d4] transition-colors">No hardware required</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-normal">
                    This simulation runs entirely in your web browser and does not require vehicle hardware links.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group/item">
                <div className="p-1.5 rounded-lg bg-gradient-to-br from-[#eef7ff] to-[#e0f1fe] text-[#0078d4] border border-[#b8ddf8] group-hover/item:bg-[#0078d4] group-hover/item:text-white transition-all duration-200 mt-0.5 shrink-0 shadow-2xs">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900 group-hover/item:text-[#0078d4] transition-colors">Simulation-only research</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-normal">
                    This simulation is used to validate Canadian driver awareness and interest in privacy-first safety software.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Footer Navigation (span 3) */}
          <div className="md:col-span-3 bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-sky-200/80 shadow-[0_8px_25px_rgba(0,120,212,0.08)] hover:shadow-[0_12px_32px_rgba(0,120,212,0.14)] hover:border-[#0078d4]/40 transition-all duration-300 space-y-4 flex flex-col justify-between relative overflow-hidden">
            {/* Top Accent Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5c2d91] via-[#0078d4] to-[#00b7c3]" />

            <div className="space-y-3 pt-1">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-sans">
                  Astrateq Gadgets Resources
                </h4>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => onOpenTab('about')} 
                  className="text-left font-semibold text-xs text-slate-700 hover:text-[#0078d4] cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50/50 border border-transparent hover:border-sky-200/80 flex items-center justify-between group"
                  id="footer_nav_about"
                >
                  <span>About Astrateq Gadgets</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0078d4] transition-all group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => onOpenTab('howItWorks')} 
                  className="text-left font-semibold text-xs text-slate-700 hover:text-[#0078d4] cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50/50 border border-transparent hover:border-sky-200/80 flex items-center justify-between group"
                  id="footer_nav_how"
                >
                  <span>How It Works</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0078d4] transition-all group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => onOpenTab('privacy')} 
                  className="text-left font-semibold text-xs text-slate-700 hover:text-[#0078d4] cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50/50 border border-transparent hover:border-sky-200/80 flex items-center justify-between group"
                  id="footer_nav_privacy"
                >
                  <span>Privacy Approach</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0078d4] transition-all group-hover:translate-x-1" />
                </button>
                <button 
                  onClick={() => onOpenTab('faq')} 
                  className="text-left font-semibold text-xs text-slate-700 hover:text-[#0078d4] cursor-pointer transition-all px-3 py-2.5 rounded-xl hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50/50 border border-transparent hover:border-sky-200/80 flex items-center justify-between group"
                  id="footer_nav_faq"
                >
                  <span>Pre-Launch FAQ</span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0078d4] transition-all group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-gradient-to-r from-emerald-500/10 via-emerald-500/15 to-teal-500/10 border border-emerald-500/30 shadow-2xs w-full justify-center" id="active_pilot_status_pill">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                </span>
                <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase font-mono">
                  Active Pilot Phase
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Comprehensive Legal & Compliance Section - High UI/UX Visual Organization */}
        <div className="bg-white/95 backdrop-blur-md p-6 sm:p-7 rounded-2xl border border-sky-200/90 shadow-[0_8px_25px_rgba(0,120,212,0.08)] hover:shadow-[0_12px_32px_rgba(0,120,212,0.14)] transition-all duration-300 space-y-5 relative overflow-hidden">
          {/* Top Multi-Tone Accent Bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0078d4] via-[#00b7c3] to-[#5c2d91]" />

          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4 pt-1">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-gradient-to-br from-[#0078d4] to-[#005a9e] text-white shadow-xs">
                <Scale className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-sans">
                  Legal & Regulatory Compliance
                </h4>
                <p className="text-[11px] text-slate-500 font-normal">
                  Canadian privacy laws & digital compliance policies
                </p>
              </div>
            </div>
            <span className="text-[11px] text-[#005a9e] bg-[#eef7ff] border border-[#b8ddf8] px-3 py-1 rounded-lg font-mono font-bold tracking-wide w-fit shadow-2xs">
              PIPEDA · AODA · WCAG 2.1 AA · DMCA · Ontario Laws
            </span>
          </div>

          {/* Structured UX Policy Tile Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            
            <button
              onClick={() => onOpenLegal('privacy')}
              className="p-3 rounded-xl bg-slate-50/80 hover:bg-[#0078d4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0078d4] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_privacy"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white text-[#0078d4] group-hover:bg-white/20 group-hover:text-white transition-colors shadow-2xs shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Privacy Policy (PIPEDA)</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
            </button>

            <button
              onClick={() => onOpenLegal('terms')}
              className="p-3 rounded-xl bg-slate-50/80 hover:bg-[#0078d4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0078d4] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_terms"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white text-slate-600 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-2xs shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Terms & Conditions</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
            </button>

            <button
              onClick={() => onOpenLegal('cookies')}
              className="p-3 rounded-xl bg-slate-50/80 hover:bg-[#0078d4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0078d4] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_cookies"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white text-amber-600 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-2xs shrink-0">
                  <Cookie className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Cookie Policy</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
            </button>

            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="p-3 rounded-xl bg-slate-50/80 hover:bg-[#0078d4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0078d4] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_disclaimer"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white text-amber-600 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-2xs shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Disclaimer</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
            </button>

            <button
              onClick={() => onOpenLegal('accessibility')}
              className="p-3 rounded-xl bg-slate-50/80 hover:bg-[#0078d4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0078d4] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_accessibility"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white text-emerald-600 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-2xs shrink-0">
                  <Accessibility className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Accessibility (AODA)</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
            </button>

            <button
              onClick={() => onOpenLegal('dmca')}
              className="p-3 rounded-xl bg-slate-50/80 hover:bg-[#0078d4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0078d4] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer"
              id="legal_nav_dmca"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white text-slate-600 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-2xs shrink-0">
                  <Copyright className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">DMCA & IP</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
            </button>

            <button
              onClick={() => onOpenLegal('research_ethics')}
              className="p-3 rounded-xl bg-slate-50/80 hover:bg-[#0078d4] text-slate-800 hover:text-white border border-slate-200/90 hover:border-[#0078d4] shadow-2xs hover:shadow-md transition-all duration-200 flex items-center justify-between group cursor-pointer sm:col-span-2 lg:col-span-2"
              id="legal_nav_ethics"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-white text-teal-600 group-hover:bg-white/20 group-hover:text-white transition-colors shadow-2xs shrink-0">
                  <Scale className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-left">Research Ethics Framework</span>
              </div>
              <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 shrink-0" />
            </button>

          </div>
        </div>

        {/* Legal / Disclosure Copy */}
        <div className="pt-2 flex flex-col md:flex-row items-start justify-between gap-4 text-[11px] text-slate-500 leading-relaxed px-1">
          <div className="space-y-1">
            <p className="font-bold text-slate-900">
              © 2026 Astrateq Gadgets. Toronto, ON, Canada.
            </p>
            <p className="leading-relaxed text-slate-600 max-w-4xl font-medium">
              Astrateq Gadgets is an early-stage Canadian technology research initiative validating whether regional drivers see value in privacy-first driver awareness frameworks before investing in hardware development.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}




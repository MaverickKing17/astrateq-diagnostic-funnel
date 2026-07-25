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
    <footer className="bg-[#F3F8FF] text-slate-600 py-12 px-6 border-t border-[#DCEBFA] font-sans" id="app_footer">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Core Quick Trust Bar - high density, lightweight, visually polished */}
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 pb-6 border-b border-sky-100 text-xs font-mono font-bold text-slate-500">
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-sky-700 border border-sky-200/90 shadow-2xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 stroke-[2.5]" />
              <span>NO PAYMENT REQUIRED</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-cyan-700 border border-cyan-200/90 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-500 stroke-[2.5]" />
              <span>PRIVACY-FIRST INTEL</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-indigo-700 border border-indigo-200/90 shadow-2xs">
              <MapPin className="w-3.5 h-3.5 text-indigo-500 stroke-[2.5]" />
              <span>ONTARIO & GTA FOCUS</span>
            </span>
          </div>
        </div>

        {/* 3-Column Premium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          
          {/* Column 1: Brand Identity (span 5) */}
          <div className="md:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-slate-50 rounded-xl border border-slate-100 shadow-2xs">
                  <img 
                    src="https://i.ibb.co/rfHxnJNM/Astrateq.png" 
                    alt="Astrateq Gadgets Logo" 
                    className="h-8 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-sans font-black text-[#102A43] tracking-tight text-xl">
                  Astrateq Gadgets
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm font-extrabold text-[#102A43] leading-snug">
                  Privacy-first driver awareness intelligence for Canadian roads.
                </p>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">
                  Helping Ontario and Canadian drivers understand fatigue risk exposure, attentional patterns, and privacy-first driver safety intelligence before future product decisions.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-sky-900 font-bold bg-sky-50/90 border border-sky-200/90 py-2 px-3.5 rounded-xl w-fit shadow-2xs">
              <MapPin className="w-4 h-4 text-sky-500 shrink-0 animate-bounce" style={{ animationDuration: '3s' }} />
              <span>Built for roads in Ontario & Canada</span>
            </div>
          </div>

          {/* Column 2: Privacy & Trust (span 4) */}
          <div className="md:col-span-4 bg-white p-6 sm:p-7 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <ShieldCheck className="w-4 h-4 text-sky-600 stroke-[2.5]" />
              <h4 className="text-xs font-mono uppercase tracking-widest text-[#102A43] font-black">
                Privacy & Trust
              </h4>
            </div>
            
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-colors mt-0.5 shrink-0 shadow-2xs">
                  <EyeOff className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#102A43] group-hover:text-sky-600 transition-colors">No vehicle tracking</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-medium">
                    We do not track your physical vehicle, require OBD connections, or log active location telemetry.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-colors mt-0.5 shrink-0 shadow-2xs">
                  <Lock className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#102A43] group-hover:text-sky-600 transition-colors">No insurance sharing</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-medium">
                    We do not share your results or driver awareness profile with insurance companies.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-colors mt-0.5 shrink-0 shadow-2xs">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#102A43] group-hover:text-sky-600 transition-colors">No hardware required</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-medium">
                    This simulation runs entirely in your web browser and does not require vehicle hardware links.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-3 group">
                <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-colors mt-0.5 shrink-0 shadow-2xs">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#102A43] group-hover:text-sky-600 transition-colors">Simulation-only research</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal font-medium">
                    This simulation is used to validate Canadian driver awareness and interest in privacy-first safety software.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Footer Navigation (span 3) */}
          <div className="md:col-span-3 bg-white p-6 sm:p-7 rounded-2xl border border-sky-100 shadow-xs hover:shadow-md transition-all space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="border-b border-slate-100 pb-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#102A43] font-black">
                  Astrateq Gadgets Resources
                </h4>
              </div>
              
              <div className="flex flex-col gap-1.5">
                <button 
                  onClick={() => onOpenTab('about')} 
                  className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 cursor-pointer transition-all p-2 rounded-xl hover:bg-sky-50/80 border border-transparent hover:border-sky-100 flex items-center justify-between group"
                  id="footer_nav_about"
                >
                  <span>About Astrateq Gadgets</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button 
                  onClick={() => onOpenTab('howItWorks')} 
                  className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 cursor-pointer transition-all p-2 rounded-xl hover:bg-sky-50/80 border border-transparent hover:border-sky-100 flex items-center justify-between group"
                  id="footer_nav_how"
                >
                  <span>How It Works</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button 
                  onClick={() => onOpenTab('privacy')} 
                  className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 cursor-pointer transition-all p-2 rounded-xl hover:bg-sky-50/80 border border-transparent hover:border-sky-100 flex items-center justify-between group"
                  id="footer_nav_privacy"
                >
                  <span>Privacy Approach</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-transform group-hover:translate-x-0.5" />
                </button>
                <button 
                  onClick={() => onOpenTab('faq')} 
                  className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 cursor-pointer transition-all p-2 rounded-xl hover:bg-sky-50/80 border border-transparent hover:border-sky-100 flex items-center justify-between group"
                  id="footer_nav_faq"
                >
                  <span>Pre-Launch FAQ</span>
                  <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-500 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500/15 to-teal-500/15 border border-emerald-500/30 shadow-2xs w-full justify-center" id="active_pilot_status_pill">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-black text-emerald-800 font-mono tracking-wider uppercase">
                  Active Pilot Phase
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Comprehensive Legal & Compliance Links Bar */}
        <div className="bg-gradient-to-br from-white via-slate-50/90 to-sky-50/50 p-6 sm:p-7 rounded-2xl border border-sky-200/90 shadow-sm hover:shadow-md transition-all space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-100 pb-3.5">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-sky-500 text-white shadow-xs">
                <Scale className="w-4 h-4" />
              </div>
              <span className="text-xs font-mono font-black text-[#102A43] uppercase tracking-wider">
                Legal & Regulatory Policies
              </span>
            </div>
            <span className="text-xs text-sky-950 bg-sky-100/90 border border-sky-200 px-3 py-1 rounded-full font-mono font-extrabold w-fit">
              PIPEDA · AODA · WCAG 2.1 AA · DMCA · Ontario Laws
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 text-xs font-bold text-slate-700 pt-1">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-500 hover:text-white border border-slate-200 hover:border-sky-400 text-slate-800 font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
              id="legal_nav_privacy"
            >
              <ShieldCheck className="w-4 h-4 text-sky-500 group-hover:text-white transition-colors" />
              <span>Privacy Policy (PIPEDA)</span>
            </button>

            <button
              onClick={() => onOpenLegal('terms')}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-500 hover:text-white border border-slate-200 hover:border-sky-400 text-slate-800 font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
              id="legal_nav_terms"
            >
              <FileText className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              <span>Terms & Conditions</span>
            </button>

            <button
              onClick={() => onOpenLegal('cookies')}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-500 hover:text-white border border-slate-200 hover:border-sky-400 text-slate-800 font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
              id="legal_nav_cookies"
            >
              <Cookie className="w-4 h-4 text-amber-500 group-hover:text-white transition-colors" />
              <span>Cookie Policy</span>
            </button>

            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-500 hover:text-white border border-slate-200 hover:border-sky-400 text-slate-800 font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
              id="legal_nav_disclaimer"
            >
              <AlertTriangle className="w-4 h-4 text-amber-500 group-hover:text-white transition-colors" />
              <span>Disclaimer</span>
            </button>

            <button
              onClick={() => onOpenLegal('accessibility')}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-500 hover:text-white border border-slate-200 hover:border-sky-400 text-slate-800 font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
              id="legal_nav_accessibility"
            >
              <Accessibility className="w-4 h-4 text-emerald-500 group-hover:text-white transition-colors" />
              <span>Accessibility Policy (AODA)</span>
            </button>

            <button
              onClick={() => onOpenLegal('dmca')}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-500 hover:text-white border border-slate-200 hover:border-sky-400 text-slate-800 font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
              id="legal_nav_dmca"
            >
              <Copyright className="w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
              <span>DMCA & IP</span>
            </button>

            <button
              onClick={() => onOpenLegal('research_ethics')}
              className="px-3.5 py-2.5 rounded-xl bg-white hover:bg-sky-500 hover:text-white border border-slate-200 hover:border-sky-400 text-slate-800 font-extrabold text-xs shadow-2xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer group"
              id="legal_nav_ethics"
            >
              <Scale className="w-4 h-4 text-teal-500 group-hover:text-white transition-colors" />
              <span>Research Ethics</span>
            </button>
          </div>
        </div>

        {/* Legal / Disclosure Copy */}
        <div className="pt-2 flex flex-col md:flex-row items-start justify-between gap-6 text-[11px] text-slate-500 leading-relaxed px-1">
          <div className="space-y-1.5">
            <p className="font-extrabold text-[#102A43]">
              © 2026 Astrateq Gadgets. Toronto, ON, Canada.
            </p>
            <p className="leading-relaxed text-slate-500 max-w-4xl font-medium">
              Astrateq Gadgets is an early-stage Canadian technology research initiative validating whether regional drivers see value in privacy-first driver awareness frameworks before investing in hardware development.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}



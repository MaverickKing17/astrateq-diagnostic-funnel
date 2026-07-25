import React from 'react';
import { ShieldCheck, EyeOff, Lock, Cpu, CheckCircle2, MapPin, Award, Scale, Accessibility, FileText, Cookie, AlertTriangle, Copyright } from 'lucide-react';
import { InfoTabType } from './InfoModal';
import { LegalTabType } from './LegalModal';

interface FooterProps {
  onOpenTab: (tab: InfoTabType) => void;
  onOpenLegal: (tab: LegalTabType) => void;
}

export default function Footer({ onOpenTab, onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-[#F8FBFF] text-slate-600 py-12 px-6 border-t border-[#DCEBFA] font-sans" id="app_footer">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Core Quick Trust Bar - high density, lightweight, visually polished */}
        <div className="flex flex-col md:flex-row items-center justify-between pb-8 border-b border-[#DCEBFA] text-xs font-bold text-slate-400 tracking-wider">
          <div className="flex flex-wrap gap-4 justify-center md:justify-start items-center">
            <span className="text-sky-600 font-bold">NO PAYMENT REQUIRED</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-600 font-bold">PRIVACY-FIRST INTEL</span>
            <span className="text-slate-300">•</span>
            <span className="text-sky-600 font-bold">ONTARIO & GTA FOCUS</span>
          </div>
        </div>

        {/* 3-Column Premium Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          
          {/* Column 1: Brand Identity (span 5) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="h-9 w-auto flex items-center justify-start overflow-hidden">
                <img 
                  src="https://i.ibb.co/rfHxnJNM/Astrateq.png" 
                  alt="Astrateq Gadgets Logo" 
                  className="h-9 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-sans font-extrabold text-[#102A43] tracking-tight text-lg">
                Astrateq Gadgets
              </span>
            </div>
            
            <div className="space-y-3">
              <p className="text-sm font-bold text-[#102A43] leading-snug">
                Privacy-first driver awareness intelligence for Canadian roads.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Helping Ontario and Canadian drivers understand fatigue risk exposure, attentional patterns, and privacy-first driver safety intelligence before future product decisions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-500 font-semibold bg-white border border-[#DCEBFA] py-1.5 px-3 rounded-full w-fit shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-sky-500 shrink-0 animate-bounce" style={{ animationDuration: '3s' }} />
              <span>Built for roads in Ontario & Canada</span>
            </div>
          </div>

          {/* Column 2: Privacy & Trust (span 4) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#102A43] font-black border-b border-[#DCEBFA] pb-2">
              Privacy & Trust
            </h4>
            
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#EBF4FF] text-sky-600 mt-0.5 shrink-0">
                  <EyeOff className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102A43]">No vehicle tracking</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    We do not track your physical vehicle, require OBD connections, or log active location telemetry.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#EBF4FF] text-sky-600 mt-0.5 shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102A43]">No insurance sharing</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    We do not share your results or driver awareness profile with insurance companies.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#EBF4FF] text-sky-600 mt-0.5 shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102A43]">No hardware required</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    This simulation runs entirely in your web browser and does not require vehicle hardware links.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#EBF4FF] text-sky-600 mt-0.5 shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102A43]">Simulation-only research</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    This simulation is used to validate Canadian driver awareness and interest in privacy-first safety software.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Footer Navigation (span 3) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#102A43] font-black border-b border-[#DCEBFA] pb-2">
              Astrateq Gadgets Resources
            </h4>
            
            <div className="flex flex-col gap-1.5">
              <button 
                onClick={() => onOpenTab('about')} 
                className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 hover:underline cursor-pointer transition-all py-1.5 px-2.5 rounded-lg hover:bg-sky-50/50 -ml-2.5 w-fit"
                id="footer_nav_about"
              >
                About Astrateq Gadgets
              </button>
              <button 
                onClick={() => onOpenTab('howItWorks')} 
                className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 hover:underline cursor-pointer transition-all py-1.5 px-2.5 rounded-lg hover:bg-sky-50/50 -ml-2.5 w-fit"
                id="footer_nav_how"
              >
                How It Works
              </button>
              <button 
                onClick={() => onOpenTab('privacy')} 
                className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 hover:underline cursor-pointer transition-all py-1.5 px-2.5 rounded-lg hover:bg-sky-50/50 -ml-2.5 w-fit"
                id="footer_nav_privacy"
              >
                Privacy Approach
              </button>
              <button 
                onClick={() => onOpenTab('faq')} 
                className="text-left font-bold text-xs sm:text-sm text-slate-700 hover:text-sky-600 hover:underline cursor-pointer transition-all py-1.5 px-2.5 rounded-lg hover:bg-sky-50/50 -ml-2.5 w-fit"
                id="footer_nav_faq"
              >
                Pre-Launch FAQ
              </button>
            </div>

            <div className="pt-4 border-t border-[#DCEBFA] mt-4 flex items-center">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 shadow-xs" id="active_pilot_status_pill">
                <span className="relative flex h-2.5 w-2.5 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-[11px] font-extrabold text-emerald-700 font-mono tracking-wider uppercase">
                  Active Pilot Phase
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Dedicated Comprehensive Legal & Compliance Links Bar */}
        <div className="pt-6 border-t border-[#DCEBFA] bg-white/60 p-4 sm:p-5 rounded-2xl border space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <span className="text-xs font-mono font-bold text-[#102A43] uppercase tracking-wider flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-sky-600" />
              Legal & Regulatory Policies
            </span>
            <span className="text-[11px] text-slate-500 font-medium">
              PIPEDA · AODA · WCAG 2.1 AA · DMCA · Ontario Laws
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-4 text-xs font-medium text-slate-600">
            <button
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-sky-600 hover:underline transition-colors flex items-center gap-1 cursor-pointer font-bold text-slate-700"
              id="legal_nav_privacy"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
              <span>Privacy Policy (PIPEDA)</span>
            </button>
            <span className="text-slate-300">•</span>
            
            <button
              onClick={() => onOpenLegal('terms')}
              className="hover:text-sky-600 hover:underline transition-colors flex items-center gap-1 cursor-pointer"
              id="legal_nav_terms"
            >
              <FileText className="w-3.5 h-3.5 text-slate-400" />
              <span>Terms & Conditions</span>
            </button>
            <span className="text-slate-300">•</span>

            <button
              onClick={() => onOpenLegal('cookies')}
              className="hover:text-sky-600 hover:underline transition-colors flex items-center gap-1 cursor-pointer"
              id="legal_nav_cookies"
            >
              <Cookie className="w-3.5 h-3.5 text-slate-400" />
              <span>Cookie Policy</span>
            </button>
            <span className="text-slate-300">•</span>

            <button
              onClick={() => onOpenLegal('disclaimer')}
              className="hover:text-sky-600 hover:underline transition-colors flex items-center gap-1 cursor-pointer"
              id="legal_nav_disclaimer"
            >
              <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
              <span>Disclaimer</span>
            </button>
            <span className="text-slate-300">•</span>

            <button
              onClick={() => onOpenLegal('accessibility')}
              className="hover:text-sky-600 hover:underline transition-colors flex items-center gap-1 cursor-pointer"
              id="legal_nav_accessibility"
            >
              <Accessibility className="w-3.5 h-3.5 text-emerald-500" />
              <span>Accessibility Policy (AODA)</span>
            </button>
            <span className="text-slate-300">•</span>

            <button
              onClick={() => onOpenLegal('dmca')}
              className="hover:text-sky-600 hover:underline transition-colors flex items-center gap-1 cursor-pointer"
              id="legal_nav_dmca"
            >
              <Copyright className="w-3.5 h-3.5 text-slate-400" />
              <span>DMCA & IP</span>
            </button>
            <span className="text-slate-300">•</span>

            <button
              onClick={() => onOpenLegal('research_ethics')}
              className="hover:text-sky-600 hover:underline transition-colors flex items-center gap-1 cursor-pointer"
              id="legal_nav_ethics"
            >
              <Scale className="w-3.5 h-3.5 text-teal-500" />
              <span>Research Ethics</span>
            </button>
          </div>
        </div>

        {/* Legal / Disclosure Copy */}
        <div className="pt-4 flex flex-col md:flex-row items-start justify-between gap-6 text-[11px] text-slate-500 leading-relaxed">
          <div className="space-y-2">
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


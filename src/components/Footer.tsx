import React from 'react';
import { ShieldCheck, EyeOff, Lock, Cpu, CheckCircle2, MapPin, Award } from 'lucide-react';
import { InfoTabType } from './InfoModal';

interface FooterProps {
  onOpenTab: (tab: InfoTabType) => void;
}

export default function Footer({ onOpenTab }: FooterProps) {
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
                Privacy-first driver readiness intelligence for Canadian roads.
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Helping Ontario and Canadian drivers understand vehicle readiness, driving context, and privacy-first automotive intelligence before full product rollout.
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
                  <p className="text-xs font-bold text-[#102A43]">No insurance tracking</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    Astrateq Gadgets is not being designed as an insurer-style tracking or driver surveillance product.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#EBF4FF] text-sky-600 mt-0.5 shrink-0">
                  <Lock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102A43]">No data resale model</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    Your driving profile is not being built for advertising resale.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#EBF4FF] text-sky-600 mt-0.5 shrink-0">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102A43]">Local-first direction</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    The system is being designed to reduce unnecessary cloud dependency.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-2.5">
                <div className="p-1 rounded bg-[#EBF4FF] text-sky-600 mt-0.5 shrink-0">
                  <Award className="w-3.5 h-3.5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#102A43]">Pre-launch validation</p>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                    This diagnostic is used to validate interest, compatibility demand, and readiness use cases.
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

            <div className="pt-3 border-t border-slate-200 mt-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping shrink-0" />
              <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">Active Pilot Phase</span>
            </div>
          </div>

        </div>

        {/* Legal / Disclosure Copy */}
        <div className="pt-8 border-t border-[#DCEBFA] flex flex-col md:flex-row items-start justify-between gap-6 text-[11px] text-slate-500 leading-relaxed">
          <div className="space-y-2">
            <p className="font-extrabold text-[#102A43]">
              © 2026 Astrateq Gadgets. Toronto, ON, Canada.
            </p>
            <p className="leading-relaxed text-slate-500 max-w-4xl font-medium">
              Astrateq Gadgets is currently in pre-launch market validation. This diagnostic is informational and does not replace official mechanical inspections, certified safety assessments, or manufacturer diagnostics. Hardware availability, compatibility, pricing, and rollout timing are subject to validation results and future manufacturing decisions.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

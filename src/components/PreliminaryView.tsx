import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';
import { DiagnosticResult } from '../types';
import Gauge from './Gauge';

interface PreliminaryViewProps {
  result: DiagnosticResult;
  onSubmitEmail: (email: string, firstName: string) => void;
  onTrackEvent: (name: string, data?: Record<string, any>) => void;
}

export default function PreliminaryView({ result, onSubmitEmail, onTrackEvent }: PreliminaryViewProps) {
  const embedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!embedRef.current) return;

    // Clear previous contents on mount
    embedRef.current.innerHTML = '';

    // Create Beehiiv form loader script:
    // <script async src="https://subscribe-forms.beehiiv.com/v3/loader.js" data-beehiiv-form="1267b916-4350-4c84-aad0-50bba04fa6ac"></script>
    const loaderScript = document.createElement('script');
    loaderScript.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js';
    loaderScript.async = true;
    loaderScript.setAttribute('data-beehiiv-form', '1267b916-4350-4c84-aad0-50bba04fa6ac');

    // Create Attribution tracking script:
    // <script type="text/javascript" async src="https://subscribe-forms.beehiiv.com/attribution.js"></script>
    const attrScript = document.createElement('script');
    attrScript.type = 'text/javascript';
    attrScript.async = true;
    attrScript.src = 'https://subscribe-forms.beehiiv.com/attribution.js';

    embedRef.current.appendChild(loaderScript);
    document.body.appendChild(attrScript);

    // Dynamic style & iframe scrollbar remover observer
    const applyCleanStylesToIframe = () => {
      if (!embedRef.current) return;
      const iframes = embedRef.current.querySelectorAll('iframe');
      iframes.forEach((iframe) => {
        iframe.style.width = '100%';
        iframe.style.border = 'none';
        iframe.style.overflow = 'hidden';
        iframe.style.display = 'block';
        iframe.setAttribute('scrolling', 'no');

        try {
          const doc = iframe.contentDocument || iframe.contentWindow?.document;
          if (doc && doc.head) {
            let style = doc.getElementById('beehiiv-custom-overrides');
            if (!style) {
              style = doc.createElement('style');
              style.id = 'beehiiv-custom-overrides';
              doc.head.appendChild(style);
            }
            style.textContent = `
              html, body {
                overflow: hidden !important;
                background: transparent !important;
                margin: 0 !important;
                padding: 0 !important;
              }
              * {
                font-family: 'Segoe UI', 'Segoe UI Variable Text', -apple-system, BlinkMacSystemFont, Tahoma, Arial, sans-serif !important;
                box-sizing: border-box !important;
              }
              form, .subscribe-form, [class*="form"] {
                display: flex !important;
                flex-direction: row !important;
                gap: 10px !important;
                align-items: center !important;
                width: 100% !important;
              }
              input[type="email"], input[type="text"], input {
                font-family: 'Segoe UI', 'Segoe UI Variable Text', -apple-system, BlinkMacSystemFont, Tahoma, Arial, sans-serif !important;
                padding: 12px 16px !important;
                font-size: 14px !important;
                line-height: 1.5 !important;
                height: 48px !important;
                border-radius: 12px !important;
                border: 1px solid #cbd5e1 !important;
                background-color: #ffffff !important;
                color: #0f172a !important;
                flex: 1 1 auto !important;
                min-width: 0 !important;
                box-sizing: border-box !important;
              }
              input::placeholder {
                color: #64748b !important;
                opacity: 1 !important;
              }
              button, input[type="submit"], [type="button"], .subscribe-button, [class*="btn"], [class*="button"], [class*="submit"] {
                font-family: 'Segoe UI', 'Segoe UI Variable Display', 'Segoe UI', Tahoma, Arial, sans-serif !important;
                font-weight: 900 !important;
                color: #020617 !important;
                letter-spacing: 0.02em !important;
                -webkit-font-smoothing: antialiased !important;
                padding: 12px 20px !important;
                font-size: 13px !important;
                height: 48px !important;
                border-radius: 12px !important;
                white-space: nowrap !important;
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                flex-shrink: 0 !important;
              }
            `;
          }
        } catch {
          // Cross-origin iframe fallback handled by outer CSS container
        }
      });
    };

    const intervalId = setInterval(applyCleanStylesToIframe, 250);
    const observer = new MutationObserver(applyCleanStylesToIframe);
    if (embedRef.current) {
      observer.observe(embedRef.current, { childList: true, subtree: true });
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.data && typeof event.data === 'string' && (event.data.includes('beehiiv') || event.data.includes('subscribe'))) {
        onTrackEvent('beehiiv_subscribed', { data: event.data });
        onSubmitEmail('subscriber@beehiiv.com', 'Subscriber');
      } else if (event.data && typeof event.data === 'object' && (event.data.type === 'beehiiv_submit' || event.data.beehiiv || event.data.formId)) {
        onTrackEvent('beehiiv_subscribed', { data: event.data });
        onSubmitEmail('subscriber@beehiiv.com', 'Subscriber');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      clearInterval(intervalId);
      observer.disconnect();
      window.removeEventListener('message', handleMessage);
      if (attrScript && attrScript.parentNode) {
        attrScript.parentNode.removeChild(attrScript);
      }
    };
  }, [onSubmitEmail, onTrackEvent]);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-sans" id="preliminary_view_container">
      
      {/* 1. Header Confirmation */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-sky-950/80 text-cyan-300 rounded-full text-xs font-extrabold border border-cyan-400/30 shadow-xs">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>Simulation complete!</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Here's your preliminary result
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
          We have generated your simulated driver awareness score based on your behavioral inputs. Enter your email below to unlock the full report.
        </p>
      </div>

      {/* 2. Side-by-Side Flex Layout Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-10">
        
        {/* Left Column: The Diagnostic Card */}
        <section className="flex-1 lg:flex-[1.4] bg-white rounded-3xl shadow-xl border border-white/50 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 sm:p-8">
             <span className="px-3 py-1 bg-sky-50 text-sky-700 text-[10px] font-bold rounded-full uppercase tracking-widest border border-sky-100">Real-time Calculation</span>
          </div>

          <div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold leading-tight mb-2 text-brand-navy">
              Your Simulated Driver <br/><span className="text-brand-primary">Awareness Score</span>
            </h2>
            <p className="text-slate-500 text-sm max-w-md">
              Based on your commuting profile and attention habit inputs.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center sm:items-end gap-6">
              <div className="shrink-0">
                <Gauge score={result.score} size={200} />
              </div>
              <div className="pb-4 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 text-brand-primary mb-1">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                  <span className="font-bold uppercase text-[11px] tracking-wider">{result.tierName}</span>
                </div>
                <p className="text-lg font-semibold text-brand-navy">{result.riskProfile}</p>
                <p className="text-sm text-slate-500 max-w-xs mt-2 italic">
                  "{result.riskDesc}"
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8 border-t border-slate-100 pt-8">
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Profile Alignment</p>
              <p className="text-sm font-bold text-slate-900">Privacy First Preference</p>
              <div className="w-full h-1 bg-slate-200 mt-2 rounded-full overflow-hidden">
                <div className="h-full bg-brand-primary rounded-full" style={{ width: result.privacyAlignment === 'Excellent' ? '95%' : '80%' }}></div>
              </div>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl">
              <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">Risk Sensitivity</p>
              <p className="text-sm font-bold text-slate-900">Canadian Road Focus</p>
              <div className="w-full h-1 bg-slate-200 mt-2 rounded-full overflow-hidden">
                <div className="h-full bg-brand-primary rounded-full" style={{ width: result.score >= 86 ? '90%' : result.score >= 72 ? '70%' : '50%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Lead Capture & CTA */}
        <section className="flex-1 flex flex-col space-y-6">
          
          {/* Email Capture Card */}
          <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between border border-sky-900/60 relative overflow-hidden">
            <div>
              {/* Dynamic Priority Slot Allocation Badge */}
              <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl px-3.5 py-2 mb-5 text-[10px] font-mono tracking-wider font-bold text-[#38bdf8]" id="cohort_slot_banner">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>PRIORITY SLOT ALLOCATED</span>
                </div>
                <span>ONTARIO-GTA</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Send My Simulated Report</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                Unlock your full simulated driver awareness report, custom attention tips, and secure your <strong>Founding Cohort</strong> early-access slot.
              </p>
              
              {/* Official Beehiiv Embedded Form Container */}
              <div className="w-full my-2 overflow-hidden" id="beehiiv_form_wrapper">
                <div 
                  ref={embedRef} 
                  className="w-full min-h-[160px] bg-transparent overflow-hidden rounded-xl"
                  id="beehiiv_embed_container"
                />

                {/* Real-time Scarcity Indicator */}
                <p className="text-[11px] text-slate-300 text-center font-medium pt-2 leading-normal">
                  ⚠️ Pre-launch validation: <strong className="text-yellow-300 font-bold">87 priority slots</strong> left in your postal area.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-[10px] text-slate-400 p-1">
              <Lock className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
              <p>Privacy Promise: No vehicle connection. No insurance use. No hardware required. Your responses are secure and processed locally.</p>
            </div>
          </div>

          {/* Value Prop Cards (Mini) */}
          <div className="bg-white rounded-3xl shadow-xl border border-white/50 p-6 sm:p-8 flex flex-col justify-center space-y-4">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Why validation matters</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-sky-50 border border-sky-100 rounded-xl shadow-xs flex items-center justify-center text-brand-primary font-bold shrink-0">01</div>
                <p className="text-xs font-semibold text-slate-700">Prioritize Canadian rollout needs</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-sky-50 border border-sky-100 rounded-xl shadow-xs flex items-center justify-center text-brand-primary font-bold shrink-0">02</div>
                <p className="text-xs font-semibold text-slate-700">Understand Attention Readiness needs</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-sky-50 border border-sky-100 rounded-xl shadow-xs flex items-center justify-center text-brand-primary font-bold shrink-0">03</div>
                <p className="text-xs font-semibold text-slate-700">Validate privacy-first alternatives</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}


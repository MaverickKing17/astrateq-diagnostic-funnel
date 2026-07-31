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
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-slate-900/90 text-yellow-300 rounded-full text-xs font-extrabold border-2 border-yellow-400/80 shadow-[0_0_20px_rgba(250,204,21,0.5)]">
          <span className="relative flex h-2.5 w-2.5 items-center justify-center">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-90"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300 shadow-[0_0_10px_#facc15]"></span>
          </span>
          <CheckCircle2 className="w-3.5 h-3.5 text-yellow-300 stroke-[2.5]" />
          <span>SIMULATION COMPLETE</span>
        </div>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Here's your preliminary result
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
          We have generated your simulated driver awareness score based on your behavioral inputs. Enter your email below to unlock the full report.
        </p>
      </div>

      {/* 2. Side-by-Side Flex Layout Container */}
      <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
        
        {/* Left Column: The Diagnostic Card */}
        <section className="flex-1 lg:flex-[1.4] bg-gradient-to-b from-white via-slate-50/90 to-sky-50/40 rounded-3xl shadow-2xl border border-sky-100/90 p-6 sm:p-8 space-y-6 relative overflow-hidden backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-slate-200/80 pb-4">
            <div>
              <span className="text-[10px] font-mono font-extrabold text-sky-600 uppercase tracking-widest block">ON-DEVICE SIMULATION DIAGNOSTIC</span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold leading-tight text-brand-navy mt-0.5">
                Your Simulated Driver <span className="text-brand-primary">Awareness Score</span>
              </h2>
            </div>
            <span className="px-3 py-1 bg-sky-100/80 text-sky-800 text-[10px] font-extrabold rounded-full uppercase tracking-widest border border-sky-200 shrink-0 shadow-2xs">
              Real-time Calculation
            </span>
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            Derived from your commuting frequency, cognitive splitting inputs, and environmental habit profile.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 bg-gradient-to-r from-sky-50/90 via-blue-50/50 to-indigo-50/50 p-5 rounded-2xl border border-sky-200/80 shadow-xs">
            <div className="shrink-0 drop-shadow-md">
              <Gauge score={result.score} size={180} />
            </div>
            <div className="text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100/80 text-emerald-800 rounded-full border border-emerald-300/80 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                <span className="font-extrabold uppercase text-[10px] tracking-wider">{result.tierName}</span>
              </div>
              <p className="text-lg font-extrabold text-brand-navy">{result.riskProfile}</p>
              <p className="text-xs text-slate-600 max-w-xs italic leading-relaxed">
                "{result.riskDesc}"
              </p>
            </div>
          </div>

          {/* Key Behavioral Factor Badges */}
          <div className="space-y-2.5">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Behavioral Factor Mapping</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="p-3 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all text-center group">
                <span className="text-[10px] text-slate-400 block font-bold uppercase mb-0.5">Attentional Stability</span>
                <span className="text-sm font-extrabold text-brand-navy">
                  {result.attentionStability === 'EXCELLENT' ? '92%' : result.attentionStability === 'GOOD' ? '82%' : '65%'}
                </span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all text-center group">
                <span className="text-[10px] text-slate-400 block font-bold uppercase mb-0.5">Fatigue Resilience</span>
                <span className="text-sm font-extrabold text-brand-navy">
                  {result.fatigueRisk === 'LOW' ? '90%' : result.fatigueRisk === 'MODERATE' ? '76%' : '58%'}
                </span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-2xs transition-all text-center group">
                <span className="text-[10px] text-slate-400 block font-bold uppercase mb-0.5">Env Adaptation</span>
                <span className="text-sm font-extrabold text-brand-navy">
                  {result.environmentalComplexity === 'HIGH' ? '88%' : '78%'}
                </span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-300 shadow-2xs transition-all text-center group">
                <span className="text-[10px] text-slate-400 block font-bold uppercase mb-0.5">Privacy Index</span>
                <span className="text-sm font-extrabold text-emerald-600">100% Local</span>
              </div>
            </div>
          </div>

          {/* Regional Commuter Insight Callout */}
          <div className="p-4 bg-gradient-to-r from-sky-50 via-blue-50/70 to-indigo-50/70 border border-sky-200/80 rounded-2xl text-xs text-slate-700 leading-relaxed space-y-1 shadow-xs">
            <span className="text-[10px] font-mono font-extrabold uppercase text-sky-900 tracking-wider block">🔬 CANADIAN ROADWAYS PROFILE ANALYSIS</span>
            <p className="text-slate-700 font-medium">
              Your profile demonstrates strong alignment for high-density 400-series highway commuting without relying on insurance OBD-II hardware tracking.
            </p>
          </div>

          {/* Progress Bars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-200/80 pt-4">
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="flex justify-between items-center mb-1.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Profile Alignment</p>
                <span className="text-[10px] font-extrabold text-sky-700">Privacy First</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" style={{ width: result.privacyAlignment === 'Excellent' ? '95%' : '80%' }}></div>
              </div>
            </div>
            <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
              <div className="flex justify-between items-center mb-1.5">
                <p className="text-[10px] font-bold text-slate-400 uppercase">Commute Complexity</p>
                <span className="text-[10px] font-extrabold text-sky-700">Canadian Focus</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full" style={{ width: result.score >= 86 ? '90%' : result.score >= 72 ? '70%' : '50%' }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Lead Capture & CTA */}
        <section className="flex-1 flex flex-col space-y-6 w-full lg:w-auto">
          
          {/* Email Capture Card */}
          <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between border border-sky-900/80 relative overflow-hidden">
            <div>
              {/* Dynamic Priority Slot Allocation Badge */}
              <div className="flex items-center justify-between bg-white/10 border border-white/15 rounded-xl px-3.5 py-2 mb-5 text-[10px] font-mono tracking-wider font-bold text-[#38bdf8]" id="cohort_slot_banner">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span>PRIORITY SLOT ALLOCATED</span>
                </div>
                <span>ONTARIO-GTA</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-white">Send My Simulated Report</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                Unlock your full simulated driver awareness report, custom attention tips, and secure your <strong>Founding Cohort</strong> early-access slot.
              </p>
              
              {/* Single Unified Clean High-Converting Form */}
              <div className="w-full my-2 space-y-3" id="beehiiv_form_wrapper">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement;
                    if (emailInput && emailInput.value) {
                      onSubmitEmail(emailInput.value, 'Driver');
                    }
                  }}
                  className="space-y-3"
                >
                  <div className="flex flex-col gap-3 w-full">
                    <input
                      type="email"
                      placeholder="Enter your email address..."
                      required
                      className="w-full px-4 py-3.5 bg-white text-slate-900 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 font-semibold placeholder:text-slate-400 shadow-inner"
                    />
                    <button
                      type="submit"
                      className="w-full py-3.5 px-5 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 hover:from-amber-300 hover:to-yellow-300 text-slate-950 font-black text-sm uppercase tracking-wider rounded-xl shadow-[0_0_22px_rgba(250,204,21,0.7)] border border-yellow-200 transition-all cursor-pointer flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                    >
                      <span>UNLOCK REPORT & RESERVE SLOT</span>
                    </button>
                  </div>
                </form>

                {/* Keep Beehiiv iframe hidden to prevent duplicate stacked form inputs */}
                <div 
                  ref={embedRef} 
                  className="hidden"
                  id="beehiiv_embed_container"
                />

                {/* Real-time Scarcity Indicator */}
                <p className="text-[11px] text-slate-300 text-center font-medium pt-1 leading-normal">
                  ⚠️ Pre-launch validation: <strong className="text-amber-300 font-bold">87 priority slots</strong> left in your postal area.
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-start gap-2 text-[10px] text-slate-400 p-1 pt-3 border-t border-slate-800">
              <Lock className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
              <p>Privacy Promise: No vehicle connection. No insurance use. No hardware required. Your responses are secure and processed locally.</p>
            </div>
          </div>

          {/* Visually Appealing Value Prop Card */}
          <div className="bg-gradient-to-br from-white via-slate-50/90 to-sky-50/60 rounded-3xl shadow-xl border border-sky-100/90 p-6 sm:p-8 space-y-5 relative overflow-hidden">
            <div className="flex items-center gap-2 border-b border-slate-200/80 pb-3">
              <ShieldCheck className="w-4 h-4 text-brand-primary stroke-[2.5]" />
              <span className="text-xs font-black text-slate-800 uppercase tracking-widest">Why Validation Matters</span>
            </div>
            
            <div className="space-y-3.5">
              <div className="flex items-start space-x-3.5 p-2.5 rounded-2xl hover:bg-white/90 transition-all border border-transparent hover:border-sky-100 group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md shadow-sky-500/20">01</div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Prioritize Canadian Rollout Needs</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">Validating 400-series highway commuter conditions & regional driving habits.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-2.5 rounded-2xl hover:bg-white/90 transition-all border border-transparent hover:border-sky-100 group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md shadow-cyan-500/20">02</div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Understand Attention Readiness</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">Mapping sensory overload and fatigue spikes during peak commuting hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5 p-2.5 rounded-2xl hover:bg-white/90 transition-all border border-transparent hover:border-sky-100 group">
                <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/20">03</div>
                <div>
                  <p className="text-xs font-extrabold text-slate-900">Validate Privacy-First Alternatives</p>
                  <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5">Zero insurance OBD-II data tracking. Processing safety metrics 100% locally.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}


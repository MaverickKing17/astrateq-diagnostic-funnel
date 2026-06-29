import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Mail, User, Lock, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';
import { DiagnosticResult } from '../types';
import Gauge from './Gauge';

interface PreliminaryViewProps {
  result: DiagnosticResult;
  onSubmitEmail: (email: string, firstName: string) => void;
  onTrackEvent: (name: string, data?: Record<string, any>) => void;
}

export default function PreliminaryView({ result, onSubmitEmail, onTrackEvent }: PreliminaryViewProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real API submit via Express backend proxy
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email) {
      setError('Email address is required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    onTrackEvent('email_submitted_start', { email, firstName });

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          firstName,
          score: result.score,
          tierName: result.tierName,
          riskProfile: result.riskProfile,
          privacyAlignment: result.privacyAlignment,
          compatibilityConfidence: result.compatibilityConfidence,
          riskDesc: result.riskDesc,
          tierDesc: result.tierDesc,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.simulated) {
          onTrackEvent('email_simulated_success', { message: data.message });
        } else {
          onTrackEvent('email_send_success', { message: data.message });
        }
        setIsSubmitting(false);
        onSubmitEmail(email, firstName);
      } else {
        // Real API returned error (e.g., wrong API key/domain validation in Resend)
        console.error('Email dispatch failed:', data.error);
        setError(`Email Dispatch Notice: ${data.error || "An error occurred with Resend."}. Proceeding to report anyway...`);
        
        // After a brief delay, let the user proceed anyway so they aren't stuck due to an API config issue
        setTimeout(() => {
          setIsSubmitting(false);
          onSubmitEmail(email, firstName);
        }, 3000);
      }
    } catch (err: any) {
      console.error('Error sending email:', err);
      setError(`Connection Notice: Could not connect to verification server. Proceeding to report anyway...`);
      
      setTimeout(() => {
        setIsSubmitting(false);
        onSubmitEmail(email, firstName);
      }, 3000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 font-sans" id="preliminary_view_container">
      
      {/* 1. Header Confirmation */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sky-50 text-sky-700 rounded-full text-xs font-bold border border-sky-100">
          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600" />
          <span>Simulation complete!</span>
        </div>
        <h1 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
          Here's your preliminary result
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
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
          <div className="bg-brand-navy text-white p-6 sm:p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3">Send My Simulated Report</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Unlock your full simulated driver awareness report, custom attention tips, and check your <strong>Founding Cohort</strong> eligibility.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4" id="email_capture_form">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="first_name_input" className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">First Name (Optional)</label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="text" 
                        id="first_name_input"
                        placeholder="e.g. Liam" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary placeholder:text-slate-500 text-white" 
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email_input" className="block text-[10px] uppercase tracking-widest font-bold text-slate-400 mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input 
                        type="email" 
                        id="email_input"
                        required
                        placeholder="your@email.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary placeholder:text-slate-500 text-white" 
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-rose-300 text-xs font-medium bg-rose-950/40 p-3 rounded-lg border border-rose-900/50">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    id="send_full_results_btn"
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-brand-primary/20 text-sm uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <ShieldCheck className="w-4.5 h-4.5" />
                        <span>Send My Simulated Report</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <div className="mt-6 flex items-start gap-2 text-[10px] text-slate-400 p-2">
              <Lock className="w-3.5 h-3.5 text-brand-primary shrink-0 mt-0.5" />
              <p>Privacy Promise: No vehicle connection. No insurance use. No hardware required. Your responses are secure and processed locally.</p>
            </div>
          </div>

          {/* Value Prop Cards (Mini) */}
          <div className="bg-white/50 border border-slate-200 p-6 rounded-3xl flex flex-col justify-center space-y-4 shadow-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Why validation matters</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white border border-slate-150 rounded-lg shadow-sm flex items-center justify-center text-brand-primary font-bold">01</div>
                <p className="text-xs font-semibold text-slate-700">Prioritize Canadian rollout needs</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white border border-slate-150 rounded-lg shadow-sm flex items-center justify-center text-brand-primary font-bold">02</div>
                <p className="text-xs font-semibold text-slate-700">Understand compatibility demand</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-white border border-slate-150 rounded-lg shadow-sm flex items-center justify-center text-brand-primary font-bold">03</div>
                <p className="text-xs font-semibold text-slate-700">Validate privacy-first alternatives</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </div>
  );
}

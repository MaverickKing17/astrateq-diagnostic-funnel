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

  // Simple validation
  const handleSubmit = (e: React.FormEvent) => {
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
    onTrackEvent('email_submitted', { email, firstName });

    // Simulated network submit
    setTimeout(() => {
      setIsSubmitting(false);
      onSubmitEmail(email, firstName);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 font-sans" id="preliminary_view_container">
      
      {/* 1. Header Confirmation */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold border border-emerald-100">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
          <span>Diagnostic complete!</span>
        </div>
        <h1 className="font-display font-bold text-3xl text-slate-900 tracking-tight">
          Here's your preliminary result
        </h1>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          We have generated your preliminary readiness index based on your profile inputs. Unlock the full interactive report below.
        </p>
      </div>

      {/* 2. Grid Layout: Left Gauge, Right Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        
        {/* Left Side: Score Widget */}
        <div className="dashboard-card bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center justify-center min-h-[300px]">
          <h3 className="text-xs font-mono font-bold uppercase text-slate-400 tracking-wider mb-2">
            Your Vehicle Readiness Score
          </h3>
          <Gauge score={result.score} size={220} />
        </div>

        {/* Right Side: Quick Diagnostic Breakdown Card */}
        <div className="space-y-4">
          
          {/* Classification Box */}
          <div className="dashboard-card bg-white p-6 rounded-2xl border border-slate-100 space-y-3">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Classification</span>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded bg-blue-50 text-brand-primary text-xs font-bold border border-blue-100">
                {result.tierTag}
              </span>
              <h4 className="font-display font-bold text-slate-900 text-lg">
                {result.tierName}
              </h4>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Your profile suggests strong alignment with Canadian driver readiness use cases, especially around highway usage, seasonal driving context, and privacy-first vehicle intelligence.
            </p>
          </div>

          {/* Risk Profile Box */}
          <div className="dashboard-card bg-white p-6 rounded-2xl border border-slate-100 space-y-2">
            <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">Driving Risk Profile</span>
            <h4 className="font-display font-bold text-slate-900 text-md">
              {result.riskProfile}
            </h4>
            <p className="text-xs text-slate-500 leading-normal">
              {result.riskDesc}
            </p>
          </div>

        </div>

      </div>

      {/* 3. Lead Capture Email Form Card */}
      <div className="dashboard-card bg-gradient-to-b from-white to-slate-50 p-6 sm:p-10 rounded-2xl border border-slate-200/80 shadow-lg max-w-2xl mx-auto">
        <div className="text-center space-y-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-brand-primary mx-auto">
            <Sparkles className="w-5 h-5" />
          </div>
          <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight">
            Unlock your full readiness result
          </h2>
          <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
            We’ll send your complete interactive score report, driving risk profile breakdown, compatibility confidence index, and founding cohort eligibility review. No spam. No resale.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4" id="email_capture_form">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* First Name Field */}
            <div className="space-y-1.5">
              <label htmlFor="first_name_input" className="text-xs font-semibold text-slate-600 block">
                First name <span className="text-slate-400 font-normal">(optional)</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="text"
                  id="first_name_input"
                  placeholder="e.g. Liam"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-1.5">
              <label htmlFor="email_input" className="text-xs font-semibold text-slate-600 block">
                Email address <span className="text-rose-500">*</span>
              </label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
                <input
                  type="email"
                  id="email_input"
                  required
                  placeholder="e.g. liam@example.ca"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary/20 outline-none transition-colors"
                />
              </div>
            </div>

          </div>

          {/* Validation Error Message */}
          {error && (
            <div className="flex items-center gap-2 text-rose-600 text-xs font-medium bg-rose-50 p-3 rounded-lg border border-rose-100/50">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Action Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-xl font-bold text-sm cursor-pointer shadow-md transition-all flex items-center justify-center gap-2 ${
              isSubmitting
                ? 'bg-slate-700 text-slate-300 cursor-not-allowed'
                : 'bg-brand-primary hover:bg-blue-700 text-white shadow-blue-200/10 hover:shadow-blue-500/10'
            }`}
            id="send_full_results_btn"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>Analyzing driver profile details...</span>
              </>
            ) : (
              <>
                <ShieldCheck className="w-4.5 h-4.5" />
                <span>Send My Full Result</span>
              </>
            )}
          </button>

          {/* Privacy Assurance text */}
          <p className="text-[10px] text-slate-400 text-center leading-relaxed mt-4 max-w-lg mx-auto">
            We use your email only to send your readiness results and relevant founding cohort updates. Astrateq Gadgets is privacy-first, which means we do not participate in insurer-style speed logs, advertising resale, or tracking brokers.
          </p>

        </form>
      </div>

    </div>
  );
}

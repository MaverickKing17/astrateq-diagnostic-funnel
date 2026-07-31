import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  Cpu, 
  Sparkles, 
  ChevronRight, 
  ArrowLeft, 
  Download, 
  Printer, 
  Share2, 
  Check,
  Zap,
  Lock,
  Globe,
  Gauge,
  Gift,
  Users,
  Award,
  Trophy
} from 'lucide-react';
import { DiagnosticResult } from '../types';

interface CohortReservationViewProps {
  result: DiagnosticResult;
  email: string;
  firstName: string;
  ticketId: string;
  onBackToResults: () => void;
  onTrackEvent: (name: string, data?: Record<string, any>) => void;
}

export default function CohortReservationView({ 
  result, 
  email, 
  firstName, 
  ticketId, 
  onBackToResults,
  onTrackEvent 
}: CohortReservationViewProps) {
  const [vehicleType, setVehicleType] = useState('personal');
  const [hardwarePref, setHardwarePref] = useState('bundle');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [referralsCount, setReferralsCount] = useState(() => {
    const saved = localStorage.getItem(`referrals_${ticketId}`);
    return saved ? parseInt(saved, 10) : 0;
  });
  const [showSimNotification, setShowSimNotification] = useState<string | null>(null);

  const incrementReferrals = () => {
    const newCount = referralsCount + 1;
    setReferralsCount(newCount);
    localStorage.setItem(`referrals_${ticketId}`, newCount.toString());
    onTrackEvent('simulated_referral_added', { ticketId, currentCount: newCount });
    
    // Show a realistic toast notification
    const names = ["Emily R.", "David M.", "Sarah T.", "Ryan K.", "Chloe P.", "Marcus L.", "Jessica W."];
    const randomName = names[Math.floor(Math.random() * names.length)];
    setShowSimNotification(`🎉 ${randomName} just signed up using your link!`);
    setTimeout(() => {
      setShowSimNotification(null);
    }, 4000);
  };

  const vehicleOptions = [
    { 
      id: 'personal', 
      title: 'Personal Commuter', 
      desc: 'Standard passenger car, direct software edge integration.' 
    },
    { 
      id: 'fleet', 
      title: 'Dual / Multi-Vehicle Fleet', 
      desc: 'Active driver households, multi-device software link.' 
    },
    { 
      id: 'ev', 
      title: 'Electric Vehicle Specialized', 
      desc: 'Active battery-saving local processing integration.' 
    },
    { 
      id: 'rideshare', 
      title: 'Professional Rideshare', 
      desc: 'For Uber/Lyft drivers seeking private focus validation.' 
    },
  ];

  const hardwareOptions = [
    { 
      id: 'software', 
      title: 'Beta Software OTA (Instant Access)', 
      desc: '100% software-based ocular tracking via phone camera mount.' 
    },
    { 
      id: 'hardware', 
      title: 'Pre-Launch Hardware Kit', 
      desc: 'Dedicated Steering Column Tracker & premium HUD display.' 
    },
    { 
      id: 'bundle', 
      title: 'Premium Founding-Member Bundle', 
      desc: 'Dedicated hardware HUD + Lifetime Companion Software license.' 
    },
  ];

  const handleConfirmReservation = (e: React.FormEvent) => {
    e.preventDefault();
    onTrackEvent('cohort_reservation_confirmed', {
      email,
      firstName,
      ticketId,
      vehicleType,
      hardwarePref,
      score: result.score
    });
    setIsSubmitted(true);
  };

  const handleDownloadPass = () => {
    setDownloading(true);
    onTrackEvent('download_pass_clicked', { ticketId, email });
    setTimeout(() => {
      setDownloading(false);
      alert(`Simulation pass (${ticketId}) downloaded successfully!`);
    }, 1500);
  };

  const handleCopyShareLink = () => {
    const shareUrl = `${window.location.origin}/?ref=${ticketId}&utm_source=pass_share`;
    navigator.clipboard.writeText(shareUrl);
    setCopiedLink(true);
    onTrackEvent('share_link_copied_from_pass', { ticketId, email });
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="font-sans max-w-4xl mx-auto px-4 py-4 text-slate-100" id="cohort_reservation_container">
      
      {showSimNotification && (
        <div className="fixed bottom-6 right-6 z-50 max-w-sm p-4 bg-slate-900/95 backdrop-blur-md border border-sky-500/30 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in text-white" id="simulated_toast">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-100">{showSimNotification}</p>
            <span className="text-[10px] text-sky-400 font-mono block mt-0.5">Simulated Referral Registered</span>
          </div>
        </div>
      )}

      {!isSubmitted ? (
        <div className="space-y-8 animate-fade-in">
          {/* Header Progress Back button */}
          <div className="flex items-center justify-between">
            <button 
              onClick={onBackToResults}
              className="px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/60 text-slate-300 font-semibold text-xs hover:bg-slate-800 hover:text-white hover:border-slate-700 shadow-xs cursor-pointer flex items-center gap-1.5 transition-all"
              id="back_to_results_btn"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Report</span>
            </button>
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
              <span>STEP 3 OF 3: FINAL COHORT PLACEMENT</span>
            </div>
          </div>

          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/10 text-sky-400 rounded-full text-xs font-mono font-bold border border-sky-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Priority Position Reserved for {firstName}</span>
            </div>
            <h1 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Founding Cohort Customization
            </h1>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">
              We are fine-tuning our early production batches for Canadian road conditions. Select your intended vehicle setup to customize your pre-launch driver firmware package.
            </p>
          </div>

          <form onSubmit={handleConfirmReservation} className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left Options Configurator (7 cols) */}
            <div className="md:col-span-7 space-y-6">
              
              {/* Card 1: Vehicle Type */}
              <div className="bg-[#0b111e]/90 p-6 rounded-3xl border border-slate-800/80 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xs">A</div>
                  <h3 className="font-bold text-white text-base">Select Your Vehicle Configuration</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {vehicleOptions.map((opt) => (
                    <div 
                      key={opt.id}
                      onClick={() => setVehicleType(opt.id)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        vehicleType === opt.id 
                          ? 'bg-[#0f233d] border-sky-500 shadow-lg ring-1 ring-sky-500/30' 
                          : 'bg-[#10192a]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#121c2e]'
                      }`}
                      id={`opt_vehicle_${opt.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-100 text-sm">{opt.title}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          vehicleType === opt.id ? 'border-sky-400 bg-sky-500' : 'border-slate-600 bg-slate-900'
                        }`}>
                          {vehicleType === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card 2: Hardware Preference */}
              <div className="bg-[#0b111e]/90 p-6 rounded-3xl border border-slate-800/80 space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                  <div className="w-6 h-6 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-xs">B</div>
                  <h3 className="font-bold text-white text-base">Select Hardware / Allocation Style</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {hardwareOptions.map((opt) => (
                    <div 
                      key={opt.id}
                      onClick={() => setHardwarePref(opt.id)}
                      className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                        hardwarePref === opt.id 
                          ? 'bg-[#0f233d] border-sky-500 shadow-lg ring-1 ring-sky-500/30' 
                          : 'bg-[#10192a]/60 border-slate-800/80 hover:border-slate-700 hover:bg-[#121c2e]'
                      }`}
                      id={`opt_hw_${opt.id}`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-100 text-sm">{opt.title}</span>
                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          hardwarePref === opt.id ? 'border-sky-400 bg-sky-500' : 'border-slate-600 bg-slate-900'
                        }`}>
                          {hardwarePref === opt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{opt.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary Ticket Pane (5 cols) */}
            <div className="md:col-span-5 space-y-6">
              
              {/* VIP Reservation Hold Card */}
              <div className="bg-gradient-to-b from-[#111928] to-[#090e18] p-6 rounded-3xl border border-sky-500/15 shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-center space-y-5">
                <div className="flex justify-center">
                  <div className="p-3.5 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                    <Cpu className="w-8 h-8" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block">Active Ticket Verified</span>
                  <h3 className="font-sans font-extrabold text-xl text-white tracking-tight">VIP Reservation Hold</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    By submitting this selection, you secure your position on the official research list.
                  </p>
                </div>

                {/* Simulated metadata specs */}
                <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/60 text-left space-y-3.5 text-xs font-mono">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">CANDIDATE:</span>
                    <span className="text-slate-200 font-bold">{firstName || "Priority Driver"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">EMAIL:</span>
                    <span className="text-slate-200 font-bold truncate max-w-[150px]">{email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">TICKET-ID:</span>
                    <span className="text-cyan-400 font-bold">{ticketId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">ONTARIO REGION:</span>
                    <span className="text-emerald-400 font-bold">GTA Core</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-semibold">PRIORITY STATUS:</span>
                    <span className="text-sky-400 font-bold">High (Score: {result.score})</span>
                  </div>
                </div>

                {/* Reservation Action Button */}
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-black text-base rounded-xl shadow-[0_0_28px_rgba(249,115,22,0.65)] hover:shadow-[0_0_38px_rgba(249,115,22,0.9)] border-2 border-orange-200 active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
                  id="confirm_reservation_submit_btn"
                >
                  <CheckCircle2 className="w-5 h-5 text-slate-950 stroke-[3]" />
                  <span>Confirm Priority Reservation</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
                  <Lock className="w-3.5 h-3.5 text-sky-400/80" />
                  <span>Zero-Surveillance, NO credit card required.</span>
                </div>
              </div>

            </div>

          </form>
        </div>
      ) : (
        /* Confirmed View: The Boarding Pass Ticket */
        <div className="space-y-8 animate-fade-in max-w-2xl mx-auto" id="reservation_confirmed_pass_container">
          
          <div className="text-center space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-mono font-bold border border-emerald-500/20">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>COHORT PLACEMENT SECURED</span>
            </div>
            <h1 className="font-sans font-black text-3xl sm:text-4xl text-white tracking-tight">
              Reservation Confirmed!
            </h1>
            <p className="text-sm text-slate-400 leading-relaxed">
              Congratulations, <strong>{firstName}</strong>! Your profile is verified and your priority allocation has been locked into the pre-launch system.
            </p>
          </div>

          {/* Premium Digital Boarding Pass Ticket component */}
          <div className="bg-[#0b111e] rounded-3xl border border-sky-500/25 shadow-[0_24px_60px_rgba(0,0,0,0.6)] overflow-hidden relative" id="reservation_boarding_pass_ticket">
            {/* Ticket Jagged Cutouts */}
            <div className="absolute left-0 top-[60%] -translate-y-1/2 w-4 h-8 bg-[#04060a] rounded-r-full z-10 border border-sky-500/10 border-l-0"></div>
            <div className="absolute right-0 top-[60%] -translate-y-1/2 w-4 h-8 bg-[#04060a] rounded-l-full z-10 border border-sky-500/10 border-r-0"></div>

            {/* Boarding Pass Header */}
            <div className="bg-gradient-to-r from-[#0d2138] to-[#0a182b] p-6 sm:p-8 border-b border-slate-800/60 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] font-mono font-bold text-sky-400 tracking-widest uppercase block">ASTRATEQ GADGETS</span>
                <strong className="text-white font-extrabold text-base sm:text-lg">Founding Cohort Member</strong>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-mono text-slate-400 uppercase block">PLACED REGION</span>
                <strong className="text-emerald-400 font-bold text-sm">GTA / ONTARIO</strong>
              </div>
            </div>

            {/* Boarding Pass Body */}
            <div className="p-6 sm:p-8 space-y-6">
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-4 gap-x-6 text-xs">
                <div>
                  <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">MEMBER NAME</span>
                  <strong className="text-white text-sm font-bold block truncate">{firstName}</strong>
                </div>
                <div>
                  <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">RESERVATION ID</span>
                  <strong className="text-cyan-400 text-sm font-mono font-bold block">{ticketId}</strong>
                </div>
                <div>
                  <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">VEHICLE FOCUS</span>
                  <strong className="text-white text-sm font-bold block truncate">
                    {vehicleOptions.find(o => o.id === vehicleType)?.title || "Personal"}
                  </strong>
                </div>
                <div>
                  <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">ALLOCATION PREF</span>
                  <strong className="text-white text-sm font-bold block truncate">
                    {hardwareOptions.find(o => o.id === hardwarePref)?.title || "Software OTA"}
                  </strong>
                </div>
                <div className="col-span-2 pt-1">
                  <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">VERIFIED EMAIL</span>
                  <span className="text-slate-300 font-bold truncate block">{email}</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">PRIORITY STAGE</span>
                  <span className="text-emerald-400 font-bold block">STAGE-1 (ACTIVE)</span>
                </div>
                <div>
                  <span className="text-[9px] font-mono font-semibold text-slate-500 uppercase tracking-wider block mb-1">DIAGNOSTIC SCORE</span>
                  <span className="text-sky-300 font-bold block">{result.score} / 100</span>
                </div>
              </div>

              {/* Status Banner */}
              <div className="bg-sky-500/5 border border-sky-500/15 p-4 rounded-2xl flex items-start gap-3.5 text-xs">
                <Zap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-white font-bold block">What Happens Next?</strong>
                  <p className="text-slate-400 leading-normal">
                    We have dispatched your complete simulated readiness report to <strong>{email}</strong>. This email includes your unique founding cohort reference pass and early updates for the Toronto validation test group.
                  </p>
                </div>
              </div>

              {/* Simulated QR Code / Barcode block */}
              <div className="pt-6 border-t border-dashed border-slate-800/80 flex flex-col items-center space-y-2.5">
                <div className="bg-white p-3 rounded-2xl shadow-md inline-block">
                  {/* Premium customized SVG barcode / QR grid look */}
                  <div className="grid grid-cols-6 gap-[1.5px] w-28 h-28 bg-white">
                    {Array.from({ length: 36 }).map((_, i) => (
                      <div 
                        key={i} 
                        className={`rounded-xs transition-colors ${
                          (i * 13 + 7) % 5 === 0 || (i * 3 + 1) % 4 === 0 || i === 0 || i === 5 || i === 30 || i === 35 
                            ? 'bg-[#0f1a2c]' 
                            : 'bg-white'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
                <span className="text-[9px] font-mono text-slate-500">SECURE REGISTRATION DATA LINK: {ticketId}-ON-2026</span>
              </div>

            </div>

            {/* Boarding Pass Action bar footer */}
            <div className="bg-slate-950/40 px-6 sm:px-8 py-5 border-t border-slate-800/60 flex flex-col sm:flex-row items-center gap-3 justify-between">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5 font-semibold">
                <Globe className="w-3.5 h-3.5 text-sky-400" />
                <span>Hosted on reserve.astrateqgadgets.com</span>
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button 
                  onClick={handleDownloadPass}
                  disabled={downloading}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 font-bold text-xs hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  {downloading ? (
                    <span>Saving...</span>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Pass</span>
                    </>
                  )}
                </button>
                <button 
                  onClick={handleCopyShareLink}
                  className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 font-bold text-xs hover:bg-sky-500/20 hover:text-white transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-98"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="w-3.5 h-3.5" />
                      <span>Share Link</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* PRE-LAUNCH REFERRAL REWARDS TRACKER STATION */}
          <div className="bg-[#0b111e] rounded-3xl border border-sky-500/15 p-6 sm:p-8 space-y-6 shadow-xl" id="referral_rewards_station">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Gift className="w-5 h-5 text-sky-400" />
                  <h3 className="font-sans font-black text-lg text-white">Pre-Launch Driver Referral Rewards</h3>
                </div>
                <p className="text-xs text-slate-400">
                  Secure additional physical driver hardware & lifetime license benefits by sharing your diagnostic ticket.
                </p>
              </div>

              {/* DEMO SIMULATOR BUTTON */}
              <div className="flex items-center shrink-0">
                <button
                  type="button"
                  onClick={incrementReferrals}
                  className="px-3.5 py-1.5 bg-sky-500/10 hover:bg-sky-500/20 border border-sky-500/20 rounded-xl text-sky-400 font-bold text-[11px] font-mono flex items-center gap-1.5 cursor-pointer active:scale-95 transition-all"
                  id="simulate_referral_btn"
                >
                  <Zap className="w-3.5 h-3.5 animate-pulse text-sky-400" />
                  <span>Simulate Referral Signup</span>
                </button>
              </div>
            </div>

            {/* PROGRESS METER */}
            <div className="space-y-3 bg-[#0d1624]/60 p-5 rounded-2xl border border-slate-800">
              <div className="flex justify-between items-end text-xs font-mono">
                <div className="space-y-0.5">
                  <span className="text-slate-500 font-semibold uppercase">Your Referrals</span>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-sky-400" />
                    <strong className="text-white text-base">{referralsCount} Verified Signups</strong>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 font-semibold uppercase">Next Target</span>
                  <p className="text-sky-400 font-bold">
                    {referralsCount >= 10 ? "Maximum Level Reached! 🚀" : `${referralsCount} / ${referralsCount < 1 ? 1 : referralsCount < 3 ? 3 : referralsCount < 5 ? 5 : 10} Unlocks`}
                  </p>
                </div>
              </div>

              {/* Real-time fluid Progress Bar */}
              <div className="relative h-2.5 bg-slate-950 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-500"
                  style={{ width: `${Math.min((referralsCount / 10) * 100, 100)}%` }}
                ></div>
                
                {/* Tick indicators */}
                <div className="absolute left-[10%] top-0 h-full w-0.5 bg-slate-800" title="1 Referral"></div>
                <div className="absolute left-[30%] top-0 h-full w-0.5 bg-slate-800" title="3 Referrals"></div>
                <div className="absolute left-[50%] top-0 h-full w-0.5 bg-slate-800" title="5 Referrals"></div>
                <div className="absolute left-[100%] top-0 h-full w-0.5 bg-slate-800" title="10 Referrals"></div>
              </div>

              <div className="flex justify-between text-[10px] font-mono text-slate-500 px-1">
                <span>0 Referrals</span>
                <span>1 (Beta Access)</span>
                <span>3 (Dash Mount)</span>
                <span>5 (Lifetime Software)</span>
                <span>10 (HUD Kit)</span>
              </div>
            </div>

            {/* MILESTONE LIST */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Level 1: Beta Access */}
              <div className={`p-4 rounded-2xl border transition-all ${
                referralsCount >= 1 
                  ? 'bg-emerald-500/5 border-emerald-500/25 shadow-md' 
                  : 'bg-[#10192a]/30 border-slate-800/80 opacity-75'
              }`}>
                <div className="flex justify-between items-start">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                    referralsCount >= 1 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                  }`}>
                    1 Referral - {referralsCount >= 1 ? "Unlocked" : "Locked"}
                  </span>
                  {referralsCount >= 1 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-600 mt-0.5" />
                  )}
                </div>
                <div className="mt-2.5">
                  <strong className={`text-sm font-bold block ${referralsCount >= 1 ? 'text-white' : 'text-slate-400'}`}>
                    Beta App OTA Access
                  </strong>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    Gain instant iOS TestFlight & Android Beta APK download access to the Ocular Focus tracker driver client on day one.
                  </p>
                </div>
              </div>

              {/* Level 2: Dash Mount */}
              <div className={`p-4 rounded-2xl border transition-all ${
                referralsCount >= 3 
                  ? 'bg-emerald-500/5 border-emerald-500/25 shadow-md' 
                  : 'bg-[#10192a]/30 border-slate-800/80 opacity-75'
              }`}>
                <div className="flex justify-between items-start">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                    referralsCount >= 3 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                  }`}>
                    3 Referrals - {referralsCount >= 3 ? "Unlocked" : "Locked"}
                  </span>
                  {referralsCount >= 3 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-600 mt-0.5" />
                  )}
                </div>
                <div className="mt-2.5">
                  <strong className={`text-sm font-bold block ${referralsCount >= 3 ? 'text-white' : 'text-slate-400'}`}>
                    Exclusive Dash Mount Pack
                  </strong>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    Free physical magnetic steering-column accessory that securely stabilizes your smartphone for zero-distraction eye-tracking.
                  </p>
                </div>
              </div>

              {/* Level 3: Lifetime Software */}
              <div className={`p-4 rounded-2xl border transition-all ${
                referralsCount >= 5 
                  ? 'bg-emerald-500/5 border-emerald-500/25 shadow-md' 
                  : 'bg-[#10192a]/30 border-slate-800/80 opacity-75'
              }`}>
                <div className="flex justify-between items-start">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                    referralsCount >= 5 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                  }`}>
                    5 Referrals - {referralsCount >= 5 ? "Unlocked" : "Locked"}
                  </span>
                  {referralsCount >= 5 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-600 mt-0.5" />
                  )}
                </div>
                <div className="mt-2.5">
                  <strong className={`text-sm font-bold block ${referralsCount >= 5 ? 'text-white' : 'text-slate-400'}`}>
                    Lifetime Software License
                  </strong>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    Waiver for all driver-intelligence cloud processing subscriptions. Zero fees for our cognitive fatigue alerts forever ($120/yr value).
                  </p>
                </div>
              </div>

              {/* Level 4: Steering HUD Kit */}
              <div className={`p-4 rounded-2xl border transition-all ${
                referralsCount >= 10 
                  ? 'bg-emerald-500/5 border-emerald-500/25 shadow-md' 
                  : 'bg-[#10192a]/30 border-slate-800/80 opacity-75'
              }`}>
                <div className="flex justify-between items-start">
                  <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono font-bold uppercase tracking-wider ${
                    referralsCount >= 10 ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-slate-800 text-slate-400'
                  }`}>
                    10 Referrals - {referralsCount >= 10 ? "Unlocked" : "Locked"}
                  </span>
                  {referralsCount >= 10 ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  ) : (
                    <Lock className="w-4 h-4 text-slate-600 mt-0.5" />
                  )}
                </div>
                <div className="mt-2.5">
                  <strong className={`text-sm font-bold block ${referralsCount >= 10 ? 'text-white' : 'text-slate-400'}`}>
                    Physical Steering-Column HUD Kit
                  </strong>
                  <p className="text-xs text-slate-400 mt-1 leading-normal">
                    Become a Core Beta Hardware partner. We will ship our dedicated HUD display module that mounts over your steering column cluster.
                  </p>
                </div>
              </div>

            </div>

            {/* Share action remind box */}
            <div className="bg-[#0f1f33]/40 border border-sky-500/15 p-4 rounded-2xl flex items-center justify-between gap-4 text-xs font-sans">
              <div className="space-y-0.5">
                <span className="text-sky-300 font-bold block">How to Refer Drivers:</span>
                <p className="text-slate-400 leading-normal">
                  Simply use the <strong>"Share Link"</strong> button above! It automatically embeds your unique reservation ticket <strong>{ticketId}</strong> to link driver signups directly to your name.
                </p>
              </div>
              <div className="shrink-0">
                <Trophy className="w-8 h-8 text-sky-400/85" />
              </div>
            </div>

          </div>

          <p className="text-center text-xs text-slate-400 leading-relaxed italic px-6">
            Note: Astrateq Gadgets pre-launch driver cohort spots are limited and allocated based on community-sourced validation metrics and local Ontario research targets. No purchase or contract is established by this reservation.
          </p>

        </div>
      )}

    </div>
  );
}

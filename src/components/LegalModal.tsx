import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  Cookie, 
  AlertTriangle, 
  Accessibility, 
  Copyright, 
  Scale, 
  Check, 
  ExternalLink,
  Search,
  Lock,
  Download,
  CheckCircle2
} from 'lucide-react';

export type LegalTabType = 
  | 'privacy' 
  | 'terms' 
  | 'cookies' 
  | 'disclaimer' 
  | 'accessibility' 
  | 'dmca' 
  | 'research_ethics';

interface LegalModalProps {
  isOpen: boolean;
  activeTab: LegalTabType;
  onTabChange: (tab: LegalTabType) => void;
  onClose: () => void;
}

export default function LegalModal({ isOpen, activeTab, onTabChange, onClose }: LegalModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copied, setCopied] = useState(false);

  const tabs: { id: LegalTabType; label: string; shortLabel: string; icon: React.ElementType }[] = [
    { id: 'privacy', label: 'Privacy Policy (PIPEDA)', shortLabel: 'Privacy', icon: ShieldCheck },
    { id: 'terms', label: 'Terms & Conditions', shortLabel: 'Terms', icon: FileText },
    { id: 'cookies', label: 'Cookie & Local Storage Policy', shortLabel: 'Cookies', icon: Cookie },
    { id: 'disclaimer', label: 'Disclaimer & Research Notice', shortLabel: 'Disclaimer', icon: AlertTriangle },
    { id: 'accessibility', label: 'Accessibility Policy (AODA)', shortLabel: 'Accessibility', icon: Accessibility },
    { id: 'dmca', label: 'DMCA & IP Notice', shortLabel: 'DMCA', icon: Copyright },
    { id: 'research_ethics', label: 'Research Ethics & Data Governance', shortLabel: 'Ethics', icon: Scale },
  ];

  const handleCopySummary = () => {
    navigator.clipboard.writeText(
      `Astrateq Gadgets Compliance Notice:\nAll data processed locally under PIPEDA guidelines. Zero continuous GPS tracking, zero insurance telematics sharing, WCAG 2.1 AA accessible.`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4" id="legal_modal_overlay">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#060e20]/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: 'spring', duration: 0.4 }}
            className="relative bg-[#091328] text-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl border border-sky-500/35 overflow-hidden flex flex-col"
            id="legal_modal_content"
          >
            {/* Illuminated Header Accent Line */}
            <div className="h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-indigo-500" />

            {/* Modal Header */}
            <header className="px-6 py-4 bg-[#0d1a36] border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-500/15 border border-sky-500/30 text-sky-400 rounded-xl flex items-center justify-center shadow-xs">
                  <Scale className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-lg sm:text-xl text-white leading-tight">
                    Legal, Privacy & Compliance Center
                  </h2>
                  <p className="text-[11px] font-mono text-sky-400 font-semibold tracking-wider uppercase mt-0.5">
                    Astrateq Gadgets · Ontario & Canadian Legal Frameworks
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close legal modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </header>

            {/* Sub-header Navigation Bar (Tabs) */}
            <div className="bg-[#0b162c] border-b border-slate-800 px-4 py-1.5 flex items-center gap-1 overflow-x-auto scrollbar-none shrink-0">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`relative py-2.5 px-3.5 text-xs font-bold transition-all flex items-center gap-2 border-b-2 cursor-pointer whitespace-nowrap rounded-t-lg ${
                      isActive
                        ? 'text-sky-300 border-sky-400 bg-sky-950/60 font-extrabold'
                        : 'text-slate-400 hover:text-slate-200 border-transparent hover:bg-slate-800/40'
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-400 animate-pulse' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 text-slate-200 text-sm leading-relaxed scrollbar-thin">
              
              {/* PRIVACY POLICY */}
              {activeTab === 'privacy' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="inline-flex items-center gap-2 bg-sky-950 text-sky-400 px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-sky-800/50">
                      <Lock className="w-3 h-3" />
                      <span>PIPEDA & LAW 25 COMPLIANT</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Privacy Policy</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Effective Date: January 1, 2026 · Toronto, Ontario, Canada
                    </p>
                  </div>

                  <p>
                    Astrateq Gadgets (“Astrateq”, “we”, “our”, or “us”) is committed to protecting the privacy and personal data of participants using our driver awareness simulation portal. This Privacy Policy governs our collection, processing, local storage, and use of information in accordance with the <em>Personal Information Protection and Electronic Documents Act</em> (PIPEDA) of Canada and Quebec Law 25 where applicable.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-sky-300 border-l-2 border-sky-400 pl-3">
                      1. Core Privacy Commitments & Non-Negotiables
                    </h4>
                    <ul className="space-y-2.5 bg-slate-900/80 p-4 rounded-xl border border-slate-800 text-xs">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Zero Continuous GPS Telematics:</strong> We do not record or track your physical vehicle coordinates, speed logs, or live trip GPS routes.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>No Insurance Data Streaming:</strong> Diagnostic scores, answers, and fatigue profiles are strictly confidential and never transmitted to auto insurers, employers, or credit bureaus.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>No Third-Party Data Sales:</strong> We do not sell, rent, or trade user contact details or behavioral profiles to marketing brokers.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-sky-300 border-l-2 border-sky-400 pl-3">
                      2. Information We Collect
                    </h4>
                    <p className="text-xs text-slate-300">
                      We collect minimal information necessary to deliver simulated driver awareness diagnostics and manage research cohort participation:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-300">
                      <li><strong>Diagnostic Self-Assessments:</strong> Answers regarding driving frequency, commute times, highway exposure, weather concerns, and fatigue management habits.</li>
                      <li><strong>Cohort Contact Details:</strong> Email address and first name provided voluntarily during cohort registration.</li>
                      <li><strong>Anonymized Technical Metrics:</strong> Standard browser user-agent and viewport dimensions to optimize responsive UI rendering.</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-sky-300 border-l-2 border-sky-400 pl-3">
                      3. Data Retention & User Deletion Rights
                    </h4>
                    <p className="text-xs text-slate-300">
                      Under PIPEDA, you maintain the right to inspect, update, or request complete deletion of your registration email and cohort record at any time. Simply send a request to <strong>privacy@astrateq.ca</strong> and your record will be expunged within 30 business days.
                    </p>
                  </div>
                </div>
              )}

              {/* TERMS & CONDITIONS */}
              {activeTab === 'terms' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="inline-flex items-center gap-2 bg-indigo-950 text-indigo-300 px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-indigo-800/50">
                      <FileText className="w-3 h-3" />
                      <span>TERMS OF SERVICE</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Terms & Conditions</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Last Updated: January 2026 · Province of Ontario, Canada
                    </p>
                  </div>

                  <p>
                    By accessing or using the Astrateq Gadgets website and driver awareness simulation portal, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please discontinue use of the portal.
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-indigo-300 border-l-2 border-indigo-400 pl-3">
                      1. Nature of Pre-Launch Validation Portal
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Astrateq Gadgets is a market research and technology conceptual validation initiative. Registration for the research cohort does not constitute a binding contract of sale, financial transaction, or guaranteed product delivery.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-indigo-300 border-l-2 border-indigo-400 pl-3">
                      2. Intellectual Property Rights
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      All brand assets, software algorithms, conceptual designs, text, graphic displays, and simulation logic are the exclusive intellectual property of Astrateq Gadgets. Unauthorized copying or redistribution is strictly prohibited.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-indigo-300 border-l-2 border-indigo-400 pl-3">
                      3. Limitation of Liability
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      To the maximum extent permitted under Ontario law, Astrateq Gadgets shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this educational simulation tool.
                    </p>
                  </div>
                </div>
              )}

              {/* COOKIE & LOCAL STORAGE POLICY */}
              {activeTab === 'cookies' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="inline-flex items-center gap-2 bg-amber-950 text-amber-300 px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-amber-800/50">
                      <Cookie className="w-3 h-3" />
                      <span>LOCAL STORAGE & COOKIES</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Cookie & Local Storage Policy</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Transparency Notice · Web Storage Architecture
                    </p>
                  </div>

                  <p>
                    Astrateq Gadgets prioritizes client-side execution to protect driver privacy. We utilize HTML5 browser LocalStorage rather than intrusive cross-site tracking cookies.
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-base font-bold text-amber-300 border-l-2 border-amber-400 pl-3">
                      What We Store Locally in Your Browser:
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <span className="font-bold text-white block">1. Diagnostic State</span>
                        <p className="text-slate-400 leading-relaxed">
                          Saves your question progress so you do not lose your answers if you refresh the browser tab.
                        </p>
                      </div>
                      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                        <span className="font-bold text-white block">2. Privacy Preferences</span>
                        <p className="text-slate-400 leading-relaxed">
                          Remembers your cookie consent choices and simulation completion confirmation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-400">
                    You can clear this storage at any time by clearing your browser site data or cookies for this domain. No third-party advertising retargeting pixels (e.g., Meta Pixel, TikTok Ads) are installed.
                  </p>
                </div>
              )}

              {/* DISCLAIMER & RESEARCH NOTICE */}
              {activeTab === 'disclaimer' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="inline-flex items-center gap-2 bg-rose-950 text-rose-300 px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-rose-800/50">
                      <AlertTriangle className="w-3 h-3" />
                      <span>IMPORTANT LEGAL DISCLAIMER</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Disclaimer & Educational Notice</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Non-Medical & Non-Safety Telematics Disclosure
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-200 text-xs leading-relaxed space-y-2">
                    <p className="font-bold text-sm">⚠️ Important Safety & Research Disclaimer:</p>
                    <p>
                      The Astrateq Gadgets Driver Awareness Simulation is an <strong>educational self-assessment and market validation tool</strong>. It is NOT a medical device, diagnostic clinical tool, certified sleep apnea analyzer, or physical vehicle collision avoidance system.
                    </p>
                  </div>

                  <div className="space-y-3 text-xs text-slate-300">
                    <p>
                      • <strong>Driver Responsibility:</strong> Drivers are solely responsible for operating their motor vehicles in compliance with the Ontario <em>Highway Traffic Act</em>, Canadian federal regulations, and local traffic laws.
                    </p>
                    <p>
                      • <strong>Do Not Drive Impaired or Sleepy:</strong> If you feel fatigued, sleepy, or visually impaired while driving, pull over safely at an authorized rest area immediately. Do not rely on simulated scores to substitute for real-world physical rest.
                    </p>
                  </div>
                </div>
              )}

              {/* ACCESSIBILITY POLICY (AODA) */}
              {activeTab === 'accessibility' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="inline-flex items-center gap-2 bg-emerald-950 text-emerald-300 px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-emerald-800/50">
                      <Accessibility className="w-3 h-3" />
                      <span>AODA & WCAG 2.1 AA COMPLIANCE</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Accessibility Policy</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Accessibility for Ontarians with Disabilities Act Statement
                    </p>
                  </div>

                  <p>
                    Astrateq Gadgets is dedicated to ensuring digital accessibility for people with disabilities. We continuously improve the user experience for everyone and apply the relevant accessibility standards, aiming for conformance with WCAG 2.1 Level AA and the <em>Accessibility for Ontarians with Disabilities Act</em> (AODA).
                  </p>

                  <div className="space-y-3">
                    <h4 className="text-base font-bold text-emerald-300 border-l-2 border-emerald-400 pl-3">
                      Accessibility Features Implemented:
                    </h4>
                    <ul className="list-disc pl-5 space-y-2 text-xs text-slate-300">
                      <li><strong>High-Contrast Typography:</strong> Optimized color contrast ratios exceeding WCAG 4.5:1 standards across light and dark views.</li>
                      <li><strong>Keyboard Navigation:</strong> Full focus ring indicators and logical tab index traversal for screen reader accessibility.</li>
                      <li><strong>Reduced Motion Support:</strong> Respects browser <code>prefers-reduced-motion</code> settings for CSS animations.</li>
                      <li><strong>Semantic HTML Architecture:</strong> Proper landmark tags, ARIA labels, and explicit element identifiers.</li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <span className="font-bold text-white block">Feedback & Support</span>
                    <p className="text-slate-400">
                      We welcome your feedback on the accessibility of Astrateq Gadgets. Please let us know if you encounter accessibility barriers by emailing <strong>accessibility@astrateq.ca</strong>.
                    </p>
                  </div>
                </div>
              )}

              {/* DMCA & COPYRIGHT */}
              {activeTab === 'dmca' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="inline-flex items-center gap-2 bg-cyan-950 text-cyan-300 px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-cyan-800/50">
                      <Copyright className="w-3 h-3" />
                      <span>INTELLECTUAL PROPERTY & DMCA</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">DMCA & Copyright Notice</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Digital Millennium Copyright Act Takedown Policy
                    </p>
                  </div>

                  <p>
                    Astrateq Gadgets respects the intellectual property rights of others and expects users to do the same. In accordance with the Digital Millennium Copyright Act (DMCA) and Canadian copyright framework, we respond promptly to notices of alleged copyright infringement.
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
                    <h4 className="font-bold text-sky-300">Submitting a DMCA Takedown Notice:</h4>
                    <p className="text-slate-300">
                      If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement, please submit a written notification containing:
                    </p>
                    <ol className="list-decimal pl-5 space-y-1 text-slate-400">
                      <li>Identification of the copyrighted work claimed to have been infringed.</li>
                      <li>Identification of the material that is claimed to be infringing.</li>
                      <li>Your contact details including address, telephone number, and email.</li>
                      <li>A statement that you have a good faith belief that the use is unauthorized.</li>
                    </ol>
                    <p className="text-slate-300 pt-2 font-mono">
                      Send notice to Designated Copyright Agent: <strong>copyright@astrateq.ca</strong>
                    </p>
                  </div>
                </div>
              )}

              {/* RESEARCH ETHICS */}
              {activeTab === 'research_ethics' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="space-y-2 border-b border-slate-800 pb-4">
                    <div className="inline-flex items-center gap-2 bg-teal-950 text-teal-300 px-3 py-1 rounded-md text-[10px] font-mono font-bold border border-teal-800/50">
                      <Scale className="w-3 h-3" />
                      <span>DATA ETHICS & GOVERNANCE</span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-white">Research Ethics & Data Governance</h3>
                    <p className="text-xs text-slate-400 font-mono">
                      Canadian Market Validation Cohort Protocol
                    </p>
                  </div>

                  <p>
                    Participation in the Astrateq Gadgets driver awareness research cohort is voluntary. Our data governance framework follows Canadian research ethics guidelines ensuring participant autonomy, privacy protection, and transparent research outcomes.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="font-bold text-teal-300 block">Voluntary Consent</span>
                      <p className="text-slate-300 leading-relaxed">
                        Participants may withdraw consent and exit the research cohort at any time without penalty or loss of benefits.
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                      <span className="font-bold text-teal-300 block">Aggregated Reporting</span>
                      <p className="text-slate-300 leading-relaxed">
                        Study findings are published only as aggregated, statistical cohort trends without revealing individual driver identities.
                      </p>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <footer className="px-6 py-4 bg-[#0d1a36] border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Active Compliance Framework · 2026</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopySummary}
                  className="px-3.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-xs font-bold"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Download className="w-3.5 h-3.5 text-sky-400" />}
                  <span>{copied ? 'Summary Copied' : 'Copy Key Legal Summary'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold transition-all cursor-pointer shadow-md text-xs"
                >
                  Acknowledge & Close
                </button>
              </div>
            </footer>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

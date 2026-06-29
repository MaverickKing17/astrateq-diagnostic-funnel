import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, BookOpen, ShieldCheck, Cpu, Heart, Sparkles, HelpCircle, Lock, EyeOff, ChevronRight, CheckCircle2 } from 'lucide-react';

export type InfoTabType = 'about' | 'howItWorks' | 'privacy' | 'faq';

interface InfoModalProps {
  isOpen: boolean;
  activeTab: InfoTabType;
  onTabChange: (tab: InfoTabType) => void;
  onClose: () => void;
  onStartDiagnostic?: () => void;
}

export default function InfoModal({ isOpen, activeTab, onTabChange, onClose, onStartDiagnostic }: InfoModalProps) {
  
  // Tab metadata for navigation inside the modal
  const tabs = [
    { id: 'about' as InfoTabType, label: 'About Astrateq Gadgets', icon: Sparkles },
    { id: 'howItWorks' as InfoTabType, label: 'How It Works', icon: Cpu },
    { id: 'privacy' as InfoTabType, label: 'Privacy Approach', icon: ShieldCheck },
    { id: 'faq' as InfoTabType, label: 'Pre-Launch FAQ', icon: HelpCircle },
  ];

  // Specific callback for CTA clicks
  const handleCtaClick = () => {
    onClose();
    if (activeTab === 'howItWorks' && onStartDiagnostic) {
      onStartDiagnostic();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="info_modal_overlay">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#0A1A2F]/65 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', duration: 0.45 }}
            className="relative bg-white w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl border border-[#DCEBFA] overflow-hidden flex flex-col"
            id="info_modal_content"
          >
            {/* Modal Header */}
            <header className="px-6 py-5 bg-[#F4F8FC] border-b border-[#DCEBFA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3 text-[#102A43]">
                <div className="w-10 h-10 bg-[#102A43] text-white rounded-xl flex items-center justify-center shadow-sm">
                  <BookOpen className="w-5.5 h-5.5 text-sky-400" />
                </div>
                <div>
                  <h2 className="font-sans font-bold text-lg text-[#102A43] leading-tight">
                    Astrateq Gadgets Info
                  </h2>
                  <p className="text-[11px] text-slate-500 font-semibold tracking-wide uppercase mt-0.5">
                    Pre-Launch Intelligence Center
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 sm:static w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-[#102A43]/70 hover:text-[#102A43] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </header>

            {/* Premium Tab Bar for easy navigation inside the modal */}
            <div className="bg-white border-b border-[#DCEBFA] px-4 py-1 flex items-center gap-1 overflow-x-auto scrollbar-none shrink-0">
              {tabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    className={`relative py-3 px-4 text-xs font-bold transition-all flex items-center gap-2 border-b-2 cursor-pointer whitespace-nowrap ${
                      isActive
                        ? 'text-sky-600 border-sky-600 font-extrabold'
                        : 'text-slate-500 hover:text-[#102A43] border-transparent'
                    }`}
                  >
                    <TabIcon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-600 animate-pulse' : 'text-slate-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable Content Pane */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 scrollbar-thin">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ duration: 0.2 }}
                  className="space-y-6"
                >
                  {/* ABOUT ASTRATEQ */}
                  {activeTab === 'about' && (
                    <div className="space-y-5" id="tab_content_about">
                      <div className="flex items-center gap-2.5">
                        <Sparkles className="w-5 h-5 text-sky-500" />
                        <h3 className="font-sans font-bold text-xl text-[#102A43]">
                          About Astrateq Gadgets
                        </h3>
                      </div>
                      
                      <div className="text-sm text-slate-600 space-y-4 leading-relaxed">
                        <p className="font-medium text-[#102A43] text-base leading-snug">
                          Astrateq Gadgets is an upcoming Canadian automotive technology brand validating privacy-first driver awareness intelligence for Canadian roads.
                        </p>
                        <p>
                          The project is currently in pre-launch market validation. The goal is to understand whether Canadian drivers want clearer driver fatigue awareness insights, attentional simulations, and privacy-conscious behavioral intelligence before future software product decisions are made.
                        </p>
                        <p>
                          Astrateq Gadgets is focused on ordinary drivers, families, commuters, road-trippers, and privacy-conscious vehicle owners who want useful guidance without insurer-style tracking or unnecessary data resale.
                        </p>
                      </div>

                      {/* Custom brand bento card */}
                      <div className="bg-[#F4F8FC] border border-[#DCEBFA] rounded-2xl p-5 mt-4">
                        <h4 className="text-xs font-mono font-bold text-sky-700 tracking-wider uppercase mb-2">Focus Geography</h4>
                        <p className="text-xs text-[#102A43]/85 leading-relaxed">
                          Our pre-launch simulated modeling factors in severe weather conditions across Ontario, the GTA highway system, and regional corridors to assure local relevancy.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* HOW IT WORKS */}
                  {activeTab === 'howItWorks' && (
                    <div className="space-y-5" id="tab_content_how">
                      <div className="flex items-center gap-2.5">
                        <Cpu className="w-5 h-5 text-sky-500" />
                        <h3 className="font-sans font-bold text-xl text-[#102A43]">
                          How the Simulation Works
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        The Astrateq Gadgets simulation helps drivers understand how their commute habits, fatigue risks, and attention patterns align with the pre-launch validation research.
                      </p>

                      {/* Step-by-step layout */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">1</div>
                          <div>
                            <p className="font-bold text-xs text-[#102A43] mb-0.5">Analyze Profile</p>
                            <p className="text-xs text-slate-500 leading-relaxed">Answer a few quick questions about your commute habits, attention levels, and privacy preferences.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">2</div>
                          <div>
                            <p className="font-bold text-xs text-[#102A43] mb-0.5">Receive Simulation</p>
                            <p className="text-xs text-slate-500 leading-relaxed">Receive a simulated driver awareness score and fatigue risk profile based on your inputs.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">3</div>
                          <div>
                            <p className="font-bold text-xs text-[#102A43] mb-0.5">Review Cohort</p>
                            <p className="text-xs text-slate-500 leading-relaxed">Review your cohort classification and research recommendation.</p>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex gap-3">
                          <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">4</div>
                          <div>
                            <p className="font-bold text-xs text-[#102A43] mb-0.5">Register Access</p>
                            <p className="text-xs text-slate-500 leading-relaxed">If your profile aligns with current validation research priorities, continue to register for early research cohort entry.</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-amber-50 border border-amber-200/60 rounded-xl flex gap-3 text-xs text-amber-800 mt-4 leading-relaxed">
                        <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                        <p>
                          <strong>Informational Tool Only:</strong> This simulation is informational only. It does not replace professional driver training, certified medical/fatigue diagnostics, or physical driver assessments.
                        </p>
                      </div>
                    </div>
                  )}

                  {/* PRIVACY APPROACH */}
                  {activeTab === 'privacy' && (
                    <div className="space-y-5" id="tab_content_privacy">
                      <div className="flex items-center gap-2.5">
                        <ShieldCheck className="w-5 h-5 text-sky-500" />
                        <h3 className="font-sans font-bold text-xl text-[#102A43]">
                          Astrateq Gadgets Privacy Approach
                        </h3>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        Astrateq Gadgets is being designed around a privacy-first driver safety data philosophy.
                      </p>

                      <div className="space-y-4 pt-2">
                        {/* What we ask for */}
                        <div className="border border-[#DCEBFA] rounded-2xl overflow-hidden">
                          <div className="bg-[#F4F8FC] px-4 py-2.5 border-b border-[#DCEBFA]">
                            <h4 className="font-bold text-xs text-[#102A43] uppercase tracking-wide">What we ask for:</h4>
                          </div>
                          <div className="p-4 bg-white space-y-2">
                            <div className="flex items-start gap-2.5 text-xs text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span><strong>Basic driving context</strong> (Commute duration, peak times, general environmental fatigue)</span>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span><strong>Attentional patterns</strong> (Alertness level, screen focus habits, fatigue responses)</span>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span><strong>Email address</strong> (To deliver simulated results and research cohort verification)</span>
                            </div>
                          </div>
                        </div>

                        {/* What we do not do */}
                        <div className="border border-rose-100 rounded-2xl overflow-hidden">
                          <div className="bg-rose-50 px-4 py-2.5 border-b border-rose-100">
                            <h4 className="font-bold text-xs text-rose-800 uppercase tracking-wide">What we do not do:</h4>
                          </div>
                          <div className="p-4 bg-white space-y-2">
                            <div className="flex items-start gap-2.5 text-xs text-slate-600">
                              <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              <span><strong>No insurance tracking:</strong> Astrateq Gadgets is never used for insurance scoring or reporting. This is purely for personal driver awareness.</span>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-slate-600">
                              <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              <span><strong>No advertisement sales:</strong> We do not build profiles for advertising resale.</span>
                            </div>
                            <div className="flex items-start gap-2.5 text-xs text-slate-600">
                              <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                              <span><strong>No vehicle tracking:</strong> We do not require hardware links, OBD-II connections, VIN numbers, or active location tracking.</span>
                            </div>
                          </div>
                        </div>

                        {/* Why we ask */}
                        <div className="border border-sky-100 rounded-2xl overflow-hidden">
                          <div className="bg-sky-50 px-4 py-2.5 border-b border-sky-100">
                            <h4 className="font-bold text-xs text-sky-800 uppercase tracking-wide">Why we ask:</h4>
                          </div>
                          <div className="p-4 bg-white space-y-2 text-xs text-slate-600">
                            <p>• To map regional Canadian driver fatigue demands and software configuration priorities.</p>
                            <p>• To coordinate future driver awareness and focus research programs.</p>
                            <p>• To validate interest in privacy-first, software-driven driver safety tools.</p>
                          </div>
                        </div>
                      </div>

                      <p className="text-xs text-slate-500 italic mt-2">
                        Astrateq Gadgets' goal is to explore useful driver awareness intelligence without turning commuters into data products.
                      </p>
                    </div>
                  )}

                  {/* PRE-LAUNCH FAQ */}
                  {activeTab === 'faq' && (
                    <div className="space-y-5" id="tab_content_faq">
                      <div className="flex items-center gap-2.5">
                        <HelpCircle className="w-5 h-5 text-sky-500" />
                        <h3 className="font-sans font-bold text-xl text-[#102A43]">
                          Pre-Launch FAQ
                        </h3>
                      </div>

                      {/* Accordion list */}
                      <div className="space-y-4">
                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 space-y-2">
                          <h4 className="font-bold text-xs sm:text-sm text-[#102A43]">
                            Is Astrateq Gadgets available now?
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Astrateq Gadgets is currently in pre-launch market validation. The simulation and cohort registration flow are designed to measure interest, attentional focus needs, and early-access intent before future software rollout decisions.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 space-y-2">
                          <h4 className="font-bold text-xs sm:text-sm text-[#102A43]">
                            Is this a final product purchase or pre-order?
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            No. Astrateq Gadgets is currently in the pre-launch validation phase. We do NOT collect pre-orders, payments, security deposits, or bank info. This is a pre-launch validation research cohort registration to gauge market demand.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 space-y-2">
                          <h4 className="font-bold text-xs sm:text-sm text-[#102A43]">
                            Does this require hardware or vehicle connections?
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            No. This simulation is purely software-based and runs entirely in your browser without requiring any OBD-II hardware, dashcams, or direct vehicle telemetry connections.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 space-y-2">
                          <h4 className="font-bold text-xs sm:text-sm text-[#102A43]">
                            Will my data be sold?
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            Absolutely not. Astrateq Gadgets is built with a privacy-first software philosophy. Your answers are secure, processed locally, and we never sell your driver profile data or behavior metrics.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-150 space-y-2">
                          <h4 className="font-bold text-xs sm:text-sm text-[#102A43]">
                            What happens after I complete the simulation?
                          </h4>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            You receive a simulated driver awareness score, fatigue profile, cohort classification, and an invitation to register for early research cohort entry.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Modal Footer */}
            <footer className="px-6 py-4 bg-[#F4F8FC] border-t border-[#DCEBFA] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 order-2 sm:order-1">
                <span>Made with</span>
                <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
                <span>for safer Canadian roads</span>
              </div>
              <button
                onClick={handleCtaClick}
                className="w-full sm:w-auto px-5 py-2.5 bg-brand-primary hover:bg-sky-600 text-white font-bold rounded-xl transition-all cursor-pointer text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-1.5 order-1 sm:order-2 active:scale-98"
                id="info_modal_cta_btn"
              >
                <span>
                  {activeTab === 'about' && 'Return to simulation'}
                  {activeTab === 'howItWorks' && 'Start simulation'}
                  {activeTab === 'privacy' && 'Review simulation'}
                  {activeTab === 'faq' && 'Back to simulation'}
                </span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </footer>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

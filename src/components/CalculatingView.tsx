import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, MapPin, Loader2, Compass } from 'lucide-react';

interface CalculatingViewProps {
  onCalculationComplete: () => void;
}

const SIMULATION_STEPS = [
  { text: "Analyzing commute frequency and weekly road exposure...", duration: 600, icon: MapPin, color: "text-sky-500" },
  { text: "Evaluating environmental risk factor alignment (Highways, City, Rural)...", duration: 600, icon: Compass, color: "text-blue-500" },
  { text: "Weighting fatigue sensitivity and winter conditions profile...", duration: 600, icon: Cpu, color: "text-amber-500" },
  { text: "Validating privacy preservation and telemetry-free parameters...", duration: 500, icon: ShieldCheck, color: "text-emerald-500" },
];

export default function CalculatingView({ onCalculationComplete }: CalculatingViewProps) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Increment steps sequentially based on their individual durations
    let timeoutId: NodeJS.Timeout;
    
    const runStep = (idx: number) => {
      if (idx >= SIMULATION_STEPS.length) {
        onCalculationComplete();
        return;
      }
      
      timeoutId = setTimeout(() => {
        setCurrentStepIdx(idx + 1);
        runStep(idx + 1);
      }, SIMULATION_STEPS[idx].duration);
    };

    runStep(0);

    // Dynamic progress bar calculation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1.25;
      });
    }, 25);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(progressInterval);
    };
  }, [onCalculationComplete]);

  const activeStep = SIMULATION_STEPS[Math.min(currentStepIdx, SIMULATION_STEPS.length - 1)];
  const ActiveIcon = activeStep.icon;

  return (
    <div className="max-w-xl mx-auto px-6 py-20 font-sans min-h-[500px] flex flex-col justify-center items-center text-center" id="calculating_view_container">
      
      {/* Outer Pulse Container */}
      <motion.div 
        className="w-20 h-20 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-8 relative shadow-lg shadow-sky-500/5"
        animate={{ 
          scale: [1, 1.05, 1],
          borderColor: ["rgba(14, 165, 233, 0.1)", "rgba(14, 165, 233, 0.35)", "rgba(14, 165, 233, 0.1)"]
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Loader2 className="w-10 h-10 text-brand-primary animate-spin" />
        <div className="absolute inset-0 rounded-2xl border-2 border-brand-primary/20 animate-ping opacity-25"></div>
      </motion.div>

      {/* Main Title */}
      <h2 className="font-sans font-extrabold text-2xl text-slate-900 tracking-tight mb-2">
        Generating Simulated Profile
      </h2>
      <p className="text-sm text-slate-500 max-w-sm mb-10 leading-relaxed">
        Calculating Driver Awareness Score and Fatigue Risk Classification based on behavioral inputs...
      </p>

      {/* Step Status Box */}
      <div className="w-full bg-white border border-slate-150 p-6 rounded-2xl shadow-md space-y-4 mb-6 text-left">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
          <ActiveIcon className={`w-5 h-5 shrink-0 ${activeStep.color} animate-pulse`} />
          <span className="text-xs font-mono font-bold text-slate-450 uppercase tracking-widest">
            Step {Math.min(currentStepIdx + 1, SIMULATION_STEPS.length)} of {SIMULATION_STEPS.length}
          </span>
        </div>

        {/* Current Calculating Item */}
        <p className="text-sm font-semibold text-slate-800 leading-snug min-h-[40px] flex items-center">
          {activeStep.text}
        </p>

        {/* Individual Step Log/Checks */}
        <div className="space-y-2 pt-2 border-t border-slate-50">
          {SIMULATION_STEPS.map((step, idx) => {
            const StepIcon = step.icon;
            const isCompleted = idx < currentStepIdx;
            const isActive = idx === currentStepIdx;

            return (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-500">
                  <StepIcon className={`w-3.5 h-3.5 ${isCompleted ? 'text-emerald-500' : 'text-slate-350'}`} />
                  <span className={`${isActive ? 'text-slate-800 font-bold' : isCompleted ? 'text-slate-600 font-medium' : 'text-slate-400'}`}>
                    {step.text.substring(0, 32)}...
                  </span>
                </div>
                <div>
                  {isCompleted ? (
                    <span className="text-[10px] font-mono text-emerald-600 font-bold uppercase bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">Ready</span>
                  ) : isActive ? (
                    <span className="text-[10px] font-mono text-brand-primary font-bold uppercase bg-sky-50 px-2 py-0.5 rounded border border-sky-100 animate-pulse">Running</span>
                  ) : (
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase bg-slate-50 px-2 py-0.5 rounded border border-slate-100">Pending</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full space-y-2">
        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden border border-slate-150/45">
          <div 
            className="h-full bg-gradient-to-r from-brand-primary via-blue-500 to-cyan-400 rounded-full transition-all duration-300"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-[11px] font-mono text-slate-400 font-semibold uppercase">
          <span>Simulation Engine v1.1</span>
          <span>{Math.min(Math.round(progress), 100)}% Complete</span>
        </div>
      </div>

    </div>
  );
}

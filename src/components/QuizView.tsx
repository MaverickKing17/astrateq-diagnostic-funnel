import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldAlert, 
  Lock, 
  Car, 
  Truck, 
  Gauge, 
  Calendar, 
  Navigation, 
  AlertTriangle, 
  Eye, 
  HelpCircle, 
  Clock, 
  Wrench, 
  Users,
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Compass,
  Sun,
  Moon,
  CloudSnow
} from 'lucide-react';
import { QUESTIONS } from '../data/questions';
import { UserAnswers } from '../types';

interface QuizViewProps {
  onComplete: (answers: UserAnswers) => void;
  onBackToLanding: () => void;
  onTrackEvent: (name: string, data?: Record<string, any>) => void;
}

export default function QuizView({ onComplete, onBackToLanding, onTrackEvent }: QuizViewProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswers>({});

  const currentQuestion = QUESTIONS[currentQuestionIdx];
  const totalQuestions = QUESTIONS.length;
  const isLastQuestion = currentQuestionIdx === totalQuestions - 1;

  const selectedOptionId = answers[currentQuestion.id];

  const handleSelectOption = (optionId: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionId
    }));
    onTrackEvent('option_selected', { questionId: currentQuestion.id, optionId });
  };

  const handleNext = () => {
    if (!selectedOptionId) return;

    if (currentQuestionIdx === 0) {
      onTrackEvent('diagnostic_started');
    }

    if (isLastQuestion) {
      onTrackEvent('diagnostic_completed', { answers });
      onComplete(answers);
    } else {
      setCurrentQuestionIdx(prev => prev + 1);
      onTrackEvent('question_advanced', { currentIdx: currentQuestionIdx + 1 });
    }
  };

  const handleBack = () => {
    if (currentQuestionIdx === 0) {
      onBackToLanding();
    } else {
      setCurrentQuestionIdx(prev => prev - 1);
    }
  };

  // Helper to dynamically match icons to options for premium visuals
  const getOptionIcon = (optId: string) => {
    switch (optId) {
      // Q1: Driving frequency
      case 'daily': return <CalendarDays className="w-5 h-5 text-sky-500" />;
      case '3_5_times': return <CalendarDays className="w-5 h-5 text-blue-500" />;
      case '1_2_times': return <Calendar className="w-5 h-5 text-slate-450" />;
      case 'rarely': return <Clock className="w-5 h-5 text-slate-400" />;

      // Q2: Environment types
      case 'highway': return <Navigation className="w-5 h-5 text-sky-500" />;
      case 'city': return <Car className="w-5 h-5 text-amber-500" />;
      case 'suburban': return <Users className="w-5 h-5 text-emerald-500" />;
      case 'road_trips': return <Compass className="w-5 h-5 text-indigo-500" />;
      case 'commercial': return <Truck className="w-5 h-5 text-rose-500" />;

      // Q3: Time of day
      case 'morning': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'midday': return <Sun className="w-5 h-5 text-amber-500" />;
      case 'evening': return <Sun className="w-5 h-5 text-orange-450" />;
      case 'night': return <Moon className="w-5 h-5 text-indigo-400" />;

      // Q4: Low-light / night conditions & Q6 Distraction split
      case 'always': return <Moon className="w-5 h-5 text-indigo-600" />;
      case 'frequently': return <Moon className="w-5 h-5 text-indigo-400" />;
      case 'occasionally': return <Sun className="w-5 h-5 text-amber-400" />;
      case 'rarely_never': return <Sun className="w-5 h-5 text-amber-500" />;

      // Q5: Alertness level
      case 'high': return <Zap className="w-5 h-5 text-emerald-500" />;
      case 'moderate': return <CheckCircle2 className="w-5 h-5 text-sky-500" />;
      case 'sluggish': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'drowsy': return <ShieldAlert className="w-5 h-5 text-rose-500" />;

      // Q6: Distraction split
      case 'focused': return <Eye className="w-5 h-5 text-emerald-500" />;
      case 'seldom': return <Eye className="w-5 h-5 text-sky-500" />;

      // Q7: Winter / poor weather
      case 'very_often': return <CloudSnow className="w-5 h-5 text-sky-400" />;
      case 'sometimes': return <CloudSnow className="w-5 h-5 text-slate-400" />;
      case 'avoid': return <ShieldAlert className="w-5 h-5 text-amber-500" />;
      case 'never': return <Sun className="w-5 h-5 text-amber-500" />;

      // Q8: Privacy importance
      case 'extremely': return <Lock className="w-5 h-5 text-emerald-500" />;
      case 'important': return <Lock className="w-5 h-5 text-sky-500" />;
      case 'somewhat': return <ShieldCheck className="w-5 h-5 text-slate-400" />;
      case 'not_sure': return <HelpCircle className="w-5 h-5 text-slate-400" />;
      
      default: return <Gauge className="w-5 h-5 text-slate-400" />;
    }
  };

  const progressPct = ((currentQuestionIdx + 1) / totalQuestions) * 100;

  return (
    <div className="max-w-2xl mx-auto px-4 py-8 font-sans" id="quiz_view_container">
      
      {/* 1. Header with progress indicator */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-sky-400/85 font-semibold uppercase tracking-wider">
          <span>ASTRATEQ GADGETS driver simulation</span>
          <span className="text-slate-400">Question {currentQuestionIdx + 1} of {totalQuestions}</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 rounded-full shadow-[0_0_10px_rgba(14,165,233,0.5)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* 2. Slide Animating Question Card */}
      <div className="relative bg-gradient-to-b from-[#0c172e] via-[#081023] to-[#040916] p-6 sm:p-8 rounded-3xl border border-sky-500/35 shadow-[0_25px_60px_rgba(4,9,22,0.6)] overflow-hidden relative min-h-[460px] flex flex-col justify-between" id="quiz_inner_card">
        
        {/* Top glowing accent illumination bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-sky-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          {/* Headline and Subhead */}
          <div className="space-y-2">
            <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-white leading-tight tracking-tight">
              {currentQuestion.text}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed font-normal">
              {currentQuestion.subtext || "This helps us understand your driving patterns and focus habits."}
            </p>
          </div>

          {/* Multiple choice Options list */}
          <div className="grid grid-cols-1 gap-3.5">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <motion.button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  whileHover={{ y: -2, scale: 1.008 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                  className={`relative group p-4 sm:p-5 rounded-2xl border text-left flex items-center gap-4 cursor-pointer transition-all duration-200 overflow-hidden ${
                    isSelected 
                      ? 'bg-gradient-to-r from-[#0d3468] via-[#0a2852] to-[#071c3c] border-sky-400 shadow-[0_12px_40px_rgba(14,165,233,0.35)] ring-2 ring-sky-400/60' 
                      : 'bg-gradient-to-r from-[#112142]/95 via-[#0e1b36]/95 to-[#0a1429]/95 border-slate-700/90 hover:border-sky-400/80 hover:bg-gradient-to-r hover:from-[#152a54] hover:to-[#112142] shadow-[0_6px_22px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(14,165,233,0.2)]'
                  }`}
                  id={`q${currentQuestion.id}_opt_${option.id}`}
                >
                  {/* Left-side active selection glowing bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-300 via-cyan-400 to-indigo-500 shadow-[0_0_14px_#38bdf8]" />
                  )}

                  {/* Left Side Icon Column */}
                  <div className={`p-3 rounded-xl shrink-0 transition-all duration-200 flex items-center justify-center ${
                    isSelected 
                      ? 'bg-gradient-to-br from-sky-400 via-cyan-400 to-blue-600 text-slate-950 font-bold shadow-[0_0_18px_rgba(56,189,248,0.7)] scale-110 ring-2 ring-sky-300/50' 
                      : 'bg-[#0a162d] border border-sky-500/25 text-sky-400 group-hover:text-white group-hover:bg-sky-950/80 group-hover:border-sky-400/60 shadow-xs group-hover:scale-105'
                  }`}>
                    {getOptionIcon(option.id)}
                  </div>

                  {/* Text Column */}
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-extrabold block text-base sm:text-lg leading-tight transition-colors ${
                        isSelected ? 'text-white' : 'text-slate-100 group-hover:text-sky-300'
                      }`}>
                        {option.text}
                      </span>
                    </div>
                    {option.subtext && (
                      <span className={`text-xs sm:text-sm block mt-1 leading-relaxed transition-colors ${
                        isSelected ? 'text-sky-100 font-medium' : 'text-slate-300 group-hover:text-slate-200'
                      }`}>
                        {option.subtext}
                      </span>
                    )}
                  </div>

                  {/* Radio / Check indicator */}
                  <div className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                    isSelected 
                      ? 'border-sky-300 bg-gradient-to-br from-sky-400 to-cyan-400 shadow-[0_0_15px_rgba(56,189,248,0.8)] scale-105' 
                      : 'border-slate-600/90 bg-[#061022] group-hover:border-sky-400 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.3)]'
                  }`}>
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-slate-950 stroke-[3]" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-700 group-hover:bg-sky-400/80 transition-colors" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* 3. Action Buttons - Back and Next */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="px-5 py-3 rounded-xl border border-slate-800 bg-[#10192a]/80 text-slate-300 font-semibold text-sm hover:bg-slate-800 hover:text-white hover:border-slate-700 shadow-xs cursor-pointer flex items-center gap-1.5 transition-all duration-200"
            id="quiz_back_btn"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentQuestionIdx === 0 ? "Back to intro" : "Back"}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOptionId}
            className={`flex-1 py-3.5 px-6 rounded-xl font-black text-sm uppercase tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
              selectedOptionId
                ? 'bg-yellow-400 hover:bg-yellow-300 text-slate-950 border-2 border-yellow-200 shadow-[0_0_25px_rgba(250,204,21,0.6)] hover:shadow-[0_0_35px_rgba(250,204,21,0.85)] hover:-translate-y-0.5 active:translate-y-0 active:scale-98 cursor-pointer'
                : 'bg-slate-800/50 text-slate-500 border border-slate-800/80 cursor-not-allowed opacity-60 shadow-xs'
            }`}
            id="quiz_next_btn"
          >
            <span>{isLastQuestion ? "Calculate My Score" : "Continue Simulation"}</span>
            <ArrowRight className={`w-4 h-4 stroke-[3] ${selectedOptionId ? 'text-slate-950' : 'text-slate-500'}`} />
          </button>
        </div>

      </div>

      {/* 4. Mini Safety Reassurance Statement */}
      <div className="mt-6 flex items-center gap-2.5 px-4 text-xs text-slate-400 justify-center">
        <Lock className="w-3.5 h-3.5 text-sky-400/80" />
        <span>Your information is safe. Your responses are kept private and processed locally.</span>
      </div>

    </div>
  );
}

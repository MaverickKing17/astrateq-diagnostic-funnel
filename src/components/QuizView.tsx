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
    <div className="max-w-3xl mx-auto px-2 sm:px-4 py-6 font-sans" id="quiz_view_container">
      
      {/* 1. Header with progress indicator */}
      <div className="mb-6 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider">
          <span className="text-cyan-300 font-extrabold flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-300 opacity-90"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300 shadow-[0_0_10px_#22d3ee]"></span>
            </span>
            ASTRATEQ GADGETS DRIVER SIMULATION
          </span>
          <span className="text-slate-200 bg-slate-800/90 px-3 py-1 rounded-full border border-slate-700 shadow-xs">
            Question <strong className="text-cyan-300">{currentQuestionIdx + 1}</strong> of {totalQuestions}
          </span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-2.5 bg-slate-800/90 rounded-full border border-slate-700/80 overflow-hidden p-0.5 shadow-inner">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-full shadow-[0_0_14px_rgba(34,211,238,0.7)]"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* 2. Slide Animating Question Card */}
      <div className="relative bg-[#0b172a] p-6 sm:p-9 rounded-3xl border-2 border-cyan-400/40 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden min-h-[480px] flex flex-col justify-between backdrop-blur-md" id="quiz_inner_card">
        
        {/* Top glowing accent illumination bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400" />
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-6 relative z-10">
          
          {/* Question Counter Pill & Headline */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/90 border border-cyan-400/50 text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>STAGE {currentQuestionIdx + 1} OF {totalQuestions}</span>
            </div>

            <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-white leading-tight tracking-tight drop-shadow-xs">
              {currentQuestion.text}
            </h2>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl text-slate-300">
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
                  className={`relative group p-4 sm:p-5 rounded-2xl border-2 text-left flex items-center gap-4 cursor-pointer transition-all duration-200 overflow-hidden ${
                    isSelected 
                      ? 'bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border-cyan-400 shadow-[0_10px_30px_rgba(34,211,238,0.35)] ring-2 ring-cyan-400/50' 
                      : 'bg-slate-800/90 hover:bg-slate-800 border-slate-700/90 hover:border-cyan-400/80 shadow-md hover:shadow-xl'
                  }`}
                  id={`q${currentQuestion.id}_opt_${option.id}`}
                >
                  {/* Left-side active selection glowing bar */}
                  {isSelected && (
                    <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-cyan-300 via-sky-400 to-emerald-400 shadow-[0_0_15px_rgba(34,211,238,1)]" />
                  )}

                  {/* Left Side Icon Column */}
                  <div className={`p-3.5 rounded-xl shrink-0 transition-all duration-200 flex items-center justify-center ${
                    isSelected 
                      ? 'bg-cyan-400 text-slate-950 font-black shadow-[0_0_18px_rgba(34,211,238,0.8)] scale-110' 
                      : 'bg-slate-900 border border-slate-700 text-cyan-300 group-hover:text-white group-hover:bg-cyan-950/80 group-hover:border-cyan-400 shadow-xs'
                  }`}>
                    {getOptionIcon(option.id)}
                  </div>

                  {/* Text Column */}
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className={`font-extrabold block text-base sm:text-lg leading-tight transition-colors ${
                        isSelected ? 'text-white font-black' : 'text-white group-hover:text-cyan-300'
                      }`}>
                        {option.text}
                      </span>
                    </div>
                    {option.subtext && (
                      <span className={`text-xs sm:text-sm block mt-1 leading-relaxed transition-colors ${
                        isSelected ? 'text-cyan-100 font-medium' : 'text-slate-300 group-hover:text-slate-200'
                      }`}>
                        {option.subtext}
                      </span>
                    )}
                  </div>

                  {/* Radio / Check indicator */}
                  <div className={`w-6 h-6 rounded-full border-2 shrink-0 flex items-center justify-center transition-all ${
                    isSelected 
                      ? 'border-cyan-200 bg-cyan-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.9)] scale-110' 
                      : 'border-slate-500 bg-slate-900 group-hover:border-cyan-400'
                  }`}>
                    {isSelected ? (
                      <CheckCircle2 className="w-4 h-4 text-slate-950 stroke-[3]" />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* 3. Action Buttons - Back and Next */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={handleBack}
            className="w-full sm:w-auto px-5 py-3.5 rounded-xl border-2 border-slate-700 bg-slate-800/90 hover:bg-slate-700 text-slate-100 font-extrabold text-sm hover:border-slate-500 shadow-sm cursor-pointer flex items-center justify-center gap-2 transition-all duration-200"
            id="quiz_back_btn"
          >
            <ArrowLeft className="w-4 h-4 text-slate-200" />
            <span>{currentQuestionIdx === 0 ? "Back to intro" : "Back"}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOptionId}
            className={`w-full sm:flex-1 py-3.5 px-6 rounded-xl font-black text-sm uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 ${
              selectedOptionId
                ? 'bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 border-2 border-orange-200 shadow-[0_0_30px_rgba(249,115,22,0.75)] hover:shadow-[0_0_40px_rgba(249,115,22,0.95)] hover:scale-[1.01] active:scale-98 cursor-pointer'
                : 'bg-slate-800/90 text-slate-300 border-2 border-slate-700/80 cursor-not-allowed font-bold shadow-xs'
            }`}
            id="quiz_next_btn"
          >
            <span>
              {selectedOptionId 
                ? (isLastQuestion ? "Calculate My Score" : "Continue Simulation") 
                : "Select an option to continue"}
            </span>
            <ArrowRight className={`w-4 h-4 stroke-[3] ${selectedOptionId ? 'text-slate-950' : 'text-slate-400'}`} />
          </button>
        </div>

      </div>

      {/* 4. Mini Safety Reassurance Statement */}
      <div className="mt-6 flex items-center gap-2.5 px-4 text-xs font-semibold text-slate-200 justify-center bg-slate-900/90 border border-slate-800 py-3 rounded-xl shadow-xs">
        <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
        <span>Your information is safe. Your responses are kept strictly private and processed on-device.</span>
      </div>

    </div>
  );
}

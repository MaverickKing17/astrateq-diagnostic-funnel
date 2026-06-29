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

      // Q4: Low-light / night conditions
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
      case 'occasionally': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'frequently': return <ShieldAlert className="w-5 h-5 text-rose-500" />;

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
    <div className="max-w-2xl mx-auto px-4 py-10 font-sans" id="quiz_view_container">
      
      {/* 1. Header with progress indicator */}
      <div className="mb-8 space-y-3">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 font-semibold uppercase">
          <span>ASTRATEQ driver simulation</span>
          <span>Question {currentQuestionIdx + 1} of {totalQuestions}</span>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-brand-primary to-brand-secondary rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progressPct}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* 2. Slide Animating Question Card */}
      <div className="dashboard-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 relative min-h-[460px] flex flex-col justify-between">
        
        <div className="space-y-6">
          {/* Headline and Subhead */}
          <div className="space-y-2">
            <h2 className="font-display font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
              {currentQuestion.text}
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              {currentQuestion.subtext || "This helps us understand your driving patterns and focus habits."}
            </p>
          </div>

          {/* Multiple choice Options list */}
          <div className="grid grid-cols-1 gap-3.5">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedOptionId === option.id;
              return (
                <button
                  key={option.id}
                  onClick={() => handleSelectOption(option.id)}
                  className={`group p-4 rounded-xl border text-left flex items-start gap-3.5 cursor-pointer transition-all ${
                    isSelected 
                      ? 'bg-sky-50/55 border-brand-primary/40 ring-1 ring-brand-primary/20 shadow-sm' 
                      : 'bg-slate-50/40 hover:bg-slate-50/90 border-slate-200'
                  }`}
                  id={`q${currentQuestion.id}_opt_${option.id}`}
                >
                  {/* Left Side Icon Column */}
                  <div className={`p-2 rounded-lg shrink-0 transition-colors ${
                    isSelected 
                      ? 'bg-brand-primary text-white' 
                      : 'bg-white border border-slate-200 text-slate-500 group-hover:text-slate-700'
                  }`}>
                    {getOptionIcon(option.id)}
                  </div>

                  {/* Text Column */}
                  <div className="flex-1 min-w-0">
                    <span className={`font-semibold block text-sm sm:text-base leading-tight ${
                      isSelected ? 'text-brand-primary' : 'text-slate-800'
                    }`}>
                      {option.text}
                    </span>
                    {option.subtext && (
                      <span className="text-xs text-slate-500 block mt-1 leading-snug">
                        {option.subtext}
                      </span>
                    )}
                  </div>

                  {/* Radio indicator */}
                  <div className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center ${
                    isSelected ? 'border-brand-primary bg-brand-primary' : 'border-slate-300 bg-white'
                  }`}>
                    {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3. Action Buttons - Back and Next */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
          <button
            onClick={handleBack}
            className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium text-sm hover:bg-slate-50 cursor-pointer flex items-center gap-1.5 transition-colors"
            id="quiz_back_btn"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{currentQuestionIdx === 0 ? "Back to intro" : "Back"}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedOptionId}
            className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm cursor-pointer transition-all flex items-center justify-center gap-2 ${
              selectedOptionId
                ? 'bg-brand-primary hover:bg-sky-600 text-white shadow-md'
                : 'bg-slate-100 text-slate-400 cursor-not-allowed'
            }`}
            id="quiz_next_btn"
          >
            <span>{isLastQuestion ? "Calculate My Score" : "Next Question"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 4. Mini Safety Reassurance Statement */}
      <div className="mt-6 flex items-center gap-2.5 px-4 text-xs text-slate-500 justify-center">
        <Lock className="w-3.5 h-3.5 text-slate-400" />
        <span>Your information is safe. Your responses are kept private and processed locally.</span>
      </div>

    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Clock, CheckCircle, XCircle, ArrowRight, HelpCircle, Award, Star } from 'lucide-react';
import { Question, AnswerRecord, Lecture } from '../types';
import { LECTURES } from '../data/questions';

interface QuizControllerProps {
  questions: Question[];
  lectureId: number | 'STARRED' | null; // null means combined exam, 'STARRED' means playlist
  onFinished: (records: AnswerRecord[]) => void;
  onQuit: () => void;
  starredIds: string[];
  onToggleStar: (questionId: string) => void;
}

export default function QuizController({ questions, lectureId, onFinished, onQuit, starredIds, onToggleStar }: QuizControllerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds per question
  const [records, setRecords] = useState<AnswerRecord[]>([]);
  
  // Keep track of startTime for each question to calculate timeTaken
  const questionStartTimeRef = useRef<number>(Date.now());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const currentQuestion = questions[currentIndex];
  const associatedLecture = LECTURES.find(l => l.id === currentQuestion.lectureId);
  const isStarred = starredIds.includes(currentQuestion.id);

  // Set up timer
  useEffect(() => {
    // Reset timer for new question
    setTimeLeft(30);
    setIsAnswered(false);
    setSelectedOption(null);
    questionStartTimeRef.current = Date.now();

    // Clear old interval
    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          // Time expired! Skip question
          handleAnswer(-1, true); // -1 stands for timeout
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handleAnswer = (optionIdx: number, isTimeout = false) => {
    if (isAnswered) return; // Prevent double answering

    // Clear timer
    if (timerRef.current) clearInterval(timerRef.current);

    setSelectedOption(optionIdx);
    setIsAnswered(true);

    const isCorrect = optionIdx === currentQuestion.correctAnswer;
    const timeTaken = Math.round((Date.now() - questionStartTimeRef.current) / 1000);

    const newRecord: AnswerRecord = {
      questionId: currentQuestion.id,
      selectedOption: optionIdx,
      isCorrect,
      timeTaken: Math.min(timeTaken, 30) // cap at 30
    };

    setRecords(prev => [...prev, newRecord]);
  };

  const handleNext = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Completed all questions!
      onFinished(records);
    }
  };

  // Color logic for timer indicator
  const getTimerColor = () => {
    if (timeLeft > 15) return 'text-emerald-500';
    if (timeLeft > 7) return 'text-amber-500';
    return 'text-rose-500 animate-pulse';
  };

  const getTimerBarBg = () => {
    if (timeLeft > 15) return 'bg-emerald-500';
    if (timeLeft > 7) return 'bg-amber-500';
    return 'bg-rose-500';
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 md:py-10">
      {/* Top Breadcrumb & Status */}
      <div className="flex items-center justify-between gap-4 mb-6 border-b-2 border-[#2D3436]/10 pb-4">
        <div>
          <span className="text-[10px] font-bold font-mono px-3 py-1.5 rounded-full bg-white border-2 border-[#FFE66D] text-[#2D3436] uppercase tracking-wider shadow-sm">
            {lectureId ? `Lecture ${lectureId} Quiz` : 'Combined Final Exam'}
          </span>
          <h2 className="text-sm font-black text-gray-500 mt-2 font-sans">
            Question {currentIndex + 1} of {questions.length}
          </h2>
        </div>

        <button
          onClick={onQuit}
          className="text-xs font-black text-[#2D3436]/60 hover:text-[#FF6B6B] transition-colors cursor-pointer"
        >
          Quit Quiz
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2.5 bg-white border-2 border-[#2D3436]/10 rounded-full overflow-hidden mb-8 shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
          className="h-full bg-[#4ECDC4]"
        />
      </div>

      {/* Question Card Container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-[2rem] p-6 md:p-8 border-4 border-[#2D3436] shadow-xl relative overflow-hidden"
        >
          {/* Decorative book corner tag */}
          {associatedLecture && (
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${associatedLecture.color} opacity-[0.03] rounded-bl-full pointer-events-none`} />
          )}

          {/* Question Title Section */}
          <div className="flex items-start gap-4 mb-8">
            {/* Timer visual */}
            <div className="shrink-0 flex flex-col items-center justify-center p-3 rounded-2xl bg-[#FFE66D]/15 border-2 border-[#2D3436] w-16 h-16 relative shadow-sm">
              <Clock size={16} className={`mb-1 ${getTimerColor()}`} />
              <span className={`text-lg font-mono font-bold ${getTimerColor()}`}>
                {timeLeft}s
              </span>
              {/* Micro bar on timer frame */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-200 overflow-hidden rounded-b-2xl">
                <div className={`h-full ${getTimerBarBg()} transition-all duration-1000`} style={{ width: `${(timeLeft / 30) * 100}%` }} />
              </div>
            </div>

            <div className="grow">
              <div className="flex items-center justify-between gap-2">
                {associatedLecture && (
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">
                    {associatedLecture.title}
                  </span>
                )}
                <button
                  onClick={() => onToggleStar(currentQuestion.id)}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg border-2 border-[#2D3436] bg-white hover:bg-[#FFE66D]/20 transition-all cursor-pointer shadow-sm active:scale-95 text-xs font-bold shrink-0"
                  title={isStarred ? "Unstar Question" : "Star Question"}
                >
                  <Star size={13} className={`stroke-[2.5] ${isStarred ? 'fill-[#FFE66D] text-amber-500' : 'text-gray-400'}`} />
                  <span className="text-[9px] font-black uppercase font-display hidden sm:inline ml-1">
                    {isStarred ? "Starred" : "Star"}
                  </span>
                </button>
              </div>
              <h3 className="text-lg md:text-xl font-black text-[#2D3436] leading-snug font-display mt-1.5">
                {currentQuestion.question}
              </h3>
            </div>
          </div>

          {/* Multiple Choice Options */}
          <div className="space-y-3.5 mb-8">
            {currentQuestion.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectOpt = idx === currentQuestion.correctAnswer;
              
              let optionStyle = "border-2 border-[#2D3436] bg-white text-[#2D3436] hover:bg-[#FFE66D]/15 font-semibold shadow-sm hover:translate-y-[-2px]";
              let iconElement = null;

              if (isAnswered) {
                if (isCorrectOpt) {
                  // highlight green
                  optionStyle = "border-4 border-[#4ECDC4] bg-[#4ECDC4]/10 text-[#2D3436] font-bold shadow-md";
                  iconElement = <CheckCircle size={18} className="text-[#4ECDC4] shrink-0" />;
                } else if (isSelected) {
                  // selected wrong opt, highlight red
                  optionStyle = "border-4 border-[#FF6B6B] bg-[#FF6B6B]/15 text-[#2D3436] font-bold shadow-md";
                  iconElement = <XCircle size={18} className="text-[#FF6B6B] shrink-0" />;
                } else {
                  // regular unselected, dim down slightly
                  optionStyle = "border-2 border-gray-200 bg-gray-50/50 text-gray-400 opacity-60 pointer-events-none";
                }
              }

              return (
                <motion.button
                  key={idx}
                  whileHover={!isAnswered ? { scale: 1.01, x: 4 } : {}}
                  whileTap={!isAnswered ? { scale: 0.99 } : {}}
                  onClick={() => handleAnswer(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border flex items-center justify-between gap-4 transition-all duration-200 cursor-pointer ${optionStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-lg border-2 border-[#2D3436] flex items-center justify-center text-xs font-black font-mono shrink-0
                      ${isSelected ? 'bg-[#FF6B6B] text-white' : 'bg-white text-[#2D3436]'}
                    `}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm md:text-base leading-relaxed font-sans">{option}</span>
                  </div>
                  {iconElement}
                </motion.button>
              );
            })}
          </div>

          {/* Answer Feedback / Explanation Drawer */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden border-t-2 border-[#2D3436]/10 pt-6 mt-6"
              >
                <div className="p-5 rounded-2xl bg-[#FFE66D]/35 border-l-8 border-[#FFE66D] text-[#2D3436] font-medium shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <HelpCircle size={16} className="text-[#FF6B6B]" />
                    <h4 className="text-xs font-black font-display text-[#2D3436] uppercase tracking-wider">
                      Academic Rule & Explanation
                    </h4>
                  </div>
                  
                  {/* Explanation markup */}
                  <p className="text-[#2D3436]/90 text-sm leading-relaxed font-sans font-medium">
                    {currentQuestion.explanation}
                  </p>

                  {/* Feedback summary badge */}
                  <div className="flex items-center gap-1.5 mt-4 text-xs font-bold font-mono text-gray-500 uppercase">
                    <Award size={14} className="text-[#FF6B6B]" />
                    <span>Reference Week: {associatedLecture?.week} ({associatedLecture?.title})</span>
                  </div>
                </div>

                {/* Next Button */}
                <div className="flex justify-end mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3.5 bg-[#FF6B6B] hover:bg-[#ff5252] text-white border-b-4 border-red-700 font-display font-black text-sm rounded-xl shadow-md shadow-red-200/50 cursor-pointer transition-colors"
                  >
                    <span>{currentIndex + 1 < questions.length ? 'Next Question' : 'View Report'}</span>
                    <ArrowRight size={14} />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

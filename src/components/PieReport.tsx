import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Clock, AlertTriangle, Eye, RotateCcw, Filter, CheckCircle, XCircle } from 'lucide-react';
import { AnswerRecord, Question } from '../types';

interface PieReportProps {
  records: AnswerRecord[];
  questions: Question[];
  onRestart: () => void;
  onReview: (filter: 'ALL' | 'CORRECT' | 'INCORRECT' | 'SKIPPED') => void;
}

export default function PieReport({ records, questions, onRestart, onReview }: PieReportProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const total = records.length || 1;
  const correctCount = records.filter(r => r.isCorrect).length;
  const skippedCount = records.filter(r => r.selectedOption === -1).length;
  const incorrectCount = total - correctCount - skippedCount;

  // Percentages
  const pctCorrect = Math.round((correctCount / total) * 100);
  const pctIncorrect = Math.round((incorrectCount / total) * 100);
  const pctSkipped = Math.round((skippedCount / total) * 100);

  // Score description based on performance
  const scoreRatio = correctCount / total;
  let gradeLetter = 'F';
  let gradeComment = 'Review the lectures and try again!';
  let gradeBg = 'bg-rose-50 border-rose-100 text-rose-800';

  if (scoreRatio >= 0.85) {
    gradeLetter = 'A';
    gradeComment = 'Outstanding academic writing proficiency!';
    gradeBg = 'bg-[#4ECDC4]/10 border-4 border-[#4ECDC4] text-[#2D3436]';
  } else if (scoreRatio >= 0.7) {
    gradeLetter = 'B';
    gradeComment = 'Great job! Strong command of academic conventions.';
    gradeBg = 'bg-[#FFE66D]/20 border-4 border-[#FFE66D] text-[#2D3436]';
  } else if (scoreRatio >= 0.5) {
    gradeLetter = 'C';
    gradeComment = 'Passable, but there is room for grammatical adjustment.';
    gradeBg = 'bg-[#FF6B6B]/10 border-4 border-[#FF6B6B] text-[#2D3436]';
  } else {
    gradeBg = 'bg-[#FF6B6B]/10 border-4 border-[#FF6B6B] text-[#2D3436]';
  }

  // Calculate cumulative offsets for animated SVG Donut Chart
  // Circumference of circle with r = 50 is 2 * PI * 50 = 314.16
  const r = 50;
  const circ = 2 * Math.PI * r; // 314.159

  const slices = [
    { label: 'Correct', count: correctCount, pct: pctCorrect, color: 'stroke-[#4ECDC4]', fill: 'bg-[#4ECDC4]', text: 'text-[#4ECDC4]', filterType: 'CORRECT' as const },
    { label: 'Incorrect', count: incorrectCount, pct: pctIncorrect, color: 'stroke-[#FF6B6B]', fill: 'bg-[#FF6B6B]', text: 'text-[#FF6B6B]', filterType: 'INCORRECT' as const },
    { label: 'Skipped/Timeout', count: skippedCount, pct: pctSkipped, color: 'stroke-[#FFE66D]', fill: 'bg-[#FFE66D]', text: 'text-[#FFE66D]/90', filterType: 'SKIPPED' as const }
  ].filter(slice => slice.count > 0);

  let cumulativeOffset = 0;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* GPA & Overall Score Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-black text-[#2D3436] font-display">
          Academic Writing Performance Report
        </h2>
        <p className="text-gray-500 text-sm font-medium mt-1">
          Review your results, analyze your conceptual weaknesses, and master your writing skills.
        </p>
      </motion.div>

      {/* Main Results Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch mb-12">
        {/* Left Side: Animated Pie Chart Panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:col-span-6 bg-white rounded-[2rem] p-6 md:p-8 border-4 border-[#2D3436] shadow-xl flex flex-col items-center justify-center relative"
        >
          <h3 className="font-display font-black text-[#2D3436]/60 text-xs uppercase tracking-widest mb-6">
            Response Distribution
          </h3>

          {/* SVG Pie Chart Section */}
          <div className="relative w-56 h-56 flex items-center justify-center mb-6">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
              {/* Background circle base */}
              <circle
                cx="60"
                cy="60"
                r={r}
                fill="transparent"
                stroke="#2D3436"
                strokeOpacity="0.06"
                strokeWidth="12"
              />

              {/* Render animated donut slices */}
              {slices.map((slice, idx) => {
                const strokeLength = circ * (slice.pct / 100);
                const strokeOffset = circ - strokeLength + cumulativeOffset;
                cumulativeOffset -= strokeLength;

                const isHovered = hoveredIndex === idx;

                return (
                  <motion.circle
                    key={slice.label}
                    cx="60"
                    cy="60"
                    r={r}
                    fill="transparent"
                    className={`${slice.color} transition-all duration-300`}
                    strokeWidth={isHovered ? "16" : "12"}
                    strokeDasharray={`${strokeLength} ${circ - strokeLength}`}
                    strokeDashoffset={strokeOffset}
                    strokeLinecap="round"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ originX: "60px", originY: "60px" }}
                    animate={{ strokeWidth: isHovered ? 16 : 12 }}
                  />
                );
              })}
            </svg>

            {/* Inner Dashboard Reading */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-3xl font-black text-[#2D3436] font-display">
                {Math.round((correctCount / total) * 100)}%
              </span>
              <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest font-sans mt-0.5">
                Accuracy Score
              </span>
            </div>
          </div>

          {/* Pie Interactive Legend */}
          <div className="w-full space-y-2.5">
            {slices.map((slice, idx) => (
              <button
                key={slice.label}
                onClick={() => onReview(slice.filterType)}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-[#FFE66D]/15 transition-colors text-left border-2 border-[#2D3436]/5 cursor-pointer ${hoveredIndex === idx ? 'bg-[#FFE66D]/15 border-[#2D3436]/20' : ''}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-3.5 h-3.5 rounded-full ${slice.fill} border border-[#2D3436]/25`} />
                  <span className="text-sm text-[#2D3436] font-sans font-bold">{slice.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-mono font-black ${slice.text}`}>
                    {slice.count} answers
                  </span>
                  <span className="text-[10px] bg-[#2D3436]/5 text-[#2D3436] font-black font-mono px-2 py-0.5 rounded border border-[#2D3436]/15">
                    {slice.pct}%
                  </span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Detailed Summary Scorecard */}
        <div className="md:col-span-6 flex flex-col gap-6">
          {/* Grade summary letter banner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`rounded-3xl p-6 border-4 border-[#2D3436] flex items-center gap-5 shadow-lg ${gradeBg}`}
          >
            <div className="w-20 h-20 rounded-2xl bg-white border-4 border-[#2D3436] flex items-center justify-center text-4xl font-black font-display shadow-md shrink-0">
              {gradeLetter}
            </div>
            <div>
              <span className="text-[10px] font-black font-mono tracking-widest uppercase opacity-75">
                Semester Equivalent Grade
              </span>
              <h3 className="text-lg font-black font-display mt-0.5 leading-snug">
                {gradeComment}
              </h3>
              <p className="text-xs opacity-90 mt-1 font-sans font-semibold">
                You correctly answered {correctCount} out of {total} question{total > 1 ? 's' : ''}.
              </p>
            </div>
          </motion.div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border-4 border-[#2D3436] p-4 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
              <span className="text-[10px] font-black text-gray-400 font-mono tracking-wider uppercase block">
                Total Questions
              </span>
              <span className="text-2xl font-black text-[#2D3436] font-display block mt-1">
                {total}
              </span>
            </div>
            <div className="bg-white border-4 border-[#2D3436] p-4 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
              <span className="text-[10px] font-black text-gray-400 font-mono tracking-wider uppercase block">
                Correct Answers
              </span>
              <span className="text-2xl font-black text-[#4ECDC4] font-display block mt-1">
                {correctCount}
              </span>
            </div>
            <div className="bg-white border-4 border-[#2D3436] p-4 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
              <span className="text-[10px] font-black text-gray-400 font-mono tracking-wider uppercase block">
                Incorrect Answers
              </span>
              <span className="text-2xl font-black text-[#FF6B6B] font-display block mt-1">
                {incorrectCount}
              </span>
            </div>
            <div className="bg-white border-4 border-[#2D3436] p-4 rounded-2xl shadow-sm hover:translate-y-[-2px] transition-all">
              <span className="text-[10px] font-black text-gray-400 font-mono tracking-wider uppercase block">
                Skipped/Timed Out
              </span>
              <span className="text-2xl font-black text-[#2D3436]/65 font-display block mt-1">
                {skippedCount}
              </span>
            </div>
          </div>

          {/* Guidelines on next steps */}
          <div className="bg-[#FFE66D] border-4 border-[#2D3436] p-6 rounded-[2rem] grow flex flex-col justify-between shadow-lg">
            <div>
              <h4 className="font-display font-black text-[#2D3436] text-sm uppercase tracking-tight mb-2">
                What would you like to do next?
              </h4>
              <p className="text-[#2D3436]/90 text-xs leading-relaxed font-sans font-semibold mb-4">
                You can filter and review your specific incorrect, correct, or skipped questions to analyze explanations in detail. Or, go back to the Shelf to study another lecture.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onReview('ALL')}
                className="flex-grow flex items-center justify-center gap-2 py-3 px-4 bg-[#FF6B6B] hover:bg-[#ff5252] border-b-4 border-red-700 text-white font-display font-black text-xs rounded-xl cursor-pointer transition-all shadow-md shadow-red-200/50"
              >
                <Eye size={14} className="stroke-[2.5]" />
                Review All Questions
              </button>

              <button
                onClick={onRestart}
                className="flex-grow flex items-center justify-center gap-2 py-3 px-4 bg-white border-2 border-[#2D3436] text-[#2D3436] hover:bg-gray-100 font-display font-black text-xs rounded-xl cursor-pointer transition-all"
              >
                <RotateCcw size={14} className="stroke-[2.5]" />
                Study / Retake Quiz
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Review Direct Filter Actions Drawer */}
      <div className="bg-[#FFFBF2] rounded-2xl p-4 border-4 border-[#2D3436] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-2.5 text-[#2D3436]/70">
          <Filter size={15} className="stroke-[2.5]" />
          <span className="text-xs font-black font-display uppercase tracking-wider text-[#2D3436]">
            Quick Review Filters:
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onReview('CORRECT')}
            disabled={correctCount === 0}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border-2 border-[#2D3436] hover:bg-[#4ECDC4]/10 text-[#2D3436] disabled:opacity-50 disabled:pointer-events-none rounded-lg text-xs font-bold cursor-pointer transition-colors"
          >
            <CheckCircle size={12} className="text-[#4ECDC4] stroke-[2.5]" />
            Correct ({correctCount})
          </button>
          <button
            onClick={() => onReview('INCORRECT')}
            disabled={incorrectCount === 0}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border-2 border-[#2D3436] hover:bg-[#FF6B6B]/15 text-[#2D3436] disabled:opacity-50 disabled:pointer-events-none rounded-lg text-xs font-bold cursor-pointer transition-colors"
          >
            <XCircle size={12} className="text-[#FF6B6B] stroke-[2.5]" />
            Wrong ({incorrectCount})
          </button>
          <button
            onClick={() => onReview('SKIPPED')}
            disabled={skippedCount === 0}
            className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white border-2 border-[#2D3436] hover:bg-[#FFE66D]/35 text-[#2D3436] disabled:opacity-50 disabled:pointer-events-none rounded-lg text-xs font-bold cursor-pointer transition-colors"
          >
            <Clock size={12} className="text-[#2D3436]/60 stroke-[2.5]" />
            Skipped ({skippedCount})
          </button>
        </div>
      </div>
    </div>
  );
}

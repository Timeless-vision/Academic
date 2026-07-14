import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle, XCircle, Clock, Award, BookOpen, AlertTriangle } from 'lucide-react';
import { AnswerRecord, Question } from '../types';
import { LECTURES } from '../data/questions';

interface ReviewControllerProps {
  records: AnswerRecord[];
  questions: Question[];
  initialFilter: 'ALL' | 'CORRECT' | 'INCORRECT' | 'SKIPPED';
  onBackToReport: () => void;
}

export default function ReviewController({ records, questions, initialFilter, onBackToReport }: ReviewControllerProps) {
  const [filter, setFilter] = useState<'ALL' | 'CORRECT' | 'INCORRECT' | 'SKIPPED'>(initialFilter);

  // Filter the questions based on the records and selection
  const filteredQuestions = questions.filter(q => {
    const record = records.find(r => r.questionId === q.id);
    if (!record) return false;

    if (filter === 'CORRECT') return record.isCorrect;
    if (filter === 'INCORRECT') return !record.isCorrect && record.selectedOption !== -1;
    if (filter === 'SKIPPED') return record.selectedOption === -1;
    return true; // ALL
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <button
            onClick={onBackToReport}
            className="text-xs font-bold text-[#2D3436]/60 hover:text-[#FF6B6B] transition-colors uppercase tracking-wider mb-2 flex items-center gap-1 cursor-pointer font-display"
          >
            ← Back to Report Card
          </button>
          <h2 className="text-2xl font-black text-[#2D3436] font-display">
            Academic Performance Review
          </h2>
          <p className="text-gray-500 text-xs font-sans font-medium mt-0.5">
            Carefully inspect each question's standard grammar rules, slide citations, and expert explanations.
          </p>
        </div>

        {/* Filter Selection Tab */}
        <div className="flex bg-white p-1 rounded-xl self-start sm:self-auto border-2 border-[#2D3436]/10 shadow-sm">
          {(['ALL', 'CORRECT', 'INCORRECT', 'SKIPPED'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3 py-1.5 rounded-lg text-xs font-black font-display uppercase transition-all cursor-pointer ${filter === tab ? 'bg-[#FFE66D] text-[#2D3436] border-2 border-[#2D3436] shadow-sm' : 'text-[#2D3436]/60 hover:text-[#2D3436]'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Review List */}
      <div className="space-y-6">
        {filteredQuestions.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-[2rem] border-4 border-[#2D3436] p-8 shadow-md"
          >
            <AlertTriangle size={32} className="mx-auto text-[#FF6B6B] mb-3" />
            <h3 className="font-display font-black text-[#2D3436] text-base">
              No questions found
            </h3>
            <p className="text-gray-500 text-xs mt-1 max-w-sm mx-auto leading-relaxed font-semibold">
              No questions matched the selected filter in your current quiz response record.
            </p>
          </motion.div>
        ) : (
          <AnimatePresence mode="wait">
            {filteredQuestions.map((q, idx) => {
              const record = records.find(r => r.questionId === q.id)!;
              const associatedLecture = LECTURES.find(l => l.id === q.lectureId);
              
              // Status Badge
              let statusBadge = null;
              if (record.selectedOption === -1) {
                statusBadge = (
                  <span className="flex items-center gap-1.5 text-[10px] font-black font-mono text-[#2D3436] px-2.5 py-1 bg-white border-2 border-[#2D3436] rounded-full uppercase tracking-wider">
                    <Clock size={11} className="stroke-[2.5]" />
                    Timed Out / Skipped
                  </span>
                );
              } else if (record.isCorrect) {
                statusBadge = (
                  <span className="flex items-center gap-1.5 text-[10px] font-black font-mono text-[#2D3436] px-2.5 py-1 bg-[#4ECDC4]/15 border-2 border-[#4ECDC4] rounded-full uppercase tracking-wider">
                    <CheckCircle size={11} className="text-[#4ECDC4] stroke-[2.5]" />
                    Correct Answer
                  </span>
                );
              } else {
                statusBadge = (
                  <span className="flex items-center gap-1.5 text-[10px] font-black font-mono text-[#2D3436] px-2.5 py-1 bg-[#FF6B6B]/15 border-2 border-[#FF6B6B] rounded-full uppercase tracking-wider">
                    <XCircle size={11} className="text-[#FF6B6B] stroke-[2.5]" />
                    Incorrect Answer
                  </span>
                );
              }

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="bg-white rounded-[2rem] p-6 border-4 border-[#2D3436] shadow-md"
                >
                  {/* Item top row: Status and Lecture tag */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4 border-b-2 border-[#2D3436]/10 pb-3">
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest font-mono">
                      Review Item {idx + 1} • {associatedLecture?.week} ({associatedLecture?.title})
                    </span>
                    {statusBadge}
                  </div>

                  {/* Question Prompt */}
                  <h4 className="text-base font-black text-[#2D3436] font-display mb-4">
                    {q.question}
                  </h4>

                  {/* Options review block */}
                  <div className="space-y-2 mb-4">
                    {q.options.map((opt, optIdx) => {
                      const isCorrectOpt = optIdx === q.correctAnswer;
                      const isSelectedOpt = optIdx === record.selectedOption;

                      let optStyle = "border-2 border-gray-200 bg-gray-50/50 text-[#2D3436]";
                      if (isCorrectOpt) {
                        optStyle = "border-4 border-[#4ECDC4] bg-[#4ECDC4]/10 text-[#2D3436] font-bold";
                      } else if (isSelectedOpt && !record.isCorrect) {
                        optStyle = "border-4 border-[#FF6B6B] bg-[#FF6B6B]/10 text-[#2D3436] font-bold";
                      }

                      return (
                        <div
                          key={optIdx}
                          className={`p-3 rounded-lg border text-xs font-sans flex items-center justify-between gap-3 ${optStyle}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className={`w-5 h-5 rounded border-2 border-[#2D3436] flex items-center justify-center text-[10px] font-black font-mono shrink-0
                              ${isCorrectOpt ? 'bg-[#4ECDC4] text-white' : isSelectedOpt ? 'bg-[#FF6B6B] text-white' : 'bg-white text-[#2D3436]'}
                            `}>
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="font-semibold">{opt}</span>
                          </div>
                          {isCorrectOpt && <span className="text-[10px] text-[#4ECDC4] uppercase font-black font-mono tracking-wider">Correct Option</span>}
                          {isSelectedOpt && !record.isCorrect && <span className="text-[10px] text-[#FF6B6B] uppercase font-black font-mono tracking-wider">Your Pick</span>}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation panel */}
                  <div className="bg-[#FFE66D]/30 border-l-8 border-[#FFE66D] p-4 rounded-r-xl">
                    <div className="flex items-center gap-1.5 text-xs font-black text-[#2D3436] uppercase tracking-wider font-display mb-1.5">
                      <Award size={13} className="text-[#FF6B6B] stroke-[2.5]" />
                      <span>Conceptual Explanation</span>
                    </div>
                    <p className="text-xs text-[#2D3436]/90 leading-relaxed font-sans font-medium">
                      {q.explanation}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        )}
      </div>

      {/* Back button Footer */}
      <div className="mt-8 flex justify-center border-t-2 border-[#2D3436]/10 pt-6">
        <button
          onClick={onBackToReport}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#FF6B6B] hover:bg-[#ff5252] border-b-4 border-red-700 text-white font-display font-black text-sm rounded-xl shadow-md shadow-red-200/50 cursor-pointer transition-all"
        >
          <ArrowLeft size={14} className="stroke-[2.5]" />
          <span>Back to Performance Summary</span>
        </button>
      </div>
    </div>
  );
}

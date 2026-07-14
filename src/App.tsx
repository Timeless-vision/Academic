import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, GraduationCap, Sparkles } from 'lucide-react';
import { QuizView, Question, AnswerRecord } from './types';
import { QUESTIONS } from './data/questions';

import Introduction from './components/Introduction';
import BookShelf from './components/BookShelf';
import QuizController from './components/QuizController';
import PieReport from './components/PieReport';
import ReviewController from './components/ReviewController';

export default function App() {
  const [view, setView] = useState<QuizView>('INTRO');
  const [selectedLectureId, setSelectedLectureId] = useState<number | 'STARRED' | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [quizRecords, setQuizRecords] = useState<AnswerRecord[]>([]);
  const [reviewFilter, setReviewFilter] = useState<'ALL' | 'CORRECT' | 'INCORRECT' | 'SKIPPED'>('ALL');
  
  // Starred/bookmarked questions persistence
  const [starredIds, setStarredIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ugrc210_starred_questions');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const handleToggleStar = (questionId: string) => {
    setStarredIds(prev => {
      const next = prev.includes(questionId)
        ? prev.filter(id => id !== questionId)
        : [...prev, questionId];
      try {
        localStorage.setItem('ugrc210_starred_questions', JSON.stringify(next));
      } catch (err) {
        console.error('Failed to save bookmarks', err);
      }
      return next;
    });
  };

  // Launch customized quiz or master exam
  const handleStartQuiz = (lectureId: number | 'STARRED' | null) => {
    setSelectedLectureId(lectureId);
    
    let targetQuestions: Question[] = [];
    if (lectureId === 'STARRED') {
      // Practice Starred Playlist
      targetQuestions = QUESTIONS.filter(q => starredIds.includes(q.id));
    } else if (lectureId === null) {
      // Combined mock exam: sample 25 random questions from all 160 questions!
      targetQuestions = [...QUESTIONS]
        .sort(() => Math.random() - 0.5)
        .slice(0, 25);
    } else {
      // Filter for specific lecture (all 20 questions)
      targetQuestions = QUESTIONS.filter(q => q.lectureId === lectureId);
    }

    setQuizQuestions(targetQuestions);
    setQuizRecords([]);
    setView('QUIZ');
  };

  const handleQuizFinished = (records: AnswerRecord[]) => {
    setQuizRecords(records);
    setView('REPORT');
  };

  const handleReviewRequested = (filter: 'ALL' | 'CORRECT' | 'INCORRECT' | 'SKIPPED') => {
    setReviewFilter(filter);
    setView('REVIEW');
  };

  const handleRestart = () => {
    setView('SHELF');
  };

  return (
    <div className="min-h-screen bg-[#FFFBF2] flex flex-col justify-between text-[#2D3436] antialiased font-sans selection:bg-[#FFE66D]/65 selection:text-[#2D3436]">
      
      {/* Top Academic Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b-4 border-[#2D3436]/10 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 bg-[#FF6B6B] text-white rounded-xl flex items-center justify-center shadow-md shadow-red-200/50">
            <GraduationCap size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h1 className="text-sm font-black font-display tracking-tight text-[#2D3436] leading-none">
              UGRC <span className="text-[#FF6B6B]">210</span> COMBINED
            </h1>
            <span className="text-[10px] text-gray-400 font-mono font-bold tracking-wider uppercase block mt-0.5">
              Academic Writing II
            </span>
          </div>
        </div>

        {/* Dynamic status badges */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-white border-2 border-[#FFE66D] rounded-full text-xs font-bold text-[#2D3436] font-display shadow-sm">
            <BookOpen size={13} className="text-[#FF6B6B]" />
            <span>Syllabus (Weeks 1-8)</span>
          </div>
          {view === 'QUIZ' && (
            <div className="flex items-center gap-1.5 px-3 py-1 bg-[#4ECDC4]/10 border-2 border-[#4ECDC4] rounded-full text-xs font-bold text-[#2D3436] font-display animate-pulse">
              <Sparkles size={13} className="text-[#4ECDC4]" />
              <span>Exam Mode Active</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Orchestrator Content Area with 3D perspective */}
      <main className="grow py-8 relative overflow-hidden" style={{ perspective: "1500px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, rotateY: -65, transformOrigin: "left center" }}
            animate={{ opacity: 1, rotateY: 0, transformOrigin: "left center" }}
            exit={{ opacity: 0, rotateY: 65, transformOrigin: "right center" }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            style={{ backfaceVisibility: "hidden" }}
          >
            {view === 'INTRO' && (
              <Introduction onStart={() => setView('SHELF')} />
            )}

            {view === 'SHELF' && (
              <BookShelf
                onStartQuiz={handleStartQuiz}
                onBackToIntro={() => setView('INTRO')}
                starredIds={starredIds}
              />
            )}

            {view === 'QUIZ' && (
              <QuizController
                questions={quizQuestions}
                lectureId={selectedLectureId}
                onFinished={handleQuizFinished}
                onQuit={() => setView('SHELF')}
                starredIds={starredIds}
                onToggleStar={handleToggleStar}
              />
            )}

            {view === 'REPORT' && (
              <PieReport
                records={quizRecords}
                questions={quizQuestions}
                onRestart={handleRestart}
                onReview={handleReviewRequested}
              />
            )}

            {view === 'REVIEW' && (
              <ReviewController
                records={quizRecords}
                questions={quizQuestions}
                initialFilter={reviewFilter}
                onBackToReport={() => setView('REPORT')}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer copyright */}
      <footer className="bg-white border-t border-slate-100 py-6 text-center px-4">
        <p className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
          University of Ghana • Language Centre, College of Humanities • © 2026 Academic Writing Master
        </p>
      </footer>
    </div>
  );
}

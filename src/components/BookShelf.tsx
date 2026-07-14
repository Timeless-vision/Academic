import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Sparkles, X, ChevronRight, GraduationCap, Play, Star } from 'lucide-react';
import { Lecture } from '../types';
import { LECTURES } from '../data/questions';

interface BookShelfProps {
  onStartQuiz: (lectureId: number | 'STARRED' | null) => void;
  onBackToIntro: () => void;
  starredIds: string[];
}

export default function BookShelf({ onStartQuiz, onBackToIntro, starredIds }: BookShelfProps) {
  const [selectedLecture, setSelectedLecture] = useState<Lecture | null>(null);
  
  // Flashcard mode states
  const [studyMode, setStudyMode] = useState<'GUIDE' | 'FLASHCARDS'>('GUIDE');
  const [currentCardIdx, setCurrentCardIdx] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleSelectLecture = (lecture: Lecture) => {
    setSelectedLecture(lecture);
    setStudyMode('GUIDE');
    setCurrentCardIdx(0);
    setIsFlipped(false);
  };

  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const bookVariants = {
    hidden: { opacity: 0, y: 30, rotate: -2 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    },
    hover: {
      y: -20,
      rotate: 2,
      scale: 1.03,
      transition: { duration: 0.2, ease: 'easeOut' }
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Header Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
        <div>
          <button
            onClick={onBackToIntro}
            className="text-xs font-bold text-[#2D3436]/60 hover:text-[#FF6B6B] transition-colors uppercase tracking-wider mb-2 flex items-center gap-1 cursor-pointer font-display"
          >
            ← Back to Introduction
          </button>
          <h2 className="text-3xl font-black text-[#2D3436] font-display">
            Interactive Lecture Shelf
          </h2>
          <p className="text-gray-500 text-sm font-sans font-medium mt-1">
            Hover over a lecture book to tilt it, click to open its study pages and start targeted testing.
          </p>
        </div>

        {/* Start Master Exam Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onStartQuiz(null)} // null means combined semester exam
          className="flex items-center gap-2 px-6 py-3.5 bg-[#FF6B6B] hover:bg-[#ff5252] text-white border-b-4 border-red-700 font-display font-black text-sm rounded-xl shadow-md shadow-red-200/50 hover:shadow-lg transition-all cursor-pointer self-start md:self-auto"
        >
          <Sparkles size={16} />
          Combined Semester Exam (Weeks 1-8)
        </motion.button>
      </div>

      {/* Book Shelf Container */}
      <div className="relative bg-white rounded-[2rem] p-6 md:p-10 border-b-8 border-gray-100 shadow-xl mb-12">
        {/* Books shelf grid with wood grain representation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8"
        >
          {LECTURES.map((lecture) => (
            <motion.div
              key={lecture.id}
              variants={bookVariants}
              whileHover="hover"
              onClick={() => handleSelectLecture(lecture)}
              className="relative group cursor-pointer aspect-[3/4] flex flex-col justify-between p-5 rounded-2xl shadow-md hover:shadow-xl bg-gradient-to-br transition-all duration-300 border border-black/10 overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--color-sky-900) 0%, var(--color-indigo-950) 100%)`, // fallback
              }}
            >
              {/* Actual customized background per lecture book */}
              <div className={`absolute inset-0 bg-gradient-to-br ${lecture.color} opacity-90 mix-blend-multiply group-hover:scale-105 transition-transform duration-500`} />
              
              {/* Book spine lighting overlay */}
              <div className="absolute top-0 bottom-0 left-1 w-2 bg-white/20 blur-[1px]" />
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-black/40" />

              {/* Book Header content */}
              <div className="relative z-10">
                <span className="inline-block text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-white/20 text-white uppercase tracking-wider backdrop-blur-sm">
                  {lecture.week}
                </span>
              </div>

              {/* Book Spine Center title */}
              <div className="relative z-10 my-auto py-4">
                <h3 className="font-display font-black text-white text-base md:text-lg tracking-tight group-hover:text-yellow-200 transition-colors leading-tight line-clamp-3">
                  {lecture.title}
                </h3>
                <p className="text-white/80 text-xs font-sans mt-2 line-clamp-2 leading-relaxed font-medium">
                  {lecture.subtitle}
                </p>
              </div>

              {/* Book Footer */}
              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[10px] font-semibold font-mono text-white/60">
                  LECTURE {lecture.id}
                </span>
                <span className="text-xs text-white group-hover:translate-x-1.5 transition-transform duration-300">
                  <ChevronRight size={14} />
                </span>
              </div>
            </motion.div>
          ))}

          {/* Starred Questions Book */}
          {starredIds.length > 0 && (
            <motion.div
              variants={bookVariants}
              whileHover="hover"
              onClick={() => onStartQuiz('STARRED')}
              className="relative group cursor-pointer aspect-[3/4] flex flex-col justify-between p-5 rounded-2xl shadow-md hover:shadow-xl bg-gradient-to-br from-[#FF6B6B] to-[#FFE66D] border-2 border-amber-400 overflow-hidden"
            >
              {/* Spine light overlay */}
              <div className="absolute top-0 bottom-0 left-1 w-2 bg-white/30 blur-[1px]" />
              <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-black/40" />

              <div className="relative z-10 flex justify-between items-center">
                <span className="inline-block text-[10px] font-bold font-mono px-2 py-0.5 rounded bg-amber-500 text-white uppercase tracking-wider animate-pulse">
                  Starred
                </span>
                <Star size={14} className="text-white fill-white" />
              </div>

              <div className="relative z-10 my-auto py-4">
                <h3 className="font-display font-black text-white text-base md:text-lg tracking-tight group-hover:text-yellow-200 transition-colors leading-tight line-clamp-2">
                  My Starred Questions
                </h3>
                <p className="text-white/90 text-xs font-sans mt-2 line-clamp-2 leading-relaxed font-medium">
                  {starredIds.length} flagged terms saved for specialized revision practice.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-[10px] font-semibold font-mono text-white/60">
                  REVISION BOOK
                </span>
                <span className="text-xs text-white group-hover:translate-x-1.5 transition-transform duration-300">
                  <Play size={12} fill="white" className="text-white inline-block" />
                </span>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Shelf shadow ledge */}
        <div className="h-5 bg-[#FFE66D] rounded-full mt-6 w-full shadow-md border-b-4 border-yellow-500/40" />
      </div>

      {/* Opened Book Detail Modal (AnimatePresence Page Turn) */}
      <AnimatePresence>
        {selectedLecture && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 50, rotateY: -15 }}
              animate={{ scale: 1, y: 0, rotateY: 0 }}
              exit={{ scale: 0.9, y: 50, rotateY: -15 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl w-full max-w-4xl border-4 border-[#2D3436]"
            >
              {/* Modal close icon */}
              <button
                onClick={() => setSelectedLecture(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-[#FFE66D] hover:bg-[#ffd633] text-[#2D3436] rounded-xl border-2 border-[#2D3436] transition-colors cursor-pointer"
              >
                <X size={18} className="stroke-[2.5]" />
              </button>

              {/* Book Layout: simulated Left & Right Page */}
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[480px]">
                {/* Left Page (Simulated Book Cover Accent & Info) */}
                <div className={`md:col-span-5 bg-gradient-to-br ${selectedLecture.color} p-8 flex flex-col justify-between text-white relative`}>
                  {/* Page fold shading */}
                  <div className="absolute top-0 bottom-0 right-0 w-4 bg-gradient-to-r from-transparent to-black/15" />

                  <div>
                    <span className="px-2.5 py-1 rounded-full bg-white/20 text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-sm">
                      {selectedLecture.week}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black font-display leading-tight mt-6">
                      {selectedLecture.title}
                    </h2>
                    <p className="text-white/80 text-sm mt-3 leading-relaxed font-sans font-medium">
                      {selectedLecture.subtitle}
                    </p>
                  </div>

                  <div className="mt-8 flex items-center gap-2 text-white/50 text-xs font-mono border-t border-white/10 pt-4 font-bold">
                    <GraduationCap size={16} />
                    <span>UGRC 210 CORE SYLLABUS</span>
                  </div>
                </div>

                {/* Right Page (Study Summary Points & Actions) */}
                <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between bg-stone-50">
                  <div>
                    <div className="flex items-center justify-between gap-4 border-b-2 border-stone-200 pb-3 mb-4">
                      <h3 className="text-xs font-black text-[#FF6B6B] uppercase tracking-widest font-display">
                        Study Center
                      </h3>
                      <div className="flex bg-stone-200 p-0.5 rounded-lg border border-[#2D3436]/10 text-[11px] font-bold font-display">
                        <button
                          onClick={() => setStudyMode('GUIDE')}
                          className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${studyMode === 'GUIDE' ? 'bg-white text-[#2D3436] shadow-sm' : 'text-gray-500 hover:text-[#2D3436]'}`}
                        >
                          Guide
                        </button>
                        <button
                          onClick={() => {
                            setStudyMode('FLASHCARDS');
                            setCurrentCardIdx(0);
                            setIsFlipped(false);
                          }}
                          className={`px-3 py-1.5 rounded-md cursor-pointer transition-colors ${studyMode === 'FLASHCARDS' ? 'bg-white text-[#2D3436] shadow-sm' : 'text-gray-500 hover:text-[#2D3436]'}`}
                        >
                          Flashcards
                        </button>
                      </div>
                    </div>
                    
                    {studyMode === 'GUIDE' ? (
                      /* Summary Scrollable list */
                      <div className="max-h-[300px] overflow-y-auto pr-2 space-y-3 scrollbar-thin">
                        {selectedLecture.summaryPoints.map((point, idx) => (
                          <div key={idx} className="flex gap-3 text-sm text-[#2D3436] leading-relaxed font-sans font-medium">
                            <span className="text-[#FF6B6B] font-black shrink-0 mt-0.5">•</span>
                            <span>{point}</span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Flashcards Mode */
                      <div className="flex flex-col items-center justify-between min-h-[300px]">
                        {(() => {
                          const pointText = selectedLecture.summaryPoints[currentCardIdx];
                          const colonIndex = pointText.indexOf(':');
                          const frontVal = colonIndex !== -1 ? pointText.substring(0, colonIndex).trim() : 'Core Concept';
                          const backVal = colonIndex !== -1 ? pointText.substring(colonIndex + 1).trim() : pointText;
                          
                          return (
                            <div className="w-full flex flex-col items-center">
                              {/* 3D card layout */}
                              <div className="relative w-full h-56 cursor-pointer" style={{ perspective: '1200px' }} onClick={() => setIsFlipped(!isFlipped)}>
                                <motion.div
                                  className="w-full h-full relative"
                                  style={{ transformStyle: 'preserve-3d' }}
                                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                                >
                                  {/* Front side */}
                                  <div
                                    className="absolute inset-0 bg-white border-4 border-[#2D3436] rounded-2xl p-6 flex flex-col justify-between shadow-md"
                                    style={{ backfaceVisibility: 'hidden' }}
                                  >
                                    <div className="flex justify-between items-center text-[10px] font-mono font-bold text-gray-400">
                                      <span>DECK TERM</span>
                                      <span>{currentCardIdx + 1} / {selectedLecture.summaryPoints.length}</span>
                                    </div>
                                    <div className="text-center my-auto">
                                      <h4 className="text-base md:text-lg font-black text-[#2D3436] font-display leading-snug px-2">
                                        {frontVal}
                                      </h4>
                                    </div>
                                    <div className="text-center text-[10px] font-mono font-bold text-[#FF6B6B] uppercase tracking-wider animate-pulse">
                                      Tap Card to Flip
                                    </div>
                                  </div>

                                  {/* Back side */}
                                  <div
                                    className="absolute inset-0 bg-[#FFE66D]/15 border-4 border-[#2D3436] rounded-2xl p-6 flex flex-col justify-between shadow-md"
                                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                                  >
                                    <div className="flex justify-between items-center text-[10px] font-mono font-bold text-amber-600">
                                      <span>EXPLANATION</span>
                                      <span>{currentCardIdx + 1} / {selectedLecture.summaryPoints.length}</span>
                                    </div>
                                    <div className="my-auto overflow-y-auto max-h-[120px] px-1 py-1">
                                      <p className="text-xs md:text-sm text-[#2D3436] leading-relaxed font-sans font-medium text-center">
                                        {backVal}
                                      </p>
                                    </div>
                                    <div className="text-center text-[10px] font-mono font-bold text-gray-400 uppercase tracking-wider">
                                      Tap to Flip Back
                                    </div>
                                  </div>
                                </motion.div>
                              </div>

                              {/* Controls */}
                              <div className="flex items-center justify-between gap-4 mt-4 w-full">
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsFlipped(false);
                                    setTimeout(() => {
                                      setCurrentCardIdx(prev => (prev > 0 ? prev - 1 : selectedLecture.summaryPoints.length - 1));
                                    }, 150);
                                  }}
                                  className="px-3.5 py-1.5 bg-white border-2 border-[#2D3436] rounded-lg text-xs font-black text-[#2D3436] hover:bg-stone-100 transition-all cursor-pointer active:scale-95"
                                >
                                  ← Prev
                                </button>
                                <span className="text-xs font-mono font-bold text-gray-400">
                                  Card {currentCardIdx + 1} of {selectedLecture.summaryPoints.length}
                                </span>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setIsFlipped(false);
                                    setTimeout(() => {
                                      setCurrentCardIdx(prev => (prev < selectedLecture.summaryPoints.length - 1 ? prev + 1 : 0));
                                    }, 150);
                                  }}
                                  className="px-3.5 py-1.5 bg-white border-2 border-[#2D3436] rounded-lg text-xs font-black text-[#2D3436] hover:bg-stone-100 transition-all cursor-pointer active:scale-95"
                                >
                                  Next →
                                </button>
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    )}
                  </div>

                  {/* Actions footer */}
                  <div className="mt-8 pt-6 border-t-2 border-[#2D3436]/10 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      onClick={() => setSelectedLecture(null)}
                      className="w-full sm:w-auto px-5 py-3 border-2 border-[#2D3436] hover:bg-gray-100 text-[#2D3436] text-sm font-bold rounded-xl transition-all cursor-pointer"
                    >
                      Back to Shelf
                    </button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        onStartQuiz(selectedLecture.id);
                        setSelectedLecture(null);
                      }}
                      className="w-full sm:w-grow flex items-center justify-center gap-2 px-6 py-3 bg-[#4ECDC4] hover:bg-[#3ebcb4] text-[#2D3436] border-b-4 border-teal-700 font-display font-black text-sm rounded-xl shadow-md transition-all cursor-pointer"
                    >
                      <Play size={14} fill="#2D3436" className="text-[#2D3436]" />
                      Take Lecture {selectedLecture.id} Quiz
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

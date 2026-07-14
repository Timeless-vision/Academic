import { motion } from 'motion/react';
import { BookOpen, GraduationCap, CheckCircle, Timer, BarChart } from 'lucide-react';

interface IntroductionProps {
  onStart: () => void;
}

export default function Introduction({ onStart }: IntroductionProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
      {/* Decorative Header Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-[#FFE66D] text-[#2D3436] text-xs font-bold uppercase tracking-wider mb-6 font-display shadow-sm"
      >
        <GraduationCap size={14} className="text-[#FF6B6B] animate-pulse" />
        University of Ghana • Academic Writing II
      </motion.div>

      {/* Main Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-black text-[#2D3436] tracking-tight text-center font-display leading-tight max-w-3xl mb-4"
      >
        UGRC 210 Combined <br />
        <span className="text-[#FF6B6B]">
          Academic Writing II
        </span> <span className="bg-gradient-to-r from-[#4ECDC4] to-[#FF6B6B] bg-clip-text text-transparent">Master Quiz</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-[#2D3436]/80 text-base md:text-lg text-center max-w-2xl mb-10 leading-relaxed font-sans font-medium"
      >
        An interactive, fully animated study workspace designed to master academic research conventions, grammar refinement, note-making, and presentation skills (Weeks 1 to 8).
      </motion.p>

      {/* Grid of Instructions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mb-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white p-6 rounded-[2rem] border-b-8 border-gray-100 shadow-xl flex gap-4 hover:translate-y-[-4px] transition-transform duration-300"
        >
          <div className="p-3 bg-[#FF6B6B]/15 text-[#FF6B6B] rounded-2xl h-12 w-12 flex items-center justify-center shrink-0">
            <BookOpen size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-[#2D3436] text-base mb-1">
              Explore the Book Shelf
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium">
              Interact with the custom 3D-grouped Book Shelf. Hover, flip, and read beautiful summarized notes for each of the 8 academic lectures before starting.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white p-6 rounded-[2rem] border-b-8 border-gray-100 shadow-xl flex gap-4 hover:translate-y-[-4px] transition-transform duration-300"
        >
          <div className="p-3 bg-[#FFE66D]/35 text-[#2D3436] rounded-2xl h-12 w-12 flex items-center justify-center shrink-0">
            <Timer size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-[#2D3436] text-base mb-1">
              Beat the Lecture Timers
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium">
              Test your focus and memory with a per-question active timer. You must answer quickly before the time runs out!
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white p-6 rounded-[2rem] border-b-8 border-gray-100 shadow-xl flex gap-4 hover:translate-y-[-4px] transition-transform duration-300"
        >
          <div className="p-3 bg-[#4ECDC4]/20 text-[#4ECDC4] rounded-2xl h-12 w-12 flex items-center justify-center shrink-0">
            <CheckCircle size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-[#2D3436] text-base mb-1">
              Explanation & Review
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium">
              Gain immediate academic clarity. Every answered question instantly provides a detailed breakdown of correct grammatical rules and structures.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white p-6 rounded-[2rem] border-b-8 border-gray-100 shadow-xl flex gap-4 hover:translate-y-[-4px] transition-transform duration-300"
        >
          <div className="p-3 bg-[#FF6B6B]/20 text-[#FF6B6B] rounded-2xl h-12 w-12 flex items-center justify-center shrink-0">
            <BarChart size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <h3 className="font-display font-bold text-[#2D3436] text-base mb-1">
              Dynamic Visual Reports
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed font-sans font-medium">
              Analyze your correct, incorrect, and skipped responses in a beautiful, fully animated SVG pie chart. Filter questions directly from the chart segment!
            </p>
          </div>
        </motion.div>
      </div>

      {/* Guidelines and Launch CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col items-center bg-[#FFE66D] border-b-8 border-yellow-500/30 rounded-[2.5rem] p-8 w-full max-w-2xl text-center mb-8 shadow-xl"
      >
        <h4 className="font-display font-black text-[#2D3436] text-lg uppercase tracking-tight mb-2">
          What are you supposed to do?
        </h4>
        <p className="text-[#2D3436] text-sm leading-relaxed max-w-lg mb-6 font-sans font-semibold opacity-90">
          Click the big button below to enter the <strong>Lecture Shelf</strong>. Review any lecture book or click <strong>"Semester Combined Exam"</strong> to start testing yourself immediately. You can review all explanations and track your GPA status!
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white border-b-4 border-red-700 font-display font-black text-lg py-4 px-10 rounded-2xl shadow-lg shadow-red-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer"
        >
          Enter Lecture Shelf & Start
        </motion.button>
      </motion.div>

      {/* Academic Copyright disclaimer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-[10px] text-[#2D3436]/60 font-mono font-bold tracking-wider mt-4"
      >
        UGRC 210 COMBINED ACADEMIC WRITING II • CREATED BY AI STUDIO
      </motion.div>
    </div>
  );
}

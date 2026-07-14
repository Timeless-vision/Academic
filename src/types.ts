export interface Question {
  id: string;
  lectureId: number;
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
  explanation: string;
}

export interface Lecture {
  id: number;
  title: string;
  subtitle: string;
  week: string;
  summaryPoints: string[];
  color: string; // Tailwind background gradient or background color class
  textColor: string; // Tailwind text color class
  accentColor: string; // Tailwind border or accent color class
}

export interface AnswerRecord {
  questionId: string;
  selectedOption: number; // -1 if skipped or timed out
  isCorrect: boolean;
  timeTaken: number; // in seconds
}

export type QuizView = 'INTRO' | 'SHELF' | 'QUIZ' | 'REPORT' | 'REVIEW';

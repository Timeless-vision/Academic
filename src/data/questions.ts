import { Lecture, Question } from '../types';
import { QUESTIONS_POOL } from './questions_pool';

export const LECTURES: Lecture[] = [
  {
    id: 1,
    title: 'Overview of Grammar',
    subtitle: 'Deviant Usage and Common Errors',
    week: 'Week 1',
    color: 'from-blue-600 to-indigo-600',
    textColor: 'text-indigo-100',
    accentColor: 'border-indigo-400',
    summaryPoints: [
      'Misplaced modifier: Word/phrase improperly separated from the word it describes, causing unintended meanings (e.g. "gold man\'s watch").',
      'Dangling modifier: Occurs when the item to be modified is completely missing from the sentence.',
      'Comma splice: Two independent clauses incorrectly joined by only a comma without a conjunction.',
      'Split infinitive: Placing words (adverbs) between "to" and the bare verb (e.g. "to never look back").',
      'Pronoun antecedent errors: Unclear, absent, too many, or loose antecedents causing ambiguity.',
      'Rambling sentences: Exceedingly long sentences containing too many clauses joined by coordinating conjunctions.',
      'Double subjects: Redundant repetition of subject with a pronoun (e.g. "My sister she is a nurse").',
      'Sentence fragments: Groups of words starting with capitals and ending with periods that lack independent clauses.',
      'Parallelism: Balancing grammatical constructions (e.g. "enjoyed dancing, swimming, and shopping").',
      'Confusing words: Homophones and pairs like Accept/Except, Affect/Effect, Farther/Further, Fewer/Less, Your/You\'re, Loose/Lose.'
    ]
  },
  {
    id: 2,
    title: 'Note-Taking vs. Note-Making',
    subtitle: 'Making Notes from a Text',
    week: 'Week 2',
    color: 'from-emerald-600 to-teal-600',
    textColor: 'text-teal-100',
    accentColor: 'border-teal-400',
    summaryPoints: [
      'Note-taking involves capturing information quickly, especially in a lecture situation (passive/real-time).',
      'Note-making happens during reading when we extract information from text and make sense of it through reviewing, connecting, and synthesizing (active).',
      'Why make notes: Vital stage in the writing process, essay preparation, and serves as an extension of memory.',
      'Characteristics of good notes: Organized into key/supporting ideas, uses bullet points, highlights visual points, uses abbreviations/symbols, includes examples.',
      'Three-step note-making: 1) Preview (title, first/last paragraphs, headings, topic sentences); 2) Read and mark important items carefully; 3) Write down key items through summarizing and paraphrasing.',
      'Academic integrity: Always record sources (author, title, year, publisher, URL) to avoid plagiarism.'
    ]
  },
  {
    id: 3,
    title: 'Summary Writing',
    subtitle: 'Writing Skills II',
    week: 'Week 3',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-pink-100',
    accentColor: 'border-pink-400',
    summaryPoints: [
      'A summary is a shortened, condensed version of an original text, written entirely in your own words.',
      'Purpose: Explains complex ideas, provides brief overviews, and compiles various source information for essays.',
      'Key ingredients: Brevity (shortness), Accuracy (sameness of ideas), and Objectivity (no value judgments, personal opinions, or interpretations).',
      'Proportion: A good summary is typically about a third (33%) or a quarter (25%) of the original text\'s length.',
      'Five steps to write a summary: 1) Preview to find general theme; 2) Read carefully; 3) Divide into sections and label; 4) Understand important parts; 5) Write one-sentence summaries for each section.',
      'Drafting & Editing: Formulate a thesis, weave summaries using transitions, edit to ensure accurate reproduction and check grammar.'
    ]
  },
  {
    id: 4,
    title: 'Writing a Paraphrase',
    subtitle: 'Writing Skills III',
    week: 'Week 4',
    color: 'from-amber-600 to-orange-600',
    textColor: 'text-orange-100',
    accentColor: 'border-orange-400',
    summaryPoints: [
      'Paraphrasing is rewording someone else\'s words or ideas using about the same number of words, but altering the sentence structure and vocabulary.',
      'Difference from Summary: Summary is shorter and condenses; Paraphrase keeps detail but rephrases to show understanding and creativity.',
      'Value in writing: Often considered more important than quoting because it makes your work look more original and demonstrates comprehension.',
      'Unacceptable (Illegitimate) Paraphrase: Wording is too close (borrowing too much original phrasing) OR sentence structure follows the original too closely.',
      'Acceptable Paraphrase: Changes both vocabulary AND sentence structure, adds an analytical dimension, splits original text if needed, and keeps citations.'
    ]
  },
  {
    id: 5,
    title: 'References & Quotations',
    subtitle: 'Writing from Multiple Sources I',
    week: 'Week 5',
    color: 'from-cyan-600 to-blue-600',
    textColor: 'text-cyan-100',
    accentColor: 'border-cyan-400',
    summaryPoints: [
      'Academic convention: One key research convention involves referencing or acknowledging other researchers\' ideas.',
      'Reasons to reference: Weighs arguments, allows readers to locate sources, and prevents plagiarism.',
      'Two stages of referencing: 1) In-text citation at the point of use; 2) End-text reference (list of references) at the end of the essay.',
      'Quotations use exact words of the original writer in quotation marks. Use sparingly (only when distinctive, highly concise, or well-known).',
      'In-text rules: Direct quote requires Surname, Date, and Page Number (e.g., Hoff, 2014, p. 16). Summary/paraphrase requires Surname and Date (e.g., Hoff, 2014).',
      'Nested quotation: A quotation inside a quotation, using double quotes ("...") for the primary quote and single quotes (\'...\') for the inner quote.',
      'Block quotation: Used for long quotes (four typed lines or more). Begins with preamble ending in a colon, indents all lines at the margin, and does NOT use quotation marks.'
    ]
  },
  {
    id: 6,
    title: 'Combining Sources',
    subtitle: 'Writing from Multiple Sources II / Cohesion',
    week: 'Week 6',
    color: 'from-violet-600 to-purple-700',
    textColor: 'text-violet-100',
    accentColor: 'border-violet-400',
    summaryPoints: [
      'Synthesis essay: Combining, comparing, and evaluating information from multiple sources to support your position and create a new unified whole.',
      'Why combine: Highlights relationships, shows how author approaches/findings differ or match, broadens scope, and signals sophistication.',
      'Synthesis process: State a point (topic sentence), summarize source ideas, show how sources agree/disagree, and use in-text citations.',
      'Cohesion: The process of "tying up" sentences together to make the text coherent, readable, and clear.',
      'Cohesion tools: 1) Reference words (pronouns, anaphora); 2) Conjunctions (but, yet, and, so); 3) Transition words/phrases (addition, concession, conclusion, sequence, consequence, contrast, likeness, restatement); 4) Synonyms of keywords; 5) Repetition of technical terms.'
    ]
  },
  {
    id: 7,
    title: 'Visual Info & Presentation',
    subtitle: 'Academic Presentation Skills',
    week: 'Week 7',
    color: 'from-rose-600 to-red-600',
    textColor: 'text-rose-100',
    accentColor: 'border-rose-400',
    summaryPoints: [
      'Visual Information (tables, graphs, diagrams, maps) displays large quantities of data concisely and provides visual evidence.',
      'Labeling rule: The word "figure" is used for everything except tables. Titles of tables go ABOVE; titles of figures go BELOW.',
      'Visual caution: Avoid trying to make graphs do too much. Poorly designed tables confuse and mislead.',
      'Presentation content: Needs a clear structure (Introduction - aim/background/outline; Body - core arguments/data; Conclusion - new ideas/future directions).',
      'Delivery guidelines: Do not read a fully written out text. Use slides/handouts as speaking aids. Maintain eye contact, avoid monotonous voice, and minimize speech fillers ("hmm", "you know").',
      'PowerPoint limit: Be conservative with animation. Use max EIGHT lines per slide and present one idea per slide.'
    ]
  },
  {
    id: 8,
    title: 'Academic Writing Models',
    subtitle: 'Reports, Essays & Scientific Reports',
    week: 'Week 8',
    color: 'from-slate-700 to-neutral-800',
    textColor: 'text-slate-100',
    accentColor: 'border-slate-400',
    summaryPoints: [
      'Key differences: Reports basically present facts (highly structured with subheadings and numbers), while essays involve reasoning and arguments.',
      'Report writing steps: 1) Plan it out (clarify focus, reason, method); 2) Effect the plan (collect, process, analyze, interpret data); 3) Present (findings, shortcomings, recommendations, visuals, references).',
      'Report components: Introduction, Methods, Results, Discussion, Conclusion.',
      'Surveys: Involve questionnaires (clear, simple, closed questions to be answered in 1-2 minutes) or interviews (detailed responses). Do not collect unnecessary info.',
      'Scientific reports format: Title, Abstract, Introduction, Method, Results, Discussion, References. Written to validate or support hypotheses.',
      'Long essays: 2,500 - 5,000 words. Components include Title page, Contents page, List of tables/figures, Introduction, Main body, Conclusion, List of references, Appendices.'
    ]
  }
];

export const QUESTIONS: Question[] = QUESTIONS_POOL;

import { Question } from '../types';

export const QUESTIONS_POOL: Question[] = [
  // ================= LECTURE 1: OVERVIEW OF GRAMMAR (20 Questions) =================
  {
    id: 'q1_1',
    lectureId: 1,
    question: 'Identify the error in: "On her way home, Akosua found a gold man\'s watch."',
    options: ['Dangling modifier', 'Comma splice', 'Misplaced modifier', 'Double subject'],
    correctAnswer: 2,
    explanation: 'Misplaced modifier. "Gold" describes the watch, not the man. It should be "a man\'s gold watch."'
  },
  {
    id: 'q1_2',
    lectureId: 1,
    question: 'Correct this sentence: "Walking to the movies, the cloudburst drenched Jim."',
    options: [
      'While walking to the movies, the cloudburst Jim drenched.',
      'Walking to the movies, Jim was drenched by the cloudburst.',
      'The cloudburst, walking to the movies, drenched Jim.',
      'Jim walked to the movies and was drenched in a cloudburst, walking.'
    ],
    correctAnswer: 1,
    explanation: 'Dangling modifier correction. Jim was walking, not the cloudburst. Place "Jim" as the subject.'
  },
  {
    id: 'q1_3',
    lectureId: 1,
    question: 'Which of the following is a comma splice?',
    options: [
      'The internet made the world smaller; you can meet people everywhere.',
      'The internet made the world smaller, so you can meet people everywhere.',
      'The internet made the world smaller, you can meet people everywhere.',
      'The internet made the world smaller. You can meet people everywhere.'
    ],
    correctAnswer: 2,
    explanation: 'Comma splice. Two independent clauses are joined with only a comma, lacking a coordinating conjunction.'
  },
  {
    id: 'q1_4',
    lectureId: 1,
    question: 'What error occurs in: "To boldly and decisively go where no one has gone before"?',
    options: ['Split infinitive', 'Dangling modifier', 'Sentence fragment', 'Parallelism error'],
    correctAnswer: 0,
    explanation: 'Split infinitive. Adverbs ("boldly and decisively") are placed between "to" and the verb "go".'
  },
  {
    id: 'q1_5',
    lectureId: 1,
    question: 'Identify the error: "When the student finished their exam, they gave it to the teacher, who was glad she was done."',
    options: ['Split infinitive', 'Unclear pronoun antecedent', 'Double subject', 'Sentence fragment'],
    correctAnswer: 1,
    explanation: 'Unclear antecedent. It is ambiguous whether "she was done" refers to the student or the teacher.'
  },
  {
    id: 'q1_6',
    lectureId: 1,
    question: 'Which sentence has parallel structure?',
    options: [
      'She likes swimming, to dance, and playing tennis.',
      'She likes swimming, dancing, and to play tennis.',
      'She likes swimming, dancing, and playing tennis.',
      'She likes to swim, dancing, and play tennis.'
    ],
    correctAnswer: 2,
    explanation: 'Parallel structure requires all elements in a list to use the same grammatical form (all gerunds here).'
  },
  {
    id: 'q1_7',
    lectureId: 1,
    question: 'Choose the correct word: "The lecture had a profound ______ on my writing style."',
    options: ['effect', 'affect', 'effekt', 'affectation'],
    correctAnswer: 0,
    explanation: '"Effect" is a noun meaning result or consequence. "Affect" is typically a verb meaning to influence.'
  },
  {
    id: 'q1_8',
    lectureId: 1,
    question: 'Identify the error: "My sister she is a nurse at the hospital."',
    options: ['Comma splice', 'Double subject', 'Dangling modifier', 'Parallelism error'],
    correctAnswer: 1,
    explanation: 'Double subject. Using both the noun "My sister" and pronoun "she" consecutively as subjects is redundant.'
  },
  {
    id: 'q1_9',
    lectureId: 1,
    question: 'Which of the following is a sentence fragment?',
    options: [
      'The students worked late into the night.',
      'Because they wanted to pass the academic writing course.',
      'They studied grammar rules all evening.',
      'Grammar is difficult, but practice helps.'
    ],
    correctAnswer: 1,
    explanation: 'A sentence fragment. "Because they..." is a dependent clause that cannot stand alone as a sentence.'
  },
  {
    id: 'q1_10',
    lectureId: 1,
    question: 'Which word should be used here: "There are ______ errors in this draft than the previous one."',
    options: ['less', 'fewer', 'least', 'fewer than'],
    correctAnswer: 1,
    explanation: 'Use "fewer" for countable items (errors) and "less" for non-countable nouns (time, water).'
  },
  {
    id: 'q1_11',
    lectureId: 1,
    question: 'Choose the correct option: "I will not ______ your excuse, ______ for this exceptional case."',
    options: [
      'except; accept',
      'accept; accept',
      'accept; except',
      'except; except'
    ],
    correctAnswer: 2,
    explanation: '"Accept" means to receive or agree to; "except" means excluding or other than.'
  },
  {
    id: 'q1_12',
    lectureId: 1,
    question: 'Which sentence correctly uses "further"?',
    options: [
      'The library is farther than the hostel.',
      'We need further evidence to support this claim.',
      'He walked further down the street than I did.',
      'Accra is further from Kumasi than Koforidua.'
    ],
    correctAnswer: 1,
    explanation: '"Farther" refers to physical distance, while "further" refers to figurative distance, depth, or addition.'
  },
  {
    id: 'q1_13',
    lectureId: 1,
    question: 'What is the grammatical error in: "The book lying on the table with a red cover."',
    options: ['Comma splice', 'Sentence fragment', 'Rambling sentence', 'Dangling modifier'],
    correctAnswer: 1,
    explanation: 'Sentence fragment. It lacks a finite verb (the verb phrase "lying" is a participle, not a main verb).'
  },
  {
    id: 'q1_14',
    lectureId: 1,
    question: 'Identify the error in: "The lecture was highly informative, it helped me write my assignment."',
    options: ['Split infinitive', 'Misplaced modifier', 'Comma splice', 'Sentence fragment'],
    correctAnswer: 2,
    explanation: 'Comma splice. Two independent clauses joined by only a comma without a coordinating conjunction.'
  },
  {
    id: 'q1_15',
    lectureId: 1,
    question: 'Select the correct usage of "its" and "it\'s":',
    options: [
      'It\'s clear that the university values its academic integrity.',
      'Its clear that the university values it\'s academic integrity.',
      'It\'s clear that the university values it\'s academic integrity.',
      'Its clear that the university values its academic integrity.'
    ],
    correctAnswer: 0,
    explanation: '"It\'s" is the contraction of "it is"; "its" is the possessive pronoun.'
  },
  {
    id: 'q1_16',
    lectureId: 1,
    question: 'What is a "rambling sentence"?',
    options: [
      'A sentence that lacks a verb.',
      'A sentence with too many clauses connected by coordinating conjunctions.',
      'A sentence containing misplaced adjectives.',
      'A sentence that is grammatically perfect but too short.'
    ],
    correctAnswer: 1,
    explanation: 'A rambling sentence is excessively long and repetitive, joining too many clauses with conjunctions like "and" or "but".'
  },
  {
    id: 'q1_17',
    lectureId: 1,
    question: 'Choose the correct pronoun: "Each of the researchers must submit ______ report today."',
    options: ['their', 'his or her', 'they\'re', 'its'],
    correctAnswer: 1,
    explanation: 'Historically and formally, "each" is singular, requiring a singular pronoun like "his or her" (though singular "their" is widely accepted in modern speech).'
  },
  {
    id: 'q1_18',
    lectureId: 1,
    question: 'Identify the correct sentence:',
    options: [
      'The results of the study was inconclusive.',
      'The results of the study were inconclusive.',
      'The results of the study has been inconclusive.',
      'The results of the study is inconclusive.'
    ],
    correctAnswer: 1,
    explanation: 'Subject-verb agreement. "Results" is a plural subject, so it requires the plural verb "were".'
  },
  {
    id: 'q1_19',
    lectureId: 1,
    question: 'Identify the error: "Having eaten our lunch, the bus arrived to pick us up."',
    options: ['Misplaced modifier', 'Dangling modifier', 'Comma splice', 'Parallelism error'],
    correctAnswer: 1,
    explanation: 'Dangling modifier. The introductory phrase implies the "bus" ate lunch. Correct: "Having eaten our lunch, we boarded the bus."'
  },
  {
    id: 'q1_20',
    lectureId: 1,
    question: 'Which of the following is correct regarding split infinitives?',
    options: [
      'They are always grammatically fatal in modern English.',
      'They occur when an adverb is inserted between "to" and the base verb.',
      'They involve splitting a subject from its verb.',
      'They are caused by using a comma splice.'
    ],
    correctAnswer: 1,
    explanation: 'A split infinitive occurs when an adverb or phrase is placed between "to" and the bare verb (e.g., "to quickly write").'
  },

  // ================= LECTURE 2: NOTE-TAKING VS. NOTE-MAKING (20 Questions) =================
  {
    id: 'q2_1',
    lectureId: 2,
    question: 'Note-taking is best described as what kind of process?',
    options: ['Active and reflective', 'Passive and real-time', 'Purely analytical', 'Evaluative'],
    correctAnswer: 1,
    explanation: 'Note-taking is capturing spoken or delivered information quickly, usually in real-time, making it relatively passive.'
  },
  {
    id: 'q2_2',
    lectureId: 2,
    question: 'Which of the following describes "note-making"?',
    options: [
      'Writing down every word the lecturer speaks.',
      'Extracting information from text, reviewing, and synthesizing it.',
      'Photocopying textbook pages for future reading.',
      'Listening without writing anything.'
    ],
    correctAnswer: 1,
    explanation: 'Note-making is an active process that occurs during reading or revision when you extract and make sense of information.'
  },
  {
    id: 'q2_3',
    lectureId: 2,
    question: 'Why is note-making vital in academic research?',
    options: [
      'It allows you to memorize facts without comprehension.',
      'It acts as an extension of memory and aids essay preparation.',
      'It completely replaces the need for any in-text citation.',
      'It ensures your essay is exactly the same length as the source.'
    ],
    correctAnswer: 1,
    explanation: 'Note-making helps organize thoughts, connects sources, reinforces memory, and forms a key precursor to drafting essays.'
  },
  {
    id: 'q2_4',
    lectureId: 2,
    question: 'Which is a characteristic of well-structured notes?',
    options: [
      'Written entirely in full, formal paragraphs.',
      'Use of clear headings, bullet points, and abbreviation symbols.',
      'Avoidance of any diagrams or visual spacing.',
      'Verbatim repetition of the original article.'
    ],
    correctAnswer: 1,
    explanation: 'Good notes are highly scannable, using headings, indentations, bullet points, and custom abbreviation symbols.'
  },
  {
    id: 'q2_5',
    lectureId: 2,
    question: 'What is the first step in the three-step note-making process?',
    options: [
      'Read the article line-by-line using a dictionary.',
      'Previewing: reviewing titles, headings, and first/last paragraphs.',
      'Writing down a full paragraph summary.',
      'Underlining every single noun.'
    ],
    correctAnswer: 1,
    explanation: 'Previewing allows you to gain a general mental map of the text structure and themes before diving into detailed reading.'
  },
  {
    id: 'q2_6',
    lectureId: 2,
    question: 'During step two of note-making, what should a reader focus on?',
    options: [
      'Highlighting every sentence to make it look colorful.',
      'Reading carefully and marking key concepts, definitions, and themes.',
      'Paraphrasing the entire bibliography.',
      'Drafting the final essay introduction.'
    ],
    correctAnswer: 1,
    explanation: 'Step two is active reading and marking, where you isolate the actual core arguments, formulas, and critical data.'
  },
  {
    id: 'q2_7',
    lectureId: 2,
    question: 'Why should you always record the source citation during note-making?',
    options: [
      'To increase the page count of your notes.',
      'To preserve academic integrity and avoid unintentional plagiarism.',
      'Because professors grade your note-making sheets directly.',
      'To practice writing publishers\' names.'
    ],
    correctAnswer: 1,
    explanation: 'Recording details (author, year, title, publisher, URL) ensures you can correctly attribute ideas and find sources again easily.'
  },
  {
    id: 'q2_8',
    lectureId: 2,
    question: 'Which of the following is an active note-making technique?',
    options: [
      'Doodling during a lecture.',
      'Paraphrasing and summarizing ideas in your own words.',
      'Transcribing a lecture recording verbatim.',
      'Rote memorization of a textbook glossary.'
    ],
    correctAnswer: 1,
    explanation: 'Active note-making involves transforming and digesting information by putting it into your own conceptual terms.'
  },
  {
    id: 'q2_9',
    lectureId: 2,
    question: 'In note-making, why are abbreviations (e.g., "w/o", "govt", "eg") recommended?',
    options: [
      'They make your notes look like coded text.',
      'They save time and speed up active concept capture.',
      'They are required by the APA style guide for notes.',
      'They confuse readers who try to copy your work.'
    ],
    correctAnswer: 1,
    explanation: 'Abbreviations and symbols allow the note-maker to write faster, matching the pace of active reading or listening.'
  },
  {
    id: 'q2_10',
    lectureId: 2,
    question: 'Which strategy is part of "previewing" an academic text?',
    options: [
      'Writing a 200-word paragraph.',
      'Reading only the first sentence of each paragraph (topic sentences).',
      'Checking the publisher\'s copyright country.',
      'Analyzing the exact syntax of the footnotes.'
    ],
    correctAnswer: 1,
    explanation: 'Topic sentences express the main idea of a paragraph. Scanning them during a preview provides a rapid thematic overview.'
  },
  {
    id: 'q2_11',
    lectureId: 2,
    question: 'Note-making forms an essential bridge between which two activities?',
    options: [
      'Writing and editing.',
      'Reading and drafting your own paper.',
      'Referencing and indexing.',
      'Exam grading and syllabus design.'
    ],
    correctAnswer: 1,
    explanation: 'Note-making translates the raw material you read into structured concepts ready to be woven into your draft.'
  },
  {
    id: 'q2_12',
    lectureId: 2,
    question: 'Which of the following violates academic integrity during note-making?',
    options: [
      'Recording page numbers next to direct quotes.',
      'Writing down source ideas without documenting who authored them.',
      'Using arrows to connect similar concepts.',
      'Writing a personal reflection in brackets.'
    ],
    correctAnswer: 1,
    explanation: 'Forgetting source origins in your notes can lead to accidental plagiarism when you write your final draft.'
  },
  {
    id: 'q2_13',
    lectureId: 2,
    question: 'What does the abbreviation "i.e." stand for in scholarly notes?',
    options: ['for example', 'that is to say', 'in other words only', 'important point'],
    correctAnswer: 1,
    explanation: '"i.e." comes from Latin "id est," meaning "that is" or "that is to say" (used for clarification).'
  },
  {
    id: 'q2_14',
    lectureId: 2,
    question: 'What does "e.g." represent in academic notes?',
    options: ['and others', 'for example', 'especially', 'after thought'],
    correctAnswer: 1,
    explanation: '"e.g." comes from Latin "exempli gratia," meaning "for example."'
  },
  {
    id: 'q2_15',
    lectureId: 2,
    question: 'Passive recording during a lecture is a feature of:',
    options: ['Note-making', 'Note-taking', 'Active reading', 'Synthesis writing'],
    correctAnswer: 1,
    explanation: 'Note-taking is primarily a rapid, passive recording process compared to analytical note-making.'
  },
  {
    id: 'q2_16',
    lectureId: 2,
    question: 'Which visual aid is highly useful during note-making to connect scattered ideas?',
    options: ['Linear bullet lines only', 'Concept maps / mind maps', 'Glossary tables', 'Numbered tables'],
    correctAnswer: 1,
    explanation: 'Mind maps or concept maps visually link ideas together, showing spatial relationships and hierarchy.'
  },
  {
    id: 'q2_17',
    lectureId: 2,
    question: 'Which of the following should be included in a source citation in your personal notes?',
    options: [
      'Author\'s full bio',
      'Author, Year, Title, and Location/Publisher',
      'Word count of the book',
      'Total chapters in the volume'
    ],
    correctAnswer: 1,
    explanation: 'The standard identifiers needed for later reference are Author, Year, Title, and Publisher/URL.'
  },
  {
    id: 'q2_18',
    lectureId: 2,
    question: 'How does note-making encourage deep comprehension?',
    options: [
      'By forcing you to re-conceptualize and rewrite ideas in your own voice.',
      'By training your hand to write cursive script faster.',
      'By requiring you to highlight every single adjective.',
      'By focusing on the physical typography of the paper.'
    ],
    correctAnswer: 0,
    explanation: 'Paraphrasing and summarizing demand that you understand the content before you can put it in your own words.'
  },
  {
    id: 'q2_19',
    lectureId: 2,
    question: 'What is "skimming" in text previewing?',
    options: [
      'Reading every single word slowly.',
      'Moving eyes rapidly over text to get a quick overview of content.',
      'Copying vocabulary definitions.',
      'Translating words into another language.'
    ],
    correctAnswer: 1,
    explanation: 'Skimming is reading quickly to find the main ideas or the overall layout of a text.'
  },
  {
    id: 'q2_20',
    lectureId: 2,
    question: 'The Cornell system is a popular framework for:',
    options: ['Summary writing', 'Organizing study notes into columns', 'Academic word styling', 'Plagiarism detection'],
    correctAnswer: 1,
    explanation: 'The Cornell Notes system divides sheets into cues, notes, and summary sections to optimize review.'
  },

  // ================= LECTURE 3: SUMMARY WRITING (20 Questions) =================
  {
    id: 'q3_1',
    lectureId: 3,
    question: 'What are the three essential ingredients of an academic summary?',
    options: [
      'Detailed quoting, personal insight, and visual formatting',
      'Brevity, accuracy, and objectivity',
      'Length, chronological structure, and subjectivity',
      'Paraphrasing, block quoting, and literature reviewing'
    ],
    correctAnswer: 1,
    explanation: 'Brevity (shortness), Accuracy (fidelity to source), and Objectivity (absence of personal opinion).'
  },
  {
    id: 'q3_2',
    lectureId: 3,
    question: 'What is the recommended size proportion of a summary compared to the original text?',
    options: [
      'About 10% or less',
      'Exactly 50%',
      'About a third or a quarter (25% - 33%)',
      'Exactly two-thirds'
    ],
    correctAnswer: 2,
    explanation: 'A standard academic summary condenses the text to approximately 25% to 33% (1/4 to 1/3) of its original length.'
  },
  {
    id: 'q3_3',
    lectureId: 3,
    question: 'What does "objectivity" mean in summary writing?',
    options: [
      'Writing as many pages as possible.',
      'Excluding your personal opinion, value judgments, or interpretations.',
      'Adding your own thesis and arguments to the text.',
      'Critiquing the scientific approach of the author.'
    ],
    correctAnswer: 1,
    explanation: 'Objectivity means reporting only what the author said without introducing your own perspective or bias.'
  },
  {
    id: 'q3_4',
    lectureId: 3,
    question: 'Which of the following is NOT one of the steps in summary writing?',
    options: [
      'Divide the text into sections and label them.',
      'Understand the important parts of the text.',
      'Write down your personal criticism of the author\'s claims.',
      'Write a one-sentence summary of each section.'
    ],
    correctAnswer: 2,
    explanation: 'An academic summary must not contain personal critiques, evaluations, or subjective opinions.'
  },
  {
    id: 'q3_5',
    lectureId: 3,
    question: 'What is the purpose of the first step in summary writing (previewing)?',
    options: [
      'To find grammatical errors in the text.',
      'To find the general theme and author\'s central message.',
      'To highlight every single noun.',
      'To translate the abstract into another language.'
    ],
    correctAnswer: 1,
    explanation: 'Previewing allows you to grasp the overall structure and core theme before starting detailed reading.'
  },
  {
    id: 'q3_6',
    lectureId: 3,
    question: 'If a summary changes the original ideas of the author, it violates:',
    options: ['Brevity', 'Accuracy', 'Objectivity', 'Syntax'],
    correctAnswer: 1,
    explanation: '"Accuracy" requires representing the exact arguments and concepts of the original text faithfully.'
  },
  {
    id: 'q3_7',
    lectureId: 3,
    question: 'When writing a summary, you must write it entirely in:',
    options: [
      'Direct quotations from the author.',
      'Your own words and sentence structures.',
      'Bullet points without full sentences.',
      'The first-person "I" narrative.'
    ],
    correctAnswer: 1,
    explanation: 'A summary must be written in your own words while retaining original meaning to demonstrate comprehension.'
  },
  {
    id: 'q3_8',
    lectureId: 3,
    question: 'How should you connect one-sentence summaries of different sections into a cohesive paragraph?',
    options: [
      'Using bullet points only.',
      'Using appropriate transition words and cohesive devices.',
      'By separating them into distinct chapters.',
      'By repeating the author\'s name at the start of every sentence.'
    ],
    correctAnswer: 1,
    explanation: 'Transition words (e.g., "Furthermore," "In contrast," "Consequently") create a logical flow between ideas.'
  },
  {
    id: 'q3_9',
    lectureId: 3,
    question: 'Which of the following can be excluded from a summary?',
    options: [
      'The author\'s main thesis statement.',
      'Minor details, repetitive examples, and illustrative anecdotes.',
      'The primary research findings.',
      'The core arguments supporting the thesis.'
    ],
    correctAnswer: 1,
    explanation: 'To achieve brevity, summaries omit minor details, illustrative examples, jokes, or long descriptions.'
  },
  {
    id: 'q3_10',
    lectureId: 3,
    question: 'A summary is considered "illegitimate" if:',
    options: [
      'It is too objective.',
      'It copies entire sentences verbatim without quotation marks.',
      'It is 30% of the original text length.',
      'It uses academic transition words.'
    ],
    correctAnswer: 1,
    explanation: 'Verbatim copying without quotes is plagiarism, making the summary academically unacceptable.'
  },
  {
    id: 'q3_11',
    lectureId: 3,
    question: 'Which of the following expresses the correct tone for an academic summary?',
    options: [
      'Informal, conversational, and highly personal.',
      'Formal, objective, and third-person authoritative.',
      'Poetic and metaphoric.',
      'Sarcastic and critical.'
    ],
    correctAnswer: 1,
    explanation: 'Academic summaries should use formal, objective, third-person syntax (e.g., "The author argues...").'
  },
  {
    id: 'q3_12',
    lectureId: 3,
    question: 'What is a "thesis statement" in an original academic article?',
    options: [
      'The bibliography list.',
      'The sentence that states the main argument or purpose of the text.',
      'The final concluding remark.',
      'The list of tables and figures.'
    ],
    correctAnswer: 1,
    explanation: 'The thesis statement is the central claim or main focus that the rest of the text aims to defend.'
  },
  {
    id: 'q3_13',
    lectureId: 3,
    question: 'When writing a summary, how do you handle the author\'s examples?',
    options: [
      'Write down each example in full detail.',
      'Condense or completely omit them if they do not add core conceptual value.',
      'Invent your own examples and insert them.',
      'Cite them using block quotation layout.'
    ],
    correctAnswer: 1,
    explanation: 'Examples are illustrative details; summaries should focus on the underlying concepts instead of specific examples.'
  },
  {
    id: 'q3_14',
    lectureId: 3,
    question: 'In academic writing, a summary of multiple texts is often used to:',
    options: [
      'Compare different scholarly perspectives in a literature review.',
      'Ensure you do not have to cite any source.',
      'Increase the word count of the index.',
      'Avoid reading the actual books.'
    ],
    correctAnswer: 0,
    explanation: 'Summarizing multiple sources helps synthesize existing research, mapping out agreements or debates.'
  },
  {
    id: 'q3_15',
    lectureId: 3,
    question: 'Which introductory phrase is ideal for an academic summary?',
    options: [
      '"I think this article is about..."',
      '"In this brilliant and exciting study, Hoff (2014) shows..."',
      '"According to Hoff (2014), the study investigates..."',
      '"This is a summary of a paper by Hoff..."'
    ],
    correctAnswer: 2,
    explanation: 'Option C is objective, cites the source properly, and avoids subjective praise ("brilliant") or personal references ("I").'
  },
  {
    id: 'q3_16',
    lectureId: 3,
    question: 'If a text is 1,200 words, how long should its summary typically be?',
    options: ['120 words or less', '300 to 400 words', '600 to 800 words', 'Exactly 1,200 words'],
    correctAnswer: 1,
    explanation: 'Using the 1/4 to 1/3 rule, a summary of a 1,200-word text should range from 300 to 400 words.'
  },
  {
    id: 'q3_17',
    lectureId: 3,
    question: 'Which of the following is NOT a requirement of a summary?',
    options: ['Objectivity', 'Brevity', 'Adding personal critiques', 'Fidelity to the source'],
    correctAnswer: 2,
    explanation: 'Adding personal critiques is forbidden in summaries; summaries must be purely expository and objective.'
  },
  {
    id: 'q3_18',
    lectureId: 3,
    question: 'A summary is different from a critique because a summary is:',
    options: ['Subjective', 'Objective and non-evaluative', 'Shorter than a sentence', 'Filled with quotations'],
    correctAnswer: 1,
    explanation: 'A critique evaluates and judges a text, while a summary objectively reports the author\'s ideas.'
  },
  {
    id: 'q3_19',
    lectureId: 3,
    question: 'What should you do after drafting a summary?',
    options: [
      'Publish it immediately.',
      'Edit and refine it, comparing it to the original for accuracy and brevity.',
      'Add some direct quotes to make it longer.',
      'Remove all citations.'
    ],
    correctAnswer: 1,
    explanation: 'Reviewing ensures that you have not distorted the author\'s meaning or accidentally copied their wording.'
  },
  {
    id: 'q3_20',
    lectureId: 3,
    question: 'Summarizing is an essential skill for writing:',
    options: ['Creative poetry', 'Academic literature reviews', 'Personal diaries', 'Fictional novels'],
    correctAnswer: 1,
    explanation: 'Literature reviews require summarizing multiple studies to map out current scholarly knowledge.'
  },

  // ================= LECTURE 4: WRITING A PARAPHRASE (20 Questions) =================
  {
    id: 'q4_1',
    lectureId: 4,
    question: 'Paraphrasing is defined as rewording someone\'s ideas using:',
    options: [
      'A much shorter, condensed paragraph.',
      'Approximately the same number of words, but altering vocabulary and sentence structure.',
      'Identical phrasing with single quotes around keywords.',
      'Only bullet points and abbreviations.'
    ],
    correctAnswer: 1,
    explanation: 'Paraphrasing rewrites the specific source passage in your own words while retaining similar length and detail.'
  },
  {
    id: 'q4_2',
    lectureId: 4,
    question: 'How does paraphrasing primarily differ from summarizing?',
    options: [
      'A paraphrase does not require citations, but summaries always do.',
      'A paraphrase retains details and has a similar length, whereas a summary condenses main ideas into a shorter text.',
      'A paraphrase allows the writer to add value judgments and personal arguments.',
      'Paraphrasing is copy-pasting text verbatim inside double quotes.'
    ],
    correctAnswer: 1,
    explanation: 'A paraphrase maintains detail at about the same length; a summary condenses the text down.'
  },
  {
    id: 'q4_3',
    lectureId: 4,
    question: 'What makes a paraphrase "illegitimate" or "unacceptable"?',
    options: [
      'When it is cited correctly using Surname and Year.',
      'When it translates technical terms into simpler vocabulary.',
      'When it borrows too much original vocabulary or mimics the sentence structure too closely.',
      'When it splits the original argument into two separate paragraphs.'
    ],
    correctAnswer: 2,
    explanation: 'An illegitimate paraphrase is too close to the original wording or sentence structure, even if cited.'
  },
  {
    id: 'q4_4',
    lectureId: 4,
    question: 'Why is paraphrasing often preferred over direct quoting in academic essays?',
    options: [
      'It proves you read the book and understood its specific concepts.',
      'It is easier because you do not have to use quotation marks or page numbers.',
      'It allows you to bypass plagiarism software.',
      'It lets you change the author\'s claims to match your own opinions.'
    ],
    correctAnswer: 0,
    explanation: 'Paraphrasing demonstrates your comprehension and integrates the source ideas smoothly into your own writing.'
  },
  {
    id: 'q4_5',
    lectureId: 4,
    question: 'An acceptable paraphrase must alter:',
    options: [
      'Only the nouns in the sentence.',
      'Only the verb tenses.',
      'Both the vocabulary and the sentence structure.',
      'Only the citation year.'
    ],
    correctAnswer: 2,
    explanation: 'To be legitimate, you must change both vocabulary (using synonyms) and sentence structure (syntax).'
  },
  {
    id: 'q4_6',
    lectureId: 4,
    question: 'What is a common error when attempting to paraphrase?',
    options: [
      'Splitting long sentences into smaller, clearer ones.',
      'Changing the parts of speech (e.g., turning a noun into a verb).',
      'Using a thesaurus to replace words while keeping the exact sentence structure intact.',
      'Combining passive voice with active voice.'
    ],
    correctAnswer: 2,
    explanation: 'Simply swapping words for synonyms while keeping the exact sentence structure is "patchwriting" or illegitimate paraphrasing.'
  },
  {
    id: 'q4_7',
    lectureId: 4,
    question: 'Which of the following is NOT required in an acceptable paraphrase?',
    options: [
      'The author\'s surname and publication year.',
      'Double quotation marks around the entire rewritten passage.',
      'Complete alteration of sentence syntax.',
      'Accurate representation of the original meaning.'
    ],
    correctAnswer: 1,
    explanation: 'Paraphrases are written in your own words, so they do NOT use quotation marks (unless you borrow a specific, unique phrase).'
  },
  {
    id: 'q4_8',
    lectureId: 4,
    question: 'If you want to keep a unique, highly distinctive phrase from the original text in your paraphrase, you should:',
    options: [
      'Omit it to avoid plagiarism.',
      'Place only that specific phrase in quotation marks within your paraphrase.',
      'Change spelling to make it look unique.',
      'Write a footnote explaining why you copied it.'
    ],
    correctAnswer: 1,
    explanation: 'You can integrate a key distinctive phrase from the source, but it must be placed in quotation marks.'
  },
  {
    id: 'q4_9',
    lectureId: 4,
    question: 'Which of the following is an effective technique for paraphrasing?',
    options: [
      'Read the passage, look away, and write the concept from memory.',
      'Copy the passage and delete every third word.',
      'Replace all vowels with symbols.',
      'Translate the passage word-for-word.'
    ],
    correctAnswer: 0,
    explanation: 'Writing from memory helps you express the underlying concept naturally in your own style and vocabulary.'
  },
  {
    id: 'q4_10',
    lectureId: 4,
    question: 'To change sentence structure during paraphrasing, you can:',
    options: [
      'Convert an active sentence to passive voice (or vice versa).',
      'Change the font size.',
      'Replace commas with semicolons without altering word order.',
      'Translate nouns to French.'
    ],
    correctAnswer: 0,
    explanation: 'Changing active to passive (or vice versa) is a powerful way to restructure a sentence\'s syntax.'
  },
  {
    id: 'q4_11',
    lectureId: 4,
    question: 'Paraphrasing is considered a highly developed:',
    options: ['Grammar error', 'Academic writing skill', 'Form of direct copying', 'Bibliographic tool'],
    correctAnswer: 1,
    explanation: 'Effective paraphrasing requires deep understanding, strong vocabulary, and a mastery of grammatical structures.'
  },
  {
    id: 'q4_12',
    lectureId: 4,
    question: 'Which is true about an acceptable paraphrase?',
    options: [
      'It has a completely different meaning from the original text.',
      'It represents the original meaning accurately, but in a new style and wording.',
      'It must always be exactly half the length of the source.',
      'It does not need an in-text citation.'
    ],
    correctAnswer: 1,
    explanation: 'The core ideas must remain identical, but the linguistic expression must be entirely yours.'
  },
  {
    id: 'q4_13',
    lectureId: 4,
    question: 'What is "patchwriting"?',
    options: [
      'Writing an essay using patches of colored ink.',
      'Stitching together copied fragments with minor synonym substitutions.',
      'Writing a summary of a patch or diagram.',
      'Creating a list of references.'
    ],
    correctAnswer: 1,
    explanation: 'Patchwriting is a form of academic dishonesty where a writer relies too heavily on the original phrasing and structure.'
  },
  {
    id: 'q4_14',
    lectureId: 4,
    question: 'In APA style, is a page number required for a paraphrase?',
    options: [
      'Yes, it is strictly mandatory for every single paraphrase.',
      'No, but it is encouraged if it helps the reader locate the passage in a long text.',
      'Yes, and it must be written in bold.',
      'No, citing page numbers is forbidden for paraphrases.'
    ],
    correctAnswer: 1,
    explanation: 'APA style requires Surname and Year for paraphrases, but notes that page numbers are optional but encouraged for long texts.'
  },
  {
    id: 'q4_15',
    lectureId: 4,
    question: 'Which of the following sentences is a paraphrase of: "The expansion of the city caused destruction of natural habitats"?',
    options: [
      'The expansion of the city destroyed natural habitats.',
      'As urban areas grew, wildlife environments were destroyed.',
      'City expansion caused destruction of habitats of nature.',
      'Natural habitats were destroyed by city expansion.'
    ],
    correctAnswer: 1,
    explanation: 'Option B successfully alters both vocabulary ("urban areas grew," "wildlife environments") and structure.'
  },
  {
    id: 'q4_16',
    lectureId: 4,
    question: 'Before you begin paraphrasing a passage, you must:',
    options: [
      'Count the number of letters.',
      'Read and fully comprehend its core meaning.',
      'Find at least ten synonyms for every word.',
      'Consult the publisher\'s copyright details.'
    ],
    correctAnswer: 1,
    explanation: 'Comprehension is the essential first step; you cannot accurately rephrase an idea you do not understand.'
  },
  {
    id: 'q4_17',
    lectureId: 4,
    question: 'An unacceptable paraphrase that mirrors the original structure too closely is called:',
    options: ['Synthesis error', 'Structural plagiarism', 'Split modifier', 'Active voice error'],
    correctAnswer: 1,
    explanation: 'Structural plagiarism occurs when a writer retains the exact grammatical framework of the source text.'
  },
  {
    id: 'q4_18',
    lectureId: 4,
    question: 'Can you paraphrase a single sentence?',
    options: [
      'No, paraphrasing is only for entire chapters.',
      'Yes, a single sentence can be paraphrased to fit your text flow.',
      'No, sentences must only be quoted directly.',
      'Yes, but it must be written in italics.'
    ],
    correctAnswer: 1,
    explanation: 'Any length of text, from a single sentence to a full paragraph, can be paraphrased.'
  },
  {
    id: 'q4_19',
    lectureId: 4,
    question: 'When paraphrasing, you should check your draft against:',
    options: [
      'The dictionary only.',
      'The original passage, to verify accuracy and linguistic independence.',
      'The table of contents.',
      'Your lecture schedule.'
    ],
    correctAnswer: 1,
    explanation: 'Comparing your draft with the source helps ensure you haven\'t accidentally copied phrases or altered the meaning.'
  },
  {
    id: 'q4_20',
    lectureId: 4,
    question: 'Paraphrasing is an active demonstration of your:',
    options: ['Typing speed', 'Academic reading and writing literacy', 'Ability to memorize', 'Bibliographic database skill'],
    correctAnswer: 1,
    explanation: 'It showcases your ability to digest complex ideas, apply vocabulary, and structure sentences independently.'
  },

  // ================= LECTURE 5: REFERENCES & QUOTATIONS (20 Questions) =================
  {
    id: 'q5_1',
    lectureId: 5,
    question: 'Which elements are required in-text when directly quoting a source in APA style?',
    options: [
      'The author\'s full name, book title, and publisher name.',
      'The author\'s surname, year of publication, and page number.',
      'The page number, website URL, and chapter title.',
      'Only the author\'s surname and publication year.'
    ],
    correctAnswer: 1,
    explanation: 'APA style requires the author\'s surname, year, and page number (preceded by "p.") for direct quotes.'
  },
  {
    id: 'q5_2',
    lectureId: 5,
    question: 'What is the correct format for a block quotation in academic writing?',
    options: [
      'Short quote (less than 4 lines), wrapped in double quotation marks.',
      'Long quote (four typed lines or more), indented, single-spaced or double-spaced, without quotation marks.',
      'Any quotation that is printed in a different color.',
      'A quote that contains more than two distinct author citations.'
    ],
    correctAnswer: 1,
    explanation: 'Block quotations are for long quotes (4+ lines). They are indented, start on a new line, and omit quotation marks.'
  },
  {
    id: 'q5_3',
    lectureId: 5,
    question: 'Why do academic writers use references?',
    options: [
      'To make their essays look longer.',
      'To acknowledge ideas, support arguments, and prevent plagiarism.',
      'Because they are paid based on the number of references.',
      'To avoid writing original text.'
    ],
    correctAnswer: 1,
    explanation: 'Referencing attributes credit, supports your claims, and allows readers to find the source material.'
  },
  {
    id: 'q5_4',
    lectureId: 5,
    question: 'What are the two stages of academic referencing?',
    options: [
      'Bibliography and index.',
      'In-text citation and end-text reference list.',
      'Title page and footnotes.',
      'Abstract and executive summary.'
    ],
    correctAnswer: 1,
    explanation: 'Referencing requires citing sources in the body of the text and listing them at the end.'
  },
  {
    id: 'q5_5',
    lectureId: 5,
    question: 'Which of the following represents a correct APA in-text direct citation?',
    options: [
      'According to Hoff (Hoff, 2014, p. 16), "..."',
      'According to Hoff (2014, p. 16), "..."',
      'According to Hoff (2014), "..." (p. 16)',
      'Both B and C are correct.'
    ],
    correctAnswer: 3,
    explanation: 'Both B and C are standard APA variations for embedding the author and page number around a quote.'
  },
  {
    id: 'q5_6',
    lectureId: 5,
    question: 'What is a "nested quotation"?',
    options: [
      'A quotation that contains a grammar mistake.',
      'A quotation inside another quotation, using single quotes inside double quotes.',
      'A quotation placed inside a table cell.',
      'A quotation that has been summarized.'
    ],
    correctAnswer: 1,
    explanation: 'Nested quotations place quotes inside quotes, using double quotes ("...") for the primary quote and single (\'...\') for the inner quote.'
  },
  {
    id: 'q5_7',
    lectureId: 5,
    question: 'How should the preamble to a block quotation typically end?',
    options: ['With a semicolon', 'With a colon', 'With a question mark', 'With a hyphen'],
    correctAnswer: 1,
    explanation: 'The introductory sentence (preamble) introducing a block quotation typically ends with a colon.'
  },
  {
    id: 'q5_8',
    lectureId: 5,
    question: 'Which of the following is true about the Reference List at the end of an APA paper?',
    options: [
      'It lists only sources you liked, even if not cited in the text.',
      'It includes every source cited in-text, organized alphabetically by author surname.',
      'It is organized chronologically by publication year.',
      'It must be printed on a separate sheet in bold italics.'
    ],
    correctAnswer: 1,
    explanation: 'The Reference List must match the in-text citations and be sorted alphabetically by the first author\'s last name.'
  },
  {
    id: 'q5_9',
    lectureId: 5,
    question: 'What does the abbreviation "et al." mean in APA citations?',
    options: ['and others', 'specifically', 'see also', 'as follows'],
    correctAnswer: 0,
    explanation: '"et al." is short for the Latin "et alii," meaning "and others" (used for sources with multiple authors).'
  },
  {
    id: 'q5_10',
    lectureId: 5,
    question: 'When is "et al." used in APA 7th edition in-text citations?',
    options: [
      'Only in the Reference List.',
      'For any source with three or more authors, starting with the first citation.',
      'Only when citing the same source for the fifth time.',
      'It is never used in APA 7th edition.'
    ],
    correctAnswer: 1,
    explanation: 'In APA 7th edition, sources with 3+ authors are abbreviated to the first author\'s surname followed by "et al." from the very first citation.'
  },
  {
    id: 'q5_11',
    lectureId: 5,
    question: 'If you use a direct quote from a website that has no page numbers, you should:',
    options: [
      'Omit the citation entirely.',
      'Use paragraph numbers (e.g., para. 4) or heading names to identify the location.',
      'Invent page numbers.',
      'Write "page unknown" in the citation.'
    ],
    correctAnswer: 1,
    explanation: 'For sources without page numbers, use paragraph numbers, section headings, or timestamps (for audio/video).'
  },
  {
    id: 'q5_12',
    lectureId: 5,
    question: 'Plagiarism is defined as:',
    options: [
      'Summarizing a paper with appropriate citation.',
      'Presenting someone else\'s work or ideas as your own without proper acknowledgment.',
      'Writing an essay with more than twenty references.',
      'Paraphrasing a text using your own words.'
    ],
    correctAnswer: 1,
    explanation: 'Plagiarism is using others\' intellectual output without giving credit, whether done intentionally or accidentally.'
  },
  {
    id: 'q5_13',
    lectureId: 5,
    question: 'What is "self-plagiarism"?',
    options: [
      'Copying ideas from your sister\'s notes.',
      'Submitting your own previously graded work for a new assignment without permission.',
      'Plagiarizing an author who shares your last name.',
      'Writing a diary entry.'
    ],
    correctAnswer: 1,
    explanation: 'Self-plagiarism is recycling your own previous academic work and presenting it as completely new and original.'
  },
  {
    id: 'q5_14',
    lectureId: 5,
    question: 'Which of the following is a primary source?',
    options: [
      'A textbook summarizing multiple research studies.',
      'An original research article written by the scientists who conducted the study.',
      'A newspaper article reviewing a book.',
      'An encyclopedia entry.'
    ],
    correctAnswer: 1,
    explanation: 'Primary sources are direct, original records or first-hand accounts of research, events, or data.'
  },
  {
    id: 'q5_15',
    lectureId: 5,
    question: 'Which is a secondary source?',
    options: [
      'An interview transcript.',
      'A review article summarizing existing literature.',
      'A laboratory research log.',
      'A diary written during an historical event.'
    ],
    correctAnswer: 1,
    explanation: 'Secondary sources analyze, interpret, or summarize primary source records and data.'
  },
  {
    id: 'q5_16',
    lectureId: 5,
    question: 'What does "ibid." stand for?',
    options: [
      'A Latin term meaning "in the same place" (used in footnote citation styles, not APA).',
      'An abbreviation for "important bibliography definition."',
      'A term meaning "excluding all references."',
      'A short form of "in bid" meaning auction.'
    ],
    correctAnswer: 0,
    explanation: '"Ibid." is short for "ibidem," meaning "in the same place" (used in footnote-based styles like Chicago, but not APA).'
  },
  {
    id: 'q5_17',
    lectureId: 5,
    question: 'Which is the correct APA end-text format for a book?',
    options: [
      'Hoff, J. (2014). Academic writing essentials. Publisher.',
      'Hoff, J. Academic writing essentials (2014). Publisher.',
      'Hoff, J., Publisher, 2014, Academic writing essentials.',
      'Academic writing essentials by Hoff, J. (2014). Publisher.'
    ],
    correctAnswer: 0,
    explanation: 'The standard APA 7th edition book reference format is: Author, A. A. (Year). Title of book (italicized). Publisher.'
  },
  {
    id: 'q5_18',
    lectureId: 5,
    question: 'In APA, the titles of book chapters or journal articles are:',
    options: [
      'Italicized.',
      'Written in regular font without italics, while book or journal titles are italicized.',
      'Underlined.',
      'Written in ALL CAPS.'
    ],
    correctAnswer: 1,
    explanation: 'In APA, the titles of container sources (books, journals) are italicized, while titles of chapters or articles are in plain text.'
  },
  {
    id: 'q5_19',
    lectureId: 5,
    question: 'When citing a source with two authors in-text in parenthetical citation, use:',
    options: ['and', '&', 'et al.', 'comma only'],
    correctAnswer: 1,
    explanation: 'APA uses the ampersand (&) in parenthetical citations (e.g., Smith & Jones, 2020) and "and" in narrative citations.'
  },
  {
    id: 'q5_20',
    lectureId: 5,
    question: 'Direct quotations should be used:',
    options: [
      'In every single paragraph to avoid writing original text.',
      'Sparingly, only when the original wording is exceptionally concise, distinctive, or memorable.',
      'Only in block quotation layout.',
      'Without any year citation.'
    ],
    correctAnswer: 1,
    explanation: 'Overusing quotes weakens your original voice; use them selectively and paraphrase the rest.'
  },

  // ================= LECTURE 6: COMBINING SOURCES / COHESION (20 Questions) =================
  {
    id: 'q6_1',
    lectureId: 6,
    question: 'What is the primary goal of writing a synthesis essay?',
    options: [
      'To verify the scientific validity of a single survey.',
      'To summarize one textbook chapter page-by-page.',
      'To combine, compare, and evaluate multiple sources to support a unified position.',
      'To avoid using in-text citations.'
    ],
    correctAnswer: 2,
    explanation: 'Synthesis combines various sources to show patterns, agreements, or disagreements, forming a cohesive argument.'
  },
  {
    id: 'q6_2',
    lectureId: 6,
    question: 'Which of the following is an example of a reference word used for cohesion?',
    options: [
      'The transition phrase "as a consequence".',
      'Pronouns and anaphoric expressions (e.g., "he," "this," "the latter") that replace repeated nouns.',
      'Repeating a technical term verbatim in every sentence.',
      'Using the coordinating conjunction "and."'
    ],
    correctAnswer: 1,
    explanation: 'Reference words use pronouns and anaphora to link back to nouns without repetitive phrasing.'
  },
  {
    id: 'q6_3',
    lectureId: 6,
    question: 'What is "cohesion" in academic writing?',
    options: [
      'The process of ensuring all pages are bound together.',
      'The grammatical and lexical linking of sentences to make a text smooth and readable.',
      'Writing an essay using multiple font styles.',
      'Having the exact same length for all paragraphs.'
    ],
    correctAnswer: 1,
    explanation: 'Cohesion is the logical tie between sentences and paragraphs, ensuring the text flows clearly for the reader.'
  },
  {
    id: 'q6_4',
    lectureId: 6,
    question: 'Which of the following is a transition word indicating contrast?',
    options: ['Furthermore', 'Consequently', 'Conversely', 'In other words'],
    correctAnswer: 2,
    explanation: '"Conversely" (along with "However," "On the other hand," "In contrast") signals a contrasting point.'
  },
  {
    id: 'q6_5',
    lectureId: 6,
    question: 'Which transition signals a consequence or result?',
    options: ['In addition', 'Therefore', 'Simultaneously', 'Specifically'],
    correctAnswer: 1,
    explanation: '"Therefore" (along with "Consequently," "As a result," "Thus") introduces a logical outcome.'
  },
  {
    id: 'q6_6',
    lectureId: 6,
    question: 'What is "coherent" writing?',
    options: [
      'Writing that uses highly complex vocabulary.',
      'Writing where ideas make sense logically and fit together as a unified whole.',
      'Writing with multiple illustrations.',
      'Writing in first-person active voice.'
    ],
    correctAnswer: 1,
    explanation: 'While cohesion is the structural linking, coherence is the overall conceptual clarity of the arguments.'
  },
  {
    id: 'q6_7',
    lectureId: 6,
    question: 'When combining two sources that agree on a research finding, which word is appropriate?',
    options: ['Conversely', 'Similarly', 'On the contrary', 'Nevertheless'],
    correctAnswer: 1,
    explanation: '"Similarly" (or "Likewise," "In agreement") highlights correspondence or consensus between sources.'
  },
  {
    id: 'q6_8',
    lectureId: 6,
    question: 'How do you structure a paragraph in a synthesis essay?',
    options: [
      'Dedicate each sentence to a different unrelated book.',
      'State a topic sentence, weave summarized/paraphrased source ideas, and show how they compare.',
      'Copy three paragraphs from different sources consecutively.',
      'Write only your personal opinions.'
    ],
    correctAnswer: 1,
    explanation: 'A synthesis paragraph groups sources around a theme, comparing and analyzing them together.'
  },
  {
    id: 'q6_9',
    lectureId: 6,
    question: 'Which is a cohesive device that prevents repetitive writing?',
    options: [
      'Synonyms of keywords.',
      'Copy-pasting sentences.',
      'Using the passive voice exclusively.',
      'Increasing paragraph length.'
    ],
    correctAnswer: 0,
    explanation: 'Synonyms vary your language while maintaining thematic focus, preventing monotonous repetition.'
  },
  {
    id: 'q6_10',
    lectureId: 6,
    question: 'Which word acts as a cohesive tool of addition?',
    options: ['In contrast', 'Furthermore', 'Instead', 'Thus'],
    correctAnswer: 1,
    explanation: '"Furthermore" (along with "Moreover," "In addition," "Additionally") introduces supplemental evidence.'
  },
  {
    id: 'q6_11',
    lectureId: 6,
    question: 'What is "anaphora" in text cohesion?',
    options: [
      'A spelling mistake.',
      'Using a word referring back to an earlier word to avoid repetition (e.g., "The students did well; they passed").',
      'A form of direct quote.',
      'A list of authors.'
    ],
    correctAnswer: 1,
    explanation: 'Anaphora uses pronouns or reference words to point back to an established noun.'
  },
  {
    id: 'q6_12',
    lectureId: 6,
    question: 'When a transition word like "However" is placed in the middle of a sentence, it is usually:',
    options: [
      'Written in all capitals.',
      'Set off by commas on both sides.',
      'Placed in parentheses.',
      'Underlined.'
    ],
    correctAnswer: 1,
    explanation: 'In-sentence transitions are separated by commas (e.g., "The results, however, were incomplete").'
  },
  {
    id: 'q6_13',
    lectureId: 6,
    question: 'To signal a concession in your essay, which transition is best?',
    options: ['Although', 'Consequently', 'In summary', 'That is to say'],
    correctAnswer: 0,
    explanation: '"Although" (or "Even though," "Despite") concedes a point before stating your main argument.'
  },
  {
    id: 'q6_14',
    lectureId: 6,
    question: 'Which of the following is NOT a transition category?',
    options: ['Concession', 'Contrast', 'Anaphora', 'Sequence'],
    correctAnswer: 2,
    explanation: 'Anaphora is a form of reference word cohesion, whereas transitions are distinct linking conjunctions.'
  },
  {
    id: 'q6_15',
    lectureId: 6,
    question: 'A topic sentence in a synthesis essay should:',
    options: [
      'State a single citation name.',
      'Express the central idea or theme of the paragraph.',
      'Contain a direct, long quote.',
      'Be written in bold letters.'
    ],
    correctAnswer: 1,
    explanation: 'Topic sentences establish the paragraph\'s thematic focus, directing the source analysis that follows.'
  },
  {
    id: 'q6_16',
    lectureId: 6,
    question: 'When synthesizing, if two authors have opposite results, how should you join them?',
    options: [
      'Ignore one of them to keep things simple.',
      'Use contrastive transitions like "On the other hand" or "In contrast."',
      'Join them with "And."',
      'Write them as separate, unrelated chapters.'
    ],
    correctAnswer: 1,
    explanation: 'Contrasting terms signal to the reader that the sources disagree or present opposing data.'
  },
  {
    id: 'q6_17',
    lectureId: 6,
    question: 'Which transition signals restatement or clarification?',
    options: ['In other words', 'For instance', 'On the contrary', 'Finally'],
    correctAnswer: 0,
    explanation: '"In other words" (or "Namely," "That is to say") simplifies or restates a preceding point.'
  },
  {
    id: 'q6_18',
    lectureId: 6,
    question: 'Good cohesion makes a text look like:',
    options: [
      'A series of disconnected thoughts.',
      'A unified, logically connected flow of ideas.',
      'An outline of bullet points.',
      'A collection of quotes.'
    ],
    correctAnswer: 1,
    explanation: 'Cohesion ties sentences together, ensuring structural and conceptual continuity.'
  },
  {
    id: 'q6_19',
    lectureId: 6,
    question: 'Which pronoun should be used to point back to the noun phrase "The committee"?',
    options: ['it', 'they', 'their', 'them'],
    correctAnswer: 0,
    explanation: '"The committee" is a collective noun, treated as singular, thus requiring the singular "it" or "its."'
  },
  {
    id: 'q6_20',
    lectureId: 6,
    question: 'Using transition words excessively in every sentence can make your essay look:',
    options: ['Sophisticated', 'Mechanical and over-engineered', 'Completely plagiarized', 'Poetic'],
    correctAnswer: 1,
    explanation: 'Overusing transitions disrupts natural sentence flow; use them only where logical links are needed.'
  },

  // ================= LECTURE 7: VISUAL INFO & PRESENTATION (20 Questions) =================
  {
    id: 'q7_1',
    lectureId: 7,
    question: 'Where should titles and numbers for Tables be placed in an academic paper?',
    options: [
      'Directly inside the bottom row of cells.',
      'Above the table.',
      'Below the table.',
      'In a separate appendix page only.'
    ],
    correctAnswer: 1,
    explanation: 'Academic convention requires table titles to be placed ABOVE the table.'
  },
  {
    id: 'q7_2',
    lectureId: 7,
    question: 'Where should titles for Figures (graphs, diagrams, maps, charts) be placed?',
    options: [
      'Above the figure.',
      'Below the figure.',
      'On the left margin.',
      'Directly on the axes.'
    ],
    correctAnswer: 1,
    explanation: 'Titles and labels for figures are always placed BELOW the visual representation.'
  },
  {
    id: 'q7_3',
    lectureId: 7,
    question: 'What is classified as a "Figure" in academic visual data representation?',
    options: [
      'Only photographs.',
      'Everything except tables (graphs, diagrams, maps, flowcharts).',
      'Only data lists with numbers.',
      'The bibliography list.'
    ],
    correctAnswer: 1,
    explanation: '"Figure" is a catch-all category for any non-table visual (diagram, graph, map, image).'
  },
  {
    id: 'q7_4',
    lectureId: 7,
    question: 'What is a critical guideline for using PowerPoint slides in a presentation?',
    options: [
      'Copy-paste full paragraphs from your essay to read verbatim.',
      'Limit lines to max 8 per slide, keep bullets concise, and use slides as speaking aids.',
      'Use flashy transitions and sound effects for every bullet point.',
      'Use a different font family for every single slide.'
    ],
    correctAnswer: 1,
    explanation: 'Slides are visual speaking aids. Keep text minimal (max 8 lines) so the audience listens to you.'
  },
  {
    id: 'q7_5',
    lectureId: 7,
    question: 'How should a presenter handle delivery during an academic presentation?',
    options: [
      'Read a fully written script without looking up.',
      'Speak from notes, maintain eye contact, vary voice tone, and avoid filler words.',
      'Speak as fast as possible to save time.',
      'Stare at the projector screen instead of the audience.'
    ],
    correctAnswer: 1,
    explanation: 'Eye contact, vocal variety, and speaking extemporaneously from outlines create high audience engagement.'
  },
  {
    id: 'q7_6',
    lectureId: 7,
    question: 'What are the three core structure components of an oral presentation?',
    options: [
      'Title, Content, Appendix',
      'Introduction, Body, and Conclusion',
      'Abstract, Methods, References',
      'Preamble, Slides, Questions'
    ],
    correctAnswer: 1,
    explanation: 'All standard presentations require an Introduction (aim/overview), Body (arguments), and Conclusion (summary).'
  },
  {
    id: 'q7_7',
    lectureId: 7,
    question: 'In an academic presentation, what should the Introduction achieve?',
    options: [
      'Read the entire reference list.',
      'State the aim, provide background, and outline the presentation structure.',
      'Give the results immediately.',
      'Introduce the presenter\'s family bio.'
    ],
    correctAnswer: 1,
    explanation: 'The introduction sets the stage, establishes the topic, and tells the audience what to expect.'
  },
  {
    id: 'q7_8',
    lectureId: 7,
    question: 'Why should presenters avoid trying to make a single graph do too much?',
    options: [
      'It increases the cost of the paper.',
      'It confuses the reader and fails to convey data clearly.',
      'It violates APA font margins.',
      'The printer cannot handle complex charts.'
    ],
    correctAnswer: 1,
    explanation: 'Visual information must be simple and clean; overly dense or cluttered graphs undermine comprehension.'
  },
  {
    id: 'q7_9',
    lectureId: 7,
    question: 'What is an example of a "speech filler" to minimize during delivery?',
    options: [
      'Transition words like "Therefore"',
      'Words or sounds like "uh," "hmm," "you know," or "actually" repeated constantly',
      'The name of the author',
      'Technical terms'
    ],
    correctAnswer: 1,
    explanation: 'Vocal fillers disrupt speech flow; pausing silently is better than using filler words.'
  },
  {
    id: 'q7_10',
    lectureId: 7,
    question: 'Which font guideline is recommended for PowerPoint slides?',
    options: [
      'Use highly stylized, decorative fonts.',
      'Use clear, legible, sans-serif fonts in high-contrast sizes.',
      'Use a font size of 10pt for body text.',
      'Write everything in italics.'
    ],
    correctAnswer: 1,
    explanation: 'Legibility is key; large, high-contrast, sans-serif fonts (e.g., Arial, Inter) are easily readable from a distance.'
  },
  {
    id: 'q7_11',
    lectureId: 7,
    question: 'A table in an academic report is primarily used to:',
    options: [
      'Show continuous trends over a long time.',
      'Present precise numerical data or raw variables in structured rows and columns.',
      'Display geographic maps.',
      'Decorate the page margins.'
    ],
    correctAnswer: 1,
    explanation: 'Tables are ideal for presenting dense, exact data figures that are hard to describe in prose.'
  },
  {
    id: 'q7_12',
    lectureId: 7,
    question: 'To show a continuous trend over time (e.g., population growth), which figure is best?',
    options: ['Table', 'Pie chart', 'Line graph', 'Flow diagram'],
    correctAnswer: 2,
    explanation: 'Line graphs visually track variables over time, demonstrating positive or negative trends clearly.'
  },
  {
    id: 'q7_13',
    lectureId: 7,
    question: 'To display percentage proportions of a whole, which figure should you use?',
    options: ['Line graph', 'Pie chart', 'Table', 'Bar chart'],
    correctAnswer: 1,
    explanation: 'Pie charts are designed to represent part-to-whole relationships as segment slices.'
  },
  {
    id: 'q7_14',
    lectureId: 7,
    question: 'Every table or figure used in your report must be:',
    options: [
      'Copied from Google Images without credit.',
      'Numbered, titled, and actively discussed/referred to in the text.',
      'Deleted before submitting.',
      'Printed in full color only.'
    ],
    correctAnswer: 1,
    explanation: 'Visuals cannot stand alone; you must refer to them (e.g., "as shown in Table 1") and discuss their relevance.'
  },
  {
    id: 'q7_15',
    lectureId: 7,
    question: 'What is a "signpost" in an oral presentation?',
    options: [
      'A physical sign you hold up.',
      'Verbal phrases that guide the audience through different sections (e.g., "Turning now to...").',
      'The title slide.',
      'The font color scheme.'
    ],
    correctAnswer: 1,
    explanation: 'Signposts (like "Firstly," "In conclusion," "Moving to my next point") help listeners track your organization.'
  },
  {
    id: 'q7_16',
    lectureId: 7,
    question: 'When presenting slides, you should:',
    options: [
      'Stand still without moving or gesturing.',
      'Maintain balanced posture, use natural gestures, and face the audience.',
      'Pace rapidly around the room.',
      'Turn your back to the audience to read the slides.'
    ],
    correctAnswer: 1,
    explanation: 'Natural movement, an open posture, and eye contact establish confidence and rapport.'
  },
  {
    id: 'q7_17',
    lectureId: 7,
    question: 'What should be placed on the final slide of an academic presentation?',
    options: ['A funny cartoon', 'A list of key references cited during the talk', 'An empty white screen', 'The abstract in full'],
    correctAnswer: 1,
    explanation: 'Concluding with a reference slide attributes credit and maintains academic rigor.'
  },
  {
    id: 'q7_18',
    lectureId: 7,
    question: 'If a presentation has a 10-minute limit, what is the recommended number of slides?',
    options: ['50 slides', '8 to 12 slides', '1 slide only', 'Exactly 100 slides'],
    correctAnswer: 1,
    explanation: 'A general rule is about 1 slide per minute, allowing enough time to explain each point without rushing.'
  },
  {
    id: 'q7_19',
    lectureId: 7,
    question: 'Which of the following describes "audience awareness"?',
    options: [
      'Ignoring audience questions.',
      'Adapting your language, complexity, and volume to fit your listeners.',
      'Focusing on the smartest person in the room.',
      'Reading from a script without looking up.'
    ],
    correctAnswer: 1,
    explanation: 'Audience awareness ensures your content, tone, and pacing are appropriate for the demographic.'
  },
  {
    id: 'q7_20',
    lectureId: 7,
    question: 'The label "Figure 1" must be written in:',
    options: ['Italics only', 'Bold, with the title in italics (under APA 7th edition guidelines)', 'Underlined ALL CAPS', 'Font size 40pt'],
    correctAnswer: 1,
    explanation: 'APA 7th edition labels "Figure 1" or "Table 1" in bold, with the specific title written in title case and italics underneath.'
  },

  // ================= LECTURE 8: ACADEMIC WRITING MODELS (20 Questions) =================
  {
    id: 'q8_1',
    lectureId: 8,
    question: 'What is a primary structural difference between a Report and an Essay?',
    options: [
      'Reports are always twice as long as standard academic essays.',
      'Reports present facts structurally using numbered headings, while essays involve reasoning in continuous prose.',
      'Essays include in-text citations, whereas reports never cite academic sources.',
      'Reports are informal, whereas essays are strictly scientific.'
    ],
    correctAnswer: 1,
    explanation: 'Reports are factual, section-based, and highly structured with headings; essays are continuous arguments.'
  },
  {
    id: 'q8_2',
    lectureId: 8,
    question: 'What is the correct structural order of components in a standard scientific report?',
    options: [
      'Title, Content, Introduction, Method, Results, Appendices',
      'Title, Abstract, Introduction, Method, Results, Discussion, References',
      'Summary, Method, Title, Results, Conclusion',
      'Title, Introduction, Preamble, Survey, List of Tables'
    ],
    correctAnswer: 1,
    explanation: 'The standard scientific report layout is: Title, Abstract, Introduction, Method, Results, Discussion, and References.'
  },
  {
    id: 'q8_3',
    lectureId: 8,
    question: 'What is the purpose of the "Abstract" in a report?',
    options: [
      'To provide a detailed list of definitions.',
      'A brief, self-contained summary of the entire report (aim, method, findings, and conclusion).',
      'To list the tables and figures.',
      'To thank the funders of the research.'
    ],
    correctAnswer: 1,
    explanation: 'An abstract gives busy readers a complete, high-level summary of the entire study in 150-250 words.'
  },
  {
    id: 'q8_4',
    lectureId: 8,
    question: 'What should be written in the "Method" section of a scientific report?',
    options: [
      'A discussion of why you chose the topic.',
      'A precise explanation of how the experiment or survey was conducted (participants, materials, procedure) to allow replication.',
      'The final statistical calculations and tables.',
      'A summary of previous scientific papers.'
    ],
    correctAnswer: 1,
    explanation: 'The Methods section must contain enough detail to let another researcher replicate the exact experiment.'
  },
  {
    id: 'q8_5',
    lectureId: 8,
    question: 'The "Results" section of a report should focus strictly on:',
    options: [
      'Your personal opinion of what the data means.',
      'Presenting the collected data and findings objectively, without interpretation or discussion.',
      'A review of the academic literature.',
      'Comparing your findings with previous scientists.'
    ],
    correctAnswer: 1,
    explanation: 'Results must state the findings objectively; interpretation and comparison are reserved for the Discussion section.'
  },
  {
    id: 'q8_6',
    lectureId: 8,
    question: 'Where do researchers interpret findings and relate them to previous studies?',
    options: ['Introduction', 'Results', 'Discussion', 'Abstract'],
    correctAnswer: 2,
    explanation: 'The Discussion section is where you interpret results, state implications, note limitations, and link back to literature.'
  },
  {
    id: 'q8_7',
    lectureId: 8,
    question: 'What is a "survey questionnaire"?',
    options: [
      'A list of interview records.',
      'A tool with clear, simple questions designed to gather data from respondents.',
      'A report written by a government agency.',
      'A statistical formula.'
    ],
    correctAnswer: 1,
    explanation: 'Questionnaires are structured data collection instruments filled out by participants.'
  },
  {
    id: 'q8_8',
    lectureId: 8,
    question: 'Which of the following is a rule for creating effective survey questions?',
    options: [
      'Make questions as long and complex as possible.',
      'Keep questions clear, simple, unbiased, and quick to answer (1-2 minutes).',
      'Ask double-barreled questions (asking two things in one).',
      'Collect excessive, unnecessary personal information.'
    ],
    correctAnswer: 1,
    explanation: 'Effective questionnaires are easy to understand, avoid leading terms, and take minimal time.'
  },
  {
    id: 'q8_9',
    lectureId: 8,
    question: 'What is the purpose of an "Appendix" in a report or essay?',
    options: [
      'To list the references alphabetically.',
      'To contain supplementary material (e.g., raw data charts, full questionnaires) that would clutter the main text.',
      'To provide the author\'s biography.',
      'To serve as the title page.'
    ],
    correctAnswer: 1,
    explanation: 'Appendices house large raw data, full questionnaires, or transcripts, keeping the main report concise.'
  },
  {
    id: 'q8_10',
    lectureId: 8,
    question: 'A long essay (2,500 - 5,000 words) typically requires which structural page?',
    options: ['An index list of all words', 'A separate Title page and Contents page', 'A glossary sheet in bold', 'A photocopy of the sources'],
    correctAnswer: 1,
    explanation: 'Long formal essays require a cover title page and a detailed table of contents page to structure the reading.'
  },
  {
    id: 'q8_11',
    lectureId: 8,
    question: 'What is the "Introduction" section of an essay or report designed to do?',
    options: [
      'Summarize all findings.',
      'Introduce the topic, state the thesis/aim, define scope, and outline the structure.',
      'Present raw graphs.',
      'List the references.'
    ],
    correctAnswer: 1,
    explanation: 'The introduction defines the context, scope, thesis statement, and map of the paper.'
  },
  {
    id: 'q8_12',
    lectureId: 8,
    question: 'What is the core difference between "Results" and "Discussion"?',
    options: [
      'Results is written in first person; Discussion in third person.',
      'Results presents what happened; Discussion interprets why it happened and what it means.',
      'Results contains references; Discussion contains none.',
      'There is no difference; they are identical.'
    ],
    correctAnswer: 1,
    explanation: 'Results is objective presentation of facts; Discussion is interpretive and analytical.'
  },
  {
    id: 'q8_13',
    lectureId: 8,
    question: 'A report "Executive Summary" is typically written for:',
    options: [
      'Other scientists in the lab only.',
      'Busy decision-makers or managers who need a rapid, non-technical overview of conclusions and recommendations.',
      'Students in high school.',
      'The book publisher.'
    ],
    correctAnswer: 1,
    explanation: 'An Executive Summary condenses the entire report, highlighting recommendations for quick decision-making.'
  },
  {
    id: 'q8_14',
    lectureId: 8,
    question: 'Which of the following is true about a report\'s "Conclusion"?',
    options: [
      'It should introduce completely new arguments and raw data.',
      'It summarizes the main findings and restates how the report\'s aims were achieved, without adding new data.',
      'It is only written in bullet points.',
      'It must be at least five pages long.'
    ],
    correctAnswer: 1,
    explanation: 'Conclusions tie together the study, summarizing outcomes without introducing new data or arguments.'
  },
  {
    id: 'q8_15',
    lectureId: 8,
    question: 'What are "demographic questions" in a survey questionnaire?',
    options: [
      'Questions about the geographical terrain.',
      'Questions collecting background variables of respondents (e.g., age, gender, occupation, education level).',
      'Questions about scientific formulas.',
      'Questions asking for subjective opinions.'
    ],
    correctAnswer: 1,
    explanation: 'Demographic queries identify the sample characteristics, enabling sub-group data analysis.'
  },
  {
    id: 'q8_16',
    lectureId: 8,
    question: 'A closed-ended question in a questionnaire is one where:',
    options: [
      'The respondent can write any length of text they want.',
      'The respondent must select from a predefined set of answers (e.g., Yes/No, Multiple Choice).',
      'The question is kept secret from the public.',
      'The questionnaire is closed after 10 seconds.'
    ],
    correctAnswer: 1,
    explanation: 'Closed-ended questions offer set choices, making quantitative statistical analysis highly efficient.'
  },
  {
    id: 'q8_17',
    lectureId: 8,
    question: 'An open-ended question is ideal when a researcher wants:',
    options: [
      'Predefined percentages and bar charts.',
      'Detailed, qualitative, expressive answers in the respondent\'s own words.',
      'Quick answers that take less than 2 seconds to count.',
      'Binary answers.'
    ],
    correctAnswer: 1,
    explanation: 'Open-ended queries allow participants to explain opinions, generating rich qualitative data.'
  },
  {
    id: 'q8_18',
    lectureId: 8,
    question: 'Which is a key feature of academic essay structure?',
    options: [
      'Numbered subheadings for every single sentence.',
      'A continuous, flowing narrative grouped into logical paragraphs around a main thesis.',
      'A list of tables on the first page.',
      'informal first-person language throughout.'
    ],
    correctAnswer: 1,
    explanation: 'Essays are written as cohesive, continuous prose focusing on logical defense of a thesis.'
  },
  {
    id: 'q8_19',
    lectureId: 8,
    question: 'Which of the following belongs in the Introduction of a scientific report?',
    options: [
      'The final calculations of data.',
      'The literature review, research rationale, and hypotheses being tested.',
      'The raw interview notes.',
      'The full citation biography.'
    ],
    correctAnswer: 1,
    explanation: 'The introduction frames the background, details current research, and states the hypotheses.'
  },
  {
    id: 'q8_20',
    lectureId: 8,
    question: 'A well-formatted report must be written in:',
    options: [
      'A single, massive paragraph.',
      'Clear, logical headings, sub-headings, and concise paragraphs.',
      'Handwritten cursive.',
      'Fictional narrative style.'
    ],
    correctAnswer: 1,
    explanation: 'Headings and structured hierarchies enable easy navigation in factual reports.'
  }
];

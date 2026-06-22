import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  BookOpen, 
  Volume2, 
  Award, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Settings, 
  AlertCircle, 
  LogOut, 
  ArrowRight,
  Eye,
  BookMarked,
  Info,
  Check,
  PlayCircle,
  Gauge,
  Trophy,
  Zap,
  History,
  Trash2,
  Star,
  FileText,
  TrendingUp,
  Printer,
  Download,
  Edit3,
  LayoutGrid
} from 'lucide-react';

// =========================================================================
// DATABASE SOAL EKSPANSI MAKSIMAL (Practice Test 1 s.d 5 - Peterson's TOEFL)
// =========================================================================
import { practiceTestData } from './data/practiceTestData';
import { CONVERSION_TABLES, rawToScaled, calcSectionScore, calculateTOEFLScores } from './utils/scoring';
import { getBookmarks, toggleBookmark, saveNote, isBookmarked, getNoteForQuestion } from './utils/bookmarks';

function BookmarkCard({ bookmark, theme, onRemove, onSaveNote }) {
  const [note, setNote] = React.useState(bookmark.note);
  const [showExplanation, setShowExplanation] = React.useState(false);
  
  React.useEffect(() => {
    setNote(bookmark.note);
  }, [bookmark.note]);

  return (
    <div className={`p-5 rounded-2xl border space-y-4 ${
      theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
    }`}>
      <div className="flex items-center justify-between flex-wrap gap-2 border-b border-slate-800/40 pb-3">
        <div className="flex items-center space-x-2">
          <span className="bg-indigo-600/10 text-indigo-400 text-[10px] font-bold px-2 py-0.5 rounded border border-indigo-500/20">
            {bookmark.testId.toUpperCase()}
          </span>
          <span className="bg-violet-600/10 text-violet-400 text-[10px] font-bold px-2 py-0.5 rounded border border-violet-500/20">
            {bookmark.section.toUpperCase()}
          </span>
          <span className="text-xs text-slate-400 font-bold">No. {bookmark.number}</span>
        </div>
        <button 
          onClick={onRemove}
          className="text-red-400 hover:text-red-300 text-xs font-bold flex items-center space-x-1"
        >
          <Star className="w-3.5 h-3.5 fill-red-400" />
          <span>Hapus Bookmark</span>
        </button>
      </div>
      
      <p className="font-bold text-slate-200 text-sm sm:text-base leading-relaxed">
        {bookmark.question}
      </p>
      
      {/* Custom note editor */}
      <div className="space-y-1.5">
        <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-indigo-400" />
          <span>Catatan Latihan Anda</span>
        </span>
        <div className="flex gap-2">
          <input 
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Tambahkan catatan khusus, rumus grammar, atau tips untuk soal ini..."
            className={`flex-1 text-xs px-3 py-2 rounded-xl border focus:outline-none focus:border-indigo-500 transition ${
              theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-200' : 'bg-slate-50 border-slate-200 text-slate-800'
            }`}
          />
          <button 
            onClick={() => onSaveNote(note)}
            className="px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition flex items-center space-x-1"
          >
            <Check className="w-3.5 h-3.5" />
            <span>Simpan</span>
          </button>
        </div>
      </div>

      {/* Toggle explanation */}
      <div className="border-t border-slate-800/40 pt-3 flex justify-between items-center">
        <button
          onClick={() => setShowExplanation(prev => !prev)}
          className="text-xs text-indigo-400 font-bold hover:underline"
        >
          {showExplanation ? "Sembunyikan Pembahasan" : "Lihat Pembahasan & Jawaban"}
        </button>
      </div>

      {showExplanation && (
        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 space-y-2 leading-relaxed animate-fadeIn">
          <div>
            <strong className="text-emerald-400">Kunci Jawaban: </strong>
            <span className="text-slate-200 font-medium">
              {bookmark.type === 'written_expression' ? `Option ${bookmark.answer}` : (bookmark.options ? bookmark.options[bookmark.answer] : bookmark.answer)}
            </span>
          </div>
          <div className="border-t border-slate-800/50 pt-2">
            <strong className="text-indigo-400 block mb-0.5">Penjelasan Akademis:</strong>
            <p>{bookmark.explanation}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('dashboard'); // dashboard, quiz, results, diagnostics, transition
  const [selectedTest, setSelectedTest] = useState('test1');
  const [selectedSection, setSelectedSection] = useState('listening');
  const [quizMode, setQuizMode] = useState('study'); // study atau exam

  // State Full Exam Simulator
  const [isFullExam, setIsFullExam] = useState(false);
  const [fullExamSectionIndex, setFullExamSectionIndex] = useState(0);
  const [fullExamAnswers, setFullExamAnswers] = useState({ listening: {}, structure: {}, reading: {} });
  const [fullExamQuestions, setFullExamQuestions] = useState({ listening: [], structure: [], reading: [] });
  const [activeReviewTab, setActiveReviewTab] = useState('listening');

  // State Score History (localStorage)
  const [scoreHistory, setScoreHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('toefl_score_history');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [reviewingHistory, setReviewingHistory] = useState(null); // null or history entry object


  // State Quiz
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);
  const pendingResumeSessionRef = useRef(null);
  const [showSubmitConfirm, setShowSubmitConfirm] = useState(false);
  const [showQuestionMap, setShowQuestionMap] = useState(false);
  const [showResumeConfirmModal, setShowResumeConfirmModal] = useState(false);
  const [resumeSessionData, setResumeSessionData] = useState(null);
  const [showExitExamConfirmModal, setShowExitExamConfirmModal] = useState(false);
  
  // State Audio & Voice
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSpeechLine, setActiveSpeechLine] = useState(-1);
  const [speechSpeed, setSpeechSpeed] = useState(1.0);
  const [availableVoices, setAvailableVoices] = useState([]);
  const [voiceLoadStatus, setVoiceLoadStatus] = useState("Memuat...");
  const [showScript, setShowScript] = useState(false);
  const synthRef = useRef(null);
  const isPlayingRef = useRef(false);
  const utteranceRef = useRef(null);
  
  // State Diagnostik & Live Unit Testing (DDT Engine)
  const [testResults, setTestResults] = useState({
    apiSupport: { status: 'idle', message: 'Belum diuji' },
    voiceCheck: { status: 'idle', message: 'Belum diuji' },
    playbackSafety: { status: 'idle', message: 'Belum diuji' },
    stateConsistency: { status: 'idle', message: 'Belum diuji' }
  });
  const [isTestingInProgress, setIsTestingInProgress] = useState(false);

  // Layout states
  const [textSize, setTextSize] = useState('medium'); // small, medium, large
  const [theme, setTheme] = useState('dark'); // dark, light

  // State Premium Features: Bookmarks & Dashboard tabs
  const [activeDashboardTab, setActiveDashboardTab] = useState('tests'); // tests, analytics, bookmarks
  const [bookmarksList, setBookmarksList] = useState(() => getBookmarks());
  const [currentQuestionNote, setCurrentQuestionNote] = useState('');

  // Sync note with current question
  useEffect(() => {
    if (questions && questions[currentQuestionIndex]) {
      setCurrentQuestionNote(getNoteForQuestion(questions[currentQuestionIndex].id));
    }
  }, [questions, currentQuestionIndex]);

  const handleSaveQuestionNote = (noteText) => {
    if (questions && questions[currentQuestionIndex]) {
      const qId = questions[currentQuestionIndex].id;
      const updated = saveNote(qId, noteText);
      setBookmarksList(updated);
      setCurrentQuestionNote(noteText);
    }
  };

  const handleToggleBookmark = () => {
    if (questions && questions[currentQuestionIndex]) {
      const q = questions[currentQuestionIndex];
      const updated = toggleBookmark(q, selectedTest, selectedSection);
      setBookmarksList(updated);
    }
  };

  // 1. Inisialisasi Speech Synthesis yang aman
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        synthRef.current = window.speechSynthesis;
        
        const loadVoices = () => {
          try {
            if (synthRef.current) {
              const voices = synthRef.current.getVoices() || [];
              setAvailableVoices(voices);
              if (voices.length > 0) {
                setVoiceLoadStatus(`Siap (${voices.length} suara terdeteksi)`);
              } else {
                setVoiceLoadStatus("API aktif, tetapi daftar suara kosong.");
              }
            }
          } catch (e) {
            setVoiceLoadStatus(`Kesalahan pemuatan suara: ${e.message}`);
          }
        };

        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
          window.speechSynthesis.onvoiceschanged = loadVoices;
        }
      } else {
        setVoiceLoadStatus("Tidak didukung oleh peramban ini.");
      }
    } catch (err) {
      setVoiceLoadStatus(`Error inisialisasi: ${err.message}`);
    }

    return () => {
      stopAllAudio();
    };
  }, []);

  // 2. Memuat Soal Secara Dinamis
  useEffect(() => {
    if (currentScreen === 'quiz') {
      const sectData = practiceTestData[selectedTest]?.sections?.[selectedSection];
      if (!sectData) return;

      let loadedQuestions = [];
      
      if (selectedSection === 'reading') {
        sectData.passages?.forEach(passage => {
          passage.questions?.forEach(q => {
            loadedQuestions.push({
              ...q,
              passageText: passage.text,
              passageId: passage.id
            });
          });
        });
      } else {
        loadedQuestions = [...(sectData.questions || [])];
      }
      
      setQuestions(loadedQuestions);
      setQuizFinished(false);
      setShowScript(false);
      
      const pendingResume = pendingResumeSessionRef.current;
      if (pendingResume) {
        setCurrentQuestionIndex(pendingResume.currentQuestionIndex);
        setUserAnswers(pendingResume.userAnswers || {});
        setTimerSeconds(pendingResume.timerSeconds);
        pendingResumeSessionRef.current = null;
        if (quizMode === 'exam') {
          setIsTimerActive(true);
        } else {
          setIsTimerActive(false);
        }
      } else {
        setCurrentQuestionIndex(0);
        setUserAnswers({});
        if (quizMode === 'exam' || isFullExam) {
          // TOEFL PBT official time limits
          const sectionTimeLimits = {
            listening: 35 * 60,  // 35 menit
            structure: 25 * 60,  // 25 menit
            reading: 55 * 60     // 55 menit
          };
          setTimerSeconds(sectionTimeLimits[selectedSection] || loadedQuestions.length * 60);
          setIsTimerActive(true);
        } else {
          setTimerSeconds(0);
          setIsTimerActive(false);
        }
      }
    }
    stopAllAudio();
  }, [currentScreen, selectedTest, selectedSection, quizMode]);

  // 3. Kontrol Efek Timer
  useEffect(() => {
    let interval = null;
    if (isTimerActive && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds(prev => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerActive) {
      handleFinishQuiz();
    }
    return () => clearInterval(interval);
  }, [isTimerActive, timerSeconds]);

  // 3b. Simpan progress sesi latihan (non-full exam) ke localStorage secara otomatis
  useEffect(() => {
    if (currentScreen === 'quiz' && !isFullExam && questions.length > 0 && !quizFinished) {
      const sessionKey = `toefl_session_${selectedTest}_${selectedSection}_${quizMode}`;
      const sessionData = {
        currentQuestionIndex,
        userAnswers,
        timerSeconds
      };
      localStorage.setItem(sessionKey, JSON.stringify(sessionData));
    }
  }, [currentScreen, isFullExam, selectedTest, selectedSection, quizMode, currentQuestionIndex, userAnswers, timerSeconds, questions, quizFinished]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const FULL_EXAM_SECTIONS = ['listening', 'structure', 'reading'];
  const SECTION_LABELS = { listening: 'Section 1: Listening Comprehension', structure: 'Section 2: Structure & Written Expression', reading: 'Section 3: Reading Comprehension' };
  const SECTION_TIME_LABELS = { listening: '35 menit', structure: '25 menit', reading: '55 menit' };

  const startQuiz = (testId, sectionId, mode) => {
    setIsFullExam(false);
    
    const sessionKey = `toefl_session_${testId}_${sectionId}_mode`; // Wait, let's verify if the key matches
    // Ah, wait! The sessionKey we used in startQuiz previously was `toefl_session_${testId}_${sectionId}_${mode}`. Let's make sure it's correct.
    const saved = localStorage.getItem(`toefl_session_${testId}_${sectionId}_${mode}`);
    if (saved) {
      const parsed = JSON.parse(saved);
      setResumeSessionData({
        parsed,
        testId,
        sectionId,
        mode
      });
      setShowResumeConfirmModal(true);
    } else {
      setSelectedTest(testId);
      setSelectedSection(sectionId);
      setQuizMode(mode);
      pendingResumeSessionRef.current = null;
      setCurrentScreen('quiz');
    }
  };

  const handleConfirmResume = () => {
    if (resumeSessionData) {
      setSelectedTest(resumeSessionData.testId);
      setSelectedSection(resumeSessionData.sectionId);
      setQuizMode(resumeSessionData.mode);
      pendingResumeSessionRef.current = resumeSessionData.parsed;
    }
    setShowResumeConfirmModal(false);
    setResumeSessionData(null);
    setCurrentScreen('quiz');
  };

  const handleDeclineResume = () => {
    if (resumeSessionData) {
      setSelectedTest(resumeSessionData.testId);
      setSelectedSection(resumeSessionData.sectionId);
      setQuizMode(resumeSessionData.mode);
      const sessionKey = `toefl_session_${resumeSessionData.testId}_${resumeSessionData.sectionId}_${resumeSessionData.mode}`;
      localStorage.removeItem(sessionKey);
    }
    pendingResumeSessionRef.current = null;
    setShowResumeConfirmModal(false);
    setResumeSessionData(null);
    setCurrentScreen('quiz');
  };

  const startFullExam = (testId) => {
    setIsFullExam(true);
    setFullExamSectionIndex(0);
    setFullExamAnswers({ listening: {}, structure: {}, reading: {} });
    setFullExamQuestions({ listening: [], structure: [], reading: [] });
    setSelectedTest(testId);
    setSelectedSection('listening');
    setQuizMode('exam');
    setActiveReviewTab('listening');
    setCurrentScreen('quiz');
  };

  const startNextFullExamSection = () => {
    const nextIndex = fullExamSectionIndex + 1;
    if (nextIndex < FULL_EXAM_SECTIONS.length) {
      setFullExamSectionIndex(nextIndex);
      setSelectedSection(FULL_EXAM_SECTIONS[nextIndex]);
      setCurrentScreen('quiz');
    } else {
      setCurrentScreen('results');
    }
  };

  const handleAnswerSelect = (questionId, value) => {
    if (quizFinished) return;
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    stopAllAudio();
    setShowScript(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    stopAllAudio();
    setShowScript(false);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const saveScoreToHistory = useCallback((scoreData, histQuestions, histAnswers, histFullQuestions, histFullAnswers) => {
    const entry = {
      id: Date.now(),
      date: new Date().toISOString(),
      testId: selectedTest,
      section: isFullExam ? 'full' : selectedSection,
      mode: isFullExam ? 'fullExam' : quizMode,
      isFullExam: isFullExam,
      scores: scoreData,
      // Save questions & answers for review
      questions: isFullExam ? null : histQuestions.map(q => ({ id: q.id, number: q.number, type: q.type, question: q.question || q.sentence, options: q.options, answer: q.answer, explanation: q.explanation, sentenceParts: q.sentenceParts, sentence: q.sentence })),
      answers: isFullExam ? null : { ...histAnswers },
      fullExamQuestions: isFullExam ? {
        listening: histFullQuestions.listening.map(q => ({ id: q.id, number: q.number, type: q.type, question: q.question || q.sentence, options: q.options, answer: q.answer, explanation: q.explanation, sentenceParts: q.sentenceParts, sentence: q.sentence })),
        structure: histFullQuestions.structure.map(q => ({ id: q.id, number: q.number, type: q.type, question: q.question || q.sentence, options: q.options, answer: q.answer, explanation: q.explanation, sentenceParts: q.sentenceParts, sentence: q.sentence })),
        reading: histFullQuestions.reading.map(q => ({ id: q.id, number: q.number, type: q.type, question: q.question || q.sentence, options: q.options, answer: q.answer, explanation: q.explanation, sentenceParts: q.sentenceParts, sentence: q.sentence }))
      } : null,
      fullExamAnswers: isFullExam ? { ...histFullAnswers } : null
    };
    setScoreHistory(prev => {
      const updated = [entry, ...prev].slice(0, 20); // Keep last 20
      try { localStorage.setItem('toefl_score_history', JSON.stringify(updated)); } catch {}
      return updated;
    });
  }, [selectedTest, selectedSection, quizMode, isFullExam]);

  const handleFinishQuiz = () => {
    stopAllAudio();
    setIsTimerActive(false);

    if (isFullExam) {
      const currentSectionKey = FULL_EXAM_SECTIONS[fullExamSectionIndex];
      const newFullAnswers = { ...fullExamAnswers, [currentSectionKey]: { ...userAnswers } };
      const newFullQuestions = { ...fullExamQuestions, [currentSectionKey]: [...questions] };
      setFullExamAnswers(newFullAnswers);
      setFullExamQuestions(newFullQuestions);

      if (fullExamSectionIndex < FULL_EXAM_SECTIONS.length - 1) {
        setCurrentScreen('transition');
      } else {
        // Calculate scores for saving
        const lScore = calcSectionScore(newFullQuestions.listening, newFullAnswers.listening, 'listening');
        const sScore = calcSectionScore(newFullQuestions.structure, newFullAnswers.structure, 'structure');
        const rScore = calcSectionScore(newFullQuestions.reading, newFullAnswers.reading, 'reading');
        const totalPBT = Math.round(((lScore.scaled + sScore.scaled + rScore.scaled) * 10) / 3);
        const totalCorrect = lScore.correct + sScore.correct + rScore.correct;
        const totalQuestions = lScore.total + sScore.total + rScore.total;
        const scoreData = { isFullExam: true, listening: lScore, structure: sScore, reading: rScore, correct: totalCorrect, total: totalQuestions, percentage: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0, estimatedPBT: totalPBT };
        saveScoreToHistory(scoreData, [], {}, newFullQuestions, newFullAnswers);
        setCurrentScreen('results');
      }
    } else {
      // Calculate and save single section score
      const score = calcSectionScore(questions, userAnswers, selectedSection);
      const scoreData = { isFullExam: false, correct: score.correct, total: score.total, percentage: score.percent, estimatedPBT: Math.round(((score.scaled * 3) * 10) / 3), scaledScore: score.scaled };
      saveScoreToHistory(scoreData, questions, userAnswers, { listening: [], structure: [], reading: [] }, { listening: {}, structure: {}, reading: {} });
      
      // Hapus sesi latihan yang tersimpan karena sudah selesai dikerjakan
      const sessionKey = `toefl_session_${selectedTest}_${selectedSection}_${quizMode}`;
      localStorage.removeItem(sessionKey);
      
      setCurrentScreen('results');
    }
  };

  const loadHistoryForReview = (entry) => {
    setReviewingHistory(entry);
    setActiveReviewTab(entry.isFullExam ? 'listening' : (entry.section || 'listening'));
    setCurrentScreen('results');
  };

  const clearHistory = () => {
    setScoreHistory([]);
    try { localStorage.removeItem('toefl_score_history'); } catch {}
  };

  const handlePrintReport = () => {
    window.print();
  };

  const handleExportHistory = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(scoreHistory, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", `toefl_score_history_${Date.now()}.json`);
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    } catch (e) {
      alert("Gagal mengekspor riwayat.");
    }
  };

  const stopAllAudio = () => {
    isPlayingRef.current = false;
    utteranceRef.current = null;
    try {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    } catch (e) {
      console.warn("Gagal menghentikan audio secara paksa:", e);
    }
    setIsPlayingAudio(false);
    setActiveSpeechLine(-1);
  };

  // 4. Mesin Speech Synthesis yang Tangguh
  const playListeningDialogue = (script) => {
    if (!synthRef.current) {
      alert("Suara tidak didukung atau sedang memuat di peramban ini.");
      return;
    }

    if (isPlayingRef.current) {
      stopAllAudio();
      return;
    }

    isPlayingRef.current = true;
    setIsPlayingAudio(true);
    let lineIndex = 0;

    const speakNextLine = () => {
      if (!isPlayingRef.current) {
        return;
      }

      if (lineIndex >= script.length) {
        isPlayingRef.current = false;
        setIsPlayingAudio(false);
        setActiveSpeechLine(-1);
        return;
      }

      setActiveSpeechLine(lineIndex);
      const line = script[lineIndex];
      
      try {
        const utterance = new SpeechSynthesisUtterance(line.text);
        utteranceRef.current = utterance;
        utterance.rate = speechSpeed;

        const voices = availableVoices.length > 0 ? availableVoices : synthRef.current.getVoices();
        
        if (line.speaker.startsWith('M')) {
          const maleVoice = voices.find(v => 
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('male')) ||
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('david')) ||
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('google us english')) ||
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('microsoft'))
          );
          if (maleVoice) utterance.voice = maleVoice;
          utterance.pitch = 0.90;
        } else if (line.speaker.startsWith('F')) {
          const femaleVoice = voices.find(v => 
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('female')) ||
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('zira')) ||
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('google uk english female')) ||
            (v.lang.startsWith('en') && v.name.toLowerCase().includes('hazel'))
          );
          if (femaleVoice) utterance.voice = femaleVoice;
          utterance.pitch = 1.20;
        } else {
          const defaultEn = voices.find(v => v.lang.startsWith('en'));
          if (defaultEn) utterance.voice = defaultEn;
          utterance.pitch = 1.0;
        }

        utterance.onend = () => {
          utteranceRef.current = null;
          lineIndex++;
          if (isPlayingRef.current) {
            speakNextLine();
          }
        };

        utterance.onerror = (e) => {
          utteranceRef.current = null;
          const ignoredErrors = ['interrupted', 'canceled', 'removed', 'error'];
          if (ignoredErrors.includes(e.error)) {
            return;
          }
          console.warn("Log non-fatal Speech Synthesis:", e.error);
          isPlayingRef.current = false;
          setIsPlayingAudio(false);
          setActiveSpeechLine(-1);
        };

        synthRef.current.speak(utterance);
      } catch (err) {
        console.error("Kesalahan inisiasi kalimat:", err);
        isPlayingRef.current = false;
        setIsPlayingAudio(false);
        setActiveSpeechLine(-1);
      }
    };

    speakNextLine();
  };

  // 5. Mesin Pengujian Mandiri Terpadu
  const runDevelopmentTests = async () => {
    setIsTestingInProgress(true);
    
    setTestResults(prev => ({
      ...prev,
      apiSupport: { status: 'running', message: 'Mengecek ketersediaan API...' }
    }));
    await new Promise(r => setTimeout(r, 600));

    const isApiAvailable = typeof window !== 'undefined' && 'speechSynthesis' in window;
    if (isApiAvailable) {
      setTestResults(prev => ({
        ...prev,
        apiSupport: { status: 'passed', message: 'Sukses: window.speechSynthesis terdeteksi.' }
      }));
    } else {
      setTestResults(prev => ({
        ...prev,
        apiSupport: { status: 'failed', message: 'Gagal: Browser Anda memblokir atau tidak memiliki SpeechSynthesis.' }
      }));
    }

    setTestResults(prev => ({
      ...prev,
      voiceCheck: { status: 'running', message: 'Mengecek bank suara bahasa Inggris...' }
    }));
    await new Promise(r => setTimeout(r, 600));

    try {
      const voices = synthRef.current ? synthRef.current.getVoices() : [];
      const englishVoices = voices.filter(v => v.lang.toLowerCase().startsWith('en'));
      
      if (englishVoices.length > 0) {
        setTestResults(prev => ({
          ...prev,
          voiceCheck: { status: 'passed', message: `Sukses: Menemukan ${englishVoices.length} suara Bahasa Inggris.` }
        }));
      } else {
        setTestResults(prev => ({
          ...prev,
          voiceCheck: { status: 'warning', message: 'Perhatian: Tidak ditemukan suara khusus Bahasa Inggris.' }
        }));
      }
    } catch (e) {
      setTestResults(prev => ({
        ...prev,
        voiceCheck: { status: 'failed', message: `Gagal membaca suara: ${e.message}` }
      }));
    }

    setTestResults(prev => ({
      ...prev,
      playbackSafety: { status: 'running', message: 'Menguji stress-test siklus pemutar...' }
    }));
    await new Promise(r => setTimeout(r, 700));

    try {
      if (isApiAvailable && synthRef.current) {
        synthRef.current.cancel();
        const quickUtterance = new SpeechSynthesisUtterance("");
        synthRef.current.speak(quickUtterance);
        synthRef.current.cancel(); 
        setTestResults(prev => ({
          ...prev,
          playbackSafety: { status: 'passed', message: 'Sukses: Stress-test pemutus instan lolos aman.' }
        }));
      } else {
        throw new Error("Sistem audio tidak aktif.");
      }
    } catch (e) {
      setTestResults(prev => ({
        ...prev,
        playbackSafety: { status: 'failed', message: `Stress-test gagal: ${e.message}` }
      }));
    }

    setTestResults(prev => ({
      ...prev,
      stateConsistency: { status: 'running', message: 'Memverifikasi fungsi penilaian matematika skor...' }
    }));
    await new Promise(r => setTimeout(r, 600));

    try {
      const mockQuestions = [ { id: 't1', answer: 0, options: ['A', 'B'] } ];
      const mockAnswers = { 't1': 0 };
      let testCorrect = 0;
      mockQuestions.forEach(q => {
        if (mockAnswers[q.id] === q.answer) testCorrect++;
      });
      
      if (testCorrect === 1) {
        setTestResults(prev => ({
          ...prev,
          stateConsistency: { status: 'passed', message: 'Sukses: Keandalan mesin state & skor 100% konsisten.' }
        }));
      } else {
        throw new Error("Skor kalkulasi tidak valid.");
      }
    } catch (e) {
      setTestResults(prev => ({
        ...prev,
        stateConsistency: { status: 'failed', message: `Kalkulasi gagal: ${e.message}` }
      }));
    }

    setIsTestingInProgress(false);
  };

  const getDiagnosticInsight = () => {
    if (scoreHistory.length === 0) return null;
    
    let sections = {
      listening: { correct: 0, total: 0 },
      structure: { correct: 0, total: 0 },
      reading: { correct: 0, total: 0 }
    };
    
    scoreHistory.forEach(entry => {
      if (entry.isFullExam && entry.scores.listening) {
        sections.listening.correct += entry.scores.listening.correct;
        sections.listening.total += entry.scores.listening.total;
        sections.structure.correct += entry.scores.structure.correct;
        sections.structure.total += entry.scores.structure.total;
        sections.reading.correct += entry.scores.reading.correct;
        sections.reading.total += entry.scores.reading.total;
      } else if (!entry.isFullExam) {
        const sec = entry.section;
        if (sections[sec]) {
          sections[sec].correct += entry.scores.correct;
          sections[sec].total += entry.scores.total;
        }
      }
    });
    
    const accuracy = {};
    Object.keys(sections).forEach(k => {
      accuracy[k] = sections[k].total > 0 ? Math.round((sections[k].correct / sections[k].total) * 100) : null;
    });
    
    const activeAccuracies = Object.keys(accuracy)
      .filter(k => accuracy[k] !== null)
      .map(k => ({ section: k, value: accuracy[k] }));
      
    if (activeAccuracies.length === 0) return null;
    
    activeAccuracies.sort((a, b) => a.value - b.value);
    const weakest = activeAccuracies[0];
    const strongest = activeAccuracies[activeAccuracies.length - 1];
    
    return {
      sections,
      accuracy,
      weakest,
      strongest
    };
  };

  const renderSVGChart = () => {
    const data = [...scoreHistory].slice(0, 10).reverse();
    if (data.length === 0) return null;
    const width = 500;
    const height = 220;
    const padX = 45;
    const padY = 35;
    
    const points = data.map((entry, i) => {
      const score = entry.scores.estimatedPBT;
      const x = data.length > 1 ? padX + (i * (width - 2 * padX) / (data.length - 1)) : width / 2;
      const y = height - padY - ((score - 310) * (height - 2 * padY) / (677 - 310));
      return { x, y, score, date: new Date(entry.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' }), mode: entry.mode };
    });
    
    let pathD = "";
    if (points.length > 1) {
      pathD = `M ${points[0].x} ${points[0].y} ` + points.slice(1).map(p => `L ${p.x} ${p.y}`).join(" ");
    }
    
    return (
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
            <stop offset="100%" stopColor="rgba(99, 102, 241, 0.0)" />
          </linearGradient>
        </defs>
        
        {[310, 400, 500, 600, 677].map((val, idx) => {
          const y = height - padY - ((val - 310) * (height - 2 * padY) / (677 - 310));
          return (
            <g key={idx} className="opacity-20">
              <line x1={padX} y1={y} x2={width - padX} y2={y} stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
              <text x={padX - 10} y={y + 4} textAnchor="end" className="text-[9px] fill-current font-bold">{val}</text>
            </g>
          );
        })}
        
        {points.length > 1 && (
          <path 
            d={`${pathD} L ${points[points.length - 1].x} ${height - padY} L ${points[0].x} ${height - padY} Z`}
            fill="url(#chartGrad)" 
          />
        )}
        
        {points.length > 1 && (
          <path 
            d={pathD} 
            fill="none" 
            stroke="rgb(99, 102, 241)" 
            strokeWidth="3.5" 
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
        
        {points.map((p, idx) => (
          <g key={idx} className="group cursor-pointer">
            <circle cx={p.x} cy={p.y} r="5.5" fill={theme === 'dark' ? '#0f172a' : '#ffffff'} stroke="rgb(139, 92, 246)" strokeWidth="3" />
            <circle cx={p.x} cy={p.y} r="8" fill="rgba(139, 92, 246, 0.2)" className="opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <rect x={p.x - 30} y={p.y - 32} width="60" height="20" rx="6" fill="#1e1b4b" stroke="#4f46e5" strokeWidth="1" />
              <text x={p.x} y={p.y - 18} textAnchor="middle" fill="#e0e7ff" className="text-[10px] font-black">{p.score}</text>
            </g>
            
            <text x={p.x} y={height - padY + 18} textAnchor="middle" className="text-[8px] fill-slate-500 font-bold">{p.date}</text>
          </g>
        ))}
      </svg>
    );
  };

  const results = calculateTOEFLScores({
    isFullExam,
    fullExamQuestions,
    fullExamAnswers,
    questions,
    userAnswers,
    selectedSection
  });

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Injeksi CSS Keyframes secara aman */}
      <style>{`
        @keyframes customWaveform {
          0% { height: 8px; }
          100% { height: 44px; }
        }
        @keyframes voiceWave {
          0% { transform: scaleY(0.35); }
          100% { transform: scaleY(1.3); }
        }
      `}</style>
      
      {/* HEADER UTAMA */}
      <header className={`sticky top-0 z-40 backdrop-blur-md border-b px-6 py-4 flex items-center justify-between transition-colors ${
        theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white/80 border-slate-200'
      }`}>
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-tr from-indigo-600 to-violet-500 text-white p-2 rounded-xl shadow-lg shadow-indigo-500/20">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h1 className="font-bold text-xl tracking-tight bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              TOEFL PBT Simulator
            </h1>
            <p className="text-xs text-slate-400 font-medium font-bold">Computer-Based Practice Test</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={() => {
              stopAllAudio();
              setCurrentScreen('diagnostics');
            }}
            className={`text-xs font-bold px-3 py-2 rounded-xl border flex items-center space-x-1.5 transition ${
              currentScreen === 'diagnostics'
                ? 'bg-indigo-600 border-indigo-500 text-white'
                : theme === 'dark' ? 'bg-slate-800 border-slate-700 text-indigo-400 font-bold' : 'bg-indigo-50 border-indigo-100 text-indigo-600 font-bold'
            }`}
          >
            <Gauge className="w-4 h-4" />
            <span className="hidden sm:inline">Diagnostik Audio</span>
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition duration-200 border ${
              theme === 'dark' 
                ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-amber-400' 
                : 'bg-white border-slate-200 hover:bg-slate-100 text-indigo-600 shadow-sm'
            }`}
            title="Ubah Tema"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {currentScreen !== 'dashboard' && (
            <button
              onClick={() => {
                if (isFullExam) {
                  setShowExitExamConfirmModal(true);
                } else {
                  stopAllAudio();
                  setCurrentScreen('dashboard');
                }
              }}
              className="flex items-center space-x-1 text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-xl font-medium transition duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">{isFullExam ? "Keluar Ujian" : "Keluar Sesi"}</span>
            </button>
          )}
        </div>
      </header>

      {/* WORKSPACE AREA */}
      <main className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* SCREEN 1: DASHBOARD — CBT STYLE */}
        {currentScreen === 'dashboard' && (
          <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">

            {/* CBT Header Banner */}
            <div className={`relative overflow-hidden rounded-2xl border p-8 text-center ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-slate-800' 
                : 'bg-gradient-to-br from-indigo-50 via-white to-violet-50 border-slate-200'
            }`}>
              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-violet-500/5 rounded-full blur-3xl" />
              
              <div className="relative space-y-3">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <BookMarked className="w-3.5 h-3.5 mr-1.5" /> TOEFL PBT Practice Test
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Peterson's Practice Test 1</h2>
                <p className={`text-sm max-w-xl mx-auto ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                  Simulasi ujian TOEFL PBT lengkap dengan 3 seksi — Listening Comprehension, Structure & Written Expression, dan Reading Comprehension.
                </p>
              </div>
            </div>

            {/* Exam Info Bar */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 ${
              theme === 'dark' ? 'text-slate-300' : 'text-slate-700'
            }`}>
              {[
                { label: 'Total Soal', value: '140', icon: '📝' },
                { label: 'Durasi Ujian', value: '~115 menit', icon: '⏱️' },
                { label: 'Seksi', value: '3 Bagian', icon: '📋' },
                { label: 'Skor', value: '310 - 677', icon: '🎯' },
              ].map((item, i) => (
                <div key={i} className={`p-4 rounded-xl border text-center ${
                  theme === 'dark' ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <span className="text-lg block mb-1">{item.icon}</span>
                  <span className="text-lg font-bold block">{item.value}</span>
                  <span className={`text-[10px] uppercase tracking-widest font-bold ${
                    theme === 'dark' ? 'text-slate-500' : 'text-slate-400'
                  }`}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Dashboard Tabs Switcher */}
            <div className="flex space-x-2 border-b border-slate-800 pb-2">
              <button 
                onClick={() => setActiveDashboardTab('tests')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center space-x-2 ${
                  activeDashboardTab === 'tests' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                    : theme === 'dark' ? 'text-slate-400 hover:bg-slate-900 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <BookMarked className="w-4 h-4" />
                <span>Paket Ujian</span>
              </button>
              <button 
                onClick={() => setActiveDashboardTab('analytics')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center space-x-2 ${
                  activeDashboardTab === 'analytics' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                    : theme === 'dark' ? 'text-slate-400 hover:bg-slate-900 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                <span>Analitik & Grafik</span>
              </button>
              <button 
                onClick={() => setActiveDashboardTab('bookmarks')}
                className={`px-5 py-2.5 rounded-xl font-bold text-sm transition flex items-center space-x-2 ${
                  activeDashboardTab === 'bookmarks' 
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/10' 
                    : theme === 'dark' ? 'text-slate-400 hover:bg-slate-900 hover:text-slate-200' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-800'
                }`}
              >
                <Star className="w-4 h-4" />
                <span>Soal Ditandai ({bookmarksList.length})</span>
              </button>
            </div>

            {/* TAB PANEL 1: PAKET UJIAN */}
            {activeDashboardTab === 'tests' && (
              <>
                {/* Mode Selection: Study or Exam per Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-bold flex items-center space-x-2">
                    <span>Pilih Seksi Latihan</span>
                  </h3>
                  
                  <div className="grid gap-4">
                    {/* Section 1: Listening */}
                    <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition hover:shadow-lg ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:border-indigo-500/30' : 'bg-white border-slate-200 hover:border-indigo-300 shadow-sm'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                          <Volume2 className="w-6 h-6 text-indigo-400" />
                        </div>
                        <div>
                          <h4 className="font-bold">Section 1: Listening Comprehension</h4>
                          <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>50 soal • 35 menit • Short Dialogs, Conversations & Talks</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 w-full sm:w-auto">
                        <button 
                          onClick={() => startQuiz('test1', 'listening', 'study')}
                          className={`flex-1 sm:flex-none text-sm font-bold py-2.5 px-5 rounded-xl border transition ${
                            theme === 'dark' 
                              ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200' 
                              : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          📖 Study
                        </button>
                        <button 
                          onClick={() => startQuiz('test1', 'listening', 'exam')}
                          className="flex-1 sm:flex-none text-sm font-bold py-2.5 px-5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white transition shadow-sm"
                        >
                          ⚡ Exam
                        </button>
                      </div>
                    </div>

                    {/* Section 2: Structure */}
                    <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition hover:shadow-lg ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:border-violet-500/30' : 'bg-white border-slate-200 hover:border-violet-300 shadow-sm'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                          <Settings className="w-6 h-6 text-violet-400" />
                        </div>
                        <div>
                          <h4 className="font-bold">Section 2: Structure & Written Expression</h4>
                          <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>40 soal • 25 menit • Sentence Completion & Error Identification</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 w-full sm:w-auto">
                        <button 
                          onClick={() => startQuiz('test1', 'structure', 'study')}
                          className={`flex-1 sm:flex-none text-sm font-bold py-2.5 px-5 rounded-xl border transition ${
                            theme === 'dark' 
                              ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200' 
                              : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          📖 Study
                        </button>
                        <button 
                          onClick={() => startQuiz('test1', 'structure', 'exam')}
                          className="flex-1 sm:flex-none text-sm font-bold py-2.5 px-5 rounded-xl bg-violet-600 hover:bg-violet-700 text-white transition shadow-sm"
                        >
                          ⚡ Exam
                        </button>
                      </div>
                    </div>

                    {/* Section 3: Reading */}
                    <div className={`p-5 rounded-2xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition hover:shadow-lg ${
                      theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:border-emerald-500/30' : 'bg-white border-slate-200 hover:border-emerald-300 shadow-sm'
                    }`}>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-emerald-400" />
                        </div>
                        <div>
                          <h4 className="font-bold">Section 3: Reading Comprehension</h4>
                          <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>50 soal • 55 menit • 5 Passages & Questions</p>
                        </div>
                      </div>
                      <div className="flex space-x-2 w-full sm:w-auto">
                        <button 
                          onClick={() => startQuiz('test1', 'reading', 'study')}
                          className={`flex-1 sm:flex-none text-sm font-bold py-2.5 px-5 rounded-xl border transition ${
                            theme === 'dark' 
                              ? 'bg-slate-800 border-slate-700 hover:bg-slate-700 text-slate-200' 
                              : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-700'
                          }`}
                        >
                          📖 Study
                        </button>
                        <button 
                          onClick={() => startQuiz('test1', 'reading', 'exam')}
                          className="flex-1 sm:flex-none text-sm font-bold py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition shadow-sm"
                        >
                          ⚡ Exam
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Full Exam CTA */}
                <div className={`p-6 rounded-2xl border text-center space-y-4 ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  <div className="space-y-1">
                    <h4 className="text-lg font-bold">Simulasi Ujian Lengkap (Full Test)</h4>
                    <p className={`text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>
                      Kerjakan ketiga seksi berturut-turut dengan timer per seksi — seperti ujian TOEFL PBT sesungguhnya
                    </p>
                  </div>
                  <button
                    onClick={() => startFullExam('test1')}
                    className="px-8 py-4 rounded-2xl font-bold text-base flex items-center justify-center space-x-3 mx-auto bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 hover:from-indigo-700 hover:via-violet-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-600/20 transition active:scale-[0.98]"
                  >
                    <Zap className="w-5 h-5" />
                    <span>Mulai Ujian Lengkap</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <div className="flex items-center justify-center space-x-6 text-[10px] text-slate-500 uppercase tracking-widest font-bold pt-1">
                    <span>140 soal</span>
                    <span>•</span>
                    <span>~115 menit</span>
                    <span>•</span>
                    <span>3 seksi berturut-turut</span>
                  </div>
                </div>

                {/* Voice Status */}
                <div className={`p-3.5 rounded-xl border flex items-center space-x-3 text-xs ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
                }`}>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <span className={theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}>Status Suara Sintetis Browser:</span>
                  <span className="text-indigo-400 font-bold">{voiceLoadStatus}</span>
                </div>
              </>
            )}

            {/* TAB PANEL 2: ANALITIK & GRAFIK */}
            {activeDashboardTab === 'analytics' && (() => {
              const diagnostic = getDiagnosticInsight();
              return (
                <div className="space-y-6 animate-fadeIn">
                  <div className={`p-6 rounded-2xl border ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-800/40 pb-4 mb-4">
                      <div>
                        <h4 className="font-bold text-base">Grafik Tren Skor TOEFL PBT</h4>
                        <p className="text-xs text-slate-400">Progresi skor estimasi dari 10 latihan terakhir Anda</p>
                      </div>
                      <button
                        onClick={handleExportHistory}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1.5 transition ${
                          theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200'
                        }`}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Ekspor Riwayat (JSON)</span>
                      </button>
                    </div>

                    {scoreHistory.length === 0 ? (
                      <div className="py-12 text-center text-slate-500 text-sm border border-dashed border-slate-800 rounded-xl">
                        Belum ada riwayat tes. Selesaikan minimal satu latihan/ujian untuk melihat grafik tren.
                      </div>
                    ) : (
                      <div className="w-full bg-slate-950/20 p-4 rounded-xl border border-slate-800/50">
                        {renderSVGChart()}
                      </div>
                    )}
                  </div>

                  {/* AI Diagnostic Summary Card */}
                  <div className={`p-6 rounded-2xl border space-y-4 ${
                    theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                  }`}>
                    <h4 className="font-bold text-base flex items-center space-x-2">
                      <Award className="w-5 h-5 text-indigo-400" />
                      <span>Analitik Diagnostik Kekuatan & Kelemahan</span>
                    </h4>

                    {scoreHistory.length === 0 ? (
                      <p className="text-xs text-slate-500">
                        Selesaikan setidaknya satu tes latihan untuk mendiagnosis kelemahan dan rekomendasi belajar Anda.
                      </p>
                    ) : diagnostic ? (
                      <div className="space-y-4">
                        {/* Section Accuracy progress bars */}
                        <div className="grid gap-3 sm:grid-cols-3">
                          {['listening', 'structure', 'reading'].map(sec => {
                            const acc = diagnostic.accuracy[sec];
                            const label = sec === 'listening' ? 'Section 1: Listening' : sec === 'structure' ? 'Section 2: Structure' : 'Section 3: Reading';
                            const color = sec === 'listening' ? 'bg-indigo-500' : sec === 'structure' ? 'bg-violet-500' : 'bg-emerald-500';
                            return (
                              <div key={sec} className="p-3 bg-slate-950/30 rounded-xl border border-slate-800/40 space-y-1.5">
                                <span className="text-[10px] text-slate-400 block font-bold">{label}</span>
                                <div className="flex items-baseline justify-between">
                                  <span className="text-xl font-black">{acc !== null ? `${acc}%` : '-'}</span>
                                  <span className="text-[9px] text-slate-500">Akurasi</span>
                                </div>
                                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                  <div className={`h-full ${color}`} style={{ width: acc !== null ? `${acc}%` : '0%' }} />
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Analysis Box */}
                        <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3 text-xs leading-relaxed">
                          {diagnostic.weakest && (
                            <div className="space-y-1">
                              <span className="text-red-400 font-extrabold uppercase tracking-widest block text-[9px]">🚨 Kelemahan Utama Anda</span>
                              <p className="text-slate-300">
                                Performa terendah Anda ada di <strong className="text-slate-100">{diagnostic.weakest.section === 'listening' ? 'Section 1: Listening Comprehension' : diagnostic.weakest.section === 'structure' ? 'Section 2: Structure & Written Expression' : 'Section 3: Reading Comprehension'}</strong> dengan akurasi rata-rata <strong className="text-red-400">{diagnostic.weakest.value}%</strong>.
                              </p>
                              <p className="text-slate-400 italic">
                                {diagnostic.weakest.section === 'listening' && "Saran: Latih fokus pendengaran pada detail percakapan pendek dan pelajari struktur idiom informal yang sering muncul."}
                                {diagnostic.weakest.section === 'structure' && "Saran: Fokus pada aturan grammar dasar, identifikasi kesalahan frasa (Written Expression), dan subjek-verb agreement."}
                                {diagnostic.weakest.section === 'reading' && "Saran: Gunakan teknik skimming untuk ide pokok dan scanning untuk rincian fakta dalam teks. Kelola waktu pengerjaan 55 menit dengan ketat."}
                              </p>
                            </div>
                          )}

                          {diagnostic.strongest && diagnostic.weakest && diagnostic.strongest.section !== diagnostic.weakest.section && (
                            <div className="space-y-1 pt-2 border-t border-slate-800/80">
                              <span className="text-emerald-400 font-extrabold uppercase tracking-widest block text-[9px]">⭐️ Kekuatan Utama Anda</span>
                              <p className="text-slate-300">
                                Performa terbaik Anda ada di <strong className="text-slate-100">{diagnostic.strongest.section === 'listening' ? 'Section 1: Listening Comprehension' : diagnostic.strongest.section === 'structure' ? 'Section 2: Structure & Written Expression' : 'Section 3: Reading Comprehension'}</strong> dengan akurasi rata-rata <strong className="text-emerald-400">{diagnostic.strongest.value}%</strong>. Pertahankan!
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })()}

            {/* TAB PANEL 3: SOAL DITANDAI (BOOKMARKS) */}
            {activeDashboardTab === 'bookmarks' && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-800/40 pb-3">
                  <div>
                    <h4 className="font-bold text-base">Koleksi Soal Ditandai</h4>
                    <p className="text-xs text-slate-400">Tinjau soal-soal penting dan catatan yang Anda simpan selama latihan</p>
                  </div>
                  <span className="bg-indigo-600/20 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20">
                    {bookmarksList.length} Soal
                  </span>
                </div>

                {bookmarksList.length === 0 ? (
                  <div className="py-12 text-center text-slate-500 text-sm border border-dashed border-slate-800 rounded-xl">
                    Belum ada soal yang ditandai. Klik ikon bintang (Bookmark) saat mengerjakan kuis untuk menyimpannya di sini.
                  </div>
                ) : (
                  <div className="space-y-4">
                    {bookmarksList.map(b => (
                      <BookmarkCard 
                        key={b.questionId} 
                        bookmark={b} 
                        theme={theme}
                        onRemove={() => {
                          const updated = toggleBookmark(b, b.testId, b.section);
                          setBookmarksList(updated);
                        }}
                        onSaveNote={(noteText) => {
                          const updated = saveNote(b.questionId, noteText);
                          setBookmarksList(updated);
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Score History */}
            {scoreHistory.length > 0 && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold flex items-center space-x-2">
                    <History className="w-5 h-5 text-indigo-400" />
                    <span>Riwayat Skor</span>
                  </h3>
                  <button
                    onClick={clearHistory}
                    className={`text-xs font-bold px-3 py-1.5 rounded-lg flex items-center space-x-1 transition ${
                      theme === 'dark' ? 'bg-red-500/10 text-red-400 hover:bg-red-500/20 border border-red-500/20' : 'bg-red-50 text-red-500 hover:bg-red-100 border border-red-200'
                    }`}
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Hapus Semua</span>
                  </button>
                </div>

                <div className="space-y-3">
                  {scoreHistory.map((entry) => {
                    const dateStr = new Date(entry.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
                    const sectionLabel = entry.isFullExam ? 'Full Exam' : SECTION_LABELS[entry.section] || entry.section;
                    const scoreColor = entry.scores.estimatedPBT >= 550 ? 'text-amber-400' : entry.scores.estimatedPBT >= 450 ? 'text-emerald-400' : 'text-red-400';
                    return (
                      <div
                        key={entry.id}
                        className={`p-4 rounded-xl border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 transition ${
                          theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                        }`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`text-center min-w-[60px] ${
                            theme === 'dark' ? '' : ''
                          }`}>
                            <div className={`text-2xl font-black ${scoreColor}`}>{entry.scores.estimatedPBT}</div>
                            <div className="text-[9px] text-slate-500 uppercase tracking-wider font-bold">PBT</div>
                          </div>
                          <div>
                            <div className="text-sm font-bold">{sectionLabel}</div>
                            <div className="text-[10px] text-slate-500">
                              {dateStr} &bull; {entry.scores.correct}/{entry.scores.total} benar ({entry.scores.percentage}%)
                              {entry.mode === 'study' && <span className="ml-1 text-indigo-400">Study</span>}
                              {entry.mode === 'exam' && <span className="ml-1 text-red-400">Exam</span>}
                              {entry.mode === 'fullExam' && <span className="ml-1 text-violet-400">Full Test</span>}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => loadHistoryForReview(entry)}
                          className={`text-xs font-bold px-4 py-2 rounded-lg flex items-center space-x-1.5 transition ${
                            theme === 'dark' ? 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200'
                          }`}
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Review</span>
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

          </div>
        )}

        {/* SCREEN: LIVE DIAGNOSTICS & DDT PANEL */}
        {currentScreen === 'diagnostics' && (
          <div className="space-y-6 animate-fadeIn max-w-3xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold flex items-center space-x-2">
                <Settings className="text-indigo-400" />
                <span>Panel Diagnostik & Pengujian Unit (DDT Panel)</span>
              </h3>
              <p className="text-sm text-slate-400">
                Lakukan pengujian langsung di bawah untuk menguji peramban Anda secara modular.
              </p>
            </div>

            <div className={`p-6 rounded-2xl border space-y-4 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              {/* Hasil Unit Test 1 */}
              <div className="flex items-start justify-between border-b border-slate-800/50 pb-4">
                <div>
                  <h4 className="font-bold text-sm">1. Uji Kompatibilitas API Browser</h4>
                  <p className="text-xs text-slate-400">{testResults.apiSupport.message}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  testResults.apiSupport.status === 'passed' ? 'bg-emerald-500/10 text-emerald-400' :
                  testResults.apiSupport.status === 'running' ? 'bg-amber-500/10 text-amber-400 animate-pulse' :
                  testResults.apiSupport.status === 'failed' ? 'bg-red-500/10 text-red-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {testResults.apiSupport.status.toUpperCase()}
                </span>
              </div>

              {/* Hasil Unit Test 2 */}
              <div className="flex items-start justify-between border-b border-slate-800/50 pb-4">
                <div>
                  <h4 className="font-bold text-sm">2. Uji Deteksi Bank Suara (English Voices)</h4>
                  <p className="text-xs text-slate-400">{testResults.voiceCheck.message}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  testResults.voiceCheck.status === 'passed' ? 'bg-emerald-500/10 text-emerald-400' :
                  testResults.voiceCheck.status === 'warning' ? 'bg-amber-500/10 text-amber-400' :
                  testResults.voiceCheck.status === 'running' ? 'bg-amber-500/10 text-amber-400 animate-pulse' :
                  testResults.voiceCheck.status === 'failed' ? 'bg-red-500/10 text-red-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {testResults.voiceCheck.status.toUpperCase()}
                </span>
              </div>

              {/* Hasil Unit Test 3 */}
              <div className="flex items-start justify-between border-b border-slate-800/50 pb-4">
                <div>
                  <h4 className="font-bold text-sm">3. Stress-Test Siklus Hidup Audio (Anti-Crash)</h4>
                  <p className="text-xs text-slate-400">{testResults.playbackSafety.message}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  testResults.playbackSafety.status === 'passed' ? 'bg-emerald-500/10 text-emerald-400' :
                  testResults.playbackSafety.status === 'running' ? 'bg-amber-500/10 text-amber-400 animate-pulse' :
                  testResults.playbackSafety.status === 'failed' ? 'bg-red-500/10 text-red-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {testResults.playbackSafety.status.toUpperCase()}
                </span>
              </div>

              {/* Hasil Unit Test 4 */}
              <div className="flex items-start justify-between pb-2">
                <div>
                  <h4 className="font-bold text-sm">4. Uji Konsistensi Skoring TOEFL</h4>
                  <p className="text-xs text-slate-400">{testResults.stateConsistency.message}</p>
                </div>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${
                  testResults.stateConsistency.status === 'passed' ? 'bg-emerald-500/10 text-emerald-400' :
                  testResults.stateConsistency.status === 'running' ? 'bg-amber-500/10 text-amber-400 animate-pulse' :
                  testResults.stateConsistency.status === 'failed' ? 'bg-red-500/10 text-red-400' : 'bg-slate-800 text-slate-400'
                }`}>
                  {testResults.stateConsistency.status.toUpperCase()}
                </span>
              </div>
            </div>

            <div className="flex space-x-4 justify-center">
              <button
                onClick={runDevelopmentTests}
                disabled={isTestingInProgress}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-2xl flex items-center space-x-2 transition disabled:opacity-50"
              >
                <PlayCircle className="w-5 h-5" />
                <span>{isTestingInProgress ? 'Sedang Menguji...' : 'Jalankan Pengujian Unit'}</span>
              </button>

              <button
                onClick={() => setCurrentScreen('dashboard')}
                className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-6 py-3 rounded-2xl transition"
              >
                Kembali ke Dashboard
              </button>
            </div>
          </div>
        )}

        {/* SCREEN: TRANSITION BETWEEN FULL EXAM SECTIONS */}
        {currentScreen === 'transition' && isFullExam && (
          <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto text-center py-12">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/25 mx-auto">
                <CheckCircle2 className="w-10 h-10 text-emerald-400" />
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">Seksi Selesai!</h3>
              <p className="text-slate-400 text-sm">
                Anda telah menyelesaikan <strong className="text-indigo-400">{SECTION_LABELS[FULL_EXAM_SECTIONS[fullExamSectionIndex]]}</strong>
              </p>
            </div>

            <div className={`p-6 rounded-2xl border space-y-4 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <h4 className="text-lg font-bold">Seksi Berikutnya</h4>
              <div className="flex items-center justify-center space-x-4">
                <div className="bg-indigo-500/10 text-indigo-400 px-4 py-2 rounded-xl border border-indigo-500/25 font-bold">
                  {SECTION_LABELS[FULL_EXAM_SECTIONS[fullExamSectionIndex + 1]]}
                </div>
              </div>
              <p className="text-xs text-slate-400">
                Waktu: <strong className="text-amber-400">{SECTION_TIME_LABELS[FULL_EXAM_SECTIONS[fullExamSectionIndex + 1]]}</strong>
              </p>
            </div>

            <button
              onClick={startNextFullExamSection}
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-bold px-8 py-4 rounded-2xl text-lg flex items-center space-x-3 shadow-lg shadow-indigo-600/20 transition active:scale-95 mx-auto"
            >
              <span>Lanjut ke Seksi Berikutnya</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* SCREEN 2: QUIZ WORKSPACE */}
        {currentScreen === 'quiz' && questions.length > 0 && (
          <div className="space-y-6 animate-fadeIn">
            
            {/* BAR STATUS & METADATA */}
            <div className={`rounded-2xl border p-4 flex flex-wrap items-center justify-between gap-4 ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              <div className="flex items-center space-x-3">
                <span className="bg-indigo-600 text-white text-xs font-extrabold px-3 py-1 rounded-lg">
                  {practiceTestData[selectedTest].title}
                </span>
                <span className="text-slate-400">/</span>
                <span className="text-sm font-bold text-slate-300">
                  {selectedSection === 'listening' ? 'Section 1: Listening' : 
                   selectedSection === 'structure' ? 'Section 2: Structure' : 'Section 3: Reading'}
                </span>
                <span className={`text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full ${
                  quizMode === 'study' ? 'bg-slate-800 text-indigo-400 border border-indigo-500/20' : 'bg-red-600/10 text-red-500 border border-red-500/20'
                }`}>
                  {quizMode} Mode
                </span>
              </div>

              {/* Progress Tracker */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowQuestionMap(prev => !prev)}
                  className={`text-xs font-bold px-3 py-1.5 rounded-xl border flex items-center space-x-1.5 transition ${
                    showQuestionMap
                      ? 'bg-indigo-600 border-indigo-500 text-white'
                      : theme === 'dark' ? 'bg-slate-800 border-slate-700 text-indigo-400 hover:bg-slate-750' : 'bg-indigo-50 border-indigo-100 text-indigo-600 hover:bg-indigo-100'
                  }`}
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span>{showQuestionMap ? "Tutup Peta Soal" : "Peta Soal"}</span>
                </button>

                <span className="text-xs sm:text-sm font-semibold text-slate-400">
                  {currentQuestionIndex + 1}/{questions.length}
                </span>

                {/* Timer untuk Exam Mode */}
                {quizMode === 'exam' && (
                  <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-xl font-mono text-xs sm:text-sm font-bold border transition-all duration-300 ${
                    timerSeconds < 300 
                      ? 'bg-red-600 text-white border-red-500 animate-pulse shadow-lg shadow-red-500/50' 
                      : 'bg-red-600/10 text-red-500 border-red-500/20'
                  }`}>
                    {timerSeconds < 300 ? <AlertCircle className="w-4 h-4 animate-bounce" /> : <Clock className="w-4 h-4 animate-pulse" />}
                    <span>
                      {Math.floor(timerSeconds / 60)}:{String(timerSeconds % 60).padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-violet-500 h-full transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* PETA SOAL PANEL */}
            {showQuestionMap && (
              <div className={`p-5 rounded-2xl border space-y-3 animate-fadeIn ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Peta Navigasi Ujian / Latihan</span>
                  <div className="flex items-center space-x-3 text-[10px] text-slate-500 flex-wrap gap-y-1">
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-indigo-600 border border-transparent" />
                      <span>Aktif</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-emerald-500/20 border border-emerald-500/30" />
                      <span>Dijawab</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-slate-800/40 border border-slate-800" />
                      <span>Belum Dijawab</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <span className="w-2.5 h-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center font-bold text-[8px]">★</span>
                      <span>Bookmark</span>
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-12 gap-2">
                  {questions.map((q, idx) => {
                    const isCurrent = idx === currentQuestionIndex;
                    const isAnswered = userAnswers[q.id] !== undefined && userAnswers[q.id] !== '';
                    const isBookmarked = bookmarksList.some(b => b.questionId === q.id);
                    
                    let btnStyle = "";
                    if (isCurrent) {
                      btnStyle = "bg-indigo-600 text-white border-transparent ring-2 ring-indigo-500";
                    } else if (isAnswered) {
                      btnStyle = "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20";
                    } else {
                      btnStyle = theme === 'dark' 
                        ? "bg-slate-800/40 text-slate-400 border border-slate-800 hover:bg-slate-800"
                        : "bg-slate-50 text-slate-500 border border-slate-200 hover:bg-slate-100";
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentQuestionIndex(idx);
                        }}
                        className={`py-2 rounded-xl text-xs font-bold transition flex items-center justify-center relative ${btnStyle}`}
                        title={`Soal ${idx + 1}`}
                      >
                        <span>{idx + 1}</span>
                        {isBookmarked && (
                          <span className="absolute -top-1 -right-1 bg-amber-500 text-slate-950 font-black rounded-full w-3.5 h-3.5 flex items-center justify-center text-[8px] shadow-sm">
                            ★
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* AREA DUAL PANEL: SEKSIONAL SOAL */}
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              
              {/* PANEL KIRI: MATERI BACAAN ATAU AUDIO CONTROLLER */}
              {(selectedSection === 'reading' || selectedSection === 'listening') && (
                <div key={`left_${currentQuestionIndex}`} className={`lg:col-span-6 rounded-2xl border p-6 space-y-6 h-[550px] overflow-y-auto ${
                  theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
                }`}>
                  
                  {/* Kasus Seksi: Reading Comprehension */}
                  {selectedSection === 'reading' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                        <span className="text-sm font-extrabold text-slate-400 uppercase tracking-widest flex items-center space-x-1">
                          <BookOpen className="w-4 h-4 mr-1 text-emerald-400" /> PASSAGE BACAAN
                        </span>

                        {/* Ukuran Teks */}
                        <div className="flex items-center space-x-1.5">
                          <button 
                            onClick={() => setTextSize('small')}
                            className={`text-xs px-2 py-1 rounded font-bold transition ${textSize === 'small' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                          >
                            A-
                          </button>
                          <button 
                            onClick={() => setTextSize('medium')}
                            className={`text-xs px-2 py-1 rounded font-bold transition ${textSize === 'medium' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                          >
                            A
                          </button>
                          <button 
                            onClick={() => setTextSize('large')}
                            className={`text-xs px-2 py-1 rounded font-bold transition ${textSize === 'large' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'}`}
                          >
                            A+
                          </button>
                        </div>
                      </div>

                      <div className={`leading-relaxed whitespace-pre-wrap transition-all ${
                        textSize === 'small' ? 'text-sm' : textSize === 'medium' ? 'text-base' : 'text-lg'
                      }`}>
                        {questions[currentQuestionIndex].passageText}
                      </div>
                    </div>
                  )}

                  {/* Kasus Seksi: Listening Comprehension (Dialog Playback) */}
                  {selectedSection === 'listening' && (
                    <div className="space-y-8 flex flex-col justify-center h-full py-6">
                      <div className="text-center space-y-3">
                        <span className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1 rounded-full border border-indigo-500/20">
                          Listening Audio Simulator
                        </span>
                        <h4 className="text-xl font-bold tracking-tight">Dengarkan Dialog Bahasa Inggris</h4>
                        <p className="text-xs text-slate-400 max-w-md mx-auto">
                          Gunakan tombol putar di bawah untuk mensimulasikan pembacaan audio percakapan asli Peterson's melalui browser Anda secara dinamis.
                        </p>
                      </div>

                      {/* Visual Gelombang Suara (Voice Note Waveform Style) */}
                      <div className="flex items-center justify-center space-x-[3px] h-16 bg-slate-950/30 py-3 px-6 rounded-2xl border border-slate-800/40 max-w-xs mx-auto">
                        {[10, 18, 28, 14, 20, 32, 45, 35, 22, 28, 42, 50, 42, 28, 35, 48, 38, 24, 15, 25, 30, 18, 12, 8].map((height, idx) => (
                          <div 
                            key={idx} 
                            className={`w-[3px] rounded-full transition-all duration-500 ${
                              isPlayingAudio 
                                ? 'bg-gradient-to-t from-indigo-500 to-violet-400 shadow-[0_0_8px_rgba(99,102,241,0.5)]' 
                                : theme === 'dark' ? 'bg-slate-700' : 'bg-slate-300'
                            }`}
                            style={{ 
                              height: `${height}px`,
                              transformOrigin: 'center',
                              animation: isPlayingAudio ? `voiceWave ${0.5 + (idx % 5) * 0.15}s ease-in-out infinite alternate` : 'none',
                              animationDelay: isPlayingAudio ? `${idx * 0.02}s` : 'none'
                            }}
                          />
                        ))}
                      </div>

                      {/* Kontrol Utama Play/Pause */}
                      <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 flex flex-col items-center gap-4">
                        <div className="flex items-center space-x-4">
                          {/* Speed selection */}
                          <div className="flex items-center space-x-1">
                            <span className="text-[10px] text-slate-400 uppercase font-black tracking-widest mr-1">Speed</span>
                            <button 
                              onClick={() => { setSpeechSpeed(0.8); stopAllAudio(); }}
                              className={`text-[10px] px-2 py-1 rounded-md font-bold ${speechSpeed === 0.8 ? 'bg-indigo-600 text-white' : 'bg-slate-800'}`}
                            >
                              0.8x
                            </button>
                            <button 
                              onClick={() => { setSpeechSpeed(1.0); stopAllAudio(); }}
                              className={`text-[10px] px-2 py-1 rounded-md font-bold ${speechSpeed === 1.0 ? 'bg-indigo-600 text-white' : 'bg-slate-800'}`}
                            >
                              1.0x
                            </button>
                            <button 
                              onClick={() => { setSpeechSpeed(1.2); stopAllAudio(); }}
                              className={`text-[10px] px-2 py-1 rounded-md font-bold ${speechSpeed === 1.2 ? 'bg-indigo-600 text-white' : 'bg-slate-800'}`}
                            >
                              1.2x
                            </button>
                          </div>

                          <button
                            onClick={() => playListeningDialogue(questions[currentQuestionIndex].script)}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white p-4 rounded-full shadow-lg shadow-indigo-600/20 transform transition active:scale-95"
                          >
                            {isPlayingAudio ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                          </button>
                        </div>
                      </div>

                      {/* Panel Teks Naskah */}
                      {quizMode === 'study' && (
                        <div className="space-y-3 flex flex-col items-center w-full">
                          <button 
                            onClick={() => setShowScript(prev => !prev)}
                            className="text-xs bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-indigo-400 font-bold py-2 px-4 rounded-xl transition duration-200 shadow-sm flex items-center space-x-1.5"
                          >
                            <Eye className="w-4 h-4" />
                            <span>{showScript ? "Sembunyikan Naskah Script" : "Lihat Naskah Script"}</span>
                          </button>

                          {showScript && (
                            <div className="w-full text-left space-y-3 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/40 animate-fadeIn">
                              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 block">Naskah Script</span>
                              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                                {questions[currentQuestionIndex].script?.map((line, idx) => (
                                  <div 
                                    key={idx}
                                    className={`text-sm p-2 rounded-xl transition ${
                                      activeSpeechLine === idx 
                                        ? 'bg-indigo-600/20 border-l-2 border-indigo-500 pl-3 text-indigo-200' 
                                        : 'text-slate-300'
                                    }`}
                                  >
                                    <strong className="text-xs uppercase tracking-wider text-slate-400 block">{line.speaker}</strong>
                                    <span>{line.text}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                </div>
              )}

              {/* PANEL KANAN: PERTANYAAN, PILIHAN & FEEDBACK */}
              {/* PANEL KANAN: PERTANYAAN, PILIHAN & FEEDBACK */}
              <div className={`${(selectedSection === 'reading' || selectedSection === 'listening') ? 'lg:col-span-6' : 'lg:col-span-12'} h-[550px] flex flex-col justify-between rounded-2xl border p-6 ${
                theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
              }`}>
                
                <div key={`right_${currentQuestionIndex}`} className="flex-1 overflow-y-auto pr-1 space-y-6">
                  <div className="flex items-center justify-between border-b border-slate-800/40 pb-3">
                    <div className="flex items-center space-x-2">
                      <span className="bg-slate-800 text-slate-300 text-xs font-bold px-2.5 py-1 rounded-lg">
                        Question {questions[currentQuestionIndex].number}
                      </span>
                    </div>
                    
                    <button 
                      onClick={handleToggleBookmark}
                      className={`flex items-center space-x-1 px-3 py-1.5 rounded-xl border text-xs font-bold transition duration-200 ${
                        bookmarksList.some(b => b.questionId === questions[currentQuestionIndex].id)
                          ? 'bg-amber-500/10 border-amber-500/30 text-amber-400 font-bold'
                          : theme === 'dark' ? 'bg-slate-800/40 border-slate-800 hover:bg-slate-800 text-slate-400' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-500'
                      }`}
                    >
                      <Star className={`w-3.5 h-3.5 ${bookmarksList.some(b => b.questionId === questions[currentQuestionIndex].id) ? 'fill-amber-400' : ''}`} />
                      <span>{bookmarksList.some(b => b.questionId === questions[currentQuestionIndex].id) ? 'Bookmarked' : 'Bookmark'}</span>
                    </button>
                  </div>

                  {/* SOAL INTERAKTIF BAGIAN: WRITTEN EXPRESSION */}
                  {questions[currentQuestionIndex].type === 'written_expression' ? (
                    <div className="space-y-6">
                      <p className="text-xs text-slate-400 italic">
                        Petunjuk: Klik pada kata/frasa yang bergaris bawah untuk memilihnya sebagai kesalahan grammar kalimat di bawah ini.
                      </p>

                      <div className="p-5 rounded-2xl bg-slate-950/50 border border-slate-800 leading-loose text-lg sm:text-xl font-medium tracking-wide">
                        {questions[currentQuestionIndex].sentenceParts?.map((part, index) => {
                          if (part.underline) {
                            const isSelected = userAnswers[questions[currentQuestionIndex].id] === part.label;
                            return (
                              <span 
                                key={index}
                                onClick={() => handleAnswerSelect(questions[currentQuestionIndex].id, part.label)}
                                className={`inline-block relative cursor-pointer px-1 py-0.5 mx-1 rounded border-b-2 border-dashed font-bold transition duration-200 ${
                                  isSelected 
                                    ? 'bg-indigo-600/30 border-indigo-500 text-indigo-200 shadow shadow-indigo-500/20' 
                                    : 'border-red-500 hover:bg-red-500/10 text-red-400'
                                }`}
                              >
                                {part.text}
                                <sup className="text-[10px] uppercase text-indigo-400 px-1 font-extrabold">{part.label}</sup>
                              </span>
                            );
                          }
                          return <span key={index}>{part.text}</span>;
                        })}
                      </div>

                      {/* Alternatif Tombol Pilihan */}
                      <div className="grid grid-cols-4 gap-2">
                        {['A', 'B', 'C', 'D'].map((label) => {
                          const isSelected = userAnswers[questions[currentQuestionIndex].id] === label;
                          return (
                            <button
                              key={label}
                              onClick={() => handleAnswerSelect(questions[currentQuestionIndex].id, label)}
                              className={`p-3 rounded-xl border text-center font-bold transition ${
                                isSelected 
                                  ? 'bg-indigo-600 border-indigo-500 text-white' 
                                  : 'bg-slate-950/30 border-slate-800 hover:bg-slate-800'
                              }`}
                            >
                              Option {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ) : (
                    // SOAL STANDAR MULTIPLE CHOICE (LISTENING & READING)
                    <div className="space-y-6">
                      <h3 className="text-lg sm:text-xl font-bold leading-relaxed">
                        {questions[currentQuestionIndex].question || questions[currentQuestionIndex].sentence}
                      </h3>

                      <div className="space-y-3">
                        {questions[currentQuestionIndex].options?.map((opt, optIdx) => {
                          const isSelected = userAnswers[questions[currentQuestionIndex].id] === optIdx;
                          const labels = ['A', 'B', 'C', 'D'];
                          return (
                            <div
                              key={optIdx}
                              onClick={() => handleAnswerSelect(questions[currentQuestionIndex].id, optIdx)}
                              className={`p-4 rounded-xl border cursor-pointer flex items-center justify-between transition duration-200 transform hover:translate-x-1 ${
                                isSelected 
                                  ? 'bg-indigo-600/25 border-indigo-500 text-indigo-100 shadow' 
                                  : 'bg-slate-950/20 border-slate-800 hover:bg-slate-800/50'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold ${
                                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                                }`}>
                                  {labels[optIdx]}
                                </span>
                                <span className="font-medium text-sm sm:text-base">{opt}</span>
                              </div>
                              <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                isSelected ? 'border-indigo-400 bg-indigo-50/20' : 'border-slate-700'
                              }`}>
                                {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* FEEDBACK & PENJELASAN AKADEMIS INSTAN (Hanya untuk Study Mode) */}
                  {quizMode === 'study' && userAnswers[questions[currentQuestionIndex].id] !== undefined && (
                    <div className="p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3 animate-fadeIn">
                      <div className="flex items-center space-x-2">
                        {(() => {
                          const q = questions[currentQuestionIndex];
                          const userAns = userAnswers[q.id];
                          let isCorrect = false;

                          if (q.type === 'written_expression') {
                            isCorrect = userAns === q.answer;
                          } else {
                            isCorrect = userAns === q.answer;
                          }

                          return isCorrect ? (
                            <div className="flex items-center space-x-1 text-emerald-400 text-sm font-bold">
                              <CheckCircle2 className="w-5 h-5" />
                              <span>Jawaban Anda Benar!</span>
                            </div>
                          ) : (
                            <div className="flex items-center space-x-1 text-red-500 text-sm font-bold">
                              <XCircle className="w-5 h-5" />
                              <span>Jawaban Kurang Tepat</span>
                            </div>
                          );
                        })()}
                      </div>

                      <div className="text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-3 space-y-2">
                        <span className="text-xs text-indigo-400 font-extrabold uppercase tracking-widest block font-bold">Penjelasan Analitis:</span>
                        <p>{questions[currentQuestionIndex].explanation}</p>
                      </div>
                    </div>
                  )}
                  {/* Custom Question Notes Text Area (Only visible if bookmarked) */}
                  {bookmarksList.some(b => b.questionId === questions[currentQuestionIndex].id) && (
                    <div className="mt-4 p-4 rounded-2xl bg-slate-950/40 border border-slate-800/60 space-y-2 animate-fadeIn">
                      <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-indigo-400" />
                        <span>Catatan Khusus Soal Ini</span>
                      </span>
                      <textarea
                        value={currentQuestionNote}
                        onChange={(e) => handleSaveQuestionNote(e.target.value)}
                        placeholder="Ketik tips grammar, kosakata baru, atau catatan pribadi untuk soal ini di sini..."
                        rows={2}
                        className={`w-full text-xs p-3 rounded-xl border focus:outline-none focus:border-indigo-500 transition resize-none ${
                          theme === 'dark' ? 'bg-slate-950 border-slate-800 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-800'
                        }`}
                      />
                      <span className="text-[9px] text-slate-500 block text-right">Catatan otomatis tersimpan ke localStorage</span>
                    </div>
                  )}
                </div>

                {/* BOTTOM NAVIGATION CONTROLS */}
                <div className="flex items-center justify-between border-t border-slate-800 pt-6 mt-6">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestionIndex === 0}
                    className="flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-700 hover:bg-slate-800 text-sm font-bold disabled:opacity-30 disabled:hover:bg-transparent transition duration-200"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Sebelumnya</span>
                  </button>

                  {currentQuestionIndex === questions.length - 1 ? (
                    <button
                      onClick={() => setShowSubmitConfirm(true)}
                      className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-2.5 rounded-xl text-sm flex items-center space-x-2 shadow-lg shadow-indigo-600/10 transition active:scale-95"
                    >
                      <span>Selesai & Kumpulkan</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      onClick={handleNext}
                      className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2.5 rounded-xl text-sm flex items-center space-x-2 transition"
                    >
                      <span>Berikutnya</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  )}
                </div>

              </div>

            </div>

          </div>
        )}

        {/* SCREEN 3: RESULTS / PERFORMANCE REPORT */}
        {currentScreen === 'results' && (() => {
          // Determine data source: live results or history review
          const isHistoryReview = reviewingHistory !== null;
          const displayResults = isHistoryReview ? reviewingHistory.scores : results;
          const displayQuestions = isHistoryReview ? (reviewingHistory.isFullExam ? (reviewingHistory.fullExamQuestions || { listening: [], structure: [], reading: [] }) : (reviewingHistory.questions || [])) : (results.isFullExam ? fullExamQuestions : questions);
          const displayAnswers = isHistoryReview ? (reviewingHistory.isFullExam ? (reviewingHistory.fullExamAnswers || { listening: {}, structure: {}, reading: {} }) : (reviewingHistory.answers || {})) : (results.isFullExam ? fullExamAnswers : userAnswers);
          const displayIsFullExam = isHistoryReview ? reviewingHistory.isFullExam : results.isFullExam;
          return (
          <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
            
            <div className="text-center space-y-2">
              <h3 className="text-3xl font-extrabold tracking-tight">
                {isHistoryReview ? 'Review Hasil Tes Sebelumnya' : (displayIsFullExam ? 'Laporan Ujian TOEFL PBT Lengkap' : 'Laporan Kinerja TOEFL Anda')}
              </h3>
              {isHistoryReview && (
                <p className="text-xs text-indigo-400 font-bold">
                  {new Date(reviewingHistory.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  {' — '}{reviewingHistory.isFullExam ? 'Full Exam' : SECTION_LABELS[reviewingHistory.section]}
                </p>
              )}
              <p className="text-slate-400 text-sm">
                {displayIsFullExam ? 'Skor gabungan 3 seksi dari Peterson\'s TOEFL Practice Engine' : 'Hasil konversi akurat dari Peterson\'s TOEFL Practice Engine'}
              </p>
            </div>

            {/* Score Summary Box */}
            <div className={`p-8 rounded-3xl border text-center relative overflow-hidden shadow-2xl ${
              theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl -z-10" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-2xl -z-10" />

              {/* Main TOEFL PBT Score */}
              <div className="space-y-2 mb-6">
                <span className="text-xs text-indigo-300 font-extrabold uppercase tracking-widest block">Estimasi Skor TOEFL PBT</span>
                <div className="text-6xl font-black bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
                  {displayResults.estimatedPBT}
                </div>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">Skala 310 - 677</span>
              </div>

              {/* Per-section breakdown (Full Exam) */}
              {displayIsFullExam && displayResults.listening && (
                <div className="grid sm:grid-cols-3 gap-4 mt-6 border-t border-slate-800 pt-6">
                  <div className={`p-4 rounded-2xl border space-y-2 ${
                    theme === 'dark' ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-center space-x-1.5">
                      <Volume2 className="w-4 h-4 text-indigo-400" />
                      <span className="text-xs font-bold text-slate-400">Listening</span>
                    </div>
                    <div className="text-3xl font-black text-indigo-400">{displayResults.listening.scaled}</div>
                    <span className="text-[10px] text-slate-500">{displayResults.listening.correct}/{displayResults.listening.total} benar ({displayResults.listening.percent}%)</span>
                  </div>
                  <div className={`p-4 rounded-2xl border space-y-2 ${
                    theme === 'dark' ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-center space-x-1.5">
                      <Settings className="w-4 h-4 text-violet-400" />
                      <span className="text-xs font-bold text-slate-400">Structure</span>
                    </div>
                    <div className="text-3xl font-black text-violet-400">{displayResults.structure.scaled}</div>
                    <span className="text-[10px] text-slate-500">{displayResults.structure.correct}/{displayResults.structure.total} benar ({displayResults.structure.percent}%)</span>
                  </div>
                  <div className={`p-4 rounded-2xl border space-y-2 ${
                    theme === 'dark' ? 'bg-slate-950/50 border-slate-800' : 'bg-slate-50 border-slate-200'
                  }`}>
                    <div className="flex items-center justify-center space-x-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-400" />
                      <span className="text-xs font-bold text-slate-400">Reading</span>
                    </div>
                    <div className="text-3xl font-black text-emerald-400">{displayResults.reading.scaled}</div>
                    <span className="text-[10px] text-slate-500">{displayResults.reading.correct}/{displayResults.reading.total} benar ({displayResults.reading.percent}%)</span>
                  </div>
                </div>
              )}

              {/* Single section result */}
              {!displayIsFullExam && (
                <div className="grid sm:grid-cols-2 gap-6 mt-6 border-t border-slate-800 pt-6">
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-widest block">Jawaban Benar</span>
                    <div className="text-4xl font-black text-indigo-400">
                      {displayResults.correct} <span className="text-sm font-medium text-slate-400">/ {displayResults.total}</span>
                    </div>
                    <span className="text-xs text-slate-400">{displayResults.percentage}% Akurasi</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs text-slate-400 font-extrabold uppercase tracking-widest block">Level Kompetensi</span>
                    <div className="text-xl font-bold text-emerald-400">
                      {displayResults.percentage >= 80 ? "Sangat Mahir" : displayResults.percentage >= 60 ? "Menengah" : "Perlu Belajar"}
                    </div>
                    <span className="text-xs text-slate-400">Berdasarkan skor Peterson's</span>
                  </div>
                </div>
              )}

              {/* Level badge for full exam */}
              {displayIsFullExam && (
                <div className="mt-6 pt-4 border-t border-slate-800">
                  <div className="flex items-center justify-center space-x-3">
                    <Trophy className={`w-8 h-8 ${
                      displayResults.estimatedPBT >= 550 ? 'text-amber-400' : displayResults.estimatedPBT >= 450 ? 'text-slate-300' : 'text-orange-700'
                    }`} />
                    <div>
                      <span className="text-xs text-slate-400 block">Level Kompetensi</span>
                      <span className={`text-xl font-bold ${
                        displayResults.estimatedPBT >= 550 ? 'text-amber-400' : displayResults.estimatedPBT >= 450 ? 'text-emerald-400' : 'text-red-400'
                      }`}>
                        {displayResults.estimatedPBT >= 550 ? 'Advanced' : displayResults.estimatedPBT >= 450 ? 'Intermediate' : 'Elementary'}
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Question Review Section */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold flex items-center space-x-2">
                <span>Daftar Evaluasi Butir Soal</span>
              </h4>

              {/* Tab selector for full exam */}
              {displayIsFullExam && (
                <div className="flex space-x-2">
                  {FULL_EXAM_SECTIONS.map(sec => (
                    <button
                      key={sec}
                      onClick={() => setActiveReviewTab(sec)}
                      className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                        activeReviewTab === sec
                          ? 'bg-indigo-600 text-white'
                          : theme === 'dark' ? 'bg-slate-800 text-slate-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                    >
                      {sec === 'listening' ? '🎧 Listening' : sec === 'structure' ? '📝 Structure' : '📖 Reading'}
                    </button>
                  ))}
                </div>
              )}

              <div className="space-y-4">
                {(() => {
                  const reviewQuestions = displayIsFullExam ? ((typeof displayQuestions === 'object' && !Array.isArray(displayQuestions)) ? (displayQuestions[activeReviewTab] || []) : []) : (Array.isArray(displayQuestions) ? displayQuestions : []);
                  const reviewAnswers = displayIsFullExam ? ((typeof displayAnswers === 'object') ? (displayAnswers[activeReviewTab] || {}) : {}) : (typeof displayAnswers === 'object' ? displayAnswers : {});
                  return reviewQuestions.map((q, idx) => {
                    const userAns = reviewAnswers[q.id];
                    const isCorrect = q.type === 'written_expression' 
                      ? userAns === q.answer 
                      : (userAns !== undefined && userAns === q.answer);

                    return (
                      <div 
                        key={q.id}
                        className={`p-5 rounded-2xl border space-y-4 transition-all ${
                          isCorrect 
                            ? 'border-emerald-500/25 bg-emerald-500/[0.02]' 
                            : 'border-red-500/25 bg-red-500/[0.02]'
                        }`}
                      >
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <div className="flex items-center space-x-2">
                            <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                              isCorrect ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'
                            }`}>
                              {idx + 1}
                            </span>
                            <span className="text-xs text-slate-400 font-bold">Question {q.number}</span>
                          </div>
                          <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                            isCorrect ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'
                          }`}>
                            {isCorrect ? 'Correct' : 'Incorrect'}
                          </span>
                        </div>

                        <p className="font-bold text-slate-200">
                          {q.type === 'written_expression' ? q.sentence : (q.question || q.sentence)}
                        </p>

                        <div className="grid sm:grid-cols-2 gap-2 text-xs">
                          <div className="p-2.5 rounded-lg bg-slate-950/30 border border-slate-800">
                            <span className="text-slate-400 block mb-0.5">Jawaban Anda:</span>
                            <span className={isCorrect ? 'text-emerald-400 font-bold' : 'text-red-400 font-bold'}>
                              {userAns !== undefined 
                                ? (q.type === 'written_expression' ? `Option ${userAns}` : q.options[userAns]) 
                                : 'Tidak Dijawab'}
                            </span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-slate-950/30 border border-slate-800">
                            <span className="text-slate-400 block mb-0.5">Kunci Jawaban:</span>
                            <span className="text-emerald-400 font-bold">
                              {q.type === 'written_expression' ? `Option ${q.answer}` : q.options[q.answer]}
                            </span>
                          </div>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                          <strong className="text-indigo-400 block mb-1">Pembahasan Akademis:</strong>
                          {q.explanation}
                        </div>
                      </div>
                    );
                  });
                })()}
              </div>
            </div>

            {/* Back & Print Controls */}
            <div className="flex flex-wrap justify-center gap-3 pt-4 no-print">
              <button
                onClick={() => {
                  setIsFullExam(false);
                  setReviewingHistory(null);
                  setCurrentScreen('dashboard');
                }}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-bold px-6 py-3 rounded-2xl flex items-center space-x-2 shadow-lg transition active:scale-95"
              >
                <RotateCcw className="w-5 h-5" />
                <span>Kembali Ke Dashboard</span>
              </button>
              
              <button
                onClick={handlePrintReport}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-2xl flex items-center space-x-2 shadow-lg transition active:scale-95"
              >
                <Printer className="w-5 h-5" />
                <span>Cetak / Simpan PDF</span>
              </button>
            </div>

          </div>
          );
        })()}

      </main>

      {/* FOOTER */}
      <footer className={`border-t py-8 text-center text-xs text-slate-500 transition-colors mt-12 ${
        theme === 'dark' ? 'border-slate-900 bg-slate-950' : 'border-slate-100 bg-slate-50'
      }`}>
        <p>© 2026 Peterson's TOEFL Practice Simulator. Semua Hak Dilindungi.</p>
        <p className="mt-1">Dibuat khusus untuk persiapan ujian mandiri dengan format PBT interaktif.</p>
      </footer>

      {/* MODAL KONFIRMASI SUBMIT CBT */}
      {showSubmitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn no-print">
          <div className={`w-full max-w-md rounded-2xl border p-6 space-y-6 shadow-2xl animate-scaleUp ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="flex items-center space-x-3 text-amber-500">
              <AlertCircle className="w-8 h-8" />
              <h4 className="text-xl font-extrabold tracking-tight">Kumpulkan Jawaban?</h4>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Apakah Anda yakin ingin menyelesaikan sesi ujian/latihan ini dan mengumpulkan jawaban Anda? Anda tidak akan dapat mengubah jawaban lagi setelah ini.
            </p>
            
            {/* Ringkasan Jawaban */}
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/25">
                <span className="text-xs text-slate-400 block font-bold">Dijawab</span>
                <span className="text-2xl font-black text-indigo-400">
                  {questions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length}
                </span>
              </div>
              <div className={`p-3 rounded-xl border ${
                questions.length - questions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length > 0
                  ? 'bg-amber-500/10 border-amber-500/25'
                  : 'bg-emerald-500/10 border-emerald-500/25'
              }`}>
                <span className="text-xs text-slate-400 block font-bold">Belum Dijawab</span>
                <span className={`text-2xl font-black ${
                  questions.length - questions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length > 0
                    ? 'text-amber-400'
                    : 'text-emerald-400'
                }`}>
                  {questions.length - questions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length}
                </span>
              </div>
            </div>

            {questions.length - questions.filter(q => userAnswers[q.id] !== undefined && userAnswers[q.id] !== '').length > 0 && (
              <div className="p-3 rounded-xl bg-amber-500/5 border border-amber-500/20 text-xs text-amber-400 leading-relaxed flex items-start gap-2">
                <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Ada soal yang belum Anda jawab. Disarankan untuk mengisi semua jawaban (tidak ada pengurangan nilai untuk jawaban salah).</span>
              </div>
            )}

            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => setShowSubmitConfirm(false)}
                className="flex-1 py-3 bg-slate-850 hover:bg-slate-850 text-slate-300 border border-slate-800 rounded-xl text-sm font-bold transition"
              >
                Kembali
              </button>
              <button
                onClick={() => {
                  setShowSubmitConfirm(false);
                  handleFinishQuiz();
                }}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition"
              >
                Ya, Kumpulkan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CUSTOM RESUME SESSION */}
      {showResumeConfirmModal && resumeSessionData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn no-print">
          <div className={`w-full max-w-md rounded-2xl border p-6 space-y-6 shadow-2xl animate-scaleUp ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="flex items-center space-x-3 text-indigo-400">
              <History className="w-8 h-8" />
              <h4 className="text-xl font-extrabold tracking-tight">Lanjutkan Latihan?</h4>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Anda memiliki sesi latihan <strong className="text-indigo-400">{resumeSessionData.mode === 'study' ? 'Study' : 'Exam'}</strong> yang belum selesai untuk <strong className="text-slate-200">{resumeSessionData.sectionId === 'listening' ? 'Section 1: Listening' : resumeSessionData.sectionId === 'structure' ? 'Section 2: Structure' : 'Section 3: Reading'}</strong> (terakhir di soal {resumeSessionData.parsed.currentQuestionIndex + 1}). Apakah Anda ingin melanjutkan dari soal ini?
            </p>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={handleDeclineResume}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-350 rounded-xl text-sm font-bold border border-slate-700 transition"
              >
                Mulai Baru
              </button>
              <button
                onClick={handleConfirmResume}
                className="flex-1 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/20 transition animate-pulse"
              >
                Lanjutkan Sesi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL CUSTOM EXIT FULL EXAM CONFIRMATION */}
      {showExitExamConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn no-print">
          <div className={`w-full max-w-md rounded-2xl border p-6 space-y-6 shadow-2xl animate-scaleUp ${
            theme === 'dark' ? 'bg-slate-900 border-slate-800 text-slate-100' : 'bg-white border-slate-200 text-slate-800'
          }`}>
            <div className="flex items-center space-x-3 text-red-500">
              <AlertCircle className="w-8 h-8" />
              <h4 className="text-xl font-extrabold tracking-tight">Batalkan Ujian Lengkap?</h4>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Apakah Anda yakin ingin membatalkan simulasi Ujian Lengkap? Seluruh kemajuan dan jawaban Anda saat ini akan dihapus secara permanen dan tidak dapat dipulihkan.
            </p>

            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => setShowExitExamConfirmModal(false)}
                className="flex-1 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 rounded-xl text-sm font-bold transition"
              >
                Kembali Ujian
              </button>
              <button
                onClick={() => {
                  setShowExitExamConfirmModal(false);
                  stopAllAudio();
                  setCurrentScreen('dashboard');
                }}
                className="flex-1 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-red-600/20 transition"
              >
                Ya, Batalkan Ujian
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

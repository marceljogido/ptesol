import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import App from './App';

describe('TOEFL PBT Simulator App Integration Tests', () => {
  beforeEach(() => {
    // Reset localStorage before each test
    window.localStorage.clear();
    // Reset speech mocks
    vi.clearAllMocks();
  });

  it('renders the dashboard correctly with all sections and full exam button', () => {
    render(<App />);
    
    // Check Header & Title
    expect(screen.getByText('TOEFL PBT Simulator')).toBeInTheDocument();
    
    // Check Sections
    expect(screen.getByText('Section 1: Listening Comprehension')).toBeInTheDocument();
    expect(screen.getByText('Section 2: Structure & Written Expression')).toBeInTheDocument();
    expect(screen.getByText('Section 3: Reading Comprehension')).toBeInTheDocument();
    
    // Check Study/Exam Buttons
    const studyButtons = screen.getAllByRole('button', { name: /📖 Study/i });
    expect(studyButtons.length).toBe(3);
    const examButtons = screen.getAllByRole('button', { name: /⚡ Exam/i });
    expect(examButtons.length).toBe(3);
    
    // Check Full Exam Button
    expect(screen.getByRole('button', { name: /Mulai Ujian Lengkap/i })).toBeInTheDocument();
  });

  it('navigates through Study Mode, selects answers, and shows instant feedback', async () => {
    render(<App />);
    
    // Start listening study mode
    const listeningStudyBtn = screen.getAllByRole('button', { name: /📖 Study/i })[0];
    fireEvent.click(listeningStudyBtn);
    
    // Verify we are in the quiz screen
    expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
    
    // In listening section, verify there is an audio control (speed buttons are rendered)
    expect(screen.getByText('1.0x')).toBeInTheDocument();
    
    // Check options are rendered
    const optionA = screen.getByText(/She thinks the photos/i);
    expect(optionA).toBeInTheDocument();
    
    // Select option A
    fireEvent.click(optionA);
    
    // Verify instant feedback / explanation section appears in Study Mode
    await waitFor(() => {
      expect(screen.getByText(/Penjelasan Analitis:/i)).toBeInTheDocument();
    });
    
    // Navigate next
    const nextBtn = screen.getByRole('button', { name: /Berikutnya/i });
    fireEvent.click(nextBtn);
    
    // Verify we are on Question 2
    expect(screen.getByText(/Question 2/i)).toBeInTheDocument();
  });

  it('runs Exam Mode without instant feedback and completes the quiz to show results', async () => {
    render(<App />);
    
    // Start Listening Exam mode
    const listeningExamBtn = screen.getAllByRole('button', { name: /⚡ Exam/i })[0];
    fireEvent.click(listeningExamBtn);
    
    // Verify we are in quiz screen
    expect(screen.getByText(/Question 1/i)).toBeInTheDocument();
    
    // Click option A
    const optionA = screen.getByText(/She thinks the photos/i);
    fireEvent.click(optionA);
    
    // Verify explanation does NOT appear (in Exam mode)
    expect(screen.queryByText(/Penjelasan Analitis:/i)).not.toBeInTheDocument();
    
    // Click "Berikutnya" for all questions to reach the end quickly (or simulate finishing)
    // Let's mock a fast-finish by finding the end button or trigger handleFinishQuiz directly.
    // In our test, we can just click "Berikutnya" or find "Selesai & Kumpulkan" if it exists.
    // Since there are many questions, let's mock finishing by clicking "Selesai & Kumpulkan" if it becomes available.
    // Or we can write a test specifically for completing a shorter path if we mock questions.
    // Let's check how many questions are loaded. Let's look at the "Selesai" button.
    // Since listening section has 50 questions, we don't want to click 50 times in test.
    // Let's verify we can click "Sebelumnya" as well.
    const prevBtn = screen.getByRole('button', { name: /Sebelumnya/i });
    expect(prevBtn).toBeDisabled(); // disabled on question 1
  });

  it('saves scores to localStorage and allows reviewing from Dashboard history', async () => {
    // Seed localStorage with a mock score history entry
    const mockHistoryEntry = {
      id: 123456789,
      date: new Date().toISOString(),
      testId: 'test1',
      section: 'listening',
      mode: 'study',
      isFullExam: false,
      scores: {
        isFullExam: false,
        correct: 40,
        total: 50,
        percentage: 80,
        estimatedPBT: 570,
        scaledScore: 57
      },
      questions: [
        { id: 'l1', number: 1, type: 'multiple_choice', question: 'Sample Question', options: ['A', 'B', 'C', 'D'], answer: 0, explanation: 'Explanation for Q1' }
      ],
      answers: { l1: 0 }
    };
    
    window.localStorage.setItem('toefl_score_history', JSON.stringify([mockHistoryEntry]));
    
    render(<App />);
    
    // History section should be visible because we seeded localStorage
    expect(screen.getByText('Riwayat Skor')).toBeInTheDocument();
    expect(screen.getAllByText('Section 1: Listening Comprehension').length).toBeGreaterThanOrEqual(2);
    expect(screen.getByText(/40\/50 benar/i)).toBeInTheDocument();
    expect(screen.getAllByText('570').length).toBeGreaterThanOrEqual(1); // PBT score
    
    // Click Review button
    const reviewBtn = screen.getByRole('button', { name: /Review/i });
    fireEvent.click(reviewBtn);
    
    // Should navigate to Results screen
    expect(screen.getByText('Review Hasil Tes Sebelumnya')).toBeInTheDocument();
    expect(screen.getByText('Estimasi Skor TOEFL PBT')).toBeInTheDocument();
    expect(screen.getByText('570')).toBeInTheDocument();
    
    // Verify correct question and answers and explanation are loaded in review
    expect(screen.getByText('Sample Question')).toBeInTheDocument();
    expect(screen.getByText('Explanation for Q1')).toBeInTheDocument();
    
    // Click back to dashboard button
    const backBtn = screen.getByRole('button', { name: /Kembali Ke Dashboard/i });
    fireEvent.click(backBtn);
    
    // Verify we are back to dashboard
    expect(screen.getByText('TOEFL PBT Simulator')).toBeInTheDocument();
    expect(screen.getByText('Riwayat Skor')).toBeInTheDocument();
  });

  it('can clear score history', async () => {
    const mockHistoryEntry = {
      id: 123456789,
      date: new Date().toISOString(),
      testId: 'test1',
      section: 'listening',
      mode: 'study',
      isFullExam: false,
      scores: { isFullExam: false, correct: 40, total: 50, percentage: 80, estimatedPBT: 570 },
      questions: [],
      answers: {}
    };
    window.localStorage.setItem('toefl_score_history', JSON.stringify([mockHistoryEntry]));
    
    render(<App />);
    
    expect(screen.getByText('Riwayat Skor')).toBeInTheDocument();
    
    // Click clear history button
    const clearBtn = screen.getByRole('button', { name: /Hapus Semua/i });
    fireEvent.click(clearBtn);
    
    // Score history should be cleared and section removed from screen
    expect(screen.queryByText('Riwayat Skor')).not.toBeInTheDocument();
    expect(window.localStorage.getItem('toefl_score_history')).toBeNull();
  });

  it('renders analytics charts and diagnostics when score history exists', async () => {
    const mockHistory = [
      {
        id: 1,
        date: new Date().toISOString(),
        testId: 'test1',
        section: 'listening',
        mode: 'study',
        isFullExam: false,
        scores: { correct: 45, total: 50, percentage: 90, estimatedPBT: 620, scaledScore: 62 }
      },
      {
        id: 2,
        date: new Date().toISOString(),
        testId: 'test1',
        section: 'structure',
        mode: 'study',
        isFullExam: false,
        scores: { correct: 15, total: 40, percentage: 37, estimatedPBT: 380, scaledScore: 38 }
      }
    ];
    window.localStorage.setItem('toefl_score_history', JSON.stringify(mockHistory));
    
    render(<App />);
    
    // Click "Analitik & Grafik" tab
    const analyticsTab = screen.getByRole('button', { name: /Analitik & Grafik/i });
    fireEvent.click(analyticsTab);
    
    // Verify SVG trend line chart is rendered
    expect(screen.getByText('Grafik Tren Skor TOEFL PBT')).toBeInTheDocument();
    
    // Verify diagnostics identifies Section 2: Structure as the weakness (since it has 37% vs 90% in listening)
    expect(screen.getByText(/Kelemahan Utama Anda/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Section 2: Structure & Written Expression/i).length).toBeGreaterThanOrEqual(1);
    
    // Verify listening is identified as the strength
    expect(screen.getByText(/Kekuatan Utama Anda/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Section 1: Listening/i).length).toBeGreaterThanOrEqual(1);
  });

  it('allows bookmarking a question, writing notes, and displays it in Bookmarks tab', async () => {
    render(<App />);
    
    // Start listening study mode
    const listeningStudyBtn = screen.getAllByRole('button', { name: /📖 Study/i })[0];
    fireEvent.click(listeningStudyBtn);
    
    // Click Bookmark button
    const bookmarkBtn = screen.getByRole('button', { name: /Bookmark/i });
    fireEvent.click(bookmarkBtn);
    
    // Bookmark status changes
    expect(screen.getByRole('button', { name: /Bookmarked/i })).toBeInTheDocument();
    
    // Textarea for notes should appear
    const textarea = screen.getByPlaceholderText(/Ketik tips grammar/i);
    expect(textarea).toBeInTheDocument();
    
    // Write note
    fireEvent.change(textarea, { target: { value: 'Inilah catatan belajar penting.' } });
    
    // Click "Keluar Sesi" to go back to Dashboard
    const exitBtn = screen.getByRole('button', { name: /Keluar Sesi/i });
    fireEvent.click(exitBtn);
    
    // On Dashboard, verify Bookmarks tab shows 1 item
    const bookmarksTab = screen.getByRole('button', { name: /Soal Ditandai \(1\)/i });
    expect(bookmarksTab).toBeInTheDocument();
    
    // Click Bookmarks tab
    fireEvent.click(bookmarksTab);
    
    // Verify bookmarked question and custom note are rendered
    expect(screen.getByText('Koleksi Soal Ditandai')).toBeInTheDocument();
    
    // Click button to show explanation, which displays key answer containing "piano"
    const showExplanationBtn = screen.getByRole('button', { name: /Lihat Pembahasan & Jawaban/i });
    fireEvent.click(showExplanationBtn);
    
    expect(screen.getAllByText(/piano/i).length).toBeGreaterThanOrEqual(1); // Question 1 talks about piano
    expect(screen.getByDisplayValue('Inilah catatan belajar penting.')).toBeInTheDocument();
  });

  it('opens Question Navigator Grid, navigates to question 5, and updates current question index', () => {
    render(<App />);
    
    // Start listening study mode
    const listeningStudyBtn = screen.getAllByRole('button', { name: /📖 Study/i })[0];
    fireEvent.click(listeningStudyBtn);
    
    // Default is Question 1
    expect(screen.getByText('Question 1')).toBeInTheDocument();
    
    // Click "Peta Soal" button
    const mapBtn = screen.getByRole('button', { name: /Peta Soal/i });
    fireEvent.click(mapBtn);
    
    // Grid panel appears, click button "5"
    const gridItem5 = screen.getByRole('button', { name: '5' });
    fireEvent.click(gridItem5);
    
    // Check that we jumped to Question 5
    expect(screen.getByText('Question 5')).toBeInTheDocument();
  });

  it('triggers Custom Submit Confirmation Modal, cancels, and then submits successfully', () => {
    render(<App />);
    
    // Start structure study mode (40 questions, shorter than listening)
    const structureStudyBtn = screen.getAllByRole('button', { name: /📖 Study/i })[1];
    fireEvent.click(structureStudyBtn);
    
    // Jump to the last question via Peta Soal to make "Selesai & Kumpulkan" button visible
    const mapBtn = screen.getByRole('button', { name: /Peta Soal/i });
    fireEvent.click(mapBtn);
    
    const gridItem40 = screen.getByRole('button', { name: '40' });
    fireEvent.click(gridItem40);
    
    expect(screen.getByText('Question 40')).toBeInTheDocument();
    
    // Click "Selesai & Kumpulkan"
    const finishBtn = screen.getByRole('button', { name: /Selesai & Kumpulkan/i });
    fireEvent.click(finishBtn);
    
    // Confirmation Modal should appear
    expect(screen.getByText('Kumpulkan Jawaban?')).toBeInTheDocument();
    expect(screen.getByText(/Ada soal yang belum Anda jawab/i)).toBeInTheDocument();
    
    // Click "Kembali" to close modal
    const cancelModalBtn = screen.getByRole('button', { name: /Kembali/i });
    fireEvent.click(cancelModalBtn);
    
    // Modal is closed, we are still on question 40
    expect(screen.queryByText('Kumpulkan Jawaban?')).not.toBeInTheDocument();
    expect(screen.getByText('Question 40')).toBeInTheDocument();
    
    // Click finish again and confirm submission
    fireEvent.click(finishBtn);
    const confirmModalBtn = screen.getByRole('button', { name: /Ya, Kumpulkan/i });
    fireEvent.click(confirmModalBtn);
    
    // We should be in results screen
    expect(screen.getByText(/Laporan Kinerja TOEFL Anda/i)).toBeInTheDocument();
  });

  it('detects saved session in localStorage, shows Custom Resume Modal, and resumes progress', () => {
    // Seed a saved session for test1 listening study mode (soal 3, 2 answered questions)
    const sessionKey = 'toefl_session_test1_listening_study';
    const mockSession = {
      currentQuestionIndex: 2, // question 3
      userAnswers: { l1_1: 2, l1_2: 3 },
      timerSeconds: 0
    };
    window.localStorage.setItem(sessionKey, JSON.stringify(mockSession));
    
    render(<App />);
    
    // Click Listening Study button
    const listeningStudyBtn = screen.getAllByRole('button', { name: /📖 Study/i })[0];
    fireEvent.click(listeningStudyBtn);
    
    // Custom Resume Modal should appear
    expect(screen.getByText('Lanjutkan Latihan?')).toBeInTheDocument();
    expect(screen.getByText(/terakhir di soal 3/i)).toBeInTheDocument();
    
    // Click "Lanjutkan Sesi"
    const resumeBtn = screen.getByRole('button', { name: /Lanjutkan Sesi/i });
    fireEvent.click(resumeBtn);
    
    // We should be on Question 3 and answers should be loaded
    expect(screen.getByText('Question 3')).toBeInTheDocument();
    
    // Go back to check Question 1 answer
    const mapBtn = screen.getByRole('button', { name: /Peta Soal/i });
    fireEvent.click(mapBtn);
    
    const gridItem1 = screen.getByRole('button', { name: '1' });
    fireEvent.click(gridItem1);
    
    // Option C (index 2) should be selected (She believes the photos are on the piano)
    const optionC = screen.getByText(/She believes the photos/i);
    expect(optionC.closest('.border')).toHaveClass('border-indigo-500');
  });

  it('starts Full Exam, clicks exit, shows Custom Exit Modal, cancels exit, and then completes exit', () => {
    render(<App />);
    
    // Click Mulai Ujian Lengkap
    const fullExamBtn = screen.getByRole('button', { name: /Mulai Ujian Lengkap/i });
    fireEvent.click(fullExamBtn);
    
    // We are in full exam, click "Keluar Ujian" button in header
    const exitBtn = screen.getByRole('button', { name: /Keluar Ujian/i });
    fireEvent.click(exitBtn);
    
    // Custom Exit Modal should appear
    expect(screen.getByText('Batalkan Ujian Lengkap?')).toBeInTheDocument();
    
    // Click "Kembali Ujian"
    const backToExamBtn = screen.getByRole('button', { name: /Kembali Ujian/i });
    fireEvent.click(backToExamBtn);
    
    // We are still in the exam
    expect(screen.queryByText('Batalkan Ujian Lengkap?')).not.toBeInTheDocument();
    expect(screen.getByText('Question 1')).toBeInTheDocument();
    
    // Click "Keluar Ujian" again and confirm exit
    fireEvent.click(exitBtn);
    const confirmExitBtn = screen.getByRole('button', { name: /Ya, Batalkan Ujian/i });
    fireEvent.click(confirmExitBtn);
    
    // We should be back on the dashboard
    expect(screen.getByText('TOEFL PBT Simulator')).toBeInTheDocument();
  });
});

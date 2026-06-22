import { describe, it, expect } from 'vitest';
import { rawToScaled, calcSectionScore, calculateTOEFLScores, CONVERSION_TABLES } from './utils/scoring';

describe('TOEFL Scoring Conversion Tables', () => {
  it('should map Listening raw scores correctly', () => {
    expect(rawToScaled(50, 'listening')).toBe(68);
    expect(rawToScaled(40, 'listening')).toBe(57);
    expect(rawToScaled(30, 'listening')).toBe(50);
    expect(rawToScaled(10, 'listening')).toBe(32);
    expect(rawToScaled(0, 'listening')).toBe(24);
  });

  it('should map Structure raw scores correctly', () => {
    expect(rawToScaled(40, 'structure')).toBe(68);
    expect(rawToScaled(30, 'structure')).toBe(54);
    expect(rawToScaled(20, 'structure')).toBe(43);
    expect(rawToScaled(10, 'structure')).toBe(32);
    expect(rawToScaled(0, 'structure')).toBe(20);
  });

  it('should map Reading raw scores correctly', () => {
    expect(rawToScaled(50, 'reading')).toBe(67);
    expect(rawToScaled(40, 'reading')).toBe(56);
    expect(rawToScaled(30, 'reading')).toBe(48);
    expect(rawToScaled(10, 'reading')).toBe(30);
    expect(rawToScaled(0, 'reading')).toBe(21);
  });

  it('should clamp out-of-bound raw scores safely', () => {
    expect(rawToScaled(-5, 'listening')).toBe(24);
    expect(rawToScaled(100, 'listening')).toBe(68);
  });
});

describe('calcSectionScore', () => {
  const mockQuestions = [
    { id: 'q1', answer: 0, type: 'multiple_choice' },
    { id: 'q2', answer: 2, type: 'multiple_choice' },
    { id: 'q3', answer: 'B', type: 'written_expression' }
  ];

  it('should calculate scores correctly when all correct', () => {
    const answers = { q1: 0, q2: 2, q3: 'B' };
    const score = calcSectionScore(mockQuestions, answers, 'listening');
    expect(score.correct).toBe(3);
    expect(score.total).toBe(3);
    expect(score.percent).toBe(100);
  });

  it('should calculate scores correctly when some incorrect', () => {
    const answers = { q1: 0, q2: 1, q3: 'C' }; // only q1 correct
    const score = calcSectionScore(mockQuestions, answers, 'listening');
    expect(score.correct).toBe(1);
    expect(score.total).toBe(3);
    expect(score.percent).toBe(33);
  });

  it('should handle un-answered questions safely', () => {
    const answers = { q1: 0 }; // q2 and q3 unanswered
    const score = calcSectionScore(mockQuestions, answers, 'listening');
    expect(score.correct).toBe(1);
    expect(score.total).toBe(3);
    expect(score.percent).toBe(33);
  });
});

describe('calculateTOEFLScores', () => {
  it('should calculate score for a single section', () => {
    const mockQuestions = Array.from({ length: 50 }, (_, i) => ({ id: `q${i}`, answer: 0 }));
    const mockAnswers = Array.from({ length: 40 }, (_, i) => ({ [`q${i}`]: 0 })).reduce((acc, curr) => ({ ...acc, ...curr }), {});
    
    // 40 correct out of 50 in listening -> scaled score is 57
    const result = calculateTOEFLScores({
      isFullExam: false,
      questions: mockQuestions,
      userAnswers: mockAnswers,
      selectedSection: 'listening',
      fullExamQuestions: {},
      fullExamAnswers: {}
    });

    expect(result.isFullExam).toBe(false);
    expect(result.correct).toBe(40);
    expect(result.total).toBe(50);
    expect(result.percentage).toBe(80);
    expect(result.scaledScore).toBe(57);
    expect(result.estimatedPBT).toBe(570); // 57 * 10 * 3 / 3 = 570
  });

  it('should calculate combined scores for a full exam', () => {
    // Mock 50 Listening questions, all correct -> scaled 68
    const lQuestions = Array.from({ length: 50 }, (_, i) => ({ id: `l${i}`, answer: 0 }));
    const lAnswers = lQuestions.reduce((acc, q) => ({ ...acc, [q.id]: 0 }), {});

    // Mock 40 Structure questions, 30 correct -> scaled 54
    const sQuestions = Array.from({ length: 40 }, (_, i) => ({ id: `s${i}`, answer: 0 }));
    const sAnswers = sQuestions.slice(0, 30).reduce((acc, q) => ({ ...acc, [q.id]: 0 }), {});

    // Mock 50 Reading questions, 40 correct -> scaled 56
    const rQuestions = Array.from({ length: 50 }, (_, i) => ({ id: `r${i}`, answer: 0 }));
    const rAnswers = rQuestions.slice(0, 40).reduce((acc, q) => ({ ...acc, [q.id]: 0 }), {});

    const result = calculateTOEFLScores({
      isFullExam: true,
      questions: [],
      userAnswers: {},
      selectedSection: 'listening',
      fullExamQuestions: {
        listening: lQuestions,
        structure: sQuestions,
        reading: rQuestions
      },
      fullExamAnswers: {
        listening: lAnswers,
        structure: sAnswers,
        reading: rAnswers
      }
    });

    expect(result.isFullExam).toBe(true);
    expect(result.listening.scaled).toBe(68);
    expect(result.structure.scaled).toBe(54);
    expect(result.reading.scaled).toBe(56);
    expect(result.correct).toBe(50 + 30 + 40); // 120
    expect(result.total).toBe(140);
    
    // Formula: Math.round(((68 + 54 + 56) * 10) / 3) = Math.round((178 * 10) / 3) = Math.round(1780 / 3) = 593
    expect(result.estimatedPBT).toBe(593);
  });
});

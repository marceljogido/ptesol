// ===== TOEFL PBT CONVERSION TABLES (Peterson's) =====
// Maps: raw correct → scaled score (31-68) per section
// Based on Peterson's TOEFL PBT Practice Tests conversion charts
export const CONVERSION_TABLES = {
  // Listening Comprehension: 50 questions → scaled 24-68
  listening: {
    50:68, 49:67, 48:66, 47:65, 46:63, 45:62, 44:61, 43:60, 42:59, 41:58,
    40:57, 39:57, 38:56, 37:55, 36:54, 35:54, 34:53, 33:52, 32:52, 31:51,
    30:50, 29:49, 28:49, 27:48, 26:47, 25:46, 24:45, 23:45, 22:44, 21:43,
    20:42, 19:41, 18:40, 17:39, 16:38, 15:37, 14:36, 13:35, 12:34, 11:33,
    10:32, 9:32, 8:31, 7:30, 6:29, 5:28, 4:27, 3:26, 2:25, 1:24, 0:24
  },
  // Structure & Written Expression: 40 questions → scaled 20-68
  structure: {
    40:68, 39:67, 38:65, 37:63, 36:61, 35:60, 34:58, 33:57, 32:56, 31:55,
    30:54, 29:53, 28:52, 27:51, 26:50, 25:49, 24:48, 23:47, 22:46, 21:44,
    20:43, 19:42, 18:41, 17:40, 16:39, 15:38, 14:37, 13:36, 12:35, 11:33,
    10:32, 9:31, 8:29, 7:28, 6:27, 5:26, 4:25, 3:23, 2:22, 1:21, 0:20
  },
  // Reading Comprehension: 50 questions → scaled 21-67
  reading: {
    50:67, 49:66, 48:65, 47:63, 46:62, 45:61, 44:60, 43:59, 42:58, 41:57,
    40:56, 39:55, 38:54, 37:54, 36:53, 35:52, 34:51, 33:50, 32:49, 31:49,
    30:48, 29:47, 28:46, 27:46, 26:45, 25:44, 24:43, 23:42, 22:41, 21:41,
    20:40, 19:39, 18:38, 17:37, 16:36, 15:35, 14:34, 13:33, 12:32, 11:31,
    10:30, 9:29, 8:28, 7:27, 6:26, 5:25, 4:24, 3:23, 2:22, 1:21, 0:21
  }
};

export const rawToScaled = (rawCorrect, sectionType) => {
  const table = CONVERSION_TABLES[sectionType];
  if (!table) return Math.round(31 + ((rawCorrect / 50) * 100 * 0.37)); // fallback
  const clamped = Math.max(0, Math.min(rawCorrect, Math.max(...Object.keys(table).map(Number))));
  return table[clamped] !== undefined ? table[clamped] : table[Math.round(clamped)];
};

export const calcSectionScore = (sectionQuestions, sectionAnswers, sectionType) => {
  let correct = 0;
  if (Array.isArray(sectionQuestions)) {
    sectionQuestions.forEach(q => {
      const userAns = sectionAnswers[q.id];
      if (q.type === 'written_expression') {
        if (userAns === q.answer) correct++;
      } else {
        if (userAns !== undefined && userAns === q.answer) correct++;
      }
    });
  }
  const total = Array.isArray(sectionQuestions) ? sectionQuestions.length : 0;
  const percent = total > 0 ? (correct / total) * 100 : 0;
  const scaled = rawToScaled(correct, sectionType);
  return { correct, total, percent: Math.round(percent), scaled };
};

export const calculateTOEFLScores = ({
  isFullExam,
  fullExamQuestions,
  fullExamAnswers,
  questions,
  userAnswers,
  selectedSection
}) => {
  if (isFullExam) {
    const lScore = calcSectionScore(fullExamQuestions.listening, fullExamAnswers.listening, 'listening');
    const sScore = calcSectionScore(fullExamQuestions.structure, fullExamAnswers.structure, 'structure');
    const rScore = calcSectionScore(fullExamQuestions.reading, fullExamAnswers.reading, 'reading');
    
    // Official TOEFL PBT formula: (L + S + R) × 10 ÷ 3
    const totalPBT = Math.round(((lScore.scaled + sScore.scaled + rScore.scaled) * 10) / 3);
    const totalCorrect = lScore.correct + sScore.correct + rScore.correct;
    const totalQuestions = lScore.total + sScore.total + rScore.total;
    
    return {
      isFullExam: true,
      listening: lScore,
      structure: sScore,
      reading: rScore,
      correct: totalCorrect,
      total: totalQuestions,
      percentage: totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0,
      estimatedPBT: totalPBT
    };
  } else {
    const score = calcSectionScore(questions, userAnswers, selectedSection);
    return {
      isFullExam: false,
      correct: score.correct,
      total: score.total,
      percentage: score.percent,
      // Single section: estimate total PBT assuming same performance across all sections
      estimatedPBT: Math.round((score.scaled * 10 * 3) / 3),
      scaledScore: score.scaled
    };
  }
};

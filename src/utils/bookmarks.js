// ===== TOEFL PRACTICE SIMULATOR BOOKMARKS UTILITY =====
// State is persisted in localStorage under 'toefl_bookmarks'

export const getBookmarks = () => {
  try {
    const saved = localStorage.getItem('toefl_bookmarks');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const toggleBookmark = (questionData, testId, sectionId) => {
  const bookmarks = getBookmarks();
  const existingIndex = bookmarks.findIndex(b => b.questionId === questionData.id);

  let updated;
  if (existingIndex > -1) {
    // Remove if already exists
    updated = bookmarks.filter(b => b.questionId !== questionData.id);
  } else {
    // Add new bookmark
    const newBookmark = {
      questionId: questionData.id,
      testId,
      section: sectionId,
      number: questionData.number,
      type: questionData.type,
      question: questionData.question || questionData.sentence,
      options: questionData.options,
      answer: questionData.answer,
      explanation: questionData.explanation,
      sentenceParts: questionData.sentenceParts,
      sentence: questionData.sentence,
      note: '',
      timestamp: Date.now()
    };
    updated = [newBookmark, ...bookmarks];
  }

  try {
    localStorage.setItem('toefl_bookmarks', JSON.stringify(updated));
  } catch (e) {
    console.error("Gagal menyimpan bookmark ke localStorage:", e);
  }
  return updated;
};

export const saveNote = (questionId, noteText) => {
  const bookmarks = getBookmarks();
  const updated = bookmarks.map(b => {
    if (b.questionId === questionId) {
      return { ...b, note: noteText };
    }
    return b;
  });

  try {
    localStorage.setItem('toefl_bookmarks', JSON.stringify(updated));
  } catch (e) {
    console.error("Gagal menyimpan catatan bookmark ke localStorage:", e);
  }
  return updated;
};

export const isBookmarked = (questionId) => {
  const bookmarks = getBookmarks();
  return bookmarks.some(b => b.questionId === questionId);
};

export const getNoteForQuestion = (questionId) => {
  const bookmarks = getBookmarks();
  const found = bookmarks.find(b => b.questionId === questionId);
  return found ? found.note : '';
};

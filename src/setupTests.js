import '@testing-library/jest-dom';

// Mock localStorage if not fully simulated
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    removeItem: (key) => { delete store[key]; },
    clear: () => { store = {}; },
    length: Object.keys(store).length,
    key: (index) => Object.keys(store)[index] || null
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock SpeechSynthesisUtterance
class MockSpeechSynthesisUtterance {
  constructor(text) {
    this.text = text;
    this.voice = null;
    this.rate = 1.0;
    this.onend = null;
    this.onerror = null;
    this.onboundary = null;
  }
}
global.SpeechSynthesisUtterance = MockSpeechSynthesisUtterance;
window.SpeechSynthesisUtterance = MockSpeechSynthesisUtterance;

// Mock window.speechSynthesis
const speechSynthesisMock = {
  speak: (utterance) => {
    // Simulate speech by triggering onend or boundaries asynchronously if needed,
    // or just mock it as a no-op
    setTimeout(() => {
      if (utterance.onend) {
        utterance.onend({ type: 'end' });
      }
    }, 50);
  },
  cancel: () => {},
  pause: () => {},
  resume: () => {},
  getVoices: () => [
    { name: 'Google US English', lang: 'en-US', default: true },
    { name: 'Google UK English Female', lang: 'en-GB', default: false }
  ],
  onvoiceschanged: null
};

Object.defineProperty(window, 'speechSynthesis', { value: speechSynthesisMock });
Object.defineProperty(global, 'speechSynthesis', { value: speechSynthesisMock });

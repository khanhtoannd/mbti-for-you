import { brand } from './brand';

export type Language = 'vi' | 'en';

export const translations = {
  vi: {
    title: brand.title.vi,
    subtitle: brand.subtitle.vi,
    start: 'Bắt Đầu',
    next: 'Tiếp Theo',
    prev: 'Quay Lại',
    question: 'Câu hỏi',
    of: 'trên',
    progress: 'Tiến trình',
    agree: 'Đồng ý',
    disagree: 'Không đồng ý',
    stronglyAgree: 'Rất đồng ý',
    stronglyDisagree: 'Rất không đồng ý',
    neutral: 'Trung lập',
    result: 'Kết quả của bạn',
    restart: 'Làm lại',
    yourType: 'Kiểu tính cách của bạn là',
    selectAnswer: 'Chọn một câu trả lời',
  },
  en: {
    title: brand.title.en,
    subtitle: brand.subtitle.en,
    start: 'Start Quiz',
    next: 'Next',
    prev: 'Back',
    question: 'Question',
    of: 'of',
    progress: 'Progress',
    agree: 'Agree',
    disagree: 'Disagree',
    stronglyAgree: 'Strongly Agree',
    stronglyDisagree: 'Strongly Disagree',
    neutral: 'Neutral',
    result: 'Your Result',
    restart: 'Restart',
    yourType: 'Your personality type is',
    selectAnswer: 'Select an answer',
  },
} as const;

export type Translations = typeof translations['en'];

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Language } from '@/lib/i18n';
import { questions, calculateMBTI, MBTIScores } from '@/lib/mbti-questions';
import LanguageToggle from '@/components/LanguageToggle';
import QuizStart from '@/components/QuizStart';
import QuizQuestion from '@/components/QuizQuestion';
import QuizResult from '@/components/QuizResult';

type Phase = 'start' | 'quiz' | 'result';

const Index = () => {
  const [language, setLanguage] = useState<Language>('vi');
  const [phase, setPhase] = useState<Phase>('start');
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [mbtiType, setMbtiType] = useState('');
  const [scores, setScores] = useState<MBTIScores>({ EI: 0, SN: 0, TF: 0, JP: 0 });

  const handleAnswer = (value: number) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQ].id]: value }));
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((prev) => prev + 1);
    } else {
      const result = calculateMBTI(answers);
      setMbtiType(result.type);
      setScores(result.scores);
      setPhase('result');
    }
  };

  const handleRestart = () => {
    setPhase('start');
    setCurrentQ(0);
    setAnswers({});
    setMbtiType('');
    setScores({ EI: 0, SN: 0, TF: 0, JP: 0 });
  };

  return (
    <div className="relative min-h-screen" style={{ background: 'var(--gradient-ocean)' }}>
      <div className="fixed right-4 top-4 z-50">
        <LanguageToggle language={language} onToggle={setLanguage} />
      </div>

      <AnimatePresence mode="wait">
        {phase === 'start' && (
          <QuizStart key="start" language={language} onStart={() => setPhase('quiz')} />
        )}

        {phase === 'quiz' && (
          <QuizQuestion
            key={`q-${currentQ}`}
            language={language}
            question={questions[currentQ]}
            currentIndex={currentQ}
            total={questions.length}
            answer={answers[questions[currentQ].id]}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrev={() => setCurrentQ((prev) => Math.max(0, prev - 1))}
          />
        )}

        {phase === 'result' && (
          <QuizResult
            key="result"
            language={language}
            mbtiType={mbtiType}
            scores={scores}
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;

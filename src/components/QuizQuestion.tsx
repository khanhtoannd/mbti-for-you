import { motion } from 'framer-motion';
import { translations, Language } from '@/lib/i18n';
import { MBTIQuestion } from '@/lib/mbti-questions';

interface QuizQuestionProps {
  language: Language;
  question: MBTIQuestion;
  currentIndex: number;
  total: number;
  answer: number | undefined;
  onAnswer: (value: number) => void;
  onNext: () => void;
  onPrev: () => void;
}

const QuizQuestion = ({
  language,
  question,
  currentIndex,
  total,
  answer,
  onAnswer,
  onNext,
  onPrev,
}: QuizQuestionProps) => {
  const t = translations[language];
  const progress = ((currentIndex + 1) / total) * 100;

  const options = [
    { value: 1, label: t.stronglyDisagree },
    { value: 2, label: t.disagree },
    { value: 3, label: t.neutral },
    { value: 4, label: t.agree },
    { value: 5, label: t.stronglyAgree },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="flex min-h-screen items-center justify-center px-4"
    >
      <div className="flex w-full max-w-5xl flex-col gap-8 lg:flex-row lg:gap-16">
        {/* Left - progress panel */}
        <div className="flex flex-col justify-center gap-6 lg:w-72">
          <div className="text-sm font-medium text-muted-foreground">
            {t.question} {currentIndex + 1} {t.of} {total}
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full rounded-full"
              style={{ background: 'var(--gradient-accent)' }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
          
        </div>

        {/* Right - question */}
        <div className="flex flex-1 flex-col justify-center gap-8">
          <h2 className="font-heading text-2xl font-semibold leading-relaxed md:text-3xl">
            {question[language]}
          </h2>

          <div className="space-y-3">
            {options.map((opt, i) => (
              <motion.button
                key={opt.value}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onAnswer(opt.value)}
                className={`w-full rounded-xl border px-6 py-4 text-left font-medium transition-colors ${
                  answer === opt.value
                    ? 'border-primary bg-primary/10 text-foreground'
                    : 'border-border bg-card text-muted-foreground hover:border-primary/50 hover:text-foreground'
                }`}
              >
                {opt.label}
              </motion.button>
            ))}
          </div>

          <div className="flex gap-3">
            {currentIndex > 0 && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onPrev}
                className="rounded-xl border border-border bg-card px-6 py-3 font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                ← {t.prev}
              </motion.button>
            )}
            {answer !== undefined && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onNext}
                className="rounded-xl px-6 py-3 font-semibold text-primary-foreground"
                style={{ background: 'var(--gradient-accent)' }}
              >
                {t.next} →
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizQuestion;

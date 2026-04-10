import { motion } from 'framer-motion';
import { translations, Language } from '@/lib/i18n';
import { mbtiResults, MBTIScores } from '@/lib/mbti-questions';
import { brand } from '@/lib/brand';

interface QuizResultProps {
  language: Language;
  mbtiType: string;
  scores: MBTIScores;
  onRestart: () => void;
}

const dimensionLabels = {
  EI: { first: 'E – Extraversion', second: 'I – Introversion', viFirst: 'E – Hướng ngoại', viSecond: 'I – Hướng nội' },
  SN: { first: 'S – Sensing', second: 'N – Intuition', viFirst: 'S – Cảm nhận', viSecond: 'N – Trực giác' },
  TF: { first: 'T – Thinking', second: 'F – Feeling', viFirst: 'T – Lý trí', viSecond: 'F – Cảm xúc' },
  JP: { first: 'J – Judging', second: 'P – Perceiving', viFirst: 'J – Nguyên tắc', viSecond: 'P – Linh hoạt' },
};

const dimColors: Record<string, [string, string]> = {
  EI: ['hsl(185, 55%, 40%)', 'hsl(260, 50%, 55%)'],
  SN: ['hsl(35, 80%, 55%)', 'hsl(168, 60%, 45%)'],
  TF: ['hsl(210, 60%, 50%)', 'hsl(340, 60%, 55%)'],
  JP: ['hsl(150, 50%, 45%)', 'hsl(20, 70%, 55%)'],
};

const QuizResult = ({ language, mbtiType, scores, onRestart }: QuizResultProps) => {
  const t = translations[language];
  const result = mbtiResults[mbtiType];

  const letterColors: Record<string, string> = {
    E: 'hsl(185, 55%, 40%)', I: 'hsl(260, 50%, 55%)',
    S: 'hsl(35, 80%, 55%)', N: 'hsl(168, 60%, 45%)',
    T: 'hsl(210, 60%, 50%)', F: 'hsl(340, 60%, 55%)',
    J: 'hsl(150, 50%, 45%)', P: 'hsl(20, 70%, 55%)',
  };

  // Convert raw scores to percentages (max possible per dimension = 10 questions * 2 = 20)
  const getPercentages = (dim: keyof MBTIScores) => {
    const raw = scores[dim];
    const maxScore = 20;
    const firstPct = Math.round(((raw + maxScore) / (2 * maxScore)) * 100);
    return { first: firstPct, second: 100 - firstPct };
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen items-center justify-center px-4 py-12"
    >
      <div className="flex w-full max-w-5xl flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
        {/* Left - type display */}
        <div className="flex flex-col items-center gap-8 lg:items-start">
          <div className="flex gap-3">
            {mbtiType.split('').map((letter, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, rotateY: 90 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ delay: 0.2 + i * 0.15, type: 'spring', stiffness: 150 }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl font-heading text-3xl font-bold text-primary-foreground md:h-24 md:w-24 md:text-4xl"
                style={{
                  backgroundColor: letterColors[letter],
                  boxShadow: `0 10px 30px ${letterColors[letter]}40`,
                }}
              >
                {letter}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="text-sm font-medium text-accent">{t.yourType}</div>
            <h1 className="mt-2 font-heading text-3xl font-bold md:text-4xl">
              {result?.[language]?.title || mbtiType}
            </h1>
            <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
              {result?.[language]?.description}
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onRestart}
            className="w-fit rounded-xl border border-border bg-card px-8 py-3 font-semibold text-foreground transition-colors hover:border-primary"
          >
            {t.restart}
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-sm text-muted-foreground"
          >
            {language === 'vi' ? brand.footer.vi : brand.footer.en} · {brand.handle}
          </motion.div>
        </div>

        {/* Right - dimension chart */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 space-y-5"
        >
          <h3 className="font-heading text-lg font-semibold text-foreground">
            {language === 'vi' ? 'Phân tích chi tiết' : 'Detailed Analysis'}
          </h3>

          {(Object.keys(dimensionLabels) as Array<keyof typeof dimensionLabels>).map((dim, idx) => {
            const pct = getPercentages(dim);
            const labels = dimensionLabels[dim];
            const colors = dimColors[dim];
            const firstLabel = language === 'vi' ? labels.viFirst : labels.first;
            const secondLabel = language === 'vi' ? labels.viSecond : labels.second;

            return (
              <div key={dim} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium" style={{ color: colors[0] }}>{firstLabel}</span>
                  <span className="font-medium" style={{ color: colors[1] }}>{secondLabel}</span>
                </div>
                <div className="flex h-8 w-full overflow-hidden rounded-lg bg-muted">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct.first}%` }}
                    transition={{ delay: 0.6 + idx * 0.15, duration: 0.8, ease: 'easeOut' }}
                    className="flex items-center justify-end rounded-l-lg pr-2 text-xs font-bold text-white"
                    style={{ backgroundColor: colors[0], minWidth: pct.first > 5 ? undefined : '2rem' }}
                  >
                    {pct.first}%
                  </motion.div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct.second}%` }}
                    transition={{ delay: 0.6 + idx * 0.15, duration: 0.8, ease: 'easeOut' }}
                    className="flex items-center justify-start rounded-r-lg pl-2 text-xs font-bold text-white"
                    style={{ backgroundColor: colors[1], minWidth: pct.second > 5 ? undefined : '2rem' }}
                  >
                    {pct.second}%
                  </motion.div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default QuizResult;

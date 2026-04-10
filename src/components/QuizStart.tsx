import { motion } from 'framer-motion';
import { translations, Language } from '@/lib/i18n';
import { brand } from '@/lib/brand';

interface QuizStartProps {
  language: Language;
  onStart: () => void;
}

const QuizStart = ({ language, onStart }: QuizStartProps) => {
  const t = translations[language];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="flex min-h-screen items-center justify-center px-4"
    >
      <div className="flex w-full max-w-5xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-accent"
          >
            {language === 'vi' ? brand.badge.vi : brand.badge.en}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-xl text-lg text-muted-foreground"
          >
            {t.subtitle}
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onStart}
            className="group relative overflow-hidden rounded-xl px-8 py-4 font-heading text-lg font-semibold text-primary-foreground transition-all"
            style={{ background: 'var(--gradient-accent)' }}
          >
            <span className="relative z-10">{t.start} →</span>
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-muted-foreground"
          >
            {language === 'vi' ? brand.footer.vi : brand.footer.en} · {brand.handle}
          </motion.div>
        </div>

        <div className="hidden flex-1 lg:flex lg:justify-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {['E/I', 'S/N', 'T/F', 'J/P'].map((dim, i) => (
                <motion.div
                  key={dim}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.08, rotate: 2 }}
                  className="flex h-32 w-32 items-center justify-center rounded-2xl border border-border bg-card font-heading text-2xl font-bold text-accent"
                  style={{ boxShadow: 'var(--shadow-glow)' }}
                >
                  {dim}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizStart;

import { Language } from '@/lib/i18n';

interface LanguageToggleProps {
  language: Language;
  onToggle: (lang: Language) => void;
}

const LanguageToggle = ({ language, onToggle }: LanguageToggleProps) => {
  return (
    <div className="flex items-center gap-1 rounded-full bg-muted p-1">
      <button
        onClick={() => onToggle('vi')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === 'vi'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        🇻🇳 VI
      </button>
      <button
        onClick={() => onToggle('en')}
        className={`rounded-full px-3 py-1 text-sm font-medium transition-all ${
          language === 'en'
            ? 'bg-primary text-primary-foreground shadow-sm'
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        🇬🇧 EN
      </button>
    </div>
  );
};

export default LanguageToggle;

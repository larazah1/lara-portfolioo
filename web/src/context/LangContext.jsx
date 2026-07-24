import { createContext, useContext, useMemo, useState } from 'react';

const LangContext = createContext(null);

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');

  const value = useMemo(() => ({
    lang,
    isAr: lang === 'ar',
    toggle: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
    t: (field) => {
      if (!field) return '';
      if (typeof field === 'string') return field;
      return field[lang] ?? field.en;
    },
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}

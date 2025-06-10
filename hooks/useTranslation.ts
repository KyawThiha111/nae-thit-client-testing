// hooks/useTranslation.ts

import { useLangStore } from "./useLangStore";

// Define the shape of your translation files
interface Translations {
  [key: string]: string;
}

const useTranslation = () => {
  const { lang } = useLangStore();

  const t = (key: string): string => {
    // Dynamically import the translation file based on current language
    const translations: Translations = require(`../messages/${lang}.json`);
    return translations[key] || key; // Fallback to key if translation not found
  };

  return { t };
};

export default useTranslation;

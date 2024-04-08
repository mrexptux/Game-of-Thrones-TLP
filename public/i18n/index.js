/*import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { eng } from "./eng";
import { sp } from "./sp";

i18n.use(initReactI18next).init({
  resources: {
    eng: {
      translation: engTranslation,
    },
    sp: {
      translation: spTranslation,
    },
  },
  lng: "eng",
  fallbackLng: "eng",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
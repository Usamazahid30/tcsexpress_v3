import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enCommon from "./locales/en/common.json";
import enSite from "./locales/en/site.json";
import urCommon from "./locales/ur/common.json";
import urSite from "./locales/ur/site.json";

const resources = {
  en: {
    common: enCommon,
    site: enSite,
  },
  ur: {
    common: urCommon,
    site: urSite,
  },
};

function updateDocumentDir(lng: string) {
  const isRtl = lng === "ur";
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.lang = lng;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    ns: ["common", "site"],
    defaultNS: "common",
    fallbackLng: "en",
    lng: localStorage.getItem("i18nextLng") || "en",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

updateDocumentDir(i18n.language || "en");

i18n.on("languageChanged", (lng) => {
  updateDocumentDir(lng);
});

export default i18n;

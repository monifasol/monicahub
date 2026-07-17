import en from "@/messages/en.json";
import es from "@/messages/es.json";

export const messages = {
  en,
  es,
};

export const SUPPORTED_LANGS = ["es", "en"];
export const DEFAULT_LANG = "es";

export function getMessages(lang = DEFAULT_LANG) {
  return messages[lang] || messages[DEFAULT_LANG];
}

/** Resolve language: saved preference → browser → ES fallback. */
export function resolveInitialLang() {
  if (typeof window === "undefined") {
    return DEFAULT_LANG;
  }

  const saved = localStorage.getItem("lang");
  if (saved && SUPPORTED_LANGS.includes(saved)) {
    return saved;
  }

  const browser = (navigator.language || "").toLowerCase();
  if (browser.startsWith("es")) {
    return "es";
  }
  if (browser.startsWith("en")) {
    return "en";
  }

  return DEFAULT_LANG;
}

/** Client language store (useSyncExternalStore). */
let langOverride = null;
const langListeners = new Set();

export function subscribeLang(listener) {
  langListeners.add(listener);
  return () => langListeners.delete(listener);
}

export function getLangSnapshot() {
  if (langOverride && SUPPORTED_LANGS.includes(langOverride)) {
    return langOverride;
  }
  return resolveInitialLang();
}

export function getServerLangSnapshot() {
  return DEFAULT_LANG;
}

export function setLangPreference(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) {
    return;
  }
  langOverride = lang;
  localStorage.setItem("lang", lang);
  langListeners.forEach((listener) => listener());
}

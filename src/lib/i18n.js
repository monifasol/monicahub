import en from "@/messages/en.json";
import es from "@/messages/es.json";

export const messages = {
  en,
  es,
};

export function getMessages(lang = "en") {
  return messages[lang] || messages.en;
}

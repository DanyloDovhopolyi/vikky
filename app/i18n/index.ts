import { uk, type Translations } from "./uk";

export const translations: Record<string, Translations> = {
  uk,
};

export const defaultLocale = "uk";

export function useTranslations(): Translations {
  return translations[defaultLocale];
}

export { uk };
export type { Translations };

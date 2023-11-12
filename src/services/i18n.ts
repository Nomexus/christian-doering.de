import { createI18n, I18n, I18nOptions } from "vue-i18n";

export const SUPPORT_LOCALES = ["de", "en"];

export function setupI18n(options: I18nOptions) {
  const i18n = createI18n(options);

  if (typeof options.locale === "undefined") {
    options.locale = "de";
  }

  setI18nLanguage(i18n, options.locale);
  return i18n;
}

export function setI18nLanguage(i18n: I18n, locale: string) {
  if (i18n.mode === "legacy") {
    i18n.global.locale = locale;
  } else {
    // @ts-ignore
    i18n.global.locale.value = locale;
  }

  if (typeof document !== "undefined") {
    document.querySelector("html")?.setAttribute("lang", locale);
  }
}

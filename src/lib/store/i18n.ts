import { derived, writable } from "svelte/store";
import content from "$lib/utils/content";
import translation from "$lib/utils/translations";
import supportedLocales from "$lib/utils/locales"

type Locale = keyof typeof supportedLocales
type Vars = typeof content[Locale]

export const locale = writable<Locale>("en");
export const locales = Object.entries(supportedLocales);



// content
function getContent(locale: Locale) {

  return content[locale] as Vars;
}

export const c = derived(locale, ($locale) =>
  getContent($locale)
);


//translate
// type Locale = keyof typeof translation
type Key = keyof typeof translation[Locale]

type TranslationProps = {
  locale: Locale,
  key: Key,
}

function translate({ locale, key }: TranslationProps) {
  if (!key) throw new Error("no key provided to $t()");
  if (!locale) throw new Error(`no translation for key "${key}"`);

  let text = translation[locale][key];

  if (!text) throw new Error(`no translation found for ${locale}.${key}`);

  return text;
}

export const t = derived(locale, ($locale) => (key: Key) =>
  translate({ locale: $locale, key })
);

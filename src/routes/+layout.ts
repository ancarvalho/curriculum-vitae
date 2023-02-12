
import { loadTranslations, locale } from "$lib/translations";
import type { LayoutLoad } from "./$types";

export const load = (async ({ url, }) => {
  const { pathname } = url;

  if (typeof localStorage !== 'undefined') {
    let defaultLocale = localStorage.getItem("local")
    if (!defaultLocale) {
      defaultLocale = "pt"
      localStorage.setItem("local", defaultLocale)
    }
    const initLocale = locale.get() || defaultLocale; // set default if no locale already set
    await loadTranslations(initLocale, pathname); // keep this just before the `return`
  }


 

  return {};
}) satisfies LayoutLoad
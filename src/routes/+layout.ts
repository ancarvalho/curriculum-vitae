
import { localvalue } from "$lib/stores/local_store";
import { loadTranslations, locale } from "$lib/translations";
import type { LayoutLoad } from "./$types";

export const load = (async ({ url,  }) => {
  const { pathname } = url;
  
  if (typeof localStorage !== 'undefined') {
    const initLocale = locale.get() || localvalue; // set default if no locale already set
    await loadTranslations(initLocale, pathname); // keep this just before the `return`
  }

  return {};
}) satisfies LayoutLoad
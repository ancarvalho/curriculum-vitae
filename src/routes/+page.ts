import type { PageLoad } from './$types';
import { locale } from '$lib/translations';
import type { Content } from '$lib/entities/content';


export const load = (async ({ params, fetch }) => {

  if (typeof localStorage !== 'undefined') {

    let defaultLocale = localStorage.getItem("local")
    if (!defaultLocale) {
      defaultLocale = "pt"
    }
    const initLocale = locale.get() || defaultLocale;

    const res = await fetch(`/translations/${initLocale}/content.json`)
    const data = await res.json()


    return {
      content: data as Content,

    }
  }


}) satisfies PageLoad;  
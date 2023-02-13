import type { PageLoad } from './$types';
import type { Content } from '$lib/entities/content';
import { locale } from '$lib/translations';
import content from '$lib/store/content_storel';

export const load = (async ({ params, fetch, }) => {


  if (typeof localStorage !== 'undefined') {

    let defaultLocale = localStorage.getItem("local")
    if (!defaultLocale) {
      defaultLocale = "pt"
    }
    const initLocale = locale.get() || defaultLocale;

    const res = await fetch(`/translations/${initLocale}/content.json`)
    const data = await res.json()
    content.set(data)
  }



}) satisfies PageLoad;  
import type { PageLoad } from './$types';
import { locale } from '$lib/translations';
import content from '$lib/stores/content_store';
import { localvalue } from '$lib/stores/local_store';

export const load = (async ({ fetch, }) => {


  if (typeof localStorage !== undefined) {

    const initLocale = locale.get() || localvalue;

    const res = await fetch(`/translations/${initLocale}/content.json`)
    const data = await res.json()
    content.set(data)
  }



}) satisfies PageLoad;  
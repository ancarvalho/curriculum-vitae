
import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
export const config = {
  translations: {
    en: { lang },
    pt: { lang },
  },
  loaders: [
    {
      locale: 'en',
      key: 'menu',
      loader: async () => (await import('./en/menu.json')).default,
    },
    // {
      // locale: 'en',
    //   key: 'content',
    //   loader: async () => (await import('./en/content.json')).default,
    // },
    {
      locale: 'pt',
      key: 'menu',
      loader: async () => (await import('./pt/menu.json')).default,
    },
    // {
    //   locale: 'pt',
    //   key: 'content',
    //   loader: async () => (await import('./pt/content.json')).default,
    // },
  ],
};

export const { t, loading, locales, locale, loadTranslations, getTranslationProps, addTranslations } = new i18n(config);

loading.subscribe(($loading) => $loading && console.log('Loading translations...'));
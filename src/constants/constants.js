export const CODE_VARIANTS = {
  JS: 'JS',
};

export const ACTION_TYPES = {
  OPTIONS_CHANGE: 'OPTIONS_CHANGE',
  NOTIFICATIONS_CHANGE: 'NOTIFICATIONS_CHANGE',
};

// Valid languages to server-side render in production
export const LANGUAGES = ['en', 'zh', 'ru', 'pt', 'es', 'fr', 'de', 'ja'];

// Server side rendered languages
export const LANGUAGES_SSR = ['en', 'zh', 'ru', 'pt', 'es'];

// Work in progress
export const LANGUAGES_IN_PROGRESS = LANGUAGES.slice();

// Valid languages to use in production
export const LANGUAGES_LABEL = [
  {
    code: 'en',
    text: 'English',
  },
  {
    code: 'zh',
    text: '中文',
  },
  {
    code: 'ru',
    text: 'Русский',
  },
  {
    code: 'pt',
    text: 'Português',
  },
  {
    code: 'es',
    text: 'Español',
  },
  {
    code: 'fr',
    text: 'Français',
  },
  {
    code: 'de',
    text: 'Deutsch',
  },
  {
    code: 'ja',
    text: '日本語',
  },
];

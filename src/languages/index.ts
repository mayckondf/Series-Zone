import 'intl-pluralrules';
import { INITIAL_LANGUAGE } from '@src/utils/constants';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enUS from './locales/en-US.json';
import ptBR from './locales/pt-BR.json';

i18n.use(initReactI18next).init({
  fallbackLng: [INITIAL_LANGUAGE],
  fallbackNS: ['translation', 'error'],
  lng: INITIAL_LANGUAGE,
  debug: false,
  resources: {
    ['en-US']: enUS,
    ['pt-BR']: ptBR,
  },
});

export default i18n;

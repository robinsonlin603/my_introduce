import { createI18n } from 'vue-i18n';
import message from './common.json';

const i18n = new createI18n({
    legacy: false,
    locale: 'en-US',
    messages: message,
    fallbackLocale: 'en-US'
});

const supportedLocales = ['zh-TW', 'en-US'];

export { i18n, supportedLocales };

// 'use client'

// import i18n from 'i18next'
// import { initReactI18next } from 'react-i18next'
// import LanguageDetector from 'i18next-browser-languagedetector'

// const locales = ['en', 'ko']

// const init = async () => {
//     if(!i18n.isInitialized) {
//         await i18n
//             .use(LanguageDetector)
//             .use(initReactI18next)
//             .init({
//                 fallbackLng: 'en',
//                 supportedLngs: locales,
//                 ns: ['common'],
//                 defaultNS: 'common',
//                 debug: false,
//                 interpolation: {
//                     escapeValue: false
//                 },
//                 backend: {
//                     loadPath: '/locales/{{lng}}/{{ns}}.json'
//                 }
//             })
//     }
// }

// init()

// export default i18n
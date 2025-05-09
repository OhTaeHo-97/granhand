export function getCurrentLocaleFromParams(paramsLocale?: string) {
    return paramsLocale === 'en' ? '/en' : ''
}
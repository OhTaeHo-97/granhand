import { InitOptions } from 'i18next';

export const fallbackLng = 'ko'
export const locales = [fallbackLng, 'en'] as const
export type LocaleTypes = (typeof locales)[number];
export const defaultNS = 'common'

export function getOptions(lang = fallbackLng, ns: string | string[] = defaultNS): InitOptions {
    return {
        supportedLngs: locales, // 지원하는 언어 목록 설정
        fallbackLng, // 기본 언어(대체 언어) 설정 - 지정된 언어 없으면 이 언어 따름
        lng: lang, // 현재 사용할 언어
        fallbackNS: defaultNS, // 기본 네임스페이스 설정
        defaultNS, // 네임스페이스 기본값 설정
        //  네임스페이스 - 다국어 번역 파일을 구분할 때 사용
        //  기본 네임스페이스로 common을 설정
        ns, // 사용할 네임 스페이스
    }
}
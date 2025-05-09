import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { getOptions, LocaleTypes } from '../settings'

const initI18next = async (lang: LocaleTypes, ns: string | string[]) => {
    const i18nInstance = createInstance()

    const namespaces = Array.isArray(ns) ? ns : [ns]

    const loadNamespaceData = async (
        language: string,
        namespace: string
    ): Promise<object> => {
        return import(`@/localization/locales/${language}/${namespace}.json`)
    }

    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                async (language: string, namespace: string) => {
                    if(namespaces.includes(namespace)) {
                        return await loadNamespaceData(language, namespace)
                    }
                    throw new Error(`Namesapce ${namespace} not found`)
                    // import(`@/localization/locales/${language}/${namespace}.json`)
                }
            )
        )
        .init(getOptions(lang, namespaces));

    return i18nInstance
}

export async function translation(language: LocaleTypes, ns: string | string[]) {
    const i18nextInstance = await initI18next(language, ns)
    return {
        t: i18nextInstance.getFixedT(language, ns),
        i18n: i18nextInstance, // 초기화된 인스턴스
    }
}
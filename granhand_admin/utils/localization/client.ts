'use client'

import { initReactI18next, useTranslation as useTransAlias } from 'react-i18next'
import { getOptions, locales, type LocaleTypes } from './settings'
import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import resourcesToBackend from 'i18next-resources-to-backend'
import { useEffect } from 'react'

// 실행환경이 서버측일 때만 참이 된다
const runsOnServerSide = typeof window === 'undefined'

i18next
    .use(initReactI18next) // React와 i18next 연결
    .use(LanguageDetector) // 언어 자동 감지 기능 활성화
    .use(
        resourcesToBackend((language: LocaleTypes, namespace: string) => {
            return import(`@/localization/locales/${language}/${namespace}.json`)
        })
    ) // 백엔드에서 언어 리소스 동적으로 불러오기
    .init({
        ...getOptions(),
        lng: undefined, // 클라이언트에서 언어를 감지하도록 설정
        detection: { order: ['path'] }, // 언어 감지 순서 설정
        preload: runsOnServerSide ? locales : [], // 서버에서 미리 로드할 언어 설정
    })

export function useTranslation(lng: LocaleTypes, ns: string | string[]) {
    const namespaceArray = Array.isArray(ns) ? ns : [ns]
    const translator = useTransAlias(namespaceArray)
    const { i18n } = translator

    if(runsOnServerSide && lng) {
        // 서버사이드에서 언어가 주어지면 즉시 주어진 언어에 따라 i18next의 언어셋을 변경
        i18n.changeLanguage(lng)
    } else {
        // 서버 환경이 아니면 클라이언트에서 useEffect hook을 사용해 언어가 변경될 때마다 i18next 언어셋도 변경
        // i18n.resolvedLanguage => 이미 언어가 변경되었는지 확인함
        useEffect(() => {
            if(!lng || i18n.resolvedLanguage === lng) return
            i18n.changeLanguage(lng)
        }, [lng, i18n])
    }

    return translator
}
'use client'

import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useState } from "react"
import { useTranslation } from "../../../../../../utils/localization/client"
import { Button } from "@/components/ui/button"
import CreateJournalHeader from "../register/components/header"
import JournalContents from "../register/components/journal-contents"
import { useRouter } from "next/navigation"

export interface JournalImageType {
    name: string
    url: string
}

export interface JournalContent {
    titleKo: string
    titleEn: string
    // images: string[]
    images: (File | JournalImageType)[]
    tags: string[]
    isScheduled: string
    scheduleDate: Date | undefined
    scheduleHour: number
    scheduleMinute: number
    language: 'ko' | 'en'
    contents: string
}

export default function JournalInfo({ category }: { category: string }) {
    const router = useRouter()
    const currentLocale = useCurrentLocale()
    // const [selected, setSelected] = useState<string[]>([])
    // const [images, setImages] = useState<File[]>([])
    // const [type, setType] = useState('immediate')
    // const [date, setDate] = useState<Date | undefined>(new Date())
    // const [hour, setHour] = useState(new Date().getHours())
    // const [minute, setMinute] = useState(new Date().getMinutes())
    // const [language, setLanguage] = useState('korean')
    // const [contents, setContents] = useState('')
    const [journalContents, setJournalContents] = useState<JournalContent>(category === 'edit' ? {
        titleKo: '19 February 2024: ‘GRANHAND’ Brand Book Published',
        titleEn: '19 February 2024: ‘GRANHAND’ Brand Book Published',
        images: [
            { name: 'ㅁㄴㅇㅁㄴㅇ.jpg', url: '' }
        ],
        tags: [
            'Team', 'News'
        ],
        isScheduled: 'immediate',
        scheduleDate: new Date(),
        scheduleHour: new Date().getHours(),
        scheduleMinute: new Date().getMinutes(),
        language: 'ko',
        contents: 'contents'
    } : {
        titleKo: '',
        titleEn: '',
        images: [],
        tags: [],
        isScheduled: 'immediate',
        scheduleDate: new Date(),
        scheduleHour: new Date().getHours(),
        scheduleMinute: new Date().getMinutes(),
        language: 'ko',
        contents: ''
    })

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'journal'])

    const handleRegister = () => {
        const confirmed = window.confirm('작성한 글을 게시하겠습니까?')
        
        if(confirmed) {
            console.log('게시')
        } else {
            console.log('게시 취소')
        }
    }

    const handleJournalContentChange = <K extends keyof JournalContent>(
        field: K,
        value: JournalContent[K] extends (infer U)[] ? U : JournalContent[K],
        action?: 'add' | 'remove',
        index?: number
    ) => {
        setJournalContents(prev => {
            if (action && (field === 'images' || field === 'tags')) {
                const currentArray = prev[field];
    
                if (action === 'add') {
                    if (field === 'images') {
                        return {
                            ...prev,
                            [field]: [...(currentArray as (File | JournalImageType)[]), value as (File | JournalImageType)]
                        };
                    } else if (field === 'tags') {
                        return {
                            ...prev,
                            [field]: [...(currentArray as string[]), value as string]
                        };
                    }
                } else if (action === 'remove' && typeof index === 'number') {
                    if (field === 'images') {
                        return {
                            ...prev,
                            [field]: (currentArray as (File | JournalImageType)[]).filter((_, i) => i !== index)
                        };
                    } else if (field === 'tags') {
                        return {
                            ...prev,
                            [field]: (currentArray as string[]).filter((_, i) => i !== index)
                        };
                    }
                }
            }

            return {
                ...prev,
                [field]: value as JournalContent[K]
            }
        })
    }

    return (
        <main className="flex-1 border">
            <div className="flex justify-between p-12">
                <div className="text-[#5E5955] text-sm space-y-4">
                    <h1 className="text-2xl font-bold">{t('journal:journal_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button className="bg-white text-black border w-25" onClick={() => router.push(`${currentLocale}/journal`)}>
                        {t('journal:cancel')}
                    </Button>
                    <Button className="bg-[#322A24] text-white w-25" onClick={handleRegister}>
                        {t('journal:publish')}
                    </Button>
                </div>
            </div>

            <div className="mt-7 p-12">
                {category === 'edit' && (
                    <h2 className="font-bold text-xl text-[#5E5955] mb-10">{t('journal:edit_journal')}</h2>
                )}
                <CreateJournalHeader data={journalContents} onChange={handleJournalContentChange} t={t} />
                <JournalContents data={journalContents} onChange={handleJournalContentChange} t={t} />
            </div>
        </main>
    )
}
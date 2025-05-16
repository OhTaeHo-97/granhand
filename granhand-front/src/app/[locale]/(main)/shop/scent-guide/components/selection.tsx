'use client'

import { useState } from 'react'
import { Check, MoreVertical } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useLocaleAsLocaleTypes, useCurrentLocale } from '@/lib/useCurrentLocale'
import { useTranslation } from '../../../../../../../utils/localization/client'

export default function Guide() {
    const [answers, setAnswers] = useState<{ [key: number]: string }>({})
    const router = useRouter()

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'shop')
    const currentLocale = useCurrentLocale()

    // label, value 구조의 옵션
    const options: Record<number, {label: string, value: string}[]> = {
        1: [
            {label: t('for_gift'), value: 'for_gift'},
            {label: t('for_me'), value: 'for_me'}
        ],
        2: [
            {label: t('ss'), value: 'ss'},
            {label: t('fw'), value: 'fw'},
            {label: t('no_season'), value: 'no_season'}
        ],
        3: [
            {label: t('floral'), value: 'floral'},
            {label: t('fruity'), value: 'fruity'},
            {label: t('citrus'), value: 'citrus'},
            {label: t('woody'), value: 'woody'},
            {label: t('green'), value: 'green'},
            {label: t('watery'), value: 'watery'},
            {label: t('smoky'), value: 'smoky'},
            {label: t('musk'), value: 'musk'},
            {label: t('vanilla'), value: 'vanilla'}
        ],
        4: [
            {label: t('fresh'), value: 'fresh'},
            {label: t('delicate'), value: 'delicate'},
            {label: t('cozy'), value: 'cozy'},
            {label: t('tropical'), value: 'tropical'},
            {label: t('floral_vibe'), value: 'floral_vibe'},
            {label: t('tea'), value: 'tea'},
            {label: t('mature'), value: 'mature'},
            {label: t('sweet'), value: 'sweet'},
            {label: t('subtle'), value: 'subtle'},
            {label: t('refined'), value: 'refined'},
            {label: t('elegant'), value: 'elegant'}
        ]
    }

    const questions = [
        {
            id: 1,
            text: t('question1'),
        },
        {
            id: 2,
            text: t('question2'),
        },
        {
            id: 3,
            text: t('question3'),
        },
        {
            id: 4,
            text: t('question4'),
        },
    ]

    // optionRules: {질문번호: {이전질문번호: {이전답변value: (옵션필터)}}}
    const optionRules: Record<
        number,
        Record<number, Record<string, (opts: {label: string, value: string}[]) => {label: string, value: string}[]>>
    > = {
        3: {
            2: {
                ss: (opts) => opts.filter(opt => opt.value !== 'smoky'),
                fw: (opts) => opts.filter(opt => opt.value !== 'fruity'),
            }
        }
    }

    function getDynamicOptions(qId: number, answers: { [key: number]: string }) {
        let opts = options[qId] ? [...options[qId]] : []
        const rules = optionRules[qId]
        if (rules) {
            Object.entries(rules).forEach(([prevQId, conds]) => {
                const prevAnswer = answers[Number(prevQId)]
                if (prevAnswer && conds[prevAnswer]) {
                    opts = conds[prevAnswer](opts)
                }
            })
        }
        return opts
    }

    const handleSelect = (qId: number, option: string) => {
        setAnswers((prev) => {
            const newAnswers: { [key: number]: string } = { ...prev, [qId]: option }
            const qIndex = questions.findIndex((q) => q.id === qId)
            for (let i = qIndex + 1; i < questions.length; i++) {
                delete newAnswers[questions[i].id]
            }
            return newAnswers
        })
    }

    const allAnswered = questions.every((q) => answers[q.id])

    return (
        <div className="mx-auto py-12">
            <h2 className="text-2xl font-semibold mb-4">GUIDE</h2>
            <div className="bg-gray-50 text-center text-gray-600 py-4 mb-10 text-sm">
                {t('guide_title')}
            </div>

            <div className="relative pl-8">
                {questions.map((q, i) => {
                    const isAnswered = !!answers[q.id]
                    const canShowOptions = i === 0 || answers[questions[i - 1].id]
                    const dynamicOptions = getDynamicOptions(q.id, answers)

                    return (
                        <div key={q.id} className="relative flex min-h-[130px] mb-8">
                            {/* 왼쪽 체크와 점선 영역 */}
                            <div className="flex flex-col items-center mr-4">
                                <Check className={`w-4 h-4 ${isAnswered ? 'text-gray-600' : 'text-gray-300'}`} />
                                {i < questions.length - 1 && (
                                    <div className="flex-1 flex flex-col justify-center">
                                        <MoreVertical className={`w-4 h-4 ${isAnswered ? 'text-gray-600' : 'text-gray-300'}`} />
                                    </div>
                                )}
                            </div>

                            {/* 질문과 옵션 영역 */}
                            <div className="flex-1 flex flex-col justify-between ml-10">
                                <div>
                                    <p className="font-semibold text-sm mb-4">
                                        {q.id}. {q.text}
                                    </p>

                                    {canShowOptions && (
                                        <div className="flex flex-wrap gap-4 text-sm mb-4">
                                            {dynamicOptions.map((opt) => (
                                                <Button
                                                    key={opt.value}
                                                    onClick={() => handleSelect(q.id, opt.value)}
                                                    className={`px-4 py-2 rounded text-gray-600 transition ${
                                                        answers[q.id] === opt.value
                                                            ? 'border-black font-medium bg-black text-white hover:bg-gray-700'
                                                            : 'border-gray-500 hover:bg-gray-100'
                                                    }`}
                                                >
                                                    {opt.label}
                                                </Button>
                                            ))}
                                        </div>
                                    )}
                                    <div className="border-b border-gray-200" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* 결과 확인 버튼 */}
            <div className="mt-12 text-right">
                <Button
                    className={`px-6 py-3 text-white rounded disabled:opacity-50 min-w-1/3 ${allAnswered ? 'bg-black' : 'bg-gray-200'}`}
                    disabled={questions.some((q) => !answers[q.id])}
                    onClick={() => router.push(`${currentLocale}/shop/scent-guide/result`)}
                >
                    {t('show_result')}
                </Button>
            </div>
        </div>
    )
}
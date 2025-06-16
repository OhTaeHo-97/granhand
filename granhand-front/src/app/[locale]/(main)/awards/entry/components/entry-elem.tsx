'use client'

import { Button } from "@/components/ui/button";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import Image from "next/image";
import { useTranslation } from "../../../../../../../utils/localization/client";
import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

interface AwardEntry {
    id: number
    title: string
    date: string
    image: string
}

const awards: AwardEntry[] = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "GRANHAND, Film Photography Award\n2025 그랑핸드 필름사진상",
    date: "접수 2025.07.17(목)~20(일) | 발표 2025.01.28(화)",
    image: "/awards-participate.png" // 임시 이미지
}));

export default function EntryElements() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'awards')
    const currentLocale = useCurrentLocale()
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('q') || ''

    const [keyword, setKeyword] = useState('')
    const [results, setResults] = useState<AwardEntry[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [totalPage] = useState(0)

    const handleInputChange: FormEventHandler<HTMLInputElement> = (e) => {
        setKeyword((e.target as HTMLInputElement).value)
    }

    const handleFormSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const params = new URLSearchParams(searchParams)
        if(keyword) {
            params.set('q', keyword)
        } else {
            params.delete('q')
        }

        router.replace(`${currentLocale}/awards/entry?${params.toString()}`)
    }

    const fetchSearchedResults = async (query: string) => {
        if(!query) return []

        await new Promise((resolve) => setTimeout(resolve, 500))

        const lowerQuery = query.toLowerCase()
        return awards.filter((item) =>
            item.title.toLowerCase().includes(lowerQuery)
        )
    }

    useEffect(() => {
        const fetchResults = async () => {
            if(!searchQuery) {
                setResults(awards)
                return
            }

            try {
                const data = await fetchSearchedResults(searchQuery)
                setResults(data)
            } catch(err) {
                console.error(err)
            }
        }

        fetchResults()
    }, [searchQuery])

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {results.map((award) => (
                    <div key={award.id} className="space-y-4">
                        {/* 이미지 */}
                        <div className="bg-gray-200 flex items-center justify-center">
                            <Image
                                src={award.image}
                                alt={award.title}
                                width={357}
                                height={200}
                                className="w-[357px] h-[200px] object-cover"
                            />
                        </div>

                        {/* 제목 */}
                        <div className="space-y-1">
                            <h3 className="text-base font-medium text-[#322A24]">{award.title}</h3>
                            {/* <p className="text-sm text-gray-600">{award.subtitle}</p> */}
                        </div>

                        {/* 날짜 */}
                        <p className="text-xs font-medium text-[#C0BCB6]">{award.date}</p>

                        {/* 버튼 */}
                        <Button className="w-[163px] h-[46px] text-center border rounded-xs !border-[#C0BCB6] text-[#322A24] text-sm font-bold py-2 hover:bg-[#f5f3ef] transition min-w-fit max-w-1/3 h-12">
                        {t('entry')}
                        </Button>
                    </div>
                ))}
            </div>

            <div className='mb-20' />
                <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            <div className='mb-14' />
            <form onSubmit={handleFormSubmit}>
                <SearchInput value={keyword} onChange={handleInputChange} />
            </form>
        </>
    )
}
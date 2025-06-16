'use client'

import Pagination from "@/components/pagination"
import SearchInput from "@/components/searchInput"
import { useCurrentLocale } from "@/lib/useCurrentLocale"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { FormEventHandler, useEffect, useState } from "react"

interface WinningAward {
    id: number
    title: string
    date: string
    image: string
}

const awards = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "2025 필름사진상 당선작 발표",
    // subtitle: "2025 그랑핸드 필름사진상",
    date: "2025-01-01",
    image: "/awards-winning.png" // 임시 이미지
} as WinningAward));

export default function WinningElements() {
    const currentLocale = useCurrentLocale()
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('q') || ''

    const [keyword, setKeyword] = useState('')
    const [results, setResults] = useState<WinningAward[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [totalPage] = useState(0)

    const fetchSearchedEvents = async (query: string) => {
        if(!query) return []

        await new Promise((resolve) => setTimeout(resolve, 500))

        const lowerQuery = query.toLowerCase()
        return awards.filter((item) => 
            item.title.toLowerCase().includes(lowerQuery)
        )
    }

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

        router.push(`${currentLocale}/awards/winning?${params.toString()}`)
    }

    useEffect(() => {
        const fetchResults = async () => {
            if(!searchQuery) {
                setResults(awards)
                return
            }
            
            try {
                const data = await fetchSearchedEvents(searchQuery)
                setResults(data)
            } catch(err) {
                console.error(err)
            }
        }

        fetchResults()
    }, [searchQuery])

    return (
        <>
            {/* 카드 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {results.map((award) => (
                    <div key={award.id} className="space-y-1">
                        {/* 이미지 */}
                        <div className="flex items-center justify-center">
                            <Image
                                src={award.image}
                                alt={award.title}
                                width={357}
                                height={200}
                                // className="w-full h-full object-cover"
                                className="w-[357px] h-[200px] object-contain"
                            />
                        </div>

                        {/* 제목 */}
                        <div className="space-y-1">
                        <h3 className="text-base font-medium text-[#322A24]">{award.title}</h3>
                        {/* <p className="text-sm text-gray-600">{award.subtitle}</p> */}
                        </div>

                        {/* 날짜 */}
                        <p className="text-xs font-medium text-[#C0BCB6]">{award.date}</p>
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
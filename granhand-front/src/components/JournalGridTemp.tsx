'use client'

import Image from "next/image";
import Link from "next/link";
import { useCurrentLocale } from "@/lib/useCurrentLocale";
import Pagination from "./pagination";
import SearchInput from "./searchInput";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

interface Journal {
    id: number
    title: string
    date: string
    views: string
    category: string
    image: string
}

const posts = [
    {
        id: 1,
        title: "NOLL 눈에 대한 모든 것.",
        date: "2023-07-08",
        views: "조회수 412",
        category: "#Team",
        image: "/lovable-uploads/42187a99-0c6a-4176-bc95-5fcd322f7c2e.png"
    },
    {
        id: 2,
        title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
        date: "2023-07-07",
        views: "조회수 325",
        category: "#Team",
        image: "/lovable-uploads/a5617fce-275d-4023-8959-6717e811b2a6.png"
    },
    {
        id: 3,
        title: "초대합니다! 새로이",
        date: "2023-07-06",
        views: "조회수 287",
        category: "#Essay",
        image: "/lovable-uploads/f60c43bc-b922-4e70-ad35-6d56fb469d65.png"
    },
    {
        id: 4,
        title: "NOLL 눈에 대한 모든 것.",
        date: "2023-07-08",
        views: "조회수 412", 
        category: "#Essay",
        image: "/lovable-uploads/23c3c768-b79c-41e6-9809-c48b755baf4c.png"
    },
    {
        id: 5,
        title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
        date: "2023-07-07", 
        views: "조회수 325",
        category: "#Team", 
        image: "/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
    },
    {
        id: 6,
        title: "초대합니다! 새로이",
        date: "2023-07-06",
        views: "조회수 287",
        category: "#Culture",
        image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
    }
];

export default function JournalGridTemp({ isMain=false }: { isMain?: boolean }) {
    const currentLocale = useCurrentLocale()
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('q') || ''
    const category = searchParams.get('category') || 'All'
    
    const [keyword, setKeyword] = useState('')
    const [results, setResults] = useState<Journal[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [totalPage] = useState(15)

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

        router.replace(`${currentLocale}/journal?${params.toString()}`)
    }

    const fetchJournalsBySearch = async (query: string): Promise<Journal[]> => {
        if(!query) {
            return posts
        }

        await new Promise((resolve) => setTimeout(resolve, 500))

        const lowerQuery = query.toLowerCase()
        return posts.filter((item) => item.title.toLowerCase().includes(lowerQuery))
    }

    useEffect(() => {
        const fetchAndSetJournals = async () => {
            try {
                const data = await fetchJournalsBySearch(searchQuery)
                setResults(data)
            } catch(err) {
                console.error(err)
                setResults([])
            }
        }

        fetchAndSetJournals()
    }, [searchQuery])

    const displayedJournals = results.filter((item) => {
        if(category === 'All') return true
        if(item.category.includes(category)) return true
        return false
    })

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                {displayedJournals.map((post) => (
                    <Link
                        key={post.id}
                        href={`${currentLocale}/journal/${post.id}`}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[3/4] overflow-hidden relative rounded-lg"> {/* Added relative, rounded-lg */}
                            <Image
                                src={post.image}
                                alt={post.title}
                                // Adjusted width/height for potentially better aspect ratio handling
                                width={400} // Use larger base size
                                height={800} // Maintain 4/3 aspect ratio
                                className="!w-[357px] !h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Optional: Gradient Overlay for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                            {/* Text Overlay Content */}
                            <div className="absolute bottom-2 left-0 p-4 pb-6 text-[#FDFBF5]"> {/* Position at bottom left with padding */}
                                {/* Category */}
                                <p className="text-xs font-bold mb-1">{post.category}</p>
                                {/* Title */}
                                <h3 className="text-base font-bold mb-1 leading-tight"> {/* Increased text size, bold, reduced bottom margin */}
                                    {post.title}
                                </h3>
                                {/* Date and Views */}
                                <p className="text-xs font-medium text-[#E9E6E0]"> {/* Smaller text, lighter color */}
                                    {post.date} 조회 {post.views}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
            {!isMain && (
                <>
                    <div className='mb-20' />
                    <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    <div className='mb-14' />
                    <form onSubmit={handleFormSubmit}>
                        <SearchInput value={keyword} onChange={handleInputChange} />
                    </form>
                </>
            )}
        </>
    )
}
'use client'

import Image from "next/image";
import Link from "next/link";
import Pagination from "./pagination";
import SearchInput from "./searchInput";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";
import { useCurrentLocale } from "@/lib/useCurrentLocale";

interface Event {
    id: number
    title: string
    date: string
    image: string
}

const posts: Event[] = [
    {
        id: 1,
        title: "NOLL 눈에 대한 모든 것.",
        date: "2023-07-08",
        // views: "조회수 412",
        // category: "#Team",
        image: "/lovable-uploads/42187a99-0c6a-4176-bc95-5fcd322f7c2e.png"
    },
    {
        id: 2,
        title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
        date: "2023-07-07",
        // views: "조회수 325",
        // category: "#Event",
        image: "/lovable-uploads/a5617fce-275d-4023-8959-6717e811b2a6.png"
    },
    {
        id: 3,
        title: "초대합니다! 새로이",
        date: "2023-07-06",
        // views: "조회수 287",
        // category: "#Store",
        image: "/lovable-uploads/f60c43bc-b922-4e70-ad35-6d56fb469d65.png"
    },
    {
        id: 4,
        title: "NOLL 눈에 대한 모든 것.",
        date: "2023-07-08",
        // views: "조회수 412", 
        // category: "#Team",
        image: "/lovable-uploads/23c3c768-b79c-41e6-9809-c48b755baf4c.png"
    },
    {
        id: 5,
        title: "오늘의 공지사항 몇 그루트리가 있고 워크숍 운영정책",
        date: "2023-07-07", 
        // views: "조회수 325",
        // category: "#Event", 
        image: "/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
    },
    {
        id: 6,
        title: "초대합니다! 새로이",
        date: "2023-07-06",
        // views: "조회수 287",
        // category: "#Store",
        image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
    }
]

export default function EventGrid() {
    const currentLocale = useCurrentLocale()
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('q') || ''
    
    const [keyword, setKeyword] = useState('')
    const [results, setResults] = useState<Event[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [totalPage] = useState(0)

    const fetchSearchedResults = async (query: string) => {
        if(!query) return []

        await new Promise((resolve) => setTimeout(resolve, 500))

        const lowerQuery = query.toLowerCase()
        return posts.filter((item) =>
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

        router.replace(`${currentLocale}/event?${params.toString()}`)
    }

    useEffect(() => {
        const fetchResults = async () => {
            if(!searchQuery) {
                setResults(posts)
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                {results.map((post) => (
                    <Link
                        key={post.id}
                        href={`/event/${post.id}`}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[4/3] overflow-hidden mb-4">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={357}
                                height={200}
                                className="w-[357px] h-[200px] object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base text-black font-medium group-hover:text-granhand-text transition-colors">
                                {post.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-xs text-[#C0BCB6] font-medium">
                                {/* <span>{post.category}</span> */}
                                {/* <span>·</span> */}
                                <span>{post.date}</span>
                                {/* <span>·</span> */}
                                {/* <span>{post.views}</span> */}
                            </div>
                        </div>
                    </Link>
                ))}
                {/* {posts.map((post) => (
                <Link
                    key={post.id}
                    href={`/event/${post.id}`}
                    className="group cursor-pointer"
                >
                    <div className="aspect-[4/3] overflow-hidden mb-4">
                        <Image
                            src={post.image}
                            alt={post.title}
                            width={225}
                            height={168.75}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-base font-medium group-hover:text-granhand-text transition-colors">
                            {post.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>{post.date}</span>
                        </div>
                    </div>
                </Link>
                ))} */}
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
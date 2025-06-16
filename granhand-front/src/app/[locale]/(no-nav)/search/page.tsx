'use client'

import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEventHandler, useEffect, useState } from "react";

interface SearchResult {
    type: 'product' | 'journal'
    id: string | number
    title: string
    subtitle?: string
    date?: string
    views?: number
    image: string
    price?: number
    category?: string
}

const allResults: SearchResult[] = [
    { type: 'product', id: 1, category: 'GRANHAND > Diffuser', title: 'Kyujang Diffuser Set', price: 60000, image: '/awards-winning.png' },
    { type: 'product', id: 2, category: 'GRANHAND > Diffuser', title: 'Other Diffuser Set', price: 50000, image: '/awards-winning.png' },
    { type: 'journal', id: 3, title: 'NOLL에 대한 모든 것.', date: '2023-07-08', views: 782, image: '/awards-participate.png' },
    { type: 'journal', id: 4, title: '여름의 끝에서 팀 그랑핸드가 꼽은 최고의 공포영...', date: '2023-06-14', views: 1354, image: '/awards-participate.png' },
]

type CategoryFilter = 'all' | 'shopping' | 'content'

export default function SearchPage() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get('q') || ''
    const selectedCategory: CategoryFilter = (searchParams.get('cat') as CategoryFilter) || 'all'

    const [keyword, setKeyword] = useState(searchQuery || '')
    const [results, setResults] = useState<SearchResult[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(3)
    const [totalPage] = useState(0)

    const fetchSearchResults = async (query: string) => {
        if(!query) return []

        await new Promise((resolve) => setTimeout(resolve, 500))

        const lowerQuery = query.toLowerCase()
        return allResults.filter((item) => 
            item.title.toLowerCase().includes(lowerQuery) ||
            (item.category && item.category.toLowerCase().includes(lowerQuery)) ||
            (item.subtitle && item.subtitle.toLowerCase().includes(lowerQuery))
        )
    }

    const filteredResults = results.filter(item => {
        if (selectedCategory === 'all') return true
        if (selectedCategory === 'shopping' && item.type === 'product') return true
        if (selectedCategory === 'content' && item.type === 'journal') return true
        return false
    })

    const handleInputChange: FormEventHandler<HTMLInputElement
    > = (e) => {
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

        if(selectedCategory !== 'all') {
            params.set('cat', selectedCategory)
        } else {
            params.delete('cat')
        }

        router.replace(`/search?${params.toString()}`)
    }

    const handleCategoryClick = (category: CategoryFilter) => {
        const params = new URLSearchParams(searchParams)
        if(searchQuery) {
            params.set('q', searchQuery)
        } else {
            params.delete('q')
        }

        if(category !== 'all') {
            params.set('cat', category)
        } else {
            params.delete('cat')
        }

        router.replace(`/search?${params.toString()}`)
    }

    const renderResultItem = (item: SearchResult) => (
        <div key={item.id} className="w-[342px] h-[80px] flex items-center my-4">
            <div className="flex-shrink-0 relative bg-gray-100">
                <Image
                    src={item.image}
                    alt={item.title}
                    // layout="fill"
                    width={80}
                    height={80}
                    className="w-[80px] h-[80px]"
                    // objectFit="contain"
                />
            </div>
            <div className="ml-4 flex-grow">
                {item.type === 'product' ? (
                    <>
                        <p className="text-[10px] font-medium text-[#C0BCB6]">{item.category}</p>
                        <h3 className="text-xs font-bold text-[#322A24] mt-1">{item.title}</h3>
                        <p className="text-xs text-[#322A24] mt-1">{item.price?.toLocaleString()} KRW</p>
                    </>
                ) : (
                    <>
                        <p className="text-[10px] font-medium text-[#C0BCB6]">JOURNAL</p>
                        <h3 className="text-xs font-bold text-[#322A24] mt-1">{item.title}</h3>
                        <p className="text-xs text-[#322A24] mt-1">{item.date} 조회 {item.views}</p>
                    </>
                )}
            </div>
        </div>
    )

    useEffect(() => {
        const fetchResults = async () => {
            if(!searchQuery) {
                setResults([])
                return
            }
            setIsLoading(true)
            setError(null)

            try {
                const data = await fetchSearchResults(searchQuery)
                setResults(data)
            } catch (err) {
                setError('Failed to fetch search results')
                console.error(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchResults()
    }, [searchQuery])

    return (
        <div className="min-h-screen flex justify-center px-4 pt-32">
            <div className="w-[740px] max-w-4xl container mx-auto px-6 min-w-52">
                <form onSubmit={handleFormSubmit}>
                    <SearchInput value={keyword} onChange={handleInputChange} className="!max-w-full" />
                </form>

                {/* 검색 결과 영역 */}
                <div className="mt-8 w-full mx-auto px-4"> {/* Add margin top */}
                    {searchQuery && filteredResults.length !== 0 && ( // Only show filters if there's a search query
                        <>
                            <div className="flex items-center text-sm font-bold mb-4">
                                <Button
                                    onClick={() => handleCategoryClick('all')}
                                    className={`px-2 pb-2 font-bold ${selectedCategory === 'all' ? 'text-[#6F6963]' : 'text-[#C0BCB6]'} hover:text-[#6F6963] transition-colors`}
                                >
                                    통합검색
                                </Button>
                                <span className="mx-2 text-[#C0BCB6] select-none">|</span>
                                <Button
                                    onClick={() => handleCategoryClick('shopping')}
                                    className={`px-2 pb-2 font-bold ${selectedCategory === 'shopping' ? 'text-[#6F6963]' : 'text-[#C0BCB6]'} hover:text-[#6F6963] transition-colors`}
                                >
                                    쇼핑
                                </Button>
                                <span className="mx-2 text-[#C0BCB6] select-none">|</span>
                                <Button
                                    onClick={() => handleCategoryClick('content')}
                                    className={`px-2 pb-2 font-bold ${selectedCategory === 'content' ? 'text-[#6F6963]' : 'text-[#C0BCB6]'} hover:text-[#6F6963] transition-colors`}
                                >
                                    콘텐츠
                                </Button>
                            </div>
                        </>
                    )}

                    {!isLoading && !error && searchQuery && filteredResults.length !== 0 && (
                        <div className="text-[10px] text-[#C0BCB6] font-bold mb-4">
                            상품 수 {results.filter(item => item.type === 'product').length}개
                            {results.filter(item => item.type === 'journal').length > 0 && ` | 콘텐츠 ${results.filter(item => item.type === 'journal').length}개`}
                             {/* Note: Displaying total counts, not filtered counts here based on the image */}
                        </div>
                    )}

                    {isLoading && <div>Searching...</div>}
                    {error && <div>{error}</div>}

                    {/* {!isLoading && !error && !searchQuery && (
                        <div className="text-center text-gray-500 mt-8">검색어를 입력해 주세요.</div>
                    )} */}
                    {!isLoading && !error && searchQuery && filteredResults.length === 0 && (
                        <div className="flex text-center items-center justify-center text-[#C0BCB6] text-xs mt-8 w-full h-[136px] bg-[#322A2408]">검색 결과가 없어요.<br/>다른 키워드로 검색해 보세요.</div>
                    )}

                    {!isLoading && !error && searchQuery && filteredResults.length > 0 && (
                        <div>
                            {filteredResults.map(renderResultItem)}
                            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}
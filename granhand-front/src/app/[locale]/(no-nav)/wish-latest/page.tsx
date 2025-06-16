'use client'

import Pagination from "@/components/pagination";
import ProductCardList from "./components/product-card-list";
import { ChevronLeft } from "lucide-react";
import { notFound, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

// const post = {
//     id: 1,
//     title: 'Roland Multi Perfume',
//     option: '롤랑 멀티퍼퓸 100ml / 200ml',
//     price: '35,000',
//     image: "/lovable-uploads/373d6254-162e-4da2-a5ef-e87c36cd99d7.png"
// }

export default function WishLatestListPage() {
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [totalPage] = useState(0)
    const router = useRouter()
    const searchParams = useSearchParams()
    const menu = searchParams.get('menu')
    if(!menu || (menu !== 'wish' && menu !== 'latest')) notFound()

    return (
        <main className="container mx-auto px-6 pt-8">
            <div className="flex justify-between items-center mb-8">
                <div className="flex items-center">
                    <h2 className="text-lg font-medium text-[#6F6963]">
                        {menu === 'wish' ? '관심 상품' : '최근 본 상품'}
                    </h2>
                </div>
                <div
                    className="flex items-center text-xs text-[#6F6963] cursor-pointer"
                    onClick={() => {router.back()}}
                >
                    <ChevronLeft className="text-[#6F6963] mr-3" size={24} />
                    <span className="text-sm font-medium">이전단계</span>
                </div>
            </div>
            {/* <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none mb-10">관심 상품</h2> */}

            <ProductCardList itemCount={15} />
            {/* <ProductCardList itemCount={0} menu={menu} /> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-x-8 gap-y-12">
                {Array.from({ length: 15 }).map((_, index) => (
                    <Link
                        key={index}
                        href={{
                            pathname: `/shop/${index}`,
                        }}
                        className="group cursor-pointer"
                    >
                        <div className="aspect-[4/3] overflow-hidden mb-4">
                            <Image
                                src={post.image}
                                alt={post.title}
                                width={205}
                                height={200}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-base font-medium group-hover:text-granhand-text transition-colors">
                                {post.title}
                            </h3>
                            <div className="flex items-center space-x-2 text-xs text-gray-500">
                                <span>{post.option}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs">
                                <span>{post.price} KRW</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div> */}

            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </main>
    )
}
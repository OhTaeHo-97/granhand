import { useState } from "react"

export default function Pagination({ totalPages }: { totalPages: number }) {
    const [currentPage, setCurrentPage] = useState(1)

    const pagesPerGroup = 10

    const currentGroup = Math.floor((currentPage - 1) / pagesPerGroup)

    const startPage = currentGroup * pagesPerGroup + 1
    const endPage = Math.min(startPage + pagesPerGroup - 1, totalPages)

    const pages = Array.from({ length: endPage - startPage + 1 },  (_, idx) => startPage + idx)

    const goToFirstPage = () => setCurrentPage(1)
    const goToPrevGroup = () => setCurrentPage(Math.max(1, startPage - 1))
    const goToNextGroup = () => setCurrentPage(Math.min(totalPages, endPage + 1))
    const goToLastPage = () => setCurrentPage(totalPages)

    return (
        <div className="flex justify-center items-center gap-2 py-8 flex-wrap">
            {/* 처음으로 ≪ */}
            <button
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%]"
            >
                ≪
            </button>

            {/* 이전 ＜ */}
            <button
                onClick={goToPrevGroup}
                disabled={currentPage === 1}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%]"
            >
                ＜
            </button>

            {/* 페이지 숫자 */}
            {pages.map((page) => (
                <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-sm ${
                    currentPage === page ? 'text-black font-semibold' : 'text-gray-400'
                } hover:text-black transition-colors min-w-[3%]`}
                >
                {page}
                </button>
            ))}

            {/* 다음 ＞ */}
            <button
                onClick={goToNextGroup}
                disabled={currentPage === totalPages}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%]"
            >
                ＞
            </button>

            {/* 마지막으로 ≫ */}
            <button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%]"
            >
                ≫
            </button>
        </div>
    )
}
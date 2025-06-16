'use client'

import { Button } from "./ui/button"

export default function Pagination({ totalPages, currentPage, setCurrentPage }: { totalPages: number, currentPage: number, setCurrentPage: React.Dispatch<React.SetStateAction<number>> }) {
    // const [currentPage, setCurrentPage] = useState(1)
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
            { currentPage > 1 && (
                <>
                    {/* 처음으로 ≪ */}
                    <Button
                        onClick={goToFirstPage}
                        disabled={currentPage === 1}
                        className="text-base text-[#C0BCB6] hover:text-[#6F6963] disabled:text-gray-300 min-w-[3%] px-1"
                    >
                        ≪
                    </Button>

                    {/* 이전 ＜ */}
                    <Button
                        onClick={goToPrevGroup}
                        disabled={currentPage === 1}
                        className="text-base text-[#C0BCB6] hover:text-[#6F6963] disabled:text-gray-300 min-w-[3%]"
                    >
                        ＜
                    </Button>
                </>
            )}
            {/* <Button
                onClick={goToFirstPage}
                disabled={currentPage === 1}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%] px-1"
            >
                ≪
            </Button>

            <Button
                onClick={goToPrevGroup}
                disabled={currentPage === 1}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%]"
            >
                ＜
            </Button> */}

            {/* 페이지 숫자 */}
            {pages.map((page) => (
                <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-base font-bold ${
                    currentPage === page ? 'text-[#6F6963]' : 'text-[#C0BCB6]'
                } hover:text-black transition-colors min-w-[3%]`}
                >
                {page}
                </button>
            ))}

            { totalPages > 1 && currentPage < totalPages && (
                <>
                    {/* 다음 ＞ */}
                    <Button
                        onClick={goToNextGroup}
                        disabled={currentPage === totalPages}
                        className="text-base text-[#C0BCB6] hover:text-[#6F6963] disabled:text-gray-300 min-w-[3%]"
                    >
                        ＞
                    </Button>

                    {/* 마지막으로 ≫ */}
                    <Button
                        onClick={goToLastPage}
                        disabled={currentPage === totalPages}
                        className="text-base text-[#C0BCB6] hover:text-[#6F6963] disabled:text-gray-300 min-w-[3%]"
                    >
                        ≫
                    </Button>
                </>
            )}

            {/* <Button
                onClick={goToNextGroup}
                disabled={currentPage === totalPages}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%]"
            >
                ＞
            </Button>

            <Button
                onClick={goToLastPage}
                disabled={currentPage === totalPages}
                className="text-sm text-gray-400 hover:text-black disabled:text-gray-300 min-w-[3%]"
            >
                ≫
            </Button> */}
        </div>
        // <div className="flex justify-center space-x-4 py-8">
        //     {Array.from({ length: totalPages }, (_, index) => {
        //         const page = index + 1
        //         return (
        //             <button
        //                 key={page}
        //                 onClick={() => setCurrentPage(page)}
        //                 className={`text-sm ${
        //                 currentPage === page ? 'text-black font-semibold' : 'text-gray-400'
        //                 } transition-colors`}
        //             >
        //                 {page}
        //             </button>
        //         )
        //     })}
        // </div>
    )
}
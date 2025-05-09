import { Search } from "lucide-react";

export default function SearchComponent() {
    return (
        <div className="min-h-screen flex justify-center bg-white px-4 pt-32">
            <div className="w-full max-w-3xl container mx-auto px-6">
                <div className="relative">
                {/* 검색 입력창 */}
                <input
                    type="text"
                    placeholder="검색어를 입력해 주세요."
                    className="w-full border-0 border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-400 text-sm py-2 pr-10"
                />
                {/* 돋보기 아이콘 */}
                <Search className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
            </div>
        </div>
    )
}
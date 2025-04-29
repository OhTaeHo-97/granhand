import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";
import Image from "next/image";

const awards = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "2025 필름사진상 당선작 발표",
    // subtitle: "2025 그랑핸드 필름사진상",
    date: "2025-01-01",
    image: "/placeholder.png" // 임시 이미지
}));

export default function WinnerPage() {
    return (
        <>
            {/* 카드 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                {awards.map((award) => (
                <div key={award.id} className="space-y-4">
                    {/* 이미지 */}
                    <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                    <Image
                        src={award.image}
                        alt={award.title}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                    </div>

                    {/* 제목 */}
                    <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-gray-800">{award.title}</h3>
                    {/* <p className="text-sm text-gray-600">{award.subtitle}</p> */}
                    </div>

                    {/* 날짜 */}
                    <p className="text-xs text-gray-400">{award.date}</p>
                </div>
                ))}
            </div>
            <div className='mb-20' />
            <Pagination totalPages={15} />
            <div className='mb-14' />
            <SearchInput />
        </>
    )
}
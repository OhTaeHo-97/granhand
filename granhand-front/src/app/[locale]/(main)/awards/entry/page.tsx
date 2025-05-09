import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";
// import Image from "next/image";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
// import { Button } from "@/components/ui/button";
import EntryElement from "./components/entry-elem";

const awards = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: "GRANHAND, Film Photography Award\n2025 그랑핸드 필름사진상",
    date: "접수 2025.07.17(목)~20(일) | 발표 2025.01.28(화)",
    image: "/placeholder.png" // 임시 이미지
}));

export default async function EventRegistrationPage({ params: { locale } }: { params:{ locale: LocaleTypes } }) {
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <>
            {/* 카드 리스트 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                {awards.map((award) => (
                    <EntryElement id={award.id} image={award.image} title={award.title} date={award.date} />
                // <div key={award.id} className="space-y-4">
                //     {/* 이미지 */}
                //     <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                //     <Image
                //         src={award.image}
                //         alt={award.title}
                //         width={400}
                //         height={300}
                //         className="w-full h-full object-cover"
                //     />
                //     </div>

                //     {/* 제목 */}
                //     <div className="space-y-1">
                //     <h3 className="text-sm font-semibold text-gray-800">{award.title}</h3>
                //     {/* <p className="text-sm text-gray-600">{award.subtitle}</p> */}
                //     </div>

                //     {/* 날짜 */}
                //     <p className="text-xs text-gray-400">{award.date}</p>

                //     {/* 버튼 */}
                //     <Button className="w-full text-center border border-black text-xs py-2 hover:bg-gray-100 transition max-w-1/3 h-12">
                //     참가 접수
                //     </Button>
                // </div>
                ))}
            </div>
            <div className='mb-20' />
            <Pagination totalPages={15} />
            <div className='mb-14' />
            <SearchInput />
        </>
    )
}
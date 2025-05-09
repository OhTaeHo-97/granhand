// 'use client'

// import Navigation from "@/components/Navigation";
import BrandGrid from "@/components/BrandGrid";
import JournalGridTemp from "@/components/JournalGridTemp";
import { LocaleTypes } from "../../../../utils/localization/settings";

export default function MainPage({ params }: { params: { locale: LocaleTypes } }) {
    return (
        <main className="container mx-auto px-6 pt-8">
            <BrandGrid />

            <div className="pt-6">
                {/* 상단 타이틀 */}
                <div>
                    <div className="text-3xl font-bold text-[#48413A]">GRANHAND. Gwanghwamun</div>
                    <div className="text-lg font-semibold text-[#B3B0A8] mt-1 mb-6">7th Store Open!</div>
                </div>

                {/* 이미지 */}
                <div className="">
                    <div className="w-full bg-[#D9D9D9] rounded-lg overflow-hidden mb-6">
                    <img
                        src="/images/gwanghwamun.jpg"
                        alt="GRANHAND Gwanghwamun"
                        className="w-full object-cover"
                        style={{ aspectRatio: '16/9', minHeight: 400 }}
                    />
                    </div>
                </div>

                {/* 본문 */}
                <div className="max-w-4xl">
                    <div className="font-bold text-lg text-[#222] mb-2">
                    그랑핸드의 <span className="font-extrabold">7번째 매장 광화문점</span>을 소개합니다.
                    </div>
                    <div className="text-base text-[#48413A] mb-10">
                    도심의 오피스 중심가에서 잠깐의 여유와 즐거움을 향으로 느낄 수 있는 그랑핸드 광화문점에 방문해 보세요.
                    </div>
                </div>
            </div>

            <h2 className="text-lg font-bold text-left mb-8 border-b pb-4">JOURNAL</h2>
            <JournalGridTemp params={params} />
        </main>
    )
}
'use client'

import BrandGrid from "@/components/BrandGrid";
import JournalGridTemp from "@/components/JournalGridTemp";
import Image from "next/image";
import { useState } from "react";
import BasicModal from "../components/modal";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
// import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import StoreSection from "./components/store-section";

export default function MainPage() {
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    // const currentLocale = useCurrentLocale()
    return (
        <main className="container mx-auto px-6 pt-8">
            <BrandGrid />

            <div className="mt-20">
                {/* 상단 타이틀 */}
                <div>
                    <div className="text-2xl font-bold text-[#322A24]">GRANHAND. Gwanghwamun</div>
                    <div className="text-sm font-bold text-[#C0BCB6] mt-1 mb-6">7th Store Open!</div>
                </div>

                {/* 이미지 */}
                <div className="cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
                    <div className="w-full bg-[#D9D9D9] rounded-lg overflow-hidden mb-6">
                    <Image
                        width={1600}
                        height={1600}
                        src="/granhand-gwanghwa.png"
                        alt="GRANHAND Gwanghwamun"
                        className="w-[1120px] h-[572px] object-cover"
                        style={{ aspectRatio: '16/9', minHeight: 400 }}
                    />
                    </div>
                </div>

                {/* 본문 */}
                <div className="max-w-4xl text-sm">
                    <div className="font-bold text-[#322A24] mb-2">
                    그랑핸드의 <span className="font-extrabold">7번째 매장 광화문점</span>을 소개합니다.
                    </div>
                    <div className="text-[#322A24] mb-10">
                    도심의 오피스 중심가에서 잠깐의 여유와 즐거움을 향으로 느낄 수 있는 그랑핸드 광화문점에 방문해 보세요.
                    </div>
                </div>
            </div>

            <h2 className="text-sm font-bold text-[#6F6963] text-left mt-20 border-b pb-4">JOURNAL</h2>
            <JournalGridTemp isMain={true} />

            <StoreSection />

            <BasicModal open={open} setOpen={setOpen} contents="will_available" btnText={'confirm'} locale={locale} />
        </main>
    )
}
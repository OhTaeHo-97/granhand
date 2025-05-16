'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import Image from "next/image";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function EntryElement({ id, image, title, date }: { id: number, image: string, title: string, date: string }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'awards')

    return (
        <div key={id} className="space-y-4">
            {/* 이미지 */}
            <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
            <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
            />
            </div>

            {/* 제목 */}
            <div className="space-y-1">
            <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
            {/* <p className="text-sm text-gray-600">{award.subtitle}</p> */}
            </div>

            {/* 날짜 */}
            <p className="text-xs text-gray-400">{date}</p>

            {/* 버튼 */}
            <Button className="w-full text-center border border-black text-xs py-2 hover:bg-gray-100 transition min-w-fit max-w-1/3 h-12">
            {t('entry')}
            </Button>
        </div>
    )
}
'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useRouter } from "next/navigation";
import Pagination from "@/components/pagination";
import { useEffect, useState } from "react";

export default function CoopList() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'coop', 'event'])
    const currentLocale = useCurrentLocale()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [contents, setContents] = useState([])
    const [sortCategory, setSortCategory] = useState('latest_first')

    // const fetchCoop = () => {

    // }

    // useEffect(() => {
    //     if(status === 'authenticated') {
    //         fetchCoop()
    //     }
    // }, [currentPage, status])

    return (
        <>
            <div className="p-6 shadow-sm">
                <div>
                    <div className="mb-4 justify-between flex items-center">
                        <div className="text-[#5E5955] font-bold text-base">
                            {t('coop:all_inquires')} <span className="text-[#FF3E24]">20</span>
                            {/* {t('coop:all_inquires')} <span className="text-[#FF3E24]">{contents.length}</span> */}
                        </div>
                        <div className="flex gap-2">
                            <Select defaultValue={sortCategory} onValueChange={setSortCategory}>
                                <SelectTrigger className="w-fit">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="latest_first">{t('event:latest_first')}</SelectItem>
                                    <SelectItem value="featured_first">{t('event:featured_first')}</SelectItem>
                                    <SelectItem value="most_viewed">{t('event:most_viewed')}</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse min-w-6xl">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 text-center">No.</th>
                                <th className="p-2 text-center">{t('coop:title')}</th>
                                <th className="p-2 text-center">{t('coop:name')}</th>
                                <th className="p-2 text-center">{t('coop:phone')}</th>
                                <th className="p-2 text-center">{t('coop:email')}</th>
                                <th className="p-2 text-center">{t('coop:date')}</th>
                                <th className="p-2 text-center">{t('coop:response_status')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {contents.length === 0 ? (
                                <tr>
                                    <td colSpan={7} className="h-32 text-center text-gray-500">결과가 없습니다.</td>
                                </tr>
                            ) : (
                                <tr key={contents.id} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => router.push(`${currentLocale}/coop/${i}`)}>
                                    <td className="p-2 text-center">10</td>
                                    <td className="p-2 text-center">협업제안</td>
                                    <td className="p-2 text-center">홍길동</td>
                                    <td className="p-2 text-center">010-1234-5678</td>
                                    <td className="p-2 text-center">asdasdasds@gmail.com</td>
                                    <td className="p-2 text-center">2024-01-14 </td>
                                    <td className="p-2 text-center"><span className="text-[#FF3E24]">대기중</span></td>
                                </tr>
                            )} */}
                            {Array.from({ length: 12 }).map((_, i) => (
                                <tr key={i} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => router.push(`${currentLocale}/coop/${i}`)}>
                                    <td className="p-2 text-center">10</td>
                                    <td className="p-2 text-center">협업제안</td>
                                    <td className="p-2 text-center">홍길동</td>
                                    <td className="p-2 text-center">010-1234-5678</td>
                                    <td className="p-2 text-center">asdasdasds@gmail.com</td>
                                    <td className="p-2 text-center">2024-01-14 </td>
                                    <td className="p-2 text-center"><span className="text-[#FF3E24]">대기중</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {/* <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}
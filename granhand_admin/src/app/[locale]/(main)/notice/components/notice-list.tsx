'use client'

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
import { useState } from "react"
import Pagination from "@/components/pagination"

export default function NoticeList() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'notice', 'wallpaper'])

    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage] = useState(0)
        
    const handleDelete = () => {
        const confirmed = window.confirm('선택한 게시글을 삭제하시겠습니까?')

        if(confirmed) {
            console.log('삭제')
        } else {
            console.log('삭제 취소')
        }
    }
    
    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('notice:all_notice')} <span className="text-[#FF3E24]">15</span>
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="latest_first">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="latest_first">{t('wallpaper:latest_first')}</SelectItem>
                                <SelectItem value="featured_first">{t('wallpaper:featured_first')}</SelectItem>
                                <SelectItem value="most_viewed">{t('wallpaper:most_viewed')}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 text-center">No.</th>
                            <th className="p-2 text-center">{t('notice:category')}</th>
                            <th className="p-2 text-center">{t('notice:title')}</th>
                            <th className="p-2 text-center">{t('notice:date')}</th>
                            <th className="p-2 text-center">{t('edit2')}/{t('delete')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="h-14 text-[#1A1A1A]">
                                <td className="p-2 text-center">15</td>
                                <td className="p-2 text-center">그랑핸드</td>
                                <td className="p-2 text-center">[공지] 개인정보 처리방침 개정 사전 안내(시행일 : 2024년 1월 24일)</td>
                                <td className="p-2 text-center">2024-01-14</td>
                                <td className="p-2 flex items-center justify-center gap-3">
                                    <Button variant="outline">{t('notice:edit')}</Button>
                                    <Button variant="outline" onClick={handleDelete}>{t('delete')}</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}
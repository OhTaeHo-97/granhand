'use client'

import Pagination from "@/components/pagination"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../../utils/localization/client"
import { MouseEvent, useState } from "react"
import { useRouter } from "next/navigation"

export default function ScentList() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'scent', 'wallpaper'])
    const currentLocale = useCurrentLocale()

    const [currentPage, setCurrentPage] = useState(1)

    const handleEdit = (e: MouseEvent<HTMLButtonElement>, id: number) => {
        e.stopPropagation()
        router.push(`${currentLocale}/scent/${id}/edit`)
    }

    const handleDelete = (e: MouseEvent<HTMLButtonElement>, id: number) => {
        e.stopPropagation()
        console.log(id)
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
                        {t('scent:all')} <span className="text-[#FF3E24]">25</span>
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
                            <th className="p-2 text-center">{t('scent:scent_type')}</th>
                            <th className="p-2 text-center">{t('edit2')}/{t('delete')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="h-14 text-[#1A1A1A] hover:bg-[#322A2408]" onClick={() => router.push(`${currentLocale}/scent/${i + 1}`)}>
                                <td className="p-2 text-center">25</td>
                                <td className="p-2 text-center">Marne. 마르네</td>
                                <td className="p-2 flex items-center justify-center gap-3">
                                    <Button variant="outline" onClick={(e) => handleEdit(e, i + 1)}>{t('scent:edit')}</Button>
                                    <Button variant="outline" onClick={(e) => handleDelete(e, i + 1)}>{t('delete')}</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}
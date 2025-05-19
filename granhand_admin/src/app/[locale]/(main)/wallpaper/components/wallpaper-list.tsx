'use client'

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function WallpaperList({ t }: { t: (key: string) => string }) {
    const handleDelete = () => {
        const confirmed = window.confirm('게시한 글을 삭제하시겠습니까?')

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
                        {t('wallpaper:all_wallpaper')} <span className="text-[#FF3E24]">10</span>
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
                            <th className="p-2 text-center">{t('wallpaper:title')}</th>
                            <th className="p-2 text-center">{t('wallpaper:date_created')}</th>
                            <th className="p-2 text-center">{t('wallpaper:views')}</th>
                            <th className="p-2 text-center">{t('edit2')}/{t('delete')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="h-14 text-[#1A1A1A]">
                                <td className="p-2 text-center">10</td>
                                <td className="p-2 text-center">Scatter, 2023</td>
                                <td className="p-2 text-center">2024-02-23</td>
                                <td className="p-2 text-center">584</td>
                                <td className="p-2 flex items-center justify-center gap-3">
                                    <Button className="border rounded px-2">{t('edit2')}</Button>
                                    <Button className="border rounded px-2" onClick={handleDelete}>{t('cancel')}</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
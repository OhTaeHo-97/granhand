'use client'

import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import Pagination from "@/components/pagination";
// import { useEffect, useState } from "react";
// import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function PostList({ currentPage, totalPage, size, setCurrentPage, setSize }: { currentPage: number, totalPage: number, size: string, setCurrentPage: React.Dispatch<React.SetStateAction<number>>, setSize: React.Dispatch<React.SetStateAction<string>> }) {
// export default function PostList({ contents, currentPage, totalPage, size, setCurrentPage, setSize }: { contents: any[], currentPage: number, totalPage: number, size: string, setCurrentPage: React.Dispatch<React.SetStateAction<number>>, setSize: React.Dispatch<React.SetStateAction<string>> }) {
    const router = useRouter()
    // const { status } = useSession()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'event', 'post'])
    const currentLocale = useCurrentLocale()
    // const [currentPage, setCurrentPage] = useState(1)
    // const [totalpage, setTotalPage] = useState(0)

    // const handlePosts = async () => {
    //     const params: Record<string, any> = {}
        
    // }

    const handleDelete = () => {
        const confirmed = window.confirm("게시한 글을 삭제하시겠습니까?")

        if(confirmed) {
            console.log('삭제됨')
        } else {
            console.log('삭제 취소됨')
        }
    }

    // useEffect(() => {
    //     if(status === 'authenticated') {
    //         // 데이터 fetch
    //     }
    // }, [status, currentPage])

    return (
        <>
            <div className="p-6 shadow-sm">
                <div>
                    <div className="mb-4 justify-between flex items-center">
                        {/* <div className="text-[#5E5955] font-bold text-base">
                            {t('event:all_event_posts')} <span className="text-[#FF3E24]">20</span>
                        </div> */}
                        <div className="text-[#5E5955] font-bold text-base">
                            {t('post:total_posts')} <span className="text-[#FF3E24]">20</span>
                            {/* {t('post:total_posts')} <span className="text-[#FF3E24]">{contents.length}</span> */}
                        </div>
                        <div className="flex gap-2">
                            <Select defaultValue="latest_first">
                                <SelectTrigger className="w-fit">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="latest_first">{t('event:latest_first')}</SelectItem>
                                    <SelectItem value="featured_first">{t('event:featured_first')}</SelectItem>
                                    <SelectItem value="most_viewed">{t('event:most_viewed')}</SelectItem>
                                </SelectContent>
                            </Select>
                            <Select defaultValue={size} onValueChange={setSize}>
                                <SelectTrigger className="w-fit">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="50">50</SelectItem>
                                    <SelectItem value="100">100</SelectItem>
                                    <SelectItem value="500">500</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse min-w-6xl">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 text-center">No.</th>
                                <th className="p-2 text-center">{t('post:category')}</th>
                                <th className="p-2 text-center">{t('event:title')}</th>
                                <th className="p-2 text-center">{t('event:date_created')}</th>
                                <th className="p-2 text-center">{t('event:views')}</th>
                                <th className="p-2 text-center">{t('edit2')}/{t('delete')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 12 }).map((_, i) => (
                                <tr key={i} className="h-14 text-[#1A1A1A]">
                                    <td className="p-2 text-center">20</td>
                                    <td className="p-2 text-center">공지사항</td>
                                    <td className="p-2 text-center">그랑핸드 온라인몰 가입 혜택 안내</td>
                                    <td className="p-2 flex justify-center items-center gap-5">
                                        2024-02-23
                                    </td>
                                    <td className="p-2 text-center">584</td>
                                    <td className="p-2 flex items-center justify-center gap-3">
                                        <Button className="border rounded px-2" onClick={() => router.push(`${currentLocale}/post/${i + 1}/edit`)}>{t('edit2')}</Button>
                                        <Button className="border rounded px-2" onClick={handleDelete}>{t('delete')}</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    )
}
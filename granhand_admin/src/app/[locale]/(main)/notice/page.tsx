import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";
import NoticeList from "./components/notice-list";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import { translation } from "../../../../../utils/localization/locales/server";

export default async function NoticePage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'notice', 'wallpaper'])
    const currentLocale = getCurrentLocaleFromParams(locale)
    // const locale = useLocaleAsLocaleTypes()
    // const { t } = useTranslation(locale, ['common', 'notice', 'wallpaper'])
    // const currentLocale = useCurrentLocale()
        
    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('notice:notice_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Link href={`${currentLocale}/notice/register`}>
                            <Button className="bg-[#322A24] text-white">
                                <Pencil />{t('notice:create_notice')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <NoticeList />
            </div>
        </main>
        // <main className="flex-1 border p-12">
        //     <div className="justify-between flex">
        //         <h1 className="text-2xl font-bold">공지사항 관리</h1>
        //         <Button className="bg-black text-white"><Pencil className="x-4 y-4"/>글 작성</Button>
        //     </div>
            
        //     <div className="text-black text-sm space-y-4 mt-10">
        //     <div>
        //         <div className="mb-4 justify-between flex items-center">
        //             <div className="text-sm font-bold">
        //                 전체 공지 <span className="text-red-500 font-bold">15</span>
        //             </div>
        //             <div className="flex gap-2">
        //                 <Select defaultValue="최신 작성순">
        //                     <SelectTrigger className="w-fit">
        //                         <SelectValue />
        //                     </SelectTrigger>
        //                     <SelectContent className="bg-white">
        //                         <SelectItem value="최신 작성순">최신 작성순</SelectItem>
        //                         <SelectItem value="이메일">이메일</SelectItem>
        //                         <SelectItem value="전화번호">전화번호</SelectItem>
        //                     </SelectContent>
        //                 </Select>
        //             </div>
        //         </div>

        //         <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
        //             <thead className="bg-[#f8f4f0] border-t h-12">
        //                 <tr className="border-b text-gray-400">
        //                     <th className="p-2 text-center">No.</th>
        //                     <th className="p-2 text-center">분류</th>
        //                     <th className="p-2 text-center">제목</th>
        //                     <th className="p-2 text-center">날짜</th>
        //                     <th className="p-2 text-center">수정/삭제</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 {Array.from({ length: 12 }).map((_, i) => (
        //                 <tr key={i} className="h-14">
        //                     <td className="p-2 text-center">15</td>
        //                     <td className="p-2 text-center">그랑핸드</td>
        //                     <td className="p-2 text-center">[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)</td>
        //                     <td className="p-2 text-center">2024-01-14</td>
        //                     <td className="p-2 text-center gap-3 flex items-center justify-center">
        //                         <Button className="border bg-white">편집</Button>
        //                         <Button className="border bg-white">삭제</Button>
        //                     </td>
        //                     {/* <td className="p-2 text-center">2024-01-14</td>
        //                     <td className="p-2 text-center text-red-500">
        //                         대기중
        //                     </td> */}
        //                 </tr>
        //                 ))}
        //             </tbody>
        //         </table>
        //         </div>
        //         <Pagination totalPages={20} />
        //     </div>
        // </main>
    )
}
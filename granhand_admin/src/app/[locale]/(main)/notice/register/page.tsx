'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function RegisterNoticePage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'notice'])

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('notice:notice_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]">{t('cancel')}</Button>
                    <Button className="bg-[#322A24] text-white">{t('notice:submit')}</Button>
                </div>
            </div>
            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <h2 className="font-bold text-xl text-[#5E5955]">{t('notice:write_post')}</h2>
                    <div className="border-l border-r border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                        <div className="mt-6 border-t">
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('notice:title')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Input placeholder={t('notice:title_placeholder')} />
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                                    <Label className="font-semibold">{t('notice:content')}</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Textarea placeholder={t('notice:content_placeholder')} className="resize-none w-full min-h-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <main className="flex-1 border p-12">
        //     <div className="justify-between flex">
        //         <h1 className="text-2xl font-bold">공지사항 관리</h1>
        //         <div className="flex gap-3">
        //             <Button className="bg-white text-black border w-25">취소</Button>
        //             <Button className="bg-black text-white w-25">작성</Button>
        //         </div>
        //     </div>

        //     <div className="mt-14">
        //         <h2 className="text-base font-semibold mb-6">글 작성</h2>
        //         <div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
        //             <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
        //                 <Label className="font-semibold">제목</Label>
        //             </div>
        //             <div className="flex items-center gap-4 p-5">
        //                 <Input placeholder="제목을 입력하세요" className="w-full" />
        //             </div>
        //         </div>

        //         <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-100">
        //             <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
        //                 <Label className="font-semibold">내용</Label>
        //             </div>
        //             <div className="flex items-center gap-4 p-5">
        //                 <Textarea className="resize-none h-full" placeholder="내용을 입력하세요" />
        //             </div>
        //         </div>
        //     </div>
        // </main>
    )
}
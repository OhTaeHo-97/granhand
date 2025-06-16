'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import LoginInfo from "./components/login-info";
import MemberInfo from "./components/member-info";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../utils/localization/client";
import { useState } from "react";
import TwoButtonModal from "../../components/two-button-modal";
import { useRouter } from "next/navigation";

export default function MyPage() {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    return (
        <div className="min-h-screen flex flex-col items-center py-8 px-4 w-[358px] mx-auto">
            {/* 로그인 정보 */}
            <LoginInfo t={t} currentLocale={currentLocale} />

            {/* 회원 정보 */}
            <MemberInfo t={t} />

            {/* 로그아웃/회원탈퇴 */}
            <section className="w-full max-w-xl">
                <Button
                className="flex items-center justify-start text-medium font-bold text-[#2D2926] py-6 bg-transparent hover:cursor-pointer transition"
                onClick={() => setOpen((prev) => !prev)}
                >
                    <span className="flex items-center gap-2 text-[#322A24] mr-3">
                        {t('logout')}
                    </span>
                    <ChevronRight className="text-[#2D2926]" size={24} />
                </Button>
                <Button
                className="text-xs font-bold !text-[#C0BCB6] mt-6 underline bg-transparent"
                onClick={() => router.push(`${currentLocale}/my-info/leave`)}
                // disabled
                >
                    {t('auth:withdraw')}
                </Button>
            </section>
            <TwoButtonModal open={open} setOpen={setOpen} contents={t('auth:ask_logout')} btnText1={'cancel'} btnText2={'confirm'} locale={locale} nextLink={`${currentLocale}/`} />
        </div>
        // <div className="container mx-auto px-6 pt-8">
        //     <MyInfoHeader />
        //     <div className="min-h-screen flex flex-col items-center py-8 px-4">
        //         {/* 로그인 정보 */}
        //         <LoginInfo t={t} />

        //         {/* 회원 정보 */}
        //         <MemberInfo t={t} />

        //         {/* 로그아웃/회원탈퇴 */}
        //         <section className="w-full max-w-xl">
        //             <Button
        //             className="flex items-center justify-start text-xl font-bold text-[#2D2926] py-6 bg-transparent hover:cursor-pointer transition"
        //             >
        //                 <span className="flex items-center gap-2 text-[#322A24] mr-3">
        //                     {t('logout')}
        //                 </span>
        //                 <ChevronRight className="!w-6 !h-6 text-[#2D2926]" />
        //             </Button>
        //             <Button
        //             className="text-base font-semibold !text-[#C0BCB6] mt-6 underline cursor-not-allowed bg-transparent"
        //             // disabled
        //             >
        //                 {t('withdraw')}
        //             </Button>
        //         </section>
        //     </div>
        // </div>
    );
} 
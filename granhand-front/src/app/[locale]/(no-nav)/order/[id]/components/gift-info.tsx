'use client'

import { Button } from "@/components/ui/button";
import GiftCard from "./gift-card";
// import MessageResendModal from "./modal/message-resend-modal";
import { useState } from "react";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";
import BasicModal from "@/app/[locale]/components/modal";

export default function GiftInfo() {
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'payment', 'order'])
    const currentLocale = useCurrentLocale()

    return (
        <section className="bg-[#FDFBF5] rounded-md overflow-hidden max-w-sm">
            <h2 className="text-sm font-bold text-[#322A24]">{t('payment:recipient_info')}</h2>
            {/* <div className="relative h-48 w-full mt-4">
                <Image
                    src="/lovable-uploads/sample-gift-image.jpg" // 실제 경로로 교체해주세요
                    alt="Gift"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex p-7">
                    <p className="text-white text-lg font-medium">고마운 마음을 담아 보냅니다.</p>
                </div>
            </div> */}
            <div className="border rounded-md !shadow-md mt-6 w-[342px] h-[304px]">
            {/* <div className="p-6 shadow-xl"> */}
                <GiftCard />
                <div className="px-6 py-4 text-xs text-[#6F6963]">
                    <div className="flex mb-1">
                    <span className="w-20 text-[#C0BCB6]">{t('payment:recipient')}</span>
                    <span>홍*동 (카카오톡)</span>
                    </div>
                    <div className="flex mb-4">
                    <span className="w-20 text-[#C0BCB6]">{t('order:gift_status')}</span>
                    <span>{t('order:gift_accept')}</span>
                    </div>

                    <div className="flex justify-center">
                        <Button className="w-[310px] border !border-[#DBD7D0] rounded py-2 text-xs font-bold text-[#6F6963] cursor-pointer" onClick={() => setOpen((prev) => !prev)}>
                        {t('order:resend')}
                        </Button>
                    </div>
                </div>
            </div>

            {/* <MessageResendModal open={open} setOpen={setOpen} /> */}
            <BasicModal open={open} setOpen={setOpen} contents="resent_msg" btnText={'confirm'} locale={locale} nextLink={`${currentLocale}/my-page/order`} />
        </section>
    )
}
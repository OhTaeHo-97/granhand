'use client'

import { Button } from "@/components/ui/button";
import GiftCard from "./gift-card";
import MessageResendModal from "./modal/message-resend-modal";
import { useState } from "react";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function GiftInfo() {
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'payment', 'order'])

    return (
        <section className="bg-white rounded-md overflow-hidden shadow-md max-w-sm">
            <h2 className="text-base font-bold">{t('payment:recipient_info')}</h2>
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
            <GiftCard />

            <div className="px-6 py-4 text-sm text-gray-600">
                <div className="flex mb-1">
                <span className="w-20 text-gray-400">{t('payment:recipient')}</span>
                <span>홍*동 (카카오톡)</span>
                </div>
                <div className="flex mb-4">
                <span className="w-20 text-gray-400">{t('order:gift_status')}</span>
                <span>{t('order:gift_accept')}</span>
                </div>

                <Button className="w-full border rounded py-2 text-sm font-semibold text-gray-700" onClick={() => setOpen((prev) => !prev)}>
                {t('order:resend')}
                </Button>
            </div>
            <MessageResendModal open={open} setOpen={setOpen} />
        </section>
    )
}
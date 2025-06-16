'use client'

import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import Image from "next/image";
// import { useState } from "react";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ProductInfo({ state }: { state: string }) {
// export default function ProductInfo() {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['payment', 'order', 'my_page'])
    const currentLocale = useCurrentLocale()
    // const { locale } = await params
    // const { t } = await translation(locale, ['payment', 'order', 'my_page'])
    // const [open, setOpen] = useState(false)

    const handleTrackShipping = () => {
        window.open(
            '/ship',
            '_blank',
            'width=400,height=800,menubar=no,toolbar=no,location=yes,status=no'
        );
    }

    console.log('state:', state)

    return (
        // 주문 상품 정보
        <section className="rounded-lg space-y-4 bg-[#FDFBF5]">
            <h2 className="text-xs font-bold text-[#322A24]">{t('payment:order_item_info')}</h2>

            <div className="border rounded-md p-4 px-10 space-y-4 shadow-md w-[739px] h-[288px]">
                <div className="text-sm font-semibold text-[#6F6963]">주문 확정</div>
                <div className="flex gap-4">
                    <Image
                        src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png"
                        alt="product"
                        className="w-[72px] h-[72px] object-cover rounded"
                        width={72}
                        height={72}
                    />
                    <div className="flex flex-col justify-center text-[#322A24] text-xs">
                        <div className="font-bold text-[#C0BCB6]">GRANHAND</div>
                        <div className="font-medium mt-1 leading-relaxed">Roland Multi Perfume</div>
                        <div className="font-bold text-sm mt-1">55,000원</div>
                    </div>
                </div>
                {/* 하단: 옵션 정보 */}
                <div className="text-xs border-t border-dashed pt-4 space-y-1 text-[#6F6963]">
                    <div className="flex">
                        <span className="text-[#C0BCB6] w-24">{t('payment:option')}</span>
                        <span className="ml-4">롤랑 멀티퍼퓸 200ml / 1개</span>
                    </div>
                    <div className="flex">
                        <span className="text-[#C0BCB6] w-24">{t('payment:shopping_bag')}</span>
                        <span className="ml-4">구매 안함</span>
                    </div>
                    <div className="flex">
                        <span className="text-[#C0BCB6] w-24">{t('payment:is_stamping')}</span>
                        <span className="ml-4">N</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-sm mt-4">
                    <Button className="w-[318px] h-[34px] py-2 rounded bg-[#322A240A] text-[#6F6963] text-xs font-bold" onClick={handleTrackShipping}>{t('order:track')}</Button>
                    <Button className="w-[318px] h-[34px] py-2 rounded bg-[#322A240A] text-[#6F6963] text-xs font-bold" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/request-list?category=exchangeRefund`)}>{t('order:exchange_return')}</Button>
                </div>
            </div>
        </section>
    )
}
'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight, GiftIcon } from "lucide-react";
import { useState } from "react";
import CancelModal from "../../cancel-return-exchange/components/cancel-modal";
import Link from "next/link";
import { getLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";
import TwoButtonModal from "@/app/[locale]/components/two-button-modal";
import { useRouter } from "next/navigation";

export default function OrderElement({ state, isGift }: { state : string, isGift: boolean }) {
    const router = useRouter()
    const locale = getLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop', 'payment', 'order', 'my_page'])
    const currentLocale = useCurrentLocale()
    const [open, setOpen] = useState(false)
    const [nextLink, setNextLink] = useState<string | undefined>(undefined)
    const [content, setContent] = useState('')
    // const [cancelModalOpen, setCancelModalOpen] = useState(false)
    // const [confirmModalOpen, setConfirmModalOpen] = useState(false)

    const cancelBtn = (id: number) => {
        const link = `${currentLocale}/order/confirm-cancel-return-exchange/request-list?category=cancel&select=${id}`
        return (
            <Button className="w-full border rounded py-2 text-sm"
                onClick={() => {
                    setNextLink(link)
                    setContent('취소 유의사항 안내 - 출고 중인 상품은 취소 신청이 어려울 수 있어요.')
                    setOpen((prev) => !prev)
                }}
            >
                {t('my_page:order_cancel')}
            </Button>
        )
    }

    const confirmBtn = (id: number) => {
        const link = `${currentLocale}/order/confirm-cancel-return-exchange/request-list?category=confirm&select=${id}`
        return (
            <Button className="w-full border rounded py-2 text-sm"
                onClick={() => router.push(link)}
            >
                {t('my_page:confirm_purchase')}
            </Button>
        )
    }

    const showOtherButtons = () => {
        return state.includes('shipping') || state.includes('delivered') || state.includes('confirm_purchase')
        // return state === '배송 중' || state.includes('배송 완료') || state === '구매 확정'
    }

    return (
        <section className="space-y-4 mt-10">
            {
                isGift ? (
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-sm font-semibold">2023.10.23</h2>
                            <div className="w-5 h-5 rounded-full bg-gray-500 flex items-center justify-center">
                                <GiftIcon className="w-3 h-3 text-white" />
                            </div>
                        </div>
                        <Link href="/order/confirm-cancel-return-exchange/1">
                            <Button className="text-sm text-gray-400 p-0 h-fit">
                                <ChevronRight />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex justify-between">
                        <span className="text-sm font-semibold">2023.10.23</span>
                        <Link href="/order/confirm-cancel-return-exchange/1">
                            <Button className="text-sm text-gray-400 p-0 h-fit">
                                <ChevronRight />
                            </Button>
                        </Link>
                    </div>
                )
            }
            
            <div className="border rounded-lg p-4 pt-2">
                <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-gray-500 font-semibold">{t(`my_page:${state}`)}</span>
                    <Button className="text-gray-400 text-xs">{t('my_page:contact')}</Button>
                </div>

                <div className="flex gap-4">
                    <img src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="product" className="w-25 h-25 object-cover rounded" />
                    <div className="flex flex-col justify-between gap-0.5">
                        <div>
                            <div className="text-sm font-semibold leading-relaxed">Roland Multi Perfume</div>
                            <div className="text-xs text-gray-500 leading-relaxed">롤랑 멀티퍼퓸 100ml / 1개</div>
                        </div>
                        <div className="text-base font-bold mt-1">35,000원</div>
                    </div>
                </div>

                <div className="mt-5"></div>
                {
                    showOtherButtons() && (
                        <div className="grid grid-cols-2 gap-2 text-sm mb-2">
                            <Button className="rounded py-2 bg-gray-100">{t('my_page:track_ship')}</Button>
                            <Button className="rounded py-2 bg-gray-100">{t('my_page:exchange_return')}</Button>
                        </div>
                    )
                }
                {
                    !state.includes('confirm_purchase') &&
                    (
                        state.includes('delivered') ? (
                            confirmBtn(1)
                            // <Button className="w-full border rounded py-2 text-sm" onClick={() => setOpen((prev) => !prev)}>{t('my_page:confirm_purchase')}</Button>
                        ) : (
                            // <Button className="w-full border rounded py-2 text-sm" onClick={() => setOpen((prev) => !prev)}>{t('my_page:order_cancel')}</Button>
                            cancelBtn(1)
                        )
                    )
                }
                {/* <CancelModal open={open} setOpen={setOpen} /> */}
                <TwoButtonModal open={open} setOpen={setOpen} contents={content} btnText1="닫기" btnText2="주문취소" currentLocale={currentLocale} locale={locale} nextLink={nextLink} />
            </div>
        </section>
    )
}
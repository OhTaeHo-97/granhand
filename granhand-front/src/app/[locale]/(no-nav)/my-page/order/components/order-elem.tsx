'use client'

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useTranslation } from "../../../../../../../utils/localization/client";
import TwoButtonModal from "@/app/[locale]/components/two-button-modal";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function OrderElement({ state, isGift }: { state : string, isGift: boolean }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop', 'payment', 'order', 'my_page'])
    const currentLocale = useCurrentLocale()
    const [open, setOpen] = useState(false)
    const [nextLink, setNextLink] = useState<string | undefined>(undefined)
    // const [content, setContent] = useState('')
    const isAcceptedGift = false
    const isInvalid = false
    // const [cancelModalOpen, setCancelModalOpen] = useState(false)
    // const [confirmModalOpen, setConfirmModalOpen] = useState(false)

    const message = () => {
        if(isAcceptedGift) return t('my_page:no_cancel_accepted_gift')
        if(isInvalid) return t('my_page:no_cancel_invalid')
        return t('my_page:cancel_valid')
    }
    const btnText = isAcceptedGift || isInvalid ? 'confirm' : 'cancel_order'

    const cancelBtn = (id: number) => {
        const link = `${currentLocale}/order/confirm-cancel-return-exchange/request-list?category=cancel&select=${id}`
        
        return (
            <Button className="w-[659px] h-[34px] border rounded py-2 text-xs font-bold bg-[#FDFBF5] text-[#6F6963] !border-[#DBD7D0] hover:bg-[#f5f3ef]"
                onClick={() => {
                    setNextLink(link)
                    setOpen((prev) => !prev)
                }}
            >
                {state === 'cancel_req' || state === 'return_cmpl' || state === 'exch_cmpl' ? t('order:cancel_details') : t('my_page:order_cancel')}
            </Button>
        )
    }

    const confirmBtn = (id: number) => {
        const link = `${currentLocale}/order/confirm-cancel-return-exchange/request-list?category=confirm&select=${id}`
        return (
            <Button className="w-[659px] h-[34px] border rounded py-2 text-xs font-bold bg-[#FDFBF5] text-[#6F6963] !border-[#DBD7D0] hover:bg-[#f5f3ef]"
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

    const handleTrackShipping = () => {
        window.open(
            '/ship',
            '_blank',
            'width=400,height=800,menubar=no,toolbar=no,location=yes,status=no'
        );
    }

    return (
        <section className="space-y-4 mt-10 w-[739px]">
            {
                isGift ? (
                    <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                            <h2 className="text-sm font-bold text-[#322A24]">2023.10.23</h2>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                <Image
                                    src='/for-gift-icon.svg'
                                    alt='gift item'
                                    width={24}
                                    height={24}
                                    className="w-[24px] h-[24px]"
                                />
                            </div>
                        </div>
                        <Link href={state === 'cancel_req' || state === 'return_cmpl' || state === 'exch_cmpl' ? `${currentLocale}/order/confirm-cancel-return-exchange/1?state=${state}` : `${currentLocale}/order/1/gift?state=${state}`}>
                            <Button className="text-sm text-[#322A24] p-0 h-fit">
                                <ChevronRight className="!text-[#322A24]" size={24} />
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="flex justify-between">
                        <span className="text-sm font-bold text-[#322A24]">2023.10.23</span>
                        <Link href={state === 'cancel_req' || state === 'return_cmpl' || state === 'exch_cmpl' ? `${currentLocale}/order/confirm-cancel-return-exchange/1?state=${state}` : `${currentLocale}/order/1/gift?state=${state}`}>
                            <Button className="text-sm text-[#322A24] p-0 h-fit">
                                <ChevronRight className="text-[#322A24]" size={24} />
                            </Button>
                        </Link>
                    </div>
                )
            }
            
            <div className="border rounded-lg p-4 pt-2">
                <div className="flex justify-between items-center mb-4 text-sm">
                    {/* 취소, 교환 반품 관련은 FF3E24 텍스트 색깔 */}
                    <span className={`font-bold text-xs ${state === 'cancel_req' || state === 'return_cmpl' || state === 'exch_cmpl' ? "text-[#FF3E24]" : "text-[#6F6963]"}`}>{t(`my_page:${state}`)}</span>
                    <Button className="text-[#C0BCB6] font-bold text-xs">{t('my_page:contact')}</Button>
                </div>

                <div className="flex gap-4">
                    <Image src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="product" width={72} height={72} className="w-[72px] h-[72px] object-cover rounded" />
                    <div className="flex flex-col justify-between gap-0.5 text-[#322A24] text-xs">
                        <div>
                            <div className="font-medium leading-relaxed">Roland Multi Perfume</div>
                            <div className="text-[#6F6963] leading-relaxed">롤랑 멀티퍼퓸 100ml / 1개</div>
                        </div>
                        <div className="text-sm font-bold mt-1">35,000{currentLocale === '' ? '원' : ' KRW'}</div>
                    </div>
                </div>

                <div className="mt-5"></div>
                <div className="flex justify-center">
                    {
                        showOtherButtons() && (
                            <div className="grid grid-cols-2 gap-5 text-sm mb-2">
                                <Button className="w-[318px] h-[34px] rounded py-2 bg-[#322A240A] cursor-pointer text-xs font-bold text-[#6F6963]" onClick={handleTrackShipping}>{t('my_page:track_ship')}</Button>
                                <Button className="w-[318px] h-[34px] rounded py-2 bg-[#322A240A] cursor-pointer text-xs font-bold text-[#6F6963]" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/request-list?category=exchangeRefund`)}>{t('my_page:exchange_return')}</Button>
                            </div>
                        )
                    }
                </div>
                <div className="flex justify-center">
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
                </div>
                {/* <CancelModal open={open} setOpen={setOpen} /> */}
                <TwoButtonModal open={open} setOpen={setOpen} contents={message()} btnText1="close" btnText2={btnText} locale={locale} nextLink={nextLink} />
            </div>
        </section>
    )
}
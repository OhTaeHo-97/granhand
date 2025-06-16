'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import PaymentInfo from "../../../[id]/components/payment-info";
import { Input } from "@/components/ui/input";
import Information from "@/components/information";
import ProductInfoCard from "../../../[id]/components/product-info-card";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";

export default function CancelForm({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const queryString = new URLSearchParams(searchParams).toString()

    return (
        <>
            <div className="w-[739px] max-w-3xl mx-auto mb-20">
                <div className="rounded-lg space-y-4 bg-[#FDFBF5] mb-10">
                    <h2 className="text-sm font-bold text-[#322A24]">{t('order:cancel_item')}</h2>
                    <div className="border rounded-md p-6 space-y-6 bg-[#FDFBF5]">
                        <ProductInfoCard t={t} currentLocale={currentLocale} />
                    </div>
                </div>
                <div className="grid grid-cols-[357px_342px] gap-10 mb-10">
                    <PaymentInfo t={t} />
                    <div className="space-y-2">
                        <div className="space-y-2 w-full">
                            <h2 className="font-bold text-[#322A24] text-sm">{t('order:refund_account')}</h2>
                            <div className="rounded-md space-y-3">
                                <Select>
                                    {/* 카드 결제시 bg-[#E9E6E0] 클래스, disabled 추가 */}
                                    <SelectTrigger className="border !border-[#C0BCB6] rounded px-4 py-2 text-sm h-[42px] data-[placeholder]:text-[#C0BCB6]">
                                        <SelectValue placeholder={t('order:select_bank')} />
                                    </SelectTrigger>
                                    <SelectContent className="bg-[#FDFBF5]">
                                        <SelectItem value="shinhan">신한</SelectItem>
                                        <SelectItem value="kb">국민</SelectItem>
                                        <SelectItem value="nh">농협</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="rounded-md space-y-3 mt-2">
                                {/* 카드 결제시 bg-[#E9E6E0] 클래스, disabled 추가 */}
                                <Input type="text" placeholder={t('order:select_bank')} className="h-[42px] placeholder:text-[#C0BCB6] !border-[#C0BCB6]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#322A2408] h-[174px]">
                    <Information title={t('order:refund_method_info')} contents={[
                        {
                            elem: t('order:credit_check'),
                            sub: [t('order:credit_check_info')]
                        },
                        {
                            elem: t('order:bank'),
                            sub: [t('order:bank_info')]
                        }
                    ]} className="h-[174px] mt-4" />
                    <Information contents={[
                        {
                            elem: t('order:naver_pay'),
                            sub: [t('order:naver_pay_info1'), t('order:naver_pay_info2'), t('order:naver_pay_info3')]
                        },
                        {
                            elem: t('order:point'),
                            sub: [t('order:point_info')]
                        }
                    ]} className="h-[174px] mt-4" />
                </div>
            </div>
            <div className="py-6 border-t border-b flex justify-end">
                <Button className="bg-[#322A24] text-white rounded-none font-bold p-6 w-[358px] h-[46px] min-w-50" onClick={() => router.push(`${currentLocale}/order/confirm-cancel-return-exchange/result?${queryString}`)}>
                    {t('submit')}
                </Button>
            </div>
        </>
    )
}
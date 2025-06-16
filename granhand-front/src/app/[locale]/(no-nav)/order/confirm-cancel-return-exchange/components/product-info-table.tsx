'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
import Image from "next/image";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function ProductInfoTable() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['my_page', 'cart', 'payment'])

    return (
        <div className="overflow-x-auto">
            <div className="min-w-[1120px]">
                <table className="w-full text-center min-w-8xl overflow-auto">
                    <thead className="bg-[#322A2408] border-t border-b border-[#E9E6E0] h-[36px]">
                        <tr className="text-[#6F6963] text-xs font-medium">
                            <th className="p-2 w-40 font-medium">
                                <div className="pl-6 flex items-center justify-start gap-3">
                                    <Checkbox
                                        id="select-all"
                                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                    />
                                    <span className="text-[#6F6963]">{t('cart:select_all')} (0/1)</span>
                                </div>
                            </th>
                            <th className="p-2 text-center font-medium">{t('cart:info')}</th>
                            <th className="p-2 text-center font-medium">{t('cart:quantity')}</th>
                            <th className="p-2 text-center font-medium">{t('cart:amount')}</th>
                            <th className="p-2 text-center font-medium">{t('payment:is_stamping')}</th>
                            <th className="p-2 text-center font-medium">{t('payment:stamping_title')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 상품 없을 때
                        <tr className="bg-[#322A2408]">
                            <td colSpan={5} className="h-[136px] text-center text-[#C0BCB6]">장바구니가 비었습니다.</td>
                        </tr> */}
                        <tr
                            className="my-4 h-[136px] bg-[#322A2408] text-[#1A1A1A] hover:bg-[#322A2408] relative"
                        >
                            <td className="flex justify-start p-2 items-center h-30 w-20">
                                <div className="pl-6">
                                <Checkbox
                                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="flex justify-start items-center gap-4">
                                    <Image src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="perfume" width={100} height={97.5} className="w-[100px] h-[97.5px]" />
                                    <div className="col-span-4 flex items-center gap-4 space-y-2 text-left">
                                        <div className="text-xs space-y-2">
                                            <div className="font-bold text-[#322A24]">Soie Signature Perfume</div>
                                            <div className="text-[#322A244D]">수아 시그니처퍼퓸 100ml</div>
                                            <div className="text-[#322A244D] mb-1">
                                                쇼핑백 : 구매안함
                                            </div>
                                            <div className="font-bold text-[#322A24]">110,000원</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 flex flex-col items-center justify-center">
                                <span className="text-sm">1</span>
                            </td>
                            <td className="p-2 text-center text-sm font-bold text-[#322A24]">110,000원</td>
                            <td className="p-2 text-center text-sm font-bold text-[#322A24]">N</td>
                            <td className="p-2 text-center text-xs text-[#6F6963]">GRANHAND ❤️</td>
                        </tr>
                        <tr
                            className="my-4 h-[136px] bg-[#322A2408] text-[#1A1A1A] hover:bg-[#322A2408] relative"
                        >
                            <td className="flex justify-start p-2 items-center h-30 w-20">
                                <div className="pl-6">
                                <Checkbox
                                        className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </div>
                            </td>
                            <td className="p-2">
                                <div className="flex justify-start items-center gap-4">
                                    <Image src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="perfume" width={100} height={97.5} className="w-[100px] h-[97.5px]" />
                                    <div className="col-span-4 flex items-center gap-4 space-y-2 text-left">
                                        <div className="text-xs space-y-2">
                                            <div className="font-bold text-[#322A24]">Soie Signature Perfume</div>
                                            <div className="text-[#322A244D]">수아 시그니처퍼퓸 100ml</div>
                                            <div className="text-[#322A244D] mb-1">
                                                쇼핑백 : 구매안함
                                            </div>
                                            <div className="font-bold text-[#322A24]">110,000원</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td className="p-2 flex flex-col items-center justify-center text-center">
                                <span className="text-sm">1</span>
                            </td>
                            <td className="p-2 text-center text-sm font-bold text-[#322A24]">110,000원</td>
                            <td className="p-2 text-center text-sm font-bold text-[#322A24]">N</td>
                            <td className="p-2 text-center text-xs text-[#6F6963]">GRANHAND ❤️</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
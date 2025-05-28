import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CouponModalContents({ t }: { t: (key: string) => string }) {
    return (
        <table className="w-full text-center border-collapse min-w-8xl border overflow-auto">
            <thead className="bg-[#322A2408] border-t h-10">
                <tr className="border-b text-[#6F6963]">
                    <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
                    <th className="p-2 items-center border">{t('coupon:coupon_number')}</th>
                    <th className="p-2 items-center border">{t('coupon:coupon_name')}</th>
                    <th className="p-2 text-center border">{t('coupon:applicable_products')}</th>
                    <th className="p-2 text-center border">{t('coupon:purchase_amount')}</th>
                    <th className="p-2 text-center border">{t('coupon:discount_amount')}</th>
                    <th className="p-2 text-center border">{t('coupon:validity_period')}</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b h-14 text-[#1A1A1A]">
                    <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                    <td className="p-2 items-center border w-full min-w-50">43P249082309DG12</td>
                    <td className="p-2 items-center border w-full min-w-150">콤포타블 음료 교환권</td>
                    <td className="p-2 items-center border w-full min-w-150">콤포타블 전체 상품</td>
                    <td className="p-2 items-center border w-full min-w-150">4,500원</td>
                    <td className="p-2 items-center border w-full min-w-150">4,500원</td>
                    <td className="p-2 items-center border w-full min-w-150">2024-07-31 11:59</td>
                </tr>
            </tbody>
        </table>
    )
}
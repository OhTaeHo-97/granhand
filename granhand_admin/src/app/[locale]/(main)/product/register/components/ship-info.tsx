import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@radix-ui/react-checkbox";

export default function ShipInfo({ t }: { t: (key: string) => string }) {
    return (
        <section className="mb-8">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:ship_info')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:product_weight')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="number" placeholder={t('product:number_only')} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:set_ship_country')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">대한민국</Label>
                    </div>
                </div>
            </div>
            {/* <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">상품 무게(kg)</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input type="number" placeholder="숫자만 입력" />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">배송 국가 설정</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">대한민국</Label>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
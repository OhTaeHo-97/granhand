import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function SalesInfo({ t }: { t: (key: string) => string }) {
    return (
        <section>
            <h2 className="font-bold text-xl text-[#5E5955]">{t('product:sales_info')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
                {/* 상품명 */}
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#322A2408] p-3 font-semibold border-r border-gray-300 flex items-center justify-center text-[#6F6963]">
                        {t('product:price')}
                    </div>
                    <div className="grid divide-y divide-gray-200">
                        <div className="p-4 flex items-center space-x-4">
                            <span>KRW</span> <Input type="number" className="w-100" /> <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium min-w-14">{t('product:tax_included')}</Label>
                        </div>
                        <div className="p-4 flex items-center space-x-4">
                            <span>USD</span> <Input type="number" className="w-100" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178 divide-y divide-gray-200">
            <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    {/* 첫 번째 행 */}
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:discount_settings')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">{t('product:coupon')}</Label>
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">{t('product:reward_points')}</Label>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] h-full border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:reward_restriction')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">{t('product:exclude_membership')}</Label>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:target_audience')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <RadioGroup defaultValue="now" className="flex gap-6">
                        <Label className="flex items-center gap-2 w-20">
                        <RadioGroupItem value="all" /> {t('product:all_members')}
                        </Label>
                        <Label className="flex items-center gap-2 w-20">
                        <RadioGroupItem value="normal" /> {t('product:specific_members')}
                        </Label>
                        <Label className="flex items-center gap-2 min-w-20">
                        <RadioGroupItem value="badness" /> {t('product:member_by_tier')}
                        </Label>
                    </RadioGroup>
                    <Select defaultValue="all">
                        <SelectTrigger className="border rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                        <SelectValue placeholder="회원 등급 - 전체" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            <SelectItem value="all" className="px-3 py-2 /cursor-pointer">회원 등급 - 전체</SelectItem>
                            <SelectItem value="vip" className="px-3 py-2 cursor-pointer">VIP</SelectItem>
                            <SelectItem value="gold" className="px-3 py-2 cursor-pointer">Gold</SelectItem>
                            <SelectItem value="silver" className="px-3 py-2 cursor-pointer">Silver</SelectItem>
                            <SelectItem value="bronze" className="px-3 py-2 cursor-pointer">Bronze</SelectItem>
                            <SelectItem value="basic" className="px-3 py-2 cursor-pointer">Basic</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    {/* 첫 번째 행 */}
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:minimum_quantity')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Input type="number" className="w-14" /><span>{t('product:more')}</span>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] h-full border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:maximum_quantity')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> {t('product:no_limit')}
                            </Label>
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="normal" /> <Input type="number" className="w-14" /><span>{t('product:limit_to')}</span>
                            </Label>
                            {/* <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="badness" /> 등급별 회원
                            </Label> */}
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:display_settings')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">{t('product:domestic')}</Label>
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">{t('product:international')}</Label>
                    </div>
                </div>
            </div>

            {/* <div className="border border-gray-300 text-sm text-[#6f6963] divide-y divide-gray-200 mb-4">
                <div className="grid grid-cols-[150px_1fr]">
                    <div className="bg-[#f8f4f0] p-3 font-semibold border-r border-gray-300 flex items-center justify-center">
                        판매가
                    </div>
                    <div className="grid divide-y divide-gray-200">
                        <div className="p-4 flex items-center space-x-4">
                            <span>KRW</span> <Input type="number" className="w-100" /> <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium min-w-14">세금 포함</Label>
                        </div>
                        <div className="p-4 flex items-center space-x-4">
                            <span>USD</span> <Input type="number" className="w-100" />
                        </div>
                    </div>
                </div>
            </div> */}
            

            {/* <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                        <Label className="font-semibold">할인 설정</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">쿠폰</Label>
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">적립금</Label>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] h-full border-b">
                        <Label className="font-semibold">적립 제한</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                    <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">회원 등급 혜택 적립 제외</Label>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">판매 대상</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <RadioGroup defaultValue="now" className="flex gap-6">
                        <Label className="flex items-center gap-2 w-20">
                        <RadioGroupItem value="all" /> 전체 회원
                        </Label>
                        <Label className="flex items-center gap-2 w-20">
                        <RadioGroupItem value="normal" /> 특정 회원
                        </Label>
                        <Label className="flex items-center gap-2 min-w-20">
                        <RadioGroupItem value="badness" /> 등급별 회원
                        </Label>
                    </RadioGroup>
                    <Select defaultValue="all">
                        <SelectTrigger className="border rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                        <SelectValue placeholder="회원 등급 - 전체" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            <SelectItem value="all" className="px-3 py-2 /cursor-pointer">회원 등급 - 전체</SelectItem>
                            <SelectItem value="vip" className="px-3 py-2 cursor-pointer">VIP</SelectItem>
                            <SelectItem value="gold" className="px-3 py-2 cursor-pointer">Gold</SelectItem>
                            <SelectItem value="silver" className="px-3 py-2 cursor-pointer">Silver</SelectItem>
                            <SelectItem value="bronze" className="px-3 py-2 cursor-pointer">Bronze</SelectItem>
                            <SelectItem value="basic" className="px-3 py-2 cursor-pointer">Basic</SelectItem>
                        </SelectContent>
                    </Select>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                        <Label className="font-semibold">최소 주문 수량</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Input type="number" className="w-14" /><span>개 이상</span>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] h-full border-b">
                        <Label className="font-semibold">최대 주문 수량</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> 제한 없음
                            </Label>
                            <Label className="flex items-center gap-2">
                            <RadioGroupItem value="normal" /> <Input type="number" className="w-14" /><span>개 이하로 제한</span>
                            </Label>
                        </RadioGroup>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">전시 설정</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">국내</Label>
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">해외</Label>
                    </div>
                </div>
            </div> */}
        </section>
    )
}
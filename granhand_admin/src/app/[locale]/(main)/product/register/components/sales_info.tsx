'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X } from "lucide-react";
import { useState } from "react";

interface SalesInfoProps {
    data: {
        koPrice: number,
        includeTax: string,
        enPrice: number,
        coupon: string,
        point: string,
        restrictedReward: string,
        targetMember: string,
        emails: string[],
        grade: string,
        minOrderCount: number,
        hasLimitCount: string,
        maxOrderCount: number,
        showDomestic: string,
        showAbroad: string
    }
    onChange: (field: string, value: any) => void
}

export default function SalesInfo({ data, onChange, t }: SalesInfoProps & { t: (key: string) => string }) {
    const setEmails: React.Dispatch<React.SetStateAction<string[]>> = (value) => {
        if (typeof value === 'function') {
            onChange('emails', value(data.emails));
        } else {
            onChange('emails', value);
        }
    }

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter' && inputValue.trim() !== '') {
            setEmails([...data.emails, inputValue.trim()])
            setInputValue('')
        }
    }

    const handleRemoveEmail = (emailToRemove: string) => {
        setEmails(data.emails.filter((email) => email !== emailToRemove));
    }

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
                            <span>KRW</span>
                            <Input type="number" className="w-100" value={data.koPrice} onChange={(e) => onChange('koPrice', e.target.value)} />
                            <Label className="text-sm font-medium min-w-14">
                                <Checkbox
                                    id="include-tax"
                                    checked={data.includeTax === 'Y'}
                                    onCheckedChange={(checked) => onChange('includeTax', checked ? 'Y' : 'N')}
                                    className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                /> {t('product:tax_included')}
                            </Label>
                        </div>
                        <div className="p-4 flex items-center space-x-4">
                            <span>USD</span> <Input type="number" className="w-100" value={data.enPrice} onChange={(e) => {
                                console.log('enPrice')
                                onChange('enPrice', e.target.value)
                            }} />
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
                        <Label className="text-sm font-medium">
                            <Checkbox
                                id="select-all"
                                checked={data.coupon === 'Y'}
                                onCheckedChange={(checked) => onChange('coupon', checked ? 'Y' : 'N')}
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            /> {t('product:coupon')}
                        </Label>
                        <Label className="text-sm font-medium">
                            <Checkbox
                                id="select-all"
                                checked={data.point === 'Y'}
                                onCheckedChange={(checked) => onChange('point', checked ? 'Y' : 'N')}
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            /> {t('product:reward_points')}
                        </Label>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] h-full border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:reward_restriction')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                    <Label className="text-sm font-medium">
                        <Checkbox
                            id="restricted-reward"
                            checked={data.restrictedReward === 'Y'}
                            onCheckedChange={(checked) => onChange('restrictedReward', checked ? 'Y' : 'N')}
                            className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                        />
                        {t('product:exclude_membership')}
                    </Label>
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('product:target_audience')}</Label>
                    </div>
                    <div className="gap-4 p-5">
                        <div className="flex items-center">
                            <RadioGroup defaultValue={data.targetMember} onValueChange={(value) => onChange('targetMember', value)} className="flex gap-6">
                                <Label className="flex items-center gap-2 w-30">
                                    <RadioGroupItem value="all_members" /> {t('product:all_members')}
                                </Label>
                                <Label className="flex items-center gap-2 w-30">
                                    <RadioGroupItem value="specific_members" /> {t('product:specific_members')}
                                </Label>
                                {data.targetMember === 'specific_members' && (
                                    <Input type="text" placeholder="아이디(이메일) 입력" value={inputValue} onChange={handleInputChange} onKeyPress={handleInputKeyPress} className="w-40" />
                                )}
                                <Label className="flex items-center gap-2 min-w-30">
                                    <RadioGroupItem value="member_by_tier" /> {t('product:member_by_tier')}
                                </Label>
                                <Select defaultValue={data.grade} onValueChange={(value) => onChange('grade', value)} disabled={data.targetMember !== 'member_by_tier'}>
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
                            </RadioGroup>
                        </div>
                        {data.targetMember === 'specific_members' && (
                            <div className="email-tags-container flex flex-wrap gap-2 mt-2">
                                {/* email-tag  */}
                                {data.emails.map((email, index) => (
                                    <div key={index} className="bg-[#E9E6E0] rounded-lg !px-2 !py-1 flex items-center gap-2 w-fit">
                                        <span className="text-[#5E5955]">{email}</span>
                                        <Button className="!p-0 text-[#C0BCB6]" onClick={() => handleRemoveEmail(email)}>
                                            <X className="!w-4 !h-4" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    {/* 첫 번째 행 */}
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:minimum_quantity')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <Input type="number" className="w-14" value={data.minOrderCount} onChange={(e) => onChange('minOrderCount', e.target.value)} /><span>{t('product:more')}</span>
                    </div>
                    <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] h-full border-b text-[#6F6963]">
                        <Label className="font-semibold">{t('product:maximum_quantity')}</Label>
                    </div>
                    <div className="flex gap-2 items-center p-5 h-full">
                        <RadioGroup defaultValue={data.hasLimitCount} onValueChange={(value) => onChange('hasLimitCount', value)} className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="no_limit" /> {t('product:no_limit')}
                            </Label>
                            <Label className="flex items-center gap-2">
                                <RadioGroupItem value="limit" /> <Input type="number" className="w-14" value={data.maxOrderCount} onChange={(e) => onChange('maxOrderCount', e.target.value)} disabled={data.hasLimitCount !== 'limit'} /><span>{t('product:limit_to')}</span>
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
                        <Label className="text-sm font-medium flex gap-2 items-center">
                            <Checkbox
                                id="show-domestic"
                                checked={data.showDomestic === 'Y'}
                                onCheckedChange={(checked) => onChange('showDomestic', checked ? 'Y' : 'N')}
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            /> 
                            {t('product:domestic')}
                        </Label>
                        <Label className="text-sm font-medium flex gap-2 items-center">
                            <Checkbox
                                id="show-abroad"
                                checked={data.showAbroad === 'Y'}
                                onCheckedChange={(checked) => onChange('showAbroad', checked ? 'Y' : 'N')}
                                className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            />
                            {t('product:international')}
                        </Label>
                    </div>
                </div>
            </div>
        </section>
    )
}
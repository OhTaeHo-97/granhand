'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { RefreshCwIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "../../../../../../utils/localization/client";
import MembershipLevelSelect from "../../components/membership-level";

export default function MemberHeader() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member'])

    const [category, setCategory] = useState('')
    const personalInfos = [
        { label: t('member:all'), value: 'all' },
        { label: t('member:id'), value: 'id' },
        { label: t('member:phone'), value: 'phone' },
        { label: t('member:name'), value: 'name' }
    ]
    // const levels = [
    //     { label: t('member:all_membership'), value: 'all_membership' },
    //     { label: 'VIP', value: 'vip' },
    //     { label: 'Gold', value: 'gold' },
    //     { label: 'Silver', value: 'silver' },
    //     { label: 'Bronze', value: 'bronze' },
    //     { label: 'Basic', value: 'basic' }
    // ]
    const types = [
        {label: t('member:regular'), value: 'regular'},
        {label: t('member:restricted'), value: 'restricted'},
        {label: t('member:withdrawn'), value: 'withdrawn'}
    ]

    const levels = [
        { label: t('member:all_membership'), value: 'all_membership' },
        { label: 'VIP', value: 'vip' },
        { label: 'Gold', value: 'gold' },
        { label: 'Silver', value: 'silver' },
        { label: 'Bronze', value: 'bronze' },
        { label: 'Basic', value: 'basic' }
    ]

    return (
        <div className="p-6 shadow-sm space-y-4 mb-12">
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white">
                <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('member:personal_info')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select defaultValue='all'>
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
                            <SelectValue placeholder={t('member:all')} />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                {personalInfos.map(({ label, value }) => (
                                    <SelectItem key={value} value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Input
                            type="text"
                            placeholder={t('member:personal_info_placeholder')}
                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                        />
                    </div>
                    <div className="bg-[#322A2408] border-r border-l border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('member:membership_level')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select defaultValue="all_membership">
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-40 h-8">
                            <SelectValue placeholder={t('member:all_membership')} />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                {levels.map(({ label, value }) => (
                                    <SelectItem value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    {/* <MembershipLevelSelect /> */}
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('member:member_type')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <RadioGroup
                        className="flex items-center gap-4 p-2"
                        onValueChange={setCategory}
                        value={category}
                    >
                        {types.map(({ label, value }) => (
                            <Label key={value}
                            className="mr-1"
                            >
                                <RadioGroupItem
                                    value={value}
                                >
                                    <span className="text-sm text-[#231815B2]">{label}</span>
                                </RadioGroupItem>
                                <span className="text-sm text-[#231815B2] ml-2">{label}</span>
                            </Label>
                        ))}
                    </RadioGroup>
                    </div>
                </div>
            </div>
        </div>

        // <>
        //     <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white">
        //         {/* 필터 표 */}
        //         <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-14">
        //             {/* 첫 번째 행 */}
        //             <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 border-b">
        //                 {t('member:personal_info')}
        //             </div>
        //             <div className="flex gap-2 items-center p-2">
        //             <Select defaultValue='all'>
        //                 <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
        //                 <SelectValue placeholder={t('member:all')} />
        //                 </SelectTrigger>
        //                 <SelectContent className="bg-white border rounded shadow-md">
        //                     {personalInfos.map(({ label, value }) => (
        //                         <SelectItem key={value} value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
        //                     ))}
        //                 </SelectContent>
        //             </Select>
        //             <Input
        //                 type="text"
        //                 placeholder={t('member:personal_info_placeholder')}
        //                 className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
        //             />
        //             </div>
        //             <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#322A2408] h-14 border-b">
        //                 {t('member:membership_level')}
        //             </div>
        //             <div className="flex items-center p-2">
        //             {/* <Select defaultValue="all_membership">
        //                 <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-40 h-8">
        //                 <SelectValue placeholder={t('member:all_membership')} />
        //                 </SelectTrigger>
        //                 <SelectContent className="bg-white border rounded shadow-md">
        //                     {levels.map(({ label, value }) => (
        //                         <SelectItem value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
        //                     ))}
        //                 </SelectContent>
        //             </Select> */}
        //             <MembershipLevelSelect />
        //             </div>
        //         </div>

        //         {/* 두 번째 행 */}
        //         <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-14">
        //             <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2">
        //                 {t('member:member_type')}
        //             </div>
        //             <div className="flex items-center gap-4 p-2">
        //             <RadioGroup
        //                 className="flex items-center gap-4 p-2"
        //                 onValueChange={setCategory}
        //                 value={category}
        //             >
        //                 {types.map(({ label, value }) => (
        //                     <Label key={value}
        //                     className="mr-1"
        //                     >
        //                         <RadioGroupItem
        //                             value={value}
        //                         >
        //                             <span className="text-sm text-[#231815B2]">{label}</span>
        //                         </RadioGroupItem>
        //                         <span className="text-sm text-[#231815B2] ml-2">{label}</span>
        //                     </Label>
        //                 ))}
        //             </RadioGroup>
        //             </div>
        //         </div>
        //     </div>
        //     {/* 버튼 */}
        //     <div className="flex gap-2 justify-center p-4">
        //         <Button className="border rounded px-6 py-1 flex items-center gap-1 text-[#322A24]">
        //         <RefreshCwIcon className="w-4 h-4" /> {t('reset')}
        //         </Button>
        //         <Button className="bg-[#322A24] text-white rounded px-6 py-1 flex items-center gap-1">
        //         <SearchIcon className="w-4 h-4" /> {t('search')}
        //         </Button>
        //     </div>
        // </>
    )
}
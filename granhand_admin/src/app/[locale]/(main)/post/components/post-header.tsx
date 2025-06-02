'use client'

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Search } from "lucide-react";

export default function PostHeader({ category, setCategory, fetchBoards }: { category: string, setCategory: React.Dispatch<React.SetStateAction<string>>, fetchBoards: (value?: string) => Promise<void> }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'post'])
    // const [category, setCategory] = useState('all')
    const [searchCategory, setSearchCategory] = useState('title')
    const [keyword, setKeyword] = useState('')

    const onClickSearch = async () => {
        await fetchBoards(category)
    }

    // const dateFilters = [
    //     { label: t('order:order_date'), value: 'order_date' },
    //     { label: t('order:ship_date'), value: 'ship_date' },
    //     { label: t('order:delivery_complete_date'), value: 'delivery_complete_date' }
    // ]

    // const filterCategories = [
    //     { label: t('order:all'), value: 'all' },
    //     { label: t('order:buyer_name'), value: 'buyer_name' },
    //     { label: t('order:buyer_contact'), value: 'buyer_contact' },
    //     { label: t('order:buyer_id'), value: 'buyer_id' },
    //     { label: t('order:recipient_name'), value: 'recipient_name' },
    //     { label: t('order:order_number'), value: 'order_number' },
    //     { label: t('product:product_code'), value: 'product_code' },
    //     { label: t('order:domestic_order'), value: 'domestic_order' },
    //     { label: t('order:international_order'), value: 'international_order' },
    //     { label: t('order:engraving_order'), value: 'engraving_order' }
    // ]

    return (
        <>
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 mt-10">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('post:category')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-34">
                                <SelectValue placeholder={t('post:all')} />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="all" className="px-3 py-2 cursor-pointer">{t('post:all')}</SelectItem>
                                <SelectItem value="event" className="px-3 py-2 cursor-pointer">{t('post:event')}</SelectItem>
                                <SelectItem value="notice" className="px-3 py-2 cursor-pointer">{t('post:notice')}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('post:detailed_filter')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <Select value={searchCategory} onValueChange={setSearchCategory}>
                        <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-34">
                            <SelectValue placeholder={t('post:title')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            <SelectItem value="title" className="px-3 py-2 cursor-pointer">{t('post:title')}</SelectItem>
                            <SelectItem value="content" className="px-3 py-2 cursor-pointer">{t('post:content')}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder={t('post:search')}
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                    />
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32">
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32" onClick={onClickSearch}>
                    <Search />
                    {t('search')}
                </Button>
            </div>
        </>
    )
}
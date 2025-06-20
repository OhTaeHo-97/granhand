'use client'

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import PeriodElement from "../../components/period";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

// interface Props<T> {
//     items: T[]
//     onItemChange: (item: T) => void
//     fechDatas: () => Promise<void>
// }

// export default function OrderFilter({ items, onItemChange, fetchDatas }: Props<T>) {
// export default function OrderFilter({ contents, fetchDatas }: { contents: any[], fetchDatas: () => Promise<void> }) {
export default function OrderFilter() {
    const [periodCategory, setPeriodCategory] = useState('order_date')
    const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    const [endDate, setEndDate] = useState<Date | undefined>(new Date())
    const [quickRange, setQuickRange] = useState('')
    const [filterCategory, setFilterCategory] = useState('all')
    const [keyword, setKeyword] = useState('')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'order', 'push'])
    // const currentLocale = useCurrentLocale()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const router = useRouter()

    const dateFilters = [
        { label: t('order:order_date'), value: 'order_date' },
        { label: t('order:ship_date'), value: 'ship_date' },
        { label: t('order:delivery_complete_date'), value: 'delivery_complete_date' }
    ]

    const filterCategories = [
        { label: t('order:all'), value: 'all' },
        { label: t('order:buyer_name'), value: 'buyer_name' },
        { label: t('order:buyer_contact'), value: 'buyer_contact' },
        { label: t('order:buyer_id'), value: 'buyer_id' },
        { label: t('order:recipient_name'), value: 'recipient_name' },
        { label: t('order:order_number'), value: 'order_number' },
        { label: t('product:product_code'), value: 'product_code' },
        { label: t('order:domestic_order'), value: 'domestic_order' },
        { label: t('order:international_order'), value: 'international_order' },
        { label: t('order:engraving_order'), value: 'engraving_order' }
    ]

    const handleInitiate = () => {
        setPeriodCategory('order_date')
        setStartDate(new Date())
        setEndDate(new Date())
        setQuickRange('')
        setFilterCategory('all')
        setKeyword('')
    }

    const handleSearch = () => {
        const params = new URLSearchParams(searchParams)
        params.set('searchPeriod', periodCategory)
        if(startDate) {
            params.set('startDate', `${startDate.getFullYear()}.${String(startDate.getMonth() + 1).padStart(2, '0')}.${String(startDate.getDate()).padStart(2, '0')}`)
        }
        if(endDate) {
            params.set('endDate', `${endDate.getFullYear()}.${String(endDate.getMonth() + 1).padStart(2, '0')}.${String(endDate.getDate()).padStart(2, '0')}`)
        }
        params.set('filter', filterCategory)
        params.set('q', keyword)

        router.push(`${pathname}?${params.toString()}`)
    }

    // const onClickSearch = () => {
    //     fetchDatas()
    // }

    return (
        <>
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 mt-10">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('order:search_period')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select value={periodCategory} onValueChange={setPeriodCategory}>
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-34">
                                <SelectValue placeholder="주문일" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                {dateFilters.map(({ label, value }) => (
                                    <SelectItem key={value} value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <PeriodElement startDate={startDate} endDate={endDate} quickRange={quickRange} setStartDate={setStartDate} setEndDate={setEndDate} setQuickRange={setQuickRange} t={t} />
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('order:filters')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <Select value={filterCategory} onValueChange={setFilterCategory}>
                        <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-34">
                        <SelectValue placeholder="전체" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            {filterCategories.map(({ label, value }) => (
                                <SelectItem key={value} value={value} className="px-3 py-2 cursor-pointer">{label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Input
                        type="text"
                        placeholder={t('search')}
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                    />
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32" onClick={handleInitiate}>
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32" onClick={handleSearch}>
                    <Search />
                    {t('search')}
                </Button>
            </div>
        </>
    )
}
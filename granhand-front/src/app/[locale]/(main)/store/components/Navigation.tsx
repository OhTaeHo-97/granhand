'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "../../../../../../utils/localization/client"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function StoreNavigation() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'store'])
    const currentLocale = useCurrentLocale()

    const [selectedStore, setSelectedStore] = useState('granhand')
    const [selectedPlace, setSelectedPlace] = useState('gwanghwa')

    const stores = [{label: t('granhand'), value: 'granhand'}, {label: t('komfortabel'), value: 'komfortabel'}]
    const locations = [{label: t('store:gwanghwa'), value: 'gwanghwa'}, {label: t('store:dosan'), value: 'dosan'}, {label: t('store:namsan'), value: 'namsan'}, {label: t('store:mapo'), value: 'mapo'}, {label: t('store:seochon'), value: 'seochon'}, {label: t('store:sogyeok'), value: 'sogyeok'}, {label: t('store:bukchon'), value: 'bukchon'}, {label: t('store:seogyo'), value: 'seogyo'}]

    const handleStoreChange = (store: string) => {
        setSelectedStore(store)
        const params = new URLSearchParams(searchParams)
        params.set('store', store)
        params.set('place', selectedPlace)

        router.push(`${currentLocale}/store?${params.toString()}`)
    }

    const handlePlaceChange = (place: string) => {
        setSelectedPlace(place)
        const params = new URLSearchParams(searchParams)
        params.set('store', selectedStore)
        params.set('place', place)

        router.push(`${currentLocale}/store?${params.toString()}`)
    }

    useEffect(() => {
        const store = searchParams.get('store')
        const storeList = stores.map(store => store.value)
        if(store && !storeList.includes(store)) notFound()
        if(store) setSelectedStore(store)
        const place = searchParams.get('place')
        const locationList = locations.map(loc => loc.value)
        if(place && !locationList.includes(place)) notFound()
        if(place) setSelectedPlace(place)
    }, [searchParams])

    return (
        <nav className="w-full flex items-center justify-between border-t pt-4">
            {/* 왼쪽: AWARDS + 드롭다운 */}
            <div className="flex items-center gap-4 h-10">
            <h2 className="text-lg font-medium text-[#6F6963] m-0 p-0 leading-none">STORE</h2>

            <div className="relative">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-xs font-bold flex items-center gap-1 text-[#6F6963]">
                        {t(selectedStore)} <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuContent sideOffset={4} className="bg-[#FDFBF5] border rounded shadow-md p-1 text-sm">
                            {stores.map(({ label, value}) => (
                                <DropdownMenuItem
                                    key={value}
                                    className={cn("text-xs font-medium px-4 py-2 hover:bg-[#322A2408] cursor-pointer text-[#322A244D]",
                                        value === selectedStore && "font-bold text-[#6F6963]"
                                    )}
                                    onSelect={() => handleStoreChange(value)}
                                >
                                    {label}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>
            </div>
            </div>

            {/* 오른쪽: 서브메뉴 */}
            <div className="flex items-center text-sm text-gray-400">
                <RadioGroup
                    value={selectedPlace}
                    onValueChange={handlePlaceChange}
                    // className="flex text-sm"
                    className="flex rounded overflow-hidden gap-[24px]"
                >
                    {locations.map(({ label, value }) => (
                        <Label
                            key={value}
                            className={cn(
                                "text-sm font-bold transition-colors min-w-5 hover:text-[#322A24]",
                                selectedPlace === value
                                    ? "text-[#322A24]"
                                    : "text-[#322A244D]"
                            )}
                        >
                            <RadioGroupItem value={value} className="hidden" />
                            {label}
                        </Label>
                    ))}
                </RadioGroup>
            </div>
        </nav>
    )
}
'use client'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useTranslation } from "../../../../../../utils/localization/client"

export default function StoreNavigation() {
    const searchParams = useSearchParams()
    const router = useRouter()

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'store'])
    const currentLocale = useCurrentLocale()

    const [selectedStore, setSelectedStore] = useState('granhand')
    const [selectedPlace, setSelectedPlace] = useState('gwanghwa')

    const stores = [{label: t('granhand'), value: 'granhand'}, {label: t('comfortable'), value: 'comfortable'}]
    const locations = [{label: t('store:gwanghwa'), value: 'gwanghwa'}, {label: t('store:dosan'), value: 'dosan'}, {label: t('store:namsan'), value: 'namsan'}, {label: t('store:mapo'), value: 'mapo'}, {label: t('store:seochon'), value: 'seochon'}, {label: t('gwanghstore:sogyeokwa'), value: 'sogyeokwa'}, {label: t('store:bukchon'), value: 'bukchon'}, {label: t('store:seogyo'), value: 'seogyo'}]

    const onSelectStore = (store: string) => {
        setSelectedStore(store)
        const params = new URLSearchParams(searchParams)
        params.set('store', store)
        params.set('place', selectedPlace)

        router.push(`${currentLocale}/store?${params.toString()}`)
    }

    const onClickPlace = (place: string) => {
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
            <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">STORE</h2>

            <div className="relative">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-sm flex items-center gap-1 text-gray-600">
                        {t(selectedStore)} <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuContent sideOffset={4} className="bg-white border rounded shadow-md p-1 text-sm">
                            {stores.map(({ label, value}) => (
                                <DropdownMenuItem
                                    key={value}
                                    className={cn("px-4 py-2 hover:bg-gray-100 cursor-pointer",
                                        value === selectedStore && "font-bold text-black"
                                    )}
                                    onSelect={() => onSelectStore(value)}
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
                {locations.map(({ label, value }) => (
                    <Button
                        key={value}
                        onClick={() => onClickPlace(value)}
                        className={`text-sm ${
                            selectedPlace === value
                                ? 'text-black semibold'
                                : 'text-gray-400'
                        } transition-colors min-w-[5%] hover:text-black`}
                    >
                        {label}
                    </Button>
                ))}
            </div>
        </nav>
    )

    // 상단: STORE + 드롭다운 + 서브메뉴
//     <div className="flex justify-between items-center">
//     {/* 왼쪽: STORE + 드롭다운 */}
//     <div className="flex items-center gap-4">
//         <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">STORE</h2>

//         <DropdownMenu>
//             <DropdownMenuTrigger className="text-sm flex items-center gap-1 text-gray-600">
//                 {selectedStore} <ChevronDown className="w-4 h-4" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent sideOffset={4} className="bg-white border rounded shadow-md p-1 text-sm">
//                 {stores.map((store) => (
//                     <DropdownMenuItem
//                         key={store}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
//                         onSelect={() => onSelectStore(store)}
//                     >
//                         {store}
//                     </DropdownMenuItem>
//                 ))}
//             </DropdownMenuContent>
//         </DropdownMenu>
//     </div>

//     {/* 오른쪽: 서브메뉴 */}
//     <div className="flex items-center gap-4 text-sm text-gray-400">
//     {locations.map((loc) => (
//         <button
//             key={loc}
//             onClick={() => onClickPlace(loc)}
//             className={`text-sm ${
//                 selectedPlace === loc
//                     ? 'text-black semibold'
//                     : 'text-gray-400'
//             } hover:text-black transition-colors min-w-[5%]`}
//         >
//             {loc}
//         </button>
//     ))}
//     </div>
// </div>
}
'use client'

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { notFound, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

const stores = ['그랑핸드', '콤포타블']
const locations = ['광화문', '도산', '남산', '미포', '서촌', '소격', '북촌', '서교']

export default function StoreNavigation() {
    const [selectedStore, setSelectedStore] = useState('그랑핸드')
    const [selectedPlace, setSelectedPlace] = useState('광화문')
    const searchParams = useSearchParams()
    const router = useRouter()

    const onSelectStore = (store: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('store', store)
        params.set('place', selectedPlace)

        router.push(`/store?${params.toString()}`)
    }

    const onClickPlace = (place: string) => {
        const params = new URLSearchParams(searchParams)
        params.set('store', selectedStore)
        params.set('place', place)

        router.push(`/store?${params.toString()}`)
    }

    useEffect(() => {
        const store = searchParams.get('store')
        if(store && !stores.includes(store)) notFound()
        if(store) setSelectedStore(store)
        const place = searchParams.get('place')
        if(place && !locations.includes(place)) notFound()
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
                        {selectedStore} <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuContent sideOffset={4} className="bg-white border rounded shadow-md p-1 text-sm">
                            {stores.map((store) => (
                                <DropdownMenuItem
                                    key={store}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onSelect={() => onSelectStore(store)}
                                >
                                    {store}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>
            </div>
            </div>

            {/* 오른쪽: 서브메뉴 */}
            <div className="flex items-center text-sm text-gray-400">
                {locations.map((loc) => (
                    <Button
                        key={loc}
                        onClick={() => onClickPlace(loc)}
                        className={`text-sm ${
                            selectedPlace === loc
                                ? 'text-black semibold'
                                : 'text-gray-400'
                        } transition-colors min-w-[5%] hover:text-black`}
                    >
                        {loc}
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
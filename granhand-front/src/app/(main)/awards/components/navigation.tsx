'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const awards = ['필름사진상', '사생대회', '문예공모전']
const categories = [{label: '행사안내', value: ''}, {label: '참가접수', value: 'registration'}, {label: '당선작', value: 'winner'}]

export default function NavigationBar() {
    const [selectedMenu, setSelectedMenu] = useState('필름사진상')
    const [selectedCategory, setSelectedCategory] = useState('')
    const router = useRouter()
    const params = useSearchParams()
    const path = usePathname()

    const onSelectMenu = (menu: string) => {
        const param = new URLSearchParams(params)
        param.set('menu', menu)
        const pathname = selectedCategory ? `/${selectedCategory}` : ''
        router.push(`/awards${pathname}?${param.toString()}`)
    }

    const onSelectCategory = (category: string) => {
        setSelectedCategory(category)
        const param = new URLSearchParams(params)
        param.set('menu', selectedMenu)
        const pathname = category ? `/${category}` : ''
        router.push(`/awards${pathname}?${param.toString()}`)
    }

    useEffect(() => {
        const menu = params.get('menu')
        if(menu) setSelectedMenu(menu)

        const paths = path.split('/')
        if(paths.length < 3) setSelectedCategory('')
        else {
            categories.map(({ value }) => {
                if(paths[2] === value) {
                    setSelectedCategory(value)
                }
            })
        }
    }, [params])

    return (
        // 상단 네비게이션
        <nav className="w-full flex items-center justify-between border-t pt-4">
            {/* 왼쪽: AWARDS + 드롭다운 */}
            <div className="flex items-center gap-4 h-10">
            <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">AWARDS</h2>

            <div className="relative">
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-sm flex items-center gap-1 text-gray-600">
                        {selectedMenu} <ChevronDown className="w-4 h-4" />
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuContent sideOffset={4} className="bg-white border rounded shadow-md p-1 text-sm">
                            {awards.map((award) => (
                                <DropdownMenuItem
                                    key={award}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                    onSelect={() => onSelectMenu(award)}
                                >
                                    {award}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>
            </div>
            </div>

            {/* 오른쪽: 서브메뉴 */}
            <div className="flex items-center text-sm text-gray-400">
                {categories.map(({ label, value }) => (
                    <Button
                        key={value}
                        onClick={() => onSelectCategory(value)}
                        className={`text-sm ${
                            selectedCategory === value
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
}
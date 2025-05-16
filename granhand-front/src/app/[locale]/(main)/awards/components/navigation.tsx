'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../../../utils/localization/client";

export default function NavigationBar() {
    const router = useRouter()
    const params = useSearchParams()
    const path = usePathname()

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'awards'])
    const currentLocale = useCurrentLocale()

    const awards = [{label: t('awards:film'), value: 'awards:film'}, {label: t('awards:sketching'), value: 'awards:sketching'}, {label: t('awards:literary'), value: 'awards:literary'}]
    // const awards = [t('awards:film'), t('awards:sketching'), t('awards:literary')]
    const categories = [{label: t('awards:event'), value: ''}, {label: t('awards:entry'), value: 'entry'}, {label: t('awards:winning'), value: 'winning'}]

    const [selectedMenu, setSelectedMenu] = useState(t('awards:film'))
    const [selectedCategory, setSelectedCategory] = useState('')

    const onSelectMenu = (menu: string) => {
        const param = new URLSearchParams(params)
        param.set('menu', menu)
        console.log('menu: ', menu)
        const pathname = selectedCategory ? `/${selectedCategory}` : ''
        console.log('selectedCategory: ', selectedCategory)
        console.log('param: ', param.toString())
        router.push(`${currentLocale}/awards${pathname}?${param.toString()}`)
    }

    const onSelectCategory = (category: string) => {
        setSelectedCategory(category)
        const param = new URLSearchParams(params)
        param.set('menu', selectedMenu)
        const pathname = category ? `/${category}` : ''
        router.push(`${currentLocale}/awards${pathname}?${param.toString()}`)
    }

    useEffect(() => {
        const menu = params.get('menu')
        if(menu) setSelectedMenu(menu)

        const paths = path.split('/')
        const baseLength = currentLocale === '' ? 3 : 4
        if(paths.length < baseLength) setSelectedCategory('')
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
        <nav className="w-full flex items-center justify-between border-t pt-4 min-w-fit">
            {/* 왼쪽: AWARDS + 드롭다운 */}
            <div className="flex items-center gap-4 h-10">
                <h2 className="text-lg font-medium text-gray-900 m-0 p-0 leading-none">AWARDS</h2>

                <div className="relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm flex items-center gap-1 text-gray-600 min-w-fit">
                            {t(selectedMenu)} <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>

                        <DropdownMenuPortal>
                            <DropdownMenuContent sideOffset={4} className="bg-white border rounded shadow-md p-1 text-sm">
                                {awards.map(({ label, value }) => (
                                    <DropdownMenuItem
                                        key={value}
                                        className={cn("px-4 py-2 hover:bg-gray-100 cursor-pointer min-w-fit",
                                            value === selectedMenu && "font-bold text-black"
                                        )}
                                        onSelect={() => onSelectMenu(value)}
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
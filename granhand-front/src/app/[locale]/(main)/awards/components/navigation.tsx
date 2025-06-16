'use client'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../../../utils/localization/client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function NavigationBar() {
    const router = useRouter()
    const params = useSearchParams()
    const path = usePathname()

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'awards'])
    const currentLocale = useCurrentLocale()

    const awards = [{label: t('awards:film'), value: 'film'}, {label: t('awards:sketching'), value: 'sketching'}, {label: t('awards:literary'), value: 'literary'}]
    // const awards = [{label: t('awards:film'), value: 'awards:film'}, {label: t('awards:sketching'), value: 'awards:sketching'}, {label: t('awards:literary'), value: 'awards:literary'}]
    // const awards = [t('awards:film'), t('awards:sketching'), t('awards:literary')]
    const categories = [{label: t('awards:event'), value: ''}, {label: t('awards:entry'), value: 'entry'}, {label: t('awards:winning'), value: 'winning'}]

    const [selectedMenu, setSelectedMenu] = useState(t('film'))
    const [selectedCategory, setSelectedCategory] = useState('')

    const handleSelectedMenuChange = (menu: string) => {
        const param = new URLSearchParams(params)
        param.set('menu', menu)
        console.log('menu: ', menu)
        const pathname = selectedCategory ? `/${selectedCategory}` : ''
        console.log('selectedCategory: ', selectedCategory)
        console.log('param: ', param.toString())
        router.push(`${currentLocale}/awards${pathname}?${param.toString()}`)
    }

    const handleSelectedCategoryChange = (category: string) => {
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
                <h2 className="text-lg font-medium text-[#6F6963] m-0 p-0 leading-none">AWARDS</h2>

                <div className="relative">
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-xs flex items-center gap-1 text-[#6F6963] font-bold min-w-fit">
                            {t(`awards:${selectedMenu}`)} <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>

                        <DropdownMenuPortal>
                            <DropdownMenuContent sideOffset={4} className="bg-[#FDFBF5] border rounded shadow-md p-1 text-sm">
                                {awards.map(({ label, value }) => (
                                    <DropdownMenuItem
                                        key={value}
                                        className={cn("text-xs font-medium px-4 py-2 hover:bg-[#322A2408] cursor-pointer min-w-fit text-[#322A244D]",
                                            value === selectedMenu && "font-bold text-[#6F6963]"
                                        )}
                                        onSelect={() => handleSelectedMenuChange(value)}
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
                    value={selectedCategory}
                    onValueChange={handleSelectedCategoryChange}
                    // className="flex text-sm"
                    className="flex rounded overflow-hidden gap-[24px]"
                >
                    {categories.map(({ label, value }) => (
                        <Label
                            key={value}
                            className={cn(
                                "text-sm font-bold transition-colors min-w-[5%] hover:text-[#322A24]",
                                selectedCategory === value
                                    ? "text-[#322A24]"
                                    : "text-[#322A244D]"
                            )}
                        >
                            <RadioGroupItem value={value} className="hidden" />
                            {label}
                        </Label>
                    ))}
                </RadioGroup>
                {/* {categories.map(({ label, value }) => (
                    <Button
                        key={value}
                        onClick={() => handleSelectedCategoryChange(value)}
                        className={`text-sm ${
                            selectedCategory === value
                                ? 'text-black semibold'
                                : 'text-gray-400'
                        } transition-colors min-w-[5%] hover:text-black`}
                    >
                        {label}
                    </Button>
                ))} */}
            </div>
        </nav>
    )
}
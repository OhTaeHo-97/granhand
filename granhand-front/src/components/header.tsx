'use client'

import { Globe, Home, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslation } from "../../utils/localization/client";
import { fallbackLng, LocaleTypes } from "../../utils/localization/settings";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { cn } from "@/lib/utils";

export default function Header() {
    const router = useRouter()
    const pathname = usePathname()
    const locale = useLocaleAsLocaleTypes()
    const currentLocale = useCurrentLocale()
    const { t, i18n } = useTranslation(locale, 'common')

    const segmentsPath = pathname.slice(1).split('/')
    const withoutLocalePath = locale === fallbackLng ? segmentsPath : segmentsPath.slice(1)
    const searchParams = useSearchParams()

    const changeLanguage = (locale: LocaleTypes) => {
        // 쿼리스트링 만들기
        const paramsObj = Object.fromEntries(searchParams.entries())
        const queryString = new URLSearchParams(paramsObj).toString()

        // 클라이언트측 언어 변경
        i18n.changeLanguage(locale)

        // locale에 맞는 요청 전송
        if(locale === 'ko') {
            router.push(`/${withoutLocalePath.join('/')}?${queryString}`)
        } else {
            router.push(`/${locale}/${withoutLocalePath.join('/')}?${queryString}`) // URL에 언어 반영
        }
    }

    return (
        <header className="flex items-center justify-between py-4 container mx-auto px-6">
            {/* bg-[#faf6ee] */}
            {/* 왼쪽: 로고 */}
            <Link href={currentLocale === '' ? '/' : currentLocale} className="text-2xl font-bold text-[#322A24]">
                GRANHAND.
            </Link>

            {/* 오른쪽: 아이콘 + 로그인 */}
            <div className="flex items-center gap-8">
                <Link href={currentLocale === '' ? '/' : currentLocale}>
                <Home className="w-5 h-5 text-[#5E5955]" />
                </Link>
                <Link href={`${currentLocale}/search`}>
                <Search className="w-5 h-5 text-[#5E5955]" />
                </Link>
                <Link href={`${currentLocale}/cart`}>
                <ShoppingBag className="w-5 h-5 text-[#5E5955]" />
                </Link>
                <Link href={`${currentLocale}/my-page`}>
                <User className="w-5 h-5 text-[#5E5955]" />
                </Link>
                <DropdownMenu>
                    <DropdownMenuTrigger className="text-sm flex items-center gap-1 text-[#5E5955]">
                        {/* {selectedStore} <ChevronDown className="w-4 h-4" /> */}
                        <Globe className="w-5 h-5 text-[#5E5955]" />
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuContent sideOffset={4} className="bg-[#FDFBF5] border rounded shadow-md p-1 text-sm text-[#322A244D]">
                            <DropdownMenuItem
                                key='ko'
                                className={cn("text-xs font-medium px-4 py-2 hover:bg-[#322A2408] cursor-pointer",
                                    locale === 'ko' && "font-bold text-[#322A24]"
                                )}
                                onSelect={() => changeLanguage('ko')}
                            >
                                한국어
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                key="en"
                                className={cn("text-xs font-medium px-4 py-2 hover:bg-[#322A2408] cursor-pointer",
                                    locale === "en" && "font-bold text-[#322A24]"
                                )}
                                onSelect={() => changeLanguage("en")}
                            >
                                English
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>
                {/* <Link href="/button">
                <Globe className="w-5 h-5 text-gray-600" />
                </Link> */}
                <Link
                href={`${currentLocale}/login`}
                className="px-4 py-2 border !border-[#C0BCB6] rounded text-sm text-[#322A24] font-[700] hover:bg-[#f5f3ef] min-w-30 text-center justify-center items-center"
                >
                    {/* border-gray-400 */}
                    {/* text-gray-800 */}
                {/* 로그인 */}
                {t('login')}
                </Link>
            </div>
        </header>
    )
}
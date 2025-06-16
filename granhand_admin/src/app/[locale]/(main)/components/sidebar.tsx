'use client'

import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightIcon, GlobeIcon, LayoutGridIcon } from "lucide-react";
import SidebarElement from "./sidebar-elem";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocales";
import { fallbackLng, LocaleTypes } from "../../../../../utils/localization/settings";
import { useTranslation } from "../../../../../utils/localization/client";

export default function MainSidebar() {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const locale = useLocaleAsLocaleTypes()
    const segmentsPath = pathname.slice(1).split('/')
    const withoutLocalePath = locale === fallbackLng ? segmentsPath : segmentsPath.slice(1)
    const { t, i18n } = useTranslation(locale, 'common')
    const currentLocale = useCurrentLocale()

    const memberManage = [
        { title: t('member_list'), url: '/member' },
        { title: t('app_push'), url: '/push' },
        { title: t('naver_cloud'), url: '/cloud' },
    ]

    const productElems = [
        { title: t('product_manage'), url: '/product' },
        { title: t('category_manage'), url: '/product/category' }
    ]

    const orderElems = [
        { title: t('all_orders'), url: '/order/all' },
        { title: t('order_manage'), url: '/order' },
        { title: t('cancel_manage'), url: '/order/cancel' },
        { title: t('exchange_manage'), url: '/order/exchange' },
        { title: t('return_manage'), url: '/order/refund' },
        { title: t('ship_settings'), url: '/delivery' },
    ]

    const shoppingElems = [
        { title: t('point_manage'), url: '/point' },
        { title: t('coupon_manage'), url: '/coupon' }
    ]
    const contentsElems = [
        { title: t('journal_manage'), url: '/journal' },
        // { title: t('event_manage'), url: '/event' },
        { title: t('challenge_manage'), url: '/challenge' },
        { title: t('wallpaper_manage'), url: '/wallpaper' },
        { title: t('partnership_manage'), url: '/coop' },
        { title: t('store_manage'), url: '/store' },
        { title: t('banner_manage'), url: '/banner' },
        // { title: t('notice_manage'), url: '/notice' },
        { title: t('fragrance_manage'), url: '/scent' },
        { title: t('faq_manage'), url: '/faq' },
        { title: t('post_manage'), url: '/post' },
    ]
    const staticElems = [
        { title: t('overview'), url: '/statistic/overview' },
        { title: t('sales'), url: '/statistic/sales' },
        { title: t('period_analysis'), url: '/statistic/periodic' },
        { title: t('google_analytics'), url: '/statistic/analytics' },
    ]
    
    const isRoot = () => pathname === '/' || pathname === '/en'
    
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
        <aside className="w-64 border-r p-4 h-screen min-w-64">
            <div className="space-y-6 mt-8 mx-auto p-5">
            {/* <div className="flex items-center gap-4"> */}
            <div className="text-[#6f6963] text-sm space-y-2">
            {/* 언어 선택 */}
                <div className="flex items-center gap-1">
                    <Select defaultValue={locale === 'en' ? 'en' : 'ko'} onValueChange={(value) => changeLanguage(value as LocaleTypes)}>
                        <SelectTrigger className="inline-flex border-none items-center gap-1 focus:outline-none p-0">
                            <div className="flex items-center gap-2 text-[#5E5955]">
                                <GlobeIcon className="w-4 h-4" /><SelectValue placeholder={locale === 'en' ? 'English' : '한국어'} />
                            </div>
                        </SelectTrigger>
                        <SelectContent className='bg-white border rounded shadow-md'>
                        <SelectItem value="ko" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">한국어</SelectItem>
                        <SelectItem value="en" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">English</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* 사이트 바로가기 */}
                <div className="flex items-center gap-2 cursor-pointer hover:underline text-[#5E5955]">
                    <ArrowRightIcon className="w-4 h-4" />
                    <span>{t('web_shortcut')}</span>
                </div>
                </div>
            </div>
            <div className="space-y-6 mt-8 mx-auto p-5">
            <div className={`px-4 py-2 ${isRoot() && "bg-gray-100 rounded"}`}>
                {/* <Link href="#" className="flex justify-between items-center cursor-pointer font-bold text-gray-700">HOME
                </Link> */}
                <Link href={`${currentLocale}/`}>
                    <div className="flex items-center gap-2 text-[#5E5955] font-bold text-sm">
                        <LayoutGridIcon className="w-4 h-4" />
                        <span>HOME</span>
                    </div>
                </Link>
            </div>
            {/* 마이페이지 섹션 */}
            <SidebarElement title={{ title: t('member_manage'), url: '/member' }} elements={memberManage} />
            <SidebarElement title={{ title: t('product_manage'), url: '/product' }} elements={productElems} />
            <SidebarElement title={{ title: t('order_manage'), url: '/order/all' }} elements={orderElems} />
            <SidebarElement title={{ title: t('shopping_manage'), url: '/product' }} elements={shoppingElems} />
            {/* 회원 정보 섹션 */}
            <SidebarElement title={{ title: t('content_manage'), url: '/journal' }} elements={contentsElems} />
            <SidebarElement title={{ title: t('statistics'), url: '/statistic/overview' }} elements={staticElems} />
            <SidebarElement title={{ title: t('settings'), url: '/settings' }} elements={[]} />
            </div>
        </aside>
    )
}
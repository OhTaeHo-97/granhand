'use client'

import OrderFilter from "../order/components/order-filter"
import { Button } from "@/components/ui/button"
import CouponList from "./components/coupon-list"
import Link from "next/link"
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../utils/localization/client"
// import { useState } from "react"

export default function CouponPage() {
// export default async function CouponPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'coupon'])
    const currentLocale = useCurrentLocale()

    // const [coupons, setCoupons] = useState([])
    // const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    // const [size, setSize] = useState('50')
    
    // const fetchCoupons = async () => {
        
    // }

    // const { locale } = await params
    // const { t } = await translation(locale, ['common', 'coupon'])
    // const currentLocale = getCurrentLocaleFromParams(locale)

    // useEffect(() => {
    //     if(status === 'authenticated') {
    //         fetchCoupons()
    //     }
    // }, [status])

    // useEffect(() => {
    //     if(status === 'authenticated') {
    //         fetchCoupons()
    //     }
    // }, [currentPage, size])

    return (
        <div className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('coupon:coupon_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Link href={`${currentLocale}/coupon/register`}>
                            <Button className="bg-[#322A24] text-white">{t('coupon:issue_coupon')}</Button>
                        </Link>
                    </div>
                </div>

                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <CouponList />
            </div>
        </div>
    )
}
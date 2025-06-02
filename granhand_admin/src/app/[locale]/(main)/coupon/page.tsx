'use client'

// import Pagination from "@/components/pagination"
// import { translation } from "../../../../../utils/localization/locales/server"
import OrderFilter from "../order/components/order-filter"
import { Button } from "@/components/ui/button"
// import { LocaleTypes } from "../../../../../utils/localization/settings"
import CouponList from "./components/coupon-list"
import Link from "next/link"
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useTranslation } from "../../../../../utils/localization/client"
import { useEffect, useState } from "react"
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams"

export default async function CouponPage() {
// export default async function CouponPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'coupon'])
    const currentLocale = useCurrentLocale()

    const [coupons, setCoupons] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [size, setSize] = useState('50')
    
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
                {/* <ExchangeList t={t} /> */}
                <CouponList />
                {/* <CouponList coupons={coupons} fetchCoupons={fetchCoupons} /> */}
                {/* <Pagination totalPages={15} /> */}
            </div>

            {/* <div className="flex min-h-screen text-sm text-[#1A1A1A]">
                <PointList t={t} />
                <Pagination totalPages={15} />
            </div> */}
        </div>
    )

    // {/* ------------------- 좌측 사이드바 ------------------- */}
    // <ProductSidebar />
        
    // {/* ------------------- 우측 콘텐츠 ------------------- */}
    // <main className="flex-1 p-6 space-y-4 w-full">
    //     {/* ------------------- 검색 필터 ------------------- */}
    //     <ProductListHeader />
    //     {/* ------------------- 상품 목록 테이블 ------------------- */}
    //     <ProductList t={t} />
    // </main>

    // <main className="flex-1 border">
    //         {/* <div className="flex justify-between items-center p-12">
    //             <div className="text-black text-sm">
    //                 <h1 className="text-2xl font-bold text-[#5E5955]">{t('product_manage')}</h1>
    //             </div>
    //             <div className="space-x-2">
    //                 <Button variant="outline" className="text-[#5E5955]"><BookOpen className="!w-4 !h-4" />{t('template_manage')}</Button>
    //                 <Button variant="outline" className="text-[#5E5955]"><List className="!w-4 !h-4" />{t('recommendation_manage')}</Button>
    //                 <Link href={`${currentLocale}/product/register`}>
    //                     <Button className="bg-[#322A24] text-white"><Plus className="!w-4 !h-4" />{t('register_product')}</Button>
    //                 </Link>
    //             </div>
    //         </div> */}
    //         <div className="flex justify-between items-center p-12">
    //             <div className="text-black text-sm">
    //                 <h1 className="text-2xl font-bold text-[#5E5955]">{t('point:point_manage')}</h1>
    //             </div>
    //             <div className="space-x-2">
    //                 {/* <Button variant="outline" className="text-[#5E5955]"><BookOpen className="!w-4 !h-4" />{t('template_manage')}</Button>
    //                 <Button variant="outline" className="text-[#5E5955]"><List className="!w-4 !h-4" />{t('recommendation_manage')}</Button>
    //                 <Link href={`${currentLocale}/product/register`}>
    //                     <Button className="bg-[#322A24] text-white">쿠폰 발급</Button>
    //                 </Link> */}
    //                 <Button className="bg-[#322A24] text-white">쿠폰 발급</Button>
    //             </div>
    //         </div>

    //         <div className="flex min-h-screen text-sm text-[#1A1A1A]">
    //             <h1 className="text-2xl font-bold text-[#5E5955]">{t('coupon:issued_coupon_history')}</h1>
    //             {/* 검색 */}
    //             <OrderFilter />

    //             {/* 테이블 */}
    //             {/* <ExchangeList t={t} /> */}
    //             {/* <CouponList t={t} /> */}
    //             <Pagination totalPages={15} />
    //         </div>




    //         {/* <div className="p-12 text-[#231815B2] text-sm space-y-4">
    //             <h1 className="text-2xl font-bold text-[#5E5955]">{t('point:point_manage')}</h1>
    //             <OrderFilter />

    //             <Pagination totalPages={15} />
    //         </div> */}
    //     </main>

    // <main className="flex-1 border">
    //         <div className="p-12 text-black text-sm space-y-4">
    //             <h1 className="text-2xl font-bold">쿠폰 관리</h1>
    //             {/* 검색 */}
    //             <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 mt-16">
    //             <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
    //                 <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
    //                     <Label className="font-semibold">조회 기간</Label>
    //                 </div>
    //                 <div className="flex items-center gap-4 p-5">
    //                     <Select defaultValue="주문일">
    //                         <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
    //                         <SelectValue placeholder="주문일" />
    //                         </SelectTrigger>
    //                         <SelectContent className="bg-white border rounded shadow-md">
    //                             <SelectItem value="주문일" className="px-3 py-2 cursor-pointer">주문일</SelectItem>
    //                             <SelectItem value="이름" className="px-3 py-2 cursor-pointer">이름</SelectItem>
    //                             <SelectItem value="이메일" className="px-3 py-2 cursor-pointer">이메일</SelectItem>
    //                         </SelectContent>
    //                     </Select>
    //                     <div className="flex border border-gray-300 divide-x divide-gray-300 rounded overflow-hidden">
    //                         {quickRanges.map((label, idx) => (
    //                             <Button
    //                                 key={idx}
    //                                 className={`px-4 rounded-none ${
    //                                     idx === 0 ? "bg-gray-300 text-white font-semibold": "bg-white text-gray-800"
    //                                 }`}
    //                             >
    //                                 {label}
    //                             </Button>
    //                         ))}    
    //                     </div>
    //                     <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
    //                     {startDate ? format(startDate, "yyyy.MM.dd") : "날짜 선택"}
    //                     <Popover>
    //                         <PopoverTrigger asChild>
    //                             <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
    //                                 <CalendarIcon className="h-4 w-4" />
    //                             </Button>
    //                         </PopoverTrigger>
    //                         <PopoverContent className="w-auto p-0">
    //                             <Calendar mode="single" selected={startDate} onSelect={setStartDate}></Calendar>
    //                         </PopoverContent>
    //                     </Popover>
    //                     </div>
    //                     <span>~</span>
    //                     <div className="relative border border-gray-300 rounded px-4 py-2 flex items-center gap-2">
    //                         {endDate ? format(endDate, "yyyy.MM.dd") : "날짜 선택"}
    //                         <Popover>
    //                             <PopoverTrigger asChild>
    //                                 <Button variant="ghost" size="icon" className="h-6 w-6 p-0">
    //                                     <CalendarIcon className="h-4 w-4" />
    //                                 </Button>
    //                             </PopoverTrigger>
    //                             <PopoverContent className="w-auto p-0">
    //                                 <Calendar mode="single" selected={endDate} onSelect={setEndDate}></Calendar>
    //                             </PopoverContent>
    //                         </Popover>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
    //                 <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
    //                     <Label className="font-semibold">상세 조건</Label>
    //                 </div>
    //                 <div className="flex items-center gap-4 p-5">
    //                 <Select defaultValue="전체">
    //                     <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
    //                     <SelectValue placeholder="전체" />
    //                     </SelectTrigger>
    //                     <SelectContent className="bg-white border rounded shadow-md">
    //                         <SelectItem value="전체" className="px-3 py-2 cursor-pointer">전체</SelectItem>
    //                         <SelectItem value="이름" className="px-3 py-2 cursor-pointer">이름</SelectItem>
    //                         <SelectItem value="이메일" className="px-3 py-2 cursor-pointer">이메일</SelectItem>
    //                     </SelectContent>
    //                 </Select>
    //                 <input
    //                     type="text"
    //                     placeholder="검색."
    //                     className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
    //                 />
    //                 </div>
    //             </div>
    //             </div>
    //             <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
    //                 <Button className="bg-white text-black border w-32">
    //                     <RefreshCw />
    //                     초기화
    //                 </Button>
    //                 <Button className="bg-black text-white w-32">
    //                     <Search />
    //                     검색
    //                 </Button>
    //             </div>

    //             <div className="p-6 shadow-sm">
    //             <div>
    //             <div className="mb-4 justify-between flex items-center">
    //                 <div className="text-sm font-bold">
    //                     포인트 내역
    //                 </div>
    //                 <div className="flex gap-2">
    //                     <Select defaultValue="50">
    //                         <SelectTrigger className="w-fit">
    //                             <SelectValue />
    //                         </SelectTrigger>
    //                         <SelectContent className="bg-white">
    //                             <SelectItem value="50">50</SelectItem>
    //                             <SelectItem value="이메일">이메일</SelectItem>
    //                             <SelectItem value="전화번호">전화번호</SelectItem>
    //                         </SelectContent>
    //                     </Select>
    //                     <Button className="border ">엑셀 다운로드</Button>
    //                 </div>
    //             </div>
    //             <table className="w-full text-left border-collapse min-w-6xl">
    //                 <thead className="bg-[#f8f4f0] h-14">
    //                     <tr className="border-b text-gray-400">
    //                         <th className="p-2 text-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
    //                         <th className="p-2 text-center">쿠폰번호</th>
    //                         <th className="p-2 text-center">쿠폰명</th>
    //                         <th className="p-2 text-center">쿠폰 적용 상품</th>
    //                         <th className="p-2 text-center">사용 가능 기준 금액</th>
    //                         <th className="p-2 text-center">할인 금액</th>
    //                         <th className="p-2 text-center">사용 가능 기간</th>
    //                         <th className="p-2 text-center">발급수</th>
    //                         <th className="p-2 items-center">관리</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {Array.from({ length: 12 }).map((_, i) => (
    //                     <tr key={i} className="border-b h-14">
    //                         <td className="p-2 items-center"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
    //                         <td className="p-2 text-center">43P249082309DG12</td>
    //                         <td className="p-2 text-center">"Gift Set" 혜택 쿠폰</td>
    //                         <td className="p-2 text-center">그랑핸드 Gift Set 상품</td>
    //                         <td className="p-2 text-center">43,000원</td>
    //                         <td className="p-2 text-center ">10,000원</td>
    //                         <td className="p-2 text-center">2024-01-31 11:59</td>
    //                         <td className="p-2 text-center">제한 없음</td>
    //                         <td className="p-2 items-center">
    //                             <Button className="border bg-white">삭제</Button>
    //                         </td>
    //                     </tr>
    //                     ))}
    //                 </tbody>
    //             </table>

    //             <div className="border bg-[#f8f4f0]">
    //             <div className="border bg-gray-50 px-4 py-2 flex justify-end gap-2 text-sm text-gray-700">
    //                 <span>총 <span className="text-blue-600 cursor-pointer">23건</span></span>
    //                 <span>지급 35,600</span>
    //                 <span>|</span>
    //                 <span>사용 10,000</span>
    //                 <span>|</span>
    //                 <span>회수 10,000</span>
    //             </div>
    //             </div>
    //             </div>
    //             </div>
    //             <Pagination totalPages={15} />
    //         </div>

    //     </main>
}
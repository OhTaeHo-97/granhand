import Pagination from "@/components/pagination"
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";
import OrderStatus from "./components/order-status"
import OrderFilter from "./components/order-filter"
import OrderList from "./components/order-list"

export default async function OrderPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'product', 'order', 'push'])
    const statusList = [
        { label: t('order:all'), count: 205, value: "all" },
        { label: t('order:awaiting_payment'), count: 2, value: "awaiting_payment" },
        { label: t('order:payment_completed'), count: 27, value: "payment_completed" },
        { label: t('order:prepare_ship'), count: 100, value: "prepare_ship" },
        { label: t('order:in_transit'), count: 45, value: "in_transit" },
        { label: t('order:delivery_delayed'), count: 1, value: "delivery_delayed" },
        { label: t('order:delivered'), count: 1, value: "delivered" },
        { label: t('order:confirm_purchase'), count: 1, value: "confirm_purchase" }
    ]

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('order:order_management')}</h1>
                {/* 상품 상태 */ }
                <OrderStatus statusList={statusList} />
                {/* 검색 */}
                <OrderFilter />

                {/* 테이블 */}
                <OrderList category='order_management' />
                <Pagination totalPages={15} />
            </div>
        </main>
    )

    // <div className="p-12 text-black text-sm space-y-4">
    //             <h1 className="text-2xl font-bold">주문 목록</h1>
    //             {/* 상품 상태 */ }
    //             <RadioGroup defaultValue="all" className="flex gap-2">
    //                 {statusList.map((item) => (
    //                     <Label
    //                         key={item.value}
    //                         htmlFor={item.value}
    //                         className="flex items-center gap-1 rounded px-4 py-2 text-sm border cursor-pointer 
    //                         data-[state=checked]:bg-[#c8c3bc] data-[state=checked]:text-white
    //                         bg-gray-50"
    //                     >
    //                         <RadioGroupItem id={item.value} value={item.value} className="hidden" />
    //                         {item.label}{" "}
    //                         <span className={item.count > 0 ? "text-blue-600 font-semibold" : ""}>
    //                             {item.count}
    //                         </span>
    //                     </Label>
    //                 ))}
    //             </RadioGroup>
    //             {/* 검색 */}
    //             <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7">
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


    //             {/* 테이블 */}
    //             <div className="p-6 shadow-sm">
    //             <div>
    //             <div className="mb-4 justify-between flex items-center">
    //                 <div className="text-sm font-bold">
    //                     목록 (총 <span className="text-blue-500 font-bold">303개</span>)
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
    //                     <Button className="border "><Share className="x-4 y-4" />주문 일괄 등록</Button>
    //                     <Button className="border ">관리자 생성 주문</Button>
    //                     <Button className="border bg-black text-white">주문 생성</Button>
    //                 </div>
    //             </div>
    //             <table className="w-full text-left border-collapse min-w-6xl border">
    //                 <thead className="bg-[#f8f4f0] border-t h-20">
    //                     <tr className="border-b text-gray-400">
    //                         <th className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></th>
    //                         <th className="p-2 items-center border"></th>
    //                         <th className="p-2 items-center border">주문일시</th>
    //                         <th className="p-2 text-center border">주문번호</th>
    //                         <th className="p-2 text-center border">구매자</th>
    //                         <th className="p-2 text-center border">주문상품</th>
    //                         <th className="p-2 text-center border">수량</th>
    //                         <th className="p-2 text-center border">주문상태</th>
    //                         <th className="p-2 text-center border">운송장 정보</th>
    //                         <th className="p-2 text-center border">배송정보</th>
    //                         <th className="p-2 text-center border">결제</th>
    //                     </tr>
    //                 </thead>
    //                 <tbody>
    //                     {Array.from({ length: 12 }).map((_, i) => (
    //                     <tr key={i} className="border-b h-14">
    //                         <td className="p-2 items-center border"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
    //                         <td className="p-2 text-center border"><Computer /></td>
    //                         <td className="p-2 text-center border">2024-02-10 16:15:35</td>
    //                         <td className="p-2 text-center border">2024021012345678</td>
    //                         <td className="p-2 text-center border">
    //                             <div className="flex items-start gap-3">
    //                                 {/* 이미지 영역 */}
    //                                 {/* <Image src="/placeholder.png" alt="하이" width={48} height={48} className="w-12 h-12 bg-gray-100 border border-gray-300 flex items-center justify-center text-gray-400 text-xs"/> */}
    //                                     {/* 이미지 없으면 placeholder */}
    //                                     {/* <Image src="/" />
    //                                 </Image> */}

    //                                 {/* 텍스트 영역 */}
    //                                 <div>
    //                                     <div className="font-semibold text-black">홍길동 / 010-1234-5678</div>
    //                                     <div className="flex items-center gap-1 text-gray-400 text-xs mt-1">
    //                                         {/* <span className="text-lg leading-none">•</span> */}
    //                                         <span>honghong@gmail.com</span>
    //                                     </div>
    //                                 </div>
    //                             </div>
    //                         </td>
    //                         <td className="p-2 text-center border">
    //                             <div className="space-y-1 text-sm">
    //                                 <div className="flex items-center gap-1 text-gray-400 text-xs">
    //                                     <span>24021099987651</span>
    //                                 </div>
    //                                 <div className="flex items-center gap-1 font-semibold text-black">Roland Multi Perfume 100ml</div>
    //                                 <div className="flex items-center gap-1 text-gray-400 text-xs">
    //                                     <span>각인 여부 : Y</span>
    //                                 </div>
    //                                 <div className="flex items-center gap-1 text-gray-400 text-xs">
    //                                     <span>문구: GRANHAND</span>
    //                                 </div>
    //                             </div>
    //                         </td>
    //                         <td className="p-2 text-center bodrer">2</td>
    //                         <td className="p-2 text-center border">결제 완료</td>
    //                         <td className="p-2 text-center border">
    //                             <Select defaultValue="대한">
    //                                 <SelectTrigger className="w-fit">
    //                                     <SelectValue />
    //                                 </SelectTrigger>
    //                                 <SelectContent className="bg-white">
    //                                     <SelectItem value="대한">CJ 대한통운</SelectItem>
    //                                     <SelectItem value="한진">한진택배</SelectItem>
    //                                 </SelectContent>
    //                             </Select>
    //                             <Input placeholder="운송장 번호" />
    //                             {/* CJ 대한통운<br/>
    //                             <span className="underline">56780001234</span> */}
    //                         </td>
    //                         <td className="p-2 flex gap-1 flex-wrap items-center justify-center border">
    //                         <div className="flex justify-between gap-4">

    //                             {/* 왼쪽 정보 */}
    //                             <div className="space-y-1 text-sm">
    //                                 <div className="font-semibold text-black">
    //                                     홍길순 / <span className="font-semibold">010-0000-0000</span>
    //                                 </div>
    //                                 <div className="text-gray-400">
    //                                     부산 부산진구 서전로 8<br/>
    //                                     위워크 7층<br/>
    //                                     우) 12345
    //                                 </div>
    //                                 <div className="text-blue-600 mt-1">
    //                                     부재 시 문 앞에 놓아주세요.
    //                                 </div>
    //                             </div>
    //                             {/* 오른쪽 버튼들 */}
    //                             <div className="flex flex-col gap-2 shrink-0">
    //                                 <Button variant="outline" size="sm">안내 문자 발송</Button>
    //                                 <Button variant="outline" size="sm">배송지 수정</Button>
    //                                 <Button variant="outline" size="sm">관리자 메모</Button>
    //                             </div>
    //                             </div>
    //                         </td>
    //                         <td className="p-2 gap-1">
    //                             <Button className="border rounded px-2">결제 내역</Button>
    //                             <Button className="border rounded px-2">주문서</Button>
    //                         </td>
    //                     </tr>
    //                     ))}
    //                 </tbody>
    //             </table>
    //             </div>
    //         </div>
    //         <Pagination totalPages={15} />
    //         </div>
}
'use client';

import { BarChart3, Users, ShoppingBag, FileText, Settings, Home, ChevronDownIcon } from 'lucide-react';
import * as Separator from '@radix-ui/react-separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { SelectValue } from '@radix-ui/react-select';

const data = [
  { date: '2023-11-23', orders: 106, sales: '4,680,000원', netSales: '4,680,000원', visitors: '2,219', signups: 94, inquiries: 1 },
  { date: '2023-11-22', orders: 745, sales: '8,640,000원', netSales: '8,640,000원', visitors: '1,584', signups: 45, inquiries: 2 },
  { date: '2023-11-21', orders: 34, sales: '620,000원', netSales: '620,000원', visitors: '847', signups: 14, inquiries: 5 },
  { date: '2023-11-20', orders: 197, sales: '2,600,000원', netSales: '2,600,000원', visitors: '684', signups: 36, inquiries: 4 },
  { date: '2023-11-19', orders: 382, sales: '14,690,000원', netSales: '14,690,000원', visitors: '1,842', signups: 63, inquiries: 7 },
  { date: '2023-11-18', orders: 375, sales: '6,680,000원', netSales: '6,680,000원', visitors: '2,219', signups: 47, inquiries: 0 },
  { date: '2023-11-17', orders: 328, sales: '7,640,000원', netSales: '7,640,000원', visitors: '1,877', signups: 12, inquiries: 6 },
  { date: '최근 7일 합계', orders: '1,986', sales: '46,931,999원', netSales: '46,931,999원', visitors: '17,907', signups: '1,015', inquiries: 25 },
  { date: '이번 달 합계', orders: '6,478', sales: '94,450,000원', netSales: '94,450,000원', visitors: '2,952', signups: 82, inquiries: 67 },
];

const stats = [
  { title: "신규주문", count: "875", color: "text-red-500" },
  { title: "취소관리", count: "1", color: "text-gray-500" },
  { title: "반품관리", count: "1", color: "text-gray-500" },
  { title: "교환관리", count: "1", color: "text-gray-500" },
  { title: "입금대기 문의", count: "1", color: "text-gray-500" },
];

const salesData = [
  { date: "2023-11-23", orders: 108, amount: "4,680,000", netAmount: "4,680,000", visitors: 2219, signups: 94, inquiries: 1 },
  { date: "2023-11-22", orders: 745, amount: "8,640,000", netAmount: "8,640,000", visitors: 1584, signups: 45, inquiries: 2 },
  { date: "2023-11-21", orders: 34, amount: "620,000", netAmount: "620,000", visitors: 847, signups: 14, inquiries: 5 },
  { date: "2023-11-20", orders: 197, amount: "2,600,000", netAmount: "2,600,000", visitors: 684, signups: 38, inquiries: 4 },
  { date: "2023-11-19", orders: 382, amount: "14,680,000", netAmount: "14,680,000", visitors: 1842, signups: 63, inquiries: 7 },
];

const inquiryData = [
  { date: "2023-11-15", content: "주)하이컨센서에서 접속 제한되었니다.", name: "김민지", phone: "010-8974-6545", status: "답변 대기" },
  { date: "2023-11-14", content: "일어서시오특할구수금어서시오특할구수금일어서시오특할구수금", name: "이하나", phone: "010-8974-6545", status: "답변 대기" },
  { date: "2023-11-11", content: "내일 주문 완료드립니다.", name: "송기영", phone: "010-8974-6545", status: "답변 대기" },
];

const navItems = [
  { icon: Home, label: 'HOME', active: true },
  { icon: Users, label: '회원 관리' },
  { icon: ShoppingBag, label: '쇼핑 관리' },
  { icon: FileText, label: '콘텐츠 관리' },
  { icon: BarChart3, label: '통계' },
  { icon: Settings, label: '환경설정' },
];

export default function DashboardPage() {
  return (
        // Main Content */}
        <main className="flex-1 border">
        <div className="p-8 space-y-6">
            {/* 오늘의 할일 */}
            {/* <div className='justify-between items-center bg-white rounded-lg p-6 shadow-md'> */}
            <div className='bg-white rounded-lg p-6 shadow-md'>
                <div className="flex justify-between items-center mb-4">
                <h2 className='font-semibold'>오늘의 할일</h2>
                <div className="text-gray-500 text-sm">
                    {new Date().toLocaleDateString('ko-KR', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                        weekday: 'short',
                    })}
                    </div>
                    </div>
                {/* Status Bar */}
                <section className="flex justify-between items-center bg-white rounded-lg p-4 pl-0">
                    <div className="flex items-center space-x-6">
                    {stats.map((stat) => (
                        <div key={stat.title} className="flex items-center space-x-2">
                        <span className="text-gray-700 text-sm">{stat.title}</span>
                        <span className='text-red-600 text-sm'>{stat.count}</span>
                        </div>
                    ))}
                    </div>
                </section>
            </div>

            {/* Sales Stats + Daily Summary */}
            <div className="grid grid-cols-2 gap-6">
            <section className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="font-medium mb-4">매출 통계</h2>
                <div className="h-[280px] bg-gray-50 rounded flex items-center justify-center text-gray-400">
                그래프 영역
                </div>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-10">
                <h2 className="font-semibold text-base">일자별 요약</h2>
                <Select defaultValue="KRW">
                    <SelectTrigger className="inline-flex items-center gap-1 text-[#6f6963] focus:outline-none w-fit border-none">
                        <SelectValue placeholder="원화 (KRW)" />
                        {/* <ChevronDownIcon className="w-4 h-4" /> */}
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                        <SelectItem value="KRW" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">원화 (KRW)</SelectItem>
                        <SelectItem value="USD" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">달러 (USD)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="overflow-auto">
                <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-gray-400 text-sm border-t border-b">
                    <th className="py-2 px-2 text-center">일자</th>
                    <th className="py-2 px-2 text-center">주문수</th>
                    <th className="py-2 px-2 text-center">매출액</th>
                    <th className="py-2 px-2 text-center">순 매출액</th>
                    <th className="py-2 px-2 text-center">방문자</th>
                    <th className="py-2 px-2 text-center">가입</th>
                    <th className="py-2 px-2 text-center">문의</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                    <tr
                        key={index}
                        className={index === 0 ? 'bg-gray-100' : ''}
                    >
                        <td className="py-2 px-2 text-center">{row.date}</td>
                        <td className="py-2 px-2 text-center">{row.orders}</td>
                        <td className="py-2 px-2 text-center">{row.sales}</td>
                        <td className="py-2 px-2 text-center">{row.netSales}</td>
                        <td className="py-2 px-2 text-center">{row.visitors}</td>
                        <td className="py-2 px-2 text-center">{row.signups}</td>
                        <td className="py-2 px-2 text-center">{row.inquiries}</td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </section>
            </div>

            {/* Visitor Stats + Partnership Inquiries */}
            <div className="grid grid-cols-2 gap-6">
            <section className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="font-medium mb-4">방문자 현황</h2>
                <div className="h-[280px] bg-gray-50 rounded flex items-center justify-center text-gray-400">
                그래프 영역
                </div>
            </section>

            <section className="bg-white rounded-lg p-6 shadow-sm">
                <h2 className="font-medium mb-10">제휴 문의 내역</h2>
                <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                <thead>
                    <tr className="text-left text-gray-400 text-sm border-t border-b">
                    <th className="py-2 px-2 text-center">날짜</th>
                    <th className="py-2 px-2 text-center">제목</th>
                    <th className="py-2 px-2 text-center">성함</th>
                    <th className="py-2 px-2 text-center">연락처</th>
                    <th className="py-2 px-2 text-center">답변 유무</th>
                    </tr>
                </thead>
                <tbody>
                    {inquiryData.map((row) => (
                        <tr key={row.date} className="border-b border-gray-100 last:border-0">
                        <td className="py-2 px-2 text-center">{row.date}</td>
                        <td className="py-3 max-w-[200px] truncate">
                            <div className="flex items-center gap-1 text-[#6f6963] text-sm">
                                <span>{row.content}</span>
                                <span className="bg-[#ff4d3e] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                    N
                                </span>
                            </div>
                        </td>
                        <td className="py-2 px-2 text-center">{row.name}</td>
                        <td className="py-2 px-2 text-center">{row.phone}</td>
                        <td className="py-2 px-2 text-center text-red-500">{row.status}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
                </div>
            </section>
            </div>
        </div>
        </main>
  );
}

import { Button } from "@/components/ui/button";
import TwoElemTable from "../components/two-elem-table";
import MemberInfo from "./components/member-info";
import OrderInfo from "./components/order-info";
import PointInfo from "./components/point-info";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import PointControlField from "./components/point-control-field";
import { Textarea } from "@/components/ui/textarea";

const info = {
    name: '홍길동',
    sort: '일반',
    id: 'qjdklsaj@gmail.com',
    rating: 'Silver',
    phone: '010-6545-6546',
    price: '3회 140,000원',
    birth: '2000-10-01',
    point: 5000,
    social: '연결된 소셜 로그인이 없습니다. / 카카오 / 네이버 / 애플',
    joinDate: '2023-01-05 11:54',
    agree: { push: true, sms: false }
}

export default function MemberDetailPage() {
    return (
            <main className="container mx-auto px-6 py-8 space-y-12 text-sm text-gray-800">
            {/* 1. 회원 정보 */}
            <div className="shadow-sm">
                <section className="p-8">
                    <h2 className="font-semibold mb-4 text-xl">회원 정보</h2>
                    <MemberInfo info={info}   />
                </section>
            </div>

            {/* 2. 주문 정보 */}
            <div className="shadow-sm p-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="font-semibold text-base">주문 정보</h2>
                        <Button className="border p-2 h-8">전체 보기</Button>
                    </div>
                    <OrderInfo />
                </section>
            </div>

            {/* 3. 포인트 정보 */}
            <div className="shadow-sm p-8">
                <section className="w-full">                    
                    <h2 className="font-semibold mb-4 text-base">포인트 정보</h2>
                    <PointInfo />
                    <h3 className="mt-4 text-sm font-semibold mb-3">포인트 지급/회수</h3>
                    <PointControlField />
                    <div className="flex justify-end w-full mt-3">
                        <Button className="font-semibold text-white bg-black min-w-30 max-w-4xl">저장</Button>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="font-semibold text-sm">포인트 내역</h2>
                        <Button className="border p-2 h-8">전체 보기</Button>
                    </div>
                    <table className="w-full text-center border-collapse border">
                    <thead className="bg-gray-100 h-15">
                        <tr className="border-b text-gray-500">
                        <th className="p-2 border">일자</th>
                        <th className="p-2 border">내용</th>
                        <th className="p-2 border">포인트</th>
                        <th className="p-2 border">관련 주문번호</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b h-15">
                            <td className="p-2 border">2023-11-23 09:16</td>
                            <td className="p-2 border">구매확정 적립</td>
                            <td className="p-2 border text-blue-400">721원</td>
                            <td className="p-2 border underline">2023112365674620</td>
                        </tr>
                        <tr className="border-b h-15">
                            <td className="p-2 border">2023-10-09 21:33</td>
                            <td className="p-2 border">주문 사용</td>
                            <td className="p-2 border text-red-400">-5000원</td>
                            <td className="p-2 border underline">2023100933138412</td>
                        </tr>
                    </tbody>
                    </table>
                </section>
            </div>
        
            {/* 4. 쿠폰 정보 */}
            <div className="shadow-sm p-8">
                <section>
                    <h2 className="font-semibold text-base mb-4">쿠폰 정보</h2>
                    <div className="flex justify-between items-center border border-gray-200 p-4 text-sm mb-5">
                    {/* 왼쪽 쿠폰 정보 */}
                    <div className="flex gap-3 items-center flex-wrap">
                        <span>
                        발급된 쿠폰 <span className="font-bold text-gray-900">3 건</span>
                        </span>
                        <span className="text-gray-300">|</span>
                        <span>
                        사용 가능 쿠폰 <span className="font-bold"><span className="text-blue-600">1</span> 건</span>
                        </span>
                        <span className="text-gray-300">|</span>
                        <span>
                        소멸된 쿠폰 <span className="font-bold text-gray-900">2 건</span>
                        </span>
                    </div>

                    {/* 오른쪽 버튼 */}
                    <Button variant="outline" className="h-8 px-3 py-1 text-sm border-gray-300">
                        쿠폰 즉시 발급
                    </Button>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="font-semibold text-sm">쿠폰 내역</h3>
                        <Button className="border p-2 h-8">전체 보기</Button>
                    </div>
                    <table className="w-full text-center border-collapse border">
                    <thead className="bg-gray-100 h-15">
                        <tr className="border-b text-gray-500">
                        <th className="p-2">쿠폰번호</th>
                        <th className="p-2">쿠폰명</th>
                        <th className="p-2">쿠폰 적용 상품</th>
                        <th className="p-2">사용 가능 기준 금액</th>
                        <th className="p-2">할인 금액</th>
                        <th className="p-2">발행일</th>
                        <th className="p-2">사용 가능 기간</th>
                        <th className="p-2">사용 여부</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b h-15">
                            <td className="p-2 rder">150932G28DDF3494</td>
                            <td className="p-2">콤포타블 음료 교환권</td>
                            <td className="p-2
                            ">콤포타블 전체 상품</td>
                            <td className="p-2">제한 없음</td>
                            <td className="p-2">4,500원</td>
                            <td className="p-2">2023.12.24 00:00</td>
                            <td className="p-2">2024.05.23 11:59</td>
                            <td className="p-2">미사용</td>
                        </tr>
                    </tbody>
                    </table>
                </section>
            </div>
        
            {/* 5. 회원 메모 */}
            <div className="shadow-sm p-8">
                <section>
                    <h2 className="font-semibold mb-4 text-base">회원 메모</h2>
                    <Textarea
                    placeholder="내용 입력 (최대 500자)"
                    className="w-full border border-gray-300 p-3 h-24 resize-none"
                    />
                    <div className="flex justify-end">
                    <Button className="mt-2 bg-gray-800 text-white px-4 py-2 min-w-30">저장</Button>
                    </div>
                </section>
            </div>
            </main>
    );
}
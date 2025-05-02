import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { SelectValue } from "@radix-ui/react-select";
import { RefreshCwIcon, SearchIcon } from "lucide-react";

export default function MemberList() {
    return (
        <main className="flex-1 border">
        <div className="p-12 text-black text-sm space-y-4">
        <h1 className="text-2xl font-bold">회원 목록</h1>

        <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white">
        {/* 필터 표 */}
        <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-14">
            {/* 첫 번째 행 */}
            <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
            개인 정보
            </div>
            <div className="flex gap-2 items-center p-2">
            <Select defaultValue="전체">
                <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-24 h-8">
                <SelectValue placeholder="전체" />
                </SelectTrigger>
                <SelectContent className="bg-white border rounded shadow-md">
                    <SelectItem value="전체" className="px-3 py-2 cursor-pointer">전체</SelectItem>
                    <SelectItem value="이름" className="px-3 py-2 cursor-pointer">이름</SelectItem>
                    <SelectItem value="이메일" className="px-3 py-2 cursor-pointer">이메일</SelectItem>
                </SelectContent>
            </Select>
            <input
                type="text"
                placeholder="입력하세요."
                className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
            />
            </div>
            <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] h-14 border-b">
            회원 등급
            </div>
            <div className="flex items-center p-2">
            <Select defaultValue="회원 등급 - 전체">
                <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-40 h-8">
                <SelectValue placeholder="회원 등급 - 전체" />
                </SelectTrigger>
                <SelectContent className="bg-white border rounded shadow-md">
                    <SelectItem value="전체" className="px-3 py-2 cursor-pointer">전체</SelectItem>
                    <SelectItem value="VIP" className="px-3 py-2 cursor-pointer">VIP</SelectItem>
                    <SelectItem value="Gold" className="px-3 py-2 cursor-pointer">Gold</SelectItem>
                </SelectContent>
                {/* </Select.Portal> */}
            </Select>
            </div>
        </div>

        {/* 두 번째 행 */}
        <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-14">
            <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
            회원 구분
            </div>
            <div className="flex items-center gap-4 p-2">
            <label><input type="radio" name="memberType" defaultChecked className="mr-1" /> 전체</label>
            <label><input type="radio" name="memberType" className="mr-1" /> 일반 회원</label>
            <label><input type="radio" name="memberType" className="mr-1" /> 불량 회원</label>
            <label><input type="radio" name="memberType" className="mr-1" /> 탈퇴 회원</label>
            </div>
        </div>
        </div>
        {/* 버튼 */}
        <div className="flex gap-2 justify-center p-4">
            <button className="border rounded px-4 py-1 flex items-center gap-1">
            <RefreshCwIcon className="w-4 h-4" /> 초기화
            </button>
            <button className="bg-[#2b241c] text-white rounded px-4 py-1 flex items-center gap-1">
            <SearchIcon className="w-4 h-4" /> 검색
            </button>
        </div>


        {/* 전체 회원 수 */}
        <div>전체 회원 <span className="text-red-500 font-semibold">12,312,831</span> 명</div>

        {/* 테이블 */}
        <div className="overflow-auto border rounded bg-white">
            <table className="w-full text-left border-collapse">
            <thead>
                <tr className="border-b text-gray-400">
                <th className="p-2"><input type="checkbox" /></th>
                <th className="p-2">고객명</th>
                <th className="p-2">아이디</th>
                <th className="p-2">휴대폰 번호</th>
                <th className="p-2">회원 등급</th>
                <th className="p-2">가입일</th>
                <th className="p-2">누적 구매금액</th>
                <th className="p-2">적립 포인트</th>
                <th className="p-2">관련 내역 보기</th>
                <th className="p-2">회원 구분</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                <tr key={i} className="border-b">
                    <td className="p-2"><input type="checkbox" /></td>
                    <td className="p-2">홍길동</td>
                    <td className="p-2 text-blue-500 underline cursor-pointer">gidksaij@gmail.com</td>
                    <td className="p-2">010-6545-6546</td>
                    <td className="p-2">Gold</td>
                    <td className="p-2">2023-11-23</td>
                    <td className="p-2 text-right">6,340,000원</td>
                    <td className="p-2 text-right">4,300원</td>
                    <td className="p-2 flex gap-1 flex-wrap">
                    <button className="border rounded px-2">포인트</button>
                    <button className="border rounded px-2">쿠폰</button>
                    <button className="border rounded px-2">주문</button>
                    <button className="border rounded px-2">메모</button>
                    </td>
                    <td className="p-2">{i === 1 ? <span className="text-red-500">탈퇴</span> : i === 2 ? <span className="text-red-500">불량</span> : '일반'}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* 하단 버튼 */}
        <div className="flex gap-2 mt-2 flex-wrap">
            <button className="border rounded px-3 py-1">불량 회원 등록</button>
            <button className="border rounded px-3 py-1">불량 회원 해제</button>
            <button className="border rounded px-3 py-1">회원 삭제</button>
            <button className="border rounded px-3 py-1">포인트 일괄 처리</button>
            <button className="border rounded px-3 py-1">쿠폰 일괄 처리</button>
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center items-center gap-2 mt-4">
            <button>{'<'}</button>
            {Array.from({ length: 9 }).map((_, i) => (
            <button key={i} className="px-2">{i + 1}</button>
            ))}
            <button>{'>'}</button>
        </div>
        </div>
        </main>
    )
}
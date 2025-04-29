import { Avatar } from "@/components/ui/avatar";

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="container mx-auto px-6 pt-8">
        {/* Sidebar */}
        <div className="w-full py-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-8">마이페이지</h2>
        </div>
        <div className="flex w-full min-h-screen bg-white text-gray-900">
        <aside className="w-64 border-r px-6 py-10 space-y-10">
            {/* <div className="text-sm font-medium text-gray-500">마이페이지</div> */}
            <div className="flex items-center gap-4">
                <div>
                    <Avatar className="w-12 h-12 text-white bg-gray-300">B</Avatar>
                </div>
                <div>
                    <span className="font-bold">홍길동 님</span>
                </div>
                </div>
                <div className="space-y-6 text-sm mt-8">
                <div className="font-semibold">마이페이지</div>
                <ul className="space-y-2">
                    <li className="text-black font-medium">마이페이지</li>
                    <li className="text-gray-400">주문 내역</li>
                    <li className="text-gray-400">취소/교환/반품 내역</li>
                    <li className="text-gray-400">결제 정보</li>
                    <li className="text-gray-400">포인트</li>
                    <li className="text-gray-400">출석 체크</li>
                    <li className="text-gray-400">행운 뽑기</li>
                </ul>
                <div className="font-semibold">나의 쿠폰함</div>
                <ul className="space-y-2">
                    <li className="text-gray-400">보유 쿠폰</li>
                    <li className="text-gray-400">쿠폰 등록</li>
                </ul>
                <div className="font-semibold">회원 정보</div>
                <ul className="space-y-2">
                    <li className="text-gray-400">회원 정보 수정</li>
                </ul>
                </div>
            </aside>

            {children}
            </div>
        </div>
    )
}
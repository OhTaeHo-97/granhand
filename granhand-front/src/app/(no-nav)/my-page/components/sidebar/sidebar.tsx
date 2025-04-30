import { Avatar } from "@/components/ui/avatar";
import SidebarElement from "./sidebar-elem";

export default function MyPageSidebar() {
    const mypageElems = [
        { title: '마이페이지', url: '/my-page' },
        { title: '주문 내역', url: '/my-page/order' },
        { title: '취소/교환/반품 내역', url: '/my-page/cancel-return-exchange' },
        { title: '결제 정보', url: '/my-page/payment' },
        { title: '포인트', url: '/my-page/point' },
        { title: '출석 체크', url: '/my-page/attendance' },
        { title: '행운 뽑기', url: '/my-page/lucky' }
    ]
    const couponElems = [
        { title: '보유 쿠폰', url: '/my-page/coupon' },
        { title: '쿠폰 등록', url: '/my-page/coupon/registration' },
    ]
    const infoElems = [
        { title: '회원 정보 수정', url: '/my-page/info' },
    ]

    return (
        <aside className="w-1/3 max-w-64 min-w-50 px-6 py-10 space-y-10 mr-[2%]">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2 w-full">
                    <Avatar className="w-12 h-12 text-white bg-gray-300 flex items-center justify-center text-3xl font-bold">B</Avatar>
                    <span className="font-bold text-center text-xl mt-3">홍길동 님</span>
                </div>
            </div>
            <div className="space-y-6 mt-8">
            {/* 마이페이지 섹션 */}
            <SidebarElement title="마이페이지" elements={mypageElems} />
            {/* 나의 쿠폰함 섹션 */}
            <SidebarElement title="나의 쿠폰함" elements={couponElems} />
            {/* 회원 정보 섹션 */}
            <SidebarElement title="회원 정보" elements={infoElems} />
            </div>
        </aside>
    )
}
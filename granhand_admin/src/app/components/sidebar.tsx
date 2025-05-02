// import SidebarElement from "./sidebar-elem";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRightIcon, GlobeIcon, LayoutGridIcon } from "lucide-react";
import SidebarElement from "./sidebar-elem";

export default function MainSidebar() {
    const memberManage = [
        { title: '회원 목록', url: '/member' },
        { title: '앱 푸시', url: '/push' },
        { title: '네이버 클라우드', url: '/' },
    ]

    const shoppingElems = [
        { title: '상품 관리', url: '/product' },
        { title: '전체 주문 목록', url: '/order/all' },
        { title: '주문 관리', url: '/order' },
        { title: '취소 관리', url: '/cancel' },
        { title: '교환 관리', url: '/exchange' },
        { title: '반품 관리', url: '/refund' },
        { title: '배송 설정', url: '/delivery' },
        { title: '포인트 관리', url: '/point' },
        { title: '쿠폰 관리', url: '/coupon' }
    ]
    const contentsElems = [
        { title: '저널 관리', url: '/journal' },
        { title: '이벤트 관리', url: '/event' },
        { title: '챌린지 관리', url: '/challenge' },
        { title: '월페이퍼 관리', url: '/wallpaper' },
        { title: '제휴 문의 관리', url: '/coop' },
        { title: '스토어 관리', url: '/store' },
        { title: '배너 관리', url: '/banner' },
        { title: '공지사항 관리', url: '/notice' },
        { title: '향 설명 관리', url: '/scent' },
        { title: '자주 묻는 질문 관리', url: '/faq' }
    ]
    const staticElems = [
        { title: '개요', url: '/outline' },
        { title: '매출', url: '/sales' },
        { title: '기간별 분석', url: '/periodic' },
        { title: '구글 애널리틱스', url: '/analytics' },
    ]

    return (
        <aside className="w-64 border-r p-4 h-screen min-w-64">
            <div className="space-y-6 mt-8 mx-auto p-5">
            {/* <div className="flex items-center gap-4"> */}
            <div className="text-[#6f6963] text-sm space-y-2">
            {/* 언어 선택 */}
                <div className="flex items-center gap-1">
                    <GlobeIcon className="w-4 h-4" />
                    <Select defaultValue="ko">
                        <SelectTrigger className="inline-flex border-none items-center gap-1 focus:outline-none">
                            <SelectValue placeholder="한국어" />
                            {/* <ChevronDownIcon className="w-4 h-4" /> */}
                        </SelectTrigger>
                        <SelectContent className='bg-white border rounded shadow-md'>
                        <SelectItem value="ko" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">한국어</SelectItem>
                        <SelectItem value="en" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">English</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* 사이트 바로가기 */}
                <div className="flex items-center gap-1 cursor-pointer hover:underline">
                    <ArrowRightIcon className="w-4 h-4" />
                    <span>사이트 바로가기</span>
                </div>
                </div>
            </div>
            <div className="space-y-6 mt-8 mx-auto p-5">
            <div>
                {/* <Link href="#" className="flex justify-between items-center cursor-pointer font-bold text-gray-700">HOME
                </Link> */}
                <div className="flex items-center gap-2 text-[#6f6963] font-bold text-sm">
                    <LayoutGridIcon className="w-4 h-4" />
                    <span>HOME</span>
                </div>
            </div>
            {/* 마이페이지 섹션 */}
            <SidebarElement title="회원 관리" elements={memberManage} />
            {/* 나의 쿠폰함 섹션 */}
            <SidebarElement title="쇼핑 관리" elements={shoppingElems} />
            {/* 회원 정보 섹션 */}
            <SidebarElement title="콘텐츠 관리" elements={contentsElems} />
            <SidebarElement title="통계" elements={staticElems} />
            </div>
        </aside>
    )
}
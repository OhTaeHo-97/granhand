import { Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#faf6ee] text-gray-600 px-8 py-12 text-sm mt-16">
            <div className="container mx-auto px-6">
                {/* 상단: 아이콘 + 메뉴 */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 mx-auto">
                    <div className="mb-4 md:mb-0">
                        <Instagram className="w-6 h-6" />
                    </div>
                    <div className="max-w-4xl flex flex-wrap gap-4 text-xs items-start">
                        <Link href="#">자주 묻는 질문</Link>
                        <span>|</span>
                        <Link href="#">회사 소개</Link>
                        <span>|</span>
                        <Link href="#">채용 안내</Link>
                        <span>|</span>
                        <Link href="#">제휴 문의</Link>
                        <span>|</span>
                        <Link href="#">온라인 응대 서비스</Link>
                    </div>
                </div>

                {/* 구분선 */}
                <div className="border-t border-gray-300 mb-8" />

                {/* 중간: 문구 */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    <div className="text-lg font-semibold text-gray-700">
                        <p>Sometimes you win,</p>
                        <p>Sometimes you learn.</p>
                    </div>
                    {/* <p className="max-w-xl leading-relaxed text-sm text-gray-600"> */}
                    <p className="max-w-4xl leading-relaxed text-sm text-gray-600">
                        향은 보이지도, 잡히지도 않지만, 우리에게 수많은 기억과 감정을 각인시키고, 나아가 우리 삶 속에서 많은 부분을 결정합니다. 그랑핸드는 이러한 향의 가치를 믿으며, 이를 매개로 한 끊임없는 시도를 통해 일상화를 꿈꿉니다. 그랑핸드는 쉽게 소비되고 잊혀질 무언가가 아닌, 보이지 않는 곳에서 뚜렷한 존재감으로 모든 사람들에게 우리의 마음과 온기를 전하고 싶습니다.
                    </p>
                </div>

                {/* 하단: 약관 등 */}
                {/* <div className="text-[10px] text-gray-400 flex flex-wrap gap-2">
                    <Link href="#">이용약관</Link>
                    <span>|</span>
                    <Link href="#">개인정보처리방침</Link>
                    <span>|</span>
                    <Link href="#">개인정보관리책임 최지현</Link>
                </div> */}
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
                    <div className="text-[10px] font-semibold text-gray-400 flex flex-wrap gap-2">
                        <Link href="#">이용약관</Link>
                        <span>|</span>
                        <Link href="#">개인정보처리방침</Link>
                        <span>|</span>
                        <Link href="#">개인정보관리책임 최지현</Link>
                    </div>
                    {/* <p className="max-w-xl leading-relaxed text-sm text-gray-600"> */}
                    <p className="max-w-4xl leading-relaxed text-[10px] text-gray-400">
                        대표 정준혁 상호 (유)그랑핸드 사업자번호 127-88-01898 14-2, Jahamun-ro 4-gil, Jongno-gu, Seoul, Korea T. 82-2-333-6525. E-Mail. hello@granhand.com
                    </p>
                </div>
            </div>
        </footer>
    )
}
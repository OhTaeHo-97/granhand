import { ChevronUpIcon, Settings } from "lucide-react";
import ProductSidebarElem from "./sidebar-elem";

export default function ProductSidebar() {
    const giftset = [{ title: '전체', url: '/product/giftset' }]
    const perfume = [
        { title: '시그니처', url: '/product/signiture' },
        { title: '퍼퓸', url: '/product/perfume' },
        { title: '멀티퍼퓸', url: '/product/multiperfume' }
    ]
    const space = [
        { title: '디퓨저', url: '/product/diffuser' },
        { title: '캔들', url: '/product/candle' },
        { title: '사쉐', url: '/product/sashe' }
    ]
    const body = [
        { title: '핸드크림', url: '/product/handcream' },
        { title: '핸드워시', url: '/product/handwash' }
    ]
    const natural = [
        { title: '내추럴 스프레이', url: '/product/natural' },
        { title: '티', url: '/product/tea' }
    ]
    const tool = [{ title: '전체', url: '/product/tool' }]
    const comforable = [{ title: '전체', url: '/product/comforable' }]

    return (
        <aside className="w-64 border-r m-3 p-6 space-y-4 min-h-screen shadow-sm">
            {/* 헤더 */}
            <div className="flex justify-between items-center font-semibold mb-16 ">
                <span className="text-basic">전체 카테고리</span>
                <Settings className="w-6 h-6" />
            </div>

            {/* GRANHAND 그룹 */}
            <div>
                <div className="font-semibold text-[#6f6963] text-base">그랑핸드</div>
                <ProductSidebarElem title="기프트 세트" elements={giftset} />
                <ProductSidebarElem title="퍼퓸" elements={perfume} />
                <ProductSidebarElem title="공간" elements={space} />
                <ProductSidebarElem title="바디" elements={body} />
                <ProductSidebarElem title="내추럴" elements={natural} />
                <ProductSidebarElem title="도구" elements={tool} />
            </div>

            <div>
                <div className="font-semibold text-[#6f6963] text-base">콤포타블</div>
                <ProductSidebarElem title="콤포타블" elements={comforable} />
            </div>
        </aside>
    )
}
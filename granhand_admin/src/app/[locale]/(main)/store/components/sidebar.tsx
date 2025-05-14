import { Settings } from "lucide-react"
import StoreSidebarElem from "./sidebar-elem"

export default function StoreSidebar() {
    const granhand = [
        { title: '광화문', url: '/store/gwanghwa'},
        { title: '도산', url: '/store/dosan'},
        { title: '남산', url: '/store/namsan'},
        { title: '마포', url: '/store/mapo'},
        { title: '서촌', url: '/store/seochon'},
        { title: '소격', url: '/store/sogyek'},
        { title: '북촌', url: '/store/bukchon'},
        { title: '서교', url: '/store/seokyo'}
    ]
    const comfortable = [
        { title: '남산', url: 'namsan' },
        { title: '안국', url: 'anguk' },
        { title: '시청', url: 'sicheong' },
    ]

    return (
        <aside className="w-64 border-r m-3 p-6 space-y-4 min-h-screen shadow-sm">
            {/* 헤더 */}
            <div className="flex justify-between items-center font-semibold mb-16 ">
                <span className="text-basic">전체 카테고리</span>
                <Settings className="w-6 h-6" />
            </div>

            {/* GRANHAND 그룹 */}
            <div>
                <div className="font-semibold text-[#6f6963] text-base">STORES</div>
                <StoreSidebarElem title="그랑핸드" elements={granhand} />
                <StoreSidebarElem title="콤포타블" elements={comfortable} />
            </div>
        </aside>
    )
}
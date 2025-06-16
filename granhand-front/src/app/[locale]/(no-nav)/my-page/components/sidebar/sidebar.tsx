import SidebarElement from "./sidebar-elem";

export default function MyPageSidebar({ currentLocale, t }: { currentLocale: string, t: (key: string) => string }) {
    const mypageElems = [
        { title: t('my_page:mypage'), url: `${currentLocale}/my-page` },
        { title: t('my_page:order_list'), url: `${currentLocale}/my-page/order` },
        { title: t('my_page:cancel_exchange_refund'), url: `${currentLocale}/my-page/cancel-return-exchange` },
        { title: t('my_page:payment_list'), url: `${currentLocale}/my-page/payment` },
        { title: t('my_page:point'), url: `${currentLocale}/my-page/point` },
        { title: t('my_page:attendance'), url: `${currentLocale}/my-page/attendance` },
        { title: t('my_page:lucky'), url: `${currentLocale}/my-page/lucky` }
    ]
    const couponElems = [
        { title: t('my_page:my_coupon_list'), url: `${currentLocale}/my-page/coupon` },
        { title: t('my_page:coupon_register'), url: `${currentLocale}/my-page/coupon/registration` },
    ]
    const infoElems = [
        { title: t('my_page:edit_info'), url: `${currentLocale}/my-page/verify` },
    ]

    return (
        <aside className="w-1/3 max-w-64 min-w-50 px-6 py-10 space-y-10 mr-[2%]">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center gap-2 w-full">
                    <div className="pt-1">
                        <div className={`w-[42px] h-[42px] rounded-full text-2xl flex items-center justify-center font-bold text-white`} style={{ backgroundColor: '#e9e6e0' }}>
                            B
                        </div>
                    </div>
                    <span className="font-bold text-center text-2xl mt-3 text-[#322A24]">홍길동 님</span>
                </div>
            </div>
            <div className="space-y-6 mt-8">
            {/* 마이페이지 섹션 */}
            <SidebarElement title={t('my_page:mypage')} elements={mypageElems} />
            {/* 나의 쿠폰함 섹션 */}
            <SidebarElement title={t('my_page:my_coupon')} elements={couponElems} />
            {/* 회원 정보 섹션 */}
            <SidebarElement title={t('my_page:info')} elements={infoElems} />
            </div>
        </aside>
    )
}
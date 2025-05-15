import { Button } from "@/components/ui/button";
import MemberInfo from "./components/member-info";
import OrderInfo from "./components/order-info";
import PointInfo from "./components/point-info";
import PointControlField from "./components/point-control-field";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import { translation } from "../../../../../../utils/localization/locales/server";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import PointHistory from "./components/point-history";
import CouponInformation from "./components/coupon-info";
import CouponHistory from "./components/coupon-history";
import MemberNotes from "./components/member-note";

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

export default async function MemberDetailPage({ params }: { params: { locale: LocaleTypes } }) {
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'member', 'coupon', 'order', 'point'])
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <main className="container mx-auto px-6 py-8 space-y-12 text-sm text-gray-800">
            {/* 1. 회원 정보 */}
            <div className="shadow-sm">
                <section className="p-8">
                    <h1 className="text-2xl font-bold text-[#5E5955] mb-4">{t('member:member_info')}</h1>
                    <MemberInfo info={info} t={t} />
                </section>
            </div>

            {/* 2. 주문 정보 */}
            <div className="shadow-sm p-8">
                <section>
                    <div className="flex items-center gap-3 mb-4">
                        <h2 className="font-bold text-xl text-[#5E5955]">{t('order:order_info')}</h2>
                        <Button className="border p-2 h-8">{t('view_all')}</Button>
                    </div>
                    <OrderInfo t={t} />
                </section>
            </div>

            {/* 3. 포인트 정보 */}
            <div className="shadow-sm p-8">
                <section className="w-full">                    
                    <h2 className="font-bold mb-4 text-xl text-[#5E5955]">{t('point:point_info')}</h2>
                    <PointInfo t={t} />
                    <h3 className="mt-4 text-base mb-3 text-[#5E5955]">{t('point:grant_withdraw_points')}</h3>
                    <PointControlField t={t} />
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-[#5E5955] text-base">{t('point:point_history')}</h3>
                        <Button className="border p-2 h-8">{t('view_all')}</Button>
                    </div>
                    <PointHistory t={t} currentLocale={currentLocale} />
                </section>
            </div>
        
            {/* 4. 쿠폰 정보 */}
            <div className="shadow-sm p-8">
                <section>
                    <h2 className="font-bold text-xl mb-4 text-[#5E5955]">{t('coupon:coupon_info')}</h2>
                    <CouponInformation t={t} />
                    <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-base text-[#5E5955]">{t('coupon:coupon_history')}</h3>
                        <Button className="border p-2 h-8">{t('view_all')}</Button>
                    </div>
                    <CouponHistory t={t} />
                </section>
            </div>
        
            {/* 5. 회원 메모 */}
            <div className="shadow-sm p-8">
                <MemberNotes t={t} />
            </div>
        </main>
    );
}
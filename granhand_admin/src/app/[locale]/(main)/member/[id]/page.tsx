import MemberInfo from "./components/member-info";
import { LocaleTypes } from "../../../../../../utils/localization/settings";
import MemberNotes from "./components/member-note";
import MemberPointInfo from "./components/member-point-info";
import MemberCouponInfo from "./components/member-coupon-info";
import { translation } from "../../../../../../utils/localization/locales/server";
import MemberOrderInfo from "./components/member-order-info";

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

// export default async function MemberDetailPage({ params }: { params: Promise<{ locale: LocaleTypes, id: string }> }) {
export default async function MemberDetailPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    // const { locale, id } = await params
    const { locale } = await params
    const { t } = await translation(locale, ['common', 'member', 'coupon', 'order', 'point'])

    return (
        <main className="container mx-auto px-6 py-8 space-y-12 text-sm text-gray-800">
            {/* 1. 회원 정보 */}
            <div className="shadow-sm">
                <MemberInfo info={info} t={t} />
            </div>

            {/* 2. 주문 정보 */}
            <div className="shadow-sm p-8">
                <MemberOrderInfo itemCnt={3} />
            </div>

            {/* 3. 포인트 정보 */}
            <div className="shadow-sm p-8">
                <MemberPointInfo />
            </div>
        
            {/* 4. 쿠폰 정보 */}
            <div className="shadow-sm p-8">
                <MemberCouponInfo />
            </div>
        
            {/* 5. 회원 메모 */}
            <div className="shadow-sm p-8">
                <MemberNotes t={t} />
            </div>
        </main>
    );
}
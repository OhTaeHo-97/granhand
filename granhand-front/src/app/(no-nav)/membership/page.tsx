import { Avatar } from "@/components/ui/avatar";

export default function MembershipPage() {
    return (
        <div className="container mx-auto px-6 pt-8">
            <div className="w-full py-10 mx-auto">
                <h2 className="text-2xl font-semibold">등급 안내</h2>
            </div>
            {/* <div className="flex w-full min-h-screen bg-white text-gray-900">
            </div> */}
            <main className="w-full max-w-3xl mx-auto px-4 space-y-16 text-gray-800">
            {/* Section 1: 나의 멤버십 등급 */}
            <section>
                <h2 className="text-lg font-semibold mb-4">나의 멤버십 등급</h2>
                <div className="w-full border rounded-lg py-8 flex flex-col items-center shadow-2xs">
                <Avatar className="w-20 h-20 bg-gray-300 text-white text-2xl flex items-center justify-center">B</Avatar>
                <div className="mt-4 text-center">
                    <p className="font-semibold">홍길동 님</p>
                    <p className="text-sm text-gray-500 mt-2">현재 등급은 <span className="font-semibold text-black">Basic</span> 입니다.</p>
                </div>
                </div>
            </section>

            {/* Section 2: 등급 혜택 안내 */}
            <section className="w-full">
                <h2 className="text-base font-semibold mb-6">등급 혜택 안내</h2>
                <ul className="space-y-8 flex flex-col items-center mx-auto divide-y divide-dashed divide-gray-300 border-t border-b border-dashed border-gray-300 w-full">
                {[
                    {
                    level: "Basic",
                    badge: "포인트 적립 1%",
                    criteria: "최근 6개월 구매금액 10만 원 미만 및 미구매",
                    benefits: [
                        "신규 가입 10,000원 쿠폰 (가입 후 30일간 유효)",
                        "콤포타블 음료 교환권 1장 (유효기간 해당 월 1일 ~ 말일)"
                    ],
                    color: "#e9e6e0"
                    },
                    {
                    level: "Bronze",
                    badge: "포인트 적립 2%",
                    criteria: "최근 6개월 구매금액 10만 원 이상, 20만 원 미만",
                    benefits: [
                        "적립 5,000원 쿠폰 제공 1장",
                        "[APP 전용] 당월 10,000원 쿠폰 (균일가 제외)"
                    ],
                    color: "#F9E3BE"
                    },
                    {
                    level: "Silver",
                    badge: "포인트 적립 3%",
                    criteria: "최근 6개월 구매금액 20만 원 이상, 50만 원 미만",
                    benefits: [
                        "적립 10,000원 쿠폰 제공 1장",
                        "[APP 전용] 당월 10,000원 쿠폰 (균일가 제외)"
                    ],
                    color: "#f9b78d"
                    },
                    {
                    level: "Gold",
                    badge: "포인트 적립 4%",
                    criteria: "최근 6개월 구매금액 50만 원 이상, 100만 원 미만",
                    benefits: [
                        "적립 15,000원 쿠폰 제공 1장",
                        "[APP 전용] 당월 10,000원 쿠폰 (균일가 제외)"
                    ],
                    color: "#d0505d"
                    },
                    {
                    level: "VIP",
                    badge: "포인트 적립 5%",
                    criteria: "최근 6개월 구매금액 100만 원 이상",
                    benefits: [
                        "적립 20,000원 쿠폰 제공 1장",
                        "[APP 전용] 당월 10,000원 쿠폰 (균일가 제외)"
                    ],
                    color: "#1d1717"
                    }
                ].map((item) => (
                    <li key={item.level} className="flex gap-4 w-full items-center justify-center py-6">
                        <div className="pt-1 mr-6">
                            <div className={`w-10 h-10 rounded-full  text-sm flex items-center justify-center font-bold grayscale text-white`} style={{ backgroundColor: item.color }}>
                                {item.level[0]}
                            </div>
                        </div>
                        <div className="space-y-2 w-full">
                            <div className="flex items-center gap-2">
                            <h3 className="font-bold text-lg">{item.level}</h3>
                            <span className="text-xs px-2 py-1 bg-gray-100 rounded-full text-gray-500">{item.badge}</span>
                            </div>
                            <div className="text-sm">
                            <div className="flex gap-2">
                                <span className="text-gray-400 font-semibold w-10">기준</span>
                                <span>{item.criteria}</span>
                            </div>
                            <div className="flex gap-2 mt-1">
                                <span className="text-gray-400 font-semibold w-10">혜택</span>
                                <div className="space-y-0.5">
                                {item.benefits.map((b, i) => (
                                    <div key={i}>{b}</div>
                                ))}
                                </div>
                            </div>
                            </div>
                        </div>
                    </li>
                ))}
                </ul>
            </section>

            {/* Section 3: 등급 기준 및 안내 */}
            <section className="space-y-10">
                <div>
                <h2 className="text-base font-semibold mb-6">회원 등급 기준 안내</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>매월 첫째 주 회원 등급이 갱신됩니다.</li>
                    <li>회원 등급은 최근 6개월 동안의 결제 완료 금액을 기준으로 산정됩니다.</li>
                    <li>쿠폰은 지급일로부터 한 달간 사용 가능합니다.</li>
                    <li>일부 상품은 혜택 제공 대상에서 제외될 수 있습니다.</li>
                </ul>
                </div>
                <div>
                <h2 className="text-base font-semibold mb-6">회회원 등급 혜택 안내</h2>
                <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>각 등급별 쿠폰은 매월 1일 자동 발급됩니다.</li>
                    <li>일부 쿠폰은 앱에서만 사용 가능합니다.</li>
                    <li>회원 탈퇴 시 모든 혜택은 소멸되며 복원되지 않습니다.</li>
                </ul>
                </div>
            </section>
            </main>
        </div>
    )
}
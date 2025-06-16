import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function MembershipCard({ currentLocale, t }: { currentLocale: string, t: (key: string) => string }) {
    return (
        <Card className="w-[738px] h-[148px] flex items-center px-10 py-8">
            <CardContent className="w-full p-0">
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col justify-center items-center w-[72px] h-[89px]">
                    <div className="text-2xl font-bold text-[#322A24]">BASIC</div>
                    <Link href={`${currentLocale}/membership`}>
                        {/* 등급 안내 */}
                        <Button variant="ghost" className="mt-6 bg-[#322A240A] text-[#6F6963] font-semibold text-sm px-4 py-2 rounded w-[72px] h-[34px]">{t('my_page:membership_guide')}</Button>
                    </Link>
                </div>
                <div className="flex-1 pl-10 flex flex-col justify-center w-[516px]">
                <p className="text-sm text-[#C0BCB6] font-bold">
                    <strong className="text-[#322A24]">68,000원</strong>
                    <span className="ml-1">추가 구매 시 VIP 달성 다음달 예상 등급 BRONZE</span>
                </p>
                <div className="w-full bg-[#322A240D] rounded-full h-1 my-4">
                    <div className="bg-[#322A24] h-[3px] rounded-full" style={{ width: "32%" }} />
                </div>
                <div className="flex justify-between text-xs font-medium text-[#C0BCB6]">
                    <span className="text-[#322A24]">32,000원</span>
                    <span>100,000원</span>
                </div>
                </div>
            </div>
            </CardContent>
        </Card>
    )
}
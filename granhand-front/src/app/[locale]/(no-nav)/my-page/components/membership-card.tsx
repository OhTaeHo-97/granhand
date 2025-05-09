import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function MembershipCard({ t }: { t: (key: string) => string }) {
    return (
        <Card className="w-full min-h-[180px] flex items-center px-10 py-8">
            <CardContent className="w-full p-0">
            <div className="flex justify-between items-center w-full">
                <div className="flex flex-col justify-center items-center w-1/8">
                <div className="text-2xl font-bold">BASIC</div>
                <Link href="/membership">
                    {/* 등급 안내 */}
                    <Button variant="ghost" className="mt-6 bg-gray-100 text-gray-700 font-semibold text-sm px-4 py-2 rounded">{t('my_page:membership_guide')}</Button>
                </Link>
                </div>
                <div className="flex-1 pl-10 flex flex-col justify-center">
                <p className="text-sm text-gray-700">
                    <strong className="text-black">68,000원</strong>
                    <span className="font-semibold text-gray-400 ml-1">추가 구매 시 VIP 달성 다음달 예상 등급 BRONZE</span>
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2 my-4">
                    <div className="bg-black h-2 rounded-full" style={{ width: "32%" }} />
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                    <span className="text-black">32,000원</span>
                    <span>100,000원</span>
                </div>
                </div>
            </div>
            </CardContent>
        </Card>
    )
}
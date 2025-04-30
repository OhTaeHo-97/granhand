import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LuckyDrawPage() {
    return (
        <main className="w-full mx-auto ml-10 min-h-screen flex flex-col items-center pt-24 pb-12">
            {/* Centered text */}
            <div className="flex-2/4 flex items-center justify-center">
                <h1 className="text-lg font-bold text-gray-900 text-center">
                    100% 당첨되는 오늘의 행운은?
                </h1>
            </div>

            {/* Bottom fixed button */}
            <div className="flex-2/4 flex w-full px-4 max-w-dvh">
                <Link href={"#"} className="w-full">
                    <Button className="bg-black text-white text-center w-full py-3 font-medium text-base">
                        행운 뽑기
                    </Button>
                </Link>
            </div>
        </main>
    )
}
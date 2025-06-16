'use client'

import { useCurrentLocale } from "@/lib/useCurrentLocale";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default function StoreSection() {
    const currentLocale = useCurrentLocale()

    return (
        <div className="mt-20 pt-12 pb-16 space-y-6"> {/* Adjust padding as needed */}
            <p className="text-sm font-bold text-[#6F6963] uppercase">STORE</p> {/* STORE label */}
            <Link href={`${currentLocale}/store`} className="block">
                <div className="flex items-center gap-4 text-[#322A24] hover:cursor-pointer"> {/* Title with arrow */}
                    <h2 className="text-2xl font-bold leading-none">오프라인 스토어 안내</h2>
                    <ArrowRightIcon size={16} />
                    {/* <span className="ml-2 text-3xl font-bold text-gray-800 leading-none">→</span> Arrow */}
                </div>
            </Link>
            <div className="max-w-2xl"> {/* Description container */}
                    <p className="text-sm text-[#322A24] leading-relaxed"> {/* Description text */}
                    오프라인 스토어는 그랑핸드가 보여주고 싶은 모든 것이 담겨있는 공간입니다.<br />
                    바쁜 일상 속 잠시 숨을 돌리는 시간과 경험이 됩니다.
                </p>
            </div>
        </div>
    )
}
'use client'

import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FindIdHeader() {
    const router = useRouter()

    return (
        <>
            <h2 className="text-lg font-medium text-left mb-4 border-b border-b-[#6f6963] pb-4">아이디 찾기</h2>
            <div className="flex items-center mb-8">
                <Button className="w-4 h-4" onClick={() => router.back()}>
                    <ChevronLeft className="w-4 h-4 text-gray-500 mr-3" />
                </Button>
                <div className="text-sm items-center text-gray-500">이전단계</div>
            </div>
        </>
    )
}
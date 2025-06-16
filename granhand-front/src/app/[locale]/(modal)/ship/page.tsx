'use client'

import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

export default function TrackShipPage() {
    return (
        <div className="min-h-screen bg-[#FAF8F5] flex flex-col px-3">
            {/* 상단 */}
            <div className="flex items-center py-6">
                <Button onClick={() => window.close()} className="text-3xl mr-4"><X className="!w-7 !h-7" /></Button>
                <span className="text-2xl font-semibold">배송지 조회</span>
            </div>
            {/* <div className='w-full mx-auto items-center flex justify-center'>
                <Link href="/address/new" className="w-[90%] max-w-md text-xl mb-10 h-13">
                    <Button className="w-full max-w-md py-4 border border-[#CFC9BC] rounded text-xl mb-10 h-13" >
                        새 배송지 추가
                    </Button>
                </Link>
            </div> */}
            {/* 본문 */}
            {/* <div className="flex-1 flex flex-col items-center justify-center">
                <div className="text-[#C2BDB6] text-lg mb-10">새 배송지를 추가해 주세요.</div>
            </div> */}

            {/* 하단 버튼 */}
            {/* <div className="px-4 pb-8">
                <Button
                className="w-full py-4 bg-[#D6D1C4] text-white text-xl rounded cursor-not-allowed h-13"
                disabled
                >
                선택 완료
                </Button>
            </div> */}
        </div>
    )
}
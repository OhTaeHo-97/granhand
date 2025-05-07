'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

export default function SelfIdentificationPage() {
    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <section className="w-full py-10 mx-auto">
                <h2 className="text-2xl font-semibold pb-8 border-b">회원가입</h2>
                <Button className="mb-6 text-gray-400 text-sm pl-0">
                    <ChevronLeft /> 이전단계
                </Button>
            </section>
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">

            <div className="w-[600px] mt-8">
            {/* 진행 바 */}
            <div className="w-full mb-10 relative h-1 bg-[#ECE9E2] rounded overflow-hidden">
                <div
                    className="absolute h-1 bg-[#7B736A] rounded"
                    style={{
                    left: '67%',
                    width: '33%',
                    top: 0,
                    }}
                />
            </div>
            {/* 안내문구 및 입력 */}
            <div className="mb-8">
                <div className="text-2xl font-bold text-[#222] mb-4">
                본인인증을 진행해 주세요.
                </div>
                <div className="mb-50 text-lg font-normal text-[#222]">안전한 이용을 위해 최초 한 번 본인인증을 진행해요.</div>
                
                <Button
                className="w-full h-15 py-5 bg-[#302c26] text-white text-2xl font-normal rounded cursor-not-allowed"
                disabled
                >
                본인 인증
                </Button>
            </div>
            </div>

            </div>
        </div>
    );
} 
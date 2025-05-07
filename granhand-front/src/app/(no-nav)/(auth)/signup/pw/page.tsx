'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function JoinPwPage() {
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
                        left: '32%',
                        width: '36%',
                        top: 0,
                        }}
                    />
                </div>
            {/* 안내문구 및 입력 */}
            <div className="mb-8">
                <div className="text-2xl font-bold text-[#222] mb-10">
                로그인에 사용할 비밀번호를 입력해 주세요.
                </div>
                <div className="mb-2 text-lg font-normal text-[#222]">비밀번호</div>
                <input
                type="password"
                placeholder="비밀번호 입력(영문, 숫자, 특수문자 포함 8~20 이내)"
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#7B736A] px-4 py-4 text-xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2] mb-4"
                />
                <input
                type="password"
                placeholder="비밀번호 확인"
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#7B736A] px-4 py-4 text-xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2] mb-16"
                />
                <Link href="/signup/verify">
                    <Button
                    className="w-full h-15 py-5 bg-[#D6D1C4] text-white text-2xl font-normal rounded cursor-not-allowed"
                    disabled
                    >
                    다음
                    </Button>
                </Link>
            </div>
            </div>

            </div>
        </div>
    );
}
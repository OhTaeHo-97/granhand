'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

export default function JoinIdPage() {
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
            <div className="w-full mb-10">
                <div className="h-1 bg-[#ECE9E2] rounded">
                <div className="h-1 bg-[#7B736A] rounded" style={{ width: '28%' }} />
                </div>
            </div>
            {/* 안내문구 및 입력 */}
            <div className="mb-8">
                <div className="text-2xl font-bold text-[#222] mb-10">
                로그인에 사용할 아이디를 입력해 주세요.
                </div>
                <div className="mb-2 text-lg font-normal text-[#222]">아이디</div>
                <input
                type="email"
                placeholder="이메일을 입력해 주세요."
                className="w-full border border-[#CFC9BC] bg-white rounded text-[#7B736A] px-4 py-4 text-xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2] mb-24"
                />
                <Link href="/signup/pw">
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
    // <div className="min-h-screen bg-[#FAF8F5]">
    //     {/* 상단 */}
    //     <div className="pt-8 px-8">
    //         <div className="text-2xl font-normal text-[#7B736A] mb-2">회원가입</div>
    //         <hr className="border-[#ECE9E2] mb-2" />
    //         <button className="flex items-center text-[#7B736A] text-lg font-normal mb-8">
    //         <ChevronLeft className="w-6 h-6 mr-1" />
    //         이전단계
    //         </button>
    //     </div>

    //     {/* 중앙 컨텐츠 */}
    //     <div className="flex justify-center">
    //         <div className="w-[600px] mt-8">
    //         {/* 진행 바 */}
    //         <div className="w-full mb-10">
    //             <div className="h-1 bg-[#ECE9E2] rounded">
    //             <div className="h-1 bg-[#7B736A] rounded" style={{ width: '28%' }} />
    //             </div>
    //         </div>
    //         {/* 안내문구 및 입력 */}
    //         <div className="mb-8">
    //             <div className="text-2xl font-normal text-[#222] mb-10">
    //             로그인에 사용할 아이디를 입력해 주세요.
    //             </div>
    //             <div className="mb-2 text-lg font-normal text-[#222]">아이디</div>
    //             <input
    //             type="email"
    //             placeholder="이메일을 입력해 주세요."
    //             className="w-full border border-[#CFC9BC] bg-white rounded text-[#7B736A] px-4 py-4 text-xl placeholder-[#C2BDB6] focus:outline-none focus:ring-2 focus:ring-[#ECE9E2] mb-16"
    //             />
    //             <button
    //             className="w-full py-5 bg-[#D6D1C4] text-white text-2xl font-normal rounded cursor-not-allowed"
    //             disabled
    //             >
    //             다음
    //             </button>
    //         </div>
    //         </div>
    //     </div>
    //     </div>
} 
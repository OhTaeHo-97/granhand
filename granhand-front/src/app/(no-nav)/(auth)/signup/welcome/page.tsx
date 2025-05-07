'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, DollarSign, Heart, Ticket, Truck } from 'lucide-react';

export default function SelfIdentificationPage() {
    return (
        <div className='container mx-auto px-6 pt-8 min-h-screen'>
            <section className="w-full py-10 mx-auto">
                <h2 className="text-2xl font-semibold pb-8 border-b">회원가입</h2>
            </section>
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">

            <div className="flex flex-col items-center justify-center mt-24">
                <div className="text-3xl font-bold text-[#7B736A] mb-20 text-center">
                그랑핸드의 회원이 되신 것을 환영합니다!
                </div>
                <ul className="mb-28 space-y-8">
                <li className="flex items-center text-xl text-[#222]">
                    <Ticket className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">신규 가입 축하 쿠폰 10,000원</span>
                </li>
                <li className="flex items-center text-xl text-[#222]">
                    <DollarSign className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">출석 체크만 해도 적립 포인트를 드려요</span>
                </li>
                <li className="flex items-center text-xl text-[#222]">
                    <Heart className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">매일 만나는 행운! 최대 5,000원 포인트</span>
                </li>
                <li className="flex items-center text-xl text-[#222]">
                    <Truck className="w-8 h-8 text-[#F5D9A6] mr-6" />
                    <span className="font-bold">하나만 구매해도 전 제품 무료 배송</span>
                </li>
                </ul>
                <Button
                className="w-[400px] py-5 border h-15 border-[#CFC9BC] text-[#3B352E] text-2xl font-normal rounded bg-white hover:bg-[#f5f3ef] transition"
                >
                로그인
                </Button>
            </div>

            </div>
        </div>
    );
}
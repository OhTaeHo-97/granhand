'use client'

import { Avatar } from "@/components/ui/avatar";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useState } from "react";

export default function MyPageLayout({ children }: { children: React.ReactNode }) {
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        mypage: true,
        coupon: true,
        user: true,
    });

    const toggleSection = (key: string) => {
        setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    return (
        <div className="container mx-auto px-6 pt-8">
        {/* Sidebar */}
        <div className="w-full py-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-8">마이페이지</h2>
        </div>
        <div className="flex w-full min-h-screen bg-white text-gray-900">
        <aside className="w-1/3 max-w-64 min-w-40 px-6 py-10 space-y-10">
            {/* <div className="text-sm font-medium text-gray-500">마이페이지</div> */}
            <div className="flex items-center gap-4">
                {/* <div>
                    <Avatar className="w-12 h-12 text-white bg-gray-300">B</Avatar>
                </div>
                <div>
                    <span className="font-bold">홍길동 님</span>
                </div> */}
                <div className="flex flex-col items-center gap-2 w-full">
                    <Avatar className="w-12 h-12 text-white bg-gray-300 flex items-center justify-center text-3xl font-bold">B</Avatar>
                    <span className="font-bold text-center text-xl mt-3">홍길동 님</span>
                </div>
            </div>
            {/* <div className="space-y-6 text-sm mt-8">
                <div className="font-semibold">마이페이지</div>
                <ul className="space-y-2">
                    <li className="text-black font-medium">마이페이지</li>
                    <li className="text-gray-400">주문 내역</li>
                    <li className="text-gray-400">취소/교환/반품 내역</li>
                    <li className="text-gray-400">결제 정보</li>
                    <li className="text-gray-400">포인트</li>
                    <li className="text-gray-400">출석 체크</li>
                    <li className="text-gray-400">행운 뽑기</li>
                </ul>
                <div className="font-semibold">나의 쿠폰함</div>
                <ul className="space-y-2">
                    <li className="text-gray-400">보유 쿠폰</li>
                    <li className="text-gray-400">쿠폰 등록</li>
                </ul>
                <div className="font-semibold">회원 정보</div>
                <ul className="space-y-2">
                    <li className="text-gray-400">회원 정보 수정</li>
                </ul>
            </div> */}
            <div className="space-y-6 mt-8">
            {/* 마이페이지 섹션 */}
            <div>
                <div className="flex justify-between items-center cursor-pointer font-bold text-gray-700" onClick={() => toggleSection("mypage")}>마이페이지
                {openSections.mypage ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
                {openSections.mypage && (
                <ul className="mt-2 space-y-1 text-sm">
                    <li className="bg-gray-100 text-gray-700 px-6 py-2 rounded">마이페이지</li>
                    <li className="text-gray-400 px-6 py-2">주문 내역</li>
                    <li className="text-gray-400 px-6 py-2">취소/교환/반품 내역</li>
                    <li className="text-gray-400 px-6 py-2">결제 정보</li>
                    <li className="text-gray-400 px-6 py-2">포인트</li>
                    <li className="text-gray-400 px-6 py-2">출석 체크</li>
                    <li className="text-gray-400 px-6 py-2">행운 뽑기</li>
                </ul>
                )}
            </div>

            {/* 나의 쿠폰함 섹션 */}
            <div>
                <div className="flex justify-between items-center cursor-pointer font-bold text-gray-700" onClick={() => toggleSection("coupon")}>나의 쿠폰함
                {openSections.coupon ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
                {openSections.coupon && (
                <ul className="mt-2 space-y-1 text-sm">
                    <li className="text-gray-400 px-6 py-2">보유 쿠폰</li>
                    <li className="text-gray-400 px-6 py-2">쿠폰 등록</li>
                </ul>
                )}
            </div>

            {/* 회원 정보 섹션 */}
            <div>
                <div className="flex justify-between items-center cursor-pointer font-bold text-gray-700" onClick={() => toggleSection("user")}>회원 정보
                {openSections.user ? <ChevronUpIcon /> : <ChevronDownIcon />}
                </div>
                {openSections.user && (
                <ul className="mt-2 space-y-1 text-sm">
                    <li className="text-gray-400 px-6 py-2">회원 정보 수정</li>
                </ul>
                )}
            </div>
            </div>
            </aside>

            {children}
            </div>
        </div>
    )
}
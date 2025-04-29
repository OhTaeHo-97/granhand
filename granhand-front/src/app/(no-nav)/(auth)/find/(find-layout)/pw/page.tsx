'use client'

import { useState } from "react";
// import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Navigation from "@/components/Navigation";

export default function FindPasswordPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Find ID attempt:", { name, phone });
    };

    return (
        // <div className="min-h-screen bg-white">
        //     {/* <Navigation /> */}
        //     <main className="container mx-auto px-6 pt-32">
        //         <div className="max-w-md mx-auto">
        //             <h1 className="text-3xl font-serif text-center mb-12">비밀번호 찾기</h1>
        //             <form onSubmit={handleSubmit} className="space-y-6">
        //             <div className="space-y-2">
        //                 <label htmlFor="name" className="text-sm font-medium">이름</label>
        //                 <Input
        //                 id="name"
        //                 type="text"
        //                 value={name}
        //                 onChange={(e) => setName(e.target.value)}
        //                 required
        //                 className="w-full"
        //                 placeholder="이름을 입력해주세요"
        //                 />
        //             </div>
        //             <div className="space-y-2">
        //                 <label htmlFor="phone" className="text-sm font-medium">휴대폰 번호</label>
        //                 <Input
        //                 id="phone"
        //                 type="tel"
        //                 value={phone}
        //                 onChange={(e) => setPhone(e.target.value)}
        //                 required
        //                 className="w-full"
        //                 placeholder="휴대폰 번호를 입력해주세요"
        //                 />
        //             </div>
        //             <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base">
        //                 아이디 찾기
        //             </Button>
        //             </form>
        //             <div className="mt-8 text-center space-y-4">
        //             <div className="text-sm">
        //                 <Link href="/login" className="text-gray-600 hover:text-gray-900">로그인</Link>
        //                 <span className="mx-4 text-gray-300">|</span>
        //                 <Link href="/reset-password" className="text-gray-600 hover:text-gray-900">비밀번호 찾기</Link>
        //                 <span className="mx-4 text-gray-300">|</span>
        //                 <Link href="/signup" className="text-gray-600 hover:text-gray-900">회원가입</Link>
        //             </div>
        //             </div>
        //         </div>
        //     </main>
        // </div>

        <>
            <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">이름</label>
                <Input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
                placeholder="이름을 입력해주세요"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium">휴대폰 번호</label>
                <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full"
                placeholder="휴대폰 번호를 입력해주세요"
                />
            </div>
            <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base">
                비밀번호 찾기
            </Button>
            </form>
        </>
    );
}
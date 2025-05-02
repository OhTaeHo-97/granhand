'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Navigation from "@/components/Navigation";
import { Apple, Facebook, Mail, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password });
    };

    return (
        // <div className="min-h-screen bg-white">
        //     <main className="container mx-auto px-6 pt-32">
        //         <div className="max-w-md mx-auto">
        //         <h1 className="text-3xl font-serif text-center mb-12">Login</h1>
        //         <div className="space-y-6 mb-8">
        //             <Button 
        //             variant="outline" 
        //             className="w-full border-gray-300 space-x-2"
        //             onClick={() => console.log("Google login")}
        //             >
        //             <Mail className="w-5 h-5" />
        //             <span>Google로 시작하기</span>
        //             </Button>
        //             <Button 
        //             variant="outline" 
        //             className="w-full border-gray-300 space-x-2"
        //             onClick={() => console.log("Facebook login")}
        //             >
        //             <Facebook className="w-5 h-5" />
        //             <span>Facebook으로 시작하기</span>
        //             </Button>
        //         </div>
        //         <div className="relative mb-8">
        //             <div className="absolute inset-0 flex items-center">
        //             <div className="w-full border-t border-gray-300"></div>
        //             </div>
        //             <div className="relative flex justify-center text-sm">
        //             <span className="px-4 bg-white text-gray-500">또는</span>
        //             </div>
        //         </div>
        //         <form onSubmit={handleSubmit} className="space-y-6">
        //             <div className="space-y-2">
        //             <label htmlFor="email" className="text-sm font-medium">아이디(이메일)</label>
        //             <Input
        //                 id="email"
        //                 type="email"
        //                 value={email}
        //                 onChange={(e) => setEmail(e.target.value)}
        //                 required
        //                 className="w-full"
        //                 placeholder="예) granhand@granhand.com"
        //             />
        //             </div>
        //             <div className="space-y-2">
        //             <label htmlFor="password" className="text-sm font-medium">비밀번호</label>
        //             <Input
        //                 id="password"
        //                 type="password"
        //                 value={password}
        //                 onChange={(e) => setPassword(e.target.value)}
        //                 required
        //                 className="w-full"
        //                 placeholder="비밀번호를 입력해주세요"
        //             />
        //             </div>
        //             <div className="flex items-center justify-between text-sm">
        //             <div className="space-x-4">
        //                 <Link href="/find/id" title="아이디 찾기" className="text-gray-600 hover:text-gray-900">아이디 찾기</Link>
        //                 <Link href="/find/pw" title="비밀번호 찾기" className="text-gray-600 hover:text-gray-900">비밀번호 찾기</Link>
        //             </div>
        //             <Link href="/signup" className="text-gray-600 hover:text-gray-900">회원가입</Link>
        //             </div>
        //             <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base">
        //             로그인
        //             </Button>
        //         </form>
        //         <div className="mt-8 text-center">
        //             <p className="text-sm text-gray-600">
        //             비회원 주문조회는{" "}
        //             <Link href="/order-lookup" className="text-black font-medium hover:underline">
        //                 여기서
        //             </Link>
        //             {" "}가능합니다.
        //             </p>
        //         </div>
        //         </div>
        //     </main>
        // </div>
        // py-16
        <div className="space-y-6 container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-left mb-8 border-b border-b-[#6f6963] pb-4">로그인</h2>
            <main className="max-w-sm mx-auto">
                {/* 1. 로그인 입력 영역 */}
                <section className="space-y-4 mb-14">
                    <div>
                    <label htmlFor="email" className="block font-semibold mb-1">아이디</label>
                    <Input id="email" type="email" placeholder="이메일을 입력해 주세요." className="w-full border px-4 py-3 text-sm rounded-none h-10" />
                    </div>
                    <div>
                    <label htmlFor="password" className="block font-semibold mb-1">비밀번호</label>
                    <Input id="password" type="password" placeholder="비밀번호를 입력해 주세요." className="w-full border px-4 py-3 text-sm rounded-none h-10" />
                    </div>
                    <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label htmlFor="remember" className="text-sm">로그인 상태 유지</label>
                    </div>
                </section>

                {/* 2. 로그인 버튼 */}
                <Button className="w-full h-12 bg-gray-300 text-white font-semibold mb-4">로그인</Button>

                {/* 3. 회원가입 버튼 */}
                <Button variant="outline" className="w-full h-12 border-black text-black font-semibold mb-4">회원가입</Button>

                {/* 4. 아이디/비밀번호 찾기 */}
                <div className="flex justify-center space-x-4 text-sm text-gray-600">
                {/* <Link href="/find/id" title="아이디 찾기" className="text-gray-600 hover:text-gray-900">아이디 찾기</Link> */}
                    <Link href="/find/id">아이디 찾기</Link>
                    <span>|</span>
                    <Link href="/find/pw">비밀번호 찾기</Link>
                </div>

                {/* Divider */}
                <div className="flex items-center mt-14 mb-6">
                    <div className="flex-grow border-t border-gray-300" />
                    <span className="px-4 text-sm text-gray-500">간편 로그인</span>
                    <div className="flex-grow border-t border-gray-300" />
                </div>

                {/* 간편 로그인 아이콘 */}
                <div className="flex justify-around space-x-6 w-full">
                    <button className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <Apple className="w-5 h-5" />
                    </button>
                    <button className="bg-green-500 text-white rounded-full w-12 h-12 flex items-center justify-center">
                    <InstagramLogoIcon className="w-5 h-5" />
                    </button>
                    <button className="bg-yellow-300 text-black rounded-full w-12 h-12 flex items-center justify-center">
                    <MessageCircleMore className="w-5 h-5" />
                    </button>
                </div>
            </main>
        </div>
    )
}
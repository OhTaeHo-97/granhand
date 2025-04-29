'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import Navigation from "@/components/Navigation";
import { Facebook, Mail } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login attempt:", { email, password });
    };

    return (
        <div className="min-h-screen bg-white">
            <main className="container mx-auto px-6 pt-32">
                <div className="max-w-md mx-auto">
                <h1 className="text-3xl font-serif text-center mb-12">Login</h1>
                <div className="space-y-6 mb-8">
                    <Button 
                    variant="outline" 
                    className="w-full border-gray-300 space-x-2"
                    onClick={() => console.log("Google login")}
                    >
                    <Mail className="w-5 h-5" />
                    <span>Google로 시작하기</span>
                    </Button>
                    <Button 
                    variant="outline" 
                    className="w-full border-gray-300 space-x-2"
                    onClick={() => console.log("Facebook login")}
                    >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook으로 시작하기</span>
                    </Button>
                </div>
                <div className="relative mb-8">
                    <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">또는</span>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">아이디(이메일)</label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                        placeholder="예) granhand@granhand.com"
                    />
                    </div>
                    <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">비밀번호</label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="w-full"
                        placeholder="비밀번호를 입력해주세요"
                    />
                    </div>
                    <div className="flex items-center justify-between text-sm">
                    <div className="space-x-4">
                        <Link href="/find/id" title="아이디 찾기" className="text-gray-600 hover:text-gray-900">아이디 찾기</Link>
                        <Link href="/find/pw" title="비밀번호 찾기" className="text-gray-600 hover:text-gray-900">비밀번호 찾기</Link>
                    </div>
                    <Link href="/signup" className="text-gray-600 hover:text-gray-900">회원가입</Link>
                    </div>
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base">
                    로그인
                    </Button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-sm text-gray-600">
                    비회원 주문조회는{" "}
                    <Link href="/order-lookup" className="text-black font-medium hover:underline">
                        여기서
                    </Link>
                    {" "}가능합니다.
                    </p>
                </div>
                </div>
            </main>
        </div>
    )
}
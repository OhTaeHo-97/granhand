'use client'

import { useState } from "react";
// import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
// import Navigation from "@/components/Navigation";

export default function FindPasswordPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const router = useRouter()

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

        // <>
        //     <form onSubmit={handleSubmit} className="space-y-6">
        //     <div className="space-y-2">
        //         <label htmlFor="name" className="text-sm font-medium">이름</label>
        //         <Input
        //         id="name"
        //         type="text"
        //         value={name}
        //         onChange={(e) => setName(e.target.value)}
        //         required
        //         className="w-full"
        //         placeholder="이름을 입력해주세요"
        //         />
        //     </div>
        //     <div className="space-y-2">
        //         <label htmlFor="phone" className="text-sm font-medium">휴대폰 번호</label>
        //         <Input
        //         id="phone"
        //         type="tel"
        //         value={phone}
        //         onChange={(e) => setPhone(e.target.value)}
        //         required
        //         className="w-full"
        //         placeholder="휴대폰 번호를 입력해주세요"
        //         />
        //     </div>
        //     <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800 h-12 text-base">
        //         비밀번호 찾기
        //     </Button>
        //     </form>
        // </>

        <main className="space-y-6 container mx-auto px-6 pt-8">
            <h2 className="text-lg font-medium text-left mb-4 border-b border-b-[#6f6963] pb-4">비밀번호 찾기</h2>
            <div className="flex items-center mb-8">
                <Button className="w-4 h-4" onClick={() => router.back()}>
                    <ChevronLeft className="w-4 h-4 text-gray-500 mr-3" />
                </Button>
                <div className="text-sm items-center text-gray-500">이전단계</div>
            </div>

            <div className="max-w-xl w-full mx-auto text-left min-h-screen">
                {/* Title */}
                <section className="mb-12">
                    <h1 className="text-lg font-semibold mb-2">비밀번호 찾기</h1>
                    <p className="text-sm text-gray-600">
                    가입한 아이디(이메일)를 입력해 주세요.<br />휴대폰 본인인증을 통해 아이디(이메일)를 확인합니다.
                    </p>
                </section>

                {/* 인증 버튼 */}
                <div className="mb-36 w-full">
                    <h2 className="text-sm mb-2">아이디</h2>
                    <Input type="text" placeholder="이메일을 입력해 주세요." className="h-14"></Input>
                </div>

                {/* 인증 버튼 */}
                <div className="text-center mb-8 w-full">
                    <Button className="bg-neutral-400 text-white h-12 text-base font-semibold w-full">
                    다음
                    </Button>
                </div>

                {/* 인증 버튼 */}
                {/* <div className="flex items-center mb-8 gap-3">
                    <Link href="/find/id/korean" className="w-1/2">
                        <Button className="w-full border bg-gray-200">
                            내국인
                        </Button>
                    </Link>
                    <Link href="/find/id/foreigner" className="w-1/2">
                        <Button className="w-full border">
                            외국인
                        </Button>
                    </Link>
                </div> */}
            </div>
        </main>
    );
}
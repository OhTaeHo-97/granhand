'use client'

import { useState } from "react";
// import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import ChangePwModal from "../components/change-pw-modal";
// import Navigation from "@/components/Navigation";

export default function ResetPasswordPage() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [open, setOpen] = useState(false)
    const router = useRouter()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Find ID attempt:", { name, phone });
    };

    return (
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
                    <h1 className="text-lg font-semibold mb-2">비밀번호 재설정</h1>
                    <p className="text-sm text-gray-600">
                    비밀번호를 변경해 주세요.<br />영문, 숫자, 특수문자 포함 8~20자 이내로 입력해 주세요.
                    </p>
                </section>

                {/* 인증 버튼 */}
                <div className="mb-36 w-full space-y-2">
                    <h2 className="text-sm mb-2">비밀번호</h2>
                    <Input type="password" placeholder="새 비밀번호를 입력해 주세요." className="h-14"></Input>
                    <Input type="password" placeholder="새 비밀번호를 확인해 주세요." className="h-14"></Input>
                </div>

                {/* 인증 버튼 */}
                <div className="text-center mb-8 w-full">
                    <Button className="bg-neutral-400 text-white h-12 text-base font-semibold w-full" onClick={() => setOpen((prev) => !prev)}>
                    비밀번호 재설정
                    </Button>
                </div>
            </div>
            <ChangePwModal open={open} setOpen={setOpen} />
        </main>
    );
}
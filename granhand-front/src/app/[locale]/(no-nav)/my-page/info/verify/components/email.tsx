'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function EmailUserVerify() {
    const [password, setPassword] = useState('')

    return (
        <>
            <h2 className="text-lg font-semibold mb-2">비밀번호 재확인</h2>
            <p className="text-sm text-gray-600 mb-8">
                회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해 주세요.
            </p>

            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">아이디</label>
                <div className="h-12 px-4 flex items-center border bg-gray-100 rounded text-sm text-gray-600">
                gran****@****l.com
                </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">비밀번호</label>
                <Input
                type="password"
                className="h-12 text-sm"
                placeholder="현재 비밀번호를 입력해 주세요."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <Button
                className={`w-full h-12 text-sm font-semibold ${password ? "bg-black text-white" : "bg-gray-200 text-white"}`}
                disabled={!password}
            >
                확인
            </Button>
        </>
    )
}
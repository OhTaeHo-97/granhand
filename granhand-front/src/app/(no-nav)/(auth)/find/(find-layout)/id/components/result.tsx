import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function FindIdResult() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [validatation, setValidation] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Find ID attempt:", { name, phone });
    };

    return (
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
                {/* 아이디 찾기 */}
                다음
            </Button>
            </form>
        </>
    )
}
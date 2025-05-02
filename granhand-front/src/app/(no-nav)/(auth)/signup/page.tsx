'use client'

import { useState } from "react";
// import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
// import Navigation from "@/components/Navigation";

export default function SignupPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: "",
        phone: "",
    });

    const [agreements, setAgreements] = useState({
        terms: false,
        privacy: false,
        marketing: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: 회원가입 로직 구현
        console.log("Signup attempt:", { formData, agreements });
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* <Navigation /> */}
            <main className="container mx-auto px-6 pt-32">
            <div className="max-w-md mx-auto">
                <h1 className="text-2xl font-medium text-center mb-8">회원가입</h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">이메일</label>
                    <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="이메일을 입력해주세요"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="password" className="text-sm">비밀번호</label>
                    <Input
                    id="password"
                    name="password"
                    type="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="비밀번호를 입력해주세요"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="confirmPassword" className="text-sm">비밀번호 확인</label>
                    <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="비밀번호를 다시 입력해주세요"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm">이름</label>
                    <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="이름을 입력해주세요"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm">휴대폰 번호</label>
                    <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="휴대폰 번호를 입력해주세요"
                    />
                </div>
                <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                    <Checkbox
                        id="terms"
                        checked={agreements.terms}
                        onCheckedChange={(checked) => 
                        setAgreements(prev => ({ ...prev, terms: checked as boolean }))
                        }
                    />
                    <label htmlFor="terms" className="text-sm">
                        이용약관 동의 (필수)
                    </label>
                    </div>
                    <div className="flex items-center space-x-2">
                    <Checkbox
                        id="privacy"
                        checked={agreements.privacy}
                        onCheckedChange={(checked) => 
                        setAgreements(prev => ({ ...prev, privacy: checked as boolean }))
                        }
                    />
                    <label htmlFor="privacy" className="text-sm">
                        개인정보 수집 및 이용 동의 (필수)
                    </label>
                    </div>
                    <div className="flex items-center space-x-2">
                    <Checkbox
                        id="marketing"
                        checked={agreements.marketing}
                        onCheckedChange={(checked) => 
                        setAgreements(prev => ({ ...prev, marketing: checked as boolean }))
                        }
                    />
                    <label htmlFor="marketing" className="text-sm">
                        마케팅 정보 수신 동의 (선택)
                    </label>
                    </div>
                </div>
                <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                    가입하기
                </Button>
                </form>
                <div className="mt-6 text-center">
                <p className="text-sm">
                    이미 계정이 있으신가요?{" "}
                    <Link href="/login" className="text-black hover:underline">
                    로그인
                    </Link>
                </p>
                </div>
            </div>
            </main>
        </div>
    )
}

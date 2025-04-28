'use client'

import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LayoutProps {
    children: React.ReactNode
    params: { type: string }
}

export default function FindAccountLayout({ children, params }: LayoutProps) {
    // const titleMap: Record<string, string> = {
    //     id: '아이디 찾기',
    //     pw: '비밀번호 찾기'
    // }
    // const title = titleMap[params.type] || '찾기'

    const pathname = usePathname()

    const title = pathname.includes('/id')
        ? '아이디 찾기'
        : pathname.includes('/pw')
        ? '비밀번호 찾기'
        : '찾기'

    return (
        <div className="min-h-screen bg-white">
            {/* <Navigation /> */}
            <Progress value={70} />
            <main className="container mx-auto px-6 pt-32">
                <div className="max-w-md mx-auto">
                    {/* <h1 className="text-3xl font-serif text-center mb-12">아이디 찾기</h1> */}
                    <h1 className="text-3xl font-serif text-center mb-12">{title}</h1>
                    {children}
                    <div className="mt-8 text-center space-y-4">
                    <div className="text-sm">
                        <Link href="/login" className="text-gray-600 hover:text-gray-900">로그인</Link>
                        <span className="mx-4 text-gray-300">|</span>
                        <Link href="/find/id" className="text-gray-600 hover:text-gray-900">아이디 찾기</Link>
                        <span className="mx-4 text-gray-300">|</span>
                        <Link href="/find/pw" className="text-gray-600 hover:text-gray-900">비밀번호 찾기</Link>
                        <span className="mx-4 text-gray-300">|</span>
                        <Link href="/signup" className="text-gray-600 hover:text-gray-900">회원가입</Link>
                    </div>
                    </div>
                </div>
            </main>
        </div>
        // {children}
    )
}
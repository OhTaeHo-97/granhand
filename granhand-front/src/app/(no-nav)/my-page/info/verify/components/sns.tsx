import { Button } from "@/components/ui/button";

export default function SnsUserVerify() {
    return (
        <>
            <h2 className="text-lg font-semibold mb-2">로그인 계정 재확인</h2>
            <p className="text-sm text-gray-600 mb-8">
                회원님의 정보를 안전하게 보호하기 위해 인증 절차가 필요해요.
            </p>

            <div className="mb-6">
                <label className="block text-sm font-semibold mb-1">아이디</label>
                <div className="h-12 px-4 flex items-center border bg-gray-100 rounded text-sm text-gray-600">
                gran****@****l.com
                </div>
            </div>

            <Button
                className="w-full h-12 text-sm font-semibold bg-black text-white"
                // disabled={!password}
            >
                카카오 계정으로 인증
            </Button>
        </>
    )
}
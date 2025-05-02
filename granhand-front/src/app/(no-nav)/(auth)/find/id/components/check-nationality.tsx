import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function NationalityPage() {
    return (
        <div className="max-w-xl w-full mx-auto text-left min-h-screen">
            {/* Title */}
            <section className="mb-64">
                <h1 className="text-lg font-semibold mb-2">아이디 찾기</h1>
            </section>

            {/* 인증 버튼 */}
            <div className="flex items-center mb-8 gap-3">
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
            </div>

            {/* 안내 메시지 */}
            <Information bgColor="bg-gray-200" contents={[ {elem: 'SNS 계정으로 가입하신 회원님은 아이디 찾기가 불가능합니다.'}, {elem: '가입하신 계정이 기억나지 않을 경우 hello@granhand.com으로 문의 하시기 바랍니다.'} ]} />
        </div>
        // <main className="space-y-6 container mx-auto px-6 pt-8">
        // {/* Header */}
        //     <h2 className="text-lg font-medium text-left mb-4 border-b border-b-[#6f6963] pb-4">아이디 찾기</h2>
        //     <div className="flex items-center mb-8">
        //         <Button className="w-4 h-4">
        //             <ChevronLeft className="w-4 h-4 text-gray-500 mr-3" />
        //         </Button>
        //         <div className="text-sm items-center text-gray-500">이전단계</div>
        //     </div>

        //     <div className="max-w-xl w-full mx-auto text-left min-h-screen">
        //         {/* Title */}
        //         <section className="mb-64">
        //             <h1 className="text-lg font-semibold mb-2">아이디 찾기</h1>
        //             {/* <p className="text-sm text-gray-600">
        //             휴대폰 본인인증을 통해 아이디(이메일)를 확인합니다.
        //             </p> */}
        //         </section>

        //         {/* 인증 버튼 */}
        //         <div className="flex items-center mb-8 gap-3">
        //             <Button className="w-1/2 border bg-gray-200">
        //                 내국인
        //             </Button>
        //             <Button className="w-1/2 border">
        //                 외국인
        //             </Button>
        //         </div>
        //         {/* <div className="text-center mb-8 w-full">
        //             <Button className="bg-[#2b2119] text-white h-12 text-base font-semibold w-full">
        //             휴대폰 인증
        //             </Button>
        //         </div> */}

        //         {/* 안내 메시지 */}
        //         <Information bgColor="bg-gray-200" contents={[ {elem: 'SNS 계정으로 가입하신 회원님은 아이디 찾기가 불가능합니다.'}, {elem: '가입하신 계정이 기억나지 않을 경우 hello@granhand.com으로 문의 하시기 바랍니다.'} ]} />
        //     </div>
        // </main>
    )
}
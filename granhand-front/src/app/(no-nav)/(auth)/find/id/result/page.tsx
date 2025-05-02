import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function FindIdResultPage() {
    return (
        <div className="max-w-xl w-full mx-auto text-left min-h-screen">
            <h1 className="text-xl font-bold">계정을 찾았습니다.</h1>
            {/* <div className="bg-gray-50 p-4 flex flex-col space-y-1 h-32 items-center"> */}
            <div className="border border-gray-100 bg-gray-50 p-4 h-32 flex flex-col justify-center items-center space-y-1">
                <div className="font-semibold text-gray-800">granhand@gmail.com</div>
                <div className="text-sm text-gray-500 ">2023.08.03 가입</div>
            </div>

            <div className="flex items-center justify-between text-sm font-medium text-gray-700 cursor-pointer border-b border-gray-300 pb-1 w-fit">
                비밀번호 재설정하기 <ChevronRight className="w-4 h-4 ml-1" />
            </div>

            <Button className="w-full bg-neutral-800 text-white font-semibold h-12">
                로그인
            </Button>

            <Information bgColor="bg-gray-200" contents={[ { elem: 'SNS 계정으로 가입하신 회원님은 비밀번호를 재설정할 수 없습니다.' }, { elem: "로그인 화면에서 '간편 로그인' 하신 후 이용해 주세요." } ]} />
        </div>
    )
}
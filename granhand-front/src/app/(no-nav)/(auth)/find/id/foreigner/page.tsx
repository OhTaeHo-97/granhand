import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import { useState } from "react";

export default function ForeignFindId({ onNext }: { onNext: () => void }) {
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [validatation, setValidation] = useState("")

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Find ID attempt:", { name, phone });
    //     onNext();
    // };

    return (
        <div className="max-w-xl w-full mx-auto text-left min-h-screen">
            {/* Title */}
            <section className="mb-10">
                <h1 className="text-lg font-semibold mb-2">휴대폰 인증을 해주세요.</h1>
                {/* <p className="text-sm text-gray-600">
                휴대폰 본인인증을 통해 아이디(이메일)를 확인합니다.
                </p> */}
            </section>

            {/* 인증 버튼 */}
            <div className="text-left mb-8 w-full">
                {/* <Button className="bg-[#2b2119] text-white h-12 text-base font-semibold w-full">
                휴대폰 인증
                </Button> */}
                <div className="mb-4">
                    <label className="block mb-2 font-semibold text-sm">휴대폰 번호</label>
                    <div className="flex gap-2">
                    <Input
                        type="tel"
                        placeholder="+1 10 123 4567"
                        className="flex-1 h-14"
                    />
                    <Button className="bg-neutral-300 text-white font-bold px-4 h-14 min-w-30">인증요청</Button>
                    </div>
                </div>

                <div className="mb-10">
                    <label className="block mb-2 font-semibold text-sm">인증번호</label>
                    <Input
                        type="text"
                        placeholder="ex) 000000"
                        className="h-14"
                    />
                </div>

                <Button className="w-full bg-neutral-400 text-white cursor-not-allowed h-16 font-bold text-base" disabled>
                    다음
                </Button>
            </div>

            {/* 안내 메시지 */}
            {/* <Information bgColor="bg-gray-200" contents={[ {elem: 'SNS 계정으로 가입하신 회원님은 아이디 찾기가 불가능합니다.'}, {elem: '가입하신 계정이 기억나지 않을 경우 hello@granhand.com으로 문의 하시기 바랍니다.'} ]} /> */}
        </div>
    )
}
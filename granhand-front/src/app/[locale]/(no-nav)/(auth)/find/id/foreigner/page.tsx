'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTranslation } from "../../../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale";
// import { useState } from "react";

// export default function ForeignFindId({ onNext }: { onNext: () => void }) {
export default function ForeignFindId() {
    // const [name, setName] = useState("");
    // const [phone, setPhone] = useState("");
    // const [validatation, setValidation] = useState("")

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log("Find ID attempt:", { name, phone });
    //     onNext();
    // };

    // const locale = useParams()?.locale as LocaleTypes
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])

    return (
        <div className="max-w-xl w-full mx-auto text-left min-h-screen">
            {/* Title */}
            <section className="mb-10">
                <h1 className="text-lg font-semibold mb-2">{t('auth:verify_phone')}</h1>
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
                    <label className="block mb-2 font-semibold text-sm">{t('auth:phone')}</label>
                    <div className="flex gap-2">
                    <Input
                        type="tel"
                        placeholder="+1 10 123 4567"
                        className="flex-1 h-14"
                    />
                    <Button className="bg-neutral-300 text-white font-bold px-4 h-14 min-w-30">{t('auth:request_ver')}</Button>
                    </div>
                </div>

                <div className="mb-10">
                    <label className="block mb-2 font-semibold text-sm">{t('auth:verification')}</label>
                    <Input
                        type="text"
                        placeholder="ex) 000000"
                        className="h-14"
                    />
                </div>

                <Button className="w-full bg-neutral-400 text-white cursor-not-allowed h-16 font-bold text-base" disabled>
                    {t('next')}
                </Button>
            </div>

            {/* 안내 메시지 */}
            {/* <Information bgColor="bg-gray-200" contents={[ {elem: 'SNS 계정으로 가입하신 회원님은 아이디 찾기가 불가능합니다.'}, {elem: '가입하신 계정이 기억나지 않을 경우 hello@granhand.com으로 문의 하시기 바랍니다.'} ]} /> */}
        </div>
    )
}
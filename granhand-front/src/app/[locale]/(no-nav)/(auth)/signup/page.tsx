'use client';

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Check } from "lucide-react";
import { useState } from "react";
import SignupHeader from "./components/header";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import BasicModal from "@/app/[locale]/components/modal";
import { cn } from "@/lib/utils";

export default function SignupPage() {
    // const locale = useParams()?.locale as LocaleTypes
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const terms = [
        {
            id: 'service',
            option: t('required'),
            label: t('auth:service_agreement'),
            required: true,
            content: '추후에 이와 관련된 ... (약관 내용 예시) 추후에 이와 관련된 ... (약관 내용 예시)\n추후에 이와 관련된 ... (약관 내용 예시)\n추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)추후에 이와 관련된 ... (약관 내용 예시)',
        },
        {
            id: 'privacy',
            option: t('required'),
            label: t('auth:privacy_agreement'),
            required: true,
            content: '추후에 이와 관련된 ... (약관 내용 예시)',
        },
        {
            id: 'marketing',
            option: t('optional'),
            label: t('auth:marketing_agreement'),
            required: false,
            content: '추후에 이와 관련된 ... (약관 내용 예시)',
        },
    ]

    const [checked, setChecked] = useState({
        service: false,
        privacy: false,
        marketing: false,
        age: false,
        ad: false,
        all: false,
    })

    // 전체 동의 체크박스 핸들러
    const handleAll = (value: boolean) => {
        setChecked({
            service: value,
            privacy: value,
            marketing: value,
            age: value,
            ad: value,
            all: value,
        })
    }

    // 개별 체크박스 핸들러
    const handleCheck = (key: string, value: boolean) => {
        const next = { ...checked, [key]: value }
        next.all = next.service && next.privacy && next.marketing && next.age && next.ad
        setChecked(next)
    }

    const isRequiredChecked = () => {
        return checked.service && checked.privacy && checked.age
    }

    // const isAllChecked = () => {
    //     return isRequiredChecked() && checked.marketing && checked.ad
    // }

    const onClickSignupBtn = () => {
        if(!isRequiredChecked()) {
            setOpen((prev) => !prev)
            return
        }

        router.push(`${currentLocale}/signup/id`)
    }

    return (
        <div className='w-[740px] container mx-auto px-6 pt-8 min-h-screen'>
            <SignupHeader />
            <div className="w-full max-w-2xl flex flex-col items-center mx-auto">
                <h1 className="text-2xl font-bold text-center mb-2 leading-[42px] text-[#6F6963]">{t('auth:signup_title')}</h1>
                <p className="text-center text-[#6F6963] font-medium mb-8 leading-[24px]">
                {t('auth:policy_agreement')}
                </p>
                <div className="w-[740px] h-[494px] bg-[#322A2408] rounded-xl p-8 mb-6">
                    {terms.map((term) => (
                        <div key={term.id} className="mb-6">
                        <Label className="flex items-start gap-2 cursor-pointer">
                            <Checkbox
                                checked={checked[term.id as keyof typeof checked]}
                                onCheckedChange={(v) =>
                                    handleCheck(term.id, Boolean(v))
                                }
                                className="w-5 h-5 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            >
                            {checked[term.id as keyof typeof checked] && (
                                <Check className="w-4 h-4 text-black" />
                            )}
                            </Checkbox>
                            <div className="flex items-center gap-2 text-[#6F6963]">
                                <span className="text-xs leading-[20px]">{term.option}</span> <span className="text-sm font-bold leading-[22px]">{term.label}</span>
                            </div>
                        </Label>
                        <div className="w-[670px] h-[86px] bg-white text-[10px] text-[#6F6963] rounded p-4 mt-4 overflow-y-auto border border-[#E9E6E0] leading-[18px]">
                            {term.content}
                        </div>
                        </div>
                    ))}
                </div>
                <div className="mx-auto">
                    <div className="pl-8">
                        <div className="mb-4">
                            <Label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={checked.age}
                                onCheckedChange={(v) => handleCheck('age', Boolean(v))}
                                // className="w-5 h-5 border rounded flex items-center justify-center bg-white"
                                className="w-5 h-5 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            >
                                {checked.age && <Check className="w-4 h-4 text-black" />}
                            </Checkbox>
                            <div className="flex items-center gap-2 text-[#6F6963]">
                                <span className="text-xs leading-[20px]">{t('required')}</span> <span className="font-bold text-sm leading-[22px]">{t('auth:older_fourteen')}</span>
                            </div>
                            </Label>
                        </div>
                        <div className="mb-4">
                            <Label className="flex items-center gap-2 cursor-pointer">
                            <Checkbox
                                checked={checked.ad}
                                onCheckedChange={(v) => handleCheck('ad', Boolean(v))}
                                // className="w-5 h-5 border rounded flex items-center justify-center bg-white"
                                className="w-5 h-5 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                            >
                                {checked.ad && <Check className="w-4 h-4 text-black" />}
                            </Checkbox>
                            <div className="flex items-center gap-2 text-[#6F6963]">
                                <span className="text-xs leading-[20px]">{t('optional')}</span> <span className="font-bold text-sm leading-[22px]">{t('auth:promotion_agreement')}</span>
                            </div>
                            </Label>
                        </div>
                    </div>
                    <div className="border-t border-dashed my-6" />
                    <Label className="flex items-center gap-2 cursor-pointer mb-5 pl-8">
                        <Checkbox
                            checked={checked.all}
                            onCheckedChange={(v) => handleAll(Boolean(v))}
                            // className="w-5 h-5 border rounded flex items-center justify-center bg-white"
                            className="w-5 h-5 data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                        >
                            {checked.all && <Check className="w-4 h-4 text-black" />}
                        </Checkbox>
                        <div>
                            <span className="font-bold text-base text-[#6F6963] leading-[24px]">{t('auth:all_agreement')}</span>
                        </div>
                    </Label>
                    <Button
                        className={cn(
                            "w-[739px] h-[46px] py-3 bg-[#FDFBF5] border !border-[#C0BCB6] rounded text-[#322A24] font-bold transition disabled:cursor-not-allowed hover:bg-[#f5f3ef] text-sm leading-[22px]",
                            !(checked.service && checked.privacy && checked.age) ? "cursor-not-allowed" : "cursor-pointer"
                        )}
                        disabled={!(checked.service && checked.privacy && checked.age)}
                        onClick={onClickSignupBtn}
                    >
                        {t('auth:start_signup')}
                        {/* 동의하고 가입하기 */}
                    </Button>
                </div>
                </div>
            <BasicModal open={open} setOpen={setOpen} contents="less_required" btnText="confirm" locale={locale} />
        </div>
    );
}
'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function MemberInfo({ t }: { t: (key: string) => string }) {
    const [verified, setVerified] = useState(false)

    return (
        <section className="w-full max-w-xl mb-12">
            <h2 className="text-sm font-bold text-[#322A24] mb-8">{t('auth:profile_info')}</h2>
            {/* <h2 className="text-2xl font-bold text-[#2D2926] mb-8">회원 정보</h2> */}
            <div className="space-y-6">
                <div>
                    <Label htmlFor="name" className="block text-sm text-[#322A24] font-medium mb-2">{t('auth:name')}</Label>
                    <Input
                    id="name"
                    type="text"
                    defaultValue="홍길동"
                    readOnly={!verified}
                    className={`w-[358px] h-[46px] rounded px-4 py-5 text-sm text-[#6F6963] font-medium outline-none ${verified ? 'bg-white border' : 'bg-[#E9E6E0] !border-[#C0BCB6]'}`}
                    />
                </div>
                <div>
                    <Label htmlFor="birth" className="block text-sm text-[#322A24] font-medium mb-2">{t('auth:birth')}</Label>
                    <Input
                    id="birth"
                    type="text"
                    defaultValue="2000.10.10"
                    readOnly={!verified}
                    className={`w-[358px] h-[46px] rounded px-4 py-5 text-sm text-[#6F6963] font-medium outline-none ${verified ? 'bg-white border' : 'bg-[#E9E6E0] !border-[#C0BCB6]'}`}
                    />
                </div>
                <div>
                    <Label htmlFor="phone" className="block text-sm text-[#322A24] font-medium mb-2">{t('auth:phone')}</Label>
                    <Input
                    id="phone"
                    type="text"
                    defaultValue="01012345678"
                    readOnly={!verified}
                    className={`w-[358px] h-[46px] rounded px-4 py-5 text-sm text-[#6F6963] font-medium outline-none ${verified ? 'bg-white border' : 'bg-[#E9E6E0] !border-[#C0BCB6]'}`}
                    />
                </div>
            </div>
            <Button
                className="w-[358px] mt-10 py-6 h-[46px] text-sm font-bold bg-[#322A24] text-white hover:bg-[#48413A]"
                onClick={() => setVerified((prev) => !prev)}
            >
                {t('auth:edit_info')}
            </Button>
        </section>
    )
}
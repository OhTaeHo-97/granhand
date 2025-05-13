import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MemberInfo({ t }: { t: (key: string) => string }) {
    return (
        <section className="w-full max-w-xl mb-12">
            <h2 className="text-xl font-bold text-[#322A24] mb-8">{t('auth:profile_info')}</h2>
            {/* <h2 className="text-2xl font-bold text-[#2D2926] mb-8">회원 정보</h2> */}
            <div className="space-y-6">
                <div>
                    <Label htmlFor="name" className="block text-lg text-[#322A24] font-semibold mb-2">{t('auth:name')}</Label>
                    <Input
                    id="name"
                    type="text"
                    value="홍길동"
                    readOnly
                    className="w-full bg-[#E9E6E0] rounded px-4 py-5 !text-lg text-[#6F6963] font-medium border-none outline-none h-16"
                    />
                </div>
                <div>
                    <Label htmlFor="birth" className="block text-lg text-[#322A24] font-semibold mb-2">{t('auth:birth')}</Label>
                    <Input
                    id="birth"
                    type="text"
                    value="2000.10.10"
                    readOnly
                    className="w-full bg-[#E9E6E0] rounded px-4 py-5 !text-lg text-[#6F6963] font-medium border-none outline-none h-16"
                    />
                </div>
                <div>
                    <Label htmlFor="phone" className="block text-lg text-[#322A24] font-semibold mb-2">{t('auth:phone')}</Label>
                    <Input
                    id="phone"
                    type="text"
                    value="01012345678"
                    readOnly
                    className="w-full bg-[#E9E6E0] rounded px-4 py-5 !text-lg text-[#6F6963] font-medium border-none outline-none h-16"
                    />
                </div>
            </div>
            <Button
            className="w-full mt-10 py-6 h-18 text-2xl font-bold bg-[#322A24] text-white hover:bg-[#48413A]"
            >
                {t('auth:edit_info')}
            </Button>
        </section>
    )
}
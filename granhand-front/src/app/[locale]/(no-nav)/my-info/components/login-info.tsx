import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function LoginInfo({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    return (
        <section className="w-full max-w-xl mb-12">
            <h2 className="text-xl font-bold text-[#322A24]">{t('auth:login_info')}</h2>
            <div className="flex flex-col items-center">
                <div className="pt-1 mr-3 mb-6">
                    <div className={`w-[90] h-[90] rounded-full text-5xl flex items-center justify-center font-bold text-white`} style={{ backgroundColor: "#e9e6e0" }}>
                        B
                    </div>
                </div>
                <div className="text-xl text-[#6F6963] mb-6">gra*****@*****.com</div>
                <Link href={`${currentLocale}/my-info/change-pw`}>
                    <Button
                        variant="secondary"
                        className="w-fit p-7 text-lg font-semibold bg-[#322A240A] text-[#6F6963] hover:bg-[#e0ded7] mb-2"
                    >
                        {t('auth:change_pw')}
                    </Button>
                </Link>
            </div>
        </section>
    )
}
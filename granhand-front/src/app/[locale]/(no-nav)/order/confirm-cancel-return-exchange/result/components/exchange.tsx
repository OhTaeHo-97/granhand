import Information from "@/components/information";
import { Check } from "lucide-react";

export default function ExchangeResult({ t }: { t: (key: string) => string }) {
    return (
        <main className="w-full max-w-3xl mx-auto items-center mt-[12%]">
            <div className="mb-[10%]">
                <div className="mb-6 w-10 h-10 border flex rounded-full items-center mx-auto text-gray-400 font-bold">
                    <Check className="items-center w-full" />
                </div>
                <h1 className="text-xl font-bold mb-10 text-center">{t('exchange_submit')}</h1>
            </div>

            <Information bgColor="bg-gray-200" className="w-fit max-w-full mx-auto" contents={[
                {
                    elem: t('exchange_info1')
                },
                {
                    elem: t('exchange_info2')
                }
            ]} />
        </main>
    )
}
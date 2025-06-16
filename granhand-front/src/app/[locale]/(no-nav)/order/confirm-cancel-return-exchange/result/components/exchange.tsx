import Information from "@/components/information";
import { Check } from "lucide-react";

export default function ExchangeResult({ t }: { t: (key: string) => string }) {
    return (
        <main className="w-[577px] max-w-3xl mx-auto items-center mt-[12%]">
            <div className="mb-[10%]">
                <div className="mb-6 w-[32px] h-[32px] border !border-[#322A241A] flex rounded-full items-center mx-auto text-gray-400 font-bold">
                    <Check className="items-center w-full text-[#C0BCB6]" />
                </div>
                <h1 className="font-bold mb-10 text-center text-[#322A24]">{t('exchange_submit')}</h1>
            </div>

            <Information bgColor="bg-[#322A2408]" className="w-fit max-w-full mx-auto h-[68px]" contents={[
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
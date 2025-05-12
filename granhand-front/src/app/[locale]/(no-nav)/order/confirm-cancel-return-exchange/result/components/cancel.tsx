import Information from "@/components/information";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function CancelResult({ t }: { t: (key: string) => string }) {
    return (
        <main className="w-full max-w-3xl mx-auto items-center mt-[12%]">
            <div className="mb-[10%]">
                <div className="mb-6 w-10 h-10 border flex rounded-full items-center mx-auto text-gray-400 font-bold">
                    <Check className="items-center w-full" />
                </div>
                <h1 className="text-xl font-bold mb-10 text-center">{t('cancel_cmpl')}</h1>
            </div>

            <Information bgColor="bg-gray-200" className="w-fit max-w-full mx-auto" contents={[
                {
                    elem: t('cancel_info1')
                },
                {
                    elem: t('cancel_info2')
                }
            ]} />

            <div className="w-full flex justify-center mt-[6%]">
                <Button className="mt-8 px-6 py-3 border border-gray-300 rounded text-sm font-medium h-14 hover:bg-gray-200">
                    {t('check_history')}
                </Button>
            </div>
        </main>
    )
}
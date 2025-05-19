import { Label } from "@/components/ui/label";

export default function CoopInfo({ t }: { t: (key: string) => string }) {
    return (
        <section>
            <h2 className="font-bold text-xl text-[#5E5955]">{t('coop:create_inquiry')}</h2>
            <div className="border-l border-r border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="mt-6 border-t">
                    <div className="grid grid-cols-[150px_2.42fr_150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:title')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            협력 제안
                        </div>
                        <div className="bg-[#322A2408] border-r border-l border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:date')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            2024-01-14
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr_150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:name')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            홍길동
                        </div>
                        <div className="bg-[#322A2408] border-r border-l border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:phone')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                        010-1234-5678
                        </div>
                        <div className="bg-[#322A2408] border-r border-l border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:email')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                        asdasdasdasds@gmail.com
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full min-h-50">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:content')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            안녕하세요. 하이데브 홍길동입니다.
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full min-h-50">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:image')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            안녕하세요. 하이데브 홍길동입니다.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { Label } from "@/components/ui/label";

export default function ReplyInfo({ t }: { t: (key: string) => string }) {
    return (
        <section>
            <div className="flex items-center justify-start gap-3">
                <h2 className="font-bold text-xl text-[#5E5955]">{t('coop:reply')}</h2>
                <span className="border !border-red-500 text-red-500 rounded-full px-4 py-1 text-sm font-semibold">
                    {t('coop:pending')}
                </span>
            </div>
            <div className="border-l border-r border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="mt-6 border-t">
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                            <Label className="font-semibold">{t('coop:sender')}</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            {"그랑핸드, <hello@granhand.com>"}
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
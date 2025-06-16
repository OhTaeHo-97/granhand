import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ExchangeRefundInformation } from "../page";

export default function ExchangeRefundSettings({ contents, setContents, t, currentLocale }: { contents: ExchangeRefundInformation, setContents: React.Dispatch<React.SetStateAction<ExchangeRefundInformation>>, t: (key: string) => string, currentLocale: string }) {
    const handleContentsChange = <K extends keyof ExchangeRefundInformation>(
        key: K,
        value: ExchangeRefundInformation[K]
    ) => {
        setContents((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <section className="text-[#5E5955]">
            <h2 className="font-bold text-xl text-[#5E5955]">{t('exchange_setting')}</h2>
            <div className="border border-gray-200 text-[#231815B2] text-sm w-full bg-white mt-4 mb-7 min-w-178">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('one_way_fee')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <div className="flex items-center gap-4">
                            <div className="relative w-64">
                                <Input type="number" value={contents.oneWayFee} onChange={(e) => handleContentsChange('oneWayFee', Number(e.target.value))} className="pr-10 appearance-none" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">{currentLocale === '' ? '원' : 'KRW'}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('round_trip_fee')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <div className="flex items-center gap-4">
                            <div className="relative w-64">
                                <Input type="number" value={contents.roundTripFee} onChange={(e) => handleContentsChange('roundTripFee', Number(e.target.value))} className="pr-10" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">{currentLocale === '' ? '원' : 'KRW'}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
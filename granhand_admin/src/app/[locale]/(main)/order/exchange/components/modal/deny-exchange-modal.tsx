import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function DenyExchangeModalContents({ t }: { t: (key: string) => string }) {
    return (
        <>
            <div className="p-4">
                <ul className="text-[#6F6963] list-disc">
                    <li>{t('order:process_exchange_rejection_info1')}</li>
                    <li>{t('order:process_exchange_rejection_info2')}</li>
                </ul>
            </div>
            <div className="text-[#6f6963] text-sm w-full min-w-120 mt-6">
                <table className="w-full text-left border-collapse min-w-6xl border">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 text-center border">{t('order:order_number')}</th>
                            <th className="p-2 text-center border">{t('order:ordered_items')}</th>
                            <th className="p-2 text-center border">{t('order:quantity')}</th>
                            <th className="p-2 text-center border">{t('order:exchange_reason')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="border-b h-14 text-[#1A1A1A]">
                                <td className="p-2 text-center border">2024021012345678</td>
                                <td className="p-2">
                                    <div className="space-y-1 text-sm">
                                        <div className="flex items-center gap-1 font-semibold text-black">Roland Multi Perfume 100ml</div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <span>각인 여부 : Y / 문구 : GRANHAND</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <span>용량: 100ml</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-gray-400 text-xs">
                                            <span>쇼핑백: 구매 안함</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-2 text-center border">1</td>
                                <td className="p-2 text-center border">옵션 변경</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="rounded-md mt-6 space-y-3">
                    <div className="grid grid-cols-[110px_1fr] h-full m-0">
                        <div className="flex justify-start p-2">
                            <Label className="font-bold">{t('order:reason_exchange_reject')}*</Label>
                        </div>
                        <div className="px-5 py-2 w-full">
                            <div className="flex items-center gap-2">
                                <Textarea placeholder={t('order:enter_detail_reason')} className="resize-none h-40 w-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
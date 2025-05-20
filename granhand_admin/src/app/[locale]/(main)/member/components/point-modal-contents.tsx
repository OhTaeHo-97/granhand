import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PointModalContents({ t }: { t: (key: string) => string }) {
    return (
        <table className="w-full text-center border-collapse min-w-8xl border overflow-auto">
            <thead className="bg-[#322A2408] border-t h-10">
                <tr className="border-b text-[#6F6963]">
                    <th className="p-2 items-center border">{t('member:adjustment_type')}</th>
                    <th className="p-2 items-center border">{t('point:point')}</th>
                    <th className="p-2 text-center border">{t('member:description')}</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b h-14 text-[#1A1A1A]">
                    <td className="p-2 items-center border min-w-40">
                        <Select defaultValue="grant_points">
                            <SelectTrigger className="border rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                            <SelectValue placeholder={t('point:grant_points')} />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem key="grant_points" value="grant_points" className="px-3 py-2 cursor-pointer">{t('point:grant_points')}</SelectItem>
                                <SelectItem key="withdraw_points" value="withdraw_points" className="px-3 py-2 cursor-pointer">{t('point:withdraw_points')}</SelectItem>
                            </SelectContent>
                        </Select>
                    </td>
                    <td className="p-2 items-center border w-full min-w-50">
                        <Input placeholder={t('point:point')} className="w-full" />
                    </td>
                    <td className="p-2 items-center border w-full min-w-150">
                        <Input placeholder={t('member:description_placeholder')} className="w-full" />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}
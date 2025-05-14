import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PointControlField({ t }: { t: (key: string) => string }) {
    const pointStatus = [
        { label: t('point:grant_points'), value: 'grant_points' },
        { label: t('point:withdraw_points'), value: 'withdraw_points' }
    ]

    return (
        <>
        <table className="w-full text-center border-collapse border">
        <thead className="bg-[#322A2408] h-15">
            <tr className="border-b text-[#6F6963]">
            <th className="p-2 border">{t('point:increase_decrease')}</th>
            <th className="p-2 border">{t('point:point')}</th>
            <th className="p-2 border">{t('point:description')}</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b h-15">
                <td className="p-2 border h-full align-middle flex items-center justify-center">
                    <Select defaultValue="give">
                        <SelectTrigger className="border rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                        <SelectValue placeholder={t('point:grant_points')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            {pointStatus.map(({ label, value }) => (
                                <SelectItem value={value} className="px-3 py-2 /cursor-pointer">{label}</SelectItem>
                            ))}
                            {/* <SelectItem value="give" className="px-3 py-2 /cursor-pointer">포인트 지급(+)</SelectItem>
                            <SelectItem value="take" className="px-3 py-2 cursor-pointer">포인트 회수(-)</SelectItem> */}
                        </SelectContent>
                    </Select>
                </td>
                <td className="p-2 border">
                    <Input type="number" placeholder={t('point:point')} />
                </td>
                <td className="p-2 border">
                    <Input type="text" placeholder={t('point:enter_description')} />
                </td>
            </tr>
        </tbody>
        </table>
        <div className="flex justify-end w-full mt-3">
            <Button className="font-semibold text-white bg-[#322A24] min-w-30 max-w-4xl">{t('save')}</Button>
        </div>
        </>
    )
}
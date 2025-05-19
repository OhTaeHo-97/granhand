import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ChallengeList({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('challenge:list')} ({t('challenge:total')} <span className="text-[#4C89E4]">30</span>{currentLocale === '' && '개'})
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="500">500</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <table className="w-full text-left border-collapse min-w-6xl">
                    <thead className="bg-[#322A2408] border-t h-20">
                        <tr className="border-b text-[#6F6963]">
                            <th className="p-2 text-center"></th>
                            <th className="p-2 text-center">{t('challenge:challenge_name')}</th>
                            <th className="p-2 text-center">{t('challenge:description')}</th>
                            <th className="p-2 text-center">{t('challenge:status')}</th>
                            <th className="p-2 text-center">{t('manage')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 12 }).map((_, i) => (
                            <tr key={i} className="h-14 text-[#1A1A1A]">
                                <td className="p-2 flex items-center justify-center gap-3"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                <td className="p-2 text-center">마음의 향기</td>
                                <td className="p-2 text-center">다른 사람에게 선물하기</td>
                                <td className="p-2 text-center">활성</td>
                                <td className="p-2 flex items-center justify-center gap-3">
                                    <Button className="border rounded px-2">{t('edit2')}</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
import { Button } from "@/components/ui/button";
import TermModal from "./modal/term-modal";
import { useState } from "react";

export default function MarketingSettings({ t }: { t: (key: string) => string }) {
    const [openEdit, setOpenEdit] = useState(false)

    return (
        <>
            <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
                <thead className="bg-[#322A2408] border-t h-12">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 text-center">{t('settings:date')}</th>
                        <th className="p-2 text-center">{t('settings:version')}</th>
                        <th className="p-2 text-center">{t('settings:manage')}</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 12 }).map((_, i) => (
                    <tr key={i} className="h-14 text-[#6F6963] border-b">
                        <td className="p-2 text-center">2024-07-10 (수)</td>
                        <td className="p-2 text-center">V 2.1</td>
                        <td className="p-2 text-center gap-3 flex items-center justify-center">
                            <Button className="border bg-white" onClick={() => setOpenEdit((prev) => !prev)}>{t('settings:edit')}</Button>
                            <Button className="border bg-white">{t('delete')}</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <TermModal title="마케팅활용동의 및 광고수신동의 V 2.1" contents="마케팅활용동의 및 광고수신동의" open={openEdit} setOpen={setOpenEdit} />
        </>
    )
}
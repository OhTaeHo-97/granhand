import { Button } from "@/components/ui/button";
import { useState } from "react";
import TermModal from "./modal/term-modal";

export default function UseTermSettings() {
    const [openEdit, setOpenEdit] = useState(false)

    return (
        <>
            <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
                <thead className="bg-[#322A2408] border-t h-12">
                    <tr className="border-b text-[#6F6963]">
                        <th className="p-2 text-center">일자</th>
                        <th className="p-2 text-center">버전</th>
                        <th className="p-2 text-center">관리</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 12 }).map((_, i) => (
                    <tr key={i} className="h-14 text-[#6F6963] border-b">
                        <td className="p-2 text-center">2024-07-10 (수)</td>
                        <td className="p-2 text-center">V 2.1</td>
                        <td className="p-2 text-center gap-3 flex items-center justify-center">
                            <Button className="border bg-white" onClick={() => setOpenEdit((prev) => !prev)}>편집</Button>
                            <Button className="border bg-white">삭제</Button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <TermModal title="이용약관V 2.1" contents="이용약관" open={openEdit} setOpen={setOpenEdit} />
        </>
    )
}
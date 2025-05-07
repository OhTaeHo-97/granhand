import { Button } from "@/components/ui/button";

export default function PrivacySettings() {
    return (
        <table className="w-full text-left border-collapse min-w-6xl border-t border-b">
            <thead className="bg-[#f8f4f0] border-t h-12">
                <tr className="border-b text-gray-400">
                    <th className="p-2 text-center">일자</th>
                    <th className="p-2 text-center">버전</th>
                    <th className="p-2 text-center">관리</th>
                </tr>
            </thead>
            <tbody>
                {Array.from({ length: 12 }).map((_, i) => (
                <tr key={i} className="h-14">
                    <td className="p-2 text-center">2024-07-10 (수)</td>
                    <td className="p-2 text-center">V 2.1</td>
                    <td className="p-2 text-center gap-3 flex items-center justify-center">
                        <Button className="border bg-white">편집</Button>
                        <Button className="border bg-white">삭제</Button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    )
}
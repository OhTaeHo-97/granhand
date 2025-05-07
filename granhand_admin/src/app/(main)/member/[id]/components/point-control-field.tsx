import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function PointControlField() {
    return (
        <table className="w-full text-center border-collapse border">
        <thead className="bg-gray-100 h-15">
            <tr className="border-b text-gray-500">
            <th className="p-2 border">증감 여부</th>
            <th className="p-2 border">포인트</th>
            <th className="p-2 border">내용</th>
            </tr>
        </thead>
        <tbody>
            <tr className="border-b h-15">
                <td className="p-2 border h-full align-middle items-center">
                    <Select defaultValue="give">
                        <SelectTrigger className="border rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                        <SelectValue placeholder="포인트 지급(+)" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            <SelectItem value="give" className="px-3 py-2 /cursor-pointer">포인트 지급(+)</SelectItem>
                            <SelectItem value="take" className="px-3 py-2 cursor-pointer">포인트 회수(-)</SelectItem>
                        </SelectContent>
                    </Select>
                </td>
                <td className="p-2 border">
                    <Input type="number" placeholder="포인트" />
                </td>
                <td className="p-2 border">
                    <Input type="text" placeholder="사유/내용을 입력하세요." />
                </td>
            </tr>
        </tbody>
        </table>
    )
}
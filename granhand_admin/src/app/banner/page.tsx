import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function BannerPage() {
    return (
        <div>
            <Tabs defaultValue="send">
                <TabsList className="bg-transparent border-b border-gray-200">
                <TabsTrigger value="send" className="border-b-2 border-black">Mobile(app)</TabsTrigger>
                <TabsTrigger value="history">PC(web)</TabsTrigger>
                </TabsList>
            </Tabs>

            <table className="w-full border-collapse border border-gray-200 text-center text-sm">
    <caption className="text-left font-semibold p-2">상단 배너</caption>
    <thead>
        <tr>
            <th className="border border-gray-200 p-2">고정</th>
            <th className="border border-gray-200 p-2">첨부파일 등록</th>
            <th className="border border-gray-200 p-2">수정</th>
            <th className="border border-gray-200 p-2">2</th>
            <th className="border border-gray-200 p-2">첨부파일 등록</th>
            <th className="border border-gray-200 p-2">수정</th>
            <th className="border border-gray-200 p-2">삭제</th>
            <th className="border border-gray-200 p-2">3</th>
            <th className="border border-gray-200 p-2">첨부파일 등록</th>
            <th className="border border-gray-200 p-2">수정</th>
            <th className="border border-gray-200 p-2">삭제</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td className="border border-gray-200 p-2 align-top">미리보기</td>
            <td className="border border-gray-200 p-2 align-top">
                <img src="/sample.jpg" alt="미리보기" className="w-24 mx-auto" />
            </td>
            <td className="border border-gray-200 p-2 align-top">-</td>
            <td className="border border-gray-200 p-2 align-top">미리보기</td>
            <td className="border border-gray-200 p-2 align-top">첨부파일 등록</td>
            <td className="border border-gray-200 p-2 align-top">수정</td>
            <td className="border border-gray-200 p-2 align-top">삭제</td>
            <td className="border border-gray-200 p-2 align-top">미리보기</td>
            <td className="border border-gray-200 p-2 align-top">첨부파일 등록</td>
            <td className="border border-gray-200 p-2 align-top">수정</td>
            <td className="border border-gray-200 p-2 align-top">삭제</td>
        </tr>
        <tr>
            <td className="border border-gray-200 p-2">링크</td>
            <td className="border border-gray-200 p-2">app_1.3_event_01</td>
            <td className="border border-gray-200 p-2">-</td>
            <td className="border border-gray-200 p-2">링크</td>
            <td className="border border-gray-200 p-2">링크</td>
            <td className="border border-gray-200 p-2">-</td>
            <td className="border border-gray-200 p-2">-</td>
            <td className="border border-gray-200 p-2">링크</td>
            <td className="border border-gray-200 p-2">링크</td>
            <td className="border border-gray-200 p-2">-</td>
            <td className="border border-gray-200 p-2">-</td>
        </tr>
    </tbody>
</table>
        </div>
    )
}
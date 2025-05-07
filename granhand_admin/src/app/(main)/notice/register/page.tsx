import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function RegisterNoticePage() {
    return (
        <main className="flex-1 border p-12">
            <div className="justify-between flex">
                <h1 className="text-2xl font-bold">공지사항 관리</h1>
                <div className="flex gap-3">
                    <Button className="bg-white text-black border w-25">취소</Button>
                    <Button className="bg-black text-white w-25">작성</Button>
                </div>
            </div>

            <div className="mt-14">
                <h2 className="text-base font-semibold mb-6">글 작성</h2>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">제목</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Input placeholder="제목을 입력하세요" className="w-full" />
                    </div>
                </div>

                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-100">
                    <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                        <Label className="font-semibold">내용</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Textarea className="resize-none h-full" placeholder="내용을 입력하세요" />
                    </div>
                </div>
            </div>
        </main>
    )
}
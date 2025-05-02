import { Button } from "@/components/ui/button";
import StoreSidebar from "./components/sidebar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import Pagination from "@/components/pagination";

export default function StorePage() {
    return (
        <main className="flex-1 border">
            <h1 className="text-2xl font-bold p-12">스토어 관리</h1>

            <div className="flex min-h-screen text-sm text-[#6f6963]">
                {/* ------------------- 좌측 사이드바 ------------------- */}
                <StoreSidebar />
        
                {/* ------------------- 우측 콘텐츠 ------------------- */}
                <main className="flex-1 p-6 space-y-4 w-full">
                    <div className="p-6 shadow-sm mb-12">
                        {/* ------------------- 검색 필터 ------------------- */}
                        <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7">
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                                    <Label className="font-semibold">지점명</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    광화문
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                                    <Label className="font-semibold">주소</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    강남구 연주로 164길 17 3층
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                                    <Label className="font-semibold">노출 설정</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <RadioGroup defaultValue="now" className="flex gap-6">
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="expose" /> 노출
                                        </Label>
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="normal" /> 숨김
                                        </Label>
                                    </RadioGroup>
                                </div>
                            </div>
                            <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                                <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                                    <Label className="font-semibold">패스포트</Label>
                                </div>
                                <div className="flex items-center gap-4 p-5">
                                    <Button className="bg-white border text-black">이미지</Button>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 shadow-sm">
                            <div>
                                <div className="mb-4 justify-between flex items-center">
                                    <div className="text-sm font-bold">
                                        갤러리 <span className="text-red-500 font-bold">112</span>
                                    </div>
                                    <Button className="bg-black text-white"><ImageIcon /> 업로드</Button>
                                </div>
                                <div className="grid grid-cols-5 gap-4">
                                    <div key={23}className="relative">
                                        <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                                        <button
                                            className="absolute top-2 right-2 bg-white border text-gray-700 text-sm px-2 py-1 rounded"
                                            // onClick={() => handleDelete(index)}
                                        >
                                        삭제
                                    </button>
                                    </div>
                                    <div key={23}className="relative">
                                        <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                                        <button
                                            className="absolute top-2 right-2 bg-white border text-gray-700 text-sm px-2 py-1 rounded"
                                            // onClick={() => handleDelete(index)}
                                        >
                                        삭제
                                    </button>
                                    </div>
                                    <div key={23}className="relative">
                                        <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                                        <button
                                            className="absolute top-2 right-2 bg-white border text-gray-700 text-sm px-2 py-1 rounded"
                                            // onClick={() => handleDelete(index)}
                                        >
                                        삭제
                                    </button>
                                    </div>
                                    <div key={23}className="relative">
                                        <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                                        <button
                                            className="absolute top-2 right-2 bg-white border text-gray-700 text-sm px-2 py-1 rounded"
                                            // onClick={() => handleDelete(index)}
                                        >
                                        삭제
                                    </button>
                                    </div>
                                    <div key={23}className="relative">
                                        <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                                        <button
                                            className="absolute top-2 right-2 bg-white border text-gray-700 text-sm px-2 py-1 rounded"
                                            // onClick={() => handleDelete(index)}
                                        >
                                        삭제
                                    </button>
                                    </div>
                                    <div key={23}className="relative">
                                        <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                                        <button
                                            className="absolute top-2 right-2 bg-white border text-gray-700 text-sm px-2 py-1 rounded"
                                            // onClick={() => handleDelete(index)}
                                        >
                                        삭제
                                    </button>
                                    </div>
                                    <div key={23}className="relative">
                                        <Image src='/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png' alt="hi" width={250} height={250} className="w-full h-auto object-cover rounded" />
                                        <button
                                            className="absolute top-2 right-2 bg-white border text-gray-700 text-sm px-2 py-1 rounded"
                                            // onClick={() => handleDelete(index)}
                                        >
                                        삭제
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <Pagination totalPages={14} />
                        </div>
                    </div>
                </main>
            </div>
        </main>
    )
}
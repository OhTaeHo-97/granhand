import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function DeliveryPage() {
    return (
        <main className="flex-1 border p-12">
            <h1 className="text-2xl font-bold mb-10">배송 설정</h1>

            <div className="shadow-md">
                <div>
                    <h2 className="text-base font-semibold mb-4">배송 정보</h2>
                    <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">택배사 선택</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select defaultValue="cj">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="cj">CJ대한통운</SelectItem>
                                    <SelectItem value="post">우체국택배</SelectItem>
                                    <SelectItem value="han">한택배진</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">배송비</Label>
                        </div>
                        <div className="flex flex-col gap-6 p-5">
                            <Select defaultValue="cj">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="cj">조건부 무료배송</SelectItem>
                                    <SelectItem value="post">무료배송</SelectItem>
                                    <SelectItem value="han">유료배송</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex items-center gap-4">
                                <label className="w-24 text-gray-700">기본 배송비</label>
                                <div className="relative w-64">
                                    <Input defaultValue="3,000" className="pr-10" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">원</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="w-24 text-gray-700">무료배송 조건</label>
                                <div className="relative w-64">
                                    <Input defaultValue="50,000" className="pr-28" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">원 이상 구매 시 적용</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">지역별 배송비</Label>
                        </div>
                        <div className="flex flex-col gap-6 p-5">
                            <Select defaultValue="cj">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="cj">지역별 배송비 사용</SelectItem>
                                    <SelectItem value="post">무료배송</SelectItem>
                                    <SelectItem value="han">유료배송</SelectItem>
                                </SelectContent>
                            </Select>
                            <div className="flex items-center gap-4">
                                <label className="w-24 text-gray-700">제주도 추가 배송비</label>
                                <div className="relative w-64">
                                    <Input defaultValue="3,000" className="pr-10" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">원</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <label className="w-24 text-gray-700">도서산간 추가 배송비</label>
                                <div className="relative w-64">
                                    <Input defaultValue="5,000" className="pr-28" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">원 이상 구매 시 적용</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>

                <div>
                    <h2 className="text-base font-semibold mb-4">교환/반품 설정</h2>
                    <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">반품 배송비(편도)</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <div className="flex items-center gap-4">
                                <div className="relative w-64">
                                    <Input defaultValue="3,000" className="pr-10" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">교환 배송비(왕복)</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <div className="flex items-center gap-4">
                                <div className="relative w-64">
                                    <Input defaultValue="6,000" className="pr-10" />
                                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">원</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>

                <div>
                    <h2 className="text-base font-semibold mb-4">출고 및 회수지</h2>
                    <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">출고 및 회수지 명</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <div className="flex items-center gap-4">
                                <div className="relative w-64">
                                    <Input defaultValue="짐풀" className="pr-10" />
                                    {/* <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">원</span> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">출고지 주소</Label>
                        </div>
                        <div className="flex flex-col gap-6 p-5">
                            <div className="flex items-center gap-3">
                                <Input defaultValue="10910" className="w-25" />
                                <Button className="border h-8">우편번호 검색</Button>
                            </div>
                            <Input defaultValue="경기 파주시 하우고개길 458-1 (상지석동) 짐폴" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">회수지 주소</Label>
                        </div>
                        <div className="flex flex-col gap-6 p-5">
                            <div className="flex items-center gap-3">
                                <Input defaultValue="10910" className="w-25" />
                                <Button className="border h-8">우편번호 검색</Button>
                            </div>
                            <Input defaultValue="경기 파주시 하우고개길 458-1 (상지석동) 짐폴" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">대표 연락처</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <div className="flex items-center gap-4">
                                <div className="relative w-64">
                                    <Input defaultValue="02-333-6525" className="pr-10" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </main>
    )
}
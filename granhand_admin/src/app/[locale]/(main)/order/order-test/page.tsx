import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, X } from "lucide-react";

export default function OrderTestPage() {
    return (
        <div className="flex min-h-screen bg-white min-w-250">
            {/* <h2 className="text-xl font-bold mb-6 text-[#111111]">회원 정보</h2> */}
            {/* Left Section: 회원 정보 */}
            <div className="w-2/3 p-8">
                <div className="text-[#111111]">
                    <div className="space-y-2 mt-8">
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">이름</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <RadioGroup defaultValue="user" className="flex gap-6">
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="user" /> 회원
                                        </Label>
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="non-user" /> 비회원
                                        </Label>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Input type="text" placeholder="회원 아이디 또는 이메일을 입력해 주세요." className="w-full" />
                                    <Button className="bg-[#322A24] text-white">
                                        <Search className="w-4 h-4" /> 찾아보기
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">이름</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input className="w-full" placeholder="이름 입력" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">연락처</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input className="w-full" placeholder="연락처 입력" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">이메일</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input className="w-full" placeholder="이메일 입력" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">배송지</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder="우편번호 검색" defaultValue="00100" className="w-1/2" />
                                    <Button variant="outline" className="p-1">우편번호</Button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder="주소" defaultValue="서울시 종로구 8" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder="상세주소 입력" defaultValue="1층 101호" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">배송 요청사항</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input placeholder="배송 요청사항 입력" defaultValue="1층 101호" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">상품 선택</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-2">
                                    <Input type="text" placeholder="상품을 검색해 보세요." className="w-full" />
                                    <Button className="bg-[#322A24] text-white">
                                        <Search className="w-4 h-4" /> 찾아보기
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold"></Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center bg-[#F8F5F0] p-4 rounded-md">
                                    <img src="https://via.placeholder.com/64" alt="Product" className="w-16 h-16 object-cover mr-4 rounded-sm" />
                                    <div className="flex-grow">
                                        <div className="font-semibold text-[#111111]">Roland Multi Perfume</div>
                                        <div className="text-[#5E5955]">25,000원</div>
                                    </div>
                                    <div className="flex items-center">
                                        <Button variant="outline" size="sm" className="border-[#C0BCB6] text-[#5E5955]">-</Button>
                                            <Input type="number" value={1} readOnly className="w-12 text-center mx-1 border-none focus-visible:ring-0 bg-transparent" />
                                        <Button variant="outline" size="sm" className="border-[#C0BCB6] text-[#5E5955]">+</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">구매등급할인</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <RadioGroup defaultValue="user" className="flex gap-6">
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="user" /> 적용
                                        </Label>
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="non-user" /> 미적용
                                        </Label>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">쿠폰 적용</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Select>
                                        <SelectTrigger className="">
                                            <SelectValue className="w-full" placeholder="쿠폰 사용 대상이 아닙니다." />
                                        </SelectTrigger>
                                        <SelectContent className="bg-white">
                                            {/* <SelectItem value="select">분류 선택</SelectItem>
                                            <SelectItem value="이메일">이메일</SelectItem>
                                            <SelectItem value="전화번호">전화번호</SelectItem> */}
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]">
                                <Label className="font-semibold">적립금 사용</Label>
                            </div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <RadioGroup defaultValue="use" className="flex gap-6">
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="use" /> 사용
                                        </Label>
                                        <Label className="flex items-center gap-2 w-20">
                                        <RadioGroupItem value="non-use" /> 미사용
                                        </Label>
                                    </RadioGroup>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-[100px_1fr] h-full">
                            <div className="flex items-center justify-start p-2 text-[#6F6963]"></div>
                            <div className="px-5 py-2 w-full">
                                <div className="flex items-center gap-4">
                                    <Input type="number" defaultValue={0} className="text-right w-1/2" />원
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            {/* Right Section: 결제 내역 */}
            <div className="w-1/3 p-8">
                <div className="rounded-md text-sm bg-[#F8F5F0] text-[#C0BCB6] space-y-2 w-full">
                    <div className="rounded-md p-6 space-y-3">
                        <div className="flex justify-between items-center mb-10">
                            <h2 className="text-xl font-bold text-[#111111]">결제 내역</h2>
                            <X className="!w-4 !h-4" />
                        </div>
                        <div className="flex justify-between">
                            <span>상품금액</span>
                            <span className="text-[#6F6963]">25,000원</span>
                        </div>
                        <div className="flex justify-between">
                            <span>쿠폰 할인</span>
                            <span className="text-[#6F6963]">0원</span>
                        </div>
                        <div className="flex justify-between">
                            <span>포인트 사용</span>
                            <span className="text-[#6F6963]">0</span>
                        </div>
                        <hr className="my-2 border-dashed" />
                        <div className="flex justify-between font-semibold text-[#322A24]">
                            <span>결제 금액</span>
                            <span className="text-lg">25,000원</span>
                        </div>
                        <div className="flex justify-between text-xs ml-2">
                            <span>└ 합계</span>
                            <span className="text-[#6F6963]">25,000원</span>
                        </div>
                        {/* <div className="text-xs text-gray-400 ml-2">└ 신용카드 결제 (현대카드)</div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
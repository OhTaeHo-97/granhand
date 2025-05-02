import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDown, ChevronUp, GripVertical, ImageIcon, Plus } from "lucide-react";
import Image from "next/image";

export default function RegisterProductPage() {
    return (
        <main className="flex-1 border p-12">
            <div className="flex justify-between items-center mb-24">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">상품 관리</h1>
                </div>
                <div className="space-x-4">
                    <Button variant="outline" className="w-24">취소</Button>
                    <Button className="text-white bg-black w-24">저장</Button>
                </div>
            </div>

            <div>
                <h2 className="text-base font-semibold mb-4">판매 방식</h2>
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">전시 타입</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 전체
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="pc" /> PC(Web)
                                </Label>
                                <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="app" /> APP 전용
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">카테고리</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Select defaultValue="select">
                                <SelectTrigger className="">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="select">분류 선택</SelectItem>
                                    <SelectItem value="이메일">이메일</SelectItem>
                                    <SelectItem value="전화번호">전화번호</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">판매 기간</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="none" /> 미적용
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="apply" /> 적용
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                        {/* 첫 번째 행 */}
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                            <Label className="font-semibold">외부 노출</Label>
                        </div>
                        <div className="flex gap-2 items-center p-5 h-full">
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">네이버 쇼핑</Label>
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">카카오 쇼핑하우</Label>
                        </div>
                        <div className="border-r border-gray-200 flex items-center justify-center p-5 border-l bg-[#f8f4f0] h-full border-b">
                            <Label className="font-semibold">외부 노출용 상품명</Label>
                        </div>
                        <div className="flex items-center p-2">
                        <Input
                            type="text"
                            placeholder="미입력 시ㅍ상품명과 동일하게 적용"
                            className="border rounded px-2 py-1 flex-1 min-w-[200px] h-8"
                        />
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-base font-semibold mb-4">기본 정보</h2>
                
                <div className="border border-gray-300 text-sm text-[#6f6963] divide-y divide-gray-200">
                    {/* 상품명 */}
                    <div className="grid grid-cols-[150px_1fr]">
                        <div className="bg-[#f8f4f0] p-3 font-semibold border-r border-gray-300 flex items-center justify-center">
                            상품명
                        </div>
                        <div className="grid divide-y divide-gray-200">
                            <div className="p-4">
                                <Input placeholder="상품명" />
                            </div>
                            <div className="p-4">
                                <Input placeholder="Product name" />
                            </div>
                        </div>
                    </div>

                    {/* 상품 요약 설명 */}
                    <div className="grid grid-cols-[150px_1fr]">
                        <div className="bg-[#f8f4f0] p-3 font-semibold border-r border-gray-300 flex items-center justify-center">
                            상품 요약 설명
                        </div>
                        <div className="grid divide-y divide-gray-200">
                            <div className="p-4">
                                <Input placeholder="상품 요약 설명" />
                            </div>
                            <div className="p-4">
                                <Input placeholder="Product summary" />
                            </div>
                        </div>
                    </div>

                    {/* 썸네일 등록 */}
                    <div className="grid grid-cols-[150px_1fr]">
                        <div className="bg-[#f8f4f0] p-3 font-semibold border-r border-gray-300 flex items-center justify-center">
                            썸네일 등록
                        </div>
                        <div className="p-4 h-full">
                            <div className="flex gap-4 flex-wrap">
                                {[1, 2, 3].map((idx) => (
                                    <div key={idx} className="w-24 h-24 border bg-gray-50 flex flex-col items-center justify-between gap-1 text-gray-400 p-2">
                                        <ImageIcon className="w-8 h-8" />
                                        <Button variant="outline" size="sm" className="w-20">등록</Button>
                                    </div>
                                ))}
                                <div className="w-24 h-24 border-2 border-dashed flex items-center justify-center text-gray-400">
                                    <Plus className="w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-base font-semibold mb-4">판매 정보</h2>
                <div className="border border-gray-300 text-sm text-[#6f6963] divide-y divide-gray-200 mb-4">
                    {/* 상품명 */}
                    <div className="grid grid-cols-[150px_1fr]">
                        <div className="bg-[#f8f4f0] p-3 font-semibold border-r border-gray-300 flex items-center justify-center">
                            판매가
                        </div>
                        <div className="grid divide-y divide-gray-200">
                            <div className="p-4 flex items-center space-x-4">
                                <span>KRW</span> <Input type="number" className="w-100" /> <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium min-w-14">세금 포함</Label>
                            </div>
                            <div className="p-4 flex items-center space-x-4">
                                <span>USD</span> <Input type="number" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                

                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                        {/* 첫 번째 행 */}
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                            <Label className="font-semibold">할인 설정</Label>
                        </div>
                        <div className="flex gap-2 items-center p-5 h-full">
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">쿠폰</Label>
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">적립금</Label>
                        </div>
                        <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] h-full border-b">
                            <Label className="font-semibold">적립 제한</Label>
                        </div>
                        <div className="flex gap-2 items-center p-5 h-full">
                        <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">회원 등급 혜택 적립 제외</Label>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">판매 대상</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                        <RadioGroup defaultValue="now" className="flex gap-6">
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="all" /> 전체 회원
                            </Label>
                            <Label className="flex items-center gap-2 w-20">
                            <RadioGroupItem value="normal" /> 특정 회원
                            </Label>
                            <Label className="flex items-center gap-2 min-w-20">
                            <RadioGroupItem value="badness" /> 등급별 회원
                            </Label>
                        </RadioGroup>
                        <Select defaultValue="all">
                            <SelectTrigger className="border rounded px-2 py-1 gap-1 w-full h-auto flex items-center max-w-52">
                            <SelectValue placeholder="회원 등급 - 전체" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                <SelectItem value="all" className="px-3 py-2 /cursor-pointer">회원 등급 - 전체</SelectItem>
                                <SelectItem value="vip" className="px-3 py-2 cursor-pointer">VIP</SelectItem>
                                <SelectItem value="gold" className="px-3 py-2 cursor-pointer">Gold</SelectItem>
                                <SelectItem value="silver" className="px-3 py-2 cursor-pointer">Silver</SelectItem>
                                <SelectItem value="bronze" className="px-3 py-2 cursor-pointer">Bronze</SelectItem>
                                <SelectItem value="basic" className="px-3 py-2 cursor-pointer">Basic</SelectItem>
                            </SelectContent>
                        </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full">
                        {/* 첫 번째 행 */}
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b">
                            <Label className="font-semibold">최소 주문 수량</Label>
                        </div>
                        <div className="flex gap-2 items-center p-5 h-full">
                            <Input type="number" className="w-14" /><span>개 이상</span>
                        </div>
                        <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] h-full border-b">
                            <Label className="font-semibold">최대 주문 수량</Label>
                        </div>
                        <div className="flex gap-2 items-center p-5 h-full">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 제한 없음
                                </Label>
                                <Label className="flex items-center gap-2">
                                <RadioGroupItem value="normal" /> <Input type="number" className="w-14" /><span>개 이하로 제한</span>
                                </Label>
                                {/* <Label className="flex items-center gap-2 min-w-20">
                                <RadioGroupItem value="badness" /> 등급별 회원
                                </Label> */}
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">전시 설정</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">국내</Label>
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">해외</Label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-base font-semibold mb-4">상품 상세 정보</h2>
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">상품 상세 내용</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Textarea className="resize-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr]">
                        <div className="bg-[#f8f4f0] p-3 font-semibold border-r border-gray-300 flex items-center justify-center">
                            상품 상세 이미지
                        </div>
                        <div className="p-4 h-full">
                            {/* <div className="flex gap-4 flex-wrap">
                            {/* 이미지 + 버튼 1 */}
                            <div className="flex gap-3">
                            {[1, 2].map((i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <div className="w-40 h-40 relative border">
                                        <Image
                                            src={`/sample${i}.jpg`}  // public/sample1.jpg, sample2.jpg 준비 필요
                                            alt="썸네일"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <Button variant="outline" className="h-8 px-4">변경</Button>
                                        <Button variant="outline" className="h-8 px-4">삭제</Button>
                                    </div>
                                </div>
                            ))}

                            {/* 추가 박스 */}
                            <div className="flex flex-col items-center gap-2">
                                <div className="w-40 h-40 border-2 border-dashed flex items-center justify-center text-gray-400">
                                    <Plus className="w-8 h-8" />
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="border">템플릿 선택</Button>

                <div>
                    <div className="mt-4 flex gap-2">
                        <Button className="border"><ChevronUp /></Button>
                        <Button className="border"><ChevronDown /></Button>
                        <Button className="border">삭제</Button>
                    </div>
                    <div className="mt-4 border p-6">
                        <span className="text-gray-400">Information</span>
                    </div>
                </div>

                <div>
                    <div className="mt-4 flex gap-2">
                        <Button className="border"><ChevronUp /></Button>
                        <Button className="border"><ChevronDown /></Button>
                        <Button className="border">삭제</Button>
                    </div>
                    <div className="mt-4 border p-6">
                        <span className="text-gray-400">상품정보 제공고시</span>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-base font-semibold mb-4">옵션/재고 설정</h2>
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">스탬핑 사용</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 사용함
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="pc" /> 사용 안 함
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">버튼 옵션 사용</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 사용함
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="pc" /> 사용 안 함
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">버튼 옵션</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                        <div className="space-y-4 text-sm">

                            {/* 옵션명 입력 */}
                            <div className="flex items-center gap-2">
                                <label className="w-20 text-gray-700">옵션명</label>
                                <Input defaultValue="용량" className="w-64" />
                                <Button variant="outline">입력 필드 추가</Button>
                            </div>

                            {/* 헤더 */}
                            <div className="grid grid-cols-[30px_1fr_1fr_1fr_1fr_120px] bg-gray-50 border border-gray-200 text-gray-600">
                                <div></div>
                                <div className="p-2 border-l border-gray-200">옵션값</div>
                                <div className="p-2 border-l border-gray-200">옵션 가격</div>
                                <div className="p-2 border-l border-gray-200">재고 번호</div>
                                <div className="p-2 border-l border-gray-200">수량</div>
                                <div className="p-2 border-l border-gray-200">상태</div>
                            </div>

                            {/* 옵션 행 1 */}
                            <div className="grid grid-cols-[30px_1fr_1fr_1fr_1fr_120px] border border-t-0 border-gray-200 items-center gap-2 p-2">
                                <div className="flex justify-center text-gray-400">
                                    <GripVertical className="w-4 h-4" />
                                </div>
                                <Input defaultValue="100ml" />
                                <Input defaultValue="35,000" />
                                <Input defaultValue="MP100_MO" />
                                <Input defaultValue="85" />
                                <Select defaultValue="판매중">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="판매중">판매중</SelectItem>
                                        <SelectItem value="일시품절">일시품절</SelectItem>
                                        <SelectItem value="판매중지">판매중지</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {/* 옵션 행 2 */}
                            <div className="grid grid-cols-[30px_1fr_1fr_1fr_1fr_120px] border border-t-0 border-gray-200 items-center gap-2 p-2">
                                <div className="flex justify-center text-gray-400">
                                    <GripVertical className="w-4 h-4" />
                                </div>
                                <Input defaultValue="200ml" />
                                <Input defaultValue="45,000" />
                                <Input defaultValue="MP200_MO" />
                                <Input defaultValue="64" />
                                <Select defaultValue="판매중">
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="판매중">판매중</SelectItem>
                                        <SelectItem value="일시품절">일시품절</SelectItem>
                                        <SelectItem value="판매중지">판매중지</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">드롭 옵션 사용</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 사용함
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="pc" /> 사용 안 함
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">드롭 옵션</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 사용함
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="pc" /> 사용 안 함
                                </Label>
                            </RadioGroup>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-base font-semibold mb-4">추천상품</h2>
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">추천상품 사용</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <RadioGroup defaultValue="now" className="flex gap-6">
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="all" /> 사용함
                                </Label>
                                <Label className="flex items-center gap-2 w-20">
                                <RadioGroupItem value="pc" /> 사용 안 함
                                </Label>
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <h2 className="text-base font-semibold mb-4">배송 정보</h2>
                <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 min-w-178">

                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">상품 무게(kg)</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Input type="number" placeholder="숫자만 입력" />
                        </div>
                    </div>
                    <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                        <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2">
                            <Label className="font-semibold">배송 국가 설정</Label>
                        </div>
                        <div className="flex items-center gap-4 p-5">
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/><Label className="text-sm font-medium">대한민국</Label>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
'use client'

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

export default function DeliveryRequest() {
    const [selectedValue, setSelectedValue] = useState('')

    return (
        <section className="space-y-2 mb-10">
            <h2 className="text-base font-bold">배송 요청사항</h2>
            <Select value={selectedValue} onValueChange={(value) => setSelectedValue(value)}>
                <SelectTrigger className="w-full border rounded px-4 py-2 text-sm h-15 data-[placeholder]:text-gray-400">
                    <SelectValue placeholder="배송 시 요청사항을 선택해 주세요." />
                </SelectTrigger>
                <SelectContent className="bg-white">
                    <SelectItem value="none">배송 시 요청사항을 선택해주세요.</SelectItem>
                    <SelectItem value="door">부재 시 문 앞에 놓아주세요.</SelectItem>
                    <SelectItem value="office">부재 시 경비실에 맡겨주세요.</SelectItem>
                    <SelectItem value="ab_call">부재 시 전화 또는 문자 주세요.</SelectItem>
                    <SelectItem value="box">택배함에 넣어주세요.</SelectItem>
                    <SelectItem value="be_call">배송 전에 연락주세요.</SelectItem>
                    <SelectItem value="manual">직접 입력</SelectItem>
                </SelectContent>
            </Select>
            {
                selectedValue === 'manual' && (
                    <Input type="text" placeholder="내용을 입력해 주세요. (최대 50자)" className="h-14" />
                )
            }
        </section>
    )
}
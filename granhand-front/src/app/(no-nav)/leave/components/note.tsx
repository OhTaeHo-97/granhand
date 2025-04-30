'use client'

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import LeaveDenyModal from "./deny-modal";

export default function LeaveNote() {
    const [open, setOpen] = useState(false)

    return (
        <div className="max-w-md space-y-6 mx-auto mt-10">
            {/* <div>
                <h2 className="text-lg font-semibold">유의사항을 확인해 주세요.</h2>
            </div>

            <div>
                <h2 className="font-bold text-base mb-3">탈퇴 시 유의사항</h2>
                <div className="space-y-2">
                    <div className="w-full bg-gray-100 p-6 space-y-6">
                        <div className="text-xs text-gray-500">
                            <strong>회원 탈퇴 후 재가입</strong><br />
                            <span>동일한 본인 명의 휴대폰으로 30일 이후에 재가입 가능합니다.</span>
                        </div>
                        <div className="text-xs text-gray-500">
                            <strong>탈퇴 후 재가입 시 가입 혜택 제한</strong><br />
                            <span>탈퇴 후 재가입 시 신규 가입 혜택에 제한이 있을 수 있습니다.</span>
                        </div>
                        <div className="text-xs text-gray-500">
                            <strong>탈퇴 후 재가입 시 가입 혜택 제한</strong><br />
                            <span>탈퇴 후 재가입 시 신규 가입 혜택에 제한이 있을 수 있습니다.</span>
                        </div>
                        <div className="text-xs text-gray-500">
                            <strong>탈퇴 후 재가입 시 가입 혜택 제한</strong><br />
                            <span>탈퇴 후 재가입 시 신규 가입 혜택에 제한이 있을 수 있습니다.</span>
                        </div>
                        <div className="text-xs text-gray-500">
                            <strong>탈퇴 후 재가입 시 가입 혜택 제한</strong><br />
                            <span>탈퇴 후 재가입 시 신규 가입 혜택에 제한이 있을 수 있습니다.</span>
                        </div>
                    </div>
                </div>
                <div className="mt-10 justify-center items-center">
                    <Checkbox className="w-5 h-5" /> <span className="text-base">유의사항을 모두 확인하였으며, 이에 동의합니다.</span>
                </div>
            </div> */}
            <h1 className="text-2xl font-semibold mb-16">유의사항을 확인해 주세요.</h1>

            <section className="mb-6">
            <h2 className="text-lg font-bold mb-4">탈퇴 시 유의사항</h2>
            <div className="bg-gray-100 p-6 space-y-6 text-sm text-gray-700">
                <div>
                <strong className="block text-gray-800 mb-1">회원 탈퇴 후 재가입</strong>
                동일한 본인 명의 휴대폰으로 30일 이후에 재가입 가능합니다.
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">탈퇴 후 재가입 시 가입 혜택 제한</strong>
                탈퇴 후 재가입 시 신규 가입 혜택에 제한이 있을 수 있습니다.
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">아이디 재사용 및 복구 불가</strong>
                회원 정보는 탈퇴 기준 3개월 후 모든 정보가 삭제되며, 재가입 시에도 기존 아이디는 더 이상 사용할 수 없습니다.
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">회원정보/서비스 이용 기록 삭제</strong>
                회원 등급, 포인트, 쿠폰, 그랑핸드 페이 등의 데이터가 영구히 삭제되며 복구가 불가합니다. 다만, 모든 주문 정보는 5년간 분리 보관됩니다. 중복 혜택 방지 목적으로 DI 값은 1년간 보관 후 파기됩니다.
                </div>
                <div>
                <strong className="block text-gray-800 mb-1">등록 게시물 유지</strong>
                게시글, 문의 내역 등의 데이터는 삭제되지 않으며, 반드시 탈퇴 전 직접 삭제해야 합니다.
                </div>
            </div>
            </section>

            <div className="flex items-center gap-2 mb-10">
            <Checkbox id="agree" />
            <label htmlFor="agree" className="text-sm font-semibold">
                유의사항을 모두 확인하였으며, 이에 동의합니다.
            </label>
            </div>

            <div className="flex gap-4">
            <Button className="flex-1 border border-gray-300 bg-white text-black">취소</Button>
            <Button className="flex-1 bg-gray-300 text-white" onClick={() => setOpen((prev) => !prev)}>본인인증하고 탈퇴하기</Button>
            </div>
            <LeaveDenyModal open={open} setOpen={setOpen} />
        </div>
    )
}
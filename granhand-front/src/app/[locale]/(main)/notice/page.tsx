'use client'

import Pagination from "@/components/pagination";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const notices = [
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    },
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    },
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    },
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    },
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    },
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    },
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    },
    {
        date: '2023-07-08',
        title: "[공지] 개인정보 처리방침 개정 사전 안내(시행일: 2024년 1월 24일)",
        content:
            "안녕하세요. 향의 일상화를 꿈꾸는 그랑핸드입니다. 그랑핸드 회원님께 더 나은 서비스를 제공할 수 있도록 '교환접수 기능'이 업데이트 될 예정입니다. 업데이트 예정일 2023년 9월 10일 업데이트 내용 - 앱 사용 시 : 마이페이지 - 주문내역 - [교환접수] 버튼 선택 - 웹 사용 시 : 마이페이지 - 주문내역 - 주문번호 클릭 - [교환접수] 버튼 선택 그랑핸드는 앞으로도 회원님의 원활한 고객경험을 위해 최선을 다할 것을 약속드립니다. 감사합니다."
    }
];

export default function Notice() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [currentPage, setCurrentPage] = useState(1)

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <main className="container mx-auto px-6 py-8">
            {/* <div className="flex justify-between items-end mb-10">
                <h2 className="text-xl font-semibold">공지 사항</h2>
            </div> */}
            <section className="py-8">
                <h2 className={`text-xl font-semibold text-left mb-8 border-t pt-4 text-[#6F6963]`}>공지 사항</h2>
            </section>
            <div className="max-w-4xl w-[739px]">
                <div className="divide-y">
                    {notices.map((notice, index) => (
                        <div key={index} className="border-none">
                            <div className="flex items-center justify-between px-4 py-4 pl-0 border-none" onClick={() => toggle(index)}>
                                {/* 날짜 + 제목 */}
                                <div className="border-none">
                                    <p className="text-xs text-[#C0BCB6] mb-8">{notice.date}</p>
                                    <p className="text-base font-medium text-[#322A24]">
                                        {notice.title}
                                    </p>
                                </div>
                        
                                {/* 오른쪽 화살표 */}
                                {openIndex === index ? (
                                    <ChevronUp className="w-4 h-4 text-[#C0BCB6]" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-[#C0BCB6]" />
                                )}
                            </div>
                            {openIndex === index && notice.content && (
                            <div className="bg-[#322A240A] p-4 text-sm text-[#6F6963] border-none">
                                {notice.content}
                            </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </main>
    )
}
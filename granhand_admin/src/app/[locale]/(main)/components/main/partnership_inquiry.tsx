const inquiryData = [
    { date: "2023-11-15", content: "주)하이컨센서에서 접속 제한되었니다.", name: "김민지", phone: "010-8974-6545", status: "답변 대기" },
    { date: "2023-11-14", content: "일어서시오특할구수금어서시오특할구수금일어서시오특할구수금", name: "이하나", phone: "010-8974-6545", status: "답변 대기" },
    { date: "2023-11-11", content: "내일 주문 완료드립니다.", name: "송기영", phone: "010-8974-6545", status: "답변 대기" },
];

export default function PartnershipInquiries({ t }: {t: (key: string) => string }) {
    return (
        <section className="bg-white rounded-lg p-6 shadow-sm">
            <h2 className="font-semibold text-base mb-10">{t('partnership_inquiry')}</h2>
            <div className="overflow-x-auto">
            <table className="w-full border-collapse">
            <thead>
                <tr className="text-left text-[#C0BCB6] text-sm border-t border-b">
                <th className="py-2 px-2 text-center">{t('date')}</th>
                <th className="py-2 px-2 text-center">{t('title')}</th>
                <th className="py-2 px-2 text-center">{t('name')}</th>
                <th className="py-2 px-2 text-center">{t('contact')}</th>
                <th className="py-2 px-2 text-center">{t('reply_status')}</th>
                </tr>
            </thead>
            <tbody>
                {inquiryData.map((row) => (
                    <tr key={row.date} className="border-b border-gray-100 last:border-0">
                    <td className="py-2 px-2 text-center">{row.date}</td>
                    <td className="py-3 max-w-[200px] truncate">
                        <div className="flex items-center gap-1 text-[#6f6963] text-sm">
                            <span>{row.content}</span>
                            <span className="bg-[#ff4d3e] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-bold">
                                N
                            </span>
                        </div>
                    </td>
                    <td className="py-2 px-2 text-center">{row.name}</td>
                    <td className="py-2 px-2 text-center">{row.phone}</td>
                    <td className="py-2 px-2 text-center text-red-500">{row.status}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
        </section>
    )
}
export default function UserInfo({ t }: { t: (key: string) => string }) {
    return (
        <div className="space-y-2 text-sm text-[#6F6963]">
            <h2 className="font-bold text-[#322A24] mb-2 text-sm">{t('payment:order_item_info')}</h2>
            <div className="mt-4 text-xs pt-4 space-y-2">
                <div className="flex">
                    <span className="text-[#C0BCB6] w-24">{t('order:recipient')}</span>
                    <span>홍*동</span>
                </div>
                <div className="flex">
                    <span className="text-[#C0BCB6] w-24">{t('order:contact')}</span>
                    <span>010-*****-5678</span>
                </div>
                <div className="flex">
                    <span className="text-[#C0BCB6] w-24">{t('order:address')}</span>
                    <span>[47291] 부산 부산진구 서전로</span>
                </div>
                <div className="flex">
                    <span className="text-[#C0BCB6] w-24">{t('order:request')}</span>
                    <span>벨 누르지 말고 노크 똑똑 2번만 해주세요.</span>
                </div>
            </div>
        </div>
    )
}
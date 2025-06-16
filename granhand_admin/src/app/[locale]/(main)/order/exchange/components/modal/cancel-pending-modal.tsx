export default function CancelPendingExchangeModalContents({ t }: { t: (key: string) => string }) {
    return (
        <div className="bg-[#322A2408] p-4 px-8 mt-4">
            <ul className="text-[#6F6963] list-disc">
                <li>{t('order:process_release_exchange_hold_info')}</li>
            </ul>
        </div>
    )
}
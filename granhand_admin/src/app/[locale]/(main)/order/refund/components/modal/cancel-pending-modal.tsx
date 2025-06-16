export default function CancelPendingReturnModalContents({ t }: { t: (key: string) => string }) {
    return (
        <div className="bg-[#322A2408] p-4 px-8 mt-4">
            <ul className="list-disc text-[#6F6963]">
                <li>{t('order:process_release_return_hold_info')}</li>
            </ul>
        </div>
    )
}
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CancelReason({ t }: { t: (key: string) => string }) {
    const cancelOptions = [
        t('order:unsatisfied'),
        t('order:reorder'),
        t('order:no_apply_benefit')
    ];

    return (
        <div className="max-w-md space-y-6">
            <div>
                <h2 className="text-lg font-semibold">{t('order:cancel_reason_title')}</h2>
            </div>

            <RadioGroup>
                {cancelOptions.map((label, index) => (
                    <label key={index} className="flex items-start gap-3 cursor-pointer space-y-4">
                        <RadioGroupItem
                            value={label}
                        >
                            <span className="text-sm text-gray-800">{label}</span>
                        </RadioGroupItem>
                        <span className="text-sm text-gray-800">{label}</span>
                    </label>
                ))}
            </RadioGroup>

            <div className="mt-16">
                <label className="block mb-2 text-sm font-medium text-gray-800">{t('order:cancel_reason_detail')}</label>
                <div className="relative">
                <textarea
                    maxLength={100}
                    placeholder={`${t('order:cancel_reason_placeholder')}`}
                    className="w-full h-28 border border-gray-300 rounded px-4 py-3 text-sm placeholder-gray-400 resize-none focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
                <div className="absolute bottom-2 right-3 text-xs text-gray-400">0/100</div>
                </div>
            </div>
        </div>
    )
}
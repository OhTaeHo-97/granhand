import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function MemberNotes({ t }: { t: (key: string) => string }) {
    return (
        <section>
            <h2 className="font-bold mb-4 text-xl text-[#5E5955]">{t('member:member_notes')}</h2>
            <Textarea
            placeholder={t('member:notes_placeholder')}
            className="w-full border bg-[#322A2408] !border-none p-3 h-24 resize-none"
            />
            <div className="flex justify-end">
                <Button className="mt-2 bg-gray-800 text-white px-4 py-2 min-w-30">{t('save')}</Button>
            </div>
        </section>
    )
}
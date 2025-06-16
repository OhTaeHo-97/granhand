import JournalGridTemp from '@/components/JournalGridTemp'
// import { LocaleTypes } from '../../../../../utils/localization/settings'

// export default async function JournalPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
export default async function JournalPage() {
    // const { locale } = await params

    return (
        <div>
            <main className="container mx-auto mt-10">
                <JournalGridTemp />
            </main>
        </div>
    )
}
import JournalGridTemp from '@/components/JournalGridTemp'
import Pagination from '@/components/pagination'
import SearchInput from '@/components/searchInput'
// import { LocaleTypes } from '../../../../../utils/localization/settings'

// export default async function JournalPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
export default async function JournalPage() {
    // const { locale } = await params

    return (
        <div>
            <main className="container mx-auto mt-10">
                <JournalGridTemp />
                <div className='mb-20' />
                <Pagination totalPages={15} />
                <div className='mb-14' />
                <SearchInput />
            </main>
        </div>
    )
}
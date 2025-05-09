import JournalGrid from '@/components/JournalGrid'
import JournalGridTemp from '@/components/JournalGridTemp'
import Pagination from '@/components/pagination'
import SearchInput from '@/components/searchInput'
import { LocaleTypes } from '../../../../../utils/localization/settings'

export default function JournalPage({ params }: { params: { locale: LocaleTypes } }) {
    return (
        <div>
            <main className="container mx-auto mt-10">
                {/* <JournalGrid classType='border-t pt-4' showSubmenu={true} /> */}
                <JournalGridTemp params={params} />
                <div className='mb-20' />
                <Pagination totalPages={15} />
                <div className='mb-14' />
                <SearchInput />
            </main>
        </div>
    )
}
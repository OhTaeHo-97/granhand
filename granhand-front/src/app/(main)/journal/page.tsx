import JournalGrid from '@/components/JournalGrid'
import JournalGridTemp from '@/components/JournalGridTemp'
import Pagination from '@/components/pagination'
import SearchInput from '@/components/searchInput'

export default function JournalPage() {
    return (
        <div>
            <main className="container mx-auto mt-10">
                {/* <JournalGrid classType='border-t pt-4' showSubmenu={true} /> */}
                <JournalGridTemp />
                <div className='mb-20' />
                <Pagination totalPages={15} />
                <div className='mb-14' />
                <SearchInput />
            </main>
        </div>
    )
}
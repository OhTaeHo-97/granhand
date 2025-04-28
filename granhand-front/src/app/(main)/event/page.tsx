import EventGrid from "@/components/EventGrid";
import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";

export default function EventPage() {
    return (
        <main className="container mx-auto pt-8">
            <EventGrid />
            <div className='mb-20' />
            <Pagination totalPages={15} />
            <div className='mb-14' />
            <SearchInput />
        </main>
    )
}
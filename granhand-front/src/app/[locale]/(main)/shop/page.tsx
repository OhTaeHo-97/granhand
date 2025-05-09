import Pagination from "@/components/pagination";
import SearchInput from "@/components/searchInput";
import ShopGrid from "./components/ShopGrid";

export default function ShopPage({ searchParams }: { searchParams: { store?: string; category?: string } }) {
    return (
        <main className="container mx-auto mt-10">
            <ShopGrid searchParams={searchParams} />
            <div className='mb-20' />
            <Pagination totalPages={15} />
            <div className='mb-14' />
            <SearchInput />
        </main>
    )
}
import Pagination from "@/components/pagination";
import PointCard from "./components/point-card";
import PointDetails from "./components/point-details/point-details";

export default function PointPage() {
    return (
        <main className="w-full mx-auto ml-10">
            <PointCard />
            {/* 포인트 상세 내역 */}
            <PointDetails />
            <Pagination totalPages={15} />
        </main>
    );
}
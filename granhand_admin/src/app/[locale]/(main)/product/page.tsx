import { Button } from "@/components/ui/button";
import { BookOpen, List, Plus } from "lucide-react";
import ProductSidebar from "./components/sidebar";
import ProductListHeader from "./components/header";
import ProductList from "./components/product-list";

export default function ProductListPage() {
    // const locale = getLocaleAsLocaleTypes()
    // const { t } = useTranslation(locale, ['common', 'push'])
    // const [quickRange, setQuickRange] = useState('')
    // const [startDate, setStartDate] = useState<Date | undefined>(new Date())
    // const [endDate, setEndDate] = useState<Date | undefined>(new Date())

    // const quickRanges = ["오늘", "3일", "7일", "1개월"]

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm space-y-4">
                    <h1 className="text-2xl font-bold">상품 관리</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]"><BookOpen className="!w-4 !h-4" />템플릿 관리</Button>
                    <Button variant="outline" className="text-[#5E5955]"><List className="!w-4 !h-4" />추천 순서 관리</Button>
                    <Button className="bg-[#322A24] text-white"><Plus className="!w-4 !h-4" />상품 등록</Button>
                </div>
            </div>

            <div className="flex min-h-screen text-sm text-[#1A1A1A]">
                {/* ------------------- 좌측 사이드바 ------------------- */}
                <ProductSidebar />
        
                {/* ------------------- 우측 콘텐츠 ------------------- */}
                <main className="flex-1 p-6 space-y-4 w-full">
                    {/* ------------------- 검색 필터 ------------------- */}
                    <ProductListHeader />
                    {/* ------------------- 상품 목록 테이블 ------------------- */}
                    <ProductList />
                </main>
            </div>
        </div>
    )
}
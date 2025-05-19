import { Button } from "@/components/ui/button";
import { BookOpen, List, Plus } from "lucide-react";
import ProductSidebar from "./components/sidebar";
import ProductListHeader from "./components/header";
import ProductList from "./components/product-list";
import { LocaleTypes } from "../../../../../utils/localization/settings";
import { translation } from "../../../../../utils/localization/locales/server";
import Link from "next/link";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

export default async function ProductListPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, 'product')
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('product_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]"><BookOpen className="!w-4 !h-4" />{t('template_manage')}</Button>
                    <Button variant="outline" className="text-[#5E5955]"><List className="!w-4 !h-4" />{t('recommendation_manage')}</Button>
                    <Link href={`${currentLocale}/product/register`}>
                        <Button className="bg-[#322A24] text-white"><Plus className="!w-4 !h-4" />{t('register_product')}</Button>
                    </Link>
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
                    <ProductList t={t} />
                </main>
            </div>
        </div>
    )
}
'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import SalesType from "./components/sales-type";
import BasicInfo from "./components/basic-info";
import SalesInfo from "./components/sales_info";
import ProductDetails from "./components/product-details";
import OptionSettings from "./components/option-settings";
import RecommendProduct from "./components/recommend-product";
import ShipInfo from "./components/ship-info";

export default function RegisterProductPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'push'])

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('product_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]">{t('cancel')}</Button>
                    <Button className="bg-[#322A24] text-white">{t('save')}</Button>
                </div>
            </div>

            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <SalesType t={t} />
                    <BasicInfo t={t} />
                    <SalesInfo t={t} />
                    <ProductDetails t={t} />
                    <OptionSettings t={t} />
                    <RecommendProduct t={t} />
                    <ShipInfo t={t} />
                </div>
            </div>
        </div>
    )
}
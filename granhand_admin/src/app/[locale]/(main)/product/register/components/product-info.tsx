'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../../utils/localization/client";
import SalesType from "./sales-type";
import BasicInfo from "./basic-info";
import SalesInfo from "./sales_info";
import ProductDetails from "./product-details";
import OptionSettings from "./option-settings";
import RecommendProduct from "./recommend-product";
import ShipInfo from "./ship-info";

export default function ProductInfo({ category }: { category: "register" | "edit" }) {
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
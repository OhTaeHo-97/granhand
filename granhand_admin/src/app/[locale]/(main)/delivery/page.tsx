// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LocaleTypes } from "../../../../../utils/localization/settings"
import { translation } from "../../../../../utils/localization/locales/server"
import DeliveryInfo from "./components/delivery-info";
import ExchangeRefundSettings from "./components/exchange_refund_settings";
import AddressInfo from "./components/address-info";
import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";

export default async function DeliveryPage({ params }: { params: Promise<{ locale: LocaleTypes }> }) {
    const { locale } = await params
    const { t } = await translation(locale, 'delivery')
    const currentLocale = getCurrentLocaleFromParams(locale)

    return (
        <div className="flex-1 border">
            <div className="p-12 text-black text-sm space-y-4">
                <h1 className="text-2xl font-bold text-[#5E5955]">{t('ship_setting')}</h1>
            </div>

            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-md p-8">
                    <DeliveryInfo t={t} currentLocale={currentLocale} />
                    <ExchangeRefundSettings t={t} currentLocale={currentLocale} />
                    <AddressInfo t={t} />
                </div>
            </div>
        </div>
    )
}
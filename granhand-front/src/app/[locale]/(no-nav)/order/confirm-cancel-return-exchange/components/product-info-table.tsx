import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function ProductInfoTable({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    return (
        <div className="border border-gray-200 overflow-x-auto">
            <div className="min-w-[850px]">
            {/* 헤더 */}
            <div className="grid grid-cols-14 items-center px-4 py-3 border-b border-gray-200 text-sm font-medium bg-gray-50">
                <div className="col-span-2 flex items-center gap-2">
                <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" />
                <span className="text-xs text-gray-500">{t('cart:select_all')} (0/0)</span>
                </div>
                <div className="col-span-4 text-center">{t('info')}</div>
                <div className="col-span-2 text-center">{t('quantity')}</div>
                <div className="col-span-2 text-center">{t('amount')}</div>
                <div className="col-span-1 text-center">{t('payment:is_stamping')}</div>
                <div className="col-span-3 text-center">{t('payment:stamping_title')}</div>
            </div>

            {/* 상품 */}
            <div className="grid grid-cols-14 items-center px-4 py-6 border-b border-gray-100">
                <div className="col-span-2 flex justify-start h-full items-center">
                <div className="flex items-center">
                    <Checkbox id="item-1" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" defaultChecked />
                </div>
                <div className="w-25 h-full ml-2 relative">
                    <Image src="/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png" alt="perfume" fill className="object-contain" />
                </div>
                </div>

                <div className="col-span-4 flex items-center gap-4 space-y-2">
                <div className="text-sm space-y-2">
                    <div className="font-bold">Soie Signature Perfume</div>
                    <div className="text-gray-400 text-xs">수아 시그니처 퍼퓸</div>
                    <div className="text-gray-400 text-xs mb-1">{t('cart:bag_not_purchased')}</div>
                    <div className="font-bold">110,000{currentLocale === '' ? '원' : ' KRW'}</div>
                </div>
                </div>

                <div className="col-span-2 flex flex-col items-center gap-2">
                <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm">1</span>
                </div>
                </div>

                <div className="col-span-2 text-center text-sm font-bold">110,000{currentLocale === '' ? '원' : ' KRW'}</div>
                <div className="col-span-1 text-center text-sm font-bold">N</div>
                <div className="col-span-3 text-center text-sm font-bold">{t('cart:free_shipping')}</div>
            </div>
            </div>
        </div>
    )
}
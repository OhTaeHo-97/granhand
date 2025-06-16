'use client'

import { Button } from "@/components/ui/button";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../../utils/localization/client";
import SalesType from "./sales-type";
import BasicInfo from "./basic-info";
import SalesInfo from "./sales_info";
import ProductDetails from "./product-details";
import OptionSettings from "./option-settings";
import RecommendProduct from "./recommend-product";
import ShipInfo from "./ship-info";
import { useRouter } from "next/navigation";
import { useState } from "react";
// import api from "@/utils/api";
import { useSession } from "next-auth/react";
import { SelectedCategory } from "../../components/category-select";
import { ImageItem } from "./image-list";
import { ProductForm, useProduct } from "@/hooks/use-product";

export interface ProductInformation {
    salesType: SalesType,
    basicInfo: BasicInfo,
    salesInfo: SalesInfo,
    productDetails: ProductDetails,
    optionSettings: OptionSettings,
    recommendProduct: RecommendProduct,
    shipInfo: ShipInfo
}

export interface SalesType {
    displayType: string,
    selectedCategories: SelectedCategory[],
    applySalePeriod: string,
    startDate: Date,
    endDate: Date,
    quickRange: string,
    showNaver: string,
    showKakao: string,
    exposureName: string
}

export interface BasicInfo {
    language: string,
    koName: string,
    enName: string,
    koMemo: string,
    enMemo: string,
    images: ImageItem[],
    imageOrders: number[]
}

export interface SalesInfo {
    koPrice: number,
    includeTax: string,
    enPrice: number,
    coupon: string,
    point: string,
    restrictedReward: string,
    targetMember: string,
    emails: string[],
    grade: string,
    minOrderCount: number,
    hasLimitCount: string,
    maxOrderCount: number,
    showDomestic: string,
    showAbroad: string
}

export interface ProductDetails {
    details: string,
    images: ImageItem[]
}

export interface OptionSettings {
    useStamping: string,
    useBtnOption: string,
    btnOptionSections: OptionSections[],
    useDropOption: string,
    dropOptionSections: OptionSections[]
}

export interface OptionSections {
    id: number
    title: string
    options: OptionType[]
}

export type OptionType = {
    id: number
    optionValue: string
    price: number
    inventoryId: string
    quantity: string
    status: string
}

export interface RecommendProduct {
    useRecommend: string,
    products: RecommendProductInfo[]
}

export type RecommendProductInfo = {
    id: number
    name: string
    price: number
    category: string
    status: string
    registerType: string
}

export interface ShipInfo {
    deliveryLocation: string,
    productWeight: number,
    deliveryCountries: string[]
}

export default function ProductInfo({ data }: { data?: ProductInformation }) {
// export default function ProductInfo({ category }: { category: "register" | "edit" }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'push', 'journal'])
    const currentLocale = useCurrentLocale()
    const { addProduct } = useProduct()
    const { status } = useSession()

    // const [language, setLanguage] = useState<'ko' | 'en'>('ko')
    const [productData, setProductData] = useState<ProductInformation>(data ? data : {
        salesType: {
            displayType: 'all',
            selectedCategories: [] as SelectedCategory[],
            applySalePeriod: 'none',
            startDate: new Date(),
            endDate: new Date(),
            quickRange: '',
            showNaver: 'Y',
            showKakao: 'N',
            exposureName: ''
        },
        basicInfo: {
            language: 'ko',
            koName: '',
            enName: '',
            koMemo: '',
            enMemo: '',
            images: [] as ImageItem[],
            imageOrders: []
        },
        salesInfo: {
            koPrice: 0,
            includeTax: 'N',
            enPrice: 0,
            coupon: 'N',
            point: 'N',
            restrictedReward: 'N',
            targetMember: 'all_members',
            emails: [],
            grade: 'all',
            minOrderCount: 0,
            hasLimitCount: 'no_limit',
            maxOrderCount: 0,
            showDomestic: 'N',
            showAbroad: 'N'
        },
        productDetails: {
            details: '',
            images: []
        },
        optionSettings: {
            useStamping: 'N',
            useBtnOption: 'N',
            btnOptionSections: [],
            useDropOption: 'N',
            dropOptionSections: []
        },
        recommendProduct: {
            useRecommend: 'N',
            products: []
        },
        shipInfo: {
            deliveryLocation: 'ko',
            productWeight: 0,
            deliveryCountries: []
        }
    })

    const handleSalesTypeChange = (field: keyof typeof productData.salesType, value: typeof productData.salesType[keyof typeof productData.salesType] | undefined) => {
    // const handleSalesTypeChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            salesType: {
                ...prev.salesType,
                [field]: value
            }
        }))
    }

    // const handleBasicInfoChange = (field: keyof typeof productData.basicInfo, value: typeof productData.basicInfo[keyof typeof productData.basicInfo]) => {
    // const handleBasicInfoChange = (
    //     field: keyof typeof productData.basicInfo,
    //     value: typeof productData.basicInfo[keyof typeof productData.basicInfo]
    // ) => {
    const handleBasicInfoChange = (
        field: keyof typeof productData.basicInfo,
        value: string | ImageItem[] | number[]
    ) => {
    // const handleBasicInfoChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            basicInfo: {
                ...prev.basicInfo,
                [field]: value
            }
        }))
    }

    const handleSalesInfoChange = (
        field: keyof typeof productData.salesInfo,
        value: string | number | string[]
    ) => {
    // const handleSalesInfoChange = (field: keyof typeof productData.salesInfo, value: typeof productData.salesInfo[keyof typeof productData.salesInfo]) => {
    // const handleSalesInfoChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            salesInfo: {
                ...prev.salesInfo,
                [field]: value
            }
        }))
    }

    // const handleProductDetailsChange = (field: keyof typeof productData.productDetails, value: typeof productData.productDetails[keyof typeof productData.productDetails]) => {
    const handleProductDetailsChange = (
        field: keyof typeof productData.productDetails,
        value: string | ImageItem[]
    ) => {
    // const handleProductDetailsChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            productDetails: {
                ...prev.productDetails,
                [field]: value
            }
        }))
    }

    const handleOptionSettingsChange = (field: keyof typeof productData.optionSettings, value: typeof productData.optionSettings[keyof typeof productData.optionSettings]) => {
    // const handleOptionSettingsChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            optionSettings: {
                ...prev.optionSettings,
                [field]: value
            }
        }))
    }

    const handleRecommendProductChange = (field: keyof typeof productData.recommendProduct, value: typeof productData.recommendProduct[keyof typeof productData.recommendProduct]) => {
    // const handleRecommendProductChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            recommendProduct: {
                ...prev.recommendProduct,
                [field]: value
            }
        }))
    }

    const handleShipInfoChange = (
        field: keyof typeof productData.shipInfo,
        value: string | number | string[]
    ) => {
    // const handleShipInfoChange = (field: keyof typeof productData.shipInfo, value: typeof productData.shipInfo[keyof typeof productData.shipInfo]) => {
    // const handleShipInfoChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            shipInfo: {
                ...prev.shipInfo,
                [field]: value
            }
        }))
    }

    // useEffect(() => {
    //     if (status === 'unauthenticated') {
    //         router.push('/login')
    //     }
    // }, [status, router])

    // if (status === 'loading') {
    //     return <div>Loading...</div>
    // }

    // if(!session) {
    //     return null
    // }

    const addNewProduct = async () => {
        const categories = productData.salesType.selectedCategories.map((category) => category.catecode)
        const images = productData.basicInfo.images.map((image) => image.file)
        const body: ProductForm = {
            code: Date.now().toString(),
            name: productData.basicInfo.koName,
            sprice: productData.salesInfo.koPrice,
            dprice: productData.salesInfo.enPrice,
            dan: '1',
            memo: productData.basicInfo.koMemo,
            isshow: productData.salesType.showNaver,
            images: images,
            catecodes: categories
        }

        const { data, error } = await addProduct(body)

        if(error) {
            console.error('Failed to add products for error:', error)
            alert('상품을 등록하는 데에 실패하였습니다.')
        } else if(data) {
            if(data.result && data.result === 'ok') {
                alert('상품을 등록하였습니다.')
                router.push(`${currentLocale}/product`)
            }
        }
    }

    return (
        <div className="flex-1 border">
            <div className="flex justify-between items-center p-12">
                <div className="text-black text-sm">
                    <h1 className="text-2xl font-bold text-[#5E5955]">{t('product_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button variant="outline" className="text-[#5E5955]" onClick={() => router.push(`${currentLocale}/product`)}>{t('cancel')}</Button>
                    <Button className="bg-[#322A24] text-white" onClick={addNewProduct} disabled={status !== 'authenticated'}>{t('save')}</Button>
                </div>
            </div>

            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <SalesType data={productData.salesType} onChange={handleSalesTypeChange} t={t} />
                    <BasicInfo data={productData.basicInfo} onChange={handleBasicInfoChange} t={t} />
                    <SalesInfo data={productData.salesInfo} onChange={handleSalesInfoChange} t={t} />
                    <ProductDetails language={productData.basicInfo.language} data={productData.productDetails} onChange={handleProductDetailsChange} t={t} />
                    <OptionSettings data={productData.optionSettings} onChange={handleOptionSettingsChange} t={t}  />
                    <RecommendProduct data={productData.recommendProduct} onChange={handleRecommendProductChange} t={t} />
                    <ShipInfo t={t} data={productData.shipInfo} onChange={handleShipInfoChange} />
                </div>
            </div>
        </div>
    )
}
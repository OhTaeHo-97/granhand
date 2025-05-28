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
import { useEffect, useState } from "react";
import api from "@/utils/api";
import { useSession } from "next-auth/react";
import { SelectedCategory } from "../../components/category-select";
import { ImageItem } from "./image-list";

export default function ProductInfo({ category }: { category: "register" | "edit" }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'product', 'push'])
    const currentLocale = useCurrentLocale()

    const [productData, setProductData] = useState({
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
            btnOptionSections: [
                { id: 1, title: "용량", options: [{
                    id: 1,
                    optionValue: '100ml',
                    price: 35000,
                    inventoryId: 'MP1000_NO',
                    quantity: 85,
                    status: 'on_sale'
                },
                {
                    id: 2,
                    optionValue: '150ml',
                    price: 35000,
                    inventoryId: 'MP1000_NO',
                    quantity: 85,
                    status: 'on_sale'
                }] }
            ],
            useDropOption: 'N',
            dropOptionSections: [
                { id: 1, title: "용량", options: [{
                    id: 1,
                    optionValue: '100ml',
                    price: 35000,
                    inventoryId: 'MP1000_MO',
                    quantity: 85,
                    status: 'on_sale'
                },
                {
                    id: 2,
                    optionValue: '150ml',
                    price: 35000,
                    inventoryId: 'MP1000_MO',
                    quantity: 85,
                    status: 'on_sale'
                }] }
            ]
        },
        recommendProduct: {
            useRecommend: 'N',
            products: [{
                id: 1,
                name: 'Multi Perfume & Sachet Set',
                price: 53000,
                category: '멀티퍼퓸 외 2',
                status: 'on_sale',
                registerType: 'normal'
            }, {
                id: 2,
                name: 'Susie Salmon Candle',
                price: 40000,
                category: '캔들',
                status: 'on_sale',
                registerType: 'normal'
            }]
        },
        shipInfo: {
            productWeight: 0,
            deliveryCountries: []
        }
    })

    const handleSalesTypeChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            salesType: {
                ...prev.salesType,
                [field]: value
            }
        }))
    }

    const handleBasicInfoChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            basicInfo: {
                ...prev.basicInfo,
                [field]: value
            }
        }))
    }

    const handleSalesInfoChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            salesInfo: {
                ...prev.salesInfo,
                [field]: value
            }
        }))
    }

    const handleProductDetailsChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            productDetails: {
                ...prev.productDetails,
                [field]: value
            }
        }))
    }

    const handleOptionSettingsChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            optionSettings: {
                ...prev.optionSettings,
                [field]: value
            }
        }))
    }

    const handleRecommendProductChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            recommendProduct: {
                ...prev.recommendProduct,
                [field]: value
            }
        }))
    }

    const handleShipInfoChange = (field: string, value: any) => {
        setProductData(prev => ({
            ...prev,
            shipInfo: {
                ...prev.shipInfo,
                [field]: value
            }
        }))
    }

    const { data: session, status } = useSession()

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

    const fetchData = async () => {
        console.log('--- fetchData called ---')
        console.log('session token:', session?.token)

        if(status !== 'authenticated' || !session?.token) {
            console.log('Cannot fetch data - no valid session')
            return
        }

        const categories = productData.salesType.selectedCategories.map((category) => category.path)
        const images = productData.basicInfo.images.map((image) => image.file)

        try {
            console.log('token: ', session.token)
            const response = await api.post('/api/product/register', {
            // const response = await api.post('/product/register', {
                code: new Date().toLocaleTimeString(),
                name: productData.basicInfo.koName,
                sprice: productData.salesInfo.koPrice,
                dprice: productData.salesInfo.enPrice,
                dan: '1',
                memo: productData.basicInfo.koMemo,
                isshow: productData.salesType.showNaver,
                categories: categories,
                // images: images,
                imageOrders: productData.basicInfo.imageOrders
            }, {
                token: session.token,
                isFormData: true,
                // params: {
                //     code: new Date().toLocaleTimeString(),
                //     name: productData.basicInfo.koName,
                //     sprice: productData.salesInfo.koPrice,
                //     dprice: productData.salesInfo.enPrice,
                //     dan: '1',
                //     memo: productData.basicInfo.koMemo,
                //     isshow: productData.salesType.showNaver,
                //     categories: categories,
                //     // images: images,
                //     imageOrders: productData.basicInfo.imageOrders
                // }
            })
            
            // router.push(`${currentLocale}/product`)
        } catch (error) {
            console.error('Failed to fetch products:', error)
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
                    <Button className="bg-[#322A24] text-white" onClick={fetchData} disabled={status !== 'authenticated'}>{t('save')}</Button>
                </div>
            </div>

            <div className="mx-auto px-6 py-8 space-y-12">
                <div className="shadow-sm p-8">
                    <SalesType data={productData.salesType} onChange={handleSalesTypeChange} t={t} />
                    <BasicInfo data={productData.basicInfo} onChange={handleBasicInfoChange} t={t} />
                    <SalesInfo data={productData.salesInfo} onChange={handleSalesInfoChange} t={t} />
                    <ProductDetails data={productData.productDetails} onChange={handleProductDetailsChange} t={t} />
                    <OptionSettings data={productData.optionSettings} onChange={handleOptionSettingsChange} t={t}  />
                    <RecommendProduct data={productData.recommendProduct} onChange={handleRecommendProductChange} t={t} />
                    <ShipInfo t={t} data={productData.shipInfo} onChange={handleShipInfoChange} />
                </div>
            </div>
        </div>
    )
}
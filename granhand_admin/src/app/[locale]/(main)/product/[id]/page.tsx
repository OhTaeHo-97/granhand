import { SelectedCategory } from "../components/category-select"
import { ImageItem } from "../register/components/image-list"
import ProductInfo from "../register/components/product-info"

// export default async function ProductDetailPage({ params }: { params: Promise<{ id: number }> }) {
//     const { id } = await params
export default function ProductDetailPage() {
    const productData = {
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
            btnOptionSections: [
                { id: 1, title: "용량", options: [{
                    id: 1,
                    optionValue: '100ml',
                    price: 35000,
                    inventoryId: 'MP1000_NO',
                    quantity: '85',
                    status: 'on_sale'
                },
                {
                    id: 2,
                    optionValue: '150ml',
                    price: 35000,
                    inventoryId: 'MP1000_NO',
                    quantity: '85',
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
                    quantity: '85',
                    status: 'on_sale'
                },
                {
                    id: 2,
                    optionValue: '150ml',
                    price: 35000,
                    inventoryId: 'MP1000_MO',
                    quantity: '85',
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
            deliveryLocation: 'ko',
            productWeight: 0,
            deliveryCountries: []
        }
    }

    return (
        <ProductInfo data={productData} />
    )
}
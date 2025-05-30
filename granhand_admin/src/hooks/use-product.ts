import { Pagination, useApi } from "./use-api"

export interface Product {
    idx: number
    code: string
    name: string
    dprice: number
    sprice: number
    dan: string
    memo: string
    isshow: string
    regidate: string
    moddate: string
    images: string[]
    categories: string[]
}

export interface ProductForm {
    code: string
    name: string
    dprice: number
    sprice: number
    dan: string
    memo: string
    isshow: string
    images: File[]
    catecodes: string[]
}

export interface ProductApiResponse {
    result: string
    pagination: Pagination
    datas: Product[]
}

export interface PostProductApiResponse {
    result: string
    product_id: number
    message: string
}

export const useProduct = () => {
    const { fetchApi } = useApi()

    const getProducts = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<ProductApiResponse>('/api/product', { params })
    }

    const addProduct = async (product: ProductForm) => {
        const formData = new FormData()

        formData.append('code', product.code)
        formData.append('name', product.name)
        formData.append('dprice', product.dprice.toString())
        formData.append('sprice', product.sprice.toString())
        formData.append('dan', product.dan)
        formData.append('memo', product.memo)
        formData.append('isshow', product.isshow)
        product.images.forEach((image) => {
            formData.append('images', image)
        })
        product.catecodes.forEach((catecode) => {
            formData.append('catecodes', catecode)
        })

        return fetchApi<PostProductApiResponse>('/api/product', {
            method: 'POST',
            isFormData: true,
            body: formData
        })
    }

    return {
        getProducts,
        addProduct
    }
}
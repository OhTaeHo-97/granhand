import { ProductCategoryNode } from "@/lib/product/product-state"
import { useApi } from "./use-api"

interface Category {
    id?: number
    catename: string
    upcate: string
    isshow?: string
}

export const useCategory = () => {
    const { fetchApi } = useApi()

    const addCategory = async (category: Omit<Category, 'id'>) => {
        return fetchApi<Category>('/api/product/category', {
            method: 'POST',
            body: JSON.stringify(category)
        })
    }

    const getCategories = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        // return fetchApi<Category[]>('/api/product/category', { params })
        return fetchApi<ProductCategoryNode[]>('/api/product/category', { params })
    }

    return {
        addCategory,
        getCategories
    }
}
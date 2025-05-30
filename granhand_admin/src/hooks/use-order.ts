import { Pagination, useApi } from "./use-api"

export interface Order {
    idx: number,
    orderno: number,
    name: string,
    email: string,
    phone: string,
    account: number,
    sdate: string,
    odate: string,
    dan: string,
    buymethod: string,
    products: OrderProduct[]
}

export interface OrderProduct {
    product_idx: number,
    marketdb_idx: number,
    ea: number,
    save_account: number,
    gonumber: string,
    godate: string,
    product_info: ProductInfo
}

export interface ProductInfo {
    code: string,
    name: string,
    dprice: number,
    sprice: number
}

export interface OrderApiResponse {
    result: string,
    datas: Order[],
    pagination: Pagination
}

export const useOrder = () => {
    const { fetchApi } = useApi()

    const getOrders = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<OrderApiResponse>('/api/order', { params })
    }

    return {
        getOrders
    }
}
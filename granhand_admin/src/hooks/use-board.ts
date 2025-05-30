import { Pagination, useApi } from "./use-api"

export interface FAQ {
    idx: number,
    lang: string,
    cate_idx: number,
    subject: string,
    memo: string,
    wdate: string,
    isshow: string
}

export interface FAQCate {
    idx: number,
    fid: number,
    catename: string,
    orders: number,
    isuse: string
}

export interface FAQApiResponse {
    result: string,
    pagination: Pagination,
    datas: FAQ[]
}

export interface FAQCateApiReponse {
    result: string,
    datas: FAQCate[]
}

export interface FAQPostApiResponse {
    result: string,
    data: FAQ
}

export const useBoard = () => {
    const { fetchApi } = useApi()

    const getFaq = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<FAQApiResponse>('/api/faq', { params })
    }

    const getFaqCate = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<FAQCateApiReponse>('/api/faq/category', { params })
    }

    const addFaq = async (faq: Omit<FAQ, 'idx' | 'wdate' | 'isshow'>) => {
        return fetchApi<FAQPostApiResponse>('/api/faq', {
            method: 'POST',
            body: JSON.stringify(faq)
        })
    }

    return {
        getFaq,
        getFaqCate,
        addFaq
    }
}
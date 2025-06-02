import { number } from "zod"
import { Pagination, useApi } from "./use-api"

export interface FAQ {
    idx: number
    lang: string
    cate_idx: number
    subject: string
    memo: string
    wdate: string
    isshow: string
}

export interface FAQCate {
    idx: number
    fid: number
    catename: string
    orders: number
    isuse: string
}

export interface FAQApiResponse {
    result: string
    pagination: Pagination
    datas: FAQ[]
}

export interface FAQCateApiReponse {
    result: string
    datas: FAQCate[]
}

export interface FAQPostApiResponse {
    result: string
    data: FAQ
}

export interface BoardConfig {
    idx: number
    fid: number
    pid: number
    board_id: string
    board_name: string
    listnum: number
    list_priv: number
    list_priv_sub: string
    write_priv: number
    write_priv_sub: string
    read_priv: number
    read_priv_sub: string
    tail_priv: number
    tail_priv_sub: string
    tailcount: number
    usenotice: string
    tailshow: number
    usefile: string
}

export interface Board {
    boardid: string
    language: string
    btype: string
    mem_idx: number
    mem_name: string
    cates: string
    subject: string
    memo: string
    nip: string
}

export interface BoardConfigApiResponse {
    result: string,
    datas: BoardConfig[]
}

export interface BoardApiResponse {
    result: string
    total: number
    page: number
    size: number
    datas: []
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

    const getBoardConfig = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<BoardConfigApiResponse>('/api/board/config', { params })
    }

    const getBoard = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<BoardApiResponse>('/api/board', {params})
    }

    const addBoard = async (board: Board) => {
        return fetchApi<BoardApiResponse>('/api/board', {
            method: 'POST',
            body: JSON.stringify(board)
        })
    }

    return {
        getBoard,
        getBoardConfig,
        getFaq,
        getFaqCate,
        addBoard,
        addFaq
    }
}
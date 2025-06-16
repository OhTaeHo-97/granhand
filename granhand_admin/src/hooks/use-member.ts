import { Pagination, useApi } from "./use-api"

export interface Member {
    id?: number;
    name?: string;
    email?: string;
    phone?: string;
    membershipLevel?: string;
    registrationDate?: string;
    totalPurchaseAmount?: string; // 또는 number
    rewardPoints?: string; // 또는 number
    memberType?: string;
    memo?: string; // 메모 필드 추가
}

export interface MemberInfo {
    idx: number,
    id: string,
    name: string,
    signdate: string,
    lastlogin: string,
    lastip: string
}

export interface MemberPoints {
    idx: number,
    marketdb_idx: number,
    board_idx: number,
    mem_idx: number,
    income: number,
    outcome: number,
    total: number,
    memo: string,
    wdate: string,
    isauto: string,
    ch_name: string,
    codes: string,
    memberInfo: Omit<MemberInfo, 'idx'>
}

export interface MemberApiResponse {
    // data: Member[],
    datas: MemberInfo[],
    pagination: Pagination
}

export interface MemberPointsApiResponse {
    result: string,
    pagination: Pagination,
    datas: MemberPoints[]
}

export interface ApiResponse<T> {
    data: T | null
    error: unknown
}

export const useMember = () => {
    const { fetchApi } = useApi()

    const getMembers = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<MemberApiResponse>('/api/member', { params })
    }

    const getMemberPoints = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<MemberPointsApiResponse>('/api/member/points', { params })
    }

    return {
        getMembers,
        getMemberPoints
    }
}
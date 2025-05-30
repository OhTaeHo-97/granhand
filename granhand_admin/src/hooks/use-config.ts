import { useApi } from "./use-api"

export interface ConfigInfo {
    idx: number,
    name: string,
    codes: string,
    isuse: string,
    orders: number
}

export interface Config {
    idx: number,
    channelname: string,
    languages: ConfigInfo[]
}

export interface ConfigApiResponse {
    result: string,
    datas: Config[]
}

export const useConfig = () => {
    const { fetchApi } = useApi()

    const getConfig = async (params?: Record<string, string | number | boolean | undefined | null>) => {
        return fetchApi<ConfigApiResponse>('/api/config', { params })
    }

    const getStoredConfig = () => {
        const storedConfig = localStorage.getItem('config')
        return storedConfig
    }

    return {
        getConfig,
        getStoredConfig
    }
}
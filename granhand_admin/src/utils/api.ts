import { signIn } from "next-auth/react"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

interface RequestOptions extends RequestInit {
    headers?: Record<string, string>
    baseUrl?: string
    token?: string,
    isFormData?: boolean,
    params?: Record<string, string | number | boolean | string[] | undefined | null>
}

export class ApiError extends Error {
    status: number
    body: any

    constructor(status: number, message: string, body: any) {
        super(message)
        this.name = 'ApiError'
        this.status = status
        this.body = body
    }
}

async function request<T>(
    method: string,
    endpoint: string,
    body?: any,
    options: RequestOptions = {}
): Promise<any> {
    const baseUrl = options.baseUrl || API_BASE_URL
    let url = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`

    const { params, headers: customHeaders, token, isFormData, baseUrl: _, ...restOptions } = options

    console.log('token: ', token)

    if(params) {
        const searchParams = new URLSearchParams()
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                // 배열인 경우 각 요소를 같은 키로 추가
                if (Array.isArray(value)) {
                    value.forEach(item => {
                            if (item !== undefined && item !== null) {
                            searchParams.append(key, String(item));
                            }
                    });
                } else {
                    searchParams.append(key, String(value));
                }
            }
        })

        const queryString = searchParams.toString();
        if (queryString) {
             // 기존 URL에 쿼리 스트링이 있는지 확인하여 구분자(& 또는 ?) 결정
            const separator = url.includes('?') ? '&' : '?';
            url += separator + queryString;
        }
    }

    const headers: Record<string, string> = {
        ...customHeaders,
        // ...options.headers,
    }

    if(!options.isFormData) {
        headers['Content-Type'] = 'application/json'
    }

    if(options.token) {
        headers['Authorization'] = `Bearer ${options.token}`
    }

    const config: RequestInit = {
        method,
        headers,
        // credentials: 'include',
        ...restOptions
    }

    if(body !== undefined && body !== null && method !== 'GET' && method !== 'HEAD') {
        if(isFormData) {
            config.body = body
        } else {
            // Content-Type이 application/json일 때만 stringify
            // headers['Content-Type']이 설정되었는지 확인
            if (headers['Content-Type'] === 'application/json') {
                config.body = JSON.stringify(body)
            } else {
                // FormData가 아니고 Content-Type이 json이 아닌 경우 body를 그대로 사용 (예: text/plain 등)
                config.body = body;
            }
        }
    }

    try {
        console.log('header: ', config.headers)
        console.log('body: ', config.body)
        console.log(`[API] ${method} ${url}`, { 
            headers: config.headers, 
            body: options.isFormData ? 'FormData' : config.body
        })

        const response = await fetch(url, config)

        console.log(`[API] ${method} ${url} Response Status: ${response.status}`)

        if (response.status === 401 || response.status === 403) {
            signIn('credentials', { callbackUrl: window.location.pathname })
            throw new ApiError(
                response.status,
                'Your session has expired. Please log in again.',
                null
            )
        }

        let responseBody: any
        if (response.status !== 204) {
            try {
                const contentType = response.headers.get("content-type")
                if (contentType && contentType.includes("application/json")) {
                    responseBody = await response.json()
                } else {
                    responseBody = await response.text()
                    if(responseBody) {
                        responseBody = { message: responseBody }
                    } else {
                        responseBody = { message: `Request to ${url} returned status ${response.status} with empty body.` }
                    }
                }
            } catch (parseError) {
                console.error(`Failed to parse response body for ${method} ${url}`, parseError)
                responseBody = { message: 'Failed to parse response body.' }
            }
        }

        if (!response.ok) {
            throw new ApiError(
                response.status,
                `API request failed with status ${response.status}`,
                responseBody
            )
        }

        return responseBody
    } catch (error) {
        if (error instanceof ApiError) {
            throw error
        }
        throw new Error(`Network or unexpected error during API call: ${error instanceof Error ? error.message : String(error)}`)
    }
}

// 각 HTTP 메소드별 래퍼 함수 정의
const api = {
    get: <T>(endpoint: string, options?: RequestOptions) => request<T>('GET', endpoint, undefined, options),
    post: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('POST', endpoint, body, options),
    put: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('PUT', endpoint, body, options),
    delete: <T>(endpoint: string, body?: any, options?: RequestOptions) => request<T>('DELETE', endpoint, body, options), // DELETE도 body 포함 가능하도록
    patch: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('PATCH', endpoint, body, options),
};

export default api;
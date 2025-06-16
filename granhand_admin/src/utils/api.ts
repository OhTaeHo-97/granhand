// import { signIn } from "next-auth/react"

// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

// interface RequestOptions extends RequestInit {
//     headers?: Record<string, string>
//     baseUrl?: string
//     token?: string,
//     isFormData?: boolean,
//     params?: Record<string, string | number | boolean | string[] | undefined | null>
// }

// export class ApiError extends Error {
//     status: number
//     body: any

//     constructor(status: number, message: string, body: any) {
//         super(message)
//         this.name = 'ApiError'
//         this.status = status
//         this.body = body
//     }
// }

// async function request<T>(
//     method: string,
//     endpoint: string,
//     body?: any,
//     options: RequestOptions = {}
// ): Promise<any> {
//     const baseUrl = options.baseUrl || API_BASE_URL
//     // let url = endpoint.startsWith('http') ? endpoint : `${baseUrl}${endpoint}`
//     let url = endpoint
//     console.log('url:', url)

//     const { params, headers: customHeaders, token, isFormData, baseUrl: _, ...restOptions } = options

//     console.log('token: ', token)

//     if(params) {
//         const searchParams = new URLSearchParams()
//         Object.entries(params).forEach(([key, value]) => {
//             if (value !== undefined && value !== null) {
//                 // 배열인 경우 각 요소를 같은 키로 추가
//                 if (Array.isArray(value)) {
//                     value.forEach(item => {
//                             if (item !== undefined && item !== null) {
//                             searchParams.append(key, String(item));
//                             }
//                     });
//                 } else {
//                     searchParams.append(key, String(value));
//                 }
//             }
//         })

//         const queryString = searchParams.toString();
//         if (queryString) {
//              // 기존 URL에 쿼리 스트링이 있는지 확인하여 구분자(& 또는 ?) 결정
//             const separator = url.includes('?') ? '&' : '?';
//             url += separator + queryString;
//         }
//     }

//     const headers: Record<string, string> = {
//         ...customHeaders,
//         // ...options.headers,
//     }

//     if(!options.isFormData) {
//         headers['Content-Type'] = 'application/json'
//     }

//     if(options.token) {
//         headers['Authorization'] = `Bearer ${options.token}`
//     }

//     const config: RequestInit = {
//         method,
//         headers,
//         // credentials: 'include',
//         ...restOptions
//     }

//     if(body !== undefined && body !== null && method !== 'GET' && method !== 'HEAD') {
//         if(isFormData) {
//             // const formData = new FormData(body)
//             // config.body = formData
//             config.body = body
//         } else {
//             // Content-Type이 application/json일 때만 stringify
//             // headers['Content-Type']이 설정되었는지 확인
//             if (headers['Content-Type'] === 'application/json') {
//                 config.body = JSON.stringify(body)
//             } else {
//                 // FormData가 아니고 Content-Type이 json이 아닌 경우 body를 그대로 사용 (예: text/plain 등)
//                 config.body = body;
//             }
//         }
//     }

//     try {
//         console.log('header: ', config.headers)
//         console.log('body: ', config.body)
//         console.log(`[API] ${method} ${url}`, { 
//             headers: config.headers, 
//             body: options.isFormData ? 'FormData' : config.body
//         })
//         // console.log('config:', config)

//         const response = await fetch(url, config)

//         console.log(`[API] ${method} ${url} Response Status: ${response.status}`)

//         if (response.status === 401 || response.status === 403) {
//             // signIn('credentials', { callbackUrl: window.location.pathname })
//             // throw new ApiError(
//             //     response.status,
//             //     'Your session has expired. Please log in again.',
//             //     null
//             // )
//             console.log(response)
//             console.log('status:', response.status)
//             return
//         }

//         let responseBody: any
//         if (response.status !== 204) {
//             try {
//                 const contentType = response.headers.get("content-type")
//                 if (contentType && contentType.includes("application/json")) {
//                     responseBody = await response.json()
//                 } else {
//                     responseBody = await response.text()
//                     if(responseBody) {
//                         responseBody = { message: responseBody }
//                     } else {
//                         responseBody = { message: `Request to ${url} returned status ${response.status} with empty body.` }
//                     }
//                 }
//             } catch (parseError) {
//                 console.error(`Failed to parse response body for ${method} ${url}`, parseError)
//                 responseBody = { message: 'Failed to parse response body.' }
//             }
//         }

//         if (!response.ok) {
//             throw new ApiError(
//                 response.status,
//                 `API request failed with status ${response.status}`,
//                 responseBody
//             )
//         }

//         return responseBody
//     } catch (error) {
//         if (error instanceof ApiError) {
//             throw error
//         }
//         throw new Error(`Network or unexpected error during API call: ${error instanceof Error ? error.message : String(error)}`)
//     }
// }

// // 각 HTTP 메소드별 래퍼 함수 정의
// const api = {
//     get: <T>(endpoint: string, options?: RequestOptions) => request<T>('GET', endpoint, undefined, options),
//     post: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('POST', endpoint, body, options),
//     put: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('PUT', endpoint, body, options),
//     delete: <T>(endpoint: string, body?: any, options?: RequestOptions) => request<T>('DELETE', endpoint, body, options), // DELETE도 body 포함 가능하도록
//     patch: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('PATCH', endpoint, body, options),
// };

// export default api;

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''

// const DEFAULT_HEADERS = {
//     'Content-Type': 'application/json'
// }

interface RequestOptions extends RequestInit {
    headers?: Record<string, string>
    token?: string
    isFormData?: boolean
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

/**
 * 백엔드 API 요청을 수행하는 제네릭 함수
 * @param method - HTTP 메소드 (GET, POST, PUT 등)
 * @param endpoint - 백엔드 API 엔드포인트 (API_BASE_URL 기준 상대 경로)
 * @param body - 요청 본문 (GET, HEAD 제외)
 * @param options - 요청 옵션 (헤더, 토큰, params 등)
 * @returns - API 응답 본문 (JSON 파싱 결과)
 * @throws ApiError - API 응답 상태 코드가 2xx 범위가 아닐 때 발생
 * @throws Error - 네트워크 오류 또는 기타 예상치 못한 예외 발생 시
 */
async function request<T>(
    method: string,
    endpoint: string,
    body?: any,
    options: RequestOptions = {}
): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`
    console.log('[Backend API Request]', method, url)

    const { params, headers: customHeaders, token, isFormData, ...restOptions } = options

    const headers: Record<string, string> = {
        ...customHeaders
    }

    if(!isFormData) {
        if(!headers['Content-Type']) {
            headers['Content-Type'] = 'application/json'
        }
    }

    if(token) {
        console.log('token:', token)
        headers['Authorization'] = `Bearer ${token}`
    }

    const config: RequestInit = {
        method,
        headers,
        ...restOptions
    }

    if(body !== undefined && body !== null && method !== 'GET' && method !== 'HEAD') {
        if(isFormData) {
            config.body = body
        } else {
            if(headers['Content-Type'] === 'application/json') {
                config.body = JSON.stringify(body)
            } else {
                config.body = body
            }
        }
    }

    if(params) {
        const searchParams = new URLSearchParams()
        Object.entries(params).forEach(([Key, value]) => {
            if(value !== undefined && value !== null) {
                if(Array.isArray(value)) {
                    searchParams.append(Key, String(value))
                }
            }
        })

        const queryString = searchParams.toString()
        if(queryString) {
            // const separator = url.includes('?') ? '&' : '?'
        }
    }

    const finalUrl = params ? `${url}?${new URLSearchParams(params as any).toString()}` : url
    console.log('   Final Request URL with params:', finalUrl)

    try {
        console.log('finalUrl:', finalUrl)
        console.log('config:', config)
        const response = await fetch(finalUrl, config)
        console.log('[Backend API Response]', method, finalUrl, 'Status:', response.status)

        let responseBody: any = null
        if(response.status !== 204) {
            try {
                const contentType = response.headers.get("content-type");
                if (contentType && contentType.includes("application/json")) {
                    responseBody = await response.json()
                    console.log('  Response Body (JSON):', responseBody)
                } else {
                    // JSON이 아니면 텍스트로 읽기 시도
                    const textBody = await response.text()
                    responseBody = { message: textBody || `Backend returned status ${response.status} with empty body.` }
                    console.log('  Response Body (Text):', responseBody.message)
                }
            } catch (parseError) {
                console.error(`Failed to parse response body for ${method} ${finalUrl}`, parseError)
                responseBody = { message: 'Failed to parse response body.' }
            }
        }

        if(!response.ok) {
            console.error('[Backend API Error Response]', method, finalUrl, 'Status:', response.status, 'Body:', responseBody)
            throw new ApiError(
                response.status,
                responseBody?.message || `Backend API request failed with status ${response.status}`,
                responseBody
            )
        }

        return responseBody
    } catch (error) {
        console.error('[Backend API Fetch Error]', method, finalUrl, error)
        if(error instanceof ApiError) {
            throw error
        }
        throw new Error(`Network or unexpected error during Backend API call: ${error instanceof Error ? error.message : String(error)}`)
    }
}

const api = {
    get: <T>(endpoint: string, options?: RequestOptions) => request<T>('GET', endpoint, undefined, options),
    post: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('POST', endpoint, body, options),
    put: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('PUT', endpoint, body, options),
    delete: <T>(endpoint: string, body?: any, options?: RequestOptions) => request<T>('DELETE', endpoint, body, options),
    patch: <T>(endpoint: string, body: any, options?: RequestOptions) => request<T>('PATCH', endpoint, body, options),
}

export default api;
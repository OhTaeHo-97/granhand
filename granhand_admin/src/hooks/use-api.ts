import { signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

export interface Pagination {
    page: number,
    size: number,
    total: number,
    pages: number
}

interface ApiResponse<T> {
    data?: T
    error?: string
}

interface RequestOptions extends RequestInit {
    params?: Record<string, string | number | boolean | undefined | null>
    isFormData?: boolean
}

export const useApi = () => {
    const { data: session, status } = useSession()
    // const router = useRouter()

    const createQueryString = (params?: Record<string, string | number | boolean | undefined | null>) => {
        if (!params) return ''
        
        const searchParams = new URLSearchParams()
        
        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                searchParams.append(key, String(value))
            }
        })
        
        const queryString = searchParams.toString()
        return queryString ? `?${queryString}` : ''
    }

    const fetchApi = async <T>(
        endpoint: string, 
        options: RequestOptions = {}
    ): Promise<ApiResponse<T>> => {
        if (status !== 'authenticated' || !session?.token) {
            console.log('status:', status)
            console.log('token:', session?.token)
            // window.location.href = '/login'
            if(status === 'authenticated' && !session?.token) {
                await signOut({ redirect: false })
                // router.push('/login')
                window.location.href = '/login'
                // redirect('/login')
            }
            return { error: 'No valid session' };
        }

        try {
            const { params, isFormData, ...fetchOptions } = options
            const queryString = createQueryString(params)
            const url = `${endpoint}${queryString}`

            const headers: Record<string, string> = {
                'Authorization': `${session.token}`
            }
            if (!isFormData) {
                headers['Content-Type'] = 'application/json';
            }

            const response = await fetch(url, {
                ...fetchOptions,
                headers: {
                    ...headers,
                    ...fetchOptions.headers
                }
            })

            const data = await response.json()

            if (!response.ok) {
                return { error: data.message || 'Request failed' }
            }

            return { data }
        } catch (error) {
            return { 
                error: error instanceof Error ? error.message : 'An unexpected error occurred' 
            }
        }
    }

    return { fetchApi };
}
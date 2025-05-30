import api, { ApiError } from "@/utils/api"
import { NextResponse } from "next/server"

const URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function POST(req: Request) {
    const token = req.headers.get('authorization')

    try {
        const body = await req.json()
        const response = await api.post('/product/category', body, {
            token: token || undefined
        })

        return NextResponse.json(response)
    } catch(error) {
        console.error('Error in API route /product/category:', error)

        if (error instanceof ApiError) {
            // ApiError인 경우 백엔드에서 받은 상태 코드와 메시지 사용
            if ('status' in error && 'body' in error) {
                return NextResponse.json(
                    { message: error.message, ...error.body },
                    { status: error.status }
                )
            }
        }
        if(error instanceof Error) {
            // 기타 Error의 경우 500 Internal Server Error
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            )
        }

        // 예상치 못한 에러의 경우
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

export async function GET(req: Request) {
    const token = req.headers.get('authorization')
    
    // const { searchParams } = new URL(req.url)
    const searchParams = new URLSearchParams(req.url.split('?')[1] || '')
    const params: Record<string, string> = {}
    // const { searchParams } = new URL(req.url)

    searchParams.forEach((value: string, key: string) => {
        params[key] = value
    })

    try {
        const response = await api.get('/product/category', {
            token: token || undefined,
            params
        })

        return NextResponse.json(response)
    } catch (error) {
        console.error('Error in API route /product/category:', error)

        if (error instanceof ApiError) {
            // ApiError인 경우 백엔드에서 받은 상태 코드와 메시지 사용
            if ('status' in error && 'body' in error) {
                return NextResponse.json(
                    { message: error.message, ...error.body },
                    { status: error.status }
                )
            }
        }
        if(error instanceof Error) {
            // 기타 Error의 경우 500 Internal Server Error
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            )
        }

        // 예상치 못한 에러의 경우
        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
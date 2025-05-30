import api, { ApiError } from "@/utils/api"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
    const token = req.headers.get('authorization')
    
    const searchParams = new URLSearchParams(req.url.split('?')[1] || '')
    const params: Record<string, string> = {}

    searchParams.forEach((value: string, key: string) => {
        params[key] = value
    })

    try {
        const response = await api.get('/member/points', {
            token: token || undefined,
            params
        })

        return NextResponse.json(response)
    } catch (error) {
        console.error('Error in API route /member/points:', error)

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
        )
    }
}
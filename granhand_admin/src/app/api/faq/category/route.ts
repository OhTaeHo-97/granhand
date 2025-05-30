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
        const response = await api.get('/board/faqcate', {
            token: token || undefined,
            params
        })

        return NextResponse.json(response)
    } catch(error) {
        console.error('Error in API route /board/faqcate:', error)

        if(error instanceof ApiError) {
            if('status' in error && 'body' in error) {
                return NextResponse.json(
                    { message: error.message, ...error.body },
                    { status: error.status }
                )
            }
        }

        if(error instanceof Error) {
            return NextResponse.json(
                { message: error.message },
                { status: 500 }
            )
        }

        return NextResponse.json(
            { message: 'Internal Server Error' },
            { status: 500 }
        )
    }
}
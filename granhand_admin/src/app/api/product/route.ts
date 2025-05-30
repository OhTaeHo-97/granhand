import api, { ApiError } from "@/utils/api";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const token = req.headers.get('authorization')
    const formData = await req.formData()

    try {
        const response = await api.post('/product/register', formData, {
            token: token || undefined,
            isFormData: true
        })

        return NextResponse.json(response)
    } catch(error) {
        console.error('Error in API route /product/register:', error)

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

    // let backendResponseBody: any;
    // let backendStatus: number;

    // try {
    //     // const frontendRequestBody = await req.json()
    //     // console.log(frontendRequestBody)

    //     // const backendRequestBody = {
    //     //     code: frontendRequestBody.code,
    //     //     name: frontendRequestBody.name,
    //     //     sprice: frontendRequestBody.sprice,
    //     //     dprice: frontendRequestBody.dprice,
    //     //     dan: frontendRequestBody.dan,
    //     //     memo: frontendRequestBody.memo,
    //     //     isshow: frontendRequestBody.isshow,
    //     //     catecodes: frontendRequestBody.catecodes,
    //     //     images: frontendRequestBody.images,
    //     //     // imageOrders: frontendRequestBody.imageOrders
    //     // }

    //     // console.log('request body: ', backendRequestBody)

    //     try {
    //         const formData = await req.formData()
    //         console.log('Received FormData in API route.')

    //         const backendResponse = await fetch(`${URL}/product/register`, {
    //             method: 'POST',
    //             headers: {
    //                 ...(token ? { Authorization: token } : {}),
    //             },
    //             body: formData
    //         })

    //         backendStatus = backendResponse.status
    //         console.log('Backend response status:', backendStatus)

    //         if (backendStatus !== 204) {
    //             try {
    //                 const contentType = backendResponse.headers.get('content-type');
    //                 if (contentType && contentType.includes("application/json")) {
    //                     backendResponseBody = await backendResponse.json();
    //                     console.log('Backend JSON response body:', backendResponseBody);
    //                 } else {
    //                     console.warn('Backend response was not JSON. Attempting to read as text.');
    //                     const textBody = await backendResponse.text();
    //                     backendResponseBody = { message: textBody || `Backend returned status ${backendStatus} with empty body.` };
    //                     console.log('Backend text response body:', backendResponseBody.message);
    //                 }
    //             } catch (parseError) {
    //                 console.error('Failed to parse backend response body.', parseError);
    //                 backendResponseBody = { message: 'Failed to parse response body from backend.' };
    //             }
    //         }

    //         return NextResponse.json(backendResponseBody, { status: backendStatus });
    //     } catch (error) {
    //         console.error('Error in API route /api/product/register:', error);
    //         // API 라우트 자체에서 발생한 예상치 못한 에러 처리
    //         return NextResponse.json({ message: 'Internal Server Error', error: error instanceof Error ? error.message : String(error) }, { status: 500 });
    //     }
    //     // const backendResponse = await fetch(`${URL}/product/register`, {
    //     // // const backendResponse = await fetch(`http://localhost:8080/product/register`, {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         // 'Content-Type': 'multipart/form-data',
    //     //         ...(token ? { Authorization: token } : {}),
    //     //         // 'Content-Type': 'multipart/form-data'
    //     //     },
    //     //     // body: JSON.stringify(backendRequestBody)
    //     //     body: formData
    //     // })

    //     // const contentType = backendResponse.headers.get('content-type')
    //     // // const status = backendResponse.status
    //     // backendStatus = backendResponse.status

    //     // try {
    //     //     backendResponseBody = await backendResponse.json()
    //     //     console.log('backendResponseBody:', backendResponseBody)
    //     //     if(backendResponse.status !== 200) {
    //     //         throw Error(backendResponseBody)
    //     //     }
    //     // } catch(jsonError) {
    //     //     console.warn('Backend response was not JSON. Attempting to read as text.', jsonError);
    //     //     try {
    //     //         backendResponseBody = await backendResponse.text();
    //     //         // If reading as text is successful, wrap it in an object for consistency
    //     //         backendResponseBody = { message: backendResponseBody };
    //     //     } catch (textError) {
    //     //         console.error('Failed to read backend response as text.', textError);
    //     //         // If reading as text also fails, provide a generic error message
    //     //         backendResponseBody = { message: 'Failed to read response body from backend.' };
    //     //     }
    //     //     // Log original status even if body parsing failed
    //     //     console.error('Backend responded with status:', backendStatus, 'but body was not valid JSON.');
    //     // }

    //     // return NextResponse.json(backendResponseBody, { status: backendStatus })
    // } catch (error) {
    //     console.error('Error in API route /api/product/register:', error)
    //     return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    // }
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
        const response = await api.get('/product/list', {
            token: token || undefined,
            params
        })

        return NextResponse.json(response)
    } catch (error) {
        console.error('Error in API route /product/list:', error)

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
import { NextResponse } from "next/server";

const URL = process.env.NEXT_PUBLIC_API_BASE_URL

export async function POST(req: Request) {
    let backendResponseBody: any;
    let backendStatus: number;

    try {
        const frontendRequestBody = await req.json()
        console.log(frontendRequestBody)

        const backendRequestBody = {
            code: frontendRequestBody.code,
            name: frontendRequestBody.name,
            sprice: frontendRequestBody.sprice,
            dprice: frontendRequestBody.dprice,
            dan: frontendRequestBody.dan,
            memo: frontendRequestBody.memo,
            isshow: frontendRequestBody.isshow,
            categories: frontendRequestBody.categories,
            images: frontendRequestBody.images,
            imageOrders: frontendRequestBody.imageOrders
        }

        console.log('request body: ', backendRequestBody)

        const backendResponse = await fetch(`${URL}/product/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: JSON.stringify(backendRequestBody)
        })

        backendStatus = backendResponse.status

        try {
            backendResponseBody = await backendResponse.json()
        } catch(jsonError) {
            console.warn('Backend response was not JSON. Attempting to read as text.', jsonError);
            try {
                backendResponseBody = await backendResponse.text();
                // If reading as text is successful, wrap it in an object for consistency
                backendResponseBody = { message: backendResponseBody };
            } catch (textError) {
                console.error('Failed to read backend response as text.', textError);
                // If reading as text also fails, provide a generic error message
                backendResponseBody = { message: 'Failed to read response body from backend.' };
            }
            // Log original status even if body parsing failed
            console.error('Backend responded with status:', backendStatus, 'but body was not valid JSON.');
        }

        return NextResponse.json(backendResponseBody, { status: backendStatus })
    } catch (error) {
        console.error('Error in API route /api/product/register:', error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}
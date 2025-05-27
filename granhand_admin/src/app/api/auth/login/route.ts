import { NextResponse } from 'next/server'

export async function POST(req: Request) {
    let backendResponseBody: any;
    let backendStatus: number;

    try {
        const frontendRequestBody = await req.json()

        const backendRequestBody = {
            id: frontendRequestBody.id,
            passwd: frontendRequestBody.passwd,
        }

        const backendResponse = await fetch('http://3.35.3.96:8080/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
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
        console.error('Error in API route /api/auth/login:', error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}
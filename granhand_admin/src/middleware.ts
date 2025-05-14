import { NextRequest, NextResponse } from 'next/server'
import { fallbackLng, locales } from '../utils/localization/settings'

// const locales = ['en', 'ko']
// const defaultLocale = 'ko'

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    // const token = req.cookies.get('token')?.value

    // if(!token && pathname !== '/login') {
    //     return NextResponse.redirect(
    //         new URL(`/login`, req.url)
    //     )
    // }

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if(pathnameHasLocale) {
        return NextResponse.next()
    }

    return NextResponse.rewrite(new URL(`/${fallbackLng}${pathname}${req.nextUrl.search}`, req.url))
}

export const config = {
    // 다음 경로에서는 미들웨어가 실행되지 않도록 설정합니다.
    matcher: [
        '/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)',
    ],
}
import { NextRequest, NextResponse } from 'next/server'
import { fallbackLng, locales } from '../utils/localization/settings'

// const locales = ['en', 'ko']
// const defaultLocale = 'ko'

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    // if(pathname.includes('/my-info')) {
    //     const isAuthenticated = req.cookies.get('re-authenticated')?.value === 'true'

    //     if(!isAuthenticated) {
    //         let redirectUrl
    //         if(pathnameHasLocale) {
    //             redirectUrl = new URL(`/my-page/verify${req.nextUrl.search}`, req.url)
    //         } else {
    //             redirectUrl = new URL(`/${fallbackLng}/my-page/verify${req.nextUrl.search}`, req.url)
    //         }
    //         redirectUrl.searchParams.set('redirectTo', pathname) // 원래 위치 기억
            
    //         return NextResponse.redirect(redirectUrl)
    //     }
    // }

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
import { NextRequest, NextResponse } from 'next/server'
import { fallbackLng, locales } from '../utils/localization/settings'

// const locales = ['en', 'ko']
// const defaultLocale = 'ko'

export function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname
    console.log('fallbackLng: ', fallbackLng)
    console.log('pathname: ', pathname)

    // 두 번째 ChatGPT
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if(pathnameHasLocale) {
        return NextResponse.next()
    }

    return NextResponse.rewrite(new URL(`/${fallbackLng}${pathname}`, req.url))

    // 블로그
    // if(pathname.startsWith(`/${fallbackLng}/`) || pathname === `/${fallbackLng}`) {
    //     return NextResponse.redirect(
    //         new URL(
    //             pathname.replace(`/${fallbackLng}`, pathname === `/${fallbackLng}` ? '/' : ''),
    //             req.url
    //         )
    //     )
    // }

    // const pathnameIsMissingLocale = locales.every(
    //     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    // )

    // if(pathnameIsMissingLocale) {
    //     return NextResponse.rewrite(new URL(`/${fallbackLng}${pathname}`, req.url))
    // }



    // 첫 번째 ChatGPT
    // const pathnameHasLocale = locales.some(
    //     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    // )

    // if(pathnameHasLocale) return;

    // const acceptLng = req.headers.get('accept-language') || ''
    // const matchedLocale = locales.find((locale) => acceptLng.includes(locale)) || defaultLocale

    // return NextResponse.redirect(
    //     new URL(`/${matchedLocale}${pathname}`, req.url)
    // )
}

export const config = {
    // 다음 경로에서는 미들웨어가 실행되지 않도록 설정합니다.
    matcher: [
        '/((?!api|.*\\..*|_next/static|_next/image|manifest.json|assets|favicon.ico).*)',
    ],
};

// export const config = {
//     matcher: ['/((?!api|_next|favicon.ico).*)']
// }
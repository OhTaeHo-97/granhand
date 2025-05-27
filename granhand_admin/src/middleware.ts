import { NextRequest, NextResponse } from 'next/server'
import { fallbackLng, locales } from '../utils/localization/settings'

export async function middleware(req: NextRequest) {
    const pathname = req.nextUrl.pathname

    // console.log('pathname: ', pathname)

    const token = req.cookies.get('next-auth.session-token')?.value

    // console.log('token: ', token)

    // 로그인된 사용자가 /login 페이지에 접근하려고 할 때
    if (token && pathname === `/${fallbackLng}/login`) {
        return NextResponse.redirect(new URL(`/${fallbackLng}`, req.url))
    }
    if (token && pathname === `/login`) {
        return NextResponse.redirect(new URL(`/`, req.url))
    }

    // 로그인하지 않은 사용자가 보호된 경로에 접근하려고 할 때
    if (!token && pathname !== `/${fallbackLng}/login` && !token && pathname !== `/login`) {
        
        return NextResponse.redirect(new URL(`/login`, req.url))
    }
    if (!token && pathname !== `/login`) {
        return NextResponse.redirect(new URL(`/login`, req.url))
    }

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
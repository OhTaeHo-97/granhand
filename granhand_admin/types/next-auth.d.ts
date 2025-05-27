import "next-auth"
import { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            idx: number
            id: string
            name: string
            memgrade: number
            signdate: string
            lastlogin: string
            lastip: string
        } & DefaultSession["user"]
        token: string // JWT 토큰을 세션에 추가
        expireDate: string
    }

    interface User {
        idx: number
        id: string
        name: string
        memgrade: number
        signdate: string
        lastlogin: string
        lastip: string
        token: string
        expireDate: string
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
    interface JWT {
        idx: number
        id: string
        name: string
        memgrade: number
        signdate: string
        lastlogin: string
        lastip: string
        token: string
        expireDate: string
    }
}
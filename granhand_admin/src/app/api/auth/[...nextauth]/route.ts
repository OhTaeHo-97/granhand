import NextAuth, { DefaultSession, NextAuthOptions, Session } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Spring Login",
            credentials: {
                id: { label: 'ID', type: 'text' },
                passwd: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                // console.log('credentials:', credentials)

                // if(!credentials) {
                //     return null
                // }
                // credentials에 id와 passwd가 없는 경우는 세션 체크로 간주
                if (!credentials?.id || !credentials?.passwd) {
                    console.log('credential id, pw 없음')
                    return null
                }

                const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || ''
                
                try {
                    const backendResponse = await fetch(`${API_BASE_URL}/admin/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            id: credentials.id,
                            passwd: credentials.passwd
                        })
                    })

                    // console.log('backendResponse: ', backendResponse.body)

                    const data = await backendResponse.json()
                    console.log('Backend response data: ', data)
                    
                    if (backendResponse.ok && data.token) {
                        // 로그인 성공 시 사용자 정보와 토큰을 반환
                        console.log('data.token: ', data.token)
                        const user = {
                            idx: data.datas.idx,
                            id: data.datas.id,
                            name: data.datas.name,
                            memgrade: data.datas.memgrade,
                            signdate: data.datas.signdate,
                            lastlogin: data.datas.lastlogin,
                            lastip: data.datas.lastip,
                            token: data.token,
                            expireDate: data.expireDate,
                        }
                        // console.log('User object being returned: ', user)
                        return user
                    }

                    // if(backendResponse.token && backendResponse.datas) {
                    //     return {
                    //         ...backendResponse.datas,
                    //         token: backendResponse.token,
                    //         expireDate: backendResponse.expireDate,
                    //     }
                    // }

                    return null

                    // const user = backendResponse.user
                    // const token = backendResponse.token

                    // if (user && token) {
                    //     return {
                    //         id: user.id,
                    //         name: user.name,
                    //         email: user.email,
                    //         jwtToken: token,
                    //     }
                    // } else {
                    //     return null
                    // }
                } catch (error) {
                    console.error('Backend login failed: ', error)
                    return null
                }
            }

            // credentials: {
            //     username: { label: 'Email', type: 'text' },
            //     password: { label: 'Password', type: 'password' },
            // },
            // async authorize(credentials) {
            //     const res = await fetch('http://3.35.3.96:8080/admin/login', {
            //         method: 'POST',
            //         headers: { "Content-Type": "application/json" },
            //         body: JSON.stringify({
            //             email: credentials?.username,
            //             password: credentials?.password
            //             // credentials
            //         }),
            //     })

            //     const data = await res.json()

            //     if(res.ok && data.token) {
            //         return {
            //             id: data.userId,
            //             email: data.email,
            //             accessToken: data.token,
            //         }
            //     }

            //     return null
            // },
        }),
    ],
    callbacks: {
        async jwt({ token, user, trigger }) {
            // console.log('JWT Callback - Input token:', token)
            // console.log('JWT Callback - Input user:', user)
            // console.log('JWT Callback - Trigger:', trigger)

            if(user) {
                const newToken = {
                    ...token,
                    idx: user.idx,
                    id: user.id,
                    name: user.name,
                    memgrade: user.memgrade,
                    signdate: user.signdate,
                    lastlogin: user.lastlogin,
                    lastip: user.lastip,
                    token: user.token,
                    expireDate: user.expireDate,
                }
                // console.log('JWT Callback - New token:', newToken)
                return newToken
                // token.idx = user.idx
                // token.id = user.id
                // token.name = user.name
                // token.memgrade = user.memgrade
                // token.signdate = user.signdate
                // token.lastlogin = user.lastlogin
                // token.lastip = user.lastip
                // token.token = user.token
                // token.expireDate = user.expireDate
            }

            if (token.token && token.expireDate) {
                const expireDate = new Date(token.expireDate)
                if (expireDate > new Date()) {
                    console.log('JWT Callback - Existing valid token found')
                    return token
                }
            }

            console.log('JWT Callback - No valid token found')
            return token
        },
        // async jwt({ token, user }: { token: JWT, user: any}) {
        //     if (user) {
        //         token.jwtToken = user.jwtToken
        //         token.id = user.id
        //         token.name = user.name
        //         token.email = user.email
        //     }

        //     return token
        // },
        async session({ session, token }) {
            // console.log('Session Callback - Input session:', session)
            // console.log('Session Callback - Input token:', token)

            if(token.token && token.expireDate) {
                const expireDate = new Date(token.expireDate)
                if (expireDate > new Date()) {
                    const newSession = {
                        ...session,
                        user: {
                            ...session.user,
                            idx: token.idx,
                            id: token.id,
                            name: token.name,
                            memgrade: token.memgrade,
                            signdate: token.signdate,
                            lastlogin: token.lastlogin,
                            lastip: token.lastip,
                        },
                        token: token.token,
                        expireDate: token.expireDate
                    }
                    // console.log('Session Callback - New session:', newSession)
                    return newSession
                }
    
                // if(session.user) {
                //     session.user.idx = token.idx
                //     session.user.id = token.id
                //     session.user.name = token.name
                //     session.user.memgrade = token.memgrade
                //     session.user.signdate = token.signdate
                //     session.user.lastlogin = token.lastlogin
                //     session.user.lastip = token.lastip
                // }
                // session.token = token.token
                // session.expireDate = token.expireDate
                // return {
                //     ...session,
                //     ...token
                // }
            }

            console.log('Session Callback - No valid token found')
            return session
        }
    },
    cookies: {
        sessionToken: {
            name: `next-auth.session-token`,
            options: {
                httpOnly: true,
                sameSite: 'lax',
                path: '/',
                secure: process.env.NODE_ENV === 'production',
            },
        },
    },
    pages: {
        signIn: '/login',
        // error: '/login'
    },
    session: {
        strategy: 'jwt'
    },
    events: {
        async signIn({ user }) {
            console.log('User signed in:', user)
        },
        async signOut() {
            console.log('User signed out')
        },
        async session({ session, token }) {
            console.log('Session event:', { session, token })
        }
    }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
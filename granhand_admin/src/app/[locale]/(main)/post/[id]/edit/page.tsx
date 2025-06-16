'use client'

import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Board, useBoard } from "@/hooks/use-board"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { PostCategory } from "../../page"
import { useTranslation } from "../../../../../../../utils/localization/client"
import CreatePostHeader from "../../register/components/header"
import PostContents from "../../register/components/post-contents"

export default function PostEditPage() {
    const { data: session, status } = useSession()
    const router = useRouter()
    const [boardContents, setBoardContents] = useState<Board>({
        boardid: '',
        language: 'ko',
        btype: '2',
        mem_idx: 0,
        mem_name: '',
        cates: '',
        subject: '',
        memo: '',
        nip: ''
    })
    const [categories, setCategories] = useState<PostCategory[]>([])
    const [type, setType] = useState<'immediate' | 'scheduled'>('immediate')
    const [date, setDate] = useState(new Date())
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())
    
    const { addBoard, getBoardConfig } = useBoard()

    const fetchBoardConfig = async () => {
        const { data, error } = await getBoardConfig()

        if(error) {
            console.error('Failed to fetch board config for error:', error)
            alert('게시판 정보를 가져오는 데에 실패하였습니다.')
            setCategories([])
        } else if(data) {
            console.log('data:', data)
            if(data.datas) {
                setCategories(data.datas.map((item) => ({
                    id: item.board_id,
                    name: item.board_name
                })))
                setBoardContents((prev) => ({
                    ...prev,
                    boardid: data.datas[0].board_id
                }))
            } else {
                setCategories([])
            }
        }
    }

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'event', 'post'])
    const currentLocale = useCurrentLocale()

    const publishBoard = async () => {
        const { data, error } = await addBoard(boardContents)

        if(error) {
            console.error('Failed to add board for error:', error)
            alert('게시글을 등록하는 데에 실패하였습니다.')
        } else if(data) {
            if(data.result && data.result === 'ok') {
                alert('게시글을 등록하였습니다.')
                router.push(`${currentLocale}/post`)
            }
        }
    }

    const handleCancel = () => {
        router.push(`${currentLocale}/post`)
    }

    const handleRegister = async () => {
        const confirmed = window.confirm('작성한 글을 게시하겠습니까?')
        
        if(confirmed) {
            console.log('게시')
            await publishBoard()
        } else {
            console.log('게시 취소')
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            fetchBoardConfig()
            if(session?.user) {
                setBoardContents((prev) => ({
                    ...prev,
                    mem_idx: session.user.idx,
                    mem_name: session.user.name
                }))
            }
        }
    }, [status, session])

    return (
        <main className="flex-1 border">
            <div className="flex justify-between p-12">
                <div className="text-[#5E5955] text-sm space-y-4">
                    <h1 className="text-2xl font-bold">{t('post:post_manage')}</h1>
                </div>
                <div className="space-x-2">
                    <Button className="bg-white text-black border w-25" onClick={handleCancel}>
                        {t('cancel')}
                    </Button>
                    <Button className="bg-[#322A24] text-white w-25" onClick={handleRegister}>
                        {t('event:publish')}
                    </Button>
                </div>
            </div>
            <div className="mt-7 p-12">
                <CreatePostHeader categories={categories} boardContents={boardContents} setBoardContents={setBoardContents} t={t} />
                <PostContents boardContents={boardContents} type={type} date={date} hour={hour} minute={minute} setBoardContents={setBoardContents} setType={setType} setDate={setDate} setHour={setHour} setMinute={setMinute} t={t} />
            </div>
        </main>
    )
}
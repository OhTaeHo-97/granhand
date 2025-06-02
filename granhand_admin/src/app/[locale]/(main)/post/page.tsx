'use client'

// import Pagination from "@/components/pagination";
import { Button } from "@/components/ui/button";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pencil } from "lucide-react";
// import { LocaleTypes } from "../../../../../utils/localization/settings";
// import { translation } from "../../../../../utils/localization/locales/server";
// import { getCurrentLocaleFromParams } from "@/lib/getCurrentLocaleFromParams";
import Link from "next/link";
// import EventList from "./components/event-list";
import PostHeader from "./components/post-header";
import PostList from "./components/post-list";
import { useEffect, useState } from "react";
import { useBoard } from "@/hooks/use-board";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useSession } from "next-auth/react";
// import Pagination from "@/components/pagination";

export default function PostPage() {
    const { status } = useSession()
    const { getBoardConfig, getBoard } = useBoard()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'post'])
    const currentLocale = useCurrentLocale()
    // const { locale } = await params
    // const { t } = await translation(locale, ['common', 'post'])
    // const currentLocale = getCurrentLocaleFromParams(locale)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [size, setSize] = useState('50')
    const [category, setCategory] = useState('all')
    const [contents, setContents] = useState([])

    const fetchBoardConfig = async () => {
        const { data, error } = await getBoardConfig()

        if(error) {
            console.error('Failed to fetch board config for error:', error)
            alert('게시판 정보를 가져오는 데에 실패하였습니다.')
            setContents([])
            setTotalPage(0)
            setCurrentPage(1)
        } else if(data) {
            if(data.datas) {
                // TODO: 성공 후 처리
            } else {
                setContents([])
                setTotalPage(0)
                setCurrentPage(1)
            }
        }
    }

    const fetchBoards = async (category?: string) => {
        const params: Record<string, any> = {}
        params.page = currentPage
        params.size = Number(size)
        params.boardid = category ? category : 'all'

        const { data, error } = await getBoard(params)

        if(error) {
            console.error('Failed to fetch boards for error:', error)
            alert('게시판 정보를 가져오는 데에 실패하였습니다.')
            setContents([])
            setTotalPage(0)
            setCurrentPage(1)
        } else if(data) {
            console.log('게시글 가져옴')
            if(data.datas) {
                setContents(data.datas)
                setTotalPage(data.total)
                setCurrentPage(data.page)
            } else {
                setContents([])
                setTotalPage(0)
                setCurrentPage(1)
            }
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            // fetchBoardConfig()
            fetchBoards(category)
        }
    }, [status, size, currentPage])

    return (
        <main className="flex-1 border">
            <div className="p-12 text-[#231815B2] text-sm space-y-4">
                <div className="flex justify-between items-center">
                    <div className="text-black text-sm">
                        <h1 className="text-2xl font-bold text-[#5E5955]">{t('post:post_manage')}</h1>
                    </div>
                    <div className="space-x-2">
                        <Link href={`${currentLocale}/post/register`}>
                            <Button className="bg-[#322A24] text-white">
                                <Pencil />{t('post:add_post')}
                            </Button>
                        </Link>
                    </div>
                </div>

                <PostHeader category={category} setCategory={setCategory} fetchBoards={fetchBoards} />

                <PostList contents={contents} currentPage={currentPage} totalPage={totalPage} size={size} setCurrentPage={setCurrentPage} setSize={setSize} />
                {/* <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
                {/* <Pagination totalPages={15} /> */}
            </div>
        </main>
    )
}
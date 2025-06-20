'use client'

import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";
import PostHeader from "./components/post-header";
import PostList from "./components/post-list";
import { useEffect, useState } from "react";
import { useBoard } from "@/hooks/use-board";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../utils/localization/client";
import { useSession } from "next-auth/react";
import { useSearchParams } from "next/navigation";

export interface PostCategory {
    id: string
    name: string
}

export default function PostPage() {
    const { status } = useSession()
    const { getBoardConfig, getBoard } = useBoard()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'post'])
    const currentLocale = useCurrentLocale()
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [size, setSize] = useState('50')
    const [categories, setCategories] = useState<PostCategory[]>([])
    const [category, setCategory] = useState('all')
    // const [contents, setContents] = useState([])
    const [, setContents] = useState([])
    const searchParams = useSearchParams()

    const searchCategory = searchParams.get('category')
    const searchFilter = searchParams.get('filter')
    const searchKeyword = searchParams.get('q')

    const fetchBoardConfig = async () => {
        const { data, error } = await getBoardConfig()

        if(error) {
            console.error('Failed to fetch board config for error:', error)
            alert('게시판 정보를 가져오는 데에 실패하였습니다.')
            setContents([])
            setCategories([])
            setTotalPage(0)
            setCurrentPage(1)
        } else if(data) {
            console.log('data:', data)
            if(data.datas) {
                setCategories(data.datas.map((item) => ({
                    id: item.board_id,
                    name: item.board_name
                })))
                setCategory(data.datas[0].board_id)
            } else {
                setContents([])
                setCategories([])
                setTotalPage(0)
                setCurrentPage(1)
            }
        }
    }

    const fetchBoards = async (category?: string) => {
        const params: Record<string, string | number> = {}
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
            fetchBoardConfig()
            fetchBoards(category)
        }
    }, [status, size, currentPage])

    useEffect(() => {
        if(status === 'authenticated') {
            fetchBoards(searchCategory ? searchCategory : 'all')
        }
    }, [searchCategory, searchFilter, searchKeyword])

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

                <PostHeader category={category} categories={categories} setCategory={setCategory} fetchBoardConfig={fetchBoardConfig} />

                {/* <PostList contents={contents} currentPage={currentPage} totalPage={totalPage} size={size} setCurrentPage={setCurrentPage} setSize={setSize} /> */}
                <PostList currentPage={currentPage} totalPage={totalPage} size={size} setCurrentPage={setCurrentPage} setSize={setSize} />
            </div>
        </main>
    )
}
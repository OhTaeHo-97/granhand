'use client'

import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useCurrentLocale, useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RefreshCw, Search } from "lucide-react";
import { PostCategory } from "../page";
import { useRouter, useSearchParams } from "next/navigation";

export default function PostHeader({ category, categories, setCategory }: { category: string, categories: PostCategory[], setCategory: React.Dispatch<React.SetStateAction<string>>, fetchBoardConfig: () => Promise<void> }) {
    const router = useRouter()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'post'])
    const currentLocale = useCurrentLocale()
    // const [category, setCategory] = useState('all')
    const [searchCategory, setSearchCategory] = useState('title')
    const [keyword, setKeyword] = useState('')
    const searchParams = useSearchParams()

    const initialize = () => {
        setCategory(categories.length !== 0 ? categories[0].id : '')
        setSearchCategory('title')
        setKeyword('')
    }

    const onClickSearch = async () => {
        const params = new URLSearchParams(searchParams)
        params.set('category', category)
        params.set('filter', searchCategory)
        params.set('q', keyword)

        router.push(`${currentLocale}/post?${params.toString()}`)
    }

    return (
        <>
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white mb-7 mt-10">
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('post:category')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-34">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white border rounded shadow-md">
                                {categories.map((postCategory) => (
                                    <SelectItem key={postCategory.id} value={`${postCategory.id}`} className="px-3 py-2 cursor-pointer">{postCategory.name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="grid grid-cols-[150px_1fr] border-b border-gray-200 h-full">
                    <div className="bg-[#322A2408] border-r border-gray-200 flex items-center justify-center p-2 text-[#6F6963]">
                        <Label className="font-semibold">{t('post:detailed_filter')}</Label>
                    </div>
                    <div className="flex items-center gap-4 p-5">
                    <Select value={searchCategory} onValueChange={setSearchCategory}>
                        <SelectTrigger className="border rounded px-2 py-1 flex items-center gap-1 w-34">
                            <SelectValue placeholder={t('post:title')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white border rounded shadow-md">
                            <SelectItem value="title" className="px-3 py-2 cursor-pointer">{t('post:title')}</SelectItem>
                            <SelectItem value="content" className="px-3 py-2 cursor-pointer">{t('post:content')}</SelectItem>
                        </SelectContent>
                    </Select>
                    <Input
                        type="text"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        placeholder={t('post:search')}
                        className="border rounded px-2 py-1 flex-1 min-w-[200px] h-10"
                    />
                    </div>
                </div>
            </div>
            <div className="flex mx-auto justify-center items-center w-full gap-10 mt-10 mb-10">
                <Button className="bg-white text-[#322A24] border w-32" onClick={initialize}>
                    <RefreshCw />
                    {t('reset')}
                </Button>
                <Button className="bg-[#322A24] text-white w-32" onClick={onClickSearch}>
                    <Search />
                    {t('search')}
                </Button>
            </div>
        </>
    )
}
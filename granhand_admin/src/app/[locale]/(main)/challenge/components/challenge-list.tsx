import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ChallengeModal from "./challenge-modal";
import { useState } from "react";
import Pagination from "@/components/pagination";

export default function ChallengeList({ t, currentLocale }: { t: (key: string) => string, currentLocale: string }) {
    const [open, setOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    // const [totalPage, setTotalPage] = useState(0)
    const [selectedChallenges, setSelectedChallenges] = useState<number[]>([])
    const [size, setSize] = useState('50')

    const handleSelectAll = (checked: boolean) => {
        if(checked) {
            const allIds = Array.from({ length: 12 }, (_, i) => i + 1)
            setSelectedChallenges(allIds)
        } else {
            setSelectedChallenges([])
        }
    }

    const handleCheckboxChange = (id: number) => {
        setSelectedChallenges((prev) => {
            if(prev.includes(id)) {
                return prev.filter((itemId) => itemId !== id)
            } else {
                return [...prev, id]
            }
        })
    }

    return (
        <>
            <div className="p-6 shadow-sm">
                <div>
                    <div className="mb-4 justify-between flex items-center">
                        <div className="text-[#5E5955] font-bold text-base">
                            {t('challenge:list')} ({t('challenge:total')} <span className="text-[#4C89E4]">30</span>{currentLocale === '' && '개'})
                        </div>
                        <div className="flex gap-2">
                            <Select defaultValue={size} onValueChange={setSize}>
                                <SelectTrigger className="w-fit">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent className="bg-white">
                                    <SelectItem value="50">50</SelectItem>
                                    <SelectItem value="100">100</SelectItem>
                                    <SelectItem value="500">500</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <table className="w-full text-left border-collapse min-w-6xl">
                        <thead className="bg-[#322A2408] border-t h-20">
                            <tr className="border-b text-[#6F6963]">
                                <th className="p-2 text-center">
                                    <Checkbox id="all-selected" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white" onCheckedChange={handleSelectAll} />
                                </th>
                                <th className="p-2 text-center">{t('challenge:challenge_name')}</th>
                                <th className="p-2 text-center">{t('challenge:description')}</th>
                                <th className="p-2 text-center">{t('challenge:status')}</th>
                                <th className="p-2 text-center">{t('manage')}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {contents.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="h-32 text-center text-gray-500">결과가 없습니다.</td>
                                </tr>
                            ) : (
                                <tr key={i} className="h-14 text-[#1A1A1A]">
                                    <td className="p-2 flex items-center justify-center gap-3"><Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/></td>
                                    <td className="p-2 text-center">마음의 향기</td>
                                    <td className="p-2 text-center">다른 사람에게 선물하기</td>
                                    <td className="p-2 text-center">활성</td>
                                    <td className="p-2 flex items-center justify-center gap-3">
                                        <Button className="border rounded px-2" onClick={() => setOpen((prev) => !prev)}>{t('edit2')}</Button>
                                    </td>
                                </tr>
                            )} */}
                            {Array.from({ length: 12 }).map((_, i) => (
                                <tr key={i} className="h-14 text-[#1A1A1A]">
                                    <td className="p-2 flex items-center justify-center gap-3">
                                        <Checkbox
                                            id={i.toString()}
                                            className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"
                                            checked={selectedChallenges.includes(i + 1)}
                                            onCheckedChange={() => handleCheckboxChange(i + 1)}
                                        />
                                    </td>
                                    <td className="p-2 text-center">마음의 향기</td>
                                    <td className="p-2 text-center">다른 사람에게 선물하기</td>
                                    <td className="p-2 text-center">활성</td>
                                    <td className="p-2 flex items-center justify-center gap-3">
                                        <Button className="border rounded px-2" onClick={() => setOpen((prev) => !prev)}>{t('edit2')}</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end mt-10">
                    <Select>
                        <SelectTrigger className="w-40">
                            <SelectValue placeholder={t('challenge:change_status')} />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                            <SelectItem value="active">{t('challenge:active')}</SelectItem>
                            <SelectItem value="inactive">{t('challenge:inactive')}</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                {/* <Pagination totalPages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
                <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
            <ChallengeModal open={open} setOpen={setOpen} challengeInfo={{ title: '마음의 향기', description: '다른 사람에게 선물하기', status: 'active' }} t={t} />
        </>
    )
}
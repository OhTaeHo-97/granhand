import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ExchangeListTable from "./exchange-list-table";
import { useState } from "react";
import ExcelDownloadModal from "../../components/modal/excel-download-modal";
import Pagination from "@/components/pagination";
import { TFunction } from "i18next";

export default function ExchangeList({ exchangeState, t }: { exchangeState: string, t: TFunction }) {
    const [openExcelDown, setOpenExcelDown] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)

    return (
        <div className="p-6 shadow-sm">
            <div>
                <div className="mb-4 justify-between flex items-center">
                    <div className="text-[#5E5955] font-bold text-base">
                        {t('order:list')} ({t('product:total')} <span className="text-blue-500 font-bold">303 {t('product:items')}</span>)
                    </div>
                    <div className="flex gap-2">
                        <Select defaultValue="50">
                            <SelectTrigger className="w-fit">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="bg-white">
                                <SelectItem value="50">50</SelectItem>
                                <SelectItem value="100">100</SelectItem>
                                <SelectItem value="500">500</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button className="border" onClick={() => setOpenExcelDown((prev) => !prev)}>{t('excel_down')}</Button>
                    </div>
                </div>
                <ExchangeListTable exchangeState={exchangeState} t={t} />
                <ExcelDownloadModal isOrder={true} open={openExcelDown} setOpen={setOpenExcelDown} t={t} />
            </div>
            <Pagination totalPages={15} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}
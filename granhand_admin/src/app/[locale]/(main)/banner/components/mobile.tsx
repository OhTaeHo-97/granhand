import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import RegisterAttachmentModal, { FileItem } from "./modal/register-attachment";
import { useState } from "react";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../utils/localization/client";
import Image from "next/image";

export interface BannerInfo {
    image: FileItem | null
    linkCategory: string
    linkContent: string
    startDate: Date | undefined
    endDate: Date | undefined
    startHour: number
    startMinute: number
    endHour: number
    endMinute: number
}

export interface Banner {
    idx: number
    image: BannerInfo
    link: string
}

const createInitialBanner = (idx: number): Banner => ({
    idx,
    image: {
        image: null,
        linkCategory: '',
        linkContent: '',
        startDate: new Date(),
        endDate: new Date(),
        startHour: 0,
        startMinute: 0,
        endHour: 0,
        endMinute: 0
    },
    link: ''
})

export default function MobileBanner() {
    const [open, setOpen] = useState(false)
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'banner'])
    const [banners, setBanners] = useState<Banner[]>(
        Array.from({ length: 8 }, (_, i) => createInitialBanner(i + 1))
    )
    const [bannerItem, setBannerItem] = useState<Banner | null>(null)

    const handleBannerChange = (updatedBanner: Banner) => {
        setBannerItem(updatedBanner)
        setBanners(prevBanners => 
            prevBanners.map(banner => 
                banner.idx === updatedBanner.idx ? updatedBanner : banner
            )
        )
    }

    const handleBannerDelete = (idx: number) => {
        setBanners((prev) => prev.map((banner, i) => i === idx ? createInitialBanner(idx + 1) : banner))
    }

    return (
        <div className="bg-white rounded-l mt-10 mb-8 p-2 md:p-4">
            <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">{t('banner:top_banner')}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:fixed')}</th>
                        <td key="top_fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[0])
                                    setOpen(true)
                                }}>{t('banner:attach_file')}</Button>
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[0])
                                    setOpen(true)
                                }}>{t('edit2')}</Button>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">2</th>
                        <td key="top_fix2" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[1])
                                    setOpen(true)
                                }}>{t('banner:attach_file')}</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                        setBannerItem(banners[1])
                                        setOpen(true)
                                    }}>{t('edit2')}</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => handleBannerDelete(1)}>{t('delete')}</Button>
                                </div>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">3</th>
                        <td key="top_fix3" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[2])
                                    setOpen(true)
                                }}>{t('banner:attach_file')}</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                        setBannerItem(banners[2])
                                        setOpen(true)
                                    }}>{t('edit2')}</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => handleBannerDelete(2)}>{t('delete')}</Button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:preview')}</th>
                        <td key="top_preview1" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[0].image.image && banners[0].image.image.file.type && banners[0].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[0].image.image.previewUrl}
                                        alt={`Preview of ${banners[0].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:preview')}</th>
                        <td key="top_preview2" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[1].image.image && banners[1].image.image.file.type && banners[1].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[1].image.image.previewUrl}
                                        alt={`Preview of ${banners[1].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                                {/* <ImageIcon className="w-8 h-8 text-gray-400" /> */}
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:preview')}</th>
                        <td key="top_preview3" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[2].image.image && banners[2].image.image.file.type && banners[2].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[2].image.image.previewUrl}
                                        alt={`Preview of ${banners[2].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                    <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                    <td key="top_link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} value="app_1.3.event_01" readOnly />
                        </div>
                    </td>
                    <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                    <td key="top_link2" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} readOnly />
                        </div>
                    </td>
                    <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                    <td key="top_link3" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} readOnly />
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">{t('banner:event_banner')}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middlee">1</th>
                        <td key="event_fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[3])
                                    setOpen(true)
                                }}>{t('banner:attach_file')}</Button>
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[3])
                                    setOpen(true)
                                }}>{t('edit2')}</Button>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">2</th>
                        <td key="event_fix2" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[4])
                                    setOpen(true)
                                }}>{t('banner:attach_file')}</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                        setBannerItem(banners[4])
                                        setOpen(true)
                                    }}>{t('edit2')}</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => handleBannerDelete(4)}>{t('delete')}</Button>
                                </div>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">3</th>
                        <td key="event_fix3" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[5])
                                    setOpen(true)
                                }}>{t('banner:attach_file')}</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                        setBannerItem(banners[5])
                                        setOpen(true)
                                    }}>{t('edit2')}</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => handleBannerDelete(5)}>{t('delete')}</Button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="event_preview1" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[3].image.image && banners[3].image.image.file.type && banners[3].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[3].image.image.previewUrl}
                                        alt={`Preview of ${banners[3].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                                {/* <ImageIcon className="w-8 h-8 text-gray-400" /> */}
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:preview')}</th>
                        <td key="event_preview2" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[4].image.image && banners[4].image.image.file.type && banners[4].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[4].image.image.previewUrl}
                                        alt={`Preview of ${banners[4].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                                {/* <ImageIcon className="w-8 h-8 text-gray-400" /> */}
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:preview')}</th>
                        <td key="event_preview3" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[5].image.image && banners[5].image.image.file.type && banners[5].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[5].image.image.previewUrl}
                                        alt={`Preview of ${banners[5].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                                {/* <ImageIcon className="w-8 h-8 text-gray-400" /> */}
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                        <td key="event_link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} value="app_1.3.event_01" readOnly />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                        <td key="event_link2" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} readOnly />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                        <td key="event_link3" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} readOnly />
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className="overflow-x-auto w-fit mt-10">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">{t('banner:my_page_banner')}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                    <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">1</th>
                    <td key="my_fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                        <div className="flex justify-between gap-1">
                            <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                setBannerItem(banners[6])
                                setOpen(true)
                            }}>{t('banner:attach_file')}</Button>
                            <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                setBannerItem(banners[6])
                                setOpen(true)
                            }}>{t('edit2')}</Button>
                        </div>
                    </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:preview')}</th>
                        <td key="my_preview1" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[6].image.image && banners[6].image.image.file.type && banners[6].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[6].image.image.previewUrl}
                                        alt={`Preview of ${banners[6].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                                {/* <ImageIcon className="w-8 h-8 text-gray-400" /> */}
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                        <td key="my_link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} readOnly />
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className="overflow-x-auto w-fit mt-10">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">{t('banner:popup_banner')}</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">1</th>
                        <td key="popup_fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[7])
                                    setOpen(true)
                                }}>{t('banner:attach_file')}</Button>
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100" onClick={() => {
                                    setBannerItem(banners[7])
                                    setOpen(true)
                                }}>{t('edit2')}</Button>
                            </div>
                        </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:preview')}</th>
                        <td key="popup_preview1" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                {banners[7].image.image && banners[7].image.image.file.type && banners[7].image.image.file.type.startsWith('image/') && (
                                    <Image
                                        src={banners[7].image.image.previewUrl}
                                        alt={`Preview of ${banners[7].image.image.file.name}`}
                                        width={400}
                                        height={400}
                                        style={{ maxWidth: '100px', maxHeight: '100px', marginRight: '10px', objectFit: 'cover' }}
                                    />
                                )}
                                {/* <ImageIcon className="w-8 h-8 text-gray-400" /> */}
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">{t('banner:link')}</th>
                        <td key="popup_link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder={t('banner:enter_link')} readOnly />
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <RegisterAttachmentModal banner={bannerItem} open={open} setOpen={setOpen} t={t} onBannerChange={handleBannerChange} />
        </div>
    )
}
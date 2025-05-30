'use client'

import { Button } from "@/components/ui/button";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../../utils/localization/client";
import { useEffect, useState } from "react";
import MemberDetailEachListModal from "./each-list-modal";
import OrderInfo from "./order-info";
import { useSession } from "next-auth/react";
import { useMember } from "@/hooks/use-member";

export default function MemberOrderInfo({ itemCnt }: { itemCnt: number }) {
    const { status } = useSession()
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'member', 'coupon', 'order', 'point'])
    const [open, setOpen] = useState(false)
    const { getMemberPoints } = useMember()

    const getPoints = async () => {
        const { data, error } = await getMemberPoints({ page: 1, size: 10 })

        if(error) {
            alert('포인트 가져오기 실패하였습니다.')
        } else if(data) {
            if(data.datas) {
                console.log('data:', data.datas)
            }
        }
    }

    useEffect(() => {
        if(status === 'authenticated') {
            getPoints()
        }
    }, [status])

    return (
        <section>
            <div className="flex items-center gap-3 mb-4">
                <h2 className="font-bold text-xl text-[#5E5955]">{t('order:order_info')}</h2>
                <Button className="border p-2 h-8" onClick={() => setOpen((prev) => !prev)}>{t('view_all')}</Button>
            </div>
            <OrderInfo t={t} itemCnt={3} />
            
            <MemberDetailEachListModal open={open} setOpen={setOpen} title="주문 정보" contents={<OrderInfo t={t} itemCnt={15} />} />
        </section>
    )
}
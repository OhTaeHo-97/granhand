import { Label } from "@/components/ui/label"
import TwoElemTable from "../../components/two-elem-table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default async function MemberInfo({ info, t }: { info: {
    name: string,
    sort: string,
    id: string,
    rating: string,
    phone: string,
    price: string,
    birth: string,
    point: number,
    social: string,
    joinDate: string,
    agree: { push: boolean, sms: boolean },
    agreeHistory?: Array<string> },
    t: (key: string) => string
}) {
    const { name, sort, id, rating, phone, price, birth, point, social, joinDate} = await info
    return (
        <section className="p-8">
            <h1 className="text-2xl font-bold text-[#5E5955] mb-4">{t('member:member_info')}</h1>
            <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white min-w-120">
                {/* 필터 표 */}
                <TwoElemTable title={[t('member:name'), t('member:member_type')]} value={[name, sort]} />
                <TwoElemTable title={[t('member:id'), t('member:membership_level')]} value={[id, rating]} />
                <TwoElemTable title={[t('member:phone'), t('member:total_purchase_amount')]} value={[phone, price]} />
                <TwoElemTable title={[t('member:birth'), t('member:reward_points')]} value={[birth, point.toLocaleString() + '원']} />
                <TwoElemTable title={[t('member:social_login'), t('member:registration_date')]} value={[social, joinDate]} />
                <TwoElemTable title={[t('member:marketing_consent'), t('member:consent_history')]} value={[(
                    <div key={'consent_history1'} className="justify-start flex flex-nowrap gap-10 h-full items-center">
                        <Label className="flex items-center gap-2">
                            {/* <input type="checkbox" className="accent-black w-4 h-4" checked={agree.push} /> */}
                            <Checkbox id="select-all" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">{t('app_push')}</span>
                        </Label>
                        <Label className="flex items-center gap-2">
                            {/* <input type="checkbox" className="accent-black w-4 h-4" checked={agree.sms} /> */}
                            <Checkbox id="select" className="data-[state=checked]:bg-gray-600 data-[state=checked]:text-white"/>
                            <span className="text-[#111111]">SMS</span>
                        </Label>
                    </div>
                ), (
                    <div key={'consent_history2'} className="flex items-center">
                        <span>2023-01-05 11:54 앱 푸시 수신 동의</span><Button className="bg-white text-[#5E5955] border min-w-fit max-w-3 h-7 ml-4">{t('view_all')}</Button>
                    </div>
                )]} />
            </div>
        </section>
    )
}
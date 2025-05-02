import TwoElemTable from "../../components/two-elem-table"
import { Button } from "@/components/ui/button"

export default async function MemberInfo({ info }: { info: {
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
    agreeHistory?: Array<string> }
}) {
    const { name, sort, id, rating, phone, price, birth, point, social, joinDate, agree, agreeHistory} = await info
    return (
        <div className="border border-gray-200 text-[#6f6963] text-sm w-full bg-white">
            {/* 필터 표 */}
            <TwoElemTable title={['고객명', '회원 구분']} value={[name, sort]} />
            <TwoElemTable title={['아이디', '회원 등급']} value={[id, rating]} />
            <TwoElemTable title={['휴대폰 번호', '누적 구매금액']} value={[phone, price]} />
            <TwoElemTable title={['생년월일', '적립 포인트']} value={[birth, point.toLocaleString() + '원']} />
            <TwoElemTable title={['소셜 로그인', '가입일']} value={[social, joinDate]} />
            <TwoElemTable title={['광고성 정보 수신 동의', '동의 여부 이력']} value={[(
                <div className="justify-between flex flex-nowrap gap-2 h-full items-center">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-black w-4 h-4" checked={agree.push} />
                        <span className="font-bold text-gray-700">앱 푸시</span>
                    </label>
                    <label className="flex items-center gap-2">
                        <input type="checkbox" className="accent-black w-4 h-4" checked={agree.sms} />
                        <span className="font-bold text-gray-700">SMS</span>
                    </label>
                </div>
            ), (
                <div className="flex items-center gap-2">
                    <span>2023-01-05 11:54 앱 푸시 수신 동의</span><Button className="bg-white text-black border max-h-[1/2]">전체 보기</Button>
                </div>
            )]} />
        </div>
    )
}
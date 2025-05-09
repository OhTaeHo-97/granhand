import { Button } from "@/components/ui/button";
import { DollarSign, Gift, Heart, User } from "lucide-react";

export default function LoseBenefit() {
    const benefits = [
        {
            icon: <Gift className="text-gray-300" />,
            label: "즉시 사용 가능한",
            value: "쿠폰",
            amount: "4",
        },
        {
            icon: <DollarSign className="text-gray-300" />,
            label: "구매 시 사용 가능한",
            value: "포인트",
            amount: "2,500",
        },
        {
            icon: <Heart className="text-gray-300" />,
            label: "소중하게 담아놓았던",
            value: "장바구니, 관심상품",
            amount: "5",
            highlighted: true,
        },
        {
            icon: <User className="text-gray-300" />,
            label: "쇼핑 혜택이 주어지는",
            value: "회원등급",
            amount: "Silver",
        },
    ];
    return (
        <div className="max-w-md space-y-6 mx-auto mt-10">
            <div>
                <h2 className="text-lg font-semibold">지금 탈퇴하시면, 아래 혜택이 모두 사라져요!</h2>
            </div>

            {benefits.map((item, index) => (
                <div
                key={index}
                className={`flex items-center justify-between p-4 border rounded-md shadow-sm bg-white ${
                    item.highlighted ? "border-blue-500" : "border-transparent"
                }`}
                >
                <div className="flex items-center gap-5">
                    {item.icon}
                    <div className="text-sm text-gray-500">
                    <p className="mb-1.5">{item.label}</p>
                    <p className="font-bold text-black">{item.value}</p>
                    </div>
                </div>
                <div className="text-sm font-bold text-black">{item.amount}</div>
                </div>
            ))}

            <div className="grid grid-cols-2 gap-4 pt-6">
                <Button variant="outline" className="h-12 text-base">
                취소
                </Button>
                <Button className="h-12 bg-black text-white text-base">
                탈퇴하기
                </Button>
            </div>
            
            {/* <div className="mt-6 pb-6">
                <div className="flex justify-center items-center text-lg font-semibold">
                    <Button className="text-base px-10 py-2 text-white bg-black rounded-none min-w-32 h-11 w-full">탈퇴하기</Button>
                </div>
            </div> */}
        </div>
    )
}
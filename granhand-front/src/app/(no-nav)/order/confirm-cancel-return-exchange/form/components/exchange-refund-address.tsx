import { Button } from "@/components/ui/button";

export default async function ExchangeRefundAddress({ title, info }: { title: string, info: { name: string, phone: string, address: string } }) {
    const { name, phone, address } = await info
    return (
        <div className="border p-4 mt-5">
            <div className="flex justify-between items-center">
                <h3 className="font-semibold text-black text-base">{title}</h3>
                <Button className="text-sm text-gray-400 p-0 h-fit">
                    변경하기
                </Button>
            </div>
            <div className="space-y-2 mt-5 text-gray-700">
                <div>
                    {name}
                </div>
                <div>
                    {phone}
                </div>
                <div>
                    {address}
                </div>
            </div>
        </div>
    )
}
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

export default function MyPage() {
  return (
    // {/* Main Content */}
    <main className="flex-1 px-10 py-10 space-y-12">
      <section>
        <div className="text-lg font-medium mb-4">나의 멤버십 등급</div>
        <Card className="w-full">
          <CardContent className="p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">BASIC</div>
              <div className="text-sm text-right">
                <p className="text-gray-700">
                  <strong>68,000원</strong> 추가 구매 시 VIP 달성 다음달 예상 등급 BRONZE
                </p>
                <div className="w-64 bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-black h-2 rounded-full" style={{ width: "32%" }} />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>32,000원</span>
                  <span>100,000원</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <Tabs defaultValue="point" className="w-full">
        <TabsList className="grid grid-cols-4 gap-4 border-t border-b py-4">
          <TabsTrigger value="point">포인트</TabsTrigger>
          <TabsTrigger value="attendance">출석체크</TabsTrigger>
          <TabsTrigger value="gift">선물함</TabsTrigger>
          <TabsTrigger value="order">주문내역</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* 상품 리스트 */}
      <section className="space-y-10">
        {/* 최근 본 상품 */}
        <div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">최근 본 상품</span>
            <Button variant="ghost" className="text-sm text-gray-400">더보기</Button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4">
                <img src="/placeholder.png" alt="상품 이미지" className="w-full h-40 object-cover mb-4" />
                <div className="text-xs text-gray-500">GRANHAND &gt; Diffuser</div>
                <div className="font-semibold">Kyujang Diffuser Set</div>
                <div className="text-sm">60,000 KRW</div>
              </Card>
            ))}
          </div>
        </div>

        {/* 관심 상품 */}
        <div>
          <div className="flex justify-between mb-4">
            <span className="font-semibold">관심상품</span>
            <Button variant="ghost" className="text-sm text-gray-400">더보기</Button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-4">
                <img src="/placeholder.png" alt="상품 이미지" className="w-full h-40 object-cover mb-4" />
                <div className="text-xs text-gray-500">GRANHAND &gt; Diffuser</div>
                <div className="font-semibold">Kyujang Diffuser Set</div>
                <div className="text-sm">60,000 KRW</div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

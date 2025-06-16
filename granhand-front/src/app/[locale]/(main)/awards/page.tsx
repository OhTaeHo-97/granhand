import Image from "next/image"

export default function EventInfo() {
    return (
        <main className="min-h-screen flex flex-col items-center px-4 py-10">
            {/* 중앙 컨텐츠 (이전 내용) */}
            <section className="flex flex-col items-center mt-16 text-center">
                {/* 로고 */}
                <Image
                    src={"/awards.png"}
                    alt="awards"
                    width={500}
                    height={298}
                    className="w-[500px] h-[298px]"
                />

                {/* 행사 설명 */}
                <div className="max-w-2xl w-[500px] mt-10 text-sm leading-relaxed text-[#6F6963]">
                    <p className="mb-6">
                        그랑핸드 필름사진상은 그랑핸드가 유지하는 아날로그 감성과 향에 대한 신념을 사진으로 표현하여 이야기와 감성을 작게 발굴하고 소개합니다.
                        수상자들은 그랑핸드와 함께 다양한 협업을 진행하며 전시에 참여할 기회가 제공됩니다.
                    </p>

                    <p className="font-bold mb-2">수상</p>
                    <p className="mb-4">
                        필름사진 애호가와 및 아마추어를 대상으로 매년 1회 실시합니다.
                        필름 또는 일회용 카메라 필름으로 촬영한 작품만 접수하실 수 있으며 디지털 사진 작품은 허용되지 않습니다.
                    </p>

                    <p className="font-bold mb-2">부문</p>
                    <p className="mb-4">
                        Nature 자연 / People 사람 / Daily Life 일상 / Still Life 정물
                    </p>

                    <p className="font-bold mb-2">시상</p>
                    <ul className="mb-4 list-disc list-inside">
                        <li>총액의 신인상 부문금</li>
                        <li>총액의 신인상 부문금 50만원 / 부문 수상작: 각각 25만원</li>
                        <li>수상은 모두 세세션필름 작품화 의무</li>
                    </ul>

                    <p>
                        모든 수상자는 당시 제작되는 메인 페이지와 소셜 플랫폼에 게재됩니다.
                    </p>
                </div>
            </section>
        </main>
    )
}
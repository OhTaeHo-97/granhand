'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuPortal, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";
import { Check, ChevronDown, Copy, Heart, Minus, Plus, Share2, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "../../../../../../utils/localization/client";
import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale";
import { useRouter } from "next/navigation";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import ProductCardList from "@/app/[locale]/(no-nav)/wish-latest/components/product-card-list";
import BasicModal from "@/app/[locale]/components/modal";
import TwoButtonModal from "@/app/[locale]/components/two-button-modal";

const images = [
    '/lovable-uploads/0e43a734-02ed-47a6-9dca-cea684e053f0.png',
    '/lovable-uploads/3c87ef56-5801-4900-8214-c87df1838fbe.png',
    '/lovable-uploads/23c3c768-b79c-41e6-9809-c48b755baf4c.png'
]

export default function ShopDetailPage() {
    const router = useRouter()
    const [currentIdx, setCurrentIdx] = useState(0)
    const [startX, setStartX] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const triggerRef = useRef<HTMLButtonElement>(null)
    const [triggerWidth, setTriggerWidth] = useState<number>(0)
    const [copied, setCopied] = useState(false)
    const [isLike, setIsLike] = useState(false)
    const [size, setSize] = useState('')
    const [openCart, setOpenCart] = useState(false)
    const [openCopy, setOpenCopy] = useState(false)

    const handleCopy = async () => {
        await navigator.clipboard.writeText('https://granhand.com/event/11832')
        setCopied(true)
        setTimeout(() => setCopied(false), 1200)
        setOpenCopy(true)
    };

    useEffect(() => {
        if(!triggerRef.current) return
        const updateWidth = () => {
            if(triggerRef.current) {
                setTriggerWidth(triggerRef.current.offsetWidth)
            }
        }
        updateWidth()

        const resizeObserver = new ResizeObserver(updateWidth)
        resizeObserver.observe(triggerRef.current)

        const timer = setInterval(() => {
            setCurrentIdx((prev) => (prev + 1) % images.length)
        }, 5000)
        return () => {
            clearInterval(timer)
            resizeObserver.disconnect()
        }
    }, [])

    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
        setStartX(clientX)
        setIsDragging(true)
    }

    const handleTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
            if (!isDragging) return

        const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX
        const diff = startX - clientX

        if (diff > 50 && currentIdx < images.length - 1) {
            setCurrentIdx(currentIdx + 1)
        } else if (diff < -50 && currentIdx > 0) {
            setCurrentIdx(currentIdx - 1)
        }
        setIsDragging(false)
    }

    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'shop', 'payment', 'order', 'cart'])
    const currentLocale = useCurrentLocale()

    const [selected, setSelected] = useState(t('order:bag_placeholder'))
    const options = [{ label: t('order:no_bag'), value: 'order:no_bag' }, { label: t('order:buy_bag'), value: 'order:buy_bag' }]

    return (
        <section className="container mx-auto pb-12 space-y-16 mt-10">
        
        {/* 상단: 메인 이미지 + 상세 박스 */}
        <div className="flex flex-col md:flex-row gap-12">

            {/* 왼쪽: 제품 메인 이미지 */}
            <div className="w-[592px]">
                {/* 슬라이더 박스 */}
                <div
                    className="relative overflow-hidden"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleTouchStart}
                    onMouseUp={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIdx * 100}%)` }}
                    >
                    {images.map((src, idx) => (
                        <div key={idx} className="min-w-full relative h-[726px]">
                        <Image
                            src={src}
                            alt={`slide-${idx}`}
                            fill
                            className="object-cover select-none pointer-events-none"
                        />
                        </div>
                    ))}
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 mt-4">
                    {
                        images.map((_, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    console.log(index)
                                    setCurrentIdx(index)
                                }}
                                className={`transition-all ${
                                    currentIdx === index
                                    ? '!p-0 !w-6 !h-3 rounded-full bg-[#5E5955]'  // 활성화된 점 (길쭉한 캡슐 모양)
                                    : '!p-0 !w-2 !h-2 rounded-full bg-[#C0BCB6]'  // 비활성화된 점 (작은 동그라미)
                                }`}
                                />
                            ))
                    }
                </div>
            </div>

            {/* <div className="w-[592px]">
                <div
                    className="relative overflow-hidden w-full"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseDown={handleTouchStart}
                    onMouseUp={handleTouchEnd}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${currentIdx * 592}px)` }}
                    >
                    {images.map((src, idx) => (
                        <div key={idx} className="max-w-[full] relative w-[592px] h-[726px]">
                        <Image
                            src={src}
                            alt={`slide-${idx}`}
                            // fill
                            width={592}
                            height={726}
                            className="!w-[592px] object-cover select-none pointer-events-none"
                        />
                        </div>
                    ))}
                    </div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2">
                    {
                        images.map((_, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    console.log(index)
                                    setCurrentIdx(index)
                                }}
                                className={`transition-all ${
                                    currentIdx === index
                                    ? '!p-0 !w-6 !h-3 rounded-full bg-[#5E5955]'  // 활성화된 점 (길쭉한 캡슐 모양)
                                    : '!p-0 !w-2 !h-2 rounded-full bg-[#C0BCB6]'  // 비활성화된 점 (작은 동그라미)
                                }`}
                                />
                            ))
                    }
                </div>
            </div> */}

            <div className="flex-1 space-y-6 border-t pt-6 relative !w-[480px]">

            {/* 오른쪽 상단: 하트 + 공유 */}
            <div className="absolute top-6 right-0 flex items-center gap-4 text-gray-400">
                {isLike ? (
                    <Heart fill="#5E5955" stroke="#5E5955" className="w-[24px] h-[24px] cursor-pointer" onClick={() => setIsLike((prev) => !prev)} />
                ) : (
                    <Heart className="w-[24px] h-[24px] cursor-pointer text-[#5E5955]" onClick={() => setIsLike((prev) => !prev)} />
                )}
                <Popover>
                    <PopoverTrigger asChild>
                        <Share2 className="w-[24px] h-[24px] cursor-pointer text-[#5E5955]" />
                    </PopoverTrigger>
                    <PopoverContent side="bottom" align="center" className="!w-[390px] !h-[150px] rounded border bg-[#FDFBF5] p-6 shadow-md">
                        <div className="flex justify-between mb-2">
                            <div className="font-semibold text-[#6F6963]">공유하기</div>
                            {/* 닫는 버튼 (자동으로 Popover 닫힘) */}
                            <PopoverClose asChild>
                                <X className="w-[18px] h-[19px]" />
                            </PopoverClose>
                        </div>

                        <div className="border border-[#C0BCB6] rounded w-full max-w-xl flex items-center px-5 py-2 mt-6">
                            {/* URL */}
                            <span className="flex-1 text-[#C0BCB6] text-sm select-all truncate">https://granhand.com/event/11832</span>
                            {/* 복사 아이콘 */}
                            <Button
                                onClick={handleCopy}
                                className="ml-4 p-1 text-[#48413A] hover:text-black transition"
                                aria-label="클립보드에 복사"
                                type="button"
                            >
                                {/* 복사 완료 메시지 */}
                                {copied ? (
                                    <Check className="w-8 h-8 text-[#5E5955]" />
                                ) : (
                                    <Copy className="w-8 h-8 text-[#5E5955]" />
                                )}
                            </Button>
                        </div>
                    </PopoverContent>
                </Popover>
                {/* <Share2 className="w-5 h-5 cursor-pointer" /> */}
            </div>

            <div className="space-y-2">
                {/* 경로 */}
                <div className="text-sm font-bold text-[#6F6963]">{t('granhand')} &gt; {t('shop:perfume')} &gt; {t('shop:multiperfume')}</div>
                {/* 제품명, 가격 */}
                <h1 className="text-2xl font-bold text-[#111111]">Roland Multi Perfume</h1>
                <p className="text-sm font-bold text-[#C0BCB6]">롤랑 멀티퍼퓸 100ml / 200ml</p>
                <p className="text-sm font-bold text-[#6F6963]">35,000 KRW</p>
            </div>

            {/* 가격 밑 구분선 */}
            <div className="border-b border-gray-200 my-4" />

            {/* 용량 버튼 */}
            <div className="flex gap-2 mt-12">
                <RadioGroup
                    // defaultValue=""
                    value={size}
                    onValueChange={setSize}
                    // className="flex text-sm"
                    className="inline-flex rounded overflow-hidden gap-3"
                >
                    <Label
                        className={cn(
                            "!w-[72px] !h-[34px] p-[10px] border text-xs font-bold text-center hover:border-black hover:text-black",
                            // "py-2 px-4 text-center cursor-pointer text-sm border-0 border-l border-gray-200",
                            // idx === 0 && "border-l-0",
                            "100" === size
                                ? "!border-[#6F6963]"
                                : "!border-[#DBD7D0]"
                        )}
                    >
                        <RadioGroupItem value={"100"} className="hidden" />
                        100ml
                    </Label>
                    <Label
                        className={cn(
                            "!w-[72px] !h-[34px] p-[10px] border text-xs font-bold text-center hover:border-black hover:text-black",
                            // "py-2 px-4 text-center cursor-pointer text-sm border-0 border-l border-gray-200",
                            // idx === 0 && "border-l-0",
                            "200" === size
                                ? "!border-[#6F6963]"
                                : "!border-[#DBD7D0]"
                        )}
                    >
                        <RadioGroupItem value={"200"} className="hidden" />
                        200ml
                    </Label>
                </RadioGroup>
            </div>

            {/* 쇼핑백 선택 */}
            <div className="space-y-2">
                <p className="text-sm text-[#322A24]">{t('payment:shopping_bag')}</p>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild className="mb-5">
                        <Button
                            ref={triggerRef}
                            className={cn(
                                "flex justify-between items-center w-full border !border-[#C0BCB6] text-sm font-bold rounded px-4 py-3 text-left h-12",
                                selected === t('order:bag_placeholder') ? 'text-[#C0BCB6]' : 'text-[#322A24]'
                            )}
                        >
                            {t(selected)}
                            <ChevronDown className="w-4 h-4 text-[#5E5955]" />
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuPortal>
                        <DropdownMenuContent
                        sideOffset={4}
                        style={{ width: triggerWidth }}
                        className="bg-[#FDFBF5] border !border-[#C0BCB6] rounded shadow-md p-1 text-sm"
                        >
                        {options.map(({ label, value }) => (
                            <DropdownMenuItem
                            key={value}
                            className={`text-xs font-bold px-4 py-2 hover:bg-[#f5f3ef] cursor-pointer text-[#322A24] ${selected === value ? "bg-[#E9E6E0]" : "bg-[#FDFBF5]"}`}
                            onSelect={() => setSelected(value)}
                            >
                            {label}
                            </DropdownMenuItem>
                        ))}
                        </DropdownMenuContent>
                    </DropdownMenuPortal>
                </DropdownMenu>

                <div className="rounded shadow-sm p-6 flex flex-col gap-4 w-full mx-auto text-xs">
                    <div className="flex justify-between items-start w-full">
                        <div className="space-y-1 w-full">
                            <div className="flex justify-between items-center mt-2 w-full">
                                <div className="font-bold text-[#322A24]">Peace Keeper</div>
                                <Button className="!p-0 !h-fit text-[#322A244D] font-bold">삭제</Button>
                            </div>
                            {/* <div className="font-bold text-[#322A24]">Peace Keeper</div>
                            <Button className="!p-1 text-[#C2BDB6] font-bold">삭제</Button> */}
                            <div className="text-[#322A244D] font-bold">그랑핸드 시그니처 티 30g (3gx10ea)</div>
                            <div className="text-[#322A244D] font-bold">{t('cart:bag_not_purchased')}</div>
                            <div className="flex justify-between items-center mt-2 w-full text-sm">
                                <div className="font-bold text-[#322A24]">35,000원</div>
                                <div className="flex items-center gap-3">
                                <Button variant="outline" size={undefined} className="!w-[16px] !h-[16px] flex items-center justify-center border border-[#CFC9BC] rounded-full text-[#C2BDB6] p-0">
                                    <Minus className="!w-[7px] !h-[7px] text-[#5E5955]" />
                                </Button>
                                <span className="w-6 text-xs text-center text-[#322A24] font-bold">1</span>
                                <Button variant="outline" size={undefined} className="!w-[16px] !h-[16px] flex items-center justify-center border border-[#CFC9BC] rounded-full text-[#C2BDB6] p-0">
                                    <Plus className="!w-[7px] !h-[7px] text-[#5E5955]" />
                                </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 my-4" />

            {/* 총 금액 및 버튼들 */}
            <div className="space-y-4 pt-4">
                <div className="flex justify-between text-base font-bold text-[#322A24]">
                    <span className="text-sm">{t('order:total_amount')}</span>
                    <span>0원</span>
                </div>
                <Button
                    className="w-[480px] py-3 text-white bg-[#322A24] font-semibold rounded h-[46px] cursor-pointer"
                    onClick={() => setOpenCart(true)}
                >
                {t('order:buy')}
                </Button>
                <Button
                    className="w-[480px] py-3 border !border-[#C0BCB6] text-[#322A24] font-semibold rounded h-[46px] cursor-pointer"
                    onClick={() => router.push(`${currentLocale}/payment/gift`)}
                >
                {t('order:gift')}
                </Button>
            </div>

            </div>
        </div>

        {/* Fragrance Story */}
        <div className="space-y-6">
            <h2 className="text-sm font-bold text-[#6F6963]">Fragrance Story</h2>
            {/* <div className="bg-gray-100 text-gray-600 text-sm leading-relaxed p-8 rounded-md"> */}
            <div className="min-h-[100px] text-sm bg-[#322A2408] text-[#6F6963] text-center leading-[26px] px-[24px] py-[10px] rounded-md">
                <p>
                    레몬의 시트러스함과 페퍼민트의 상쾌함으로 시작해, 감초의 자연스러운 단맛으로 끝나는 기분 좋아지는 허브티로, 
                    이룰처럼 일상의 평화를 지켜주길 바라는 마음을 담았습니다. 후복후 없는 향으로 평소 차가 막연히 어렵게 느껴지셨거나, 
                    익숙하지 않은 맛에 거부감이 있는 분도 부담없이 사또하게 즐기실 수 있습니다.
                    신전이나 식후, 어떤 상황에서도 잘 어울리는 데일리 티로, 카페인이 들어있지 않아 자기 전에도 마음 편하게 드실 수 있습니다.
                </p>
            </div>
        </div>

        {/* 큰 제품 이미지들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Image src="/shop-detail1.png" alt="Detail 1" width={548} height={716} className="w-[528px] h-[716px] object-cover" />
            <Image src="/shop-detail2.png" alt="Detail 2" width={548} height={716} className="w-[528px] h-[716px] object-cover" />
        </div>

        {/* Information 테이블 */}
        <div className="border-t border-gray-200 pt-12 mt-12">
            {/* Information 타이틀 */}
            <h2 className="text-sm font-bold text-[#6F6963] mb-6">Information</h2>

            {/* 정보 리스트 */}
            <div className="space-y-6 text-xs text-[#6F6963] leading-relaxed">
                {/* 항목 한 줄 */}
                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">제품명</div>
                <div>Roland Multi Perfume 롤랑 멀티퍼퓸</div>
                </div>

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">제품 설명</div>
                <div>바디 스프레이 제품입니다. 용도에 맞게 활용하실 수 있습니다.</div>
                </div>

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">향노트</div>
                <div>Top: Lemon, Grapefruit, Bergamot, Mandarin, Aquatic Green<br />
                    Middle: Sunny Passion Fruit, Orange Blossom, Yang lang, White Rose<br />
                    Base: White Musk
                </div>
                </div>

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">사용방법</div>
                <div>피부에서 20cm 거리를 두고 분사하여 사용합니다. 피부 기준으로 5~6시간 지속됩니다.</div>
                </div>

                <div className="border-t border-gray-200 border-dashed my-6" />

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">용량</div>
                <div>100ml / 200ml</div>
                </div>

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">사용기간</div>
                <div>개인 사용빈도에 따라 상이</div>
                </div>

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">유통기한</div>
                <div>별도표기 (용기하단)</div>
                </div>

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">사이즈(mm)</div>
                <div>Ø40×135 / Ø55×150</div>
                </div>

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">전성분</div>
                <div>
                    *주요성분 : 에탄올, 프로필렌글리콜, 향료, 정제수<br />
                    *알레르기 성분 : 리날로올
                </div>
                </div>

                <div className="border-t border-[#E9E6E0] border-dashed my-6" />

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">주의사항</div>
                <div>
                    최초 사용 시 펌프를 깊게 눌러 분사해 주세요. <br />
                    상처가 있는 부위, 손톱 및 피부염 등의 이상이 있는 부위에는 사용을 자제해 주시길 바랍니다. <br />
                    강제 누르다 안으로 펌프가 앞으로 올라와 고여 누수 현상이 발생할 수 있습니다. <br />
                    향료 자재에 색이 있는 향을 밝은 옷에 분사하지 마세요.
                </div>
                </div>

                <div className="border-t border-[#E9E6E0] border-dashed my-6" />

                <div className="flex">
                <div className="w-28 text-[#C0BCB6] font-medium">스탬핑 서비스</div>
                <div>
                    스탬핑 서비스 가능제품: 퍼퓸, 멀티퍼퓸, 디퓨저 세트, 캔들<br />
                    스탬핑 서비스는 무료이며, 교환 및 환불이 불가합니다.<br />
                    스탬핑 요청 시 잘못된 입력에 의한 오타는 교환 및 환불 대상에서 제외됩니다.
                </div>
                </div>
            </div>

            {/* 아래 구분선 */}
            <div className="border-t border-gray-200 mt-12" />
        </div>

        {/* 추천 상품 */}
        <div className="space-y-6">
            <h2 className="text-sm font-bold text-[#6F6963]">Recommend</h2>
            <ProductCardList itemCount={5} />
        </div>

        <BasicModal open={openCopy} setOpen={setOpenCopy} contents="link_copy" btnText={'confirm'} locale={locale} />
        <TwoButtonModal open={openCart} setOpen={setOpenCart} contents="add_cart" btnText1="cancel" btnText2="confirm" locale={locale} nextLink={`${currentLocale}/cart`} />
        </section>
    )
}
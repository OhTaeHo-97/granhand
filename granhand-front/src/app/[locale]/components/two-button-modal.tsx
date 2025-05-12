import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LocaleTypes } from "../../../../utils/localization/settings";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../utils/localization/client";

export default function TwoButtonModal({ open, setOpen, contents, btnText1, btnText2, currentLocale, locale, nextLink }: { open: boolean, setOpen: (value: boolean) => void, contents: string, btnText1: string, btnText2: string, currentLocale?: string, locale: LocaleTypes, nextLink?: string }) {
    const router = useRouter()
    const { t } = useTranslation(locale, 'modal')

    const onClickConfirm = () => {
        setOpen(false)
        if(nextLink) router.push(`${nextLink}`)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-lg bg-white">
            <DialogHeader>
                <DialogTitle>GRANHAND.</DialogTitle>
            </DialogHeader>
            <div className="mt-2 mb-4 text-[#322A24]">
                {t(contents)}
            </div>
            <DialogFooter>
                <div className="flex justify-end gap-3 px-5 w-full">
                    <Button className="w-1/6 bg-transparent text-[#C0BCB6]" onClick={() => setOpen(false)}>{t(btnText1)}</Button>
                    <Button className="w-1/6 bg-[#322A2408] text-[#2854f3]" onClick={onClickConfirm}>{t(btnText2)}</Button>
                </div>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

// import { Button } from "@/components/ui/button";
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// export default function CouponRegisterModal({ isValid, open, setOpen }: { isValid: boolean, open: boolean, setOpen: (value: boolean) => void }) {
//     return (
//         <Dialog open={open} onOpenChange={setOpen}>
//             <DialogContent className="max-w-lg bg-white">
//             <DialogHeader>
//                 <DialogTitle>GRANHAND.</DialogTitle>
//             </DialogHeader>
//             <div className="mt-2 mb-4 text-[#322A24]">
//                 {isValid ? '쿠폰이 등록되었습니다. 보유 쿠폰에서 확인해 주세요!' : '유효하지 않은 쿠폰이에요. 쿠폰번호를 다시 확인해 주세요.'}
//             </div>
//             <DialogFooter>
//                 <Button className="w-1/6 bg-[#322A2408] text-[#2854f3]" onClick={() => setOpen(false)}>확인</Button>
//             </DialogFooter>
//             </DialogContent>
//         </Dialog>
//     )
// }
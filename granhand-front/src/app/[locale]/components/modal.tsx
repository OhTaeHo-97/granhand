import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { LocaleTypes } from "../../../../utils/localization/settings";
import { useRouter } from "next/navigation";
import { useTranslation } from "../../../../utils/localization/client";

export default function BasicModal({ open, setOpen, setHasExistedOrder, contents, btnText, locale, nextLink }: { open: boolean, setOpen: (value: boolean) => void, setHasExistedOrder?: (value: boolean) => void, contents: string, btnText: string, locale: LocaleTypes, nextLink?: string }) {
    const router = useRouter()
    // const { t } = useTranslation(locale, category)
    const { t } = useTranslation(locale, 'modal')

    const onClickConfirm = () => {
        setOpen(false)
        if(nextLink) router.push(`${nextLink}`)
    }

    const changeOpen = () => {
        setOpen(false)
        if(setHasExistedOrder) {
            setHasExistedOrder(true)
        }
    }

    return (
        <Dialog open={open} onOpenChange={changeOpen}>
            <DialogContent className="max-w-lg bg-[#FDFBF5]">
            <DialogHeader>
                <DialogTitle className="text-[#5E5955]">GRANHAND.</DialogTitle>
            </DialogHeader>
            <div className="mt-2 mb-4 text-[#322A24] text-base leading-[24px]">
                {t(contents)}
            </div>
            <DialogFooter>
                <Button className="w-[80px] h-[39px] p-[10px] bg-[#322A2408] text-[#2854F3] font-medium" onClick={onClickConfirm}>{t(btnText)}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

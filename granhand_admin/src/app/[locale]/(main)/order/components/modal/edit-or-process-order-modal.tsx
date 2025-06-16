import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { useTranslation } from "../../../../../../../utils/localization/client";

export default function EditOrProcessOrderModal({ open, width, title, contentsTxt, contents, setOpen }: { open: boolean, width?: string, title: string, contentsTxt: string, contents: React.ReactNode, setOpen: (value: boolean) => void }) {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className={`max-w-7xl ${width} bg-white min-w-150 max-h-200 min-h-80 overflow-auto`}>
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{title}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                {contentsTxt}
                {contents}
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('confirm')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
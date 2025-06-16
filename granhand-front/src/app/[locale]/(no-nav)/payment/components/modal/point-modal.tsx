import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function PointModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="bg-[#FDFBF5] max-w-2xl w-[390px] h-[502px]">
                <DialogHeader>
                    <DialogTitle className="flex text-base font-bold">{t('point:point_terms')}</DialogTitle>
                </DialogHeader>
                {/* 본문 */}
                <div className="space-y-8 text-[#48413A] text-[10px]">
                    {/* 1. 포인트 적립 */}
                    <div>
                        <div className="font-bold mb-2">{t('point:first')}</div>
                        <ul className="list-disc pl-6 space-y-1">
                        <li>{t('point:first-1')}</li>
                        <li>{t('point:first-2')}</li>
                        <li>{t('point:first-3')}</li>
                        <li>{t('point:first-4')}</li>
                        </ul>
                    </div>
                    {/* 2. 사용/유효기간 */}
                    <div>
                        <div className="font-bold mb-2">{t('point:second')}</div>
                        <ul className="list-disc pl-6 space-y-1">
                        <li>{t('point:second-1')}</li>
                        <li>{t('point:second-2')}</li>
                        <li>{t('point:second-3')}</li>
                        <li>{t('point:second-4')}</li>
                        <li>{t('point:second-5')}</li>
                        </ul>
                    </div>
                    {/* 3. 소멸 */}
                    <div>
                        <div className="font-bold mb-2">{t('point:third')}</div>
                        <ul className="list-disc pl-6 space-y-1">
                        <li>{t('point:third-1')}</li>
                        <li>{t('point:third-2')}</li>
                        </ul>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordInfoSchema = z.object({
    curPw: z.string().min(1, "현재 비밀번호를 입력해 주세요.")
        .min(8, "비밀번호를 8자리 이상 입력해주세요.")
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 영문, 숫자, 특수문자 포함 8자리 이상입니다.'),
    newPw: z.string().min(1, "새 비밀번호를 입력해 주세요.")
        .min(8, "비밀번호를 8자리 이상 입력해주세요.")
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 영문, 숫자, 특수문자 포함 8자리 이상입니다.'),
    confirmPw: z.string().min(1, "새 비밀번호를 확인해 주세요.")
        .min(8, "비밀번호를 8자리 이상 입력해주세요.")
        .regex(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+]).{8,}$/, '비밀번호는 영문, 숫자, 특수문자 포함 8자리 이상입니다.')
})

type PasswordsValues = z.infer<typeof passwordInfoSchema>

export default function EditPasswordModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
    // t: (key: string) => string
    const form = useForm<PasswordsValues>({
        resolver: zodResolver(passwordInfoSchema),
        defaultValues: {
            curPw: "",
            newPw: "",
            confirmPw: "",
        }
    })

    const { setError } = form

    const handleConfirm = () => {
        const values = form.getValues()
        const result = passwordInfoSchema.safeParse(values)

        if(!result.success) {
            result.error.errors.forEach((err) => {
                const field = err.path[0] as keyof PasswordsValues
                setError(field, { message: err.message })
            })
            return
        }

        window.alert('비밀번호가 수정되었습니다.')
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="max-w-170 bg-white min-w-100 max-h-150 min-h-80 overflow-auto">
            <DialogHeader>
                <DialogTitle className="font-bold text-2xl text-[#111111]">{t('settings:change_admin_pw')}</DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111] whitespace-pre-line">
                <div className="rounded-md p-6 space-y-3">
                    <div>
                        <div className="flex items-center justify-start p-2">
                            <Label>{t('settings:enter_current_pw')}</Label>
                        </div>
                        <div className="py-2 w-full">
                            <div className="flex flex-col gap-2">
                                <Input type="password" placeholder={t('settings:current_pw')} {...form.register('curPw')} className={`h-10 w-full placeholder:text-[#C0BCB6] ${form.formState.errors.curPw && '!border-[#FF3E24]'}`} />
                                {form.formState.errors.curPw && (
                                    <p className="text-[#FF3E24]">{form.formState.errors.curPw.message}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-start p-2">
                            <Label>{t('settings:enter_new_pw')}</Label>
                        </div>
                        <div className="py-2 w-full">
                            <div className="flex flex-col gap-2">
                                <Input type="password" placeholder={t('settings:enter_new_pw2')} {...form.register('newPw')} className={`h-10 w-full placeholder:text-[#C0BCB6] ${form.formState.errors.newPw && '!border-[#FF3E24]'}`} />
                                {form.formState.errors.newPw && (
                                    <p className="text-[#FF3E24]">{form.formState.errors.newPw.message}</p>
                                )}
                                <Input type="password" placeholder={t('settings:confirm_new_pw')} {...form.register('confirmPw')} className={`h-10 w-full placeholder:text-[#C0BCB6] ${form.formState.errors.confirmPw && '!border-[#FF3E24]'}`} />
                                {form.formState.errors.confirmPw && (
                                    <p className="text-[#FF3E24]">{form.formState.errors.confirmPw.message}</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <span className="text-[#FF3E24] text-sm">{t('settings:pw_condition')}</span>
                </div>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={handleConfirm}>{t('confirm')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
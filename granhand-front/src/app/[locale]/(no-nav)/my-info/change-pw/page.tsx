'use client'

import { useLocaleAsLocaleTypes, useCurrentLocale } from "@/lib/useCurrentLocale"
import { useTranslation } from "../../../../../../utils/localization/client"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import BasicModal from "@/app/[locale]/components/modal"

export default function ChangePasswordPage() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, ['common', 'auth'])
    const currentLocale = useCurrentLocale()

    const [open, setOpen] = useState(false)
    const [curPw, setCurPw] = useState('')
    const [newPw, setNewPw] = useState('')
    const [confirmPw, setConfirmPw] = useState('')

    const [curPwError, setCurPwError] = useState('')
    const [newPwError, setNewPwError] = useState('')
    const [confirmPwError, setConfirmPwError] = useState('')
    const [isValid, setIsValid] = useState(false)

    const allInputWrited = () => curPw === '' || newPw === '' || confirmPw === ''

    const validatePasswords = () => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[A-Za-z\d!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{8,20}$/
        let valid = true

        if(!passwordRegex.test(curPw)) {
            setCurPwError(t('auth:invalid_pw_msg'))
            valid = false
            setIsValid(false)
        } else {
            setCurPwError('')
        }

        if(!passwordRegex.test(newPw)) {
            setNewPwError(t('auth:invalid_pw_msg'))
            valid = false
            setIsValid(false)
        } else {
            setNewPwError('')
        }

        if(newPw !== confirmPw) {
            setConfirmPwError(t('auth:incorrect_pw_msg'))
            valid = false
            setIsValid(false)
        } else {
            setConfirmPwError('')
        }

        if(valid) setIsValid(true)
        return valid
    }

    const handleClickChanePw = () => {
        setIsValid(validatePasswords())
        if(validatePasswords()) {
            setOpen((prev) => !prev)
        }
    }

    useEffect(() => {
        // setIsValid(validatePasswords())
    }, [curPwError, newPwError, confirmPwError, isValid])

    return (
        <div className="min-h-screen flex flex-col items-center py-8 px-4">
            <section className="w-full max-w-xl">
                <h2 className="text-xl font-bold text-[#322A24] mb-16">{t('auth:profile_info')}</h2>
                <div className="space-y-6">
                    <div>
                        <Label htmlFor="cur_pw" className="block text-lg text-[#322A24] font-semibold mb-2">{t('auth:cur_pw')}</Label>
                        <Input
                        id="cur_pw"
                        type="password"
                        placeholder={t('auth:cur_pw_placeholder')}
                        value={curPw}
                        onChange={(e) => setCurPw(e.target.value)}
                        className={`w-full border rounded px-4 py-5 !text-lg text-[#6F6963] font-medium h-16
                            ${curPwError ? '!border-red-500' : '!border-[#C0BCB6]'}
                        `}
                        />
                        {curPwError && (<span className="text-red-500">{curPwError}</span>)}
                    </div>
                    <div>
                        <Label htmlFor="new_pw" className="block text-lg text-[#322A24] font-semibold mb-2">{t('auth:new_pw')}</Label>
                        <Input
                        id="new_pw"
                        type="password"
                        placeholder={t('auth:new_pw_placeholder')}
                        value={newPw}
                        onChange={(e) => setNewPw(e.target.value)}
                        className={`w-full border rounded px-4 py-5 !text-lg text-[#6F6963] font-medium h-16
                            ${newPwError ? '!border-red-500' : '!border-[#C0BCB6]'}
                        `}
                        />
                        {newPwError && (<span className="text-red-500">{newPwError}</span>)}
                    </div>
                    <div>
                        <Label htmlFor="new_pw_confirm" className="block text-lg text-[#322A24] font-semibold mb-2">{t('auth:new_pw_confirm')}</Label>
                        <Input
                        id="new_pw_confirm"
                        type="password"
                        placeholder={t('auth:confirm_pw_placeholder')}
                        value={confirmPw}
                        onChange={(e) => setConfirmPw(e.target.value)}
                        className={`w-full border border-[#C0BCB6] rounded px-4 py-5 !text-lg text-[#6F6963] font-medium h-16
                            ${confirmPwError ? '!border-red-500' : '!border-[#C0BCB6]'}
                        `}
                        />
                        {confirmPwError && (<span className="text-red-500">{confirmPwError}</span>)}
                    </div>
                </div>
        
                <Button
                    className="w-full mt-10 py-6 h-18 text-2xl font-bold bg-[#322A24] text-white hover:bg-[#48413A]"
                    onClick={handleClickChanePw}
                    disabled={allInputWrited()}
                >
                    {t('confirm')}
                </Button>
            </section>
            <BasicModal open={open} setOpen={setOpen} contents={t('auth:complete_change_pw')} btnText="confirm" locale={locale} nextLink={`${currentLocale}/my-info`} />
        </div>
    )
}
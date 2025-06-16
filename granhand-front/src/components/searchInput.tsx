'use client'

import { Search } from "lucide-react"
import { ChangeEventHandler } from "react"
import { Input } from "./ui/input"
// import { LocaleTypes } from "../../utils/localization/settings"
import { useTranslation } from "../../utils/localization/client"
// import { useParams } from "next/navigation"
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocale"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"

// export default function SearchInput({ value, onChange, onSubmit, placeholder='search', className }: { value: string, onChange:ChangeEventHandler<HTMLInputElement>, onSubmit: FormEventHandler<HTMLFormElement>, placeholder?: string, className?: string }) {
export default function SearchInput({ value, onChange, placeholder='search', className }: { value: string, onChange:ChangeEventHandler<HTMLInputElement>, placeholder?: string, className?: string }) {
    // const [value, setValue] = useState('')
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')

    return (
        <div className={cn(
            "w-full max-w-2/3 mx-auto px-4",
            className
        )}>
            <div className="relative max-w-[740px]">
                <Input
                    type="text"
                    placeholder={t(`${placeholder}`)}
                    value={value}
                    // onChange={(e) => setValue(e.target.value)}
                    onChange={onChange}
                    className="max-w-[740px] h-[35px] text-[#322A24] text-lg font-medium !border-0 !border-b-1 !border-[#5E5955] !rounded-none !focus:outline-none !focus:border-0 !focus:border-b-1 !focus:border-b-black placeholder-[#322A244D] py-2 pr-10"
                />
                <Button type="submit" className="absolute right-0 top-1/2 -translate-y-1/2">
                    <Search className="w-[24px] h-[24px] text-[#5E5955]" />
                </Button>
            </div>
        </div>
    )
}
'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocaleAsLocaleTypes } from "@/lib/useCurrentLocales";
import { Area, AreaChart, CartesianGrid, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useTranslation } from "../../../../../../utils/localization/client";

const data = [
    { date: '7월 14일', pageview: 19000, visitor: 3000 },
    { date: '7월 15일', pageview: 29000, visitor: 5000 },
    { date: '7월 16일', pageview: 22000, visitor: 3500 },
    { date: '7월 17일', pageview: 23000, visitor: 3600 },
    { date: '7월 18일', pageview: 21000, visitor: 3300 },
    { date: '7월 19일', pageview: 18000, visitor: 3100 },
    { date: '7월 20일', pageview: 9000, visitor: 2000 },
]

export default function SalesStatistics() {
    const locale = useLocaleAsLocaleTypes()
    const { t } = useTranslation(locale, 'common')

    // const params = useSearchParams()
    // const [selectedMenu, setSelectedMenu] = useState('krw')
    // const options = [{ label: t('krw'), value: 'krw' }, { label: t('usd'), value: 'usd' }]

    // useEffect(() => {}, [selectedMenu])

    return (
        <section className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex justify-between items-center mb-10">
                <h2 className="font-semibold text-base">{t('sales_statistics')}</h2>
                <Select defaultValue="krw">
                    <SelectTrigger className="inline-flex items-center gap-1 text-[#6f6963] focus:outline-none w-fit border-none">
                        <SelectValue placeholder={t('krw')} />
                        {/* <ChevronDownIcon className="w-4 h-4" /> */}
                    </SelectTrigger>
                    <SelectContent className='bg-white'>
                        <SelectItem value="krw" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">{t('krw')}</SelectItem>
                        <SelectItem value="usd" className="px-3 py-2 hover:bg-gray-100 cursor-pointer">{t('usd')}</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="h-[280px] bg-gray-50 rounded flex items-center justify-center text-gray-400">
            {/* 그래프 영역 */}
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorPageview" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#90cdf4" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#90cdf4" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="pageview" stroke="#63b3ed" fill="url(#colorPageview)" name="페이지뷰" />
                    <Line type="monotone" dataKey="visitor" stroke="#2b6cb0" dot={{ r: 5 }} activeDot={{ r: 7 }} name="방문자" />
                </AreaChart>
            </ResponsiveContainer>
            </div>
        </section>
    )
}
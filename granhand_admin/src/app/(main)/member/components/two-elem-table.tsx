export default function TwoElemTable({ title, value }: { title: Array<string>, value: Array<string | React.ReactNode> }) {
    return (
        <div className="grid grid-cols-[150px_1fr_150px_1fr] border-b border-gray-200 h-full min-h-20">
            {/* 첫 번째 행 */}
            <div className="bg-[#f8f4f0] border-r border-gray-200 flex items-center justify-center p-2 border-b h-full">
            {title[0]}
            </div>
            <div className="flex gap-2 items-center p-2 h-full">
            {value[0]}
            </div>
            <div className="border-r border-gray-200 flex items-center justify-center p-2 border-l bg-[#f8f4f0] border-b h-full">
            {title[1]}
            </div>
            <div className="flex items-center p-2 h-full">
            {value[1]}
            </div>
        </div>
    )
}
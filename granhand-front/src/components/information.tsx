import { cn } from "@/lib/utils";

export default function Information({ bgColor, title, contents, className }: { bgColor?: string, title?: string, contents: { elem: string; sub?: string[] }[], className?: string }) {
    return (
        <div className={cn("space-y-2", className)}>
            <div className={`space-y-2 w-full ${bgColor && bgColor}`}>
                <div className="text-xs text-[#6F6963] p-4 px-5">
                    { title && <span className="font-bold">{title}</span> }
                    <ul className={`list-disc space-y-1.5 px-4 font-medium text-[10px] ${title && 'pt-4'}`}>
                        {contents.map(({ elem, sub }) => (
                            <li key={elem}>
                                {elem}
                                {sub && sub.map((content) => (
                                    <span key={content}>
                                        <br />
                                        <span>{content}</span>
                                    </span>
                                ))}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
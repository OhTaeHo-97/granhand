import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ImageIcon } from "lucide-react";

const banners = [
    { label: "1", image: "/app_1_3_seven_01.jpg", link: "app_1.3.event_01" },
    { label: "2", image: null, link: "" },
    { label: "3", image: null, link: "" },
    { label: "이벤트 배너", image: null, link: "" },
    { label: "마이페이지 배너", image: null, link: "" },
    { label: "알림 배너", image: null, link: "" },
];

export default function PcBanner() {
    return (
        <div className="bg-white rounded-l mt-10 mb-8 p-2 md:p-4">
            <div className="overflow-x-auto">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">상단 배너</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">고정</th>
                        <td key="fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">2</th>
                        <td key="fix2" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">삭제</Button>
                                </div>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">3</th>
                        <td key="fix3" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">삭제</Button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                    <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                    <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" value="app_1.3.event_01" readOnly />
                        </div>
                    </td>
                    <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                    <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" readOnly />
                        </div>
                    </td>
                    <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                    <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                        <div className="flex items-center gap-2 justify-center">
                            <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" readOnly />
                        </div>
                    </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">이벤트 배너</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middlee">1</th>
                        <td key="fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">2</th>
                        <td key="fix2" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">삭제</Button>
                                </div>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">3</th>
                        <td key="fix3" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">삭제</Button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                        <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" value="app_1.3.event_01" readOnly />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                        <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" readOnly />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                        <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" readOnly />
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className="overflow-x-auto mt-10">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">이벤트 배너</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middlee">1</th>
                        <td key="fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">2</th>
                        <td key="fix2" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">삭제</Button>
                                </div>
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">3</th>
                        <td key="fix3" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <div className="flex gap-1">
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                                    <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">삭제</Button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-gray-200 py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                        <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" value="app_1.3.event_01" readOnly />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                        <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" readOnly />
                            </div>
                        </td>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                        <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" readOnly />
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>

            <div className="overflow-x-auto w-fit mt-10">
                <table className="min-w-[900px] w-full border-separate border-spacing-0 text-sm">
                <thead>
                    <tr>
                        <th colSpan={banners.length + 1} className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-bold py-3 px-3 text-center text-base">팝업 배너</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 고정 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">1</th>
                        <td key="fix1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex justify-between gap-1">
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">첨부파일 등록</Button>
                                <Button variant="outline" className="flex items-center gap-1 px-2 py-1 text-xs hover:bg-gray-100">수정</Button>
                            </div>
                        </td>
                    </tr>
                    {/* 미리보기 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">미리보기</th>
                        <td key="preview1" className="border border-[#5E5955] py-4 px-3 align-top text-center">
                            <div className="w-28 h-36 flex items-center justify-center bg-gray-200 rounded mx-auto">
                                <ImageIcon className="w-8 h-8 text-gray-400" />
                            </div>
                        </td>
                    </tr>
                    {/* 링크 Row */}
                    <tr>
                        <th className="border border-[#DBD7D0] bg-[#322A2408] text-[#6F6963] font-medium py-3 px-3 text-center align-middle">링크</th>
                        <td key="link1" className="border border-[#5E5955] py-3 px-3 align-middle text-center">
                            <div className="flex items-center gap-2 justify-center">
                                <Input type="text" className="border rounded px-2 py-1 text-xs flex-1 min-w-0 text-[#6F6963]" placeholder="링크 입력" readOnly />
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    );
}
export default function ProductTemplatePage() {
    const templates = [
        { id: 1, title: '반품/교환/환불 안내' },
        { id: 2, title: '상품정보 제공고시' },
        { id: 3, title: 'Eau de Perfume' },
        { id: 4, title: 'Multi Perfume' },
        { id: 5, title: 'Diffuser' },
        // Add more placeholder data as needed to match the image length
        { id: 6, title: '반품/교환/환불 안내' },
        { id: 7, title: '반품/교환/환불 안내' },
        { id: 8, title: '반품/교환/환불 안내' },
        { id: 9, title: '반품/교환/환불 안내' },
        { id: 10, title: '반품/교환/환불 안내' },
        { id: 11, title: '반품/교환/환불 안내' },
        { id: 12, title: '반품/교환/환불 안내' },
        { id: 13, title: '반품/교환/환불 안내' },
        { id: 14, title: '반품/교환/환불 안내' },
        { id: 15, title: '반품/교환/환불 안내' },
        { id: 16, title: '반품/교환/환불 안내' },
        { id: 17, title: '반품/교환/환불 안내' },
        { id: 18, title: '반품/교환/환불 안내' },
    ];
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-2xl font-semibold mb-6">템플릿 관리</h1>
        <div className="flex gap-6">
            {/* Left Section: Template List */}
            <div className="w-1/2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">템플릿 목록 <span className="text-gray-500 text-base">(총 {templates.length}개)</span></h2>
            <div className="overflow-y-auto max-h-[600px]">
                <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                    <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {/* Checkbox header */}
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        제목
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        관리
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {templates.map((template) => (
                    <tr key={template.id}>
                        <td className="px-4 py-4 whitespace-nowrap">
                        <input type="checkbox" className="form-checkbox" />
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-900">
                        {template.title}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                        <button className="text-indigo-600 hover:text-indigo-900 mr-4">수정</button>
                        <button className="text-red-600 hover:text-red-900">삭제</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>
            </div>

            {/* Right Section: Template Details */}
            <div className="w-1/2 bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">템플릿 상세</h2>
            <div className="mb-4">
                <label htmlFor="templateTitle" className="block text-sm font-medium text-gray-700">제목</label>
                <input
                type="text"
                name="templateTitle"
                id="templateTitle"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                />
            </div>
            <div>
                <label htmlFor="templateContent" className="block text-sm font-medium text-gray-700">내용</label>
                <textarea
                id="templateContent"
                name="templateContent"
                rows={10}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                ></textarea>
            </div>
            <div className="mt-6 flex justify-end gap-4">
                <button className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">취소</button>
                <button className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">저장</button>
            </div>
            </div>
        </div>
        </div>
    )
}
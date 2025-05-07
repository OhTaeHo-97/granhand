export default function MainPage() {
    return (
    <div className="flex min-h-screen bg-[#f8f4f0] text-[#6f6963] text-sm">
        {/* 메인 */}
        <main className="flex-1 p-6 space-y-6">
          {/* 오늘의 할일 */}
          <section className="flex justify-between items-center bg-white rounded p-4 shadow-sm">
            <div>
              <span className="font-semibold mr-4">신규주문 <span className="text-red-500">875</span></span>
              <span>취소관리 <span className="text-red-500">1</span></span>
              <span className="ml-4">반품관리 <span className="text-red-500">1</span></span>
              <span className="ml-4">교환관리 <span className="text-red-500">1</span></span>
              <span className="ml-4">답변대기 문의 <span className="text-red-500">1</span></span>
            </div>
            <div>2023-11-23 (목)</div>
          </section>
  
          {/* 매출 통계 + 일자별 요약 */}
          <section className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded p-4 shadow-sm h-72 flex justify-center items-center text-gray-400">
              그래프 (매출 통계)
            </div>
            <div className="bg-white rounded p-4 shadow-sm h-72 overflow-auto">
              <div className="font-semibold mb-2">일자별 요약</div>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th>일자</th>
                    <th>주문수</th>
                    <th>매출액</th>
                    <th>순 매출액</th>
                    <th>방문자</th>
                    <th>가입</th>
                    <th>문의</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023-11-23</td>
                    <td>106</td>
                    <td>4,680,000원</td>
                    <td>4,680,000원</td>
                    <td>2,219</td>
                    <td>94</td>
                    <td>1</td>
                  </tr>
                  {/* 나머지 행들도 비슷하게 추가 가능 */}
                </tbody>
              </table>
            </div>
          </section>
  
          {/* 방문자 현황 + 제휴 문의 내역 */}
          <section className="grid grid-cols-2 gap-6">
            <div className="bg-white rounded p-4 shadow-sm h-64 flex justify-center items-center text-gray-400">
              그래프 (방문자 현황)
            </div>
            <div className="bg-white rounded p-4 shadow-sm h-64 overflow-auto">
              <div className="font-semibold mb-2">제휴 문의 내역</div>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr>
                    <th>날짜</th>
                    <th>제목</th>
                    <th>성함</th>
                    <th>연락처</th>
                    <th>답변 여부</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2023-11-15</td>
                    <td>차카데이에서 협력 제안드립니다.</td>
                    <td>김민지</td>
                    <td>010-8974-6545</td>
                    <td className="text-red-500">답변 대기</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      )
}
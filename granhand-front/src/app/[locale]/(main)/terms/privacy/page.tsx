export default function PrivacyPage() {
    return (
        <section className="container px-6 text-[#6F6963]">
            <section className="py-8">
                <h2 className={`text-xl font-semibold text-left mb-8 border-t pt-4 text-[#6F6963]`}>개인정보처리방침</h2>
            </section>

            <main className="container mx-0 ml-0 w-[739px] max-w-6xl">
                <div className="text-sm mb-2">
                    {'그랑핸드 (이하 "회사"는) 고객님의 개인정보를 중요시하며, "정보통신망 이용촉진 및 정보보호"에 관한 법률을 준수하고 있습니다.'}
                </div>
                <div className="text-sm mb-10">
                    회사는 개인정보처리방침을 통하여 고객님께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                </div>

                <div className="mb-6 overflow-x-auto pl-0 ml-0">
                    <section className="mb-6 space-y-1.5">
                        <h2 className="font-semibold mb-2">수집하는 개인정보 항목 및 수집방법</h2>
                        <ol className="list-none pl-5 text-sm space-y-1.5">
                        <li>가. 수집하는 개인정보의 항목</li>
                        <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
                            <li>회사는 회원가입, 주문 처리, 고객 상담, 마케팅 및 광고, 서비스 품질 개선을 위해 아래와 같은 개인정보를 수집하고 있습니다.</li>
                            <ul className="pl-5 text-sm space-y-2 mb-4 [list-style-type:'-']">
                                <li>회원가입시 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보</li>
                                <li>서비스 신청시 : 주소, 결제 정보</li>
                            </ul>
                        </ul>
                        <div className="overflow-x-auto mb-6 w-full">
                            <table className="w-full text-sm text-left border !border-[#C0BCB6]">
                                <thead className="bg-[#E9E6E0]">
                                <tr className="w-full">
                                    <th className="border !border-[#C0BCB6] text-center">구분</th>
                                    <th className="border !border-[#C0BCB6] text-center">수집 목적</th>
                                    <th className="border !border-[#C0BCB6] text-center">수집 항목</th>
                                    <th className="border !border-[#C0BCB6] text-center">보유 및 이용기간</th>
                                    <th className="border !border-[#C0BCB6] text-center min-w-30">필수/선택</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border !border-[#C0BCB6] text-center">회원가입시<br />(회원서비스 운영)</td>
                                    <td className="border !border-[#C0BCB6] text-center">회원 가입의사 확인, 회원제 서비스 이용에 따른 본인 식별 및 인증, 회원자격 유지 및 관리, 서비스 부정이용 방지</td>
                                    <td className="border !border-[#C0BCB6] text-center">이름, 이메일 주소, 전화번호, 성별, 로그인 ID</td>
                                    <td className="border !border-[#C0BCB6] text-center">회원 탈퇴 시까지<br />(불량회원의 부정한 이용의 재발을 방지, 분쟁해결 및 수사기관의 요청에 따른 협조가 필요한 경우 해지시로부터 1년까지)</td>
                                    <td className="border !border-[#C0BCB6] text-center">필수</td>
                                </tr>
                                <tr>
                                    <td className="border !border-[#C0BCB6] text-center">서비스 이용시</td>
                                    <td className="border !border-[#C0BCB6] text-center">주문, 구매 및 요금 결제 처리, 물품배송 또는 청구지 등 발송, 금융거래 본인 인증 및 금융서비스</td>
                                    <td className="border !border-[#C0BCB6] text-center">이름, 전화번호, 배송지 주소, 주문내역, 결제 정보</td>
                                    <td className="border !border-[#C0BCB6] text-center">전자상거래법상 보유 및 이용기간(5년)</td>
                                    <td className="border !border-[#C0BCB6] text-center">필수</td>
                                </tr>
                                <tr>
                                    <td className="border !border-[#C0BCB6] text-center">고객 상담시</td>
                                    <td className="border !border-[#C0BCB6] text-center">상품에 관한 고객상담</td>
                                    <td className="border !border-[#C0BCB6] text-center">이름, 전화번호(연락처), 상담 내용</td>
                                    <td className="border !border-[#C0BCB6] text-center">전자상거래법상 보유 및 이용기간(3년)</td>
                                    <td className="border !border-[#C0BCB6] text-center">필수</td>
                                </tr>
                                <tr>
                                    <td className="border !border-[#C0BCB6] text-center">마케팅 및 광고 활용</td>
                                    <td className="border !border-[#C0BCB6] text-center">이벤트 등 광고성 정보 전달</td>
                                    <td className="border !border-[#C0BCB6] text-center">이름, 이메일</td>
                                    <td className="border !border-[#C0BCB6] text-center">전자상거래법상 보유 및 이용기간<br />(회원 탈퇴 또는 동의 철회 시까지)</td>
                                    <td className="border !border-[#C0BCB6] text-center">선택</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <ul>
                            <li>서비스 이용 과정이나 사업 처리 과정에서 서비스이용기록, 접속로그, 쿠키, 접속 IP, 결제 기록, 불량이용 기록이 생성되어 수집될 수 있습니다.</li>
                        </ul>
                        <li>나. 수집방법</li>
                        <ul className="pl-5 text-sm space-y-2 mb-4 [list-style-type:'-']">
                            <li>홈페이지, 서면양식, 게시판, 이메일, 이벤트 응모, 배송요청, 전화, 팩스, 생성 정보 수집 툴을 통한 수집</li>
                        </ul>
                        </ol>
                    </section>

                    <section className="mb-6 space-y-1.5">
                        <h2 className="font-semibold mb-2">수집하는 개인정보 항목 및 수집방법</h2>
                        <ol className="list-none pl-5 text-sm space-y-1.5">
                        <li>가. 수집하는 개인정보의 항목</li>
                        <ul className="list-disc pl-5 text-sm space-y-1.5 mb-4">
                            <li>회사는 회원가입, 주문 처리, 고객 상담, 마케팅 및 광고, 서비스 품질 개선을 위해 아래와 같은 개인정보를 수집하고 있습니다.</li>
                            <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                                <li>회원가입시 : 이름 , 생년월일 , 성별 , 로그인ID , 비밀번호 , 휴대전화번호 , 이메일 , 14세미만 가입자의 경우 법정대리인의 정보</li>
                                <li>서비스 신청시 : 주소, 결제 정보</li>
                            </ul>
                            <li>서비스 이용 과정이나 사업 처리 과정에서 서비스이용기록, 접속로그, 쿠키, 접속 IP, 결제 기록, 불량이용 기록이 생성되어 수집될 수 있습니다.</li>
                        </ul>
                        <li>나. 수집방법</li>
                        <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                            <li>홈페이지, 서면양식, 게시판, 이메일, 이벤트 응모, 배송요청, 전화, 팩스, 생성 정보 수집 툴을 통한 수집</li>
                        </ul>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보의 수집 및 이용목적</h2>
                        <div className="text-sm mb-2">
                            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                        </div>
                        <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                    <li>서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산<br/>콘텐츠 제공 , 구매 및 요금 결제 , 물품배송 또는 청구지 등 발송 , 금융거래 본인 인증 및 금융 서비스</li>
                        <li>회원 관리<br />회원제 서비스 이용에 따른 본인확인 , 개인 식별 , 불량회원의 부정 이용 방지와 비인가 사용 방지 , 가입 의사 확인 , 연령확인 , 만14세 미만 아동 개인정보 수집 
                        시 법정 대리인 동의여부 확인, 불만처리 등 민원처리 , 고지사항 전달</li>
                        <li>마케팅 및 광고에 활용<br/>이벤트 등 광고성 정보 전달 , 접속 빈도 파악 또는 회원의 서비스 이용에 대한 통계</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보의 보유 및 이용기간</h2>
                        <div className="text-sm mb-2">
                            원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
                        </div>
                        <ol className="list-none text-sm space-y-1.5">
                            <li>가. 회사 내부방침에 의한 정보보유 사유<br/>회원이 탈퇴한 경우에도 불량회원의 부정한 이용의 재발을 방지, 분쟁해결 및 수사기관의 요청에 따른 협조를 위하여, 이용계약 해지일로부터 1년간 회원의 정보를 보유할 수 있습니다</li>
                            <li>나. 관련 법령에 의한 정보 보유 사유<br/>전자상거래등에서의소비자보호에관한법률 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다.</li>
                            <ul className="list-disc text-sm pl-5 space-y-1.5 mb-4">
                                <li>계약 또는 청약철회 등에 관한 기록</li>
                                <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                                    <li>보존이유 : 전자상거래등에서의소비자보호에관한법률</li>
                                    <li>보존기간 : 5년</li>
                                </ul>
                                <li>대금 결제 및 재화 등의 공급에 관한 기록</li>
                                <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                                    <li>보존이유 : 전자상거래등에서의소비자보호에관한법률</li>
                                    <li>보존기간 : 5년</li>
                                </ul>
                                <li>소비자 불만 또는 분쟁처리에 관한 기록</li>
                                <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                                    <li>보존이유 : 전자상거래등에서의소비자보호에관한법률</li>
                                    <li>보존기간 : 3년</li>
                                </ul>
                                <li>로그 기록</li>
                                <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                                    <li>보존이유: 통신비밀보호법</li>
                                    <li>보존기간 : 3개월</li>
                                </ul>
                            </ul>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보의 파기절차 및 방법</h2>
                        <div className="text-sm mb-2">
                        회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후, 보유기간의 경과 등 개인정보가 불필요하게 되었을 때에는 해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다. 이용자가 원칙적으로 개인정보 수집 및 이용에 대한 동의(회원 가입, 계약 체결 등)를 철회(회원 탈퇴, 계약 해지 등)하는 경우, 회사는 수집한 이용자의 개인정보를 지체없이 파기합니다. 다만, 회원이 탈퇴한 경우에도 불량회원의 부정한 이용의 재발을 방지, 분쟁해결 및 수사기관의 요청에 따른 협조를 위하여, 이용계약 해지일로부터 1년간 회원의 정보를 보유할 수 있습니다.
                        </div>
                        <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                            <li>파기절차<br/>회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                            <li>파기방법<br/>전자적 파일형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이문서에 출력∙기록 및 저장된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 
                            파기합니다.</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보 제공</h2>
                        <div className="text-sm mb-2">
                        회사는 이용자의 개인정보를 개인정보의 처리 목적에서 명시한 범위 내에서만 처리하며, 이용자의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공하고 그 이외에는 이용자의 개인정보를 제3자에게 제공하지 않습니다. 다만, 다음의 경우 개인정보 보호법 제17조 제1항 제1호에 따라 정보주체의 동의를 얻어 필요 최소한의 범위로만 제공합니다.
                        </div>
                        <div className="overflow-x-auto mb-6 w-full">
                            <table className="w-full text-sm text-left border !border-[#C0BCB6] min-h-20">
                                <thead className="bg-[#E9E6E0]">
                                <tr className="w-full">
                                    <th className="border !border-[#C0BCB6] text-center">제공받는 자</th>
                                    <th className="border !border-[#C0BCB6] text-center">제공 목적</th>
                                    <th className="border !border-[#C0BCB6] text-center">제공 항목</th>
                                    <th className="border !border-[#C0BCB6] text-center">보유 및 이용기간</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="border !border-[#C0BCB6] text-center">스티비</td>
                                    <td className="border !border-[#C0BCB6] text-center">뉴스레터 발송</td>
                                    <td className="border !border-[#C0BCB6] text-center">이름, 이메일</td>
                                    <td className="border !border-[#C0BCB6] text-center">수신거부 시 또는 개인정보 제3자 제공 철회시까지</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">수집한 개인정보의 위탁</h2>
                        <ol className="pl-5 text-sm space-y-1.5 mb-4 list-decimal">
                            <li>회사는 이용자에게 보다 원활한 서비스를 제공하기 위하여 다음과 같이 개인정보 처리 관련 업무를 외부 전문업체에 위탁하고 있습니다.</li>
                            <ul className="list-disc text-sm pl-5 space-y-1.5 mb-4">
                                <li>위탁받는 자 : 짐풀</li>
                                <li>위탁업무 내용 : 배송 관련 업무 대행</li>
                            </ul>
                            <li>회사는 위탁계약 체결 시 위탁업무 수행목적 외 개인정보 처리금지, 기술적 관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리 및 감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 관리, 감독합니다.</li>
                            <li>회사는 위탁업무의 내용이나 수탁자가 변경될 경우에는 지체업싱 본 개인정보 처리방침을 통하여 이용자에게 알리겠습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">이용자 및 법정대리인의 권리와 그 행사방법</h2>
                        <div className="text-sm mb-2">
                        회사는 만 14세 미만 아동의 회원가입을 받지 않으며, 개인정보 수집을 하지 않습니다.
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보의 안전성 확보 조치</h2>
                        <div className="text-sm mb-2">
                        회사는 개인정보 보호법 제29조 및 같은 법 시행령 제30조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 취하고 있습니다.
                        </div>
                        <ul className="list-disc text-sm pl-5 space-y-1.5 mb-4">
                            <li>관리적 조치</li>
                            <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                                <li>개인정보보호 지침(내부관리계획서) 수립∙시행, 정기적 직원 교육 등</li>
                            </ul>
                            <li>기술적 조치</li>
                            <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                                <li>개인정보처리시스템 등의 접근권한 관리, 접근통제시스템 설치, 패스워드, 신용정보 등의 암호화, 보안프로그램 설치 및 갱신, SSL을 통한 개인정보 암호화</li>
                            </ul>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항</h2>
                        <div className="text-sm mb-2">
                        {'회사는 귀하의 정보를 수시로 저장하고 찾아내는 "쿠키(cookie)" 등을 운용합니다. 쿠키란 웹사이트를 운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주 작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.'}<br/>회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.
                        </div>
                        <ol className="pl-5 text-sm space-y-1.5 mb-4 list-decimal">
                            <li>쿠키 등 사용 목적</li>
                            <ol className="space-y-1.5">
                                <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">회원과 비회원의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공</li>
                                <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서, 귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다.</li>
                            </ol>
                            <li>쿠키 설정 거부 방법</li>
                            <ol className="space-y-1.5">
                                <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹 브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를 저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수 있습니다.</li>
                                <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">설정방법 예(인터넷 익스플로어의 경우) : 웹 브라우저 상단의 도구 {">"} 인터넷 옵션 {">"} 개인정보</li>
                                <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에 어려움이 있을 수 있습니다.</li>
                            </ol>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보에 관한 민원서비스</h2>
                        <div className="text-sm mb-2">
                        회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보보호책임자를 지정하고 있습니다.
                        </div>
                        <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                            <li>고객서비스담당 부서<br/>고객센터 전화번호 : 02-333-6525<br/>이메일 : hello@granhand.com</li>
                            <li>개인정보관리책임자<br/>성명 : 정루아<br/>부서 : 브랜드 관리팀<br/>전화번호 : 02-333-6525<br/>이메일 : hello@granhand.com</li>
                        </ul>
                        <ul className="list-disc text-sm pl-5 space-y-1.5 mb-4">
                            <li>귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보보호책임자 혹은 담당부서로 신고하실 수 있습니다.</li>
                            <li>회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.</li>
                            <li>이용자는 개인정보침해로 인한 구제를 받기 위하여 개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터 등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</li>
                        </ul>
                        <div className="text-sm">
                        개인정보침해신고센터 (privacy.kisa.or.kr / 국번 없이 118)<br/>
                        개인정보분쟁조정위원회 (kopico.go.kr / 1833-6972)<br/>
                        대검찰청 사이버수사과 (spo.go.kr / 지역번호+1301)<br/>
                        경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">개인정보 처리방침 변경시 고지방법</h2>
                        <div className="text-sm mb-2">
                        본 개인정보 처리방침은 아래 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전에 웹사이트 게시, 이메일 등을 통해 사전 공지하고, 사전공지가 곤란한 경우 최대한 빠른 시간 내 고지할 것입니다.
                        </div>
                        <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                            <li>시행일 :</li>
                        </ul>
                        <div className="text-sm mb-2">
                        이전의 개인정보 처리방침은 아래에서 확인하실 수 있습니다
                        </div>
                        <ul className="pl-5 text-sm space-y-1.5 mb-4 [list-style-type:'-']">
                            <li>202X. X. X. ~ 202X. X. X. 적용</li>
                        </ul>
                    </section>
                </div>
            </main>
        </section>
    )
}
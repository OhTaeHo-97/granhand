export default function TermsPage() {
    return (
        <section className="container mx-auto px-6">
            <section className="py-8">
                <h2 className={`text-xl font-semibold text-left mb-8 border-t pt-4 text-[#6F6963]`}>이용약관</h2>
            </section>

            <main className="container max-w-5xl w-[739px] ml-0 text-[#6F6963]">
                <div className="mb-24">
                    <h1 className="text-xl font-bold mb-6 text-[#322A24]">제 1장 총 칙</h1>

                    <section className="mb-6 space-y-1.5">
                        <h2 className="font-semibold mb-2">제 1조 (목적)</h2>
                        <p className="text-sm">
                        {'본 이용약관은 유한회사 그랑핸드(이하 "회사")에서 제공하는 모든 서비스(이하 "서비스")를 이용함에 있어 회사와 이용자의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.'}
                        </p>
                        <p className="text-sm">
                        {'PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에 반하지 않는 한 이 약관을 준용합니다.'}
                        </p>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 2조 (정의)</h2>
                        <ol className="list-decimal pl-5 text-sm *:space-y-1.5">
                        <li>{'"사이트몰"이란 회사가 재화 또는 용역(이하 "재화 등")을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신 설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 실제 매장을 운영하는 사실상의 의미로도 사용합니다.'}</li>
                        <li>{'"이용자"란 사이트몰에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.'}</li>
                        <li>{'"회원"이라 함은 회사에 개인정보를 제공하여 회원 등록을 한 자로서, 회사의 정보를 지속적으로 제공 받으며, 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.'}</li>
                        <li>{'"비회원"이라 함은 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.'}</li>
                        <li>{'이외에 이 약관에서 사용하는 용어의 정의는 관계 법령 및 서비스 별 안내에서 정하는 바에 의합니다.'}</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">{'제 3조 (약관 등의 명시와 설명 및 개정)'}</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-2">
                        <li>{'회사는 이 약관의 내용과 상호, 영업소 소재지 주소(소비자의 불만을 처리할 수 있는 곳의 주소를 포함), 전화번호, 모사전송번호, 이메일주소, 사업자등록번호, 통신판매업신고번호, 개인정보관리책임자 등을 이용자가 쉽게 알 수 있도록 사이트몰의 초기 서비스화면(전면)에 게시합니다. 단, 약관의 내용은 이용자가 연결화면을 통하여 볼 수 있도록 할 수 있습니다.'}</li>
                        <li>{'회사는 『약관의 규제에 관한 법률』, 『정보통신망 이용촉진 및 정보보호 등에 관한 법률』, 『전자상거래 등에서의 소비자보호에 관한 법률』, 『소비자기본법』 등 관련법을 위배하지 않는 범위 에서 이 약관을 개정할 수 있습니다.'}</li>
                        <li>{'회사는 약관을 개정할 경우에는 적용일 및 개정사유를 명시하여 현행약관과 회사의 화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다. 다만, 이용자에게 불리하게 약관내용을 변경하는 경우에는 최소한 30일 이상의 사전 유예기간을 두고 공지합니다. 이 경우 회사는 개정전 내용과 개정후 내용을 비교하여 이용자가 알기 쉽도록 표시합니다.'}</li>
                        <li>{'회사가 약관을 개정할 경우에는 그 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고 그 이전에 체결된 계약에 대해서는 개정 전 약관조항이 그대로 적용됩니다. 다만 이미 계약을 체결한 이용자가 개정약관 조항의 적용을 받기를 원하는 뜻을 제4항에 의한 개정약관의 공지기간 내에 회사에 송신하여 회사의 동의를 받은 경우에는 개정약관 조항이 적용됩니다.'}</li>
                        <li>{'이 약관에서 정하지 아니한 내용과 이 약관의 해석에 관하여는 관계법령 및 상관례에 따릅니다.'}</li>
                        </ol>
                    </section>
                </div>

            <div className="mb-24">
                    <h1 className="text-xl font-bold mb-6 text-[#322A24]">제 2장 회사의 서비스</h1>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 4조 (서비스의 제공 및 변경)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 다음과 같은 서비스를 제공합니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">재화 또는 용역에 대한 정보 제공 및 구매 계약의 체결</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">구매 계약이 체결된 재화 또는 용역의 배송</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">기타 회사가 정하는 업무</li>
                        </ol>
                        <li>회사는 상품 또는 용역이 품절되거나 기술적 사양의 변경 등으로 더 이상 제공할 수 없는 경우에는 장차 체결되는 계약에 의해 제공할 상품, 용역의 내용을 변경할 수 있습니다. 이 경우에는 변경된 재화 또는 용역의 내용 및 제공일자를 명시하여 현재의 재화 또는 용역의 내용을 게시한 곳에 즉시 공지합니다.</li>
                        <li>회사가 제공하기로 이용자와 계약을 체결한 서비스의 내용을 상품 등의 품절 또는 기술적 사양의 변경 등의 사유로 변경할 경우에는 그 사유를 이용자에게 통지 가능한 방법으로 즉시 통지합니다.</li>
                        <li>전항의 경우 회사는 이로 인하여 이용자가 입은 손해를 배상합니다. 다만, 회사가 고의 또는 과실이 없음을 입증한 경우에는 아무런 책임을 부담하지 않습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 5조 (서비스의 중단)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사의 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절, 천재지변, 불가항력, 기타 회사의 합리적인 통제범위를 벗어난 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
                        <li>제1항에 의한 서비스 중단의 경우에는 회사는 제8조에 정한 방법으로 이용자에게 통지합니다.</li>
                        <li>회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 회사의 고의 또는 과실이 없는 한 손해를 배상하지 아니합니다.</li>
                        </ol>
                    </section>
                </div>
                
                <div className="mb-24">
                    <h1 className="text-xl font-bold mb-6 text-[#322A24]">제 3장 서비스 이용계약</h1>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 6조 (회원가입)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>이용자는 무료로 사이버몰 회원에 가입할 수 있으며, 회사가 정한 가입 양식에 회원정보를 기입한 후 이 약관에 동의한다는 의사표시를 함으로서 회원가입을 신청합니다.</li>
                        <li>{'회사는 회원가입 신청에 대한 승낙을 통해 회원가입 절차를 완료하고 회사의 서비스 이용 계정(이하 "계정")을 부여합니다.'}</li>
                        <li>회사는 제1항에 따라 회원가입을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">가입신청자가 이 약관 제7조 제3항에 의하여 이전에 회원자격을 상실한 적이 있는 경우, 다만 제7조 제3항에 의한 회원자격 상실 후 3년이 경과한 자로서 회사가 회원 재가입을 승낙한 경우는 예외로 합니다.</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">등록 내용에 허위, 기재누락, 오기가 있는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">기타 회원으로 등록하는 것이 회사의 기술상 현저히 지장이 있다고 판단되는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">만 14세 미만의 아동</li>
                        </ol>
                        <li>회원가입은 회사의 승낙이 가입 신청한 이용자에게 도달한 때에 완료됩니다.</li>
                        <li>회원은 회사에 등록한 회원정보에 변경이 있는 경우, 즉시 회사에서 정하는 방법에 따라 해당 변경사항을 회사에 통지하거나 수정하여야 합니다.</li>
                        <li>회원은 1인 당 1개의 계정만 가입할 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 7조 (회원 탈퇴 및 자격 상실 등)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원 탈퇴를 처리합니다.</li>
                        <li>회원이 다음 각호의 사유에 해당하는 경우, 회사는 회원 자격을 제한 및 정지시킬 수 있습니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">가입 신청 시에 허위 내용을 등록한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">회사의 서비스를 이용하여 구입한 재화 등의 대금, 기타 회사의 서비스 이용에 관련하여 회원이 부담하는 채무를 기일에 지급하지 않는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">타인의 ID와 비밀번호 또는 그 개인정보를 도용한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">다른 사람의 회사의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['5'] before:text-[10px] before:flex before:items-center before:justify-center">회사를 이용하여 법령 또는 이 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['6'] before:text-[10px] before:flex before:items-center before:justify-center">기타 서비스 운영을 고의로 방해하는 행위를 하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['7'] before:text-[10px] before:flex before:items-center before:justify-center">회원 등급을 부정한 방법 또는 목적으로 사용한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['8'] before:text-[10px] before:flex before:items-center before:justify-center">회사를 통해 구매한 재화 등을 정당한 이유없이 상습적으로 취소 또는 반품하는 등의 방법으로 업무를 방해하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['9'] before:text-[10px] before:flex before:items-center before:justify-center">재판매 목적으로 재화 등을 대량으로 중복 구매하여 회사의 거래를 방해한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['10'] before:text-[10px] before:flex before:items-center before:justify-center">부정 적립, 부정 사용 등 회사가 제공한 적립금을 부정한 방법 또는 목적으로 이용한 경우</li>
                        </ol>
                        <li>회사가 회원 자격을 제한, 정지 시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정 되지 아니하는 경우 회사는 회원 자격을 상실시킬 수 있습니다.</li>
                        <li>회사가 회원 자격을 상실시키는 경우에는 회원 등록을 말소합니다. 이 경우 회원에게 이를 통지하고, 회원 등록 말소 전에 최소한 30일 이상의 기간을 정하여 소명할 기회를 부여합니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 8조 (회원에 대한 통지)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회원에 대한 통지를 하는 경우 회사는 회원이 등록한 e-mail 주소 또는 휴대폰 번호 등으로 할 수 있습니다.</li>
                        <li>회사는 불특정 다수 회원에 대한 통지의 경우 서비스 게시판 등에 게시함으로써 개별 통지에 갈음할 수 있습니다.</li>
                        </ol>
                    </section>
                </div>

                <div className="mb-24">
                    <h1 className="text-xl font-bold mb-6 text-[#322A24]">제 4장 구매계약 및 대금 결제</h1>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 9조 (구매신청)</h2>
                        <div className="text-sm mb-2">
                            이용자는 회사에서 다음 또는 이와 유사한 방법에 의하여 구매를 신청하며, 회사는 이용자가 구매신청을 함에 있어서 다음의 각 내용을 알기 쉽게 제공하여야 합니다.
                        </div>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>재화 등의 검색 및 선택</li>
                        <li>성명, 주소, 전화번호(또는 휴대폰번호), 이메일 주소 등의 입력</li>
                        <li>약관내용, 청약 철회권이 제한되는 서비스, 배송료, 설치비 등의 비용부담과 관련한 내용에 대한 확인</li>
                        <li>재화 등의 구매신청 및 이에 관한 확인 또는 회사의 확인에 대한 동의</li>
                        <li>결제 방법의 선택</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 10조 (구매계약의 성립)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 제9조 구매신청에 대하여 다음 각 호에 해당하면 승낙하지 않을 수 있습니다. 다만, 미성년자와 계약을 체결하는 경우에는 법정대리인의 동의를 얻지 못하면 미성년자 본인 또는 법정대리인이 계약을 취소할 수 있다는 내용을 고지하여야 합니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">신청 내용에 허위, 기재누락, 오기가 있는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">미성년자가 담배, 주류 등 청소년보호법에서 금지하는 상품 및 용역을 구매하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">기타 구매신청을 승낙하는 것이 회사 기술상 현저히 지장이 있다고 판단하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">기타 제반 법령 및 정부의 가이드라인에 위반되는 경우</li>
                        </ol>
                        <li>회사의 승낙이 제12조 제1항의 수신확인 통지형태로 이용자에게 도달한 시점에 구매계약이 성립한 것으로 봅니다.</li>
                        <li>회사의 승낙의 의사표시에는 이용자의 구매신청에 대한 확인 및 판매가능 여부, 구매신청의 정정 취소 등에 관한 정보 등을 포함하여야 합니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 11조 (지급방법)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사에서 구매한 상품 또는 용역에 대한 대금지급방법은 다음 각 호의 방법 중 가용한 방법으로 할 수 있습니다. 단, 회사는 이용자의 지급방법에 대하여 재화 등의 대금에 어떠한 명목의 수수료도 추가하여 징수할 수 없습니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">폰뱅킹, 인터넷뱅킹 등의 각종 계좌이체</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">선불카드, 직불카드, 신용카드 등의 각종 카드 결제</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">온라인 무통장입금</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">전자 화폐에 의한 결제</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['5'] before:text-[10px] before:flex before:items-center before:justify-center">마일리지 등 회사가 지급한 포인트에 의한 결제</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['6'] before:text-[10px] before:flex before:items-center before:justify-center">회사와 계약을 맺었거나 회사가 인정한 상품권에 의한 결제</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['7'] before:text-[10px] before:flex before:items-center before:justify-center">기타 전자적 지급 방법에 의한 대금 지급 등</li>
                        </ol>
                        <li>구매대금의 결제와 관련하여 이용자가 입력한 정보 및 그와 관련된 책임은 이용자에게 있으며, 재화 또는 용역의 청약 후 합리적인 일정 기간 내에 결제가 이루어 지지 않는 경우 회사는 이에 해당주문을 취소할 수 있습니다.</li>
                        <li>회사는 구매자의 결제수단에 대하여 정당한 사용권한 보유여부를 확인할 수 있으며 필요한 경우 해당 거래진행의 정지 및 소명자료의 제출을 요청할 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 12조 (수신확인통지·구매신청 변경 및 취소)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 이용자의 구매신청이 있는 경우 이용자에게 수신확인통지를 합니다.</li>
                        <li>수신확인 통지를 받은 이용자는 의사표시의 불일치 등이 있는 경우에는 수신확인통지를 받은 후 즉시 구매신청 변경 및 취소를 요청할 수 있고, 회사는 배송 전에 이용자의 요청이 있는 경우에는 지체 없이 그 요청에 따라 처리하여야 합니다.</li>
                        <li>수신확인 통지를 받은 이용자가 대금을 지불한 경우에는 제 15조의 청약철회 등에 관한 규정에 따릅니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 13조 (재화 등의 공급)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 이용자와 재화 등의 공급시기에 관하여 별도의 약정이 없는 이상, 이용자가 청약을 한 날로부터 7일 이내에 재화 등을 배송할 수 있도록 주문제작, 포장 등 기타의 필요한 조치를 취합니다. 다만, 회사가 이미 재화 등의 대금의 전부 또는 일부를 받은 날부터 2영업일 이내에 조치를 취합니다. 이때 회사는 이용자가 재화 등의 공급 절차 및 진행 사항을 확인 할 수 있도록 적절한 조치를 합니다.</li>
                        <li>공휴일 및 기타 휴무일 또는 천재지변 등의 불가항력적 사유가 발생하는 경우 그 해당기한은 배송소요기간에서 제외합니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 15조 (청약 철회 등)</h2>
                        <div className="text-sm  mb-2">
                        회사는 이용자가 구매 신청한 재화 등이 품절 등의 사유로 인도 또는 제공을 할 수 없을 때에는 지체 없이 그 사유를 이용자에게 통지하고 사전에 재화 등의 대금을 받은 경우에는 대금을 받은 날부터 3영업일 이내에 환급하거나 환급에 필요한 조치를 취합니다.
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 11조 (지급방법)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사와 재화 등의 구매에 관한 계약을 체결한 이용자는 수신확인의 통지를 받은 날로부터 7일 이내에 청약의 철회를 할 수 있습니다. 다만, 통지를 받은 때보다 공급이 늦게 이루어진 경우에는 재화 등의 공급을 받은 날로부터 7일 이내에 청약 철회를 할 수 있습니다.</li>
                        <li>이용자는 재화 등을 배송 받은 경우 다음 각호에 해당하는 경우에는 반품 및 교환을 할 수 없습니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">이용자의 사용 또는 일부 소비에 의하여 재화 등의 가치가 현저히 감소한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">시간의 경과에 의하여 재판매가 곤란할 정도로 재화 등의 가치가 현저히 감소한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">같은 성능을 지닌 재화 등으로 복제가 가능한 경우 그 원본인 재화 등의 포장을 훼손한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">그 밖에 거래의 안전을 위하여 대통령령이 정하는 경우</li>
                        </ol>
                        <li>제2항 제2호 내지 제4호의 경우에는 회사가 사전에 청약 철회 등이 제한되는 사실을 소비자가 쉽게 알 수 있는 곳에 명기하거나 시용 상품을 제공하는 등의 조치를 하지 않았다면 이용자의 청약 철회 등이 제한되지 않습니다.</li>
                        <li>이용자는 제1항 및 제2항의 규정에도 불구하고 재화 등의 내용이 표시, 광고 내용과 다르거나 계약 내용과 다르게 이행된 때에는 당해 재화 등을 공급받은 날부터 3개월 이내, 그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 청약 철회 등을 할 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 16조 (청약 철회 등의 효과)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 이용자로부터 재화 등을 반환 받은 경우 3영업일 이내에 이미 지급받은 재화 등의 대금을 환급 합니다. 이 경우 회사가 이용자에게 재화 등의 환급을 지연한 때에는 그 지연 기간에 대하여 공정거래위원회가 정하여 고시하는 지연 이자율을 곱하여 산정한 지연 이자를 지급합니다.</li>
                        <li>회사는 위 대금을 환급함에 있어서 구매자가 신용카드 또는 전자금융거래법 등이 정하는 결제수단으로 재화 등의 대금을 지급한 때에는 지체 없이 당해 결제수단을 제공한 사업자로 하여금 재화 등의 대금의 청구를 정지 또는 취소하도록 요청할 수 있습니다.</li>
                        <li>청약 철회 등의 경우 공급 받은 재화 등의 반환에 필요한 비용은 이용자가 부담합니다. 회사는 이용자에게 청약 철회 등을 이유로 위약금 또는 손해배상을 청구하지 않습니다. 다만 재화 등의 내용이 표시, 광고 내용과 다르거나 계약 내용과 다르게 이행되어 청약 철회 등을 하는 경우 재화 등의 반환에 필요한 비용은 회사가 부담합니다.</li>
                        <li>이용자가 재화 등을 제공받을 때 발송비를 부담한 경우에 회사는 청약 철회 시 그 비용을 누가 부담하는지를 알기 쉽도록 명확하게 표시합니다.</li>
                        </ol>
                    </section>
                </div>

                <div className="mb-24">
                    <h1 className="text-xl font-bold mb-6 text-[#322A24]">제 5장 계약당사자의 의무</h1>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 17조 (개인정보보호 및 이용)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 이용자의 정보수집 시 서비스의 제공에 필요한 최소한의 정보를 수집합니다. 다만 관련 법령상 의무이행을 위하여 본인확인이 필요한 경우 해당 개인정보를 수집합니다.</li>
                        <li>회사는 이용자의 개인 식별이 가능한 개인 정보를 수집하는 때에는 반드시 당해 이용자의 동의를 받습니다.</li>
                        <li>제공된 개인정보는 당해 이용자의 동의 없이 목적 외의 이용이나 제3자에게 제공할 수 없으며, 이에 대한 모든 책임은 회사가 집니다. 다만, 다음의 경우는 예외로 합니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">배송 업무상 배송 업체에게 배송에 필요한 최소한의 이용자의 정보(성명, 주소, 휴대폰 번호)를 알려주는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">정보통신서비스의 제공에 관한 계약의 이행을 위하여 필요한 개인정보로서 경제적, 기술적인 사유로 통상의 동의를 받는 것이 현저히 곤란한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">재화 등의 거래에 따른 대금 정산을 위하여 필요한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">도용 방지를 위하여 본인 확인에 필요한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['5'] before:text-[10px] before:flex before:items-center before:justify-center">법률의 규정 또는 법률에 의하여 필요한 불가피한 사유가 있는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['6'] before:text-[10px] before:flex before:items-center before:justify-center">신속한 이용문의 상담 및 이용자의 불만처리 업무를 대행하는 회사에 상담업무에 필요한 이용자의 정보를 제공하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['7'] before:text-[10px] before:flex before:items-center before:justify-center">회원가입 시 동의한 제휴사별 제휴 업무 진행을 위한 필요로 하는 본인확인을 위한 최소한의 정보(성명, 휴대폰 번호, 주문상품평 등)를 제휴사에게 제공하는 경우</li>
                        </ol>
                        <li>회사가 제2항과 제3항에 의해 이용자의 동의를 받아야 하는 경우에는 개인정보관리 책임자의 신원(소속, 성명 및 전화번호, 기타 연락처), 정보의 수집 목적 및 이용 목적, 제3자에 대한 정보 제공 관련 사항(제공 받은자, 제공 목적 및 제공할 정보의 내용) 등 정보통신망이용촉진등에관한법률 제22조 등에서 규정한 사항을 미리 명시하거나 고지해야 하며 이용자는 언제든지 이 동의를 철회할 수 있습니다.</li>
                        <li>이용자는 언제든지 회사가 가지고 있는 자신의 개인 정보에 대해 열람 및 오류 정정을 요구할 수 있으며 회사는 이에 대해 지체 없이 필요한 조치를 취할 의무를 집니다. 이용자가 오류의 정정을 요구한 경우에는 회사는 그 오류를 정정할 때까지 당해 개인정보를 이용하지 않습니다.</li>
                        <li>회사는 개인정보 보호를 위하여 관리자를 한정하여 그 수를 최소화 하며 신용카드, 은행계좌 등을 포함한 이용자의 개인정보의 분실, 도난, 유출, 변조 등으로 인한 이용자의 손해에 대하여 모든 책임을 집니다.</li>
                        <li>회사 또는 그로부터 개인 정보를 제공받는 제3자는 개인정보의 수집 목적 또는 제공받은 목적을 달성한 때에는 당해 개인정보를 지체 없이 파기합니다</li>
                        <li>회사가 회원의 개인정보를 수집, 이용, 제공 등을 할 경우에는 정보통신망 이용촉진 및 정보보호등에 관한 법률에 따라 회원의 동의를 받습니다.</li>
                        <li>회원은 원하는 경우 언제든 회사에 제공한 개인정보의 수집과 이용에 대한 동의를 철회할 수 있으며 동의의 철회는 회원 탈퇴를 하는 것으로 이루어 집니다</li>
                        </ol>
                        <div className="text-sm">
                        {"* 개인정보와 관련된 보다 구체적인 사항은 '개인정보 처리방침'을 따릅니다."}
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 18조 (회사의 의무)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 상품 또는 용역을 제공하는데 최선을 다합니다.</li>
                        <li>회사는 이용자가 안전하게 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을 갖추어야 합니다.</li>
                        <li>회사는 판매하는 상품이나 용역에 대하여 『표시·광고의 공정화에 관한 법률』 제3조의 규정에 위반하는 표시·광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 부담합니다.</li>
                        <li>회사는 수신거절의 의사를 명백히 표시한 이용자에 대해서는 영리목적의 광고성 이메일을 발송하지 않습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 19조 (회원의 계정에 대한 의무)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>{'제18조의 경우를 제외하고, 회원의 계정 및 계정에 접속할 수 있는 정보(ID, 비밀번호)에 관한 관리책임은 회원에게 있습니다.'}</li>
                        <li>회원의 계정을 통해 일어난 구매, 게시글 작성 등의 모든 활동은 계정을 소유한 회원의 활동으로 간주합니다. 따라서 회원은 본인의 계정을 타인에게 대여 또는 양도할 수 없습니다.</li>
                        <li>회원이 자신의 ID 및 비밀번호를 도난 당하거나 제3자가 계정을 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우에는 그에 따라야 합니다.</li>
                        <li>회사는 회원이 상기 제1항, 제2항, 제3항을 위반하여 회원에게 발생한 손해에 대하여 그 손해 발생의 원인이 회사의 고의 또는 과실에 기인하지 않는 한 책임을 부담하지 않습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 20조 (이용자의 의무)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>이용자는 관계법령, 이 약관의 규정, 이용안내 등 회사가 통지하는 사항을 준수하여야 합니다.</li>
                        <li>회사는 회원이 본 조의 금지행위를 행하는 경우 서비스의 일부 또는 전부를 이용 정지하거나 서비스 이용계약을 임의로 해지할 수 있습니다. 회사는 필요한 경우 회원의 금지행위 사실을 관련 정부기관 또는 사법기관에 통지할 수 있습니다.</li>
                        <li>이용자는 회사의 서비스이용과 관련하여 다음 각호의 행위를 하여서는 안됩니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">개인정보의 등록(변경의 경우를 포함함) 시 허위내용을 등록</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">회사의 사이버몰에 게시된 정보를 임의로 변경</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">회사가 허락하지 않은 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['5'] before:text-[10px] before:flex before:items-center before:justify-center">회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['6'] before:text-[10px] before:flex before:items-center before:justify-center">외설 또는 폭력적인 메시지·화상·음성 기타 공서양속에 반하는 정보를 화면에 공개 또는 게시하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['7'] before:text-[10px] before:flex before:items-center before:justify-center">반복적인 비정상적 구매행위로 회사의 영업을 방해하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['8'] before:text-[10px] before:flex before:items-center before:justify-center">타인의 명의, 카드정보, 계좌정보, 주소정보 등 제3자 정보를 도용하여 회사가 제공하는 서비스를 이용하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['9'] before:text-[10px] before:flex before:items-center before:justify-center">고객응대근로자에게 폭언 욕설을 하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['10'] before:text-[10px] before:flex before:items-center before:justify-center">기타 공서양속에 위배되는 불법적이거나 부당한 행위</li>
                        </ol>
                        </ol>
                    </section>
                </div>

                <div className="mb-24">
                    <h1 className="text-xl font-bold mb-6 text-[#322A24]">제 6장 부가서비스의 이용</h1>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 21조 (적립 포인트)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>사는 회원이 상품을 구매하거나, 출석체크 참여 등의 경우 회원에게 일정한 포인트를 부여할 수 있습니다. 다만, 상품구매 후 취소 또는 반품을 할 경우에는 상품 구매 시 회사가 부여한 적립 포인트를 회수합니다. 이 외 구체적인 운영방법은 회사의 운영정책에 의합니다.</li>
                        <li>적립 포인트는 상품 구매시 사용가능 기준 하에 현금가액과 동일하게 사용할 수 있으나 (단 사용불가 사전고지품목 제외), 현금으로 환불되지는 않습니다. 또한, 적립 포인트는 회원에게만 제공되며 타인에게 양도할 수 없습니다.</li>
                        <li>계정간 적립 포인트 합산 및 이동은 불가하며 적립 포인트가 부여된 계정을 통해서만 사용 가능합니다.</li>
                        <li>만 14세 미만의 미성년자 회원이 적립 포인트를 사용하는 경우, 최초 회원가입 시 법정대리인의 동의를 통해 회원 가입을 완료한 것으로 적립 포인트 사용에 대한 법정대리인의 동의도 획득한 것으로 간주합니다.</li>
                        <li>부여된 적립 포인트는 부여일로부터 1년(12개월)간 유효하며 다음의 경우 적립금이 자동적으로 소멸하게 됩니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">회원을 탈퇴한 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">유효기간인 1년(12개월)이 지난 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">1년간 구매 활동이 없을 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">적립금 사용가능 조건 및 소멸에 대한 내용이 별도로 공지되는 경우</li>
                        </ol>
                        <li>부정한 방법으로 적립 포인트를 획득한 사실이 확인될 경우 회사는 회원의 포인트 회수, 계정 삭제 및 형사 고발 등 기타 조치를 취할 수 있습니다.</li>
                        <li>회사는 적립 포인트의 적립기준, 사용방법, 사용기한 및 제한 등을 상품, 회원 등급 및 지급 사유 등에 따라 다르게 정할 수 있으며, 이용자에게 별도로 게시하거나 통지합니다.</li>
                        </ol>
                        <div className="text-sm">
                        {"* 개인정보와 관련된 보다 구체적인 사항은 '개인정보 처리방침'을 따릅니다."}
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 23조 (쿠폰)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 구매서비스를 이용하는 회원에게 지정된 상품 및 적립금으로 교환할 수 있는 쿠폰을 발급할 수 있습니다.</li>
                        <li>쿠폰은 적립금 쿠폰, 음료 및 상품 교환 쿠폰 및 기타 회사의 서비스 내 혜택을 주는 모든 쿠폰을 통칭합니다.</li>
                        <li>회원은 쿠폰이 발급된 계정을 통해 회원 본인의 구매에 한해서만 사용할 수 있으며, 어떠한 경우에도 이를 타인에게 실질적으로 매매 또는 양도할 수 없습니다.</li>
                        <li>계정간 쿠폰의 합산 및 이동이 불가하며 쿠폰이 발급된 계정을 통해서만 사용 가능합니다.</li>
                        <li>쿠폰은 일부 품목이나 금액 또는 회원별 사용가능 수량에 따라 사용이 제한될 수 있으며, 유효기간이 지난 후에는 사용할 수 없습니다.</li>
                        <li>쿠폰을 사용하여 상품을 구입한 후 취소나 반품으로 인하여 환불이 이루어진 경우에는 원칙적으로 쿠폰의 재사용이 가능하나, 재사용이 불가능한 일부 쿠폰 및 단순변심에 의한 구매취소 등의 경우에는 회사의 운영정책에 따라 재사용이 불가할 수 있습니다.</li>
                        <li>회원을 탈퇴할 경우 쿠폰은 즉시 소멸됩니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 19조 (회원의 계정에 대한 의무)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>제18조의 경우를 제외하고, 회원의 계정 및 계정에 접속할 수 있는 정보(ID, 비밀번호)에 관한 관리책임은 회원에게 있습니다.</li>
                        <li>회원의 계정을 통해 일어난 구매, 게시글 작성 등의 모든 활동은 계정을 소유한 회원의 활동으로 간주합니다. 따라서 회원은 본인의 계정을 타인에게 대여 또는 양도할 수 없습니다.</li>
                        <li>회원이 자신의 ID 및 비밀번호를 도난 당하거나 제3자가 계정을 사용하고 있음을 인지한 경우에는 바로 회사에 통보하고 회사의 안내가 있는 경우에는 그에 따라야 합니다.</li>
                        <li>회사는 회원이 상기 제1항, 제2항, 제3항을 위반하여 회원에게 발생한 손해에 대하여 그 손해 발생의 원인이 회사의 고의 또는 과실에 기인하지 않는 한 책임을 부담하지 않습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 20조 (이용자의 의무)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>이용자는 관계법령, 이 약관의 규정, 이용안내 등 회사가 통지하는 사항을 준수하여야 합니다.</li>
                        <li>회사는 회원이 본 조의 금지행위를 행하는 경우 서비스의 일부 또는 전부를 이용 정지하거나 서비스 이용계약을 임의로 해지할 수 있습니다. 회사는 필요한 경우 회원의 금지행위 사실을 관련 정부기관 또는 사법기관에 통지할 수 있습니다.</li>
                        <li>이용자는 회사의 서비스이용과 관련하여 다음 각호의 행위를 하여서는 안됩니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">개인정보의 등록(변경의 경우를 포함함) 시 허위내용을 등록</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">회사의 사이버몰에 게시된 정보를 임의로 변경</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">회사가 허락하지 않은 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['5'] before:text-[10px] before:flex before:items-center before:justify-center">회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['6'] before:text-[10px] before:flex before:items-center before:justify-center">외설 또는 폭력적인 메시지·화상·음성 기타 공서양속에 반하는 정보를 화면에 공개 또는 게시하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['7'] before:text-[10px] before:flex before:items-center before:justify-center">반복적인 비정상적 구매행위로 회사의 영업을 방해하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['8'] before:text-[10px] before:flex before:items-center before:justify-center">타인의 명의, 카드정보, 계좌정보, 주소정보 등 제3자 정보를 도용하여 회사가 제공하는 서비스를 이용하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['9'] before:text-[10px] before:flex before:items-center before:justify-center">고객응대근로자에게 폭언 욕설을 하는 행위</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['10'] before:text-[10px] before:flex before:items-center before:justify-center">기타 공서양속에 위배되는 불법적이거나 부당한 행위</li>
                        </ol>
                        </ol>
                    </section>
                </div>

                <div className="mb-24">
                    <h1 className="text-xl font-bold mb-6 text-[#322A24]">제 7장 기타</h1>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 24조 (저작권의 귀속 및 저작물의 이용)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사가 회원에게 제공하는 서비스에 대한 지식재산권을 포함한 일체의 권리는 회사에 귀속됩니다.</li>
                        <li>회원이 서비스를 이용하는 과정에서 사용한 동영상 또는 사진, 작성한 게시물 및 해시태그 등(이하 “게시물 등”이라 합니다)에 대한 저작권을 포함한 일체의 권리는 별도의 의사표시가 없는 한 각 회원에게 귀속됩니다.</li>
                        <li>이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.</li>
                        <li>게시물 등은 회사가 운영하는 인터넷 사이트 및 모바일 애플리케이션을 통해 노출될 수 있으며, 검색 결과 또는 관련 프로모션 등에도 노출될 수 있습니다. 또한, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 편집되어 게시될 수 있습니다. 이 경우, 회사는 저작권법 규정을 준수하며, 회원은 언제든지 고객센터 또는 각 서비스 내 관리기능을 통해 해당 게시물 등에 대해 삭제, 비공개 등의 조치를 취할 수 있습니다.</li>
                        <li>회원은 자신이 서비스에 게시한 게시물 등을 회사가 국내ㆍ외에서 다음 각 호의 목적으로 사용하는 것을 허락합니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">서비스(서비스가 제3자가 운영하는 사이트 또는 미디어의 일정 영역 내에 입점하는 형태로 제공되는 경우 포함) 내에서 게시물 등의 복제·전송·전시 및 우수 게시물을 서비스 화면에 노출하기 위하여 게시물의 내용 변경 없이 크기를 변환하거나 단순화하는 등의 방식으로 수정하는 것</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">회사의 서비스를 홍보하기 위한 목적으로 미디어·통신사 등에 게시물의 전부 또는 일부를 보도·방영하게 하는 것. 이 경우 회사는 회원의 개별 동의 없이 미디어·통신사 등에게 회원정보를 제공하지 않음</li>
                        </ol>
                        <li>회사는 서비스의 정책 또는 회사가 운영하는 서비스 간 통합 등의 사유로 게시물의 게재 위치를 변경·이전할 수 있으며, 이 경우 사전에 공지합니다.</li>
                        <li>회원이 이용계약을 해지하거나, 회사가 이용계약을 해지하는 경우, 회원이 서비스에 게시한 게시물은 삭제됩니다. 다만, 다른 회원 또는 제3자에게 의하여 다시 게시된 게시물 등 공용 서비스 내에 게재되어 다른 회원의 정상적인 서비스 이용에 필요한 게시물은 삭제되지 않습니다.</li>
                        <li>회사는 전항 이외의 방법으로 회원의 게시물 등을 이용하고자 하는 경우에는 사전에 회원의 동의를 얻습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 25조 (게시물의 관리 및 이용 제한)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>서비스 내 모든 게시물 및 콘텐츠의 관리와 운영 권한은 작가 또는 해당 게시물 및 콘텐츠를 게시한 회원에게 있으며, 회원은 콘텐츠 삭제, 수정 등의 관리 기능이 제공되는 경우 이를 통하여 직접 자신의 게시물을 관리할 수 있습니다. 단, 회원의 요청이 있거나 기타 회사가 서비스의 원활한 운영을 위하여 필요하다고 판단되는 경우, 회사는 게시물의 관리 등과 관련한 사항을 개선, 지원하는 등의 활동을 할 수 있습니다.</li>
                        <li>회원의 게시물 등이 관련 법령에 위반되는 내용을 포함하거나 서비스 내에 게시된 게시물 등이 사생활 침해 또는 명예훼손 등 제3자의 권리를 침해한다고 인정하는 경우 회사는 해당 관련 법령이나 적법한 권리자의 요청에 따라 해당 게시물 등에 대한 게시중단 및 삭제 등의 조치를 취할 수 있습니다.</li>
                        <li>회사는 회원이 서비스 내에 게시한 게시물(회원 간 전달 포함)이 다음 각 호의 경우에 해당한다고 판단되는 경우 회원 또는 제3자의 신고가 없어도 사전 통지 후(단,관련 볍령에서 정하고 있는 경우 사전통지 없이) 삭제, 변경할 수 있으며, 회사는 회원의 게시물로 인한 피해 발생의 원인이 회사의 고의 또는 중과실에 기인하지 않는 한 게시물의 삭제, 변경에 대한 책임을 지지 않습니다.</li>
                        <ol className="space-y-1.5">
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['1'] before:text-[10px] before:flex before:items-center before:justify-center">회사, 다른 회원 또는 제3자를 비방하거나 중상모략으로 명예를 손상시키는 내용인 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['2'] before:text-[10px] before:flex before:items-center before:justify-center">공공질서 및 미풍양속에 위반되는 내용의 게시물에 해당하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['3'] before:text-[10px] before:flex before:items-center before:justify-center">게시물의 내용이 범죄적 행위에 결부된다고 인정되는 내용인 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['4'] before:text-[10px] before:flex before:items-center before:justify-center">회사의 저작권, 제3자의 저작권 등 기타 타인의 권리를 침해하는 내용인 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['5'] before:text-[10px] before:flex before:items-center before:justify-center">회사에서 제공하는 서비스와 관련 없는 내용인 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['6'] before:text-[10px] before:flex before:items-center before:justify-center">불필요하거나 승인되지 않은 상업적 목적의 광고, 판촉물을 게재하는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['7'] before:text-[10px] before:flex before:items-center before:justify-center">타인의 ID, 명의 등을 무단으로 도용하여 작성한 내용이거나, 타인이 입력한 정보를 무단으로 위ㆍ변조한 내용인 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['8'] before:text-[10px] before:flex before:items-center before:justify-center">동일한 내용을 중복하여 다수 게시하는 등 게시의 목적에 어긋나는 경우</li>
                            <li className="pl-6 relative before:absolute before:left-2 before:top-1 before:w-3 before:h-3 before:rounded-full before:border before:border-gray-400 before:content-['9'] before:text-[10px] before:flex before:items-center before:justify-center">기타 관계 법령에 위반되는 경우</li>
                        </ol>
                        <li>정보통신망 이용촉진 및 정보보호 등에 관한 법률의 규정에 의해 다른 회원의 공개된 게시물 등이 본인의 사생활을 침해하거나 명예를 훼손하는 등 권리를 침해 받은 회원 또는 제3자는 그 침해사실을 소명하여 회사에 해당 게시물 등의 삭제 또는 반박 내용의 게재를 요청할 수 있습니다. 이 경우 회사는 해당 게시물 등의 권리 침해 여부를 판단할 수 없거나 당사자 간의 다툼이 예상되는 경우 해당 게시물 등에 대한 접근을 임시적으로 차단하는 조치(이하 “임시조치”라 합니다)를 회사가 정한 임시조치 기간 동안 취합니다.</li>
                        <li>본인의 게시물 등이 임시적으로 차단된 회원은 회사에 해당 게시물 등을 복원해 줄 것을 요청(이하 “재게시 청구”라 합니다)할 수 있으며, 회사는 임시조치된 게시물의 명예훼손 등 판단에 대한 방송통신심의위원회 심의 요청에 대한 게시자 및 삭제 등 신청인의 동의가 있는 경우 게시자 및 삭제 등 신청인을 대리하여 이를 요청하고 동의가 없는 경우 회사가 이를 판단하여 게시물 등의 복원 여부를 결정합니다. 게시자의 재게시 청구가 있는 경우 임시조치 기간 내에 방송통신심의위원회 또는 회사의 결정이 있으면 그 결정에 따르고 그 결정이 임시조치 기간 내에 있지 않는 경우 해당 게시물 등은 임시조치 만료일 이후 복원됩니다. 재게시 청구가 없는 경우 해당 게시물 등은 임시조치 기간 만료 이후 삭제됩니다.</li>
                        <li>회원의 게시물 등으로 인한 법률상 이익 침해를 근거로, 다른 회원 또는 제3자가 회원 또는 회사를 대상으로 하여 민·형사상의 법적 조치(예: 형사고소, 가처분 신청∙손해배상청구 등 민사소송의 제기)를 취하는 경우, 회사는 동 법적 조치의 결과인 법원의 확정판결이 있을 때까지 관련 게시물 등에 대한 접근을 잠정적으로 제한할 수 있습니다. 게시물 등의 접근 제한과 관련한 법적 조치의 소명, 법원의 확정 판결에 대한 소명 책임은 게시물 등에 대한 조치를 요청하는 자가 부담합니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 26조 (사이트의 연결)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사에서 하이퍼링크(하이퍼링크의 대상에는 문자, 그림 및 동화상 등이 포함됨)방식을 통해 타 사이트에 연결시킬 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 27조 (정보의 제공 및 광고의 게재)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 서비스를 운영함에 있어 각종 정보를 서비스 화면에 게재하거나 e-mail 및 서신우편 등의 방법으로 회원에게 제공할 수 있습니다.</li>
                        <li>회사는 서비스의 운영과 관련하여 홈페이지, 서비스 화면, 문자메시지, e-mail 등에 광고 등을 게재할 수 있습니다</li>
                        <li>회원이 서비스상에 게재되어 있는 광고를 이용하거나 서비스를 통한 광고주의 판촉활동에 참여하는 등의 방법으로 교신 또는 거래를 하는 것은 회원과 광고주간의 거래이므로, 회원과 광고주간에 문제가 발생할 경우 회원과 광고주가 직접 해결합니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 28조 (분쟁해결)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 고객센터를 운영합니다.</li>
                        <li>회사는 이용자로부터 제출되는 불만사항 및 의견을 우선적으로 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보합니다.</li>
                        <li>회사와 이용자간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시・도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</li>
                        </ol>
                    </section>

                    <section className="mb-6">
                        <h2 className="font-semibold mb-2">제 29조 (재판권 및 준거법)</h2>
                        <ol className="list-decimal pl-5 text-sm space-y-1.5">
                        <li>회사와 이용자간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.</li>
                        <li>회사와 이용자간에 제기된 전자상거래 소송에는 대한민국법을 적용합니다.</li>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>이용약관 버전번호 : v1.0</li>
                            <li>현재 이용약관 고지일자 : OOOO년 OO월 OO일</li>
                            <li>현재 이용약관 시행일자 : OOOO년 OO월 OO일</li>
                        </ul>
                        </ol>
                    </section>
                </div>
            </main>
        </section>
    )
}
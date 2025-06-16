import CancelReturnExchangeList from "./components/cancel-return-exchange-list";

export default function ConfirmReturnChangePage() {
    return (
        <main className="w-[739px] mx-auto ml-10">
            <CancelReturnExchangeList contents={[ 1, 2 ]} />
        </main>
    )
}
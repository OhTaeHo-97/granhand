import RequestListHeader from "../request-list/components/header";
import CancelResult from "./components/cancel";
import RefundResult from "./components/refund";

export default function ResultPage() {
    return (
        <div className="container mx-auto px-6 pt-8 min-h-screen">
            <RequestListHeader />
            {/* <CancelResult /> */}
            <RefundResult />
        </div>
    )
}
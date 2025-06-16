import ScentInfo from "../components/scent-info";

export default function ScentDetailPage() {
    return (
        <ScentInfo viewMode="detail" contents={{
            language: 'ko',
            category: '',
            description: '',
            note: '',
            guide: ''
        }} />
    )
}
import ScentInfo from "../../components/scent-info";

export default function ScentEditPage() {
    return (
        <ScentInfo viewMode="edit" contents={{
            language: 'ko',
            category: '',
            description: '',
            note: '',
            guide: ''
        }} />
    )
}
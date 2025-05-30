import FaqContents from "../components/faq-contents";

export default async function FaqDetailPage({ params }: { params: { id: number } }) {
    const { id } = params
    return (
        <FaqContents category="detail" id={id} />
    )
}
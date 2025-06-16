import FaqContents from "../components/faq-contents";

export default async function FaqDetailPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params
    return (
        <FaqContents category="detail" id={id} />
    )
}
import FaqContents from "../../components/faq-contents";

export default async function EditFaqPage({ params }: { params: Promise<{ id: number }> }) {
    const { id } = await params

    return (
        <FaqContents category="edit" id={id} />
    )
}
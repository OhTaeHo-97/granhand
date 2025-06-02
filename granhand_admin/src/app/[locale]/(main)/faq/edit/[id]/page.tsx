import FaqContents from "../../components/faq-contents";

export default function EditFaqPage({ params }: { params: { id: number } }) {
    const { id } = params

    return (
        <FaqContents category="edit" id={id} />
    )
}
import EntryElements from "./components/entry-elem";

// const awards = Array.from({ length: 9 }, (_, i) => ({
//     id: i + 1,
//     title: "GRANHAND, Film Photography Award\n2025 그랑핸드 필름사진상",
//     date: "접수 2025.07.17(목)~20(일) | 발표 2025.01.28(화)",
//     image: "/awards-participate.png" // 임시 이미지
// }));

export default function EventRegistrationPage() {
    return (
        <div>
            <EntryElements />
        </div>
    )
}
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface ImageItem {
    id: string; // 고유 ID
    file: File; // 실제 File 객체
}

export default function ImageList({
    images,
    editingImageId,
    imageOrders,
    setImages,
    setEditingImageId,
    setImageOrders,
    t
}: {
    images: ImageItem[],
    editingImageId: string | null,
    imageOrders?: number[]
    setImages: React.Dispatch<React.SetStateAction<ImageItem[]>>,
    setEditingImageId: React.Dispatch<React.SetStateAction<string | null>>,
    setImageOrders?: React.Dispatch<React.SetStateAction<number[]>>,
    t: (key: string) => string
}) {
    const inputRef = useRef<HTMLInputElement | null>(null)

    // const deletedIndex = images.findIndex(img => img.id === id);
    // setImages(prevImages => prevImages.filter(item => item.id !== id));
    // setImageOrders(prevOrders => prevOrders.filter((_, index) => index !== deletedIndex));
    
    // if (editingImageId === id) {
    //     setEditingImageId(null);
    // }

    const handleDelete = (id: string) => {
        const deletedIndex = images.findIndex(img => img.id === id)
        const deletedOrder = imageOrders && imageOrders[deletedIndex]

        setImages(prevImages => prevImages.filter(item => item.id !== id))

        // if((setImageOrders && deletedOrder) &&
        //     setImageOrders((prevOrders) => 
        //         prevOrders
        //             .filter((_, index) => index !== deletedIndex) // 삭제된 순서 제거
        //             .map(order => order > deletedOrder ? order - 1 : order) // 큰 순서들을 1씩 감소
        //     )
        // )
        // setImageOrders(prevOrders => prevOrders.filter((_, index) => index !== deletedIndex))
        if (setImageOrders && deletedOrder !== undefined) {
            setImageOrders((prevOrders) => {
                const newOrders = prevOrders.filter((_, index) => index !== deletedIndex); // 삭제된 순서 제거
                // 삭제된 순서보다 큰 순서들을 1씩 감소
                return newOrders.map(order => order > deletedOrder ? order - 1 : order);
            });
        }

        if(editingImageId === id) {
            setEditingImageId(null)
        }

        // setImages(prevImages => prevImages.filter(item => item.id !== id))
        // // 삭제 후 혹시 해당 이미지가 편집 모드였다면 editingImageId를 null로 초기화
        // if (editingImageId === id) {
        //     setEditingImageId(null);
        // }
    }

    // 파일 선택 시 호출될 단일 핸들러 함수 (컴포넌트 최상위에 정의)
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files
        if (!files || files.length === 0) {
            // 파일 선택 취소 시
            setEditingImageId(null) // 변경 모드 해제
            if (inputRef.current) {
                inputRef.current.value = '' // Input 초기화
            }
            return;
        }
        const file = files[0] // 단일 파일 선택 가정

        // 파일 입력 요소 초기화 (같은 파일 다시 선택 가능하게)
        if (inputRef.current) {
            inputRef.current.value = ''
        }

        // handleFileChange가 실행될 때의 editingImageId 상태 값을 사용하여 모드를 판단
        // 상태 업데이트(setEditingImageId)는 비동기적이므로, 최신 editingImageId 값을
        // 바로 사용하기 위해 함수형 업데이트 내부에서 editingImageId 상태를 참조하거나,
        // 아니면 파일 선택창이 열리기 전에 상태가 확실히 설정되었음을 가정합니다.
        // 여기서는 파일 선택창 열기 전에 상태 설정이 이루어진다는 가정 하에 코드를 작성합니다.
        if (editingImageId !== null) { // editingImageId가 null이 아니면 변경 모드
            // 변경 모드: 해당 ID를 가진 이미지의 file 속성을 업데이트합니다.
            setImages(prevImages =>
                prevImages.map(item =>
                    item.id === editingImageId ? { ...item, file } : item // editingImageId 사용
                )
            )
            setEditingImageId(null) // 변경 모드 종료
        } else { // editingImageId가 null이면 추가 모드
            // 추가 모드: 새 이미지 객체를 생성하고 배열에 추가합니다.
            const newImageItem: ImageItem = {
                id: crypto.randomUUID(), // 고유 ID 생성
                file: file,
            }
            setImages(prevImages => [...prevImages, newImageItem])
            if(setImageOrders) {
                setImageOrders(prevOrders => {
                    const maxOrder = prevOrders.length > 0 ? Math.max(...prevOrders) : 0;
                    return [...prevOrders, maxOrder + 1];
                })
            }
            // {setImageOrders && setImageOrders(prevOrders => {
            //     const maxOrder = prevOrders.length > 0 ? Math.max(...prevOrders) : 0;
            //     return [...prevOrders, maxOrder + 1];
            // })}

            // setImageOrders(prevOrders => [...prevOrders, prevOrders.length])
        }
    }

    // const handleReorder = (dragIndex: number, dropIndex: number) => {
    //     setImageOrders(prevOrders => {
    //         const newOrders = [...prevOrders]
    //         const [removed] = newOrders.splice(dragIndex, 1)
    //         newOrders.splice(dropIndex, 0, removed)
    //         return newOrders
    //     })
    // }

    return (
        <>
            <Input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
            />
            {images.map((img) => (
                <div key={img.id} className="flex flex-col items-center gap-2">
                    <div className="w-40 h-40 relative border">
                        <Image
                            src={URL.createObjectURL(img.file)}  // public/sample1.jpg, sample2.jpg 준비 필요
                            alt={`uploaded-${img.id}`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            className="h-8 px-4"
                            onClick={() => {
                                setEditingImageId(img.id)
                                inputRef.current?.click()
                            }}
                        >
                            {t('edit')}
                        </Button>
                        <Button variant="outline" className="h-8 px-4" onClick={() => handleDelete(img.id)}>{t('delete')}</Button>
                    </div>
                </div>
            ))}
            <div key={'new'} className="flex flex-col items-center gap-2">
                <Button
                    onClick={() => {
                        setEditingImageId(null)
                        inputRef.current?.click()
                    }}
                    className="w-40 h-40 border-2 border-dashed flex items-center justify-center"
                >
                    <Plus className="w-6 h-6" />
                </Button>
            </div>
        </>
    )
}
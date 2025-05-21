'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export default function BulkOrderModal({ open, setOpen }: { open: boolean, setOpen: (value: boolean) => void }) {
    const [selectedFileName, setSelectedFileName] = useState('')
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [uploadStatus, setUploadStatus] = useState<UploadStatus>('idle')
    const [uploadError, setUploadError] = useState<string | null>(null)

    // Function to handle file upload - this is a placeholder
    const handleFileUpload = async () => {
        if (!selectedFile) {
            setUploadError("업로드할 파일이 선택되지 않았습니다.");
            setUploadStatus('error');
            return;
        }

        setUploadStatus('uploading');
        setUploadError(null); // Clear previous errors

        console.log("Uploading file:", selectedFile.name);
    }

    // Function to handle form download - this is a placeholder
    const handleFormDownload = () => {
        console.log("Form download initiated");
        // Add your form download logic here
    }

    return (
        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent className="bg-white max-w-170 min-h-80 w-full overflow-auto mx-auto">
            <DialogHeader>
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">주문 일괄 등록</span></DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111]">
                <p className="mb-4">엑셀 파일을 업로드해 주세요.</p>
                <div className="flex mb-6 justify-between items-center">
                    <p className="mb-4">배송 중 처리하실 주문을 양식에 맞춰 정보를 입력한 후 업로드해 주세요.</p>
                    <Button
                        onClick={handleFormDownload}
                        className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 p-1"
                    >
                        양식 다운로드
                    </Button>
                </div>

                {/* File Upload Section */}
                <div className="flex items-center gap-2 mb-6 p-5 bg-[#322A2408] rounded-md">
                    <Label htmlFor="file-upload-input" className="flex items-center gap-10 whitespace-nowrap">
                        파일 업로드
                        <div className="border w-100 h-10 items-center flex px-4 justify-start">
                            {selectedFileName || '선택된 파일 없음'}
                        </div>
                    </Label>
                    <input
                        type="file"
                        className="hidden"
                        id="file-upload-input" // Unique ID
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                                setSelectedFileName(file.name); // Update the state with the file name
                                setSelectedFile(file); // Store the file object
                                setUploadStatus('idle'); // Reset status on new file selection
                                setUploadError(null);
                            } else {
                                setSelectedFileName('');
                                setSelectedFile(null);
                                setUploadStatus('idle');
                                setUploadError(null);
                            }
                        }}
                        // accept=".xls,.xlsx"
                    />
                    {/* The upload button shown in the image */}
                        <Button
                        variant="outline"
                        onClick={handleFileUpload}
                        className="bg-white text-[#5E5955] hover:bg-gray-300"
                        disabled={!selectedFile || uploadStatus === 'uploading'} // Disable if no file or uploading
                    >
                        업로드
                    </Button>
                </div>

                {/* Display upload status message */}
                {uploadStatus === 'success' && (
                    <p className="text-green-600 text-center">파일 업로드가 성공적으로 완료되었습니다.</p>
                )}
                {uploadStatus === 'error' && (
                    <p className="text-red-600 text-center">오류: {uploadError || '파일 업로드에 실패했습니다.'}</p>
                )}

                {/* Guidelines */}
                <ul className="text-left text-sm text-[#C0BCB6] list-disc list-inside">
                    <li>제공한 양식에 맞는 파일을 첨부하셔야 합니다.</li>
                    <li>운송장 번호는 숫자로만 입력하셔야 합니다.</li>
                    <li>묶음배송 상품의 경우 동일한 운송장 번호를 입력하셔야 합니다. 운송장 번호가 다를 경우 개별 배송 처리됩니다.</li>
                    <li>파일 형식은 반드시 엑셀(xls, xlsx) 파일이어야 합니다.</li>
                </ul>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>취소</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>업로드</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
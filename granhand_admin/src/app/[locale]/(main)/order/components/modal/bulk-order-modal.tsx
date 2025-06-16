'use client'

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';

export default function BulkOrderModal({ open, setOpen, t }: { open: boolean, setOpen: (value: boolean) => void, t: (key: string) => string }) {
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
                <DialogTitle><span className="font-bold text-2xl text-[#111111]">{t('order:bulk_order')}</span></DialogTitle>
            </DialogHeader>
            <div className="mb-6 text-[#111111]">
                <p className="mb-4">{t('order:bulk_order_info1')}</p>
                <div className="flex mb-6 justify-between items-center">
                    <p className="mb-4">{t('order:bulk_order_info2')}</p>
                    <Button
                        onClick={handleFormDownload}
                        className="bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-100 p-1"
                    >
                        {t('order:down_template')}
                    </Button>
                </div>

                {/* File Upload Section */}
                <div className="flex items-center gap-2 mb-6 p-5 bg-[#322A2408] rounded-md">
                    <Label htmlFor="file-upload-input" className="flex items-center gap-10 whitespace-nowrap">
                        {t('order:upload_file')}
                        <div className="border w-100 h-10 items-center flex px-4 justify-start">
                            {selectedFileName || t('order:no_file')}
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
                        {t('order:upload')}
                    </Button>
                </div>

                {/* Display upload status message */}
                {uploadStatus === 'success' && (
                    <p className="text-green-600 text-center">{t('order:successful_upload')}</p>
                )}
                {uploadStatus === 'error' && (
                    <p className="text-red-600 text-center">{t('order:error')}: {uploadError || t('order:fail_upload')}</p>
                )}

                {/* Guidelines */}
                <ul className="text-left text-sm text-[#C0BCB6] list-disc list-inside">
                    <li>{t('order:bulk_order_note1')}</li>
                    <li>{t('order:bulk_order_note2')}</li>
                    <li>{t('order:bulk_order_note3')}</li>
                    <li>{t('order:bulk_order_note4')}</li>
                </ul>
            </div>
            <DialogFooter className="!flex !items-center">
                <Button className="w-1/6 bg-transparent text-[#C0BCB6] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('cancel')}</Button>
                <Button className="w-1/6 text-[#2854f3] hover:bg-[#322A2408]" onClick={() => setOpen(false)}>{t('order:upload')}</Button>
            </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
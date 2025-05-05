'use client';

import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="mt-6 mb-5">
      <label className="block font-semibold text-[#000D2B] text-base mb-2">
        Attachments <span className="font-medium text-[#6B7280]">(PNG, JPG, PDF)</span>
      </label>
      <label
        htmlFor="fileUpload"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="flex items-center justify-center border border-dashed border-[#FAC759] rounded-md py-4 w-full text-[#6B7280] cursor-pointer text-base text-center bg-white transition"
      >
        {file ? file.name : 'Choose a file or drag and drop'}
        <input
          type="file"
          id="fileUpload"
          accept=".png,.jpg,.jpeg,.pdf"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUpload;

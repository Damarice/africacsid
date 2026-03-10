"use client";

import { useState } from 'react';

interface VideoUploadProps {
  onUploadComplete: (url: string, filename: string) => void;
}

export default function VideoUpload({ onUploadComplete }: VideoUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleUpload = async (file: File) => {
    if (!file) return;

    setUploading(true);
    setProgress(0);

    try {
      const response = await fetch(`/api/upload-video?filename=${encodeURIComponent(file.name)}`, {
        method: 'POST',
        body: file,
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const blob = await response.json();
      onUploadComplete(blob.url, file.name);
      setProgress(100);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed. Please try again.');
    } finally {
      setUploading(false);
      setTimeout(() => setProgress(0), 2000);
    }
  };

  return (
    <div className="p-6 border-2 border-dashed border-gray-300 rounded-lg">
      <input
        type="file"
        accept="video/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleUpload(file);
        }}
        disabled={uploading}
        className="w-full p-2 border rounded"
      />
      
      {uploading && (
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-600 mt-2">Uploading... {progress}%</p>
        </div>
      )}
    </div>
  );
}
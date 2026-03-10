"use client";

import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import VideoUpload from "@/components/VideoUpload";

interface UploadedVideo {
  url: string;
  filename: string;
  uploadedAt: string;
}

export default function AdminVideosPage() {
  const [uploadedVideos, setUploadedVideos] = useState<UploadedVideo[]>([]);

  const handleUploadComplete = (url: string, filename: string) => {
    const newVideo: UploadedVideo = {
      url,
      filename,
      uploadedAt: new Date().toISOString(),
    };
    setUploadedVideos(prev => [...prev, newVideo]);
  };

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    alert('URL copied to clipboard!');
  };

  return (
    <>
      <Navbar />
      
      <div className="py-12 md:py-16 bg-white min-h-screen">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Video Management</h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Upload New Video</h2>
            <VideoUpload onUploadComplete={handleUploadComplete} />
          </div>

          {uploadedVideos.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Uploaded Videos</h2>
              <div className="space-y-4">
                {uploadedVideos.map((video, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-900">{video.filename}</h3>
                      <button
                        onClick={() => copyToClipboard(video.url)}
                        className="bg-primary text-white px-3 py-1 rounded text-sm hover:bg-primary-dark"
                      >
                        Copy URL
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Uploaded: {new Date(video.uploadedAt).toLocaleString()}
                    </p>
                    <div className="bg-gray-100 p-2 rounded text-sm font-mono break-all">
                      {video.url}
                    </div>
                    <video 
                      src={video.url} 
                      controls 
                      className="w-full max-w-md mt-2 rounded"
                      preload="metadata"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside text-blue-800 space-y-1">
              <li>Upload your videos using the form above</li>
              <li>Copy the generated URLs</li>
              <li>Update the video URLs in <code>data/gallery.ts</code></li>
              <li>Commit and push the changes to deploy</li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
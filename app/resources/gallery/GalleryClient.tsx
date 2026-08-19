"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages, faVideo, faPlay } from "@fortawesome/free-solid-svg-icons";

interface GalleryMedia {
  id: number;
  title: string;
  src: string;
  type: "image" | "video";
  description?: string;
}

interface GalleryProject {
  id: string;
  name: string;
  shortName: string;
  coverImage: string;
  media: GalleryMedia[];
}

function VideoCard({ item }: { item: GalleryMedia }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
    setStarted(true);
  };

  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-black">
      <div className="relative h-72 overflow-hidden">
        {/* Once started, native controls take over — no overlay interference */}
        <video
          ref={videoRef}
          src={item.src}
          className="w-full h-full object-contain"
          preload="metadata"
          controls={started}
          onEnded={() => setStarted(false)}
        />
        {/* Initial play overlay — only shown before first play */}
        {!started && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/40 group-hover:bg-black/30 transition-colors"
            onClick={handleStart}
          >
            <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
              <FontAwesomeIcon icon={faPlay} className="text-primary text-xl ml-1" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ImageCard({ item, onOpen }: { item: GalleryMedia; onOpen: (item: GalleryMedia) => void }) {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onOpen(item)}
    >
      <div className="relative h-72 overflow-hidden bg-gray-100">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
      </div>
    </div>
  );
}

function LightboxModal({ item, onClose }: { item: GalleryMedia; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white/80 hover:text-white text-3xl font-light leading-none"
          aria-label="Close"
        >
          ×
        </button>
        <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
          <Image
            src={item.src}
            alt={item.title}
            fill
            sizes="100vw"
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default function GalleryClient({ projects }: { projects: GalleryProject[] }) {
  const [activeProject, setActiveProject] = useState<string>(projects[0]?.id ?? "");
  const [activeTab, setActiveTab] = useState<"images" | "videos">("images");
  const [lightboxItem, setLightboxItem] = useState<GalleryMedia | null>(null);

  const currentProject = projects.find((p) => p.id === activeProject) ?? projects[0];

  const images = currentProject?.media.filter((m) => m.type === "image") ?? [];
  const videos = currentProject?.media.filter((m) => m.type === "video") ?? [];

  const handleProjectChange = (id: string) => {
    setActiveProject(id);
    setActiveTab("images");
  };

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="/Who we are.jpeg"
          alt="Gallery"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "center 20%" }}
          quality={75}
          priority
        />
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
            <p className="text-xl md:text-2xl text-white/95">
              Explore photos and videos from our projects across Africa
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom">

          {/* Project selector tabs */}
          <div className="mb-10">
            <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Select a Project</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => handleProjectChange(project.id)}
                  className={`px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 border-2 ${
                    activeProject === project.id
                      ? "bg-primary text-white border-primary shadow-lg scale-105"
                      : "bg-white text-gray-700 border-gray-200 hover:border-primary hover:text-primary"
                  }`}
                >
                  {project.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Current project header */}
          {currentProject && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              <div className="flex flex-col md:flex-row items-stretch">
                {/* Cover image */}
                <div className="relative w-full md:w-48 h-40 md:h-auto flex-shrink-0">
                  <Image
                    src={currentProject.coverImage}
                    alt={currentProject.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
                {/* Project name + media counts */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug">
                    {currentProject.name}
                  </h3>
                  <div className="flex gap-6 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faImages} className="text-primary" />
                      {images.length} {images.length === 1 ? "Photo" : "Photos"}
                    </span>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faVideo} className="text-primary" />
                      {videos.length} {videos.length === 1 ? "Video" : "Videos"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Images / Videos tabs */}
          <div className="flex gap-2 mb-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("images")}
              className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-200 border-b-2 -mb-px ${
                activeTab === "images"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <FontAwesomeIcon icon={faImages} />
              Photos
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === "images" ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
              }`}>
                {images.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab("videos")}
              className={`flex items-center gap-2 px-6 py-3 font-semibold text-sm transition-all duration-200 border-b-2 -mb-px ${
                activeTab === "videos"
                  ? "border-primary text-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <FontAwesomeIcon icon={faVideo} />
              Videos
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                activeTab === "videos" ? "bg-primary text-white" : "bg-gray-100 text-gray-600"
              }`}>
                {videos.length}
              </span>
            </button>
          </div>

          {/* Media grid */}
          {activeTab === "images" && (
            <>
              {images.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {images.map((item) => (
                    <ImageCard key={item.id} item={item} onOpen={setLightboxItem} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-gray-400">
                  <FontAwesomeIcon icon={faImages} className="text-5xl mb-4" />
                  <p className="text-lg font-medium">No photos yet for this project</p>
                </div>
              )}
            </>
          )}

          {activeTab === "videos" && (
            <>
              {videos.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((item) => (
                    <VideoCard key={item.id} item={item} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 text-gray-400">
                  <FontAwesomeIcon icon={faVideo} className="text-5xl mb-4" />
                  <p className="text-lg font-medium">No videos yet for this project</p>
                </div>
              )}
            </>
          )}

        </div>
      </section>

      <CTASection />
      <Footer />

      {/* Lightbox */}
      {lightboxItem && (
        <LightboxModal item={lightboxItem} onClose={() => setLightboxItem(null)} />
      )}
    </>
  );
}

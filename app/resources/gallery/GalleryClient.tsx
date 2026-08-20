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
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [lightboxItem, setLightboxItem] = useState<GalleryMedia | null>(null);

  const currentProject = projects.find((p) => p.id === activeProject) ?? projects[0];

  // Extract unique captions (sub-projects/locations) from all media
  const allCaptions = currentProject?.media
    .map((m) => m.description?.trim())
    .filter((desc): desc is string => !!desc && desc.length > 0) ?? [];
  const uniqueCaptions = Array.from(new Set(allCaptions)).sort();

  // Filter media by active filter
  const filterMedia = (media: GalleryMedia[]) => {
    if (activeFilter === "all") return media;
    return media.filter((m) => m.description?.trim() === activeFilter);
  };

  const allImages = currentProject?.media.filter((m) => m.type === "image") ?? [];
  const allVideos = currentProject?.media.filter((m) => m.type === "video") ?? [];
  
  const images = filterMedia(allImages);
  const videos = filterMedia(allVideos);

  const handleProjectChange = (id: string) => {
    setActiveProject(id);
    setActiveTab("images");
    setActiveFilter("all");
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

          {/* No projects yet */}
          {projects.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <FontAwesomeIcon icon={faImages} className="text-6xl mb-6" />
              <h2 className="text-2xl font-semibold text-gray-500 mb-2">No gallery content yet</h2>
              <p className="text-gray-400">
                Add gallery posts in WordPress to populate this page.
              </p>
            </div>
          )}

          {projects.length > 0 && (
            <>
              {/* Project dropdown filter */}
              <div className="mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="w-full sm:w-auto sm:min-w-[340px]">
                  <label htmlFor="project-select" className="block text-sm font-semibold text-gray-600 mb-2">
                    Select a Project
                  </label>
                  <div className="relative">
                    <select
                      id="project-select"
                      value={activeProject}
                      onChange={(e) => handleProjectChange(e.target.value)}
                      className="w-full appearance-none bg-white border-2 border-gray-200 rounded-xl px-4 py-3 pr-10 text-gray-800 font-semibold text-sm focus:outline-none focus:border-primary transition-colors cursor-pointer shadow-sm"
                    >
                      {projects.map((project) => (
                        <option key={project.id} value={project.id}>
                          {project.name}
                        </option>
                      ))}
                    </select>
                    {/* Custom chevron */}
                    <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Media count summary */}
                {currentProject && (
                  <div className="flex gap-4 text-sm text-gray-500 self-end pb-1">
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faImages} className="text-primary" />
                      {images.length} {images.length === 1 ? "Photo" : "Photos"}
                    </span>
                    <span className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faVideo} className="text-primary" />
                      {videos.length} {videos.length === 1 ? "Video" : "Videos"}
                    </span>
                  </div>
                )}
              </div>

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
                    {allImages.length}
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
                    {allVideos.length}
                  </span>
                </button>
              </div>

              {/* Caption filters (sub-projects/locations) */}
              {uniqueCaptions.length > 0 && (
                <div className="mb-8">
                  <p className="text-sm font-semibold text-gray-600 mb-3">Filter by Sub-Project / Location:</p>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setActiveFilter("all")}
                      className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                        activeFilter === "all"
                          ? "bg-primary text-white shadow-md"
                          : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
                      }`}
                    >
                      All
                    </button>
                    {uniqueCaptions.map((caption) => (
                      <button
                        key={caption}
                        onClick={() => setActiveFilter(caption)}
                        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                          activeFilter === caption
                            ? "bg-primary text-white shadow-md"
                            : "bg-white text-gray-700 border border-gray-200 hover:border-primary hover:text-primary"
                        }`}
                      >
                        {caption}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Media grid */}
              {activeTab === "images" && (
                images.length > 0 ? (
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
                )
              )}

              {activeTab === "videos" && (
                videos.length > 0 ? (
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
                )
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
